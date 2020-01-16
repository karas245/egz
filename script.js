//var data =  "data.txt";

/*
function initiateSearch() {
//function readfile() {
	readTextFile();
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", "data.txt", true);
  rawFile.onreadystatechange = function() {
    if (rawFile.readyState === 4) {
      var allText = rawFile.responseText;
      var sordata = JSON.parse(allText);
      //document.getElementById("textSection").innerHTML = sordata[0].height;
      for(var i = size-1; i >= 0; i--) {
		var table = document.getElementById("table");
  		var row = table.insertRow(1);
  		var cell1 = row.insertCell(0);
  		var cell2 = row.insertCell(1);
  		var cell3 = row.insertCell(2);
  		alert(sordata[0].size);
  		cell1.innerHTML = sordata[i].height;
  		cell2.innerHTML = sordata[i].hash;
  		cell3.innerHTML = sordata[i].size;

    }
  	}
  rawFile.send();
}

}
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "data.txt", false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
                var data7 = eval(allText);

                var sordata = JSON.parse(allText);
                for(var i = size-1; i >= 0; i--) {
					var table = document.getElementById("table");
			  		var row = table.insertRow(1);
			  		var cell1 = row.insertCell(0);
			  		var cell2 = row.insertCell(1);
			  		var cell3 = row.insertCell(2);
			  		
			  		cell1.innerHTML = sordata[i].height;
			  		cell2.innerHTML = sordata[i].hash;
			  		cell3.innerHTML = sordata[i].size;
            	}
        	}
    	}
    }
    rawFile.send(null);
}*/

