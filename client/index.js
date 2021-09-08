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
    let dayCount=document.createElement('div')
    dayCount.textContent=i
    dayCount.setAttribute("class",`day${i}`)
    calendar.append(dayCount)
  }
}

makeCalendar(monthList[9])

let list=document.getElementById("list")

function makeList(){
  axios.get("http://localhost:4088/list")
  .then((req,res)=>{
    // console.log(req.body)
    // console.log(res.body)
    let eventsListed=req.data
    console.log(eventsListed)

    let eventListItem=document.createElement('div')
    eventsListed.forEach(function(item,index,arr){
      let pEvent=document.createElement('p')
      pEvent.textContent=item.name+" "+item.month+" "+item.dayNum+" "+item.event
      console.log(item)

      eventListItem.append(pEvent)
    })
    
    // dayCount.setAttribute("class",`day${i}`)
   
    list.append(eventListItem)
    console.log("hi")
    
  })
  .catch(err=>{console.log(err)})
}
document.getElementById("listCheck").addEventListener('click', ()=>{makeList()})
// list.addEventListener("click", ()=>{makeList()})