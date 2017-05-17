
import words = require('word-list-json');

var search = document.getElementById('search');
var input = document.getElementsByTagName('input')[0];
var container = document.getElementById('words');
var dict;
search.addEventListener('click',function(){
    let str = input.value.toLowerCase();
    if(input){
        var anagrams = findAnagrams(str);
        printAnagrams(anagrams);
    }
},false);
interface dictionary{
    [ordered:string] : string[]
}
function buildDictionary(wordList:Array<string>):dictionary {
    let dict= {};
    for(let i=0;i<wordList.length;i++){
        let ordered = wordList[i].split('').sort().join('');
        if(!dict[ordered]){
            dict[ordered]=[];
        }
        dict[ordered].push(wordList[i]);
    }
    return dict;
}
function findAnagrams(str:string):Array<string>{
    if(!dict){
        dict = buildDictionary(words);
    }
    let ordered = str.split('').sort().join('');
    return dict[ordered];
}
function printAnagrams(anagrams:string[]){
    if(container.firstChild){
        container.removeChild(container.firstChild);
    }
    if(anagrams) {
        var list = document.createElement('ul');
        for (let i = 0; i < anagrams.length; i++) {
            let word = document.createElement('li');
            word.innerText = anagrams[i];
            list.appendChild(word);
        }
        container.appendChild(list);
    }
    else{
        var msg = document.createElement('p');
        msg.innerText="No anagrams were found";
        container.appendChild(msg);
    }
}
