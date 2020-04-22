let arr = [1,2,4,5];
console.log(arr.reduce((res, cur, index, arr)=>{
    console.log(`res:${res}\tcurrent:${cur}\tindex:${index} \t arr:${arr}`);
    return res+cur
}))


//自定义myReduce
Array.prototype.myReduce = function myReduce(func, initVal){
    let preVal = initVal? initVal: this[0];
    let start = initVal? 0:1;
    let index = start;
    // const lenght = this.length;
    // while(index < lenght){
    //     preVal = func(preVal, this[index], index++, this)
    // }
    // console.log('this is my reduce')
    // return preVal;

    const self = this;
    return (function f(preVal, curVal, index, arr){
        if(index === self.length) return preVal;
        return f(func(preVal, self[index], index++, self), self[index], index++, arr);
    })(preVal, self[index], index, self);
}

console.log(arr.myReduce((res, cur, index, arr)=>{
    console.log(`res:${res}\tcurrent:${cur}\tindex:${index} \t arr:${arr}`);
    return res+cur
},9))