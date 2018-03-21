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
    if len(messages) == 0 :
        messages = initialize_bd()
    
    messages_sanitized = json.loads(json_util.dumps(messages))


    print("Get all messages")
    print(messages)

    return jsonify(result='ok', data=messages_sanitized)

def initialize_bd():


    message1 = {
        "user": "Peer #1",
        "text": "I don't understand why you gave me 'no answer' when I have writen 2 pages of literature review on Interaction Design including theories from Norman, Dourish and Busxton.",
        "date": "2017-07-04T14:21:17.000Z"
    }
    mongo.db.messages.insert(message1)

    message2= {
        "user": "MyUsername",
        "text": "It appears that you must have handed in the wrong assignment then. What I'm seeing is only 1 page with an introduction and a brief summary of methodologies.",
        "date": "2018-03-21T09:12:17.000Z"
    }
    mongo.db.messages.insert(message2)

    return list(mongo.db.messages.find())




@app.route('/api/send/', methods=['POST'])
def send_message():
    data_dict = json.loads(request.data)


    print(data_dict)

    id = mongo.db.messages.insert(data_dict)
    id_sanitized = json.loads(json_util.dumps(id))

    print("Added message with id: " + id_sanitized["$oid"])

    return jsonify(result='ok', data=id_sanitized)


