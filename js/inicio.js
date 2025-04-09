function validarusuario(event) {

    event.preventDefault();


    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    realizarRequest(email, password);
}

function realizarRequest(email, password) {

    const url = "https://jsonplaceholder.typicode.com/users";
    
    fetch(url)
        .then(response => response.json())
        .then(users => {

            const user = users.find(user => user.email === email);

            if (user) {

                const storedPassword = user.address.geo.lat;
                if (password === storedPassword) {

                    window.location.href = "home.html";

                } else {
                    alert("Correo o contraseña incorrectos");
                }
            } else {
                alert("Correo o contraseña incorrectos");
            }
        })
}



