export class GooglePicker {
  private readonly developerKey: string
  private readonly oauthToken: string

  constructor(developerKey: string, oauthToken: string) {
    this.developerKey = developerKey
    this.oauthToken = oauthToken
  }

  async pickSpreadsheet(): Promise<PickedObject[]> {
    return await this.pick(google.picker.ViewId.SPREADSHEETS)
  }

  async pickFolder(): Promise<PickedObject[]> {
    return await this.pick(google.picker.ViewId.FOLDERS)
  }

  private async pick(viewId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const view = new google.picker.DocsView(viewId)
        .setIncludeFolders(true)
        .setSelectFolderEnabled(viewId === google.picker.ViewId.FOLDERS)
        .setOwnedByMe(true)

      // See: https://developers.google.com/apps-script/guides/dialogs#file-open_dialogs
      new google.picker.PickerBuilder()
        .addView(view)
        .setOAuthToken(this.oauthToken)
        .setDeveloperKey(this.developerKey)
        .setOrigin(google.script.host.origin)
        .hideTitleBar()
        .enableFeature(google.picker.Feature.NAV_HIDDEN)
        .enableFeature(google.picker.Feature.MINE_ONLY)
        .setSize(1051, 650)
        .setCallback((data: any) => {
          const action = data[google.picker.Response.ACTION]
          if (action === google.picker.Action.PICKED) {
            const docs = data[google.picker.Response.DOCUMENTS]
            resolve(docs)
          } else if (action === google.picker.Action.CANCEL) {
            reject(new Error('Canceled picking folder'))
          }
        })
        .build()
        .setVisible(true)
    })
  }
}
