let leftLightOnTime = 0;
let leftLightOffTime = 0;
let leftInterval;
let leftTimeout;


let rightLightOnTime = 0;
let rightLightOffTime = 0;
let rightInterval;


function updateTimeDisplay(id, time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.getElementById(id).textContent = `Waktu: ${minutes}:${seconds}`;
}


function toggleLeftLight() {
    const leftLight = document.getElementById("leftLight");
    const leftButton = document.getElementById("leftButton");
    const leftStatus = document.getElementById("leftStatus");
    const leftContainer = document.getElementById("leftLightContainer");
    const leftOnTimeDisplay = document.getElementById("leftOnTime");
    const leftOffTimeDisplay = document.getElementById("leftOffTime");

    if (leftLight.src.includes("pic_bulboff.jpg")) {
        leftLight.src = "pic_bulbon.jpg";
        leftStatus.textContent = "Lampu Nyala";
        leftButton.textContent = "Matikan";
        leftContainer.style.backgroundImage = "url('https://bahanpengawet.com/wp-content/uploads/2018/05/warehouse-pic.jpg')";


        leftOnTimeDisplay.style.display = "inline";
        leftOffTimeDisplay.style.display = "none";


        clearInterval(leftInterval);
        clearTimeout(leftTimeout);
        leftInterval = setInterval(() => {
            leftLightOnTime++;
            updateTimeDisplay("leftOnTime", leftLightOnTime);
        }, 1000);


        leftTimeout = setTimeout(() => {
            toggleLeftLight();
        }, 3000);
    } else {
        leftLight.src = "pic_bulboff.jpg";
        leftStatus.textContent = "Lampu Mati";
        leftButton.textContent = "Nyalakan";
        leftContainer.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Solid_black.svg/512px-Solid_black.svg.png')";


        leftOnTimeDisplay.style.display = "none";
        leftOffTimeDisplay.style.display = "inline";


        clearInterval(leftInterval);
        leftInterval = setInterval(() => {
            leftLightOffTime++;
            updateTimeDisplay("leftOffTime", leftLightOffTime);
        }, 1000);
    }

    leftLight.classList.add("shake");
    setTimeout(() => leftLight.classList.remove("shake"), 300);
}


function toggleRightLight(action) {
    const rightLight = document.getElementById("rightLight");
    const rightStatus = document.getElementById("rightStatus");
    const rightContainer = document.getElementById("rightLightContainer");

    const rightOnTimeDisplay = document.getElementById("rightOnTime");
    const rightOffTimeDisplay = document.getElementById("rightOffTime");

    if (action === "on") {
        rightLight.src = "pic_bulbon.jpg";
        rightStatus.textContent = "Lampu Nyala";
        rightContainer.style.backgroundImage = "url('https://cdn.idntimes.com/content-images/community/2023/09/home-stratosphere-warm-contemporaryresize50pc-83b2b44a70ea0d6e31b0791e40a50a00-5543100822f39a8ebefa5a2b1e18ad1a.jpg')";


        rightOnTimeDisplay.style.display = "inline";
        rightOffTimeDisplay.style.display = "none";


        clearInterval(rightInterval);
        rightInterval = setInterval(() => {
            rightLightOnTime++;
            updateTimeDisplay("rightOnTime", rightLightOnTime);
        }, 1000);
    } else {
        rightLight.src = "pic_bulboff.jpg";
        rightStatus.textContent = "Lampu Mati";
        rightContainer.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Solid_black.svg/512px-Solid_black.svg.png')";


        rightOnTimeDisplay.style.display = "none";
        rightOffTimeDisplay.style.display = "inline";


        clearInterval(rightInterval);
        rightInterval = setInterval(() => {
            rightLightOffTime++;
            updateTimeDisplay("rightOffTime", rightLightOffTime);
        }, 1000);
    }

    rightLight.classList.add("shake");
    setTimeout(() => rightLight.classList.remove("shake"), 300);
}


document.getElementById("leftLight").onclick = null;
document.getElementById("rightLight").onclick = null;



let targetNumber = Math.floor(Math.random() * 10) + 1;
let wrongGuessCount = 0;

function guessNumber() {
    const userGuess = parseInt(document.getElementById('guessNumberInput').value);
    const resultElement = document.getElementById('guessResult');

    if (userGuess === targetNumber) {
        resultElement.textContent = "Selamat! Tebakan Anda benar.";

        targetNumber = Math.floor(Math.random() * 10) + 1;
        wrongGuessCount = 0;
    } else {
        wrongGuessCount++;
        if (wrongGuessCount % 30 === 0) {
            resultElement.textContent = "Berhentilah berjudi kawan, dosa!!";
        } else {
            resultElement.textContent = "Tebakan salah. Coba lagi!";
        }
    }
}

function validateAgeInput(input) {
    const value = input.value;
    if (!/^\d*$/.test(value)) {
        input.value = value.slice(0, -1);
    }
}


