let cross= document.getElementById('cross');
let ham= document.getElementById('ham');
let wrapdiv= document.querySelector('.wrapdiv');
let wlist= document.querySelector('.wlist');
let slide1= document.getElementById('slide1');
let slide2= document.getElementById('slide2');
let slide3= document.getElementById('slide3');

slide1.style.background="tomato";
slide1.style.border="1px solid tomato";

if(ham != 'none'){
    cross.style.display='none';
    wrapdiv.style.display='none';   
}
else{
    cross.style.display='block';
    wrapdiv.style.display='block';   
}

ham.addEventListener('click', (e=>{
    cross.style.display='block';
    wrapdiv.style.display='block'; 
    ham.style.display='none';
}))

cross.addEventListener('click', (e=>{
    ham.style.display='block';
    wrapdiv.style.display='none'; 
    cross.style.display='none';
}))

wlist.addEventListener('click', (e=>{
    ham.style.display='block';
    wrapdiv.style.display='none'; 
    cross.style.display='none';
}))


slide1.addEventListener('click', (e=>{
    slide1.style.background="tomato";
    slide1.style.border="1px solid tomato";
    slide2.style.background="rgb(183, 178, 178)";
    slide2.style.border="1px solid rgb(183, 178, 178)";
    slide3.style.background="rgb(183, 178, 178)";
    slide3.style.border="1px solid rgb(183, 178, 178)";
}))

slide2.addEventListener('click', (e=>{
    slide2.style.background="tomato";
    slide2.style.border="1px solid tomato";
    slide3.style.background="rgb(183, 178, 178)";
    slide3.style.border="1px solid rgb(183, 178, 178)";
    slide1.style.background="rgb(183, 178, 178)";
    slide1.style.border="1px solid rgb(183, 178, 178)";
}))

slide3.addEventListener('click', (e=>{
    slide3.style.background="tomato";
    slide3.style.border="1px solid tomato";
    slide2.style.background="rgb(183, 178, 178)";
    slide2.style.border="1px solid rgb(183, 178, 178)";
    slide1.style.background="rgb(183, 178, 178)";
    slide1.style.border="1px solid rgb(183, 178, 178)";
}))