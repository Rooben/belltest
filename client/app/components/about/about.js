import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import aboutComponent from './about.component';
import TeamFactory from '../../common/services/first-service';

let aboutModule = angular.module('about', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('about', {
      url: '/about',
      component: 'about'
    });
})

.component('about', aboutComponent)
.service('TeamFactory', TeamFactory)
.name;

export default aboutModule;
