module.exports = function check(str, bracketsConfig) {


  let obj = Object.fromEntries(bracketsConfig);

  let keys = Object.keys(obj);
  let values = Object.values(obj);

  let res=[];
  for(let i  of str.split('')){
    
    
      if( keys.includes(i)){
        res.push(i);

    }
       else if (values.includes(i)){
      let a = Object.keys(obj).find(key => obj[key] === i);
        if(res.includes(a)){
      res.pop(a);
        }else return false;}
    
  }

  return res.length === 0;
  
}
