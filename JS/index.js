const URL = `https://striveschool-api.herokuapp.com/api/deezer/search?q=`;

const selectedSong = async () => {
  try {
    const resp = await fetch(URL + "top gaming tracks", {
      method: "GET",
    });

    const albumObject = await resp.json();

    let gamingTracks = document.getElementById("gaming-tracks");

    gamingTracks.addEventListener("click", () => {
      const tracksId = albumObject.id;
      window.location.href = `album.html?id=${tracksId}`;
    });

    //gamingTracks.innerHTML = "";
    gamingTracks.innerHTML = `
        <div class="row w-100 m-0 align-items-center">
          <div class="col-3 d-flex align-items-center p-0">
            <img src="${albumObject.data[0].album.cover}" class="w-100" />
          </div>
          <div class="col-9">
            <p class="m-0 fw-bold pointer">${albumObject.data[0].album.title}</p>
          </div>
        </div>
      </div>`;
  } catch (error) {
    console.error(error);
  }
};

const selectedSong2 = async () => {
  try {
    const resp = await fetch(URL + "kickass metal", {
      method: "GET",
    });

    const albumObject = await resp.json();

    let kickassMetal = document.getElementById("kickass-metal");
    //gamingTracks.innerHTML = "";
    kickassMetal.innerHTML = `
        <div class="row w-100 m-0 align-items-center">
          <div class="col-3 d-flex align-items-center p-0">
            <img src="${albumObject.data[0].album.cover}" class="w-100" />
          </div>
          <div class="col-9">
            <p class="m-0 fw-bold pointer">${albumObject.data[0].album.title}</p>
          </div>
        </div>
      </div>`;
  } catch (error) {
    console.error(error);
  }
};

const selectedSong3 = async () => {
  try {
    const resp = await fetch(URL + "punk tracks", {
      method: "GET",
    });

    const albumObject = await resp.json();

    let punkTracks = document.getElementById("punk-tracks");
    //gamingTracks.innerHTML = "";
    punkTracks.innerHTML = `
        <div class="row w-100 m-0 align-items-center">
          <div class="col-3 d-flex align-items-center p-0">
            <img src="${albumObject.data[0].album.cover}" class="w-100" />
          </div>
          <div class="col-9">
            <p class="m-0 fw-bold pointer">${albumObject.data[0].album.title}</p>
          </div>
        </div>
      </div>`;
  } catch (error) {
    console.error(error);
  }
};

const selectedSong4 = async () => {
  try {
    const resp = await fetch(URL + "hits tracks", {
      method: "GET",
    });

    const albumObject = await resp.json();

    let hitsTracks = document.getElementById("hits-tracks");
    //gamingTracks.innerHTML = "";
    hitsTracks.innerHTML = `
        <div class="row w-100 m-0 align-items-center">
          <div class="col-3 d-flex align-items-center p-0">
            <img src="${albumObject.data[0].album.cover}" class="w-100" />
          </div>
          <div class="col-9">
            <p class="m-0 fw-bold pointer">${albumObject.data[0].album.title}</p>
          </div>
        </div>
      </div>`;
  } catch (error) {
    console.error(error);
  }
};

const selectedSong5 = async () => {
  try {
    const resp = await fetch(URL + "sleep tracks", {
      method: "GET",
    });

    const albumObject = await resp.json();

    let sleepTracks = document.getElementById("sleep-tracks");
    //gamingTracks.innerHTML = "";
    sleepTracks.innerHTML = `
        <div class="row w-100 m-0 align-items-center">
          <div class="col-3 d-flex align-items-center p-0">
            <img src="${albumObject.data[0].album.cover}" class="w-100" />
          </div>
          <div class="col-9">
            <p class="m-0 fw-bold pointer">${albumObject.data[0].album.title}</p>
          </div>
        </div>
      </div>`;
  } catch (error) {
    console.error(error);
  }
};

const selectedSong6 = async () => {
  try {
    const resp = await fetch(URL + "muse", {
      method: "GET",
    });

    const albumObject = await resp.json();

    let focusTracks = document.getElementById("focus-tracks");
    //gamingTracks.innerHTML = "";
    focusTracks.innerHTML = `
        <div class="row w-100 m-0 align-items-center">
          <div class="col-3 d-flex align-items-center p-0">
            <img src="${albumObject.data[0].album.cover}" class="w-100" />
          </div>
          <div class="col-9">
            <p class="m-0 fw-bold pointer">${albumObject.data[0].album.title}</p>
          </div>
        </div>
      </div>`;
  } catch (error) {
    console.error(error);
  }
};

selectedSong();
selectedSong2();
selectedSong3();
selectedSong4();
selectedSong5();
selectedSong6();
