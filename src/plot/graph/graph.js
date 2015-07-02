/*@ngInject*/class GraphCtrl{
  constructor($http){
    this.$http = $http;
    this.data = {};
    this.model = {};
    this.renderer = 'svg';
    this.getSpecFields();
  }
  getData(){
    return this.$http.get('api/data/' + this.value, {
      params: this.model
    })
    .success((data) => {
      this.data[this.value] = data;
    })
    .error((e) => {
      this.error = e;
    });
  }
  getSpecFields(){
    return this.$http.get('api/vega/' + this.value)
    .success((data) => {
      this.fields = data.fields;
      this.spec = data.spec;
    })
    .error((e) => {
      this.error = e;
    });
  }
}

export default /*@ngInject*/function(){
  function link(scope){
    const clean = scope.$watchCollection('graph.model',function(){
      scope.graph.getData();
    });
    scope.$on('$destroy',clean);
  }
  return {
    restrict: 'A',
    scope: {
      value: '@graph'
    },
    controller: GraphCtrl,
    controllerAs: 'graph',
    bindToController: true,
    template: require('./graph.jade'),
    link
  };
}
