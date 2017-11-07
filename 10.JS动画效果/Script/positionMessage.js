/**
 * Created by 锅里有肉 on 2017/9/19.
 */
function positionMessage() {
    if (!document.getElementById || !document.getElementById("message")
        || !document.getElementById("message2")) return false;
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "100px";
    moveElement("message",125,25,20);
    var elem = document.getElementById("message2");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "50px";
    moveElement("message2",125,75,20);
}
addLoadEvent(positionMessage);