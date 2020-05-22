/**
 * Created by kol on 2020/5/21.
 */

(function () {
    var that;
    function Game(map) {
        this.Snake = new Snake();
        this.Food = new Food();
        this.map = map;
        that=this;
    }

    Game.prototype.start= function(){
        //show snake and food
        this.Snake.render(this.map);
        this.Food.render(this.map);

        runSnake();

        bindKey();

    };
    
    function bindKey() {
        document.addEventListener('keydown',function (e) {
            switch(e.keyCode) {
                case 37:
                    that.Snake.direction = 'left';
                    break;
                case 38:
                    that.Snake.direction = 'bottom';
                    break;
                case 39:
                    that.Snake.direction = 'right';
                    break;
                case 40:
                    that.Snake.direction = 'top';
                    break;
                }

        },false)
        
    }

    function runSnake() {
        var timeid = setInterval(function(){
            that.Snake.move(that.Food,that.map);
            that.Snake.render(that.map);

            var maxX = that.map.offsetWidth/that.Snake.width;
            var maxY = that.map.offsetHeight/that.Snake.height;
            var headx= that.Snake.body[0].x;
            var heady= that.Snake.body[0].y;

            if(headx < 0 || heady<0 || headx>=maxX || heady>=maxY)
            {
                alert("Game Over");
                clearInterval(timeid);
            }
        },150);

    }
    window.Game=Game;
})();

var ele = document.getElementById('map');

var game = new Game(ele);
game.start();

