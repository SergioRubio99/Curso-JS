// LOCATION OBJECT:

console.log('**************URL Object (location)*************');
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search)
console.log(location.pathname);
// location.reload();

//It is importan to run a live server to get this data.
//The port method will return an empty string if the port of the application is the default one.

//The hash is the part of the URL that refers to a specific zones of the DOM. Ex: archlinux.org#packages will return 'packages'.



//location.reload() will give us the characters that we sent to the URL. These are placed at the right side of the question mark. Ex: default URL: archlinux.org  URL with added parameters: archlinux.org/?name=sergio&age=36  location.search will return '?name=sergio&age=36' in the second case.




//HISTORY OBJECT. Stores the pages visited since the user started the session. Notice that if you're using a Live Server, you're starting a session as well (therefore history.length=1). But surfing the net as usual, you can do many things with this object.

console.log(history)

//To go back to a section of the history:
history.back(1);
//You can recede through the history inputting a number.
history.forward(1);
//This two methods are like the arrows of the browser.

history.go(2)


//NAVIGATOR OBJECT. 
console.log(navigator);
navigator.connection;
navigator.geolocation;
navigator.mediaDevices;
navigator.mimeTypes;
navigator.onLine; //to see if connection is on, or if it failed
navigator.serviceWorker; // it allows us to make the site a progressive webapp (install button at the top bar, in chrome). It will be available in chrome apps.
navigator.storage;
navigator.vendorSub;
navigator.userAgent; //Browser and O.S. info.