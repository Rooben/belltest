import { TweenLite } from 'gsap';

function tableMoveDirective(){
  function moveTable1(dynamicObject, element){
    var parentContainer = element.parent()[0].querySelector('.actual-table');
    TweenLite.to(parentContainer, 0.4, dynamicObject);
  }

  return {
    restrict: 'AE',
    scope: {},
    link: function(scope, element, attrs){
      element.on('click', function(){
        var dynamicObj;
        var eltClassName = attrs.class;
        switch(eltClassName){
          case 'arrow-left' : dynamicObj = {left: '+=' + 200, ease: Back.easeOut.config(1.7)};
            break;
          case 'arrow-right' : dynamicObj = {left: '+=' + -200, ease: Back.easeOut.config(1.7)};
            break;
          case 'arrow-up' : dynamicObj = {top: '+=' + +50, ease: Back.easeOut.config(1.7)};
            break;
          case 'arrow-down' : dynamicObj = {top: '+=' + -50, ease: Back.easeOut.config(1.7)};

            break;
        }

        moveTable1(dynamicObj, element);
      })
    }
  };
}

export default tableMoveDirective;
