"use strict";

const apiKey = `c6465d4897feba2c6a295601d4f3afa34e88123f`

const getURL = `http://www.giantbomb.com/api/game/3030-4725/?api_key=c6465d4897feba2c6a295601d4f3afa34e88123f&format=jsonp&field_list=name,image,medium_url`

const testURL = `http://www.giantbomb.com/api/search/?api_key=c6465d4897feba2c6a295601d4f3afa34e88123f&format=json&query="metroid prime"&resources=game`

const searchURL = `http://www.giantbomb.com/api/search`

// function getData(searchTerm, callback){
// 	const settings = {
// 		url: searchURL,
// 		data: {
// 			api_key: apiKey,
// 			query: `${searchTerm}`,
// 			format: "jsonp",
// 			resources: "game"
// 		},
// 		type: "GET",
// 		dataType: "jsonp",
// 		crossDomain: true,
// 		jsonp: "json_callback",
// 		success: callback
// 	};
// 	$.ajax(settings);
// }



function Myfunction() {

$.ajax({

url: getURL,

type: "GET",

dataType: "jsonp",

crossDomain:true,

jsonp:"json_callback",

success: function(result){

console.log("Worked!");

},

error: function(result){

console.log("Error");

},

});

};

Myfunction()

