function updateProductNumbersixty(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numbersixty');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalsixty');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plussixty").addEventListener('click', function () {
    updateProductNumbersixty('phone', 599, true);
});
document.getElementById("phone-minussixty").addEventListener('click', function () {
    updateProductNumbersixty('phone', 599, false);
});

function updateProductNumbersixtyone(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numbersixtyone');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalsixtyone');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plussixtyone").addEventListener('click', function () {
    updateProductNumbersixtyone('phone', 2599, true);
});
document.getElementById("phone-minussixtyone").addEventListener('click', function () {
    updateProductNumbersixtyone('phone', 2599, false);
});

function updateProductNumbersixtytwo(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numbersixtytwo');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalsixtytwo');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plussixtytwo").addEventListener('click', function () {
    updateProductNumbersixtytwo('phone', 3599, true);
});
document.getElementById("phone-minussixtytwo").addEventListener('click', function () {
    updateProductNumbersixtytwo('phone', 3599, false);
});

function updateProductNumbersixtythree(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numbersixtythree');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalsixtythree');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plussixtythree").addEventListener('click', function () {
    updateProductNumbersixtythree('phone', 3599, true);
});
document.getElementById("phone-minussixtythree").addEventListener('click', function () {
    updateProductNumbersixtythree('phone', 3599, false);
});

function updateProductNumbersixtyfour(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numbersixtyfour');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalsixtyfour');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plussixtyfour").addEventListener('click', function () {
    updateProductNumbersixtyfour('phone', 3599, true);
});
document.getElementById("phone-minussixtyfour").addEventListener('click', function () {
    updateProductNumbersixtyfour('phone', 3599, false);
});

function updateProductNumbersixtyfive(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numbersixtyfive');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalsixtyfive');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plussixtyfive").addEventListener('click', function () {
    updateProductNumbersixtyfive('phone', 3599, true);
});
document.getElementById("phone-minussixtyfive").addEventListener('click', function () {
    updateProductNumbersixtyfive('phone', 3599, false);
});