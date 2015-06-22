// wrappers
export var wrappers=[
  {
    name: 'horizontalBootstrapLabel',
    template: require('./wrappers/horizontal-bootstrap-label.jade')
  },
  {
    name: 'bootstrapHasError',
    template: require('./wrappers/bootstrap-has-error.jade'),
    overwriteOk: true
  }
];

// types
export var types=[
  {
    name: 'horizontalInput',
    extends: 'input',
    wrapper: ['horizontalBootstrapLabel','bootstrapHasError']
  },
  {
    name: 'horizontalStatic',
    template: '<p class="static-control" ng-bind="model[options.key]"></p>',
    wrapper: ['horizontalBootstrapLabel','bootstrapHasError']
  },
  {
    name: 'horizontalCheckbox',
    extends: 'checkbox',
    template: require('./types/horizontal-checkbox.jade'),
    wrapper: 'bootstrapHasError'
  },
  {
    name: 'horizontalMultiCheckbox',
    extends: 'multiCheckbox',
    template: require('./types/horizontal-multi-checkbox.jade'),
    wrapper: ['horizontalBootstrapLabel','bootstrapHasError']
  },
  {
    name: 'horizontalMultiCheckboxInline',
    extends: 'horizontalMultiCheckbox',
    template: require('./types/horizontal-multi-checkbox-inline.jade')
  },
  {
    name: 'horizontalTextarea',
    extends: 'textarea',
    wrapper: ['horizontalBootstrapLabel','bootstrapHasError']
  },
  {
    name: 'horizontalMarkdownArea',
    extends: 'horizontalTextarea',
    template: require('./types/horizontal-markdown-area.jade')
  },
  {
    name: 'horizontalRadio',
    extends: 'radio',
    wrapper: ['horizontalBootstrapLabel','bootstrapHasError']
  },
  {
    name: 'horizontalRadioInline',
    extends: 'horizontalRadio',
    template: require('./types/horizontal-radio-inline.jade')
  },
  {
    name: 'repeatSection',
    template: require('./types/repeat-section.jade'),
    controller: require('./types/repeat-section-controller.js')
  }
];