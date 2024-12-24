module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-transform-private-methods', { loose: true }],
    ['@babel/plugin-transform-class-properties', { loose: true }],
    ['@babel/plugin-transform-private-property-in-object', { loose: true }],
    'react-native-paper/babel', // Para suporte à biblioteca react-native-paper
    'react-native-reanimated/plugin', // Necessário para react-native-reanimated
  ],
};
