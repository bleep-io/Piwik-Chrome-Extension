var storage = chrome.storage.local;

// Set Up Variables
var submitButton = document.querySelector('button.submit');
var urlText = document.getElementById('url');
var apiText = document.getElementById('api');

// Load Any Previously Saved Settings
loadChanges();

// Listen for Save Button Click
submitButton.addEventListener('click', saveChanges);

function saveChanges() {
  // Get the current URL and API Values
  var urlAddress = urlText.value;
  var apiKey = apiText.value;

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

    if (items.url) {
      urlText.value = items.url;
      console.log('Loaded saved URL.');
    }
  });
  storage.get('api', function(items) {

    if (items.api) {
      apitext.value = items.api;
      console.log('Loaded saved API');
    }
  });
}