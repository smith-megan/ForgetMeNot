let todayDate=new Date()
let correctDate=1+todayDate.getMonth()
let monthList={
  1: ["Jan",5, 31],
  2:["Feb", 1, 28],
  3:["Mar", 1, 31],
  4:["Apr", 4,30],
  5:["May", 6, 31],
  6:["June", 2, 30],
  7:["July", 4, 31],
  8:["Aug", 0, 31],
  9:["Sept", 3, 30],
  10:["Oct", 5, 31],
  11:["Nov", 1, 30],
  12:["Dec", 3, 31]
}

function makeCalendar(date){
  let calendar=document.getElementById("calendar")
  let month=document.getElementById("month")
  month.textContent=date[0].toUpperCase()

  let dayLetters=['S',"M","T","W","T","F","S"]
  
  for(let i=0; i<dayLetters.length ;i++){
    let dayLetter=document.createElement('p')
    dayLetter.textContent=dayLetters[i]
    dayLetter.setAttribute("class", `dayLetter L${i}`)
    calendar.append(dayLetter)
  }
  for(let i=0; i<date[1];i++){
    let spacer=document.createElement('div')
    calendar.append(spacer)    
  }
  for(let i=1; i<date[2]+1; i++){
    let dayCount=document.createElement('div')
    dayCount.textContent=i
    dayCount.setAttribute("class",`number N${i}`)
    let circle=document.createElement('div')
    circle.setAttribute("class", `circle${i}`)
    dayCount.append(circle)
    calendar.append(dayCount)
  }
}

makeCalendar(monthList[correctDate])

let list=document.getElementById("list")

function makeList(){
  axios.get("http://localhost:4088/list")
  .then((req,res)=>{
    let eventsListed=req.data

    let eventListItem=document.createElement('div')
    eventsListed.forEach(function(item){
      let pEvent=document.createElement('p')
      if (item.day){
        pEvent.textContent+="📞"
      }
      if (item.threeday){
        pEvent.textContent+="💌"
      }
      if (item.week){
        pEvent.textContent+="🎁"
      }
      pEvent.textContent+=item.month+"/"+item.dayNum+" - "+item.name+" "+item.event+" -Notes: "+item.notes
      
      let choiceCircle=document.getElementsByClassName(`circle${item.dayNum}`)
      let innerCircle=choiceCircle[0]
      innerCircle.classList.toggle("color")

      eventListItem.append(pEvent)
    })
    
    list.append(eventListItem)
    
  })
  .catch(err=>{console.log(err)})
}
document.getElementById("listCheck").addEventListener('click', ()=>{makeList()})
// list.addEventListener("click", ()=>{makeList()})