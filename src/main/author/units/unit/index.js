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