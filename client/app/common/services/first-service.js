/**
 * Created by Roland on 12/3/2017.
 */
import angular from 'angular';

class TeamService {
  constructor($http){
    'ngInject';
    this.$http = $http;
  }

  getFirstTable(){
    console.log('Getting first Table results...');
    return this.$http.get('/app/common/data/first-table-rawdata.json');
  }

  getSecondTable(){
    console.log('Getting second Table results...');
    return this.$http.get('/app/common/data/second-table-rawdata.json');
  }
}

export default TeamService;
