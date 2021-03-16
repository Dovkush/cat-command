#!/usr/bin/env node

const fs=require("fs");
(function(){
 let cmd=process.argv.slice(2);
 let options=[];
 let files=[];
 let str="";
 for(let i=0;i<cmd.length;i++){
     if(cmd[i].startsWith("-")){
         options.push(cmd[i]);
     }else{
         files.push(cmd[i]);
     }
 }

 for(let i=0;i<files.length;i++){
     if(fs.existsSync(files[i])){
         str+=fs.readFileSync(files[i]).toString();
     }else{
         console.log("Invalid File");
          return;
         }
 }
str =str.split("\n");

 if(options.includes("-s")){
  str = removeLargeSpaces(str);
 }
 if(options.includes("-n")&&options.includes("-b")){
   if(options.indexOf("-n")>options.indexOf("-b")){
    //-n  
   str=addNonNum(str);
   }else{
       //-b
      str= addAllNum(str);
   }
 }else{
     if(options.includes("-n")){
        //-n
       str= addAllNum(str);
     }else if(options.includes("-b")){
         //-b
        str= addNonNum(str);
     }

 }
str=str.join("\n");
console.log(str);
})();
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
function addAllNum(str){
    for(let i=1;i<=str.length;i++){
       str[i-1]=i+" "+str[i-1];
    }
    return str;
}
function addNonNum(str){
    let listNumber=1;
    for(let i=0;i<str.length;i++){
        if(str[i]!==""&&str[i]!=="\r"){
            str[i]=listNumber+" "+str[i];
            listNumber++;
        }
    }
    return str;
}
