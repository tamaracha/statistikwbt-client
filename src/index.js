// libraries
import angular from 'angular';
import 'script!angular-ui-router';
import 'script!angular-ui-router.stateHelper';
import 'script!angular-bootstrap';
import 'script!ngstorage';
import 'script!oclazyload';
import formly from 'angular-formly';
import formlyBootstrap from 'angular-formly-templates-bootstrap';

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
  'ngStorage',
  'oc.lazyLoad',
  formly,
  formlyBootstrap
])
.config(config)
.run(run)
.factory('userInterceptor',user.interceptor)
.service('user',user.model)
.directive('userCheck',user.validator)
.service('modals',modals)
.name;
