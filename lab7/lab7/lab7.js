//Завдання 1-Пріоритет завантаження скриптів
<script src="big.js"></script>
<script src="small.js"></script>
//перший буде big.js тому, що браузер виконує скрипти послідовно
//Завдання 2-Логіка та змінні
//1 Дайте відповідь, чому дорівнюватиме х у цьому прикладі:
var a = 2; var x = 1 + (a *= 2);
//x - 5; a-4 ((a *= 2)- це як 2*2 тому а-4 ну і + 1 буде 5)
//2 Чи з'явиться alert у наступному коді та поясніть чому?
if ("0") { alert('Привіт'); }
// так з'явиться alert('Привіт'), працює тому що if не порожній там є 0 тому це істина (true)
//3 Оголосіть змінні admin та name, запишіть у name рядок "Василь",скопіюйте його в admin та виведіть admin у консоль.
let name = "Василь";
let admin = name;
console.log(admin);
//Завдання 3
let countiesData = [];
// Асинхронна функція для отримання даних
async function fetchCounties() {
    try {
        const response = await fetch('https://api.census.gov/data/2020/acs/acs5/profile?get=NAME&for=county:*');
        const data = await response.json();

        // Перший рядок — заголовки, пропускаємо його
        countiesData = data.slice(1).map(item => ({
            name: item[0],       // NAME
            state: item[1],      // state
            county: item[2]      // county
        }));
    } catch (error) {
        console.error('Помилка при завантаженні даних:', error);
    }
}
// Функція для отримання коду округу за назвою
function getCountyCode(countyName) {
    const found = countiesData.find(c => c.name.toLowerCase() === countyName.toLowerCase());
    return found ? found.state + found.county : null;
}
// Подія на кнопку
document.getElementById('searchBtn').addEventListener('click', () => {
    const input = document.getElementById('countyInput').value.trim();
    const code = getCountyCode(input);

    const resultDiv = document.getElementById('result');
    if (code) {
        resultDiv.textContent = `Код округу: ${code}`;
        console.log(`Код округу для "${input}": ${code}`);
    } else {
        resultDiv.textContent = `Округ не знайдено`;
        console.log(`Округ "${input}" не знайдено`);
    }
});

//Завдання 4
// Знаходимо форму
const form = document.getElementById("myForm");
// Додаємо обробник події submit
form.addEventListener("submit", function(event) {
    // Отримуємо значення полів
    const firstName = document.getElementById("first_name").value.trim();
    const lastName = document.getElementById("last_name").value.trim();
    const email = document.getElementById("email").value.trim();
    // Перевірка на порожні поля
    if (!firstName || !lastName || !email) {
        alert("Будь ласка, заповніть всі поля!");
        event.preventDefault(); // зупиняє відправку форми
    } else {
        alert("Дані:\nІм'я: " + firstName +
            "\nПрізвище: " + lastName +
            "\nEmail: " + email);
    }
});
//Завдання 5
const box = document.getElementById("elid");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

let position = 0;

leftBtn.addEventListener("click", () => {
    position -= 100;
    box.style.left = position + "px";
});

rightBtn.addEventListener("click", () => {
    position += 100;
    box.style.left = position + "px";
});





