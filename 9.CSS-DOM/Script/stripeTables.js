/**
 * Created by 锅里有肉 on 2017/9/7.
 */
function stripeTables(){
    if(!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    for (var i=0; i<tables.length; i++){
        var odd = false;
        var rows = tables[i].getElementsByTagName("tr");
        for (var j=0; j<rows.length; j++){
            if (odd == true){
                // rows[j].style.backgroundColor = "#ffc";
                addClass(rows[j],"odd");
                odd = false;
            }else{
                odd = true;
            }
        }
    }
}
addLoadEvent(stripeTables);