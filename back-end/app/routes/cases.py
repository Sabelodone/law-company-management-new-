#app/routes/cases.py

from flask import Blueprint, request, jsonify
from app import db
from app.models import Case
from flask_login import login_required

cases_blueprint = Blueprint('cases', __name__)

@cases_blueprint.route('/cases', methods=['POST'])
@login_required
def create_case():
    data = request.get_json()
    # Validation
    if not data.get('title') or not data.get('description'):
        return jsonify({'error': 'Please provide all required fields'}), 400
    try:
        new_case = Case(
            title=data['title'],
            description=data['description']
        )
        db.session.add(new_case)
        db.session.commit()
        return jsonify({'message': 'Case created successfully'}), 201
    except Exception as e:
        return jsonify({'error': 'An error occurred: ' + str(e)}), 500

@cases_blueprint.route('/cases', methods=['GET'])
@login_required
def get_cases():
    cases = Case.query.all()
    return jsonify([case.to_dict() for case in cases]), 200

@cases_blueprint.route('/cases/<int:case_id>', methods=['GET'])
@login_required
def get_case(case_id):
    case = Case.query.get(case_id)
    if case:
        return jsonify(case.to_dict()), 200
    else:
        return jsonify({'error': 'Case not found'}), 404

@cases_blueprint.route('/cases/<int:case_id>', methods=['PUT'])
@login_required
def update_case(case_id):
    case = Case.query.get(case_id)
    if case:
        data = request.get_json()
        case.title = data.get('title', case.title)
        case.description = data.get('description', case.description)
        db.session.commit()
        return jsonify({'message': 'Case updated successfully', 'case': case.to_dict()}), 200
    else:
        return jsonify({'error': 'Case not found'}), 404

@cases_blueprint.route('/cases/<int:case_id>', methods=['DELETE'])
@login_required
def delete_case(case_id):
    case = Case.query.get(case_id)
    if case:
        db.session.delete(case)
        db.session.commit()
        return jsonify({'message': 'Case deleted successfully'}), 200
    else:
        return jsonify({'error': 'Case not found'}), 404
