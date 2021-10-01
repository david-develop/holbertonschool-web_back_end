const express = require('express');

const app = express();
const hostname = 'localhost';
const port = 7865;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`)
});

app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  // console.log(req.body);
  res.send(`Welcome ${req.body.userName}`)
});

app.listen(port, () => {
  console.log(`API available on ${hostname} port ${port}`);
});

module.exports = app;