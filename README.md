# gas-vue-ts

Google Apps Script project setup with
- TypeScript
- Vue.js
- Vuetify
- Function call from client side
- Google Picker

## setup

### Install node modules
```
npm install
```

### Clasp setup
```
npm -g install @google/clasp
clasp login
clasp create --rootDir dist
```

### Google Picker setup
See below link and register your project.  
https://developers.google.com/picker/docs/#appreg

Write your developer key as build environment variables.
```
echo 'VUE_APP_PICKER_DEVELOPER_KEY=<Your Developer Key...>' > .env.local
```

### Compiles and minifies for production
```
npm run build
```

### Push your files to GAS project
```
clasp push
```

### Open webapp
```
clasp open --webapp
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## See Also
- Google Picker https://developers.google.com/picker/docs/
- Google Apps Script https://developers.google.com/apps-script/overview
- Clasp https://github.com/google/clasp
- Vue CLI https://cli.vuejs.org/guide/
- Vuetify https://vuetifyjs.com/ja/
