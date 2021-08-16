#!/usr/bin/env python3
"""
Auth Module
"""
from bcrypt import hashpw, gensalt


def _hash_password(password: str) -> bytes:
    """Method that takes in a password string arguments and returns
    salted hash bytes.
    """
    hashed = hashpw(password.encode(), gensalt())

    return hashed
