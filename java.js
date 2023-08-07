function loveScore() {

    var form = document.getElementById("loveform");
    var x = document.getElementById("yourname").value;
    var y = document.getElementById("lovename").value;
    

 var n = Math.random() * 100;
n = Math.floor(n) + 1;



if (n > 97) {
    alert (x + " and " + y + ", you are " + n + "% compatible. Nothing can get in the way of true love!")
} else if (n < 97 && n >85 ) {
    alert (x + " and " + y + ", you are " + n + "% compatible. Pretty much a match made in heaven!")
}else if (n < 85 && n > 70 ) {
    alert (x + " and " + y + ", you are " + n + "% compatible.")
}else if (n < 70 && n > 58 ) {
    alert (x + " and " + y + ", you are " + n + "% compatible. Let's make sure we're keeping those lines of communication open.")
}else if (n > 58 ) {
    alert (x + " and " + y + ", you are " + n + "% compatible. Looks like you may want to keep plan B open.")
};
}