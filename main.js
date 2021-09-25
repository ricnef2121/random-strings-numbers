module.exports = {
    RandomChar : function (num) {
        var string = "abcdefghijklmnopqrstuvwxyz0123456789";
        var str = "";
        var i = 0;
        if(typeof num !== "number") return str;
        let round = Math.floor(Math.abs(num));
        while (i < round) {
            str += string.charAt(Math.floor(Math.random() * string.length));
            i++;
        }
        return str;
    }
}