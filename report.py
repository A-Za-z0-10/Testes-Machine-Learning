import pandas as pd

def input_on_log_report(user='',name='',email='',report='', time='',filename='logs/report_log.xlsx'):
    #Input on excel log one more report
    
    log_xlsx = pd.read_excel(filename)
    
    last_report =pd.DataFrame({
        'USER':user,
        'NAME':name,
        'EMAIL':email,
        'REPORT':report,
        'DATE':time,
    }, index=[0])
    
    pd.concat([log_xlsx, last_report], axis=0).to_excel(filename)