#!/usr/bin/env python3
""" Module of Session Auth views
"""
from api.v1.views import app_views
from flask import jsonify, request, abort
from models.user import User
import os


@app_views.route('/auth_session/login', methods=['POST'], strict_slashes=False)
def session_login() -> str:
    """ POST /api/v1/auth_session/login
    JSON body:
      - email
      - password
    Return:
      - User object JSON represented
      - 400, 404, 401 if errors
    """

    req_par = request.form
    error_msg = None
    email = req_par.get('email')
    password = req_par.get('password')

    if email is None or email == '':
        error_msg = 'email missing'
        return jsonify({'error': error_msg}), 400
    if password is None or password == '':
        error_msg = 'password missing'
        return jsonify({'error': error_msg}), 400

    try:
        found_users = User.search({'email': email})
    except Exception:
        error_msg = 'no user found for this email'
        return jsonify({'error': error_msg}), 404

    if not found_users:
        return jsonify({"error": "no user found for this email"}), 404

    from api.v1.app import auth

    user_valid = None
    for user in found_users:
        if user.is_valid_password(password):
            user_valid = user
            break

    if user_valid is None:
        error_msg = 'wrong password'
        return jsonify({'error': error_msg}), 401

    session_id = auth.create_session(user_valid.id)
    session_name = os.getenv("SESSION_NAME")
    res = jsonify(user_valid.to_json())
    res.set_cookie(session_name, session_id)

    return res


@app_views.route('auth_session/logout', methods=['DELETE'], strict_slashes=False)
def session_logout() -> str:
    """ DELETE /api/v1/auth_session/logout
    JSON body:
      - email
      - password
    Return:
      - User object JSON represented
      - 400
    """
    from api.v1.app import auth

    return jsonify({}) if auth.destroy_session(request) else abort(404)
