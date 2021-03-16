import Vue from 'vue'
import { GooglePicker } from '@/google/picker'
import { GoogleScript } from '@/google/script'

declare module 'vue/types/vue' {
  interface Vue {
    $picker: GooglePicker
    $script: GoogleScript
  }
}
