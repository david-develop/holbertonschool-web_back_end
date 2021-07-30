#!/usr/bin/python3
""" BasicCache module
"""
BaseCaching = __import__('base_caching').BaseCaching


class BasicCache(BaseCaching):
    """ BasicCache defines:
      - Basic caching system inherit from BaseCaching
    """

    def put(self, key, item):
        """Assign items to cache data"""
        if key is None or item is None:
            pass
        else:
            self.cache_data[key] = item

    def get(self, key):
        """Get item value from key in dict"""
        if key is None or key not in self.cache_data:
            return None
        return self.cache_data[key]
