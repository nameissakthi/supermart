let spantimer=document.getElementById("timer")

function timer(){
    let time=new Date()
    let hrs=time.getHours()
    let min=time.getMinutes()
    let sec=time.getSeconds()
    if(hrs<10){
        hrs=`0${hrs}`
    }
    if(min<10){
        min=`0${min}`
    }
    if(sec<10){
        sec=`0${sec}`
    }
    let timer=`${hrs} : ${min} : ${sec}`
    spantimer.innerText=timer
}

setInterval(timer,500)

let search=document.querySelectorAll(".search")
console.log(search)

search[1].addEventListener("click",()=>{
    console.log(search[0])
    if(search[0].value==''){
        search[0].focus()
    }else{
        let searchtxt=search[0].value
        search[0].parentElement.action=`https://www.amazon.com`
    }
})