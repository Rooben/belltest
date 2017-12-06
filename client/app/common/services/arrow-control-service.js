class ArrowService {
  constructor(){
    'ngInject';
    this.unitMove = 200;
  }

  leftMove(tableContainer){
    let currentPosition = parseInt(tableContainer.element.position().left);
    if (currentPosition > -this.unitMove){
      imageGroup.stop(false,true).animate({left:"+="+this.unitMove},{ duration: 400});
    }
  }

  rightMove(tableContainer){
    let currentPosition = parseInt(tableContainer.element.position().left);
    if (currentPosition > -this.unitMove){
      imageGroup.stop(false,true).animate({left:"-="+this.unitMove},{ duration: 400});
    }
  }
}

export default ArrowService;

/*
$("#arrow-left").on('click', function(){
  var currentPosition = parseInt(imageGroup.position().left);

  if (currentPosition > -moveHorizontal){
    self.blink('#warning-left');
    return;
  }
  imageGroup.stop(false,true).animate({left:"+="+moveHorizontal},{ duration: 400});

});


$("#arrow-right").on('click', function(){
  var frameBoxWidth = $('#images-row').width();
  var currentPosition = parseInt(imageGroup.position().left);
  if (currentPosition < -(boxWidth - frameBoxWidth)){
    self.blink('#warning-right');
    return;
  }
  imageGroup.stop(false,true).animate({left:"-="+moveHorizontal},{ duration: 400});
});
  */
