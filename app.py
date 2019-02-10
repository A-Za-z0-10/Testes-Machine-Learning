from flask import Flask, render_template, request
from time_db import last_update

from report import *

app = Flask(__name__)


#-----------REPORT----------------------------------------------------------------------------------------------------------------------------------------------------
@app.route('/')
def report():

	return render_template('report.html', last_update=last_update())

@app.route('/report/send')
def save_report():
	nome = request.args.get('name')
	email = request.args.get('email')
	report = request.args.get('report')

	input_on_log_report('with_no_user', nome, email, report, last_update())

	return render_template('report_send_done.html', last_update=last_update())

app.run(port=80)



