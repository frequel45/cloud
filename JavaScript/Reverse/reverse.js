
        function reverseSentence() {
            var sentence = document.getElementById('sentenceInput').value;

            var words = splitWords(sentence);

            for (var i = 0; i < words.length; i++) {
                words[i] = reverseWord(words[i]);
            }

            var reversedSentence = joinWords(words)
            document.getElementById('output').textContent = reversedSentence;
        }

        
        function splitWords(sentence) {
            var words = [];
            var currentWord = '';

            for (var i = 0; i < sentence.length; i++) {
                if (sentence[i] === ' ') {
                    words.push(currentWord);  
                    currentWord = '';  
                } else {
                    currentWord += sentence[i];  
                }
            }

            words.push(currentWord);  
            return words;
        }

    
        function reverseWord(word) {
            var reversed = '';
            for (var i = word.length - 1; i >= 0; i--) {
                reversed += word[i];
            }
            return reversed;
        }

      
        function joinWords(words) {
            var sentence = '';
            for (var i = 0; i < words.length; i++) {
                sentence += words[i];
                if (i < words.length - 1) {
                    sentence += ' ';  
                }
            }
            return sentence;
        }
  
