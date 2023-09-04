from flask import Flask, jsonify,send_from_directory
from flask_cors import CORS

from src.handle_queue import handle_queue

app = Flask(__name__, static_folder='../public')

CORS(app)

cache = None
starting_proccess = False
@app.route('/files', methods=['GET'])
def list_files():
    global cache
    global starting_proccess
    if(cache or starting_proccess):
        return cache

    starting_proccess = True

    try:
        cache = jsonify(handle_queue())
        return cache
    except:
        starting_proccess = False
@app.route('/file/<path:filename>')
def serve_static_files(filename):
    return send_from_directory(app.static_folder, filename)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
