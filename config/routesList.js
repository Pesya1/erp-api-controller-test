import config  from "./index.js"
export default [
    {
        url: '/v' + config.controller.version + '/test',
        method: "get",
        permissions: ['all'],
        controller: "test1",
        first: false
    },

    {
        url: '/v' + config.controller.version + '/test2',
        method: "get",
        controller: "test2",
        first: false
    },

    {
        url: '/v' + config.controller.version + '/test3',
        method: "get",
        permissions: ['all'],
        controller: "test3",
        first: false
    },

    {
        url: '/v' + config.controller.version + '/insertReport',
        method: "get",
        permissions: ['all'],
        controller: "insertReport",
        first: false
    },

    {
        url: '/v' + config.controller.version + '/getReport2',
        method: "get",
        permissions: ['all'],
        controller: "getReport2",
        first: false
    },
    {
        url: '/v' + config.controller.version + '/getFile',
        method: "get",
        controller: "sendFile",
        first: false
    },
    {
        url: '/v' + config.controller.version + '/agentTest/1',
        method: "get",
        controller: "agentTest",
        first: false
    },
    {
        url: '/v' + config.controller.version + '/test/updatereport',
        method: "get",
        controller: "updateCarsereaReport",
        first: false
    },
    {
        url: '/v' + config.controller.version + '/test/queryEmailer',
        method: "get",
        controller: "queryEmailer",
        first: false
    },
    {
        url: '/v' + config.controller.version + '/test/updateTemplate',
        method: "get",
        controller: "updateReportTemplate",
        first: false
    },
    {
        url: '/v' + config.controller.version + '/test/function',
        method: "get",
        controller: "testGeneralFunction",
        first: false
    },
    {
        url: '/v' + config.controller.version + '/test/report',
        method: "get",
        controller: "getReport",
        first: false
    },
    {
        url: '/v' + config.controller.version + '/test/or',
        method: "get",
        controller: "orWhere",
        first: false
    },
    {
        url: '/v' + config.controller.version + '/test/sub',
        method: "get",
        controller: "subQuery",
        first: false
    }
]
    
