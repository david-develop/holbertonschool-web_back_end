#!/usr/bin/env python3
"""
Route module for the API
"""
from flask import Flask, jsonify


app = Flask(__name__)


@app.route('/', methods=['GET'])
def hello_world() -> str:
    """Basic route welcome"""
    msj = {"message": "Bienvenue"}
    return jsonify(msj)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5000")
