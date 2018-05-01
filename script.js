document.getElementById("findButton").onclick = function() {
    anagramResult.textContent = "";
    let typedText = document.getElementById("input").value;
    let organizedTypedText = alphabetize(typedText);
    var anaString = []
    for (let i = 0; i<words.length;i++){
        let organizedWords = alphabetize(words[i]);
        if(organizedTypedText === organizedWords){
            anaString.push(words[i]);
        }
    }
    //console.log(anaString);
    let printAnaString = anaString.join(" ");
    //console.log(printAnaString);
    //let anagramResult = document.createElement("p");
    anagramResult.textContent = printAnaString;
    document.body.appendChild(anagramResult);
}

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

let anagramResult = document.createElement("p");