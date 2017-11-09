/**
 * Created by 锅里有肉 on 2017/9/1.
 */
/* document.write方法改变网页结构
function insertParagraph(text){
    var str ="<p>";
    str +=text;
    str +="</p>";
    document.write(str)
}
*/
/* innerHTML 方法创建元素
window.onload = function(){
    var testdiv = document.getElementById("testdiv");
    // alert(testdiv.innerHTML);
    testdiv.innerHTML = "<p>I inserted <em>this</em> content.</p>"
}
*/
/* 向html中创建文本
window.onload = function(){
    var para = document.createElement("p");
    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);
    var txt = document.createTextNode("Hello wrld");
    para.appendChild(txt);
}
*/
window.onload = function(){
    var para = document.createElement("p");
    var text1 = document.createTextNode("This is");
    para.appendChild(text1);
    var emphasis = document.createElement("em");
    var text2 = document.createTextNode(" my");
    emphasis.appendChild(text2);
    para.appendChild(emphasis);
    var text3 = document.createTextNode(" content");
    para.appendChild(text3);
    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);

}

