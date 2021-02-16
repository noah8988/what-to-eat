from flask import Flask, render_template, request, send_file
from flask_bootstrap import Bootstrap
import json

app = Flask(__name__)
Bootstrap(app)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/whattoeat")
def func():
    with open("./Data/foodDatabase.json") as f:
        json_data = json.load(f)
    return render_template("whattoeat.html", food_options=json_data)


@app.route("/database")
def database():
    return render_template("database.html")




if __name__ == "__main__":
    app.run(debug=True)