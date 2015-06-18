//import MathJax from 'MathJax';
/**
* @ngdoc directive
* @name markdown.directive:markdown
* @scope
* @restrict ae
* @description
* übersetzt markdown in html
* @param {number} num eine zahl
*/

export default /*@ngInject*/function markdownDirective(markdown,$sanitize){
  function link(scope,el,attrs){
    function render(val){
      let html=markdown.render(val);
      let saneHtml=$sanitize(html);
      el.html(saneHtml);
      if(attrs.hasOwnProperty('mathJax')){
        MathJax.Hub.Queue(['Typeset', MathJax.Hub, el[0]]);
      }
    }
    render(scope.markdown||el.text());
    let clean=scope.$watch('markdown',render);
    scope.$on('$destroy',clean);
  }
  return {
    restrict: 'AE',
    scope: {
      'markdown': '='
    },
    link
  };
}