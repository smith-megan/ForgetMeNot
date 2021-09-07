// const add=import('add.js')
let list=document.getElementsByClassName("list")

let monthList={
  1: ["Jan","Friday", 31],
  2:["Feb", "Monday", 28],
  3:["Mar", "Monday", 31],
  4:["Apr", "Thursday",30],
  5:["May", "Saturday", 31],
  6:["June", "Tuesday", 30],
  7:["July", "Thursday", 31],
  8:["Aug", "Sunday", 31],
  9:["Sept", "Wednesday", 30],
  10:["Oct", "Friday", 31],
  11:["Nov", "Monday", 30],
  12:["Dec", "Wednesday", 31]
}

function makeCalendar(date){
  let calendar=document.getElementById("calendar")
  let month=document.getElementById("month")
  month.textContent=date[0].toUpperCase()

  let dayLetters=['S',"M","T","W","T","F","S"]
  
  for(let i=0; i<dayLetters.length ;i++){
    let dayLetter=document.createElement('p')
    dayLetter.textContent=dayLetters[i]
    calendar.append(dayLetter)
  }
  for(let i=1; i<date[2]+1; i++){
    let dayCount=document.createElement('p')
    dayCount.textContent=i
    dayCount.setAttribute("class",`day${i}`)
    calendar.append(dayCount)
  }
}

makeCalendar(monthList[9])