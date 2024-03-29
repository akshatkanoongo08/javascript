const BASE_URL=
"https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies "

console.log(BASE_URL)

const dropdowns=document.querySelectorAll(".dropdown select");
console.log(dropdowns)

for(let select of dropdowns){
  for(let currcode in countryList){
    let newOption=document.createElement("option");
    newOption.innerText=currcode;
    newOption.value=currcode;
    console.log(newOption)
    if(select.name==="from" && currcode==="USD"){
      newOption.selected="selected";
    }else if(select.name==="to" && currcode==="INR"){
      newOption.selected="selected"
    }
    select.append(newOption);
  }

select.addEventListener("change",(evt)=>{
  updateflag(evt.target);
});
}
const updateflag=(element)=>{
   console.log(element);
}