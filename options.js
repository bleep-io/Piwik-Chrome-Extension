var storage = chrome.storage.local;

var submitButton = document.querySelector('button.submit');
var urlText = document.getElementById('url');
var apiText = document.getElementById('api');

loadChanges();

submitButton.addEventListener('click', saveChanges);

function saveChanges() {
  // Get the current CSS snippet from the form.
  var urlAddress = urlText.value;
  var apiKey = apiText.value;
  // Check that there's some code there.
  if (!urlAddress) {
    console.lgo('Error: No URL specified');
    return;
  }
  // Save it using the Chrome extension storage API.
  storage.set({'api': apiKey}, function() {
      message('Settings saved');
  });
  storage.set({'url': urlAddress}, function() {
    // Notify that we saved.
    message('Settings saved');
  });
}

function loadChanges() {
  storage.get('url', function(items) {
    // To avoid checking items.css we could specify storage.get({css: ''}) to
    // return a default value of '' if there is no css value yet.
    if (items.url) {
      urlText.value = items.url;
      console.log('Loaded saved URL.');
    }
  });
  storage.get('api', function(items) {
    // To avoid checking items.css we could specify storage.get({css: ''}) to
    // return a default value of '' if there is no css value yet.
    if (items.api) {
      apitext.value = items.api;
      console.log('Loaded saved API');
    }
  });
}