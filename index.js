const currentDayOfTheWeek=document.querySelector('[data-testid="currentDayOfTheWeek"]')
const currentUTCTime=document.querySelector('[data-testid="currentUTCTime"]')

const timeOptions={timeZone:'UTC',hour12:false,hour:'numeric',minute:'2-digit',second:'2-digit'}
const dayOptions={timeZOne:'UTC',weekday:'long'};

function updateClock(){
    const now= new Date()
    var dayString=now.toLocaleDateString('en-US',dayOptions)
    var timeString=now.toLocaleTimeString('en-US',timeOptions)
    currentDayOfTheWeek.innerHTML=dayString
    currentUTCTime.textContent=timeString
}

setInterval(()=>updateClock(),1000)