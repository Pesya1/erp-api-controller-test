

// from erp-api-controller-inventory-yad-sarah

// בדקתי, שמות טבלה ושדה תקינים
export const xlgstcActl = {
    table_name: 'XLGSTC_ACTL',
    firm_code: 'FIRM_CODE',
    primary_trans_class: 'PRMY_TRNS_CLSS', // '331' static
    second_trans_class: 'SECND_TRNS_CLSS', // '1' static
    document_number: 'DOC_NBR', // Next_doc_nbr()
    transfer_demand_number: 'ORDR_NBR',
    from_strm_code: 'STRM_CODE',
    from_strm_lctn: 'STRM_LCTN',
    interface_code: 'INTERFACE_CODE', // '707' , static
    action_type: 'ACTION_TYPE', // '10', static
    event_date: 'LINE_EVNT_DATE',
    // lines
    line_number: 'LINE_NBR',
    transfer_demand_line_number: 'ORDR_LINE_NBR',
    line_trns_status: 'LINE_TRNS_STAT', // '20', static
    part_code: 'PART_CODE',
    modl_code: 'MODL_CODE',
    lot_nbr: 'LOT_NBR',
    quantity: 'QNTY',
    line_free_fld_1: 'FREE_FLD_1',
    line_free_fld_2: 'FREE_FLD_2',
    line_free_fld_3: 'FREE_FLD_3',
    unit_code: 'UNIT_CODE',
}