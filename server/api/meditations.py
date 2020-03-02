from flask import request, jsonify, Blueprint
from models.models import Meditation
import boto3
import os

meditations_bp = Blueprint('meditations', __name__)


@meditations_bp.route('/meditations', methods=['GET'])
def get_meditations():
    results = Meditation.query.all()
    meditations = list(map(Meditation.to_dict, results))
    response_json = {meditation['name']: meditation
                     for meditation in meditations}
    return jsonify(response_json)


@meditations_bp.route('/meditations/<string:name>', methods=['GET'])
def get_meditation(name):
    s3 = boto3.resource('s3')
    meditation_id = Meditation.query.filter_by(name=name).first().id
    object = os.environ.get('AWS_URL').format(name)

    return jsonify({'id': meditation_id, 'url': object})
