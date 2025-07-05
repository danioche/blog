# app.py
from flask import Flask, render_template, request, send_from_directory 
import re
import time

app = Flask(__name__)

# Main entry point
@app.route('/')
def index():
    return render_template('index.html')

# Get Live
@app.route('/live')
def showLive():
    return render_template('live.html')

# Get Live Log data - local for testing
@app.route('/livedata')
def showLiveData():
    return send_from_directory("./test/", "live.csv")


# Save LOG data
@app.route('/save',methods = ['POST', 'GET'])
def save():
    dataLog=""
    gameName=""
    retMsg=""

    if request.method == 'POST':
      dataLog = request.form['dataLog']
      gameName = request.form['gameName']
    else:
      dataLog = request.args.get('dataLog')
      gameName = request.args.get('gameName')

    # Sanetize the imput
    gameName = re.sub('[^\w\s-]', '', gameName).strip().lower()
    gameName = re.sub(r'[-\s]+', '-', gameName).strip('-_')
    # Adding timestamp
    #timestr = time.strftime("%Y%m%d-%H%M%S")
    timestr = time.strftime("%Y%m%d")
    
    try:

        with open('static/data/gameLogs/{}_{}.csv'.format(timestr,gameName), 'w', encoding="utf-8") as f:
            f.writelines(dataLog.replace('\r', ''))
    
        retMsg=" Game saved! <br> GameName: <b>{}</b> <br> DataLog: <textarea>{}</textarea> ".format(gameName, dataLog)

    except:

        retMsg=" Errors were found during saving. Check logs."

    return retMsg

if __name__ == '__main__':
    app.run(debug=True)
