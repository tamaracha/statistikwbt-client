import angular from 'angular';
import ngVegaDirective from './ng-vega';
import jsonDirective from './json-directive';
import graph from './graph/graph';

export default angular.module('plot',[])
.directive('ngVega',ngVegaDirective)
.directive('json',jsonDirective)
.directive('graph',graph)
.name;
