import main from './main';

export /*@ngInject*/function config($locationProvider,$compileProvider,$httpProvider,stateHelperProvider,$urlRouterProvider,RestangularProvider){
  $locationProvider.html5Mode(true);
  $compileProvider.debugInfoEnabled(false);
  $httpProvider.interceptors.push('userInterceptor');
  $httpProvider.defaults.paramSerializer='$httpParamSerializerJQLike';
  RestangularProvider.setBaseUrl("/statistikwbt/api");
  RestangularProvider.setRestangularFields({
    id: "_id"
  });
  stateHelperProvider.state(main);
  $urlRouterProvider.otherwise("/home");
}

export /*@ngInject*/function run($rootScope){
  $rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams, error){
    console.error(error);
  });
}
