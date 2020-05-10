/**
 * Created by kol on 2020/5/10.
 */
function box(parent,option){
    option = option || {}

    this. backgroundColor = option.backgroundColor ||  'red';
    this.width = option.width || 20;
    this.height = option.height || 20;
    this.x = option.x || 0;
    this.y = option.y || 0;

    this.div = document.createElement('div');
    parent.appendChild(this.div);
    this.parent=parent;
    this.init();

}

box.prototype.init = function(){
    var div= this.div;
    div.style.backgroundColor=this.backgroundColor;
    div.style.width=this.width + 'px';
    div.style.height=this.height + 'px';
    div.style.x=this.x + 'px';
    div.style.y=this.y + 'px';

    div.style.position = 'absolute';
}

box.prototype.random = function(){
    this.div.style.left= tools.getRandom(0,this.parent.offsetWidth/this.width -1)*this.width + 'px';
    this.div.style.top= tools.getRandom(0,this.parent.offsetHeight/this.width -1)*this.height + 'px';
}
