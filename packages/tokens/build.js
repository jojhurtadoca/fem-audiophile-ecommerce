const BaseStyleDictionary = require('style-dictionary');
const config = require('./config');
const formatSassMixin = require('./formats/scss-mixin');
const colorTransform = require('./transforms/color-chroma');
const colorCssTransformFactory = require('./transforms/color-css');
const cssTransformsGroupFactory = require('./transformGroup/css');
const scssTransformsGroupFactory = require('./transformGroup/scss');

const StyleDictionary = BaseStyleDictionary.extend(config);

StyleDictionary.registerFormat(formatSassMixin);
StyleDictionary.registerTransform(colorTransform);
StyleDictionary.registerTransform(colorCssTransformFactory(StyleDictionary));
StyleDictionary.registerTransformGroup(cssTransformsGroupFactory(StyleDictionary));
StyleDictionary.registerTransformGroup(scssTransformsGroupFactory(StyleDictionary));
StyleDictionary.buildAllPlatforms();