function checkAge() {
    const ageInput = parseInt(document.getElementById('ageInput').value);
    const ageResult = document.getElementById('ageResult');

    if (isNaN(ageInput)) {
        ageResult.textContent = "Masukkan usia yang valid.";
        return;
    }

    let category;
    if (ageInput >= 0 && ageInput <= 2) {
        category = "Bayi (Masa Nyusahin)";
    } else if (ageInput >= 3 && ageInput <= 5) {
        category = "Balita (Masa Perkembangan)";
    } else if (ageInput >= 6 && ageInput <= 12) {
        category = "Anak-anak (Masa Aktif)";
    } else if (ageInput >= 13 && ageInput <= 18) {
        category = "Remaja (Masa Pengembangan Jati Diri)";
    } else if (ageInput >= 19 && ageInput <= 32) {
        category = "Dewasa (Masa Produktif)";
    } else if (ageInput >= 33 && ageInput <= 59) {
        category = "Dewasa (Masa Penuaan)";
    } else if (ageInput >= 60) {
        category = "Tua/Lansia (Masa Pensiun)";
    } else {
        category = "Usia tidak valid";
    }

    ageResult.textContent = `Anda Termasuk Kategori ${category}.`;
}



function convertTemperature() {
    const tempInput = parseFloat(document.getElementById('tempInput').value);
    const tempUnit = document.getElementById('tempUnit').value;
    const resultElement = document.getElementById('tempResult');

    if (isNaN(tempInput)) {
        resultElement.textContent = "Masukkan suhu yang valid.";
        return;
    }

    let convertedTemp;
    switch (tempUnit) {
        case 'CtoF':
            convertedTemp = (tempInput * 9 / 5) + 32;
            resultElement.textContent = `${tempInput}°C adalah ${convertedTemp.toFixed(2)}°F`;
            break;
        case 'FtoC':
            convertedTemp = (tempInput - 32) * 5 / 9;
            resultElement.textContent = `${tempInput}°F adalah ${convertedTemp.toFixed(2)}°C`;
            break;
        case 'CtoK':
            convertedTemp = tempInput + 273.15;
            resultElement.textContent = `${tempInput}°C adalah ${convertedTemp.toFixed(2)}K`;
            break;
        case 'KtoC':
            convertedTemp = tempInput - 273.15;
            resultElement.textContent = `${tempInput}K adalah ${convertedTemp.toFixed(2)}°C`;
            break;
        case 'FtoK':
            convertedTemp = (tempInput - 32) * 5 / 9 + 273.15;
            resultElement.textContent = `${tempInput}°F adalah ${convertedTemp.toFixed(2)}K`;
            break;
        case 'KtoF':
            convertedTemp = (tempInput - 273.15) * 9 / 5 + 32;
            resultElement.textContent = `${tempInput}K adalah ${convertedTemp.toFixed(2)}°F`;
            break;
    }
}


function calculate() {
    const angka1 = parseFloat(document.getElementById('angka1').value);
    const angka2 = parseFloat(document.getElementById('angka2').value);
    const operation = document.getElementById('operation').value;
    const resultElement = document.getElementById('hasil');

    if (isNaN(angka1) || isNaN(angka2)) {
        resultElement.textContent = "Masukkan angka yang valid.";
        return;
    }

    let hasil;
    switch (operation) {
        case '+':
            hasil = angka1 + angka2;
            break;
        case '-':
            hasil = angka1 - angka2;
            break;
        case '/':
            hasil = angka2 !== 0 ? angka1 / angka2 : "Tidak bisa membagi dengan nol";
            break;
        case '*':
            hasil = angka1 * angka2;
            break;
    }

    resultElement.textContent = hasil;
}

function clearInput() {
    document.getElementById('angka1').value = '';
    document.getElementById('angka2').value = '';
    document.getElementById('hasil').textContent = '';
}


let hewan = ["Kucing", "anjing", "burung", "ikan", "Kelinci"];
console.log("Array:", hewan);

console.log("Hewan Pertama:", hewan[0]);
console.log("Hewan Terakhir:", hewan[hewan.length - 1]);





let angka = ['10', '20', '30', '40', ]
console.log("Array:", angka);

angka.pop('10');
console.log("Array setelah penghapusan:", angka);

let warna = ['kuning', 'merah', 'kuning', 'hijau']
console.log("Array;", warna);


warna.push('ungu');
console.log("Array setelah penambahan:", warna);
for (let i = 1; i <= 10; i++) {
    console.log("Angka:", i);
}
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



const total = angka.reduce((curr) => +curr, 50);
console.log("jumblah", total);

console.log("Angka Genap:");
number.forEach(number => {
    if (number % 2 === 0) {
        console.log(number);
    }
});


console.log("Angka Ganjil:");
number.forEach(number => {
    if (number % 2 !== 0) {
        console.log(number);
    }
});

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