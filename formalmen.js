function updateProductNumberfiftyfour(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberfiftyfour');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalfiftyfour');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusfiftyfour").addEventListener('click', function () {
    updateProductNumberfiftyfour('phone', 599, true);
});
document.getElementById("phone-minusfiftyfour").addEventListener('click', function () {
    updateProductNumberfiftyfour('phone', 599, false);
});

function updateProductNumberfiftyfive(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberfiftyfive');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalfiftyfive');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusfiftyfive").addEventListener('click', function () {
    updateProductNumberfiftyfive('phone', 2599, true);
});
document.getElementById("phone-minusfiftyfive").addEventListener('click', function () {
    updateProductNumberfiftyfive('phone', 2599, false);
});

function updateProductNumberfiftysix(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberfiftysix');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalfiftysix');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusfiftysix").addEventListener('click', function () {
    updateProductNumberfiftysix('phone', 3599, true);
});
document.getElementById("phone-minusfiftysix").addEventListener('click', function () {
    updateProductNumberfiftysix('phone', 3599, false);
});

function updateProductNumberfiftyseven(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberfiftyseven');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalfiftyseven');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusfiftyseven").addEventListener('click', function () {
    updateProductNumberfiftyseven('phone', 3599, true);
});
document.getElementById("phone-minusfiftyseven").addEventListener('click', function () {
    updateProductNumberfiftyseven('phone', 3599, false);
});

function updateProductNumberfiftyeight(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberfiftyeight');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalfiftyeight');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusfiftyeight").addEventListener('click', function () {
    updateProductNumberfiftyeight('phone', 3599, true);
});
document.getElementById("phone-minusfiftyeight").addEventListener('click', function () {
    updateProductNumberfiftyeight('phone', 3599, false);
});

function updateProductNumberfiftynine(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberfiftynine');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalfiftynine');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusfiftynine").addEventListener('click', function () {
    updateProductNumberfiftynine('phone', 3599, true);
});
document.getElementById("phone-minusfiftynine").addEventListener('click', function () {
    updateProductNumberfiftynine('phone', 3599, false);
});