document.getElementById("wholesellerForm").addEventListener("submit", function(e){

e.preventDefault();

let data = {
  wid: document.getElementById("wid").value,
  name: document.getElementById("name").value,
  location: document.getElementById("location").value
};

fetch("https://script.google.com/macros/s/AKfycbxudcAmn6oSYIc1A7lTeF9Lvai8QYuXkqebhpcocTdfPrDMqIjLvn-BL773sli6OxQokg/exec",{
 method:"POST",
 mode:"no-cors",
 headers:{
   "Content-Type":"application/json"
 },
 body:JSON.stringify(data)
})

.then(()=>{
 alert("Wholeseller Registered");

 window.location.href = "index.html";
});

});