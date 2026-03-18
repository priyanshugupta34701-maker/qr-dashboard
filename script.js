const sheetURL = "https://opensheet.elk.sh/1qaiL7Cd6C8omXEgHa9QsQZShJepWBfM1AAtCQQsW96Y/Wholesellers_List";

fetch(sheetURL)
.then(res => res.json())
.then(data => {

  const container = document.getElementById("cardsContainer");

  data.forEach(item => {

    const card = document.createElement("div");

    card.className = "card";

   card.innerHTML = `
   <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent('https://priyanshugupta34701-maker.github.io/qr-dashboard/tracking.html?wid=' + item.ID)}" alt="QR">
  
  <p class="id">WHOLESALER ID</p>
  <h2>${item.ID}</h2>
  <h3>${item.Name}</h3>
  <p>${item.Location}</p>

  <button onclick="downloadQR('${item.ID}')">Download QR</button>
`;

    container.appendChild(card);

  });

});

function openTracking(id){
  window.location.href = `tracking.html?wid=${id}`;
}

function downloadQR(id){

  const url = `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=https://priyanshugupta34701-maker.github.io/qr-dashboard/tracking.html?wid=${id}`;

  fetch(url)
    .then(res => res.blob())
    .then(blob => {

      const link = document.createElement("a");

      link.href = URL.createObjectURL(blob);

      link.download = `${id}-QR.png`;

      link.click();

    });

}














