import { DATA_SHEET_NAME, DATA_SPREAD_SHEET_ID } from 'config'

interface Property {
    [key: string]: string
}
type Data = string[][] | undefined

export type InfoArray = [string, Property, Property, Data]

export function getInfo(): InfoArray {
    return [
        Session.getActiveUser().getEmail(),
        PropertiesService.getScriptProperties().getProperties(),
        PropertiesService.getUserProperties().getProperties(),
        SpreadsheetApp.openById(DATA_SPREAD_SHEET_ID)
            .getSheetByName(DATA_SHEET_NAME)
            ?.getDataRange()
            .getValues(),
    ]
}
