import template from './author.jade';
import units from './units';
import vega from './vega';

export default {
  name: 'author',
  url: '/author',
  template,
  resolve: {
    markdown: /*@ngInject*/function($q,$ocLazyLoad){
      return $q(function(resolve){
        require.ensure([],function(){
          var md=require('../../markdown');
          return resolve($ocLazyLoad.load({name: md}));
        });
      });
    }
  },
  ncyBreadcrumb: {label: 'Autorentool'},
  children: [
    units,
    vega
  ]
};