const colorTransform = require("../transforms/color-chroma");

const NAME = 'css';

module.exports = (StyleDictionary) => {
  const transforms = [...StyleDictionary.transformGroup[NAME]];
  transforms.splice(transforms.indexOf('color/css'), 0, colorTransform.name);

  return {
    name: NAME,
    transforms,
  };
};
