var storage = chrome.storage.local;

// Get URL from Settings
storage.get('url', function(items) {
  console.log(items);
    var urlAddress = items.url;
	
// Get API from Settings	
  storage.get('api', function(items) {
  console.log(items);
  
  apiKey = items.api;	
	
// Calculate Update Time
	var checkTime = 30 * 60000
	
setInterval(getVisits, checkTime);

// Get Latest Visits on Load
  getVisits();
  

  
function getVisits() {
var request = new XMLHttpRequest();

if (request == null){
        alert("Unable to create request");
    }else{
	// Construct HTTP Request from URL and API Key
        var url = "http://" + urlAddress + "/?module=API&method=Live.getCounters&idSite=1&lastMinutes=1440&format=xml&token_auth=" + apiKey;

        request.onreadystatechange = function()
            {
            if(request.readyState == 4)
            {
                 var xmlDoc = request.responseXML 
				 // Get Number of Visits
                     var visits = xmlDoc.getElementsByTagName("visits")[0].firstChild.nodeValue ; 
					 // Set the Badge Text
					   chrome.browserAction.setBadgeText({text: visits});
				console.log(visits)
            }
		// If URL is not set up in Options display *
		else {
				chrome.browserAction.setBadgeText({text: "*"});
			}
        }

        request.open("GET", url, true);
        request.send(null);
    }


}
  });
    });