import flask
from flask_mysqldb import MySQL

app = flask.Flask("__main__")

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'gmfdatabase'

@app.route("/")
def my_index():
        return flask.render_template("index.html", token= "Hello")
        
app.run(debug=True)