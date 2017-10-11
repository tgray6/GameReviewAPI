"use strict";

const apiKey = `c6465d4897feba2c6a295601d4f3afa34e88123f`

const searchURL = `https://www.giantbomb.com/api/search/`


//the request to the giantbomb api, searchTerm and callback is inside watchSubmit()
function getData(searchTerm, callback){
	const settings = {
		url: searchURL,
		data: {
			api_key: apiKey,
			query: `"${searchTerm}"`,
			format: "jsonp",
			resources: "game",
			limit: 4
		},
		type: "GET",
		dataType: "jsonp",
		crossDomain: true,
		jsonp: "json_callback",
		success: callback
	};
	$.ajax(settings);
}


//this renders our "postman" data. we use the result parameter (you can name it anything)
//we use a parameter to fill as the object in the "postman" data, which is "results" as seen
//in the displayGame(data). We then MAP all of this content in displayGame(data).
function renderGame(result){
	return `
	<div class="box"> 
	<div> <img src= "${result.image.medium_url}"> <div>
		<div> <p class="gameTitle"> ${result.name} </p> </div>
		<div> <p class="deckER">${result.deck}<p> </div>
		<div class="siteLink"> <a href="${result.site_detail_url}"target="_blank">Check It Out</a> </div>
  		</div>
	`
}


//this is essentially taking our renderGame content and mapping the items to a new array
//we use the data parameter, then run data.RESULTS(the giantbomb array of objects).map(renderGame)
//then, appends the searchResults const to the flex-container.
function displayGame(data){
	const searchResults = data.results.map(renderGame);

	 if(searchResults.length==0){
     $(`#errorMessage`).removeClass("hide");
     }
     else if(searchResults.length>0){
    $(`#errorMessage`).addClass("hide");
	$(`.flex-container`).html(searchResults);
	timeinInitial();
}
};

//This runs our getData function, finds the search term based on the #searchText value,
//then runs our displayGame as the callback, which maps out our RESULTS giantbomb object, and
//appends the data.
function watchSubmit() {
  $('form').submit(function(event) {
  	timeoutBackground();
    event.preventDefault();
    let queryTarget = $(event.currentTarget).find('#searchText');
    let query = queryTarget.val();
    queryTarget.val("");
    getData(query, displayGame);
    timeinBackground();
  });
}
$(watchSubmit);



//Below functions are all fading animations.
function timeoutBackground(){
 $(".backgroundImage").fadeOut(1000, function() {
        $(this).remove();
    });
}

function timeinBackground(){
 $(".box").fadeOut(1300, function() {
    });
}

function timeinInitial(){
$(`.box`).hide().fadeIn(1500);
}












//INITIAL API GET REQUEST TEST
// function Myfunction() {

// $.ajax({

// url: testURL,

// type: "GET",

// dataType: "jsonp",

// crossDomain:true,

// jsonp:"json_callback",

// success: function(result){

// console.log("Worked!");

// },

// error: function(result){

// console.log("Error");

// },

// });

// };

// Myfunction()

