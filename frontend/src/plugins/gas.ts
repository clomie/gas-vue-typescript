import Vue from 'vue'
import { loadGapi } from '@/google/gapi'
import { GoogleScript } from '@/google/script'
import { GooglePicker } from '@/google/picker'

export default async (developerKey: string) => {
  const script = new GoogleScript()
  const [, token] = await Promise.all([
    loadGapi('picker'),
    script.getOAuthToken()
  ])
  const picker = new GooglePicker(developerKey, token)

  Vue.prototype.$script = script
  Vue.prototype.$picker = picker
}
