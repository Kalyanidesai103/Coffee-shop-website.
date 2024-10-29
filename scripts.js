document.querySelector('form').addEventListener ('submit',function (event) {
    
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;

     if (name === '' || email === '') {
        event .preventDefault();
        alert('Please fill out both the name and email fields.');

     }
});