import template from './author.jade';

import units from './units';
import vega from './vega';

export default {
  name: 'author',
  url: '/author',
  template,
  data: {
    permissions: {
      except: ['anonymous']
    }
  },
  resolve: {
    markdown: /*@ngInject*/function($q,$ocLazyLoad){
      return $q(function(resolve,reject){
        require.ensure([],function(){
          var md=require('../../markdown');
          if(!md){return reject('markdown not loaded');}
          return resolve($ocLazyLoad.load({name: md}));
        });
      });
    },
    breadCrumb: /*@ngInject*/function($q,$ocLazyLoad){
      return $q(function(resolve,reject){
        require.ensure([],function(){
          var breadCrumb=require('angular-breadcrumb');
          if(!breadCrumb){return reject('breadCrumb not loaded');}
          return resolve($ocLazyLoad.load({name: 'ncy-angular-breadcrumb'}));
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