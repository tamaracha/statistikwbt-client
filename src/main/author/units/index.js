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
    units: function(Restangular){
      let projections='title';
      let options={sort: 'position'};
      let query={projections,options};
      return Restangular.all('units').getList(query);
    }
  },
  ncyBreadcrumb: {label: 'Kapitel'},
  children: [
    unit
  ]
};