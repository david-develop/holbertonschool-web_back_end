#!/usr/bin/env python3
""" BasicAuth module
"""
from typing import Tuple, TypeVar
from api.v1.auth.auth import Auth
import base64
from models.user import User


class BasicAuth(Auth):
    """BasicAuth class
    """

    def extract_base64_authorization_header(self,
                                            authorization_header: str) -> str:
        """Return the Base64 part of the Authorization header
        """
        if authorization_header is None or type(authorization_header) != str\
                or authorization_header.split(' ')[0] != 'Basic':
            return None
        return authorization_header.split(' ')[1]

    def decode_base64_authorization_header(
            self, base64_authorization_header: str) -> str:
        """Return the decoded value as UTF8 string"""
        if base64_authorization_header is None or\
                type(base64_authorization_header) != str:
            return None
        try:
            encoded = base64_authorization_header.encode('utf-8')
            decoded64 = base64.b64decode(encoded)
            return decoded64.decode('utf-8')
        except BaseException:
            return None

    def extract_user_credentials(
            self,
            decoded_base64_authorization_header: str) -> Tuple[str, str]:
        """Return the user email and the user password"""
        if decoded_base64_authorization_header is None or\
            type(decoded_base64_authorization_header) != str or\
                decoded_base64_authorization_header.find(':') == -1:
            return (None, None)
        data = decoded_base64_authorization_header.split(':')
        return (data[0], data[1])

    def user_object_from_credentials(self, user_email: str,
                                     user_pwd: str) -> TypeVar('User'):
        """Return None if user_pwd is not the password of the User 
        instance found"""
        if user_email is None or type(user_email) != str:
            return None
        if user_pwd is None or type(user_pwd) != str:
            return None

        try:
            found_users = User.search({'email': user_email})
        except Exception:
            return None

        for user in found_users:
            if user.is_valid_password(user_pwd):
                return user

        return None
