from flask import Flask, jsonify, request
from werkzeug.security import generate_password_hash

app = Flask(__name__)

# A list to store registered users
users = []

@app.route('/register', methods=['POST'])
def register():
    # Get user data from the request
    username = request.json.get('username')
    email = request.json.get('email')
    password = request.json.get('password')

    # Check if the required fields are provided
    if not username or not email or not password:
        return jsonify({'error': 'Please provide username, email, and password'}), 400

    # Check if the username or email is already registered
    if any(user['username'] == username for user in users) or any(user['email'] == email for user in users):
        return jsonify({'error': 'Username or email already exists'}), 409

    # Hash the password
    hashed_password = generate_password_hash(password)

    # Create a new user object
    user = {
        'username': username,
        'email': email,
        'password': hashed_password
    }

    # Add the user to the list of registered users
    users.append(user)

    return jsonify({'message': 'User registered successfully'}), 201

if __name__ == '__main__':
    app.run()