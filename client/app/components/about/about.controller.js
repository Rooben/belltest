import TeamService from '../../common/services/first-service';

class AboutController {
  constructor(TeamService) {
    'ngInject';
    this.TeamService = TeamService;
    this.name = 'about';
    this.listings = [];
  }

  returnItems (){
    this.listings = this.TeamService.getItems();
  }

}

export default AboutController;
