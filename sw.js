if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(function(registration) {
        console.log('Service worker registered successfully');
      })
      .catch(function(error) {
        console.log('Error registering service worker:', error);
      });
  }
  