import fs2 from 'fs';
import { OctopusStream } from 'octopusmb-client';

export default async function sendFile(props){
    let filename="03 שיר הנענועים.mp3"
    let readableStream =fs2.createReadStream(`C:/Users/pesyas/Downloads/${filename}`);
     const octopusStream = new OctopusStream({
         stream: readableStream,
         extra: {
              filename,
            download:true
         }
     })  
     return octopusStream;
 
}