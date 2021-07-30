#!/usr/bin/python3
""" FIFOCache module
"""
BaseCaching = __import__('base_caching').BaseCaching


class FIFOCache(BaseCaching):
    """ FIFOCache defines:
      - Caching system inherit from BaseCaching
    """

    def __init__(self):
        """Instantiation
        """
        super().__init__()

    def put(self, key, item):
        """Assign items to cache data"""
        if key is not None and item is not None:
            self.cache_data[key] = item
            if len(self.cache_data) > BaseCaching.MAX_ITEMS:
                first_key = next(iter(self.cache_data))
                self.cache_data.pop(first_key)
                print('DISCARD: ' + first_key)

    def get(self, key):
        """Get item value from key in dict"""
        if key is None or key not in self.cache_data:
            return None
        return self.cache_data[key]
