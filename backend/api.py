import requests
import json
import yfinance as yf
from flask import Flask, jsonify
from datetime import datetime
import pandas as pd
#import request





app = Flask(__name__)

# @app.route("/send", methods=["GET", "POST"])
# def send():
#     if request.method == "POST":
#         title = str(request.json["title"])
#         body = str(request.json["body"])
#         return jsonify("Sended")

@app.route('/time')
def get_current_time():
    # CREATE TICKER INSTANCE FOR AMAZON
    amzn = yf.Ticker("AMZN")

    # GET TODAYS DATE AND CONVERT IT TO A STRING WITH YYYY-MM-DD FORMAT (YFINANCE EXPECTS THAT FORMAT)
    end_date = datetime.now().strftime('%Y-%m-%d')
    amzn_hist = amzn.history(start='2022-01-01',end=end_date)
    df =amzn_hist.values.tolist()
    count = 0
    for l in df:
        count+=1
    return str(count)

@app.route('/result', methods = ['POST'])
def result():
    # player_id = request.json
    # if player_id:
    #    data = get_player(player_id)
    #    name = str(data['name'][0])
    name = "HelloIamGay"
    return jsonify(name)
    #return "No player information is given"
    