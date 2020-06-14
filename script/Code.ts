import { doGet, getOAuthToken, copyFile } from './functions'

declare let global: { [functionName: string]: unknown }

global.doGet = doGet
global.getOAuthToken = getOAuthToken
global.copyFile = copyFile
