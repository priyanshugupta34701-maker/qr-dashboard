const sheetURL = "https://opensheet.elk.sh/1qaiL7Cd6C8omXEgHa9QsQZShJepWBfM1AAtCQQsW96Y/Wholesellers_List";

fetch(sheetURL)
.then(res => res.json())
.then(data => {

  const container = document.getElementById("cardsContainer");

  data.forEach(item => {

    const card = document.createElement("div");

    card.className = "card";

   card.innerHTML = `
  <p class="id">WHOLESALER ID</p>
  <h2>${item.ID}</h2>
  <h3>${item.Name}</h3>
  <p>${item.Location}</p>

  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent('https://priyanshugupta34701-maker.github.io/qr-dashboard/tracking.html?wid=' + item.ID)}" alt="QR">

  <a href="https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${encodeURIComponent('https://priyanshugupta34701-maker.github.io/qr-dashboard/tracking.html?wid=' + item.ID)}" download>
    Download QR
  </a>
`;

    container.appendChild(card);

  });

});

function openTracking(id){
  window.location.href = `tracking.html?wid=${id}`;
}
