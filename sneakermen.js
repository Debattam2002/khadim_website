function updateProductNumbereightyfive(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numbereightyfive');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totaleightyfive');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-pluseightyfive").addEventListener('click', function () {
    updateProductNumbereightyfive('phone', 599, true);
});
document.getElementById("phone-minuseightyfive").addEventListener('click', function () {
    updateProductNumbereightyfive('phone', 599, false);
});

function updateProductNumbereightysix(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numbereightysix');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totaleightysix');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-pluseightysix").addEventListener('click', function () {
    updateProductNumbereightysix('phone', 2599, true);
});
document.getElementById("phone-minuseightysix").addEventListener('click', function () {
    updateProductNumbereightysix('phone', 2599, false);
});

function updateProductNumbereightyseven(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numbereightyseven');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totaleightyseven');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-pluseightyseven").addEventListener('click', function () {
    updateProductNumbereightyseven('phone', 3599, true);
});
document.getElementById("phone-minuseightyseven").addEventListener('click', function () {
    updateProductNumbereightyseven('phone', 3599, false);
});

function updateProductNumbereightyeight(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numbereightyeight');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totaleightyeight');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-pluseightyeight").addEventListener('click', function () {
    updateProductNumbereightyeight('phone', 3599, true);
});
document.getElementById("phone-minuseightyeight").addEventListener('click', function () {
    updateProductNumbereightyeight('phone', 3599, false);
});

function updateProductNumbereightynine(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numbereightynine');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totaleightynine');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-pluseightynine").addEventListener('click', function () {
    updateProductNumbereightynine('phone', 3599, true);
});
document.getElementById("phone-minuseightynine").addEventListener('click', function () {
    updateProductNumbereightynine('phone', 3599, false);
});

function updateProductNumberninety(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberninety');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalninety');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusninety").addEventListener('click', function () {
    updateProductNumberninety('phone', 3599, true);
});
document.getElementById("phone-minusninety").addEventListener('click', function () {
    updateProductNumberninety('phone', 3599, false);
});