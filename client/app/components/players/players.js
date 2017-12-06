import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import playersComponent from './players.component';
import TableMove from '../../common/directives/table-move-directive'

let playersModule = angular.module('players', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('players', {
      url: '/players',
      component: 'players'
    });
})



.component('players', playersComponent)
.directive('tableMove', TableMove)
.name;

export default playersModule;
