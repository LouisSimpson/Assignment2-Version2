"use strict";

(function(){

  let demoJSON = document.getElementById("results");
  let searchButton = document.getElementById("searchButton");
  // get an api key from http://open-platform.theguardian.com/access/
  let baseURL = "https://content.guardianapis.com/search?api-key=317c6d50-efc8-4a5d-a28d-ce37f5f37e87&q=motoGP&show-fields=thumbnail&page-size=3";

  searchButton.addEventListener("click", function(){
    let request = new Request(baseURL);
    fetch(request)
      .then(function (response) {
        // console.log(`response: ${response.status}`);
        return response.json();
      })
      .then(function(data) {
        // console.log(data);
        let key;
        let theData = "";
        //attempt of displaying thumbnail img
        let img = "<img>";
        let tmp = data.response.results;

        if (tmp.thumbnail) {
        img = `<img src="${tmp.thumbnail.source}" alt="${tmp.title}">`;
      }
        for (key in tmp) {
          theData += `<li><a href="${tmp[key].webUrl}"><h3>${tmp[key].webTitle}</h3></a><img src="${tmp[key].fields.thumbnail}"/></li>`;
        }
        demoJSON.innerHTML = theData;
      });

  }, false);

}());
