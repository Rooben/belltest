/**
 * Created by Roland on 12/3/2017.
 */
import angular from 'angular';

class TeamFactory {
  constructor($http){
    'ngInject';
    this.$http = $http;
  }

  getItems(){
    return this.$http.get('https://drive.google.com/file/d/0Byt0rakzaB6bNXM0RW1ua3owY1U/view?usp=sharing').then((data)=>{
      console.log(data);
    })
    .catch((error)=>{
      console.error(error);
    });
  }
}

export default TeamFactory;
