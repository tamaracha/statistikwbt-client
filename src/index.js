// libraries
import 'angular-ui-router';
import 'angular-ui-router.statehelper';
import 'script!../bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js';
import '../bower_components/angular-breadcrumb/release/angular-breadcrumb';
import 'script!ngstorage';
import 'oclazyload';

// config
import {config, run} from './config.js';

// unit

// user
import * as user from './user';

// modals
import modals from './modals';

export default angular.module("wbt",[
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
