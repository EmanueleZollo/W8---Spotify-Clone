const URL = `https://striveschool-api.herokuapp.com/api/deezer/search?q=top%20gaming%20tracks`

const selectedSong = async () => {
    try {
      const resp = await fetch(URL, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "86769407aemsh49d93b1655ebfaep126511jsn1297440cf5b8",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      });
      const singleAlbum = await resp.json()
      console.log(singleAlbum);
      
      let chosenAlbum = document.getElementById("gaming-tracks")
      chosenAlbum.innerHTML=`
      <div class="col custom-cols-w rounded-1 p-0 pointer" id="gaming-tracks">
      <div class="row w-100 m-0 align-items-center">
        <div class="col-3 d-flex align-items-center p-0">
          <img src="${singleAlbum.data[0].album.cover}" class="w-100" />
        </div>
        <div class="col-9">
          <p class="m-0 fw-bold pointer">${singleAlbum.data[0].album.title}</p>
        </div>
      </div>
    </div>`;

    }
catch (error) {
  console.error(error);
}

}

selectedSong();

