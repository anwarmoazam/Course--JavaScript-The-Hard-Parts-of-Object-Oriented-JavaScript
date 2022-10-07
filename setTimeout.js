console.log("Start");

setTimeout(function cb(){
    console.log('Callback');
},5000)

console.log("End");

let startTime = new Date().getTime();
endTime = startTime;
while(endTime < startTime + 10000){
    endTime = new Date().getTime();
    console.log(endTime);
}

console.log('While Expires');