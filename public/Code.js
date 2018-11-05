function doGet() {
  return HtmlService.createHtmlOutputFromFile('index').addMetaTag(
    'viewport',
    'width=device-width, initial-scale=1'
  )
}
