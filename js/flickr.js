"use strict";

(function(){

  let queryBox = document.getElementById("flickrQuery");
  let searchForm = document.getElementById("searchForm");
  let resultsJSON = document.getElementById("imgresults");

  let baseURL = "https://api.flickr.com/services/rest/? \
                method=flickr.photos.search& \
                api_key=c175e99e2afa5bd6d7b9e11e914e0980& \
                format=json& \
                per_page=10& \
                nojsoncallback=1& \
                tags=";

  searchForm.addEventListener("submit", function(ev){
    let url = baseURL + queryBox.value;
    let request = new Request(url);
    fetch(request)
      .then(function (response) {
        // console.log(`res: ${response.status}`);
        return response.json();
      })
      .then(function(data) {
        let theData = "";
        let tmp = data.photos.photo;
        // console.log(data);
        for(let key in tmp) {
          let url = `https://farm${tmp[key].farm}.staticflickr.com/${tmp[key].server}/${tmp[key].id}_${tmp[key].secret}_q.jpg`;
          theData += `<img src="${url}" alt="${tmp[key].title}">`;
        }
        resultsJSON.innerHTML = theData;
      });
    queryBox.value = "";
    ev.preventDefault();
  }, false);

}());
