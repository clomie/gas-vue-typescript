# gas-vue-typescript

This is a template repository for Google Apps Script (GAS) WebApp project.  
The main use case for this repository is GAS macros and its execution front-end.

The front-end is preconfigured with: 
- TypeScript
- Vue.js
- Vuetify
- Function call from client side
- Google Picker

## Project Tree

```
/gas-vue-typescript
├─ frontend/  # Front-end (Vue.js) project
├─ script/    # GAS script project
└─ types/     # Type definitions that are used across both projects.
```

## Setup

### Install Clasp

```console
% npm -g install @google/clasp
% clasp login
```

### Create GAS Project
```console
% clasp create --type webapp --rootDir dist
Created new webapp script: https://script.google.com/d/*****/edit
Warning: files in subfolder are not accounted for unless you set a '.claspignore' file.
Cloned 1 file.
└─ dist/appsscript.json
```

### Get API Key for Google Picker
See below link and get your API key.  
https://developers.google.com/picker/docs/#appreg

Setup your API key as build environment variables.
```console
% echo 'VUE_APP_PICKER_DEVELOPER_KEY=<Your Developer Key...>' > ./frontend/.env.local
```

### Install Dependencies
```console
% yarn
```

### Build Application
```console
% make build
```

### Push Built Files to GAS Project
```console
% clasp push
? Manifest file has been updated. Do you want to push and overwrite? Yes
└─ dist/Code.js
└─ dist/appsscript.json
└─ dist/index.html
Pushed 3 files.
```

### Open pushed WebApp
```console
% clasp open --webapp
? Open which deployment?
❯                               @HEAD - AKfycbaaaaaaa...
Opening web application: AKfycbaaaaaaa...
```

### Release WebApp
If the 1st time:

```console
% clasp version "First release"
~ 1 Version ~
1 - First release
% clasp deploy -V 1
- AKfycbbbbbbbb... @1.
```

2nd and after:

```console
% clasp version "Another release"
Created version 2.
% clasp deployments
2 Deployments.
- AKfycbaaaaaaa... @HEAD
- AKfycbbbbbbbb... @1
% clasp deploy -V 2 -i AKfycbbbbbbbb...
- AKfycbbbbbbbb... @2.
```

### Customize Configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## See Also
- Vue CLI https://cli.vuejs.org/guide/
- html-webpack-plugin(v3) https://github.com/jantimon/html-webpack-plugin/tree/v3.2.0
- html-webpack-inline-source-plugin https://github.com/DustinJackson/html-webpack-inline-source-plugin/
- webpack-cdn-plugin https://github.com/van-nguyen/webpack-cdn-plugin
- Google Picker https://developers.google.com/picker/docs/
- Google Apps Script https://developers.google.com/apps-script/overview
- Clasp https://github.com/google/clasp
- Vuetify https://vuetifyjs.com/ja/
