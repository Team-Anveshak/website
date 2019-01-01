var dict =[ {name:"Pavan Vemuri",coord:"0419,0824,0732,1193",desp:"Electronics and software"},{name:"Tarun Prasad",coord:"2938,0799,3296,1269",desp:"Mechanical module and science"}];
function sizer(){
  // var width = ($("#imageid").width());
  var height = ($("#imageid").height());
  var cols = document.getElementsByClassName('container');
  for(i=0; i<cols.length; i++) {
    cols[i].style.height= height.toString();
  }
}
  function project(name){
    var cols = document.getElementsByClassName('image');
    for(i=0; i<cols.length; i++) {
      cols[i].style.filter='blur(10px)';
    }
    var cols = document.getElementsByClassName('annotation');
    for(i=0; i<cols.length; i++) {
      cols[i].style.border='0px';
    }
    console.log(name);
    var cols = document.getElementsByClassName('image-profile');
    document.getElementsByClassName('containermy')[0].style.visibility="visible";
    for(i=0; i<cols.length; i++) {
      document.getElementById("imageid").src="image/pic"+name.toString()+".jpg";
      cols[i].style.display='block';

    }
    document.getElementById('memname').innerHTML=dict[parseInt(name)-1].name;
    document.getElementById('memdesp').innerHTML=dict[parseInt(name)-1].desp;
    // var w = parseInt(name)-1;
    // console.log(w);
    // console.log(dict[w].name);
    // console.log($("#img1").height(),  $("#img1").width());
  }
  function retract(){
    var cols = document.getElementsByClassName('image');
    for(i=0; i<cols.length; i++) {
      cols[i].style.filter='blur(0px)';
    }
    var cols = document.getElementsByClassName('image-profile');
    for(i=0; i<cols.length; i++) {
      cols[i].style.display='none';
    }
    var cols = document.getElementsByClassName('annotation');
    for(i=0; i<cols.length; i++) {
      cols[i].style.border='2px groove black';
    }
    document.getElementsByClassName('containermy')[0].style.visibility="hidden";
  }
  function printer(){
  var a= document.getElementsByClassName("img_por");
  var scaler_H = ($(".image").height())/($(".image").prop('naturalHeight'));
  var scaler_W = ($(".image").width())/($(".image").prop('naturalWidth'));

  for(i=0; i<a.length; i++) {

    // var x=a[i].getAttribute("coords");
    var x=dict[i].coord;
    var coord = x.split(",");
    var x1 = parseInt(coord[0]);
    var y1 = parseInt(coord[1]);
    var x2 = parseInt(coord[2]);
    var y2 = parseInt(coord[3]);
    // console.log(y2);
    // document.write(x1);
    x1 = Math.round(x1*scaler_W)
    y1 = Math.round(y1*scaler_H)
    x2 = Math.round(x2*scaler_W)
    y2 = Math.round(y2*scaler_H)
    // document.write(x1.toString()+","+y1.toString()+","+x2.toString()+","+y2.toString());
    // document.write(String(x1)+"  ");
    a[i].setAttribute("coords",x1.toString()+","+y1.toString()+","+x2.toString()+","+y2.toString());
    // console.log(y2);
    // document.write(a[i].getAttribute("coords"););

  }

  // a.setAttribute("coords","500,500,900,900");
  }
  function attach(){
    document.getElementById("picture1").onclick = function(){project('1');};
    document.getElementById("picture2").onclick = function(){project('2');};
    // for(var tim=2;tim>=1;tim--){
    //   var name = "picture"+tim.toString();
    //     var func_inp = tim.toString() ;
    //   console.log(name);
    //   console.log(func_inp);
    //   document.getElementById(name).onclick = function(){project(func_inp);};
    // // document.getElementById(name).onclick = function(){project(tim.toString());};
    // // sam++;
    //   // f.onclick=function(){project(s.toString());};
    // }
  }
function reloader(){
$("a.weird").remove();
printer();
aI.init();
attach();

console.log(dict[0].coord);
}
// window.addEventListener('resize',reloader);
