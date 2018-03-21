import sys

from chat import app

if __name__ == '__main__':
    app.run(host='localhost', debug=True, port=int(8888))
