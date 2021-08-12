#!/usr/bin/env python3
""" Auth module
"""
from typing import List, TypeVar
from flask import request
from os import getenv
from flask import make_response


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

        for exc in excluded_paths:
            l_exc = len(exc)
            if l_exc == 0:
                continue

            if exc[l_exc - 1] != '*':
                if path == exc:
                    return False
            else:
                if exc[:-1] == path[:l_exc - 1]:
                    return False

        return True

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

    def session_cookie(self, request=None):
        """Method that returns a cookie value from a request"""
        if request is None:
            return None

        session_name = getenv("SESSION_NAME")
        return request.cookies.get(session_name)
