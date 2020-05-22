/**
 * Created by kol on 2020/5/10.
 */
(function () {
    var tools = {
        getRandom: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
    window.tools= tools;
})();
