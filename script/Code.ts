import { doGet } from './html'
import { getOAuthToken } from './oauth'
import { copyFile } from './command'

declare var global: any

global.doGet = doGet
global.getOAuthToken = getOAuthToken
global.copyFile = copyFile
