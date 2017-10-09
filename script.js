"use strict";

const apiKey = `c6465d4897feba2c6a295601d4f3afa34e88123f`

const testURL = `http://www.giantbomb.com/api/search/?api_key=c6465d4897feba2c6a295601d4f3afa34e88123f&format=json&query="metroid prime"&resources=game_rating`
//^ removed "&resources=game" from end of testURL. These are our filters

const scoreURL = `http://www.giantbomb.com/api/reviews/?format=json&api_key=c6465d4897feba2c6a295601d4f3afa34e88123f`

const searchURL = `http://www.giantbomb.com/api/search/`

const reviewSCORE = `http://www.giantbomb.com/api/reviews/`


function getData(searchTerm, callback){
	const settings = {
		url: searchURL,
		data: {
			api_key: apiKey,
			query: `"${searchTerm}"`,
			format: "jsonp",
			resources: "game",
			// field_list: "api_detail_url",
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


function renderGame(result){

	return `
	<div class="box"> 
	<div> <img src= "${result.image.medium_url}"> <div>
	<div class="siteLink"> <a href="${result.site_detail_url}"> Check it out</a> </div>
		<div> <p class="gameTitle"> ${result.name} </p> </div>
		<div> <p>${result.platforms[0].name}<p> </div>
		<div> <p>${result.deck}<p> </div>
		
  		</div>
	`
}


function displayGame(data){
	const searchResults = data.results.map(renderGame);
	$(`.flex-container`).html(searchResults);
}


function watchSubmit() {
  $('form').submit(function(event) {
    event.preventDefault();
    let queryTarget = $(event.currentTarget).find('#searchText');
    let query = queryTarget.val();
    //console.log('query', query);
    queryTarget.val("");
    getData(query, displayGame);
    // getScoreData(query,displayGame);
 
  });
}
$(watchSubmit);






// function getScoreData(searchTerm, callback){

// 	const scoresettings = {
// 		url: reviewSCORE,
// 			data: {
// 			api_key: apiKey,
// 			query: `"${searchTerm}"`,
// 			format: "jsonp",
// 			resources: "reviews",
// 			// field_list: "name,image,original_game_rating",
// 			limit: 4
// 		},
// 		type: "GET",
// 		dataType: "jsonp",
// 		crossDomain: true,
// 		jsonp: "json_callback",
// 		success: callback
// 	}
// 	$.ajax(scoresettings)
// }







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

