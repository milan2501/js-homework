let container = document.querySelector('#container').value;
let acceptBtn = document.querySelector('#accept');
let deleteBtn;
let userId;


for (let i = 18; i <= 100; i++) {
    let optionCounter = document.createElement('option');
    optionCounter.innerText = i;
    optionCounter.value = i;
    optionCounter.value = i;
    age.append(optionCounter);
}

acceptBtn.addEventListener('click', function() {   
let names = document.querySelector('#name').value;
let lastName = document.querySelector('#lastName').value;
let age = document.querySelector('#age').value;

    register(names, lastName, age);

})

function register(names, lastName, age) {
    if (names === '' || lastName === '' || age === '') {
        console.log('Please fill all the boxies!');
    } else {
        fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                firstName: names,
                lastName: lastName,
                age: age
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            userId = data.id;
        });

        deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delBtn');
        deleteBtn.innerText = 'Delete';
        deleteBtn.style.margin = '10px'
        document.body.append(deleteBtn);
    }
    let url = new URLSearchParams()
    deleteBtn.addEventListener('click', function() {
        fetch(`https://dummyjson.com/users/${userId}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(console.log);
    });
};

































































































