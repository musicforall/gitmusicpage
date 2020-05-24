
function redirectDownloadInk() {
  switch (navigator.platform) {
    case "MacIntel":
      window.location.replace(
        `https://storage.googleapis.com/ununu/ununu-latest.dmg`
      );
      break;

    //TODO: Add for windowns and linux
    default:
      window.alert(
        "The platform is not supported by INK, please try again on a MacOS system!"
      );
  }
}
