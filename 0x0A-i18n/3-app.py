#!/usr/bin/env python3
"""
basic Flask app
"""

from flask import Flask, render_template, request
from flask_babel import Babel


class Config(object):
    """Config class for babel"""
    LANGUAGES = ['en', 'fr']
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'


app = Flask(__name__)
babel = Babel(app)
app.config.from_object(Config)


@babel.localeselector
def get_locale():
    # if a user is logged in, use the locale from the user settings
    return request.accept_languages.best_match(app.config['LANGUAGES'])


@app.route('/', methods=['GET'])
def home():
    """Basic welcome"""
    return render_template('2-index.html')


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5000")
