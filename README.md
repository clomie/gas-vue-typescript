# gas-vue-ts

Google Apps Script project setup with
- TypeScript
- Vue.js
- Vuetify
- Function call from client side
- Google Picker

## Setup

### Install Node Modules
```console
% npm install
```

### Clasp Setup
```console
% npm -g install @google/clasp
% clasp login
% clasp create --type webapp --rootDir dist
Created new undefined script: https://script.google.com/d/**********/edit
Cloned 1 file.
└─ dist/appsscript.json
%
```

### Google Picker Setup
See below link and register your project.  
https://developers.google.com/picker/docs/#appreg

Write your developer key as build environment variables.
```console
% echo 'VUE_APP_PICKER_DEVELOPER_KEY=<Your Developer Key...>' > .env.local
```

### Compiles and Minifies for Production
```console
% npm run build
```

### Push Your Files to GAS Project
```console
% clasp push -f
└─ dist/Code.js
└─ dist/appsscript.json
└─ dist/index.html
Pushed 3 files.
```

### Open Webapp
```
clasp open --webapp
? Open which deployment?
❯                               @HEAD - **********
Opening web application: **********
```

### Customize Configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## See Also
- Google Picker https://developers.google.com/picker/docs/
- Google Apps Script https://developers.google.com/apps-script/overview
- Clasp https://github.com/google/clasp
- Vue CLI https://cli.vuejs.org/guide/
- Vuetify https://vuetifyjs.com/ja/
