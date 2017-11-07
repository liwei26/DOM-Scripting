/**
 * Created by 锅里有肉 on 2017/9/3.
 */
function displayAbbrevations(){
    if(!document.getElementsByTagName) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    //get all abbrevations
    var abbrevations = document.getElementsByTagName("abbr");
    if (abbrevations.length < 1) return false;
    var defs = new Array();
    //loop through the abbrevations
    for (var i = 0; i < abbrevations.length;i++){
        var current_abbr = abbrevations[i];
        if (current_abbr.childNodes.length < 1) continue;
        var definition = abbrevations[i].getAttribute("title");
        var key = abbrevations[i].lastChild.nodeValue;
        defs[key] = definition;
    }
    //create the definition title
    var dlist = document.createElement("dl");
    //loop through the definition
    for(key in defs){
        var definition = defs[key];
        //create the definition title
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        //create the definition description
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        //add them to the definition
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if (dlist.childNodes.length < 1) return false;
    //create a headline
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    //add headline to the body
    document.body.appendChild(header);
    //add the definition list to the body
    document.body.appendChild(dlist);
}
addLoadEvent(displayAbbrevations);
