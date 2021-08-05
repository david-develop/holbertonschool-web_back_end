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
        return False

    def authorization_header(self, request=None) -> str:
        """Method that return None
        """
        return None

    def current_user(self, request=None) -> TypeVar('User'):
        """Method that return None
        """
        return None
