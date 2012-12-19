var storage = chrome.storage.local;

storage.get('ip', function(items) {
  console.log(items);
    var ipAddress = items.ip;
	
  storage.get('api', function(items) {
  console.log(items);
  
  apiKey = items.api;	
	

setInterval(getVisits, 900000);
var i = 1;
  getVisits();
  

  


  
function getVisits() {
var request = new XMLHttpRequest();

if (request == null){
        alert("Unable to create request");
    }else{
	
        var url = "http://" + ipAddress + "/?module=API&method=Live.getCounters&idSite=1&lastMinutes=1440&format=xml&token_auth=" + apiKey;

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