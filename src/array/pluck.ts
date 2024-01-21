export const pluck=(elements,field)=>{
    return elements.map((element)=>element[field]);
};

// pluck([{name:'foo'}],'name')
 //['foo']