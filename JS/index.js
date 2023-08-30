const URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const resp = await fetch(URL + "muse", {
      method: "GET",
    });
    const albumSelected = await resp.json();
    console.log(albumSelected);

    const dynamicAlbum = document.getElementById("dynamic-album");
    dynamicAlbum.innerHTML = "";

    dynamicAlbum.id = "dynamic-album";

    dynamicAlbum.onclick = () => {
      const albumId = albumSelected.data[0].album.id;
      window.location.href = `./album.html?albumId=${albumId}`;
    };

    dynamicAlbum.innerHTML = `<div class="col custom-cols-w rounded-1 p-0 pointer" id="gaming-tracks">
    <div class="row w-100 m-0 align-items-center">
      <div class="col-3 d-flex align-items-center p-0">
        <img src="${albumSelected.data[0].album.cover}" class="w-100" />
      </div>
      <div class="col-9">
        <p class="m-0 fw-bold pointer">${albumSelected.data[0].album.title}</p>
      </div>
    </div>
  </div>`;
  } catch (error) {
    console.error(error);
  }
});
