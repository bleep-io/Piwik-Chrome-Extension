var storage = chrome.storage.local;
var ipAddress;
var apiKey;


storage.get('ip', function(items) {
  console.log(items);
  
  ipAddress = items.ip;
  
  storage.get('api', function(items) {
  console.log(items);
  
  apiKey = items.api;
  
    document.getElementById("content").innerHTML = "<iframe name='inlineframe' src='http://" + ipAddress + "/index.php?module=Widgetize&action=iframe&columns[]=nb_visits&moduleToWidgetize=VisitsSummary&actionToWidgetize=getEvolutionGraph&idSite=1&period=day&date=today&disableLink=1&widget=1&token_auth=" + apiKey + "' frameborder='0' scrolling='auto' width='500' height='245' marginwidth='5' marginheight='5' ></iframe>";
    console.log("Loaded");
  
});

});





