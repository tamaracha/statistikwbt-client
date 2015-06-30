// libraries
import angular from 'angular';
import 'angular-ui-router';
import 'ng-annotate?add=true!angular-ui-router.stateHelper';
import 'script!angular-bootstrap';
import 'ngstorage';
import 'script!oclazyload';
import apiCheck from 'api-check';
apiCheck.globalConfig.disabled = true;
import formly from 'angular-formly';
import formlyBootstrap from 'angular-formly-templates-bootstrap';
import 'angular-permission';
import {config, run} from './config.js';
import * as user from './user';
import modals from './modals';
import plot from './plot';
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
  'permission',
  plot
])
.config(config)
.run(run)
.factory('userInterceptor',user.interceptor)
.service('user',user.model)
.directive('userCheck',user.validator)
.service('modals',modals)
.name;
