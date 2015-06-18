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

export /*@ngInject*/function run($rootScope){
  $rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams, error){
    console.error(error);
  });
}
