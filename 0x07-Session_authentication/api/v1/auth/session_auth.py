#!/usr/bin/env python3
""" SessionAuth module
"""
from api.v1.views.session_auth import session_login
from api.v1.auth.auth import Auth
import uuid
from models.user import User


class SessionAuth(Auth):
    """SessionAuth class
    """
    user_id_by_session_id = {}

    def create_session(self, user_id: str = None) -> str:
        """Method that creates a Session ID for a user_id"""
        if user_id is None or type(user_id) != str:
            return None

        session_id = str(uuid.uuid4())
        self.user_id_by_session_id[session_id] = user_id
        return session_id

    def user_id_for_session_id(self, session_id: str = None) -> str:
        """returns a User ID based on a Session ID"""
        if session_id is None or type(session_id) != str:
            return None

        return self.user_id_by_session_id.get(session_id)

    def current_user(self, request=None):
        """(overload) that returns a User instance based on a cookie value"""
        session_id = self.session_cookie(request)
        user_id = self.user_id_for_session_id(session_id)
        return User.get(user_id)

    def destroy_session(self, request=None):
        """Method that deletes the user session / logout"""
        session_id = self.session_cookie(request)
        if request is None or session_id is None:
            return False

        user_id = self.user_id_for_session_id(session_id)
        if user_id is None:
            return False

        del self.user_id_by_session_id[session_id]
        return True
