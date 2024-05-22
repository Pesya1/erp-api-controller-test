
// from reports-emailer
export default {
    tableName: 'EMAILER_EVENTS',
    id: 'ID',
    key: 'KEY',    
    templateId: 'EMAILER_TEMPLATE_ID',   

    enabled: 'ENABLED',   
    from: 'SENDER',   
    to: 'RECIPIENT',  
    cc:'CC', 
    bcc: 'BCC',   
    subjectParameters: 'SUBJECT_PARAMETERS',
    reportParameter: 'WEB_REPORT_PARAMETERS',
    startDate: 'START_DATE', // תאריך התחלת השליחה
    retryNumber: 'RETRY_NUMBER', // מספר הניסיון הנוכחי
    isSent: 'SENT',
    response: 'RESPONSE',
    emailToLogDelivery: 'DELIVERY_REPORT_EMAILS',// כתובות מייל לעידכון על שליחה
    delivaryDate: 'DELIVERY_REPORT_DATE', // תאריך שליחת דוח דיווח
    isReportSent: 'DELIVERY_REPORT_SENT', // האם נשלח דוח דיווח
    created: 'CREATED_AT',
    updated: 'UPDATED_AT',
}