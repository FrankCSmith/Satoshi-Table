

document.addEventListener("DOMContentLoaded", getBitCoinData);
document.addEventListener("DOMContentLoaded", getEthereumData);
document.addEventListener("DOMContentLoaded", getLitecoinData);
document.addEventListener("DOMContentLoaded", getRippleData);


function getBitCoinData(){
	document.getElementById("getPrice").addEventListener("click", function(event){
		var req = new XMLHttpRequest();
		req.open("GET","https://api.coinmarketcap.com/v2/ticker/1/", true);
		req.addEventListener('load', function(){
			document.getElementById("nameBTC").textContent = JSON.parse(req.responseText).data.symbol;
			document.getElementById("priceBTC").textContent = JSON.parse(req.responseText).data.quotes.USD.price + " USD";
			document.getElementById("change1BTC").textContent = JSON.parse(req.responseText).data.quotes.USD.percent_change_1h + "% 1hr";
			document.getElementById("change24BTC").textContent = JSON.parse(req.responseText).data.quotes.USD.percent_change_24h + "% 24hr";
			document.getElementById("change7BTC").textContent = JSON.parse(req.responseText).data.quotes.USD.percent_change_7d + "% 7day";
			document.getElementById("market_capBTC").textContent = JSON.parse(req.responseText).data.quotes.USD.market_cap.toLocaleString() + " USD";	
		});
		req.send(null);
		event.preventDefault();
	});
}

function getEthereumData(){
	document.getElementById("getPrice").addEventListener("click", function(event){
		var req = new XMLHttpRequest();
		req.open("GET","https://api.coinmarketcap.com/v2/ticker/1027/", true);
		req.addEventListener('load', function(){
			document.getElementById("nameETH").textContent = JSON.parse(req.responseText).data.symbol;
			document.getElementById("priceETH").textContent = JSON.parse(req.responseText).data.quotes.USD.price + " USD";
			document.getElementById("change1ETH").textContent = JSON.parse(req.responseText).data.quotes.USD.percent_change_1h + "% 1hr";
			document.getElementById("change24ETH").textContent = JSON.parse(req.responseText).data.quotes.USD.percent_change_24h + "% 24hr";
			document.getElementById("change7ETH").textContent = JSON.parse(req.responseText).data.quotes.USD.percent_change_7d + "% 7day";
			document.getElementById("market_capETH").textContent = JSON.parse(req.responseText).data.quotes.USD.market_cap.toLocaleString() + " USD";
		});
		req.send(null);
		event.preventDefault();
	});
}

function getLitecoinData(){
	document.getElementById("getPrice").addEventListener("click", function(event){
		var req = new XMLHttpRequest();
		req.open("GET","https://api.coinmarketcap.com/v2/ticker/2/", true);
		req.addEventListener('load', function(){
			document.getElementById("nameLC").textContent = JSON.parse(req.responseText).data.symbol;
			document.getElementById("priceLC").textContent = JSON.parse(req.responseText).data.quotes.USD.price + " USD";
			document.getElementById("change1LC").textContent = JSON.parse(req.responseText).data.quotes.USD.percent_change_1h + "% 1hr";
			document.getElementById("change24LC").textContent = JSON.parse(req.responseText).data.quotes.USD.percent_change_24h + "% 24hr";
			document.getElementById("change7LC").textContent = JSON.parse(req.responseText).data.quotes.USD.percent_change_7d + "% 7day";
			document.getElementById("market_capLC").textContent = JSON.parse(req.responseText).data.quotes.USD.market_cap.toLocaleString() + " USD";
		});
		req.send(null);
		event.preventDefault();
	});
}

function getRippleData(){
	document.getElementById("getPrice").addEventListener("click", function(event){
		var req = new XMLHttpRequest();
		req.open("GET","https://api.coinmarketcap.com/v2/ticker/52/", true);
		req.addEventListener('load', function(){
			document.getElementById("nameXRP").textContent = JSON.parse(req.responseText).data.symbol;
			document.getElementById("priceXRP").textContent = JSON.parse(req.responseText).data.quotes.USD.price + " USD";
			document.getElementById("change1XRP").textContent = JSON.parse(req.responseText).data.quotes.USD.percent_change_1h + "% 1hr";
			document.getElementById("change24XRP").textContent = JSON.parse(req.responseText).data.quotes.USD.percent_change_24h + "% 24hr";
			document.getElementById("change7XRP").textContent = JSON.parse(req.responseText).data.quotes.USD.percent_change_7d + "% 7day";
			document.getElementById("market_capXRP").textContent = JSON.parse(req.responseText).data.quotes.USD.market_cap.toLocaleString() + " USD";
		});
		req.send(null);
		event.preventDefault();
	});
}

