function changeLanguage(lang) {
  var currentScript = document.baseURI;

  if (currentScript) {
    var currentScriptPath = currentScript;
    var currentScriptPathSplit = currentScriptPath.split("/");

    var currentScriptFolderPath = currentScriptPath.substring(
      0,
      currentScriptPath.lastIndexOf("/") + 1
    );

    var languageRegex = /\/(en|fa|it)\//;

    var newLanguage = lang;
    var newURL =
      currentScriptFolderPath.replace(languageRegex, "/" + newLanguage + "/") +
      currentScriptPathSplit[currentScriptPathSplit.length - 1];

    window.location.href = newURL;
  }
}
