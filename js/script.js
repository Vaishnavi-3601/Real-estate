const btnBuy = document.getElementById('btn-buy');
const btnRent = document.getElementById('btn-rent');
const btnSell = document.getElementById('btn-sell');

const buySection = document.getElementById('buy-section');
const rentSection = document.getElementById('rent-section');
const sellSection = document.getElementById('sell-section');

function showSection(section) {
    buySection.style.display = 'none';
    rentSection.style.display = 'none';
    sellSection.style.display = 'none';

    section.style.display = 'flex';
}

function activateButton(button) {
    btnBuy.classList.remove('active');
    btnRent.classList.remove('active');
    btnSell.classList.remove('active');

    button.classList.add('active');
}

btnBuy.addEventListener('click', () => {
    showSection(buySection);
    activateButton(btnBuy);
});

btnRent.addEventListener('click', () => {
    showSection(rentSection);
    activateButton(btnRent);
});

btnSell.addEventListener('click', () => {
    showSection(sellSection);
    activateButton(btnSell);
});

// Show buy section by default
showSection(buySection);
activateButton(btnBuy);
