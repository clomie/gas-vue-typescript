import { doGet, getOAuthToken, copyFile } from './functions'

declare var global: any

global.doGet = doGet
global.getOAuthToken = getOAuthToken
global.copyFile = copyFile
