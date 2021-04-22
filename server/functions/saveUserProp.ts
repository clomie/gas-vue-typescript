export function saveUserProp(key: string, value: string): void {
    PropertiesService.getUserProperties().setProperty(key, value)
}
