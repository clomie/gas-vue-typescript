import { doGet } from 'functions/doGet'
import { getInfo } from 'functions/getInfo'
import { saveScriptProp } from 'functions/saveScriptProp'
import { saveUserProp } from 'functions/saveUserProp'

declare let global: { [functionName: string]: unknown }

global.doGet = doGet
global.getInfo = getInfo
global.saveScriptProp = saveScriptProp
global.saveUserProp = saveUserProp
