function doGet() {
  return HtmlService.createHtmlOutputFromFile('index').addMetaTag(
    'viewport',
    'width=device-width, initial-scale=1'
  )
}

function getOAuthToken() {
  DriveApp.getRootFolder()
  return ScriptApp.getOAuthToken()
}

function copyFile(params) {
  var sourceFile = DriveApp.getFileById(params.source.id)
  var targetFolder = DriveApp.getFolderById(params.target.id)
  var name = params.fileName
  var copy = sourceFile.makeCopy(name, targetFolder)
  var file = {
    id: copy.getId(),
    name: copy.getName(),
    url: copy.getUrl()
  }
  return { file: file }
}
