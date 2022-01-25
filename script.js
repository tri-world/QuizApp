// question 1 ans nile
const ganga = document.getElementById("ganga");
const amazon = document.getElementById("amazon");
const nile= document.getElementById("nile");
const none = document.getElementById("none");
// question 2 ans java
const python = document.getElementById("python");
const go = document.getElementById("go");
const cpp= document.getElementById("c++");
const java = document.getElementById("java");
//question 3  ans yes
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const maybe= document.getElementById("maybe");
const noanswere = document.getElementById("noanswere");
//question 4 ans c
const c = document.getElementById("c");
const java4 = document.getElementById("java4");
const ml= document.getElementById("ml");
const js = document.getElementById("js");
//question 5 ans six
const four = document.getElementById("four");
const five = document.getElementById("five");
const six= document.getElementById("six");
const eleven = document.getElementById("eleven");
// show result variables
const res  =document.getElementById("show-result");
const feedback = document.getElementById("feedback");


function submitAns(){
    let result = 0;
   
    // 
 
     if(nile.checked){
         result++;
     }
      if(java.checked){
         result++;
     }
      if(yes.checked){
         result++;
     }
      if(c.checked){
         result++;
     }
     if(six.checked){
         result++;
     }
    nile.checked=false;
    ganga.checked=false;
    amazon.checked=false;
    none.checked=false;
    yes.checked=false;
    maybe.checked=false;
    no.checked=false;
    noanswere.checked=false;

    c.checked=false;
    java4.checked=false;
    ml.checked=false;
    js.checked=false;
    four.checked=false;
    five.checked=false;
    eleven.checked=false;
    six.checked=false;
    java.checked=false; 
    cpp.checked=false;
 
 if(result==4 || result==5){
    res.textContent="total score: "+result;
    feedback.textContent="YES";
    
}
if(result==3 || result==2){
    res.textContent= "total score: "+result;
    feedback.textContent= " MAY BE";
}
if(result==1 || result==0){
    res.textContent="total score: "+result;
    feedback.textContent="NO";
}


   
}
