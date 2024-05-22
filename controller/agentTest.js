import client from "../libs/octopusClient.js";

export default async function agentTest(params) {
    const query = {
        select: '*',
        from: 'agents',
    };
    // {agentName,actionName, params,body}
    let actionName = 'get.pod';
    if (params && params.query && params.query.actionName)
        actionName = params.query.actionName;
    let data = {
        agentName: 'agent1',
        agentId:1,
        agentKey:'1111',
        actionName,
        namespace:'my-namespaces',
    }
    let result = await client.request('agentsManager', data);
    return result;
}