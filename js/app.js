const products = document.querySelector('#products');
const orders = document.querySelector('#orders');
const packageChoose = document.querySelector('#package');
const selectDropdown = document.querySelector('.select_dropdown');
const accounting = document.querySelector('#accounting');
const terminal = document.querySelector('#terminal');
const calcSummary = document.querySelector('.calc_summary');
const calcList = calcSummary.querySelectorAll('ul .list_item');
const selectInput = document.querySelector('.select_input')
const calcTotal = calcSummary.querySelectorAll('.summary_total');
let total = 0;

function calculateTotal() {
    total = 0;
    const prodValue = Number(products.value) * 0.5;
    const orderValue = Number(orders.value) * 0.25;
    const acctValue = accounting.checked === true ? 10 : 0;
    const termValue = terminal.checked === true ? 10 : 0;
    const select1 = calcList[2].children[1].innerText === "Basic" ? 10 : 0
    const select2 = calcList[2].children[1].innerText === "Professional" ? 25 : 0
    const select3 = calcList[2].children[1].innerText === "Premium" ? 60 : 0
    console.log(orders.value)

    total = prodValue + orderValue + acctValue + termValue + select1 +select2 + select3;
    calcTotal[0].children[1].innerText = total;

}

products.addEventListener('keyup', function () {
    const productsValue = products.value;
    if ((productsValue > 0) && (productsValue.length > 0)) {
        calcList[0].style.display = 'flex'
        calcList[0].children[1].innerText = productsValue + " * 0.5";
        calcList[0].children[2].innerText = `$ ${productsValue * 0.5} `;
        calcTotal[0].style.display = "block"
        // total = calcTotal[0].children[1].innerText = (productsValue * 0.5);
        calculateTotal();
    } else {
        calcList[0].style.display = 'none'
    }
})
orders.addEventListener('keyup', function (ev) {
    const ordersValue = orders.value;
    if ((ordersValue > 0) && (ordersValue.length > 0)) {
        calcList[1].style.display = 'flex'
        calcList[1].children[1].innerText = ordersValue + " * 0.25";
        calcList[1].children[2].innerText = `$ ${ordersValue * 0.25} `;
        calcTotal[0].style.display = "block"
        // total = calcTotal[0].children[1].innerText = (ordersValue * 0.5) + total;
    calculateTotal();
    } else {
        calcList[1].style.display = 'none'
    }
})

accounting.addEventListener('click', function () {
    if (accounting.checked) {
        calcList[3].style.display = 'flex'
        calcTotal[0].style.display = "block"
        // total = calcTotal[0].children[1].innerText = total + 10;
        calculateTotal();
    } else {
        calcList[3].style.display = 'none'
        calculateTotal();
        // total = calcTotal[0].children[1].innerText = total - 10;
    }
})
terminal.addEventListener('click', function () {
    if (terminal.checked) {
        calcList[4].style.display = 'flex'
        calcTotal[0].style.display = "block"
        // total = calcTotal[0].children[1].innerText = total + 10;
        calculateTotal();
    } else {
        calcList[4].style.display = 'none'
        calculateTotal();
        // total = calcTotal[0].children[1].innerText = total - 10;
    }
})

packageChoose.addEventListener('click', function () {
    if (selectDropdown.style.display === 'none') {
        selectDropdown.style.display = 'inline-block';
        selectDropdown.children[0].addEventListener('click', function () {

            calcList[2].style.display = 'flex'
            calcList[2].children[1].innerText = "Basic";
            calcList[2].children[2].innerText = '$10';
            calcTotal[0].style.display = "block"
            calculateTotal();
            // total = calcTotal[0].children[1].innerText = total + 10;
            if (calcList[2].style.display === 'flex') {
                selectInput.innerText = 'Basic';
            }

        })
        selectDropdown.children[1].addEventListener('click', function () {

            calcList[2].style.display = 'flex'
            calcList[2].children[1].innerText = "Professional";
            calcList[2].children[2].innerText = '$25';
            calcTotal[0].style.display = "block"
            calculateTotal();
            // total = calcTotal[0].children[1].innerText = total + 25;
            if (calcList[2].style.display === 'flex') {
                selectInput.innerText = 'Professional'
            }
        })
        selectDropdown.children[2].addEventListener('click', function () {

            calcList[2].style.display = 'flex'
            calcList[2].children[1].innerText = "Premium";
            calcList[2].children[2].innerText = '$60';
            calcTotal[0].style.display = "block"
            calculateTotal();
            // total = calcTotal[0].children[1].innerText = total + 60;
            if (calcList[2].style.display === 'flex') {
                selectInput.innerText = 'Premium';
            }
        })
    } else {
        selectDropdown.style.display = 'none'
    }
})
