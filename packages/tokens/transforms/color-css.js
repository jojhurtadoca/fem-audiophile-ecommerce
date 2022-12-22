// For backwards compatibility, all built-in transforms are not transitive
// by default. This will make the 'color/css' transform transitive
module.exports = (StyleDictionary) => Object.assign({}, StyleDictionary.transform['color/css'], {
  name: 'color/css',
  transitive: true
});
