

Installing Dependencies:

```bash
$ npm install
```

Running the app:

```bash
$ npm start
```

if you get the error after install dependencies :
ERROR Cannot read properties of undefined (reading 'configurations'). TypeError: Cannot read properties of undefined (reading 'configurations')
The issue happening for you on react native v0.68.2, you should change the file under:

node_modules/@react-native-community/cli-platform-ios/build/config/index.js
(was line 102 for me).

function dependencyConfig(folder, userConfig) {
```
//before
// const configurations = userConfig.configurations || [];


//after
    let configurations={};
  ```  
    
this fixes the crash due to userConfig being empty (not sure if it's a bug or bad config)
then run react-native run-android normally

https://stackoverflow.com/questions/72479193/error-cannot-read-properties-of-undefined-reading-configurations-typeerror


