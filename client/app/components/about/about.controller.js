import TeamService from '../../common/services/first-service';

class AboutController {
  constructor(TeamService) {
    'ngInject';
    this.TeamService = TeamService;
    this.name = 'about';
    this.firstTableValues = null;
    this.secondTableValues = null;
  }

  GenerateDataTables (){
    this.firstTableValues = this.TeamService.getFirstTable();
    this.secondTableValues = this.TeamService.getSecondTable();

    this.firstTableValues.then((firstTableData)=>{
      console.log(firstTableData);
      this.firstTableValues = firstTableData;
    }).catch((error)=>{
      console.log(error);
    });

    this.secondTableValues.then((secondTableData)=>{
      console.log(secondTableData);
      this.secondTableValues = secondTableData;
    }).catch((error)=>{
      console.log(error);
    });
  }

  $onInit(){
    this.GenerateDataTables ();
  }
}

export default AboutController;
