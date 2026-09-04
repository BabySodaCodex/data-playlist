alert hello
let button = document.getElementById("song-button");	
let songs = [];
let index = 0;
	

async function loadSongs() {
  let response = await fetch("https://YOUR-API.workers.dev/api/v1/datasets/viral-50-usa/records?limit=50");
  console.log("Status: " + response.status);
  let data = await response.json();
  songs = data.records;
  console.log("Records: " + songs.length);

  showSong();
}

function showSong() {
  let song = songs[index];

  document.getElementById("track-name").textContent = song["Track Name"];
  document.getElementById("track-facts").textContent = "#" + song.Position + " — " + song.Artist;
}

button.addEventListener("click", function () {
  loadSongs();
});
