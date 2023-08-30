//const URL = "https://striveschool-api.herokuapp.com/api/deezer/album/157681642";

const URL = "https://striveschool-api.herokuapp.com/api/deezer/album/";
const albumId = new URLSearchParams(window.location.search).get("albumId");

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

function reverseDate(dateString) {
  const dateComponents = dateString.split("-");
  const reversedDate = dateComponents.reverse().join("/");

  return reversedDate;
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const resp = await fetch(URL + albumId, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "446acbbc21mshddea86ae7700867p1e29b9jsnd56234c5f0d5",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    });

    const album = await resp.json();
    console.log(album);

    const totalSeconds = album.duration;

    const formattedDuration = formatDuration(totalSeconds);

    const originalDate = album.release_date;
    const reversedDate = reverseDate(originalDate);

    const infoAlbum = document.getElementById("albumList");

    infoAlbum.innerHTML = `
    <div id="albumList" class="d-flex flex-column align-items-center flex-lg-row mt-4">
            <img src="${album.cover_medium}" class="big-album-image pointer" alt="" />
            <div class="d-flex flex-column ms-4 w-100">
              <h6 class="mb-3 d-none d-lg-flex">ALBUM</h6>
              <h1 id="songTitle" class="fw-bold mb-3 pointer mt-3 mt-lg-0">${album.title}</h1>
              <div class="d-flex align-items-center">
                <p class="m-0 fw-bold">${album.artist.name}</p>
                <span class="d-none d-lg-flex">&nbsp;-&nbsp;</span>
                <p class="m-0 d-none d-lg-flex">${reversedDate}</p>
                <span class="d-none d-lg-flex">&nbsp;-&nbsp;</span>
                <p class="m-0 fw-bold d-none d-lg-flex">${album.nb_tracks}</p>
                <span class="d-none d-lg-flex">,&nbsp;</span>
                <p class="m-0 d-none d-lg-flex">${formattedDuration}.</p>
              </div>
            </div>
          </div> `;

    const tracksList = document.getElementById("tracks-list");

    for (let i = 0; i < album.tracks.data.length; i++) {
      let tracksData = album.tracks.data[i];

      let trackDuration = tracksData.duration;
      let trackDurationReader = formatDuration(trackDuration);

      const trackContainer = document.createElement("div");

      /* tracksList.innerHTML = `
         <div id="tracks-list" class="d-flex flex-column">
             <div class="row w-100 mx-0 mb-2 mt-1">
                <div class="col-7 p-0 px-2">
                  <div class="d-flex align-items-center">
                    <p class="m-0 text-secondary fs-5">1</p>
                    <div class="d-flex flex-column ms-3">
                      <h6 class="m-0">${tracksData.title}</h6>
                      <p class="m-0 text-secondary">${tracksData.artist.name}</p>
                    </div>
                  </div>
                </div>
                <div class="col-3 px-2 text-secondary d-flex flex-column align-items-end">
                  <p class="m-0 text-secondary d-none d-lg-flex">${tracksData.rank}</p>
                </div>
                <div class="col-2 p-0 px-2 d-flex flex-column align-items-end">
                  <i class="bi bi-three-dots-vertical d-lg-none text-white-50 me-2"></i>
                  <p class="m-0 text-secondary d-none d-lg-flex">${trackDurationReader}</p>
                </div>
              </div>`;  */

      trackContainer.innerHTML = `
      <div id="tracks-list" class="d-flex flex-column">
      <div class="row w-100 mx-0 mb-2 mt-1">
         <div class="col-7 p-0 px-2">
           <div class="d-flex align-items-center">
             <p class="m-0 text-secondary fs-5">${i + 1}</p>
             <div class="d-flex flex-column ms-3">
               <h6 class="m-0">${tracksData.title}</h6>
               <p class="m-0 text-secondary">${tracksData.artist.name}</p>
             </div>
           </div>
         </div>
         <div class="col-3 px-2 text-secondary d-flex flex-column align-items-end">
           <p class="m-0 text-secondary d-none d-lg-flex">${tracksData.rank}</p>
         </div>
         <div class="col-2 p-0 px-2 d-flex flex-column align-items-end">
           <i class="bi bi-three-dots-vertical d-lg-none text-white-50 me-2"></i>
           <p class="m-0 text-secondary d-none d-lg-flex">${trackDurationReader}</p>
         </div>
       </div>`;

      tracksList.appendChild(trackContainer);
    }
  } catch (error) {
    console.error(error);
  }
});
