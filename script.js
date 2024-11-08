let idCounter = 1;

function addToTable() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const status = document.getElementById("status").value;

    if (/\d/.test(name)) {
        alert("Nama tidak boleh mengandung angka!");
        return;
    }

    if (!/@gmail.com/.test(email)) {
        alert("Email harus mengandung karakter '@gmail.com'!");
        return;
    }

    if (name && email) {
        const table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.classList.add("fade-in");

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);

        cell1.innerHTML = idCounter++;
        cell2.innerHTML = name;
        cell3.innerHTML = email;
        cell4.innerHTML = status;

        document.getElementById("dataForm").reset();


        observeElement(newRow);
    } else {
        alert("Mohon isi data dengan benar!");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll(".fade-in");

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});

function observeElement(element) {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    observer.observe(element);
}