import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import aboutComponent from './about.component';
import TableMove from '../../common/directives/table-move-directive'

let aboutModule = angular.module('about', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('about', {
      url: '/players',
      component: 'about'
    });
})



.component('about', aboutComponent)
.directive('tableMove', TableMove)
.name;

export default aboutModule;
