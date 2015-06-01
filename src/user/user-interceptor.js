export default /*@ngInject*/function userInterceptor($localStorage){
  let factory={};
  factory.request=function(config){
    if(config.headers.authorization){return config;}
    if($localStorage.token){
      config.headers.authorization="bearer "+$localStorage.token;
    }
    return config;
  };
  return factory;
}