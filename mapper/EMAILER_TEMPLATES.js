
// from reports-emailer
export default {
    tableName:'EMAILER_TEMPLATES',
    id: 'ID',
    name: 'NAME',
    description: 'DESCRIPTION',
    subject: 'SUBJECT',
    text: 'TEXT_BODY',
    html: 'HTML_BODY',
    retries: 'RETRIES',
    retriesInterval: 'RETRY_INTERVAL_SECONDS',
    created: 'CREATED_AT',
    updated: 'UPDATED_AT',

    reportId: 'WEB_REPORT_ID',
    exportType: 'EXPORT_TYPE', // pdf || html...
    isBodyReport: 'REPORT_AS_BODY', // האם לשלוח את הדוח בגוף המייל

}