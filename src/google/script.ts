export class GoogleScript {
  public getOAuthToken(): Promise<string> {
    return this.run('getOAuthToken')
  }

  public copyFile(params: any): Promise<any> {
    return this.run('copyFile', params)
  }

  private run(functionName: string, arg?: any): Promise<any> {
    if (typeof google === 'undefined' || google.script === undefined) {
      return Promise.resolve()
    }
    return new Promise((resolve, reject) => {
      google.script.run
        .withSuccessHandler(resolve)
        .withFailureHandler(reject)
        [functionName](arg)
    })
  }
}
