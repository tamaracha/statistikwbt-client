import angular from 'angular';
import ngVegaDirective from './ng-vega';
import jsonDirective from './json-directive';

export default angular.module('plot',[])
.directive('ngVega',ngVegaDirective)
.directive('json',jsonDirective)
.name;
