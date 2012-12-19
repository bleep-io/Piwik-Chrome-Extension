var storage = chrome.storage.local;

// Get URL from Settings
storage.get('url', function(items) {
  console.log(items);
    var urlAddress = items.url;
	
// Get API from Settings	
  storage.get('api', function(items) {
  console.log(items);
  
  apiKey = items.api;	
	

	var checkTime = 1 * 60000
	
setInterval(getVisits, checkTime);


  getVisits();
  

  
function getVisits() {
var request = new XMLHttpRequest();

if (request == null){
        alert("Unable to create request");
    }else{
	
        var url = "http://" + urlAddress + "/?module=API&method=Live.getCounters&idSite=1&lastMinutes=1440&format=xml&token_auth=" + apiKey;

        request.onreadystatechange = function()
            {
            if(request.readyState == 4)
            {
                 var xmlDoc = request.responseXML 
                     var visits = xmlDoc.getElementsByTagName("visits")[0].firstChild.nodeValue ; 
					   chrome.browserAction.setBadgeText({text: visits});
				console.log(visits)
            }
        }

        request.open("GET", url, true);
        request.send(null);
    }


}
  });
    });