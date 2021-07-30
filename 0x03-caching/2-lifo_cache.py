#!/usr/bin/python3
""" LIFOCache module
"""
BaseCaching = __import__('base_caching').BaseCaching


class LIFOCache(BaseCaching):
    """ LIFOCache defines:
      - Caching system inherit from BaseCaching
    """

    def __init__(self):
        """Instantiation
        """
        super().__init__()
        self.queue = []

    def put(self, key, item):
        """Assign items to cache data"""
        if key is not None and item is not None:
            self.cache_data[key] = item
            if len(self.cache_data) > BaseCaching.MAX_ITEMS:
                delete_key = self.queue[len(self.queue) - 1]
                self.cache_data.pop(delete_key)
                print('DISCARD: ' + delete_key)
                self.queue.remove(delete_key)
            if key in self.queue:
                self.queue.remove(key)
            self.queue.append(key)

    def get(self, key):
        """Get item value from key in dict"""
        if key is None or key not in self.cache_data:
            return None
        return self.cache_data[key]
