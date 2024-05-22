

export const join=()=>{
    // my join
  const arr = [
    { email: 'a@gami.com' },
    { email: 'b@gmail.com' },
    { email: '' },
    { email: 'c@gmail.com,d@gmail.com' }
  ];
  arr.reduce((acc, obj) => acc =(acc||'')+','+ obj.email || '', '').split(',').filter(x=>x!='').join();    
  // return 'a@gami.com,b@gmail.com,c@gmail.com,d@gmail.com'  
}


  // remove duplication
  export const uniqe=()=>{
    const arr = ['a@gami.com', 'b@gmail.com', 'd@gmail.com', 'c@gmail.com', 'd@gmail.com', 'a@gmail.com'];
    const uniqueArr = arr.filter((str, index, self) => self.indexOf(str) === index);
  }

  export const groupBy = function (array, key) {
    let i = 0;
    return array.reduce(function (dictinary, item) {
    //   console.log("i:", i++, "dictinary:", dictinary, "item:", item);
      (dictinary[item[key]] = dictinary[item[key]] || []).push(item);
      return dictinary;
    }, {});
  };

  // example: 
// input: ['a@gami.com', 'b@gmail.com', 'd@gmail.com', 'c@gmail.com', 'd@gmail.com', 'a@gmail.com'],
// output: ['a@gami.com', 'b@gmail.com', 'd@gmail.com', 'c@gmail.com']
export const joinUnique=(arr)=>{
    let merge= arr.filter(x=>x!='').reduce((acc, obj) => acc =(acc||'')+','+ obj || '', '').split(',');
    let uniqueArr = merge.filter((str, index, self) => self.indexOf(str) === index);
    return uniqueArr
 }