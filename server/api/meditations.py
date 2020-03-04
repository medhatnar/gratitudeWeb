from flask import request, jsonify, Blueprint
from models.models import Meditation

meditations_bp = Blueprint('meditations', __name__)


@meditations_bp.route('/meditations', methods=['GET'])
def get_meditations():
    results = Meditation.query.all()
    meditations = list(map(Meditation.to_dict, results))
    response_json = { meditation['name']: meditation for meditation in meditations }
    print(response_json)
    return jsonify(response_json)


@meditations_bp.route('/meditations/<string:name>', methods=['GET'])
def get_meditation(name):
    meditation = Meditation.query.filter_by(name=name).first().to_dict()
    return jsonify(meditation)
