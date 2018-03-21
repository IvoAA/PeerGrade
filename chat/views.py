import os
import io
import json
from bson import json_util, ObjectId
from flask_pymongo import PyMongo

from chat import app
from flask import render_template, jsonify, request


SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
JSON_URL = os.path.join(SITE_ROOT, 'static', 'messages.json')

mongo = PyMongo(app)

@app.route('/api/all/', methods=['GET'])
def all_messages():

    messages = list(mongo.db.messages.find())
    messages_sanitized = json.loads(json_util.dumps(messages))

    print("Get all messages")

    return jsonify(result='ok', data=messages_sanitized)


@app.route('/api/send/', methods=['POST'])
def send_message():
    data_dict = json.loads(request.data)


    id = mongo.db.messages.insert(data_dict)
    id_sanitized = json.loads(json_util.dumps(id))

    print("Added message with id: " + id_sanitized["$oid"])

    return jsonify(result='ok', data=id_sanitized)
