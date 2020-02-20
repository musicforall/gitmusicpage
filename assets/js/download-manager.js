let latestVersion = "1.0.0";

function redirectDownloadInk() {
  switch (navigator.platform) {
    case "MacIntel":
      window.location.replace(
        `https://github.com/ununu-p2p/ink-desktop/releases/download/v${latestVersion}/ununu.Ink-${latestVersion}.dmg`
      );
      break;

    case "Win64":
      window.location.replace(
        `https://github.com/ununu-p2p/ink-desktop/releases/download/v${latestVersion}/ununu.Ink.Setup.${latestVersion}.exe`
      );
      break;

    //TODO: Add for linux
    default:
      window.alert(
        "The platform is not supported by INK, please try again on a Windows, Mac or Linux system!"
      );
  }
}
