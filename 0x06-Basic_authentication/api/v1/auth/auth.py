#!/usr/bin/env python3
""" Auth module
"""
from typing import List, TypeVar
from flask import request


class Auth():
    """Auth class
    """

    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        """Method that return false
        """
        if path is None or (excluded_paths is None or
                            len(excluded_paths) == 0):
            return True
        if path[-1:] != '/':
            path += '/'
        if path not in excluded_paths:
            return True
        return False

    def authorization_header(self, request=None) -> str:
        """Method that return None
        """
        if request is None:
            return None
        header_auth = request.headers.get('Authorization')
        return header_auth if header_auth else None

    def current_user(self, request=None) -> TypeVar('User'):
        """Method that return None
        """
        return None