import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import TeamService from './services/first-service';
import User from './user/user';


let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User
])
.service('TeamService', TeamService)
.name;

export default commonModule;
