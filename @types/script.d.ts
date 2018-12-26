declare interface PickedObject {
  id: string
  url: string
  name: string
  parentId: string
}

declare interface DriveFile {
  id: string
  url: string
  name: string
}

declare interface CopyFileParams {
  source: PickedObject
  target: PickedObject
  fileName: string
}

declare interface CopyFileResult {
  file: DriveFile
}
