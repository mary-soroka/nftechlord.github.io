var slideimages = new Array ()
slideimages[0] = new Image()
slideimages[0].src = "css/img/loop/loop_01.png"
slideimages[1] = new Image()
slideimages[1].src = "css/img/loop/loop_02.png"
slideimages[2] = new Image()
slideimages[2].src = "css/img/loop/loop_03.png"
slideimages[3] = new Image()
slideimages[3].src = "css/img/loop/loop_04.png"

var step=0

function slideit(){
 if (!document.images)
  return
 document.getElementById('slide').src = slideimages[step].src
 if (step<3)
  step++
 else
  step=0
 setTimeout("slideit()",200)
}

slideit()

