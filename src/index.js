// libraries
import angular from 'angular';
import 'script!angular-ui-router';
import 'script!angular-ui-router.stateHelper';
import 'script!angular-bootstrap';
import 'script!angular-breadcrumb';
import 'script!ngstorage';
import 'script!oclazyload';

// config
import {config, run} from './config.js';

// user
import * as user from './user';

// modals
import modals from './modals';

export default angular.module('wbt',[
  'restangular',
  'ui.router',
  'ui.router.stateHelper',
  'ui.bootstrap',
  'ngMessages',
  'ngAria',
  'ngAnimate',
  'ngSanitize',
  'ncy-angular-breadcrumb',
  'ngStorage',
  'oc.lazyLoad'
])
.config(config)
.run(run)
.factory('userInterceptor',user.interceptor)
.service('user',user.model)
.directive('userCheck',user.validator)
.service('modals',modals)
.name;
