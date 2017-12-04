import TeamFactory from '../../common/services/first-service';

class AboutController {
  constructor(TeamFactory) {
    'ngInject';
    this.TeamFactory = TeamFactory;
    this.name = 'about';
    this.listings = [];
  }

  returnItems (){
    this.listings = this.TeamFactory.getItems();
  }

}

export default AboutController;
