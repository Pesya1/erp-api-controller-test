
import fs from 'fs/promises';
import client from "../libs/octopusClient.js";
import fs2 from 'fs';
import { OctopusStream } from 'octopusmb-client';

let i = 1;


/* A CREATE */
export const createEmail = async () => {
    let data = {
        to: 'PesyaS@one1.co.il',
        subject: `${i++} one send you new message!`,
        text: `good morning!`,
    };
    // let result = await fs.readFile('../../tree.jpg');
    // data.buffers.push({
    //     filename: 'tree.jpg',
    //     content: Buffer.from(result)
    // });
    data.action = 'create';

    let send = await client.request("email", data)
    return send;
}

/* B ADD ATTACHMENT */
export const addAttachment =async (id) => {
    let filename='raim.JPG'
   let readableStream =fs2.createReadStream(`../../../${filename}`);
    // With a buffer

    const octopusStream = new OctopusStream({
        stream: readableStream,
        extra: {
             id,filename
        }
    })
    var result = await client.request("email", octopusStream);

    return result;


}
/* C SEND */
export const send=async(id)=>{
    var result = await client.request("email", {action:'sendItem', id});
    return result;
}


export const test1 = async (params) => {
    try {
        //        let result = await callSelectChildren();
        let result = await createEmail(params.id);
        return result;
    }
    catch (error) {
        console.log(error);
        return { message: 'error', data: error.message };
    }
}

export const test2 = async (params) => {
    try {
       let result = await addAttachment(params.query?params.query.id:null);
        return result;
    }
    catch (error) {
        console.log(error);
        return { message: 'error', data: error.message };
    }
}

const sendEmail = async (param) => {
    let data = {
        to: 'PesyaS@one1.co.il',
        subject: `${i++} one send you new message!`,
        text: `good morning!`,
        attachments: [{
            filename: 'text.txt',
            content: 'hello world!',
            contentType: 'text/plain'
        },
        ],
        buffers: []
    };
    let result = await fs.readFile('../../tree.jpg');
    data.buffers.push({
        filename: 'tree.jpg',
        content: Buffer.from(result)
    })

    let send = await client.request("email", data)
    return send;
}
