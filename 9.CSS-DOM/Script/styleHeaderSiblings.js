/**
 * Created by 锅里有肉 on 2017/9/6.
 */
function getNextElement (node){
    if(node.nodeType == 1){
        return false;
    }
    if (node.nextSibling){
        return getNextElement(node.nextSibling);
    }
    return null;
}
function styleElementSiblings(tag,theclass) {
    if (!document.getElementsByTagName) return false;
    var header = document.getElementsByTagName("tag");
    for (var i = 0; i < header.length; i++) {
        var elem = getNextElement(header[i].nextSibling);
        //基础dom方法改变元素样式
        /*   elem.style.fontWeight = "bold";
         elem.style.fontSize = "1.2em";
         }*/
//className方法改变元素样式
        elem.className += " theclass";
    }
}
styleElementSiblings("h1","intro");
addLoadEvent(styleElementSiblings);