data1 = '[ { "height":"612984","hash":"000000000000000000109a55b34532cd988b0a658af6d6584fce9b15605bcce8","timestamp":"2020-01-15 19:04","size": "1,204,369", "merkle": "d95f9be2b2983fb99aae0b1eccbb1e4e8e08b66ff1357dba5c77a9f182fa2f0f","nonce": "147,762,641"},{ "height":"612983","hash":"000000000000000000002fe5d3f0a211773aa534e36147bc136230dc311e0a11","timestamp":"2020-01-15 18:59","size": "1,345,705", "merkle": "65478d79feefc4c066be34c0c6acb533292178a99d78ce841e29740e94e01a26","nonce": "3,377,854,295"},{ "height":"612982","hash":"00000000000000000006aa964aae2bea0aafce3968dd77528c9a01d9afc1af85","timestamp":"2020-01-15 18:50","size": "1,371,279", "merkle": "f1b634b5239fca3c6ec3e369f50756e6cb32fbf4dac85490359dd1cb21785590","nonce": "3,359,700,662"},{ "height":"612981","hash":"0000000000000000000ccde0b724c864391165f16c406ab0ba2fd25dd1317fc1","timestamp":"2020-01-15 18:30","size": "1,221,888","merkle": "376974900e81c72efa1e16b63dded1fabcb1757ea10e14272976b159aa40a8d5","nonce": "2,910,663,143"},{ "height":"612980","hash":"0000000000000000000dc1218cc307574fd5a773d04626528c3a9cfbe94c4b6b","timestamp":"2020-01-15 18:21","size": "1,120,791","merkle": "b27f1e160ee5575f90ca779eac6ea91f1cfcb9901c6e0ae40e5c05975d62394f","nonce": "2,711,368,953"},{ "height":"612979","hash":"000000000000000000107a9a84527848e3c78583f5fd3be4e18307abfb17c374","timestamp":"2020-01-15 18:18","size": "1,249,535","merkle": "155d024e8549bd54f75a95351da048ccb51e9499f7dfd50ee319679cf06381ef","nonce": "3,868,786,981"},{ "height":"612978","hash":"000000000000000000102261404c1c30feca94faa98fe4ccd788b93757ccd1e8","timestamp":"2020-01-15 18:09","size": "1,193,745","merkle": "7a3af6d56d89d79404ed5aaf6efceb7a9343494bf4783848b2ed295152fbc8a3","nonce": "1,320,065,714"},{ "height":"612977","hash":"0000000000000000000270710c77dc65b883cb1793bc4e70c2f8467a672e6af7","timestamp":"2020-01-15 18:04","size": "1,127,663","merkle": "a91200c36d6a3a6eef02c619f0138e09677d03a7ec104dd4865d1a8395713b4c","nonce": "762,826,108"},{ "height":"612976","hash":"00000000000000000010bf70a87dea443ebf75475b0cb4c05cca5d200b1a9142","timestamp":"2020-01-15 18:04","size": "1,236,820","merkle": "1f8eb435ffac1f2f67222042b5f2b3e8072f37bb17fe267b99bf99171c28f729","nonce": "476,035,892"},{ "height":"612975","hash":"0000000000000000000b15679562edd9bf84748e7c55e1a791ec5419587d7c15","timestamp":"2020-01-15 17:54","size": "1,214,185","merkle": "2d8f78339d16cfda7287f54576e4d15edd96f3d6d05b31f2c88fbd4a670445f9","nonce": "2,671,062,030"},{ "height":"612974","hash":"000000000000000000074d4a5976f08d325a07d3c703db04ff6b6deb18710a78","timestamp":"2020-01-15 17:53","size": "1,184,947","merkle": "767a49ea9682478584c3efafdc4e46eaa09b529911149fd39be992ad46ad80b1","nonce": "439,278,243"},{ "height":"612973","hash":"0000000000000000001267e84b30ec23fa40fc6149413252ac2f9536adb38183","timestamp":"2020-01-15 17:50","size": "1,190,148","merkle": "21ea46837a16935b371cd9417d9add93fc8ef63a15d0cc4e9f4bfad1284579ba","nonce": "3,999,336,597"},{ "height":"612972","hash":"0000000000000000000bbc29774523ece20d2b95273a94a713fae86a34c91a04","timestamp":"2020-01-15 17:50","size": "1,233,970","merkle": "e8dbb5dbd2a968f402c8ae9e919957787126f04b47fd8ba75e9fea730ac9b738","nonce": "1,388,751,882"},{ "height":"612971","hash":"000000000000000000122458a319dafee61850dce3fb16b661b73f35fa81b901","timestamp":"2020-01-15 17:43","size": "1,341,375","merkle": "920fac2847c38db1d9c2bcf5204f59f1d74c214c26679da86ce238ac74fe7746","nonce": "576,650,784"},{ "height":"612970","hash":"000000000000000000110e3f4097d5e61ef782116c0e6df76deb55a47104ab84","timestamp":"2020-01-15 17:31","size": "1,373,392","merkle": "678f34a78c858f409b1abe03c04547ec539d0b328a7b2be2b3a9688518287361","nonce": "383,181,881"},{ "height":"612969","hash":"0000000000000000000eb49dfc2dcd022f50a1120b17e055c13bdc577ef9acf7","timestamp":"2020-01-15 17:08","size": "1,125,669","merkle": "d6b90618e8749307697085a68e98e38146a6fce8b2378e03ac2925a7bc6125bf","nonce": "1,849,188,508"},{ "height":"612968","hash":"000000000000000000110b4ad469b0350cf926de0e795abd9cc5cd0bf984216f","timestamp":"2020-01-15 17:03","size": "1,196,301","merkle": "c24111c07ff7e6e9d817d6abc310c66a2f501b3239ae22ebb5e1ff6505c130ce","nonce": "1,995,691,654"},{ "height":"612967","hash":"00000000000000000011e9d82f91a3898593d0334c58e80c6351751429ebc7e3","timestamp":"2020-01-15 17:01","size": "1,265,646","merkle": "c179f1b44e2a668c450dd11ae1ff62984e7420c893bf4e5db95583d915406198","nonce": "3,948,349,518"},{ "height":"612966","hash":"000000000000000000041caf10af8257e9168796511dfe7cce8cc91cd3dcc7b0","timestamp":"2020-01-15 16:59","size": "1,433,502","merkle": "a8a35c18621c50f2f9c2d75fb7cbe748a00e6ee490a71d2c76e05f0805fa0d6b","nonce": "1,137,057,093"},{ "height":"612965","hash":"000000000000000000116802b5ec3e28cb4ead4f5ff33745c578827dce9f69e4","timestamp":"2020-01-15 16:33","size": "1,270,827","merkle": "9f1aad7204d1fba28ee1dbe1c054bce823e75d6194a661dc9ae3b626f4ba19fd","nonce": "339,883,540"}]'
var mydata = JSON.parse(data1);
var size = Object.keys(mydata).length

