const URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const resp = await fetch(URL + "vasco rossi", {
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
    const resp = await fetch(URL + "ligabue", {
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
    const resp = await fetch(URL + "eminem", {
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
    const resp = await fetch(URL + "chillstep mix", {
      method: "GET",
    });

    const albumSelected = await resp.json();
    console.log(albumSelected);

    const buttonPlay = document.getElementById("btn-play");
    const dynamicPlayer = document.getElementById("dynamic-player");

    buttonPlay.addEventListener("click", () => {
      dynamicPlayer.innerHTML = `<div class="d-flex align-items-center">
    <div class="d-flex align-items-center">
      <img class="img-player" src="assets/imgs/main/image-3.jpg" alt="img" />
      <div class="d-flex flex-column justify-content-center mx-3">
        <h4  class="fs-6 m-0" id="footer-title">${albumSelected.data[0].title}</h4>
        <span class="fs-6 m-0" id="footer-artist">${albumSelected.data[0].artist.name}</span>
      </div>
    </div>
    <div class="d-flex align-items-center">
      <a href="#" class="text-light"><i class="bi bi-heart like"></i></a>
    </div>
  </div>
  <div class="d-flex flex-column">
    <div class="d-flex align-items-center justify-content-center">
      <i class="bi bi-shuffle mx-3 fs-4 text-success"></i>
      <i class="bi bi-skip-start-fill mx-3 fs-4"></i>
      <i class="bi bi-play-circle-fill mx-3 fs-3 pointer"></i>
      <i class="bi bi-skip-end-fill mx-3 fs-4"></i>
      <i class="bi bi-arrow-clockwise mx-3 fs-4 text-success"></i>
    </div>
    <div class="slider_container">
      <div class="current-time">00:00</div>
      <input type="range" min="0" max="100" value="0" class="seek_slider" />
      <div class="total-duration">3:00</div>
    </div>
  </div>

  <div class="d-flex align-items-center">
    <i class="bi bi-mic-fill mx-1 text-white-50"></i>
    <i class="bi bi-list mx-1 text-white-50"></i>
    <i class="bi bi-music-player mx-1 text-white-50"></i>
    <label class="slider">
      <input type="range" class="level" />
      <svg
        class="volume"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="512"
        height="512"
        x="0"
        y="0"
        viewBox="0 0 24 24"
        style="enable-background: new 0 0 512 512"
        xml:space="preserve"
      >
        <g>
          <path
            d="M18.36 19.36a1 1 0 0 1-.705-1.71C19.167 16.148 20 14.142 20 12s-.833-4.148-2.345-5.65a1 1 0 1 1 1.41-1.419C20.958 6.812 22 9.322 22 12s-1.042 5.188-2.935 7.069a.997.997 0 0 1-.705.291z"
            fill="currentColor"
            data-original="#000000"
          ></path>
          <path
            d="M15.53 16.53a.999.999 0 0 1-.703-1.711C15.572 14.082 16 13.054 16 12s-.428-2.082-1.173-2.819a1 1 0 1 1 1.406-1.422A6 6 0 0 1 18 12a6 6 0 0 1-1.767 4.241.996.996 0 0 1-.703.289zM12 22a1 1 0 0 1-.707-.293L6.586 17H4c-1.103 0-2-.897-2-2V9c0-1.103.897-2 2-2h2.586l4.707-4.707A.998.998 0 0 1 13 3v18a1 1 0 0 1-1 1z"
            fill="currentColor"
            data-original="#000000"
          ></path>
        </g>
      </svg>
    </label>
    <i class="bi bi-arrows-angle-expand mx-2 text-white-50"></i>
  </div>
</div>`;
    });
  } catch (error) {
    console.error(error);
  }
});
