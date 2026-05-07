// Manejo de Login
const btnLogin = document.getElementById('btnLogin');

if (btnLogin) {
    btnLogin.addEventListener('click', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!email || !password) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        try {
            // Usamos window.auth que definimos en el otro archivo
            await window.auth.signInWithEmailAndPassword(email, password);
            window.location.href = "home.html";
        } catch (error) {
            console.error("Error al entrar:", error.message);
            alert("Error: " + error.message);
        }
    });
}