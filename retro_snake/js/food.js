/**
 * Created by kol on 2020/5/12.
 */

(function (){
    var elements = [];
    function Food(option){
        option = option || {};

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

    Food.prototype.render = function(map){

        remove();


        var div = document.createElement('div');
        map.appendChild(div);

        //Random food
        this.x= tools.getRandom(0,map.offsetWidth/this.width - 1) * this.width;
        this.y= tools.getRandom(0,map.offsetHeight/this.height - 1) * this.height;

        elements.push(div);

        div.style.position = 'absolute';
        div.style.left = this.x + 'px';
        div.style.top = this.y + 'px';
        div.style.width= this.width + 'px';
        div.style.height= this.height + 'px';
        div.style.backgroundColor = this.color;

    };

    function remove(){
        for(var i=elements.length -1 ; i>=0;i--)
        {
            elements[i].parentNode.removeChild(elements[i]);
            elements.splice(i,1);
        }
    }

    window.Food =Food;

    console.log();
}) ();



// var map= document.getElementById('map');
// var food = new Food();
// food.render(map);