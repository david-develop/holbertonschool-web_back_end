#!/usr/bin/python3
""" LFUCache module
"""
BaseCaching = __import__('base_caching').BaseCaching


class LFUCache(BaseCaching):
    """ LFUCache defines:
      - Caching system inherit from BaseCaching
    """

    def __init__(self):
        """Instantiation
        """
        super().__init__()
        self.queue_used = {}

    def put(self, key, item):
        """Assign items to cache data"""
        if key is not None and item is not None:
            self.cache_data[key] = item
            if len(self.cache_data) > BaseCaching.MAX_ITEMS:
                min_key = min(self.queue_used, key=self.queue_used.get)
                self.cache_data.pop(min_key)
                print('DISCARD: ' + min_key)
                self.queue_used.pop(min_key)
            if key not in self.queue_used:
                self.queue_used[key] = 1
            else:
                self.queue_used[key] += 1

    def get(self, key):
        """Get item value from key in dict"""
        if key is None or key not in self.cache_data:
            return None
        self.queue_used[key] += 1
        return self.cache_data[key]
