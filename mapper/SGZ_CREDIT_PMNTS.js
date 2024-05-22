
// from erp-api-controller-payments-supergas
export default {
    table_name:'SGZ_CREDIT_PMNTS',
    pmnt_src: 'PMNT_SRC',// not in body
    str: 'STR',// not in body
    firm_code: 'FIRM_CODE',//from url
    financial_firm_code: 'FNCL_FIRM_CODE',
    credit_card_expiry_date: 'CRED_EFCT_DATE',
    number_of_payments: 'PMNTS_NBR',
    masked_credit_card: 'CREDIT_CARD_NBR',
    credit_card_name: 'CREDIT_CARD_NAME',
    credit_card_company_code: 'CREDIT_CMPNY_CODE',
    payment_id: 'ID_NBR',
    amount: 'PAY_AMNT',
    pay_time: 'PAY_TIME',
    payment_date: 'PAY_DATE',
    invoice_number: 'INVC_NBR',//from url
    reference: 'REFE',
    pay_actl_time: 'PAY_ACTL_TIME',
    customer_code: 'CUST_CODE',//from url
    credit_card_id: 'CARD_READER',
    transaction_id: 'X_FIELD'
}