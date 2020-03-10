function draw(x, y) {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var ntd = canvas.getContext('2d');
    var btw = canvas.getContext('2d');
    var mtx = canvas.getContext('2d');
    ctx.save();
    ctx.clearRect(0, 0, 600, 200);
    ctx.fillStyle = "rgba(255,0,0,1)";
    ctx.fillRect(300, x, 80, 100);
    ctx.restore();
    ntd.fillStyle = "rgba(0,0,225,1)";
    ntd.fillRect(200, 50, 100, x);
    ntd.restore();
    btw.save();
    btw.fillStyle = "rgba(0,255,0,1)";
    btw.fillRect(275, 20, x, 75);
    btw.restore();
    mtx.beginPath();
    mtx.arc(500, 145, 40, 0, 2 * Math.PI);
    mtx.stroke();
    x += 2;
    var loopTimer = setTimeout('draw(' + x + ',' + y + ')', 30);
}

