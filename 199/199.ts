
function promises(urlArray,callback:Function){
    var results={};
    for(let i=0; i<urlArray.length;i++){
        let req= new XMLHttpRequest();
        req.open('GET',urlArray[i],true);
        req.onload=function(res){
            results[i]=res;
        };
        req.send();
    }
    while(!results[urlArray.length-1]){}
    callback.call(results);
}