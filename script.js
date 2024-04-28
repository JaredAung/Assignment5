var rootDiv = document.createElement("div");
rootDiv.id = "root";

function findHighest(frequency){
    var highest = frequency[0];
    var highestIndex = 0;
    for(var s=1; s < frequency.length; s++){
        if(frequency[s] > highest){
            highest = frequency[s];
            highestIndex = s;
        }
    }
    return highestIndex;
}

function outputFrequencyTable(){
    outputDiv.innerHTML = "";
    outputDiv.innerText = "Top 5 most frequent words are: ";
    var firstDiv = document.createElement("div");
    firstDiv.textContent = frequency_table.word1+ ":" +frequency_table.number1;
    outputDiv.appendChild(firstDiv);
    
    var secondDiv = document.createElement("div");
    secondDiv.textContent = frequency_table.word2 + ":" + frequency_table.number2;
    outputDiv.appendChild(secondDiv);

    var thirdDiv = document.createElement("div");
    thirdDiv.textContent = frequency_table.word3 + ":" + frequency_table.number3;
    outputDiv.appendChild(thirdDiv);

    var fourthDiv = document.createElement("div");
    fourthDiv.textContent = frequency_table.word4 + ":" + frequency_table.number4;
    outputDiv.appendChild(fourthDiv);

    var fifthDiv = document.createElement("div");
    fifthDiv.textContent = frequency_table.word5 + ":" + frequency_table.number5;
    outputDiv.appendChild(fifthDiv);
}
const frequency_table= {
    word1: " ",
    word2:" ",
    word3:" ",
    word4:" ",
    word5:" ",

    number1: 0,
    number2: 0,
    number3: 0,
    number4: 0,
    number5:0,
};
var textArea = document.createElement("textarea");
textArea.id = "inputText";
textArea.placeholder = "Input text: ";
rootDiv.appendChild(textArea);

var submitButton = document.createElement("button");
submitButton.id = "submitButton";
submitButton.textContent = "Submit";

var outputDiv = document.createElement("div");
outputDiv.id = "output_frequency_table";
outputDiv.style.color = 'blue';
outputDiv.style.marginLeft = 'auto';
rootDiv.appendChild(outputDiv);

submitButton.addEventListener("click", function()
{
    var text = textArea.value;
    console.log(text);
    var words = text.split(' ');
    let i;
    let j;
    var uniqueWords = [];
    uniqueWords.push(words[0]);
    var frequency = [];
    frequency[0] = 0;

    //check unique function
    for(i=1; i<words.length;i++){
        var isUnique = true;
        for(j=0;j<uniqueWords.length;j++){
            if(words[i] == uniqueWords[j]){
                isUnique = false;
                break;
            }         
        }
        if(isUnique) {
            uniqueWords.push(words[i]);
            frequency.push(0);
        }

    }
    console.log(uniqueWords); 
    console.log(frequency);
    
    for(var g = 0; g< uniqueWords.length; g++ ){
        for(var h =0; h < words.length; h++){
            if(uniqueWords[g] == words[h]){
                frequency[g]++;
            }
        }
    }
    
    console.log(frequency);

    var highestIndex = findHighest(frequency);
    console.log(highestIndex);

    frequency_table.word1 = uniqueWords[highestIndex];
    frequency_table.number1 = frequency[highestIndex];
    
    console.log(frequency_table.number1);
    console.log(frequency_table.word1);
    frequency[highestIndex] = 0;

    //second index
    var secondIndex = findHighest(frequency);
    frequency_table.word2 = uniqueWords[secondIndex];
    frequency_table.number2 = frequency[secondIndex];
    frequency[secondIndex] = 0;

    //third 
    var thirdIndex = findHighest(frequency);
    frequency_table.word3 = uniqueWords[thirdIndex];
    frequency_table.number3 = frequency[thirdIndex];
    frequency[thirdIndex] = 0;

    //fourth 
    var fourthIndex = findHighest(frequency);
    frequency_table.word4 = uniqueWords[fourthIndex];
    frequency_table.number4 = frequency[fourthIndex];
    frequency[fourthIndex] = 0;

    //fifth
    var fifthIndex = findHighest(frequency);
    frequency_table.word5 = uniqueWords[fifthIndex];
    frequency_table.number5 = frequency[fifthIndex];
    frequency[fifthIndex] = 0;

    console.log(frequency_table);
    
    outputFrequencyTable();

});


rootDiv.appendChild(submitButton);

document.body.appendChild(rootDiv);