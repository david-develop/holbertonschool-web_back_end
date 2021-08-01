#!/usr/bin/env python3
"""
hash_password Module
"""
from typing import ByteString
import bcrypt


def hash_password(password: str) -> ByteString:
    """
    hash_password function that takes a string and hash it
    """
    hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
    return hashed
