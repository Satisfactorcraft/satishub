const urlParams = new URLSearchParams(window.location.search);

const application = urlParams.get("application");

switch (application) {
    case "satiseditor":
        document.getElementById("download-link-override").innerHTML = '<a href="downloads/satiseditor-setup.exe" download id="download-link-overridden">Download</a>';
        break;
    default:
        document.getElementById("download-link-override").innerHTML = '<strong>Diese App gibt es nicht</strong>';
}