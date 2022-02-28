var slideimages = new Array ()
slideimages[0] = new Image()
slideimages[0].src = "css/img/loop/loop_01.png"
slideimages[1] = new Image()
slideimages[1].src = "css/img/loop/loop_02.png"
slideimages[2] = new Image()
slideimages[2].src = "css/img/loop/loop_03.png"
slideimages[3] = new Image()
slideimages[3].src = "css/img/loop/loop_04.png"
slideimages[4] = new Image()
slideimages[4].src = "css/img/loop/loop_05.png"
slideimages[5] = new Image()
slideimages[5].src = "css/img/loop/loop_06.png"
slideimages[6] = new Image()
slideimages[6].src = "css/img/loop/loop_07.png"
slideimages[7] = new Image()
slideimages[7].src = "css/img/loop/loop_08.png"
slideimages[8] = new Image()
slideimages[8].src = "css/img/loop/loop_09.png"
slideimages[9] = new Image()
slideimages[9].src = "css/img/loop/loop_10.png"
slideimages[10] = new Image()
slideimages[10].src = "css/img/loop/loop_11.png"
slideimages[11] = new Image()
slideimages[11].src = "css/img/loop/loop_12.png"
slideimages[12] = new Image()
slideimages[12].src = "css/img/loop/loop_13.png"
slideimages[13] = new Image()
slideimages[13].src = "css/img/loop/loop_14.png"
slideimages[14] = new Image()
slideimages[14].src = "css/img/loop/loop_15.png"
slideimages[15] = new Image()
slideimages[15].src = "css/img/loop/loop_16.png"
slideimages[16] = new Image()
slideimages[16].src = "css/img/loop/loop_17.png"
slideimages[17] = new Image()
slideimages[17].src = "css/img/loop/loop_18.png"
slideimages[18] = new Image()
slideimages[18].src = "css/img/loop/loop_19.png"
slideimages[19] = new Image()
slideimages[19].src = "css/img/loop/loop_20.png"
slideimages[20] = new Image()
slideimages[20].src = "css/img/loop/loop_21.png"
slideimages[21] = new Image()
slideimages[21].src = "css/img/loop/loop_22.png"
slideimages[22] = new Image()
slideimages[22].src = "css/img/loop/loop_23.png"
slideimages[23] = new Image()
slideimages[23].src = "css/img/loop/loop_24.png"
slideimages[24] = new Image()
slideimages[24].src = "css/img/loop/loop_25.png"
slideimages[25] = new Image()
slideimages[25].src = "css/img/loop/loop_26.png"
slideimages[26] = new Image()
slideimages[26].src = "css/img/loop/loop_27.png"
slideimages[27] = new Image()
slideimages[27].src = "css/img/loop/loop_28.png"
slideimages[28] = new Image()
slideimages[28].src = "css/img/loop/loop_29.png"
slideimages[29] = new Image()
slideimages[29].src = "css/img/loop/loop_30.png"
slideimages[30] = new Image()
slideimages[30].src = "css/img/loop/loop_31.png"
slideimages[31] = new Image()
slideimages[31].src = "css/img/loop/loop_32.png"

var step=0

function slideit(){
 if (!document.images)
  return
 document.getElementById('slide').src = slideimages[step].src
 if (step<31)
  step++
 else
  step=0
 setTimeout("slideit()",200)
}

slideit()

