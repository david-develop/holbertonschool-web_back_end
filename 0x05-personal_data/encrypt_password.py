#!/usr/bin/env python3
"""
hash_password Module
"""
import bcrypt


def hash_password(password: str) -> bytes:
    """
    hash_password function that takes a string and hash it
    """
    hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt())

    return hashed
