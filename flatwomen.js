function updateProductNumberfourtyeight(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberfourtyeight');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalfourtyeight');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusfourtyeight").addEventListener('click', function () {
    updateProductNumberfourtyeight('phone', 599, true);
});
document.getElementById("phone-minusfourtyeight").addEventListener('click', function () {
    updateProductNumberfourtyeight('phone', 599, false);
});

function updateProductNumberfourtynine(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberfourtynine');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalfourtynine');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusfourtynine").addEventListener('click', function () {
    updateProductNumberfourtynine('phone', 2599, true);
});
document.getElementById("phone-minusfourtynine").addEventListener('click', function () {
    updateProductNumberfourtynine('phone', 2599, false);
});

function updateProductNumberfifty(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberfifty');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalfifty');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusfifty").addEventListener('click', function () {
    updateProductNumberfifty('phone', 3599, true);
});
document.getElementById("phone-minusfifty").addEventListener('click', function () {
    updateProductNumberfifty('phone', 3599, false);
});

function updateProductNumberfiftyone(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberfiftyone');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalfiftyone');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusfiftyone").addEventListener('click', function () {
    updateProductNumberfiftyone('phone', 3599, true);
});
document.getElementById("phone-minusfiftyone").addEventListener('click', function () {
    updateProductNumberfiftyone('phone',3599, false);
});

function updateProductNumberfiftytwo(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberfiftytwo');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalfiftytwo');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusfiftytwo").addEventListener('click', function () {
    updateProductNumberfiftytwo('phone', 3599, true);
});
document.getElementById("phone-minusfiftytwo").addEventListener('click', function () {
    updateProductNumberfiftytwo('phone', 3599, false);
});

function updateProductNumberfiftythree(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberfiftythree');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalfiftythree');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusfiftythree").addEventListener('click', function () {
    updateProductNumberfiftythree('phone', 3599, true);
});
document.getElementById("phone-minusfiftythree").addEventListener('click', function () {
    updateProductNumberfiftythree('phone', 3599, false);
});