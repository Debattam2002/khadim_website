function updateProductNumberhundredthree(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberhundredthree');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalhundredthree');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plushundredthree").addEventListener('click', function () {
    updateProductNumberhundredthree('phone', 599, true);
});
document.getElementById("phone-minushundredthree").addEventListener('click', function () {
    updateProductNumberhundredthree('phone', 599, false);
});

function updateProductNumberhundredfour(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberhundredfour');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalhundredfour');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plushundredfour").addEventListener('click', function () {
    updateProductNumberhundredfour('phone', 2599, true);
});
document.getElementById("phone-minushundredfour").addEventListener('click', function () {
    updateProductNumberhundredfour('phone', 2599, false);
});

function updateProductNumberhundredfive(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberhundredfive');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalhundredfive');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plushundredfive").addEventListener('click', function () {
    updateProductNumberhundredfive('phone', 3599, true);
});
document.getElementById("phone-minushundredfive").addEventListener('click', function () {
    updateProductNumberhundredfive('phone', 3599, false);
});

function updateProductNumberhundredsix(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberhundredsix');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalhundredsix');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plushundredsix").addEventListener('click', function () {
    updateProductNumberhundredsix('phone', 3599, true);
});
document.getElementById("phone-minushundredsix").addEventListener('click', function () {
    updateProductNumberhundredsix('phone', 3599, false);
});

function updateProductNumberhundredseven(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberhundredseven');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalhundredseven');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plushundredseven").addEventListener('click', function () {
    updateProductNumberhundredseven('phone', 3599, true);
});
document.getElementById("phone-minushundredseven").addEventListener('click', function () {
    updateProductNumberhundredseven('phone', 3599, false);
});

function updateProductNumberhundredeight(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberhundredeight');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalhundredeight');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plushundredeight").addEventListener('click', function () {
    updateProductNumberhundredeight('phone', 3599, true);
});
document.getElementById("phone-minushundredeight").addEventListener('click', function () {
    updateProductNumberhundredeight('phone', 3599, false);
});