
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');


registerBtn.addEventListener('click', () => container.classList.add("active"));
loginBtn.addEventListener('click', () => container.classList.remove("active"));


function togglePasswordVisibility(inputId) {
    const passwordInput = document.getElementById(inputId);
    const toggleIcon = passwordInput.nextElementSibling;

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    }
}


function isValidEmailDomain(email) {
    const validDomain = "@lunami.gb.id";
    return email.endsWith(validDomain);
}


document.getElementById('signUpForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (name && email && password) {
        if (isValidEmailDomain(email)) {
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            users.push({ name, email, password });
            localStorage.setItem('users', JSON.stringify(users));
            
            alert("Akun Telah Berhasil Dibuat! Kamu Sekarang Bisa Masuk!");
            container.classList.remove("active"); 
        } else {
            alert("Email harus berakhiran @lunami.gb.id");
        }
    } else {
        alert("Isi Semua Bidang Dengan Benar");
    }
});

document.getElementById('signInForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    if (isValidEmailDomain(email)) {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(user => user.email === email && user.password === password);
        
        if (user) {
            window.location.href = "Home.html"; 
        } else {
            alert("Masukkan Email atau Sandi Yang Valid");
        }
    } else {
        alert("Email harus berakhiran @lunami.gb.id");
    }
});
