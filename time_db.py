import pandas as pd
import datetime as dt
from datetime import datetime

def last_update(formato='%H:%M:%S %d/%m'):
	#Retorna tempo atual do banco

	return dt.datetime.now().strftime(formato)
	