/**
 * Created by Roland on 12/3/2017.
 */
import angular from 'angular';

class TeamService {
  constructor($http){
    'ngInject';
    this.$http = $http;
  }

  getItems(){
    return this.$http.get('https://jsonplaceholder.typicode.com' + '/posts/1').then((data)=>{
      console.log(data);
    }).catch((error)=>{
      console.error(error);
    });
  }
}

export default TeamService;
