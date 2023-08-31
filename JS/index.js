const URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const resp = await fetch(URL + "gaming tracks", {
      method: "GET",
    });
    const albumSelected = await resp.json();
    console.log(albumSelected);

    const gamingTracks = document.getElementById("gaming-tracks");
    gamingTracks.innerHTML = "";

    gamingTracks.id = "dynamic-album";

    gamingTracks.onclick = () => {
      const albumId = albumSelected.data[0].album.id;
      window.location.href = `./album.html?albumId=${albumId}`;
    };

    gamingTracks.innerHTML = `
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

  try {
    const resp = await fetch(URL + "kick ass", {
      method: "GET",
    });
    const albumSelected = await resp.json();
    console.log(albumSelected);

    const kickassMetal = document.getElementById("kickass-metal");
    kickassMetal.innerHTML = "";

    kickassMetal.id = "dynamic-album";

    kickassMetal.onclick = () => {
      const albumId = albumSelected.data[0].album.id;
      window.location.href = `./album.html?albumId=${albumId}`;
    };

    kickassMetal.innerHTML = `<div class="col custom-cols-w rounded-1 p-0 pointer" id="kickass-metal">
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

  try {
    const resp = await fetch(URL + "punk tracks", {
      method: "GET",
    });
    const albumSelected = await resp.json();
    console.log(albumSelected);

    const punkTracks = document.getElementById("punk-tracks");
    punkTracks.innerHTML = "";

    punkTracks.id = "dynamic-album";

    punkTracks.onclick = () => {
      const albumId = albumSelected.data[0].album.id;
      window.location.href = `./album.html?albumId=${albumId}`;
    };

    punkTracks.innerHTML = `
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

  try {
    const resp = await fetch(URL + "hits tracks", {
      method: "GET",
    });
    const albumSelected = await resp.json();
    console.log(albumSelected);

    const hitsTracks = document.getElementById("hits-tracks");
    hitsTracks.innerHTML = "";

    hitsTracks.id = "dynamic-album";

    hitsTracks.onclick = () => {
      const albumId = albumSelected.data[0].album.id;
      window.location.href = `./album.html?albumId=${albumId}`;
    };

    hitsTracks.innerHTML = `
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

  try {
    const resp = await fetch(URL + "muse", {
      method: "GET",
    });
    const albumSelected = await resp.json();
    console.log(albumSelected);

    const sleepTracks = document.getElementById("sleep-tracks");
    sleepTracks.innerHTML = "";

    sleepTracks.id = "dynamic-album";

    sleepTracks.onclick = () => {
      const albumId = albumSelected.data[0].album.id;
      window.location.href = `./album.html?albumId=${albumId}`;
    };

    sleepTracks.innerHTML = `
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

  try {
    const resp = await fetch(URL + "u2", {
      method: "GET",
    });
    const albumSelected = await resp.json();
    console.log(albumSelected);

    const focusTracks = document.getElementById("focus-tracks");
    focusTracks.innerHTML = "";

    focusTracks.id = "dynamic-album";

    focusTracks.onclick = () => {
      const albumId = albumSelected.data[0].album.id;
      window.location.href = `./album.html?albumId=${albumId}`;
    };

    focusTracks.innerHTML = `
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

  try {
  } catch (error) {
    console.error(error);
  }
});