function readfile() {

	for(var i = size-1; i >= 0; i--) {
		var table = document.getElementById("table");
  		var row = table.insertRow(1);
  		var cell1 = row.insertCell(0);
  		var cell2 = row.insertCell(1);
  		var cell3 = row.insertCell(2);
  		
  		cell1.innerHTML = mydata[i].height;
  		cell2.innerHTML = mydata[i].hash;
  		cell3.innerHTML = mydata[i].size;
  		
	}
	/*alert(size);*/
}
function goBack() {
	window.location.replace("home.html");
}

function initiateSearch() {

	var Table = document.getElementById("tbody");
	Table.innerHTML = "";
	var table = document.getElementById("table");

	var keyword = document.forms["myForm"]["keyword"];

	var keyword1 = keyword.value;

	var passWord = keyword1;
	localStorage.setItem("textvalue", passWord);
	
	/*alert(typeof keyword.value);
	alert(typeof mydata[0].height);
	alert(typeof mydata[0].hash);
	alert(typeof mydata[0].timestamp);
	alert(typeof mydata[0].size);*/
	console.log(keyword.value);
	/*for(var i = 0; i < size; i++) {
		console.log(mydata[i].height);
		if(mydata[i].height == keyword.value || mydata[i].hash == keyword.value || mydata[i].timestamp == keyword.value)
		{	
			
			var row = table.insertRow(0);
	  		var cell1 = row.insertCell(0);
	  		var cell2 = row.insertCell(1);
	  		var cell3 = row.insertCell(2);
	  		var cell4 = row.insertCell(3);
	  		cell1.innerHTML = mydata[i].height;
	  		cell2.innerHTML = mydata[i].hash;
	  		cell3.innerHTML = mydata[i].timestamp;
	  		cell4.innerHTML = mydata[i].size;
		}
	}*/
	
	goToBlock();
	
}
function goToBlock() {
	window.location.replace("search.html");
}
/*function aler() {
	alert("Atention");
}*/
function generateBlockInfo() {
	var receive = localStorage.getItem("textvalue");
	var keyword = receive;
	console.log("now");
	console.log(keyword);
	for(var i = 0; i < size; i++) {
		//console.log(mydata[i].height);
		if(mydata[i].height == keyword || mydata[i].hash == keyword || mydata[i].timestamp == keyword)
		{	
			
			var row = table.insertRow(0);
	  		var cell1 = row.insertCell(0);
	  		var cell2 = row.insertCell(1);
	  		cell1.innerHTML = "Height"; //mydata[i].height;
	  		cell2.innerHTML = mydata[i].height;

	  		row = table.insertRow(1);
	  		cell1 = row.insertCell(0);
	  		cell2 = row.insertCell(1);
	  		cell1.innerHTML = "Hash"; //mydata[i].height;
	  		cell2.innerHTML = mydata[i].hash;

	  		row = table.insertRow(2);
	  		cell1 = row.insertCell(0);
	  		cell2 = row.insertCell(1);
	  		cell1.innerHTML = "Timestamp"; //mydata[i].height;
	  		cell2.innerHTML = mydata[i].timestamp;

	  		row = table.insertRow(3);
	  		cell1 = row.insertCell(0);
	  		cell2 = row.insertCell(1);
	  		cell1.innerHTML = "Size"; //mydata[i].height;
	  		cell2.innerHTML = mydata[i].size + " bytes";

	  		row = table.insertRow(4);
	  		cell1 = row.insertCell(0);
	  		cell2 = row.insertCell(1);
	  		cell1.innerHTML = "Mekle root"; //mydata[i].height;
	  		cell2.innerHTML = mydata[i].merkle;

	  		row = table.insertRow(5);
	  		cell1 = row.insertCell(0);
	  		cell2 = row.insertCell(1);
	  		cell1.innerHTML = "Nonce"; //mydata[i].height;
	  		cell2.innerHTML = mydata[i].nonce;

		}
	}
}