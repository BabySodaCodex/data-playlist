alert("hello");

let button = document.getElementById("song-button");
let songs = [];

let userInput = document.getElementById("search");

async function loadSongs() {
  let baseUrl =
    "https://student-data-api.rhyantotherescue-d9d.workers.dev/api/v1/datasets/viral-50-usa/records?";
  let limit = 10;
  let searchInput = `&search=${userInput.value}`;

  let response = await fetch(`${baseUrl}limit=${limit}${searchInput}`);
  console.log("Status: " + response.status);

  let data = await response.json();

  songs = data.records;
  console.log("Records: " + songs.length);

  // Display Data
  const container = document.getElementById("tracks-container");

  // Clear previous results
  container.innerHTML = "";

  songs.forEach(track => {
    container.innerHTML += `
      <h2 class="track-name">${track["Track Name"]}</h2>
      <p class="track-facts"># ${track.Position} — ${track.Artist}</p>
    `;
  });
}

button.addEventListener("click", loadSongs);