let smallDate =new Date('1 18 2023 14:39:17')// remember this is equivalent to 06 01 2010
let bigDate = new Date('2 19 2023 14:27:17')
//dates in js are counted from 0, so 05 is june

function calcDate(bigDate,smallDate) {
    var diff = Math.floor(bigDate.getTime() - smallDate.getTime());
    var seconds=Math.floor((diff/1000));
    var minutes = Math.floor((diff/1000)/60);
    var hour= Math.floor(diff / 36e5);
    var day = 1000 * 60 * 60 * 24;
    var days = Math.floor(diff/day);
    var months = Math.floor(days/31);
    var years = Math.floor(months/12);
let obj={days,months,years,hour,minutes,seconds};
    var message = smallDate.toDateString();
    message += " was "
    message += days + " days " 
    message += months + " months "
    message += years + " years ago \n"

    return obj
    }

    const getAge=(smallDate)=>{
        let tooday=new Date();
        let {years,months,days,hour,minutes,seconds}=calcDate(tooday,smallDate);
        if(years&&years>0)
        return `${years} years`;
        else if(months)
        return `${months} months`;
        else if(days)
        return `${days} days`;
        else if(hour)
        return `${hour} hour`;
        else if(minutes)
        return `${minutes} minutes`;
        else if(seconds)
        return `${seconds} seconds`;       
    }

let a = getAge(smallDate)
console.log('age is',a)




  // update created_at: sqlUpdateNow()}
  export const sqlUpdateNow=()=>{
    let now=new Date().toISOString().split('T')[0];
    now={ raw: `TO_DATE('${rec[tbl.update_date]}', 'YYYY-MM-DD')` };
    return now;
  }


  export const replaceParams = (text, params) => {
    Object.entries(params).forEach(([key, value]) => {
        text = text.replace("{" + key + "}", value);
    });
    return text;
}



  export const getStringDate=(d)=>{
    let now=d?new Date(d):new Date();
    let str = `${now.getDate().toString().padStart(2, '0')}/${now.getMonth() + 1}/${now.getFullYear().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    return str;
  }

