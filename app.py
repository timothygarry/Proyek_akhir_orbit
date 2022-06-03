from flask import Flask
from flask import render_template
import pandas as pd
import joblib 
app = Flask(__name__)



@app.route("/")
def index():
    predict = joblib.load("modelling/mba_recommended.pkl")
    result = predict("toy story")
    return render_template("index.html", total = len(result), movies = result)



@app.route("/home")
def home():
    
    
    return render_template("home/home.html")



@app.route("/data")
def data():
    dataframe = pd.read_csv("dataset/movie.csv")
    return render_template("data/data.html")

@app.route("/model")
def model():
    return render_template("model/model.html")


@app.route("/setting")
def setting():
    return render_template("setting/setting.html")

if __name__ == '__main__':
    app.run(port=5000, debug=True)