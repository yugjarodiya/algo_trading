import requests
import json
import yfinance as yf
from flask import Flask
from datetime import datetime
import pandas as pd





app = Flask(__name__)

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
    