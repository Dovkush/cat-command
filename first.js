let str=`sonam




sona
petu`;
let arr=str.split("\n");
console.log(arr);
arr=removeLargeSpaces(arr);
console.log(arr);

function  removeLargeSpaces(arr){
    let newarr=[];
    let flag=false;
    for(let i=0;i<arr.length;i++){
       if(arr[i]===''||arr[i]==="\n"){
           if(flag==false){
             newarr.push(arr[i]);
             flag=true;
           }
       }else{
           newarr.push(arr[i]);
           flag=false;
       }
    }
    return newarr;
}