import template from './tests.jade';
import controller from './tests-controller.js';

export default {
  name: 'tests',
  url: '/tests',
  template,
  controller,
  controllerAs: 'tests',
  resolve: {
    tests: /*@ngInject*/function(Restangular,$stateParams){
      return Restangular.one('units',$stateParams.unit).all('tests').getList();
    }
  }
};