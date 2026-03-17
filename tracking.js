const params = new URLSearchParams(window.location.search);

const wid = params.get("wid");

const finalWid = wid || "WS001";

console.log(finalWid);

document.getElementById("wid").value = finalWid;

document.getElementById("customerForm").addEventListener("submit", function(e){

    e.preventDefault();

    let data = {
        name: document.getElementById("name").value + " " + document.getElementById("lastname").value,
        phone: document.getElementById("phone").value,
        payment: document.getElementById("payment").value,
        wholeseller_id: finalWid
    };

    console.log(data);

    fetch("https://script.google.com/macros/s/AKfycbxudcAmn6oSYIc1A7lTeF9Lvai8QYuXkqebhpcocTdfPrDMqIjLvn-BL773sli6OxQokg/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    .then(() => {
        alert("Saved Successfully");
        document.getElementById("customerForm").reset();
    })

    .catch(error => {
        console.error(error);
    });

});

document.getElementById("pincode").addEventListener("blur", function(){

    const pincode = this.value;

    if(pincode.length === 6){

        fetch(`https://api.postalpincode.in/pincode/${pincode}`)
        .then(res => res.json())
        .then(data => {

            if(data[0].Status === "Success"){

                document.getElementById("city").value = data[0].PostOffice[0].District;
                document.getElementById("state").value = data[0].PostOffice[0].State;

            } else {
                alert("Invalid Pincode");

                document.getElementById("city").value = "";
                document.getElementById("state").value = "";
            }

        });

    }

});