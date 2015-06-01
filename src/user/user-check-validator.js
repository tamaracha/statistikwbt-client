function userCheckValidator($q,UserRestResource){
  let directive={
    require: 'ngModel',
    restrict: 'A',
    link: link
  };
  function link(scope,el,attrs,c){
    c.$asyncValidators.userCheck=function(value){
      var query={};
      query[attrs.name]=value;
      var promise=UserRestResource.head(query);
      switch(attrs.userCheck){
        case 'available':
          return promise.then(() => {return $q.reject('exists');},() => {return true;});
        case 'exists': return promise;
      }
    };
  }
  return directive;
}
export default userCheckValidator;