import json
import yfinance as yf
from flask import Flask, jsonify, request
from datetime import datetime
import pandas as pd

app = Flask(__name__)

@app.route("/username", methods=['POST'])
def login():
    dict = {}
    # username = request.form.get("username", "") # or request.form["username"]
    tker = request.json['username']
        # CREATE TICKER INSTANCE FOR AMAZON
    tker = yf.Ticker(tker)

    # GET TODAYS DATE AND CONVERT IT TO A STRING WITH YYYY-MM-DD FORMAT (YFINANCE EXPECTS THAT FORMAT)
    end_date = datetime.now().strftime('%Y-%m-%d')
    tker_hist = tker.history(start='2022-01-01',end=end_date)
    #format open, high, low, close, volume, div, stock split


    df =tker_hist.values.tolist()
    i = 0
    for row in df:
        dict[i] = {"value":df[0],}
        i+=1
    # result = "open for today is " + str(df[0][0])
    return jsonify((str(df)))

        #return jsonify(username=username) # from flask import jsonify 

# @app.route("/send", methods=["GET", "POST"])
# def send():
#     if request.method == "POST":
#         title = str(request.json["title"])
#         body = str(request.json["body"])
#         return jsonify("Sended")



# @app.route('/result', methods = ['POST'])
# def result():
#     # player_id = request.json
#     # if player_id:
#     #    data = get_player(player_id)
#     #    name = str(data['name'][0])
#     name = "HelloIamGay"
#     return jsonify(name)
#     #return "No player information is given"

    