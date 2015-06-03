import styles from './subkapitel.css';
console.log(styles);
//styles.use();
import template from './unit.jade';
import controller from './unit-controller.js';
import description from './description';
import topic from './topic';
//import test from './test';

export default {
  name: 'unit',
  url: '/:unit',
  template,
  controller,
  controllerAs: 'unit',
  abstract: true,
  resolve: {
    unit: function(Restangular,$stateParams){
      let query={projections: 'title subtitle description requires topics._id topics.title'};
      return Restangular.one('units',$stateParams.unit).get(query);
    }
  },
  children: [
    description,
//    test,
    topic
  ]
};