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


def is_valid(hashed_password: bytes, password: str) -> bool:
    """
    is_valid function that takes a hashed password and validate
    if it is valid
    """
    return bcrypt.checkpw(password.encode(), hashed_password)
