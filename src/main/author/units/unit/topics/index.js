import template from './topics.jade';
import controller from './topics-controller';
import topic from './topic';
export default {
  name: 'topics',
  url: '/topics',
  template,
  controller,
  controllerAs: 'topics',
  ncyBreadcrumb: {label: '{{unit.unit.title}} — Subkapitel'},
  resolve: {
    topics: /*@ngInject*/function(Restangular,$stateParams){
      let query={projections: 'topics.title topics._id'};
      return Restangular.one('units',$stateParams.unit).all('topics').getList(query);
    }
  },
  children: [
    topic
  ]
};