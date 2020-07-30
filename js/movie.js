document.getElementById("omikuji_btn").onclick = function () {
    alert("今日のあなたの運勢は・・・");
    var random = Math.floor(Math.random() * 6);
    var omikuji;
    if (random === 0) omikuji = "大吉";
    if (random === 1) omikuji = "吉";
    if (random === 2) omikuji = "中吉";
    if (random === 3) omikuji = "小吉";
    if (random === 4) omikuji = "末吉";
    if (random === 5) omikuji = "凶"
    alert(omikuji);
    
}







