#!/usr/bin/env python3
"""
Auth Module
"""
from bcrypt import hashpw, gensalt
from db import DB
from user import User
from sqlalchemy.orm.exc import NoResultFound
import bcrypt
from uuid import uuid4


def _hash_password(password: str) -> bytes:
    """Method that takes in a password string arguments and returns
    salted hash bytes.
    """
    hashed = hashpw(password.encode(), gensalt())

    return hashed


def _generate_uuid() -> str:
    """Returns a string representation of a new UUID"""
    new_uuid = uuid4()
    return str(new_uuid)


class Auth:
    """Auth class to interact with the authentication database.
    """

    def __init__(self):
        self._db = DB()

    def register_user(self, email: str, password: str) -> User:
        """Save an user to the database using self._db and return the User
        object.
        """
        try:
            found_user = self._db.find_user_by(email=email)
        except NoResultFound:
            hashed_password = _hash_password(password)
            found_user = self._db.add_user(email, hashed_password)
            return found_user
        else:
            raise ValueError(f'User {email} already exists')

    def valid_login(self, email: str, password: str) -> bool:
        """Check credentials"""
        if password is None or type(password) is not str:
            return False

        try:
            found_user = self._db.find_user_by(email=email)
        except NoResultFound:
            return False
        else:
            return bcrypt.checkpw(password.encode(),
                                  found_user.hashed_password)

    def create_session(self, email: str) -> str:
        """Method that  takes an email string argument and returns the session
        ID as a string"""
        try:
            found_user = self._db.find_user_by(email=email)
        except NoResultFound:
            return None
        else:
            new_uuid = _generate_uuid()
            self._db.update_user(found_user.id, session_id=new_uuid)
            return new_uuid

    def get_user_from_session_id(self, session_id: str) -> User:
        """Method that takes a single session_id string argument and returns
        the corresponding User or None."""
        try:
            found_user = self._db.find_user_by(session_id=session_id)
        except NoResultFound:
            return None
        else:
            if found_user.session_id is None:
                return None
            return found_user

    def destroy_session(self, user_id: int) -> None:
        """Method takes a single user_id integer argument updates the
        corresponding user’s session ID to None and returns None.
        """
        try:
            found_user = self._db.find_user_by(id=user_id)
        except NoResultFound:
            return None
        else:
            self._db.update_user(found_user.id, session_id=None)

    def get_reset_password_token(self, email: str) -> str:
        """Find the user, generate UUID and update reset_token"""
        try:
            found_user = self._db.find_user_by(email=email)
        except NoResultFound:
            raise ValueError
        else:
            reset_token = _generate_uuid()
            self._db.update_user(found_user.id, reset_token=reset_token)
            return reset_token
