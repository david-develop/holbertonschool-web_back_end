#!/usr/bin/env python3
""" BasicAuth module
"""
from api.v1.auth.auth import Auth
import base64


class BasicAuth(Auth):
    """BasicAuth class
    """

    def extract_base64_authorization_header(self,
                                            authorization_header: str) -> str:
        """returns the Base64 part of the Authorization header
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
            return base64.b64decode(base64_authorization_header).decode("utf8")
        except:
            return None
