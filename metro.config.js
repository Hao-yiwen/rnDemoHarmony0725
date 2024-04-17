const path = require('path');
const fs = require('fs');
const {mergeConfig} = require('metro-config');
const metroDefault = require('metro-config/src/defaults/defaults.js');

let buMetroPath = path.join(process.cwd(), 'metro_bu.config.js');
let configBu = {};
if (fs.existsSync(buMetroPath)) {
  configBu = require(buMetroPath);
}
let harmonyMetroConfig = {};
try {
  let createHarmonyMetroConfig =
    require('react-native-harmony/metro.config').createHarmonyMetroConfig;
  harmonyMetroConfig = createHarmonyMetroConfig({
    reactNativeHarmonyPackageName: 'react-native-harmony',
  });
} catch (err) {}
const configDefault = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    assetExts: metroDefault.assetExts.filter(ext => ext !== 'json'),
  },
};

module.exports = mergeConfig(configDefault, harmonyMetroConfig, configBu);
