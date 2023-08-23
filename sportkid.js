function updateProductNumberninetyseven(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberninetyseven');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalninetyseven');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusninetyseven").addEventListener('click', function () {
    updateProductNumberninetyseven('phone', 599, true);
});
document.getElementById("phone-minusninetyseven").addEventListener('click', function () {
    updateProductNumberninetyseven('phone', 599, false);
});

function updateProductNumberninetyeight(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberninetyeight');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalninetyeight');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusninetyeight").addEventListener('click', function () {
    updateProductNumberninetyeight('phone', 2599, true);
});
document.getElementById("phone-minusninetyeight").addEventListener('click', function () {
    updateProductNumberninetyeight('phone', 2599, false);
});

function updateProductNumberninetynine(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberninetynine');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalninetynine');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusninetynine").addEventListener('click', function () {
    updateProductNumberninetynine('phone', 3599, true);
});
document.getElementById("phone-minusninetynine").addEventListener('click', function () {
    updateProductNumberninetynine('phone', 3599, false);
});

function updateProductNumberhundred(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberhundred');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalhundred');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plushuundred").addEventListener('click', function () {
    updateProductNumberhundred('phone', 3599, true);
});
document.getElementById("phone-minushundred").addEventListener('click', function () {
    updateProductNumberhundred('phone', 3599, false);
});

function updateProductNumberhundredone(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberhundredone');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalhundredone');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plushundredone").addEventListener('click', function () {
    updateProductNumberhundredone('phone', 3599, true);
});
document.getElementById("phone-minushundredone").addEventListener('click', function () {
    updateProductNumberhundredone('phone', 3599, false);
});
function updateProductNumberhundredtwo(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberhundredtwo');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalhundredtwo');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plushundredtwo").addEventListener('click', function () {
    updateProductNumberhundredtwo('phone', 3599, true);
});
document.getElementById("phone-minushundredtwo").addEventListener('click', function () {
    updateProductNumberhundredtwo('phone', 3599, false);
});