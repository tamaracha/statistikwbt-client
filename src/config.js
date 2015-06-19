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

export /*@ngInject*/function run($rootScope,$state,$stateParams,Permission,user,modals){
  $rootScope.$on('$stateChangeStart',function(event,toState,toParams,fromState,fromParams){
    $rootScope.prevState=fromState;
    $rootScope.prevParams=fromParams;
  });
  $rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams, error){
    console.error(error);
  });
  $rootScope.$on('$stateChangePermissionDenied',function(event,toState,toParams){
    modals.login()
    .result.then((data) => {
      $state.go(toState.name);
    },(data) => {
      if($rootScope.prevState.name===''){$state.go('main.home');}
    });
  });
  Permission.defineRole('anonymous',function(){
    if(!user.authenticated){return true;}
    return false;
  });
}
