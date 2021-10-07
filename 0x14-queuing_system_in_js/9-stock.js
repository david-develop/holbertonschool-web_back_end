import { createClient } from 'redis';

const { promisify } = require('util');
const express = require('express');

// --- list of products ---
const listProducts = [
  {
    itemId: 1, itemName: 'Suitcase 250', price: 50, initialAvailableQuantity: 4,
  },
  {
    itemId: 2, itemName: 'Suitcase 450', price: 100, initialAvailableQuantity: 10,
  },
  {
    itemId: 3, itemName: 'Suitcase 650', price: 350, initialAvailableQuantity: 2,
  },
  {
    itemId: 4, itemName: 'Suitcase 1050', price: 550, initialAvailableQuantity: 0,
  },
];

// --- redis client ---
const client = createClient();

client.on('error', (error) => {
  console.log(`Redis client not connected to the server: ${error.message}`);
});

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

// --- express app ---
const app = express();
const hostname = 'localhost';
const port = 1245;

app.use(express.json());

app.listen(port, () => {
  console.log(`API available on ${hostname} port ${port}`);
});

// --- local utils ---
const getItemById = (id) => listProducts.find((item) => item.itemId === id);

const reserveStockById = (itemId, stock) => {
  client.set(`item.${itemId}`, stock, (err, reply) => {
    if (err) console.log(`reserveStockById Error: ${err}`);
    console.log(`reserveStockById Reply: ${reply}`);
  });
};

const getCurrentReservedStockById = async (itemId) => {
  const getAsync = promisify(client.get).bind(client);
  const item = await getAsync(`item.${itemId}`);
  return item;
};

// --- routes ---
app.get('/list_products', (req, res) => {
  res.json(listProducts);
});

app.get('/list_products/:itemId', async (req, res) => {
  const itemId = parseInt(req.params.itemId, 10);
  const item = getItemById(itemId);
  if (!item) return res.json({ status: 'Product not found' });

  const currentStock = await getCurrentReservedStockById(itemId);
  const stock = currentStock !== null ? currentStock : item.initialAvailableQuantity;
  item.currentQuantity = stock;
  return res.json(item);
});

app.get('/reserve_product/:itemId', async (req, res) => {
  const itemId = parseInt(req.params.itemId, 10);
  const item = getItemById(itemId);

  if (!item) return res.json({ status: 'Product not found' });

  let currentStock = await getCurrentReservedStockById(itemId);
  if (currentStock === null) currentStock = item.initialAvailableQuantity;

  if (currentStock <= 0) return res.json({ status: 'Not enough stock available', itemId: item.Id });

  reserveStockById(itemId, parseInt(currentStock, 10) - 1);
  return res.json({ status: 'Reservation confirmed', itemId: item.itemId });
});

module.exports = app;
