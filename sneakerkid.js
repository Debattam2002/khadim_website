function updateProductNumberseventynine(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberseventynine');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalseventynine');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusseventynine").addEventListener('click', function () {
    updateProductNumberseventynine('phone', 599, true);
});
document.getElementById("phone-minusseventynine").addEventListener('click', function () {
    updateProductNumberseventynine('phone', 599, false);
});

function updateProductNumbereighty(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numbereighty');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totaleighty');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-pluseighty").addEventListener('click', function () {
    updateProductNumbereighty('phone', 2599, true);
});
document.getElementById("phone-minuseighty").addEventListener('click', function () {
    updateProductNumbereighty('phone', 2599, false);
});

function updateProductNumbereightyone(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numbereightyone');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totaleightyone');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-pluseightyone").addEventListener('click', function () {
    updateProductNumbereightyone('phone', 3599, true);
});
document.getElementById("phone-minuseightyone").addEventListener('click', function () {
    updateProductNumbereightyone('phone', 3599, false);
});

function updateProductNumbereightytwo(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numbereightytwo');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totaleightytwo');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-pluseightytwo").addEventListener('click', function () {
    updateProductNumbereightytwo('phone', 3599, true);
});
document.getElementById("phone-minuseightytwo").addEventListener('click', function () {
    updateProductNumbereightytwo('phone', 3599, false);
});

function updateProductNumbereightythree(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numbereightythree');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totaleightythree');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-pluseightythree").addEventListener('click', function () {
    updateProductNumbereightythree('phone', 3599, true);
});
document.getElementById("phone-minuseightythree").addEventListener('click', function () {
    updateProductNumbereightythree('phone', 3599, false);
});

function updateProductNumbereightyfour(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numbereightyfour');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totaleightyfour');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-pluseightyfour").addEventListener('click', function () {
    updateProductNumbereightyfour('phone', 3599, true);
});
document.getElementById("phone-minuseightyfour").addEventListener('click', function () {
    updateProductNumbereightyfour('phone', 3599, false);
});