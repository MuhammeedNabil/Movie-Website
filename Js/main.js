// ------------------------------------------ Side Nav ------------------------------------------

$(".strip-toggel-menu").click(function () {
  $(".nav-tab-menu").animate({ width: "250px" }, 500);
  $(".nav-item li").animate({ "padding-top": "25px", opacity: "1" }, 2000);
  $(".strip-header-nav").animate({ "margin-left": "250px" }, 500);
  $(".fa-align-justify").css({ display: "none" }, 500);
  $(".fa-xmark").css({ display: "block" }, 500);
});

$(".fa-xmark").click(function () {
  $(".nav-tab-menu").animate({ width: "0px" }, 500);
  $(".nav-item li").animate({ "padding-top": "500px", opacity: "0" }, 1500);
  $(".strip-header-nav").animate({ "margin-left": "0px" }, 500);
  $(".fa-xmark").css({ display: "none" }, 500);
  $(".fa-align-justify").css({ display: "block" }, 500);
});

// ------------------------------------------ //Side Nav ------------------------------------------

// ------------------------------------------ contact section ------------------------------------------
let userName = document.getElementById("name"),
  userEmail = document.getElementById("email"),
  userPhone = document.getElementById("phone"),
  userAge = document.getElementById("age"),
  userPassword = document.getElementById("password"),
  userRePassword = document.getElementById("rePassword"),
  userNameAlert = document.getElementById("namealert"),
  userEmailAlert = document.getElementById("emailalert"),
  userPhoneAlert = document.getElementById("phonealert"),
  userAgeAlert = document.getElementById("agealert"),
  userpasswordAlert = document.getElementById("passwordalert"),
  userRepasswordAlert = document.getElementById("repasswordalert");

function userNameValid() {
  return 1 == /^[a-zA-Z0-9]+$/.test(userName.value)
    ? ((userNameAlert.style.display = "none"), !0)
    : ((userNameAlert.style.display = "block"), !1);
}
function userEmailValid() {
  return 1 ==
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail.value)
    ? ((userEmailAlert.style.display = "none"), !0)
    : ((userEmailAlert.style.display = "block"), !1);
}
function userPhoneValid() {
  return 1 ==
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
      userPhone.value
    )
    ? ((userPhoneAlert.style.display = "none"), !0)
    : ((userPhoneAlert.style.display = "block"), !1);
}
function userAgeValid() {
  return 1 == /^[1-9][0-9]?$|^100$/.test(userAge.value)
    ? ((userAgeAlert.style.display = "none"), !0)
    : ((userAgeAlert.style.display = "block"), !1);
}
function userPasswordValid() {
  return 1 == /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(userPassword.value)
    ? ((userpasswordAlert.style.display = "none"), !0)
    : ((userpasswordAlert.style.display = "block"), !1);
}
function userRePasswordValid() {
  return userPassword.value == userRePassword.value
    ? ((userRepasswordAlert.style.display = "none"), !0)
    : ((userRepasswordAlert.style.display = "block"), !1);
}
(userAgeAlert.style.display = "none"),
  userName.addEventListener("keyup", userNameValid),
  userEmail.addEventListener("keyup", userEmailValid),
  userPhone.addEventListener("keyup", userPhoneValid),
  userAge.addEventListener("keyup", userAgeValid),
  userPassword.addEventListener("keyup", userPasswordValid),
  userRePassword.addEventListener("keyup", userRePasswordValid),
  document.getElementById("contact").addEventListener("click", function () {
    userNameValid() &&
    userEmailValid() &&
    userPhoneValid() &&
    userAgeValid() &&
    userPasswordValid() &&
    userRePasswordValid()
      ? (document.getElementById("submitBtn").disabled = !1)
      : (document.getElementById("submitBtn").disabled = !0);
  });
// ------------------------------------------ //contact section ------------------------------------------
async function getData() {
  let apiResponse = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=88a95f8e2b0a398b7b3ddcd2979b48cb&language=en-US&page=1`
  );
  let responseData = await apiResponse.json();
  let movieInfo = responseData.results;
  var box = ``;
  var base = "https://image.tmdb.org/t/p/w500";
  for (var i = 0; i < movieInfo.length; i++) {
    box += `
  <div class="col-md-6 col-lg-4 my-3 shadow">
          <div class="movie shadow rounded position-relative overflow-hidden">
            <div class="post">
              <img src=${base + movieInfo[i].backdrop_path} alt=${
      base + movieInfo[i].backdrop_path
    } class="img-fluid rounded">
              <div class="layer d-flex align-items-center overflow-hidden ">
                <div class="info ">
                  <h2>${
                    movieInfo[i].original_name || movieInfo[i].original_title
                  }</h2>
                  <p>
                    ${movieInfo[i].overview}
                  </p>
                  <p>rate:${movieInfo[i].vote_average} </p>
                  <p>${
                    movieInfo[i].release_date || movieInfo[i].first_air_date
                  }</p>
                </div>
              </div>
            </div>
          </div>
        </div>`;
  }
  document.getElementById("rowData").innerHTML = box;
}
getData();
async function getTrending() {
  let apiResponse = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=88a95f8e2b0a398b7b3ddcd2979b48cb`
  );
  let responseData = await apiResponse.json();
  let movieInfo = responseData.results;
  var box = ``;
  var base = "https://image.tmdb.org/t/p/w500";
  for (var i = 0; i < movieInfo.length; i++) {
    box += `
  <div class="col-md-6 col-lg-4 my-3 shadow">
          <div class="movie shadow rounded position-relative overflow-hidden">
            <div class="post">
              <img src=${base + movieInfo[i].backdrop_path} alt=${
      base + movieInfo[i].backdrop_path
    } class="img-fluid rounded">
              <div class="layer d-flex align-items-center overflow-hidden ">
                <div class="info ">
                  <h2>${
                    movieInfo[i].original_name || movieInfo[i].original_title
                  }</h2>
                  <p>
                    ${movieInfo[i].overview}
                  </p>
                  <p>rate:${movieInfo[i].vote_average} </p>
                  <p>${
                    movieInfo[i].release_date || movieInfo[i].first_air_date
                  }</p>
                </div>
              </div>
            </div>
          </div>
        </div>`;
  }
  document.getElementById("rowData").innerHTML = box;
}
async function getPopular() {
  let apiResponse = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=88a95f8e2b0a398b7b3ddcd2979b48cb&language=en-US&page=1`
  );
  let responseData = await apiResponse.json();
  let movieInfo = responseData.results;
  var box = ``;
  var base = "https://image.tmdb.org/t/p/w500";
  for (var i = 0; i < movieInfo.length; i++) {
    box += `
  <div class="col-md-6 col-lg-4 my-3 shadow">
          <div class="movie shadow rounded position-relative overflow-hidden">
            <div class="post">
              <img src=${base + movieInfo[i].backdrop_path} alt=${
      base + movieInfo[i].backdrop_path
    } class="img-fluid rounded">
              <div class="layer d-flex align-items-center overflow-hidden ">
                <div class="info ">
                  <h2>${
                    movieInfo[i].original_name || movieInfo[i].original_title
                  }</h2>
                  <p>
                    ${movieInfo[i].overview}
                  </p>
                  <p>rate:${movieInfo[i].vote_average} </p>
                  <p>${
                    movieInfo[i].release_date || movieInfo[i].first_air_date
                  }</p>
                </div>
              </div>
            </div>
          </div>
        </div>`;
  }
  document.getElementById("rowData").innerHTML = box;
}
async function getToprated() {
  let apiResponse = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=88a95f8e2b0a398b7b3ddcd2979b48cb&language=en-US&page=1`
  );
  let responseData = await apiResponse.json();
  let movieInfo = responseData.results;
  var box = ``;
  var base = "https://image.tmdb.org/t/p/w500";
  for (var i = 0; i < movieInfo.length; i++) {
    box += `
  <div class="col-md-6 col-lg-4 my-3 shadow">
          <div class="movie shadow rounded position-relative overflow-hidden">
            <div class="post">
              <img src=${base + movieInfo[i].backdrop_path} alt=${
      base + movieInfo[i].backdrop_path
    } class="img-fluid rounded">
              <div class="layer d-flex align-items-center overflow-hidden ">
                <div class="info ">
                  <h2>${
                    movieInfo[i].original_name || movieInfo[i].original_title
                  }</h2>
                  <p>
                    ${movieInfo[i].overview}
                  </p>
                  <p>rate:${movieInfo[i].vote_average} </p>
                  <p>${
                    movieInfo[i].release_date || movieInfo[i].first_air_date
                  }</p>
                </div>
              </div>
            </div>
          </div>
        </div>`;
  }
  document.getElementById("rowData").innerHTML = box;
}
async function getUpComing() {
  let apiResponse = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=88a95f8e2b0a398b7b3ddcd2979b48cb&language=en-US&page=1`
  );
  let responseData = await apiResponse.json();
  let movieInfo = responseData.results;
  var box = ``;
  var base = "https://image.tmdb.org/t/p/w500";
  for (var i = 0; i < movieInfo.length; i++) {
    box += `
  <div class="col-md-6 col-lg-4 my-3 shadow">
          <div class="movie shadow rounded position-relative overflow-hidden">
            <div class="post">
              <img src=${base + movieInfo[i].backdrop_path} alt=${
      base + movieInfo[i].backdrop_path
    } class="img-fluid rounded">
              <div class="layer d-flex align-items-center overflow-hidden ">
                <div class="info ">
                  <h2>${
                    movieInfo[i].original_name || movieInfo[i].original_title
                  }</h2>
                  <p>
                    ${movieInfo[i].overview}
                  </p>
                  <p>rate:${movieInfo[i].vote_average} </p>
                  <p>${
                    movieInfo[i].release_date || movieInfo[i].first_air_date
                  }</p>
                </div>
              </div>
            </div>
          </div>
        </div>`;
  }
  document.getElementById("rowData").innerHTML = box;
}
// ------------------------------------------ nav-category ------------------------------------------
$(".item1").click(function () {
  getData();
});
$(".item2").click(function () {
  getPopular();
});
$(".item3").click(function () {
  getToprated();
});
$(".item4").click(function () {
  getTrending();
});
$(".item5").click(function () {
  getUpComing();
});
// ------------------------------------------ //nav-category ------------------------------------------

// ------------------------------------------ Search for movie ------------------------------------------

let searchBar = document.getElementById("searchInput");
searchBar.addEventListener("keyup", async function () {
  let searchinput = document.getElementById("searchInput");
  let apiResponse = await fetch(
    `
    https://api.themoviedb.org/3/search/movie?api_key=88a95f8e2b0a398b7b3ddcd2979b48cb&language=en-US&query=${searchinput.value}&page=1&include_adult=false`
  );
  let responseData = await apiResponse.json();
  let movieInfo = responseData.results;
  if (movieInfo) {
    var box = ``;
    var base = "https://image.tmdb.org/t/p/w500";
    for (var i = 0; i < movieInfo.length; i++) {
      box += `
     <div class="col-md-6 col-lg-4 my-3 shadow">
             <div class="movie shadow rounded position-relative overflow-hidden">
               <div class="post">
                 <img src=${base + movieInfo[i].backdrop_path} alt=${
        base + movieInfo[i].backdrop_path
      } class="img-fluid rounded">
                 <div class="layer d-flex align-items-center overflow-hidden ">
                   <div class="info ">
                     <h2>${movieInfo[i].name}</h2>
                     <p>
                       ${movieInfo[i].overview}
                     </p>
                     <p>rate:${movieInfo[i].vote_average} </p>
                     <p>${
                       movieInfo[i].release_date || movieInfo[i].first_air_date
                     }</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>`;
    }
    document.getElementById("rowData").innerHTML = box;
  } else getData();
});

// ------------------------------------------ //Search for movie ------------------------------------------

// ------------------------------------------ Search by word ------------------------------------------

let searchByWord = document.getElementById("searchByWord");
searchByWord.addEventListener("keyup", async function () {
  let searchinput = document.getElementById("searchByWord");
  let apiResponse = await fetch(
    `
    https://api.themoviedb.org/3/search/movie?api_key=88a95f8e2b0a398b7b3ddcd2979b48cb&language=en-US&query=${searchinput.value}&page=1&include_adult=false`
  );
  let responseData = await apiResponse.json();
  let movieInfo = responseData.results;
  if (movieInfo) {
    var box = ``;
    var base = "https://image.tmdb.org/t/p/w500";
    for (var i = 0; i < movieInfo.length; i++) {
      box += `
     <div class="col-md-6 col-lg-4 my-3 shadow">
             <div class="movie shadow rounded position-relative overflow-hidden">
               <div class="post">
                 <img src=${base + movieInfo[i].backdrop_path} alt=${
        base + movieInfo[i].backdrop_path
      } class="img-fluid rounded">
                 <div class="layer d-flex align-items-center overflow-hidden ">
                   <div class="info ">
                     <h2>${movieInfo[i].name}</h2>
                     <p>
                       ${movieInfo[i].overview}
                     </p>
                     <p>rate:${movieInfo[i].vote_average} </p>
                     <p>${
                       movieInfo[i].release_date || movieInfo[i].first_air_date
                     }</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>`;
    }
    document.getElementById("rowData").innerHTML = box;
  } else getData();
});
// ------------------------------------------ //Search by word ------------------------------------------
