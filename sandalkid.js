function updateProductNumbersixtysix(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numbersixtysix');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalsixtysix');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plussixtysix").addEventListener('click', function () {
    updateProductNumbersixtysix('phone', 599, true);
});
document.getElementById("phone-minussixtysix").addEventListener('click', function () {
    updateProductNumbersixtysix('phone', 599, false);
});

function updateProductNumbersixtyseven(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numbersixtyseven');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalsixtyseven');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plussixtyseven").addEventListener('click', function () {
    updateProductNumbersixtyseven('phone', 2599, true);
});
document.getElementById("phone-minussixtyseven").addEventListener('click', function () {
    updateProductNumbersixtyseven('phone', 2599, false);
});

function updateProductNumbersixtyeight(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numbersixtyeight');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalsixtyeight');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plussixtyeight").addEventListener('click', function () {
    updateProductNumbersixtyeight('phone', 3599, true);
});
document.getElementById("phone-minussixtyeight").addEventListener('click', function () {
    updateProductNumbersixtyeight('phone', 3599, false);
});

function updateProductNumbersixtynine(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numbersixtynine');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalsixtynine');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plussixtynine").addEventListener('click', function () {
    updateProductNumbersixtynine('phone', 3599, true);
});
document.getElementById("phone-minussixtynine").addEventListener('click', function () {
    updateProductNumbersixtynine('phone', 3599, false);
});

function updateProductNumberseventy(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberseventy');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalseventy');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusseventy").addEventListener('click', function () {
    updateProductNumberseventy('phone', 3599, true);
});
document.getElementById("phone-minusseventy").addEventListener('click', function () {
    updateProductNumberseventy('phone', 3599, false);
});

function updateProductNumberseventyone(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberseventyone');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalseventyone');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusseventyone").addEventListener('click', function () {
    updateProductNumberseventyone('phone', 3599, true);
});
document.getElementById("phone-minusseventyone").addEventListener('click', function () {
    updateProductNumberseventyone('phone', 3599, false);
});

