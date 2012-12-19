var storage = chrome.storage.local;

var submitButton = document.querySelector('button.submit');
var iptext = document.getElementById('ip');
var apitext = document.getElementById('api');

loadChanges();

submitButton.addEventListener('click', saveChanges);

function saveChanges() {
  // Get the current CSS snippet from the form.
  var ipAddress = iptext.value;
  var apiKey = apitext.value;
  // Check that there's some code there.
  if (!ipAddress) {
    message('Error: No IP specified');
    return;
  }
  // Save it using the Chrome extension storage API.
  storage.set({'api': apiKey}, function() {
      message('Settings saved');
  });
  storage.set({'ip': ipAddress}, function() {
    // Notify that we saved.
    message('Settings saved');
  });
}

function loadChanges() {
  storage.get('ip', function(items) {
    // To avoid checking items.css we could specify storage.get({css: ''}) to
    // return a default value of '' if there is no css value yet.
    if (items.ip) {
      iptext.value = items.ip;
      message('Loaded saved IP.');
    }
  });
  storage.get('api', function(items) {
    // To avoid checking items.css we could specify storage.get({css: ''}) to
    // return a default value of '' if there is no css value yet.
    if (items.api) {
      apitext.value = items.api;
      message('Loaded saved IP.');
    }
  });
}