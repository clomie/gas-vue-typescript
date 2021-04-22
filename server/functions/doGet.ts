import { FAVICON, PROJECT_TITLE } from 'config'

export function doGet(): GoogleAppsScript.HTML.HtmlOutput {
    // Load index.html(embeded css,js)
    const output = HtmlService.createHtmlOutputFromFile('index')

    output.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    output.setTitle(PROJECT_TITLE)
    output.setFaviconUrl(FAVICON)

    // Set viewport for mobile.
    output.addMetaTag('viewport', 'width=device-width, initial-scale=1')

    return output
}
