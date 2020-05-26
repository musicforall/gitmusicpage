function downloadRedirect() {
  switch (navigator.platform) {
    case "MacIntel":
      window.location = "https://ununu.io/download-latest.html";
      break;

    default:
      window.location = "https://ununu.io/";
      break;
  }
}
