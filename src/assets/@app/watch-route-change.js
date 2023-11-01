let currentURL = window.location.href;
var customPopstateEvent = new CustomEvent("custompopstate", {
  detail: { data: "" },
});

function checkForRouteChange() {
  const url = window.location.href;

  if (url !== currentURL) {
    currentURL = url;
    window.dispatchEvent(new CustomEvent("onRouteChange", { detail: url }));
  }
}

setInterval(checkForRouteChange, 1000);
