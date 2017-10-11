"use strict";

const apiKey = `c6465d4897feba2c6a295601d4f3afa34e88123f`

// const testURL = `http://www.giantbomb.com/api/search/?api_key=c6465d4897feba2c6a295601d4f3afa34e88123f&format=json&query="metroid prime"&resources=game_rating`
//^ removed "&resources=game" from end of testURL. These are our filters

// const scoreURL = `http://www.giantbomb.com/api/reviews/?format=json&api_key=c6465d4897feba2c6a295601d4f3afa34e88123f`

const searchURL = `https://www.giantbomb.com/api/search/`

// const reviewURL = `http://www.giantbomb.com/api/reviews/`


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
		<div> <p class="gameTitle"> ${result.name} </p> </div>
		<div> <p class="deckER">${result.deck}<p> </div>
		<div class="siteLink"> <a href="${result.site_detail_url}"target="_blank">Check It Out</a> </div>
  		</div>
	`
}


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


function watchSubmit() {
  $('form').submit(function(event) {
  	// $(`#errorMessage`).addClass("hidden");
  	timeoutBackground();
  	// $(`.backgroundImage`).addClass("opacity");
    event.preventDefault();
    let queryTarget = $(event.currentTarget).find('#searchText');
    let query = queryTarget.val();
    //console.log('query', query);
    queryTarget.val("");
    getData(query, displayGame);
    // getScoreData(query,displayGame);
 // showErr(error);
    timeinBackground();
  });
}
$(watchSubmit);


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

// function errorMessage(){
// 	$(`#errorMessage`).html(`<p>Sorry buddy, no results were found. Maybe try being more SPECIFIC ^ or less vague, or stop typing random letters and numbers.</p>`);
// }

// function showErr(error){
// 	const outputElem = $(`.deckER`);
// 	const {status}=error;

// 	let errMsg;

// 	if(status==="null"){
// 		errMsg = "No info"
// 	}

// 	const errHTML =
// 		(`<div> <p class="deckER">${errMsg}<p> </div>`)

// 	outputElem.html(errHTML);
// }


// function errorReport(){
// 	let empt = $(`.flex-container`).value;
// 	if (empt ==""){
// 		alert("please be more specific!")
// 	}
// }


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

