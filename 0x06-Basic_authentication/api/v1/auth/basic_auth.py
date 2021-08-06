#!/usr/bin/env python3
""" BasicAuth module
"""
from typing import Tuple
from api.v1.auth.auth import Auth
import base64


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
