// Get OAuth token for Picker dialog
// See: https://developers.google.com/apps-script/guides/dialogs#file-open_dialogs
export function getOAuthToken() {
  // Make allow access to GoogleDrive.
  DriveApp.getRootFolder()
  return ScriptApp.getOAuthToken()
}
