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
                    this.Snake.direction = 'left';
                    break;
                case 38:
                    this.Snake.direction = 'bottom';
                    break;
                case 39:
                    this.Snake.direction = 'right';
                    break;
                case 40:
                    this.Snake.direction = 'top';
                    break;
                }

        }.bind(that),false)
        
    }

    function runSnake() {
        var timeid = setInterval(function(){
            this.Snake.move(this.Food,that.map);
            this.Snake.render(this.map);

            var maxX = this.map.offsetWidth/this.Snake.width;
            var maxY = this.map.offsetHeight/this.Snake.height;
            var headx= this.Snake.body[0].x;
            var heady= this.Snake.body[0].y;

            if(headx < 0 || heady<0 || headx>=maxX || heady>=maxY)
            {
                alert("Game Over");
                clearInterval(timeid);
            }
        }.bind(that),150);

    }
    window.Game=Game;
})();



