import template from './register.jade';
import controller from './register-controller.js';

export default {
  name: 'register',
  url: '/register',
  template,
  controller,
  controllerAs: 'register',
  resolve: {
    subjects: /*@ngInject*/function($q){
      return $q(function(resolve,reject){
        let _=require('lodash');
        require.ensure([],function(){
          let groups=require('./studiengänge.yml');
          let subjects=[];
          _.forEach(groups,function(group,key){
            _.forEach(group,function(item){
              subjects.push({
                name: key,
                group: item
              });
            });
          });
          return resolve(subjects);
        });
      });
    }
  }
};