from flask import Flask
from flask_cors import CORS

print(__name__)
app = Flask(__name__)


CORS(app)
app.config.from_pyfile('application.cfg', silent=True)


import chat.views
