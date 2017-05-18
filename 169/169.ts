
String.prototype.reverse=reverse;
String.prototype.reverseWords=reverseWords;
var button = document.getElementById('reverse');
var button2 = document.getElementById('reverseWords');
var input = document.getElementsByTagName('input')[0];
var par = document.getElementsByTagName('p')[0];
button.addEventListener('click',function(){
    par.innerText = input.value.reverse();
});
button2.addEventListener('click',function(){
    par.innerText = input.value.reverseWords();
});
function reverse():string{
    let str : string = this;
    let newStr : string = '';
    for(let i=str.length-1;i>=0;i--){
        newStr+=str[i];
    }
    return newStr;
}

function reverseWords():string{
    let str :string = this,
        newStr :string = '',
        words :string[]= str.match(/\b[a-z]+?\b/g);
    for(let i=0;i<words.length;i++){
        newStr += words[i].reverse();
        newStr+=' ';
    }
    // newStr.trim();
    return newStr;
}