/**
 * Created by kol on 2020/5/10.
 */

var container = document.getElementById('container');
var array = [];
for(var i=0; i<10;i++){
    var r = tools.getRandom(0,255);
    var g = tools.getRandom(0,255);
    var b = tools.getRandom(0,255);

    var box1 =new box(container,{
        backgroundColor:'rgb('+ r + ','+ g  + ',' + b + ')'
    });
    console.log(box1.backgroundColor);
    array.push(box1);
}

setInterval(function(){
    for(var i =0 ; i<array.length;i++)
    {
        var box1 = array[i];
        box1.random();
    }
},500)