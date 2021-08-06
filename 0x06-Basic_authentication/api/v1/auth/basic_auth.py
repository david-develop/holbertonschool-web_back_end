#!/usr/bin/env python3
""" BasicAuth module
"""
from api.v1.auth.auth import Auth


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
