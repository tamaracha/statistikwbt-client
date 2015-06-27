import _ from 'lodash';
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
        require.ensure([],function(){
          const groups = require('./studiengänge.yml');
          if(!groups){
            return reject('no groups found');
          }
          const subjects = [];
          _.forEach(groups,function(group,key){
            _.forEach(group,function(item){
              subjects.push({
                name: item,
                group: key
              });
            });
          });
          return resolve(subjects);
        });
      });
    }
  }
};
