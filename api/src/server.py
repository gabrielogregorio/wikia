from flask import Flask, jsonify,send_from_directory
from flask_cors import CORS

from src.handle_queue import handle_queue

app = Flask(__name__, static_folder='../public')

CORS(app)

cache = None
@app.route('/files', methods=['GET'])
def list_files():
    global cache
    if(cache):
        print('aaaaaaaa', 'tem cache')
        return cache

    cache = jsonify(handle_queue())
    return cache

@app.route('/file/<path:filename>')
def serve_static_files(filename):
    return send_from_directory(app.static_folder, filename)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
