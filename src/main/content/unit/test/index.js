import template from './test.jade';
import controller from './test-controller.js';

export default {
  name: 'test',
  url: '/test',
  template,
  controller,
  controllerAs: 'test',
  resolve: {
    items: /*@ngInject*/function(Restangular,$stateParams){
      const query = {
        conditions: {unit: $stateParams.unit}
      };
      return Restangular.all('tests').getList(query);
    },
    guesses: /*@ngInject*/function(Restangular,$stateParams){
      return Restangular.one('units',$stateParams.unit).one('summaries','guesses').get();
    }
  }
};
