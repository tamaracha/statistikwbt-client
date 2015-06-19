// libraries
import angular from 'angular';
import 'angular-ui-router';
import 'ng-annotate?add=true!angular-ui-router.stateHelper';
import 'script!angular-bootstrap';
import 'ngstorage';
import 'oclazyload';
import formly from 'angular-formly';
import formlyBootstrap from 'angular-formly-templates-bootstrap';
import 'angular-permission';

// config
import {config, run} from './config.js';
import formlyRun from './formly';
import messages from './formly/messages.yml';

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
  formlyBootstrap,
  'permission'
])
.constant('validationMessages',messages)
.config(config)
.run(run)
.run(formlyRun)
.factory('userInterceptor',user.interceptor)
.service('user',user.model)
.directive('userCheck',user.validator)
.service('modals',modals)
.name;
