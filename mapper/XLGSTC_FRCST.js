
// from erp-api-controller-inventory-yad-sarah
const xlgstcFrcstMapper = {
    firm_code: 'FIRM_CODE',
    primary_trans_class: 'PRMY_TRNS_CLSS',
    second_trans_class: 'SECND_TRNS_CLSS',
    document_number: 'DOC_NBR',
    event_date: 'LINE_EVNT_DATE',
    request_ship_date: 'RQSTD_SHIP_DATE',
    warehouse_code: 'STRM_CODE',
    interface_code: 'INTERFACE_CODE',
    action_type: 'ACTION_TYPE',
    free_field_1: 'FREE_FLD_1',
    free_field_2: 'FREE_FLD_2',
    free_field_3: 'FREE_FLD_3',
    line_status: 'LINE_TRNS_STAT', // 20
    document_remark: 'DOC_RMRK',

    // lines
    line_number: 'LINE_NBR', // static =1
    line_event_date: 'LINE_EVNT_DATE',
    request_ship_date: 'RQSTD_SHIP_DATE',
    part_code: 'PART_CODE',
    model_code: 'MODL_CODE',
    quantity: 'QNTY',
    free_field_1: 'FREE_FLD_1',
    free_field_2: 'FREE_FLD_2',
    free_field_3: 'FREE_FLD_3',
    unit_code: 'UNIT_CODE',
    line_remark: 'LINE_RMRK',
}


// from erp-api-controller-acquisitions

export const lgstc_frcst2 = {
    tableName: 'XLGSTC_FRCST',
    firm_code: 'FIRM_CODE',
    primary_trans_class: 'PRMY_TRNS_CLSS',
    document_number: 'DOC_NBR',
    line_number: 'LINE_NBR',
    second_trans_class: 'SECND_TRNS_CLSS',
    event_date: 'LINE_EVNT_DATE',
    request_ship_date: 'RQSTD_SHIP_DATE',
    supplier_code: 'SPLR_CODE',
    warehouse_code: 'STRM_CODE',
    reference: 'REFE',
    company_cost_code: 'CMPNY_COST_ACTV_CODE',
    tool_cost_code: 'TOOL_COST_ACTV_CODE',
    employee_cost_code: 'EMP_COST_ACTV_CODE',
    project_cost_code: 'PROJ_COST_ACTV_CODE',
    line_open: 'LINE_DOC_STAT',
    line_status: 'LINE_TRNS_STAT',
    product_code: 'PART_CODE',
    unit_code: 'UNIT_CODE',
    quantity: 'QNTY',
    currency_code: 'CUR_CODE',
    product_price: 'PART_PRC',
    amount_before_reduct: 'AMNT_BFOR_RDCT',
    reduct_amount: 'RDCT_AMNT',
    amount_after_reduct: 'AMNT_AFTR_RDCT',
    credit_code: 'CREDIT_CODE',
    exchange_rate: 'EXCH_RATE',
    exchange_rate_date: 'EXCH_RATE_DATE',
    free_field_1: 'FREE_FLD_1',
    free_field_2: 'FREE_FLD_2',
    free_field_3: 'FREE_FLD_3',
    interface_code: 'INTERFACE_CODE',
    action_type: 'ACTION_TYPE',
    budget_item_code: 'ACNT_CODE',
    casual_item_name: 'XTRNL_PART',
    document_remark: 'DOC_RMRK',
    model_code: 'MODL_CODE',
    document_reduct_percentage: 'DOC_RDCT_PCNT',
    line_remark: 'LINE_RMRK',
    line_expiration_date: 'LINE_EXP_DATE',
  
  
    bill: 'BILL_TO_SPLR_CODE'
  
  
  }