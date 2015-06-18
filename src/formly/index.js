export default /*@ngInject*/function(formlyConfig,validationMessages){
  formlyConfig.setWrapper({
    name: 'horizontalBootstrapLabel',
    template: require('./wrappers/horizontal-bootstrap-label.jade')
  });
  formlyConfig.setWrapper({
    name: 'bootstrapHasError',
    template: require('./wrappers/bootstrap-has-error.jade')
  });
  formlyConfig.setType({
    name: 'horizontalInput',
    extends: 'input',
    wrapper: ['horizontalBootstrapLabel','bootstrapHasError'],
    defaultOptions: {
      data: {messages: validationMessages}
    }
  });
  formlyConfig.setType({
    name: 'horizontalStatic',
    template: '<p class="static-control" ng-bind="model[options.key]"></p>',
    wrapper: ['horizontalBootstrapLabel','bootstrapHasError']
  });
  formlyConfig.setType({
    name: 'horizontalCheckbox',
    extends: 'checkbox',
    template: require('./types/horizontal-checkbox.jade'),
    wrapper: 'bootstrapHasError'
  });
  formlyConfig.setType({
    name: 'horizontalMultiCheckbox',
    extends: 'multiCheckbox',
    template: require('./types/horizontal-multi-checkbox.jade'),
    wrapper: ['horizontalBootstrapLabel','bootstrapHasError']
  });
  formlyConfig.setType({
    name: 'horizontalTextarea',
    extends: 'textarea',
    wrapper: ['horizontalBootstrapLabel','bootstrapHasError']
  });
  formlyConfig.setType({
    name: 'horizontalMarkdownArea',
    extends: 'horizontalTextarea',
    template: require('./types/horizontal-markdown-area.jade')
  });
  formlyConfig.setType({
    name: 'horizontalRadio',
    extends: 'radio',
    wrapper: ['horizontalBootstrapLabel','bootstrapHasError']
  });
  formlyConfig.setType({
    name: 'horizontalRadioInline',
    extends: 'horizontalRadio',
    template: require('./types/horizontal-radio-inline.jade')
  });
  formlyConfig.setType({
    name: 'repeatSection',
    template: require('./types/repeat-section.jade'),
    controller: require('./types/repeat-section-controller.js')
  });
}