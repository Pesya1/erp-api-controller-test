
import logger from "../config/logger.js";
import { querydb } from "../logic/queryDB.js";

export const orWhere = async () => {
    try {
        let query = {
            "select": [
                "STRM_CODE",
                "STRM_NAME"
            ],
            "from": "VU_WEB_STRMS",
            "where": [
                {
                    "field": "FIRM_CODE",
                    "value": "21"
                },
                {
                    "field": "STRM_TYPE",
                    "value": 3
                },
                {
                    "orWhere": [
                        {
                            "field": "STRM_CODE",
                            "value": "421"
                        },
                        {
                            "where": [
                                {
                                    "value": "0",
                                    "type": ">=",
                                    "field": "STRM_CODE"
                                },
                                {
                                    "value": "999",
                                    "type": "<=",
                                    "field": "STRM_CODE"
                                }
                            ]
                        },
                        {
                            "where": [
                                {
                                    "value": "10000",
                                    "type": ">=",
                                    "field": "STRM_CODE"
                                },
                                {
                                    "value": "9999999",
                                    "type": "<=",
                                    "field": "STRM_CODE"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
        let result = await querydb(query);
        return result;
    }
    catch (err) {
        logger.error(`orWhere controller fail: ${err.message}`);
        throw err;
    }
}
let query1 = {
    select: ["FROM_NAME", "TO_NAME", "MESSAGE", "KEY", "ID"],
    from: "MESSAGES",
    where: [
        {
            field: "FROM_NAME",
            value: "%avi%",
            type: "like"
        }
    ],
    orWhere: [
        {
            field: "FROM_NAME",
            value: "wwwwww",
            type: "="
        },
        {
            where: [
                {
                    field: "FROM_NAME",
                    value: "oriya",
                    type: "like"
                },
                {
                    orWhere: [
                        {
                            field: "TO_NAME",
                            value: "eee",
                            type: "="
                        },
                        {
                            where: [
                                {
                                    field: "TO_NAME",
                                    value: "aaa",
                                    type: "="
                                },
                                {
                                    field: "ID",
                                    value: 250,
                                    type: ">"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};


export const subQuery = async () => {
    try {
        const query = {
            "select": [
                "DOC_NBR",
                "SECND_TRNS_CLSS",
                "EVNT_DATE",
                "TRNS_STAT",
                "DFLT_STRM_CODE",
                'STATUS_AUTHORIZATION.FROM_TRNS_STAT',
                "STATUS_AUTHORIZATION.TO_TRNS_STAT",
                { raw: "CASE WHEN TRNS_STAT > STATUS_AUTHORIZATION.FROM_TRNS_STAT AND TRNS_STAT > STATUS_AUTHORIZATION.TO_TRNS_STAT THEN 'Y' ELSE 'N' END AS ALLOW_UPDATE" }
            ],
            "from": "VU_WEB_LAD",
            join: [{
                table: 'STATUS_AUTHORIZATION', on: [
                    { key1: 'FIRM_CODE', key2: 'STATUS_AUTHORIZATION.FIRM_CODE' },
                    { key1: 'PRMY_TRNS_CLSS', key2: 'STATUS_AUTHORIZATION.PRMY_TRNS_CLSS' },
                    { key1: 'SECND_TRNS_CLSS', key2: 'STATUS_AUTHORIZATION.SECND_TRNS_CLSS' }
                ]
            }],
            "where": [
                {
                    "field": "FIRM_CODE",
                    "value": "21"
                },
                {
                    "field": "PRMY_TRNS_CLSS",
                    "value": 330
                },
                {
                    field: 'STATUS_AUTHORIZATION.USER_NAME',
                    value: 'M_MASTER'
                }
            ]
        };
        let result = await querydb(query);
        return result;
    }
    catch (err) {
        logger.error(`sub query controller failed: ${err.message}`);
        throw err;
    }
}

export const queryA = async () => {
    try {
        let query = {
            from: 'VU_WEB_LAD',
            select: [
                "VU_WEB_LAD.SECND_TRNS_CLSS",
                'VU_WEB_LAD.SECND_TRNS_CLSS_NAME',
                "VU_WEB_LAD.EVNT_DATE",
                'VU_WEB_LAD.ORDR_NBR',
                'VU_WEB_LAD.DFLT_STRM_CODE',
                'VU_WEB_LAD.DFLT_STRM_NAME',
                'VU_WEB_LAD.DFLT_TO_STRM_CODE',
                'VU_WEB_LAD.DFLT_TO_STRM_NAME',
                "VU_WEB_LAD.TRNS_STAT",
                "VU_WEB_LAD.DOC_NBR",
                'VU_WEB_YADS_LTA_331.FROM_DOC',
                'VU_WEB_YADS_LTA_331.TO_DOC',
                'VU_WEB_YADS_LTA_331.FROM_SECND_TRNS_CLSS',
                'VU_WEB_YADS_LTA_331.TRNS_CLSS_NAME',
                'VU_WEB_YADS_LTA_331.TO_SECND_TRNS_CLSS',
                'VU_WEB_YADS_LTA_331.TO_TRNS_CLSS_NAME',
                'VU_WEB_YADS_LTA_331.TO_LINE_TO_STRM_CODE',
                'LGSTC_ACTL_DOCS.DOC_RMRK'
            ],
            join: [
                {
                    "table": "VU_WEB_YADS_LTA_331",
                    "on": [
                        {
                            "key1": "VU_WEB_LAD.FIRM_CODE",
                            "key2": "VU_WEB_YADS_LTA_331.FIRM_CODE"
                        },
                        {
                            "key1": "VU_WEB_LAD.PRMY_TRNS_CLSS",
                            "key2": "VU_WEB_YADS_LTA_331.FROM_PRMY_TRNS_CLSS"
                        },
                        {
                            "key1": "VU_WEB_LAD.DOC_NBR",
                            "key2": "VU_WEB_YADS_LTA_331.FROM_DOC"
                        }
                    ]
                },
                {
                    "table": "LGSTC_ACTL_DOCS",
                    "on": [
                        {
                            "key1": "VU_WEB_LAD.FIRM_CODE",
                            "key2": "LGSTC_ACTL_DOCS.FIRM_CODE"
                        },
                        {
                            "key1": "VU_WEB_LAD.PRMY_TRNS_CLSS",
                            "key2": "LGSTC_ACTL_DOCS.PRMY_TRNS_CLSS"
                        },
                        {
                            "key1": "VU_WEB_LAD.SECND_TRNS_CLSS",
                            "key2": "LGSTC_ACTL_DOCS.SECND_TRNS_CLSS"
                        },
                        {
                            "key1": "VU_WEB_LAD.DOC_NBR",
                            "key2": "LGSTC_ACTL_DOCS.DOC_NBR"
                        }
                    ]
                }
            ],
            where: [
                {
                    "field": "VU_WEB_LAD.FIRM_CODE",
                    "value": 21 //"{firm_code}"
                },
                {
                    "field": "VU_WEB_LAD.PRMY_TRNS_CLSS",
                    "value": 331
                },
                {
                    "field": "VU_WEB_LAD.DOC_NBR",
                    "value": "123" //"{document_number}"
                },
            ],
            first: true,

        };
        const linesQuery =
        {
            from: 'VU_WEB_LAT',
            select: [
                'VU_WEB_LAT.LINE_NBR', 'VU_WEB_LAT.PART_CODE', 'VU_WEB_LAT.PART_SHRT_NAME',
                'VU_WEB_LAT.UNIT_CODE_1', 'VU_WEB_LAT.UNIT_NAME',
                'VU_WEB_LAT.STRM_CODE',
                'VU_WEB_LAT.STRM_NAME',
                'VU_WEB_LAT.STRM_LCTN',
                'VU_WEB_LAT.TO_STRM_CODE', 'VU_WEB_LAT.TO_STRM_NAME', 'VU_WEB_LAT.TO_STRM_LCTN',
                'VU_WEB_LAT.QNTY_1',
                'VU_WEB_LAT.MODL_CODE',
                // 'LOT_NBR',
                'XTRNL_TEXT.LINE_RMRK',
            ],
            join: [{
                table: 'XTRNL_TEXT',
                "on": [
                    {
                        "key1": "VU_WEB_LAT.FIRM_CODE",
                        "key2": "XTRNL_TEXT.FIRM_CODE"
                    },
                    {
                        "key1": "VU_WEB_LAT.PRMY_TRNS_CLSS",
                        "key2": "XTRNL_TEXT.PRMY_TRNS_CLSS"
                    },
                    {
                        "key1": "VU_WEB_LAT.SECND_TRNS_CLSS",
                        "key2": "XTRNL_TEXT.SECND_TRNS_CLSS"
                    },
                    {
                        "key1": "VU_WEB_LAT.DOC_NBR",
                        "key2": "XTRNL_TEXT.DOC_NBR"
                    },
                    {
                        "key1": "VU_WEB_LAT.LINE_NBR",
                        "key2": "XTRNL_TEXT.LINE_NBR"
                    }
                ]
            }],
            where: [
                {
                    "field": "VU_WEB_LAT.FIRM_CODE",
                    "value": 21//"{firm_code}"
                },
                {
                    "field": "VU_WEB_LAT.PRMY_TRNS_CLSS",
                    "value": 331
                },
                {
                    "field": "VU_WEB_LAT.DOC_NBR",
                    "value": "123" //{document_number}"
                },
            ]
        }

        let result = await querydb(query);
        return result;
    }
    catch (err) {
        logger.error(`query A controller fail: ${err.message}`);
        throw err;
    }
}