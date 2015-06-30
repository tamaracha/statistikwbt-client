import vg from 'vega';
export default /*@ngInject*/function ngVegaDirective(){
  function link(scope,el){
    let view;
    function parse(){
      vg.parse.spec(scope.spec,function(chart){
        view = chart({
          el: el[0],
          data: scope.data,
          renderer: scope.renderer || 'svg'
        });
      });
    }
    const specClean = scope.$watch('spec',parse,true);
    function updateData(data){
      if(view){
        view.data(data).update().render();
      }
      else{
        parse();
      }
    }
    const dataClean = scope.$watch('data',updateData,true);
    function updateRenderer(renderer){
      if(view){
        view.renderer(renderer).update();
      }
      else{
        parse();
      }
    }
    const rendererClean = scope.$watch('renderer',updateRenderer);
    scope.$on('$destroy',function(){
      specClean();
      dataClean();
      rendererClean();
    });
  }
  return {
    restrict: 'E',
    scope: {
      data: '=vegaData',
      spec: '=vegaSpec',
      renderer: '=vegaRenderer'
    },
    link
  };
}
