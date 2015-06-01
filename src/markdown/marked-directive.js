import template from './marked.jade';

export default /*@ngInject*/function(markdown){
  let directive={
    restrict: 'E',
    scope: {
      input: '=',
      label: '@'
    },
    template,
    controller,
    controllerAs: 'marked',
    bindToController: true,
    link
  };
  function controller(){
    this.mode='markdown';
  }
  function link(scope,el){
    function render(val){
      scope.marked.output=markdown.render(val);
      MathJax.Hub.Queue(["Typeset", MathJax.Hub, el[0]]);
    }
    render(scope.marked.input);
    let clean=scope.$watch('marked.input',render);
    scope.$on('$destroy',clean);
  }
  return directive;
}