var storage = chrome.storage.local;

// Set up Variables to Retreive Settings
var ipAddress;
var apiKey;

// Get Piwik URL
storage.get('url', function(items) {
  console.log(items);
  
  urlAddress = items.url;

// Get Piwik API Key  
  storage.get('api', function(items) {
  console.log(items);
  
  apiKey = items.api;

// Load iFrame for 7-Day Stats  
    document.getElementById("content").innerHTML = "<iframe name='inlineframe' src='http://" + urlAddress + "/index.php?module=Widgetize&action=iframe&columns[]=nb_visits&moduleToWidgetize=VisitsSummary&actionToWidgetize=getEvolutionGraph&idSite=1&period=day&date=today&disableLink=1&widget=1&token_auth=" + apiKey + "' frameborder='0' scrolling='auto' width='500' height='245' marginwidth='5' marginheight='5' ></iframe>";
    console.log("Loaded");
  
});

});