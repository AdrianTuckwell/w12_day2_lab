
window.onload = function() {


  var url = 'https://restcountries.eu/rest/v1/all';
  makeRequest(url, requestComplete);

  var ul = document.querySelector('#countries');
  ul.addEventListener('click', function(e){
      e.preventDefault();

      var country = {
        name: e.target.value
      }


      var url = "http://localhost:3000/bucketlist";
      var request = new XMLHttpRequest();
      request.open("POST", url);
      request.setRequestHeader("Content-Type", "application/json");

      request.onload = function(){
        if(request.status == 200){
          console.log("Country added");
        }
      }
      request.send(JSON.stringify(country));
    }) 
}


      var makeRequest = function(url, callback){
        var request = new XMLHttpRequest();
        request.open("GET", url);
        request.onload = callback;
        request.send();
      }

      var requestComplete = function(){
        if (this.status !== 200) return;
        var jsonString = this.responseText;
        var countries = JSON.parse(jsonString);
    populateList(countries);
  }



var populateList = function(countries){
  var ul = document.getElementById('countries');
  for (var i = 0; i < countries.length; i++) {
   var li = document.createElement('li');
   li.innerText = countries[i].name;
   var button = document.createElement('button');
   button.innerText = "Add to Bucket List";
   button.value = [i];
   ul.appendChild(li);
   ul.appendChild(button);
 }
}


// var saveAccount: function(country){
//   var url = "http://localhost:3000/bucketlist";
//   var request = new XMLHttpRequest();
//   request.open("POST", url);
//   request.setRequestHeader("Content-Type", "application/json");

//   request.onload = function(){
//     if(request.status == 200){
//       console.log("Country added");
//     }
//   }
//   request.send(JSON.stringify(country));
// },

