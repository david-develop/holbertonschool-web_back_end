#!/usr/bin/env python3
"""
Exercise Module
"""
from typing import Callable, Union
import redis
import uuid


class Cache:
    """
    Cache class
    """

    def __init__(self) -> None:
        """Instantiation"""
        self._redis = redis.Redis()
        self._redis.flushdb()

    def store(self, data: Union[str, bytes, int, float]) -> str:
        """Method that takes a data argument and returns a string key"""
        ran_key = str(uuid.uuid4())
        self._redis.set(ran_key, data)
        return ran_key

    def get(self, key: str, fn: Callable = None) -> Union[str,
                                                          bytes,
                                                          int,
                                                          float]:
        """Method that take a key string argument and an optional Callable
        and return a value with desiret format"""
        if not fn:
            value = self._redis.get(key)
            return value
        value = fn(self._redis.get(key))
        return value

    def get_str(self, key: str) -> str:
        """Method that take a key string argument and return a value as str"""
        return self.get(key, str)

    def get_int(self, key: str) -> int:
        """Method that take a key string argument and return a value as int"""
        return self.get(key, int)
