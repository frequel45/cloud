        function sortArray() {
            var input = document.getElementById('arrayInput').value;
            var arr = parseInput(input);

            if (arr === null) {
                document.getElementById('output').textContent = "         Please enter a valid input of integers.";
                return;
            }

            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j] < arr[j + 1]) {
                        var temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            document.getElementById('output').textContent = arr.join(", ");
        }

        function parseInput(input) {
            var arr = [];
            var currentNumber = '';
            for (var i = 0; i < input.length; i++) {
                if (input[i] === ',') {
                    if (!isValidInteger(currentNumber)) {
                        return null; 
                    }
                    arr.push(parseInt(currentNumber));
                    currentNumber = ''; 
                } else {
                    currentNumber += input[i];
                }
            }

            if (!isValidInteger(currentNumber)) {
                return null; 
            }
            arr.push(parseInt(currentNumber));

            return arr;
        }

        function isValidInteger(value) {
            return !isNaN(value) && value.trim() !== '';
        }