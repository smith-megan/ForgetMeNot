const submitBtn=document.querySelector('#submitBtn')
let events=[]
function submitForm(e){
  e.preventDefault()
  let obj={}
  let elements = document.querySelector("form").elements
  obj.name=elements[0].value
  obj.month=elements[1].value
  obj.day=elements[2].value
  obj.event=elements[3].value
  obj.notes=elements[4].value
  obj.day=elements[5].checked
  obj.threeday=elements[6].checked
  obj.week=elements[7].checked
  events.push(obj)
  console.log(events)
 }

submitBtn.addEventListener("click", (e)=>{submitForm(e)})