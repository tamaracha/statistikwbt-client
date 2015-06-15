import template from './unit.jade';
import controller from './unit-controller';
import basics from './basics';
import topics from './topics';
import tests from './tests';

export default {
  name: 'unit',
  url: '/:unit',
  template,
  controller,
  controllerAs: 'unit',
  abstract: true,
  resolve: {
    jsonpatch: function($q,$ocLazyLoad){
      return $q(function(resolve,reject){
        require.ensure([],function(){
          var jsonpatch=require('fast-json-patch');
          return jsonpatch ? resolve(jsonpatch) : reject('jsonpatch not loaded');
        });
      });
    },
    unit: function(Restangular,$stateParams){
      let query={projections: 'title subtitle description requires'};
      return Restangular.one('units',$stateParams.unit).get(query);
    }
  },
  children: [
    basics,
    topics,
    tests
  ]
};