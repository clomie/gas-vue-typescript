export function doGet(): GoogleAppsScript.HTML.HtmlOutput {
  // Load index.html(embeded css,js)
  const output = HtmlService.createHtmlOutputFromFile('index')

  // Set viewport for mobile.
  output.addMetaTag('viewport', 'width=device-width, initial-scale=1')

  return output
}
