import template from './test.jade';
import controller from './test-controller.js';
import introTemplate from './intro.jade';
import itemTemplate from './item.jade';
import resultTemplate from './result.jade';

export default {
  name: 'test',
  url: '/test',
  template,
  controller,
  controllerAs: 'test',
  resolve: {
    items: function(Restangular,$stateParams){
      return Restangular.one('units',$stateParams.unit).all('tests').getList();
    },
    guesses: function(Restangular,$stateParams){
      return Restangular.one('units',$stateParams.unit).one('summaries','guesses').get();
    }
  },
  children: [
    {
      name: 'intro',
      url: '/intro',
      template: introTemplate
    },
    {
      name: 'result',
      url: '/result',
      template: resultTemplate
    },
    {
      name: 'noitems',
      url: '/noitems',
      template: '<p>Für dieses Kapitel gibt es noch keine Testaufgaben.</p>'
    },
    {
      name: 'item',
      url: '/:item',
      template: itemTemplate
    }
  ]
};
