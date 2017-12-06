import angular from 'angular';
import Home from './home/home';
import Players from './players/players';

let componentModule = angular.module('app.components', [
  Home,
  Players
])

.name;

export default componentModule;
