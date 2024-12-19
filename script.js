document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    
    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('okButton').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('loginForm').reset();
});
