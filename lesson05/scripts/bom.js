const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value != '') {
        let li = document.createElement('li');
        let deleteButton = document.createElement('button');
        // Capitalizes the first letter of the word if you don't use caps.
        let word = input.value;
        let capWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        li.textContent = capWord;

        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        input.focus();
        input.value = '';
    
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
            input.value = '';
            })
        }
});

// Lets you add to the list by hitting the Enter key instead of clicking the button.
input.addEventListener('keydown', function (event){
    if (event.key === 'Enter'){
        event.preventDefault();
        let li = document.createElement('li');
        let deleteButton = document.createElement('button');
        // Capitalizes the first letter of the word if you don't use caps.
        let word = input.value;
        let capWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        li.textContent = capWord;

        deleteButton.textContent = '❌';
        li.appendChild(deleteButton);
        list.append(li);
        input.value = '';
        
        deleteButton.addEventListener('click', function (){
            list.removeChild(li);
            input.focus();
            input.value = '';
        })
    }
});