export default function userCheckValidator($q,Restangular){
  function link(scope,el,attrs,c){
    c.$asyncValidators.userCheck=function(value){
      var query={};
      query[attrs.name]=value;
      var promise=Restangular.all('users').head(query);
      switch(attrs.userCheck){
        case 'available':
          return promise.then(() => {return $q.reject('exists');},() => {return true;});
        case 'exists': return promise;
      }
    };
  }
  return {
    require: 'ngModel',
    restrict: 'A',
    link
  };
}