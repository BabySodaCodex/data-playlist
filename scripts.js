console.log("Hello World");
	
	
 async function loadSongs() {
  let response = await fetch("https://YOUR-API.workers.dev/api/v1/datasets/viral-50-usa/records?limit=10");
  let data = await response.json();
  let songs = data.records;

  console.log(songs); 
  
  
  </body>
</html>


}