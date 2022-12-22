var url = 'https://newsdata.io/api/1/news?apikey=pub_10163278eca6ac85329caeafb15173ef67684&q=cricket';

var req = new Request(url);
let app = document.getElementById('app');
fetch(url).then((e)=> {return e.json()}).then((e)=> { console.log("shit-> " , e.articles)
	let check  = e.results ; 
	for(key in check){
		app.innerHTML+=`${key}. ${check[key].description}<br/><br/><br/>`;
	};
});