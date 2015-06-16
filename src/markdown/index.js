import angular from 'angular';
import Markdown from './markdown-provider';
import markdown from './markdown-directive';

/**
* @ngdoc overview
* @name markdown
* @description
*  Markdown-Bibliothek Remarkable als Angular-Modul
* @requires ngSanitize
*/
export default angular.module('markdown',['ngSanitize'])
.provider('markdown',Markdown)
.directive('markdown',markdown)
.name;