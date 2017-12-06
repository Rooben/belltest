import { TweenLite } from 'gsap';

function tableMoveDirective(){
  return {
    restrict: 'AE',
    link: function(scope, element, attrs){

      /*function moveTable(options){
        console.log(options);
        var prop = options[0];
        var val = options[1];
        var parentContainer = element.parent()[0].querySelector('#actual-table');
        TweenLite.to(parentContainer, 0.4, {prop: '+=' + val, ease: Back.easeOut.config(1.7)});
      }*/

      var parentContainer = element.parent()[0].querySelector('#actual-table');
      element.on('click', function(){
        var eltClassName = attrs.class;
        console.log(eltClassName);
        switch(eltClassName){
          case 'arrow-left' : TweenLite.to(parentContainer, 0.4, {left: '+=' + 200, ease: Back.easeOut.config(1.7)});
            break;
          case 'arrow-right' : TweenLite.to(parentContainer, 0.4, {left: '+=' + -200, ease: Back.easeOut.config(1.7)});
            break;
          case 'arrow-up' : TweenLite.to(parentContainer, 0.4, {top: '+=' + +50, ease: Back.easeOut.config(1.7)});
            break;
          case 'arrow-down' : TweenLite.to(parentContainer, 0.4, {top: '+=' + -50, ease: Back.easeOut.config(1.7)});
            break;
        }

        //moveTable(optionsArray);
        //parentContainer.stop(false,true).animate({left:"+="+200},{ duration: 400});
      })
    }
  };
}

export default tableMoveDirective;

/*
$("#arrow-up").on('click', function(){
  var parentBox = $('#images-row');
  var lastItem = imagesContainer.find('li.thumbnail:first-child');

  var moveVertical = self.appGlobalSettings.thumbnailsUpDownMove;
  if (lastItem.offset().top - parentBox.offset().top > 103) {
    self.blink('#warning-top');
    return false;
  }

  imageGroup.stop(false,true).animate({top:"+="+moveVertical},{ duration: 400});
});

$("#arrow-down").on('click', function(){
  var parentBox = $('#images-row');
  var lastItem = imagesContainer.find('li.thumbnail:last-child');
  if (lastItem.offset().top - parentBox.offset().top  < 103) {
    self.blink('#warning-bottom');
    return false;
  }
  imageGroup.stop(false,true).animate({top:"-="+moveVertical},{ duration: 400});
});

*/

/*angular
  .module('app')
  .directive('fileUpload', fileUpload);

 function arrowMoveControl () {

 return {
 restrict: 'EA',
 scope: {},
 template: [
 '<div>',
 '</div>'
 ].join(''),
 controllerAs: 'vm',
 controller: function(){},
 link: function () {}
 };

 }

 export default arrowMoveControl;


 */
