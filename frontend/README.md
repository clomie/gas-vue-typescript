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
- Vue CLI https://cli.vuejs.org/guide/
- html-webpack-plugin(v3) https://github.com/jantimon/html-webpack-plugin/tree/version-3.x
- html-webpack-inline-source-plugin https://github.com/DustinJackson/html-webpack-inline-source-plugin/
- webpack-cdn-plugin https://github.com/van-nguyen/webpack-cdn-plugin
- Google Picker https://developers.google.com/picker/docs/
- Google Apps Script https://developers.google.com/apps-script/overview
- Clasp https://github.com/google/clasp
- Vuetify https://vuetifyjs.com/ja/
