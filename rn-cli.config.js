// This is a fix to allow `.jsx` files in React-Native.
module.exports = {
  resolver: {
    sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx'],
  },
};
