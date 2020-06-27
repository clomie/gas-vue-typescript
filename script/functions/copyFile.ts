export function copyFile(params: CopyFileParams): CopyFileResult {
  const sourceFile = DriveApp.getFileById(params.source.id)
  const targetFolder = DriveApp.getFolderById(params.target.id)
  const name = params.fileName
  const copy = sourceFile.makeCopy(name, targetFolder)
  const file = {
    id: copy.getId(),
    name: copy.getName(),
    url: copy.getUrl()
  }
  return { file }
}
