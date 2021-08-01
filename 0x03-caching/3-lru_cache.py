#!/usr/bin/python3
""" LRUCache module
"""
BaseCaching = __import__('base_caching').BaseCaching


class LRUCache(BaseCaching):
    """ LRUCache defines:
      - Caching system inherit from BaseCaching
    """

    def __init__(self):
        """Instantiation
        """
        super().__init__()
        self.queue_used = []

    def put(self, key, item):
        """Assign items to cache data"""
        if key is not None and item is not None:
            self.cache_data[key] = item
            if len(self.cache_data) > BaseCaching.MAX_ITEMS:
                delete_key = self.queue_used[0]
                self.cache_data.pop(delete_key)
                print('DISCARD: ' + delete_key)
                self.queue_used.remove(delete_key)
            if key in self.queue_used:
                self.queue_used.remove(key)
            self.queue_used.append(key)

    def get(self, key):
        """Get item value from key in dict"""
        if key is None or key not in self.cache_data:
            return None
        if key in self.queue_used:
            self.queue_used.remove(key)
        self.queue_used.append(key)
        return self.cache_data[key]
