#!/usr/bin/env python3
"""
Auth Module
"""
from bcrypt import hashpw, gensalt
from db import DB
from user import User
from sqlalchemy.orm.exc import NoResultFound


def _hash_password(password: str) -> bytes:
    """Method that takes in a password string arguments and returns
    salted hash bytes.
    """
    hashed = hashpw(password.encode(), gensalt())

    return hashed


class Auth:
    """Auth class to interact with the authentication database.
    """

    def __init__(self):
        self._db = DB()

    def register_user(self, email: str, password: str) -> User:
        """Save an user to the database using self._db and return the User
        object.
        """
        found_user = self._db._session.query(User).filter_by(
            email=email).first()
        if found_user is None:
            hashed = _hash_password(password)
            new_user = self._db.add_user(email, hashed)
            return new_user
        else:
            raise ValueError(f'User {email} already exists')
