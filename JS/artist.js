const URL = "https://striveschool-api.herokuapp.com/api/deezer/artist/";
const artistId = new URLSearchParams(window.location.search).get("artistId");

const URL2 = "https://striveschool-api.herokuapp.com/api/deezer/album/";
const albumId = new URLSearchParams(window.location.search).get("albumId");

console.log("artistId:", artistId);
console.log("albumId:", albumId);

// FUNZIONE PER IL FORMATO DI TEMPO DELLE CANZONI
function formatDuration(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  if (hours > 0) {
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
    return formattedTime;
  } else {
    const formattedTimeSecond = `${minutes.toString().padStart(1, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
    return formattedTimeSecond;
  }
}

//CREAZIONE PAGINA DINAMICA PER CIASCUN ARTISTA
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const resp = await fetch(URL + artistId, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "446acbbc21mshddea86ae7700867p1e29b9jsnd56234c5f0d5",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    });
    const artistSelected = await resp.json();
    console.log(artistSelected);

    const tracklistURL = artistSelected.tracklist;

    const artist = document.getElementById("main-col");
    artist.innerHTML = ` <main class="container-fluid px-0 text-light w-100 bg-black">
    <div class="bg-image w-100" style="background-image: url(${artistSelected.picture_xl})" id="bg-image">
      <div class="d-flex justify-content-between align-items-center w-100 p-3">
        <div class="d-flex">
          <div class="me-2 px-1 bg-dark rounded-5 pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="30"
              fill="currentColor"
              class="bi bi-arrow-left text-light"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </div>
          <div class="me-2 px-1 bg-dark rounded-5 pointer d-none d-lg-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="30"
              fill="currentColor"
              class="bi bi-arrow-right text-light"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </div>
        </div>
        <div class="dropdown d-none d-lg-flex">
          <button
            class="btn btn-dark dropdown-toggle rounded-5 ps-1 pe-2 d-flex align-items-center"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src="assets/imgs/main/image-1.jpg" class="ps-1 account-image rounded-5" />
            <p class="m-0 ms-2">Team 1</p>
          </button>
          <ul class="dropdown-menu bg-dark">
            <li>
              <a class="dropdown-item text-bg-dark" href="#">Account</a>
            </li>
            <li>
              <a class="dropdown-item text-bg-dark" href="#">Settings</a>
            </li>
            <li>
              <a class="dropdown-item text-bg-dark" href="#">Log out</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="name-artist" class="row mt-5 p-4">
         <div class="col">
          <h4 class="fs-6 mb-1 d-none d-lg-flex">
            <i class="bi bi-patch-check-fill text-primary mb-0 me-1"></i>
            <p class="m-0 shadow-txt">Artista verificato</p>
          </h4>
          <h2 id="artist-name" class="shadow-txt fs-1 fw-bolder mb-4">${artistSelected.name}</h2>
          <span id="artist-listener" class="shadow-txt d-none d-lg-flex">${artistSelected.nb_fan} ascoltatori mensili</span>
        </div> 
      </div>
    </div>
    <div class="bg-container">
      <div class="row w-100 m-0">
        <span id="artist-listener" class="d-lg-none ms-3 mt-2 text-white-50">3.433.158 ascoltatori mensili</span>
        <div class="col p-3 d-flex align-items-center justify-content-between justify-content-lg-start">
          <div class="d-flex align-items-center">
            <h4 class="d-lg-none mb-0">Seguiti</h4>
            <i class="bi bi-three-dots-vertical d-lg-none ms-5 fs-3"></i>
          </div>
          <div class="d-flex align-items-center">
            <i class="bi bi-shuffle mx-3 fs-4 text-success d-lg-none"></i>
            <i class="bi bi-play-circle-fill text-success fs-1 ms-3"></i>
          </div>
          <button
            type="button"
            class="btn btn-outline-light ms-4 px-4 py-3 h-50 d-flex align-items-center d-none d-lg-flex"
          >
            Following
          </button>
          <i class="bi bi-three-dots ms-4 pointer d-none d-lg-flex"></i>
        </div>
      </div>
      <div class="row w-100 m-0 flex-row-reverse">
        <div class="col-12 col-lg-5 mb-2 mb-lg-0">
          <h4>Brani che ti piacciono</h4>
          <div class="row mt-2">
            <div class="col d-flex align-items-center">
              <img class="img-like rounded-circle" src="${artistSelected.picture_small}" alt="img" />
              <div class="d-flex flex-column justify-content-center ms-2">
                <h6 class="m-0">Hai messo Mi piace a 11 brani</h6>
                <span class="text-white-50" id="art-name">Di ${artistSelected.name}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-7 mt-2 mt-lg-0">
          <h4>Popolari</h4>
          <div class="row p-0 mt-3" id="artists-tracks">
      
            </div> 
          
          <div class="col">
              <a href="#" class="text-white-50 fs-6 text-decoration-none">VISUALIZZA ALTRO</a>
            </div> 
        </div>
      </div>
    </div>
  </main>`;

    try {
      const tracklistResponse = await fetch(tracklistURL);
      const tracksData = await tracklistResponse.json();

      const artistsTracks = document.getElementById("artists-tracks");
      artistsTracks.innerHTML = "";

      for (let i = 0; i < 5 && i < tracksData.data.length; i++) {
        const track = tracksData.data[i];
        const trackElement = document.createElement("div");
        trackElement.classList.add("col-12", "d-flex", "align-items-center", "mb-3", "justify-content-between");
        const formattedDuration = formatDuration(track.duration);

        trackElement.innerHTML = `
        <div class="col-12 d-flex align-items-center mb-3 justify-content-between">
              <div class="col-7 d-flex align-items-center">
                <span class="text-white-50">${i + 1}</span>
                <img class="w-img ms-3" src="${track.album.cover}" alt="img" />
                <h4 class="mb-0 ms-3 fs-6">${track.title}</h4>
              </div>
              <div class="col-3 d-none d-lg-flex">
                <span class="me-2 text-white-50">${track.rank}</span>
              </div>
              <div class="col-2">
                <i class="bi bi-three-dots-vertical d-lg-none text-white-50"></i>
                <span class="text-white-50 d-none d-lg-flex">${formattedDuration}</span>
              </div>
            </div>
            
            
      `;
        artistsTracks.appendChild(trackElement);
      }
    } catch (error) {
      console.error("Errore durante il recupero delle tracce:", error);
    }
  } catch (error) {
    console.error(error);
  }
});
