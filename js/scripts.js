$(document).ready(function() {
  $("#formOne").submit(function() {

    event.preventDefault();

    var userSentence = $("input#sentence").val();
    var sentenceArray = userSentence.split(' ');

    var vowels = ['a', 'e', 'i', 'o', 'u'];

    var stringWithoutVowels = [];

   

    $("#output").text(sentenceArray);

  })
})