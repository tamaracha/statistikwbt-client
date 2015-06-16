import main from './main';

export /*@ngInject*/function config($locationProvider,$compileProvider,$httpProvider,$urlRouterProvider,RestangularProvider,stateHelperProvider,formlyConfigProvider){
  $locationProvider.html5Mode(true);
  $compileProvider.debugInfoEnabled(false);
  $httpProvider.interceptors.push('userInterceptor');
  $httpProvider.defaults.paramSerializer='$httpParamSerializerJQLike';
  RestangularProvider.setBaseUrl('api');
  RestangularProvider.setRestangularFields({
    id: '_id'
  });
  stateHelperProvider.state(main);
  $urlRouterProvider.otherwise('/home');
  formlyConfigProvider.disableWarnings=true;
}

export /*@ngInject*/function run($rootScope,formlyConfig){
  $rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams, error){
    console.error(error);
  });
  formlyConfig.setWrapper({
    name: 'horizontalBootstrapLabel',
    template: require('./formly/wrappers/horizontal-bootstrap-label.jade')
  });
  formlyConfig.setType({
    name: 'horizontalInput',
    extends: 'input',
    wrapper: ['horizontalBootstrapLabel','bootstrapHasError']
  });
  formlyConfig.setType({
    name: 'horizontalStatic',
    template: '<p class="static-control" ng-bind="model[options.key]"></p>',
    wrapper: ['horizontalBootstrapLabel','bootstrapHasError']
  });
  formlyConfig.setType({
    name: 'horizontalMultiCheckbox',
    extends: 'multiCheckbox',
    template: require('./formly/types/horizontal-multi-checkbox.jade'),
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
    template: require('./formly/types/horizontal-markdown-area.jade')
  });
  formlyConfig.setType({
    name: 'horizontalRadio',
    extends: 'radio',
    wrapper: ['horizontalBootstrapLabel','bootstrapHasError']
  });
  formlyConfig.setType({
    name: 'horizontalRadioInline',
    extends: 'horizontalRadio',
    template: require('./formly/types/horizontal-radio-inline.jade')
  });
}
