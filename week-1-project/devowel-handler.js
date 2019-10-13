/*

write a little javascript to:
- take in the string 'toDevowel'
- remove all of the vowels
- and assign the new string to 'devoweled'

the handler is already set up to:
- read user input to the variable 'toDevowel'
- write 'devoweled' to the output

*/

function devowelHandler() {

  // read and process user input (this works, no need to change it!)
  const toDevowel = document.getElementById('devowel-input').value;

  // pass user input through core logic (write this! it doesn't work)
  const devoweled = `remove all vowels from ${toDevowel}`;

    let vowels = "aieuo";
    let strArr = toDevowel.toLowerCase().split("");
    let newArr = strArr.filter(function(letter){
        if(vowels.indexOf(letter)  == -1){
            return letter;
        }
    });
    var string = "";
    newArr.forEach(function(letter){
        string += letter;
    });
    

  // report result to user (this works, no need to change it!)
  const outputField = document.getElementById('devowel-output');
  outputField.innerHTML = devoweled +":  "+ string;

  console.log('\n--- devowelHandler ---');
  console.log('toDevowel:', typeof toDevowel, ',', toDevowel);
  console.log('devoweled:', typeof devoweled, ',', devoweled);
};
const devowelButton = document.getElementById('devowel-button');
devowelButton.addEventListener('click', devowelHandler);
