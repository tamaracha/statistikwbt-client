import template from './content.jade';
import controller from './content-controller.js';
import unit from './unit';

export default {
  name: 'content',
  url: '/content',
  template,
  controller,
  controllerAs: 'content',
  resolve: {
    units: /*@ngInject*/function(Restangular){
      let query={
        projections: 'title',
        options: {sort: 'position'}
      };
      return Restangular.all('units').getList(query);
    },
    markdown: /*@ngInject*/function($q,$ocLazyLoad){
      return $q(function(resolve){
        require.ensure([],function(){
          var md=require('../../markdown');
          $ocLazyLoad.load({name: md});
          return resolve(md);
        });
      });
    }
  },
  children: [
    unit
  ]
};