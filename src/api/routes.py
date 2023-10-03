"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Private
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/private', methods=['POST', 'GET'])
def seeHidden():
    
    if (User == True):
        response = {
        "shown":"you should see me only when youre logged in"
    }
    else:
         response = {
        "shown":"Your not supposed to see that"
    }
    return jsonify(response), 200