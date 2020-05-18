/**
 * Created by kol on 2020/5/12.
 */

function food(option){
        option = option || {}

        this.color= option.color ||  'green';
        this.width = option.width || 20;
        this.height = option.height || 20;
        this.x = option.x || 0;
        this.y = option.y || 0;

        // this.div = document.createElement('div');
        // parent.appendChild(this.div);
        // this.parent=parent;
        // this.init();

}

food.prototype.render = function(map){
    var div = document.createElement('div')
    map.appendChild(div);

    div.style.position = 'absolute';
    div.style.left = this.x + 'px';
    div.style.top = this.y + 'px';
    div.style.width= this.width + 'px';
    div.style.height= this.height + 'px';
    div.style.backgroundColor = this.color;

}

var map= document.getElementById('map');
var food = new food();
food.render(map);