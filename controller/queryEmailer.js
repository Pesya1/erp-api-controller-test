import client from "../libs/octopusClient.js";


export default async() => {
    
    const query = {
        "select": ["ID", "RECIPIENT", "CC", "BCC", "SUBJECT_PARAMETERS", "SENT", "DELIVERY_REPORT_DATE", "DELIVERY_REPORT_EMAILS", "DELIVERY_REPORT_SENT", "EMAILER_TEMPLATE_ID"],
        "from": "EMAILER_EVENTS",
        // "where": [
        //     { "field": "DELIVERY_REPORT_SENT", "value": null },
        //     { "field": "DELIVERY_REPORT_DATE", "type": "<", "value": { "raw": "TO_DATE('2023-11-05 10:54:26', 'YYYY/MM/DD HH24:MI:SS')" } }
        // ],
        "children": [
            {
                "name": "logs",
                "from": "EMAILER_EVENT_LOGS",
                "select": ["ID", "EMAILER_EVENT_ID", "RETRY_NUMBER", "SENT", "RESPONSE", "CREATED_AT", "UPDATED_AT"],
                "parentKey": "ID",
                "childKey": "EMAILER_EVENT_ID"
            },
            {
                "select": ["ID", "NAME", "DESCRIPTION", "SUBJECT", "TEXT_BODY", "HTML_BODY", "RETRIES", "RETRY_INTERVAL_SECONDS", "CREATED_AT", "UPDATED_AT", "WEB_REPORT_ID", "EXPORT_TYPE", "REPORT_AS_BODY"],
                "name": "template",
                "from": "EMAILER_TEMPLATES",
                "parentKey": "EMAILER_TEMPLATE_ID",
                "childKey": "ID"
            }
        ]
    };

    try{
        let result=await client.request('db',query);
        console.log('query emailer result:',result);
        return result;

    }
    catch(err){ 
        console.log('fail to query emailer',err);
        return err;
    }

}