module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-sass-guidelines',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export', 'deep']
      }
    ],
    'property-no-unknown': [
      true,
      {
        ignoreSelectors: [':export']
      }
    ]
  }
};
