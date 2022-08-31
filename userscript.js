function store() {

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var age = document.getElementById('age');
    var phonenumber = document.getElementById('phonenumber');
    var date = document.getElementById('date');
    var address = document.getElementById('address');
    var adhaar = document.getElementById('adhaar');
    var getitems = localStorage.getItem('userinfo')
    getitems = JSON.parse(getitems)
    var data = (getitems !== undefined && Array.isArray(getitems) && getitems.length > 0) ? getitems : [];
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    data.push({
        name: name.value,
        email: email.value,
        age: age.value,
        phone: phonenumber.value,
        adhaar: adhaar.value,
        address: address.value,
        date: date.value
    })

    localStorage.setItem('userinfo', JSON.stringify(data));

    alert('user has been registered Sucessfully');
}