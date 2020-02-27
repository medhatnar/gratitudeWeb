from flask import request, jsonify, Blueprint
from models.models import Meditation
import boto3
import os

meditations_bp = Blueprint('meditations', __name__)


@meditations_bp.route('/meditations', methods=['GET'])
def get_meditations():
    results = Meditation.query.all()
    meditations = list(map(Meditation.to_dict, results))
    response_json = jsonify(
        {meditation['id']: meditation['name'] for meditation in meditations})
    return response_json


@meditations_bp.route('/meditations/<string:name>', methods=['GET'])
def get_meditation(name):
    s3 = boto3.resource('s3')
    object = s3.Object(os.environ.get('AWS_URL'), f'{name}.mp3').get()

    print(object)
   
    
    