export function saveScriptProp(key: string, value: string): void {
    PropertiesService.getScriptProperties().setProperty(key, value)
}
