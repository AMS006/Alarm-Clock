const time = document.querySelector(".time");
const hrs = document.querySelector("#hrs");
const min = document.querySelector("#min");
const ampm = document.querySelector("#ampm");
let alarmTime="";
setInterval(()=>{
    let T = new Date()
    let hr = T.getHours();
    let min = T.getMinutes();
    let sec = T.getSeconds();
    let ampm = "";
    if(hr>=12)
        ampm = "PM";
    else
       ampm = "AM";
   hr = hr > 12? hr-12:hr;

   hr = hr<9?'0' + hr:hr;
   min = min<9?'0'+min : min;
   sec = sec<9? '0'+sec : sec;
    

   time.innerHTML = `${hr}:${min}:${sec} ${ampm}`;
   
   if(alarmTime == `${hr}:${min} ${ampm}`)
     console.log("Alarm Ringing");
},1000)


for(let i = 12; i>=1;i--){
    i = i<=9? `${'0'+i}`:`${i}`;
    const optag = `<option value=${i}>${i}</option>`;
     hrs.firstElementChild.insertAdjacentHTML("afterend",optag);
}
for(let i = 59; i>=1;i--){
    i = i<=9? `${'0'+i}`:`${i}`;
    const optag = `<option value="${i}">${i}</option>`;
     min.firstElementChild.insertAdjacentHTML("afterend",optag);
}
for(i = 2;i>0;i--){
    let element = "";
    if(i==1)
      element = "AM";
    else
     element = "PM"
    console.log(element);
    const optag = `<option value="${element}">${element}</option>`;
    console.log(optag);
    ampm.firstElementChild.insertAdjacentHTML("afterend",optag);
}
let setalarm = document.querySelector(".btn");
setalarm.addEventListener("click",ringAlarm);
function ringAlarm(){
    alarmTime = `${hrs.value}:${min.value} ${ampm.value}`;
    console.log(alarmTime);

    setalarm.innerHTML = "Clear Alarm";
}