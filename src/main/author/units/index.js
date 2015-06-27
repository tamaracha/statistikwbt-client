import template from './units.jade';
import controller from './units-controller.js';
import unit from './unit';

export default {
  name: 'units',
  url: '/units',
  template,
  controller,
  controllerAs: 'units',
  resolve: {
    units: /*@ngInject*/function(Restangular){
      const query = {
        projections: 'title',
        options: {sort: 'position'}
      };
      return Restangular.all('units').getList(query);
    }
  },
  ncyBreadcrumb: {
    label: 'Kapitel'
  },
  children: [
    unit
  ]
};
