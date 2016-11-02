function countWords(inputWords){
    var wordCount = {};
    inputWords.reduce(function(previousValue, currentValue){
      if(wordCount.hasOwnProperty(currentValue)){
        wordCount[currentValue]++;
      }else{
        wordCount[currentValue] = 1;
      }
    }, 0);
    return wordCount;
}

module.exports = countWords