$(document).ready(function() {
  $("#formOne").submit(function() {

    event.preventDefault();

    var userSentence = $("input#sentence").val();
    var sentenceArray = userSentence.split("");

    var vowels = ['a', 'e', 'i', 'o', 'u'];

    var stringWithoutVowels = [];

    for (var index = 0; index < sentenceArray.length; index++)
    {
      for (var index1 = 0; index1 < vowels.length; index1++) {
        if (sentenceArray[index] === vowels[index1]) {
          sentenceArray[index] = "-";
        }
      } sentenceArray[index];
    }

  //   for (var index = 0; index < sentenceArray.length; index++) {
  //     if(sentenceArray[index] === "a" || sentenceArray[index] === "e" || sentenceArray[index] === "i" || sentenceArray[index] === "o" || sentenceArray[index] === "u") {
  //       sentenceArray[index] = "-";

        
        
      
  //   }
  // }

    var stringWithoutVowels = sentenceArray.join(' ');

    $("#output").text(stringWithoutVowels);

  })
})