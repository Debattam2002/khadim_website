function updateProductNumberthirtyseven(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberthirtyseven');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalthirtyseven');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusthirtyseven").addEventListener('click', function () {
    updateProductNumberthirtyseven('phone', 599, true);
});
document.getElementById("phone-minusthirtyseven").addEventListener('click', function () {
    updateProductNumberthirtyseven('phone', 599, false);
});

             

                function updateProductNumberthirtyeight(product, price, isIncreasing) {
                    let productInput = document.getElementById(product + '-numberthirtyeight');
                    let productNumber = productInput.value;
                    if (isIncreasing == true) {
                        productNumber = parseInt(productNumber) + 1;
                    }
                    else if (isIncreasing == false && productNumber > 0) {
                        productNumber = parseInt(productNumber) - 1;
                    }
                    productInput.value = productNumber;
                    // update product total
                    let productTotal = document.getElementById(product + '-totalthirtyeight');
                    productTotal.innerText = productNumber * price;
                    // calculate total
                //     calculateTotal();
                // }
                }           
                document.getElementById("phone-plusthirtyeight").addEventListener('click', function () {
                    updateProductNumberthirtyeight('phone', 2599, true);
                });
                document.getElementById("phone-minusthirtyeight").addEventListener('click', function () {
                    updateProductNumberthirtyeight('phone', 2599, false);
                });
               
                               

                                function updateProductNumberthirtynine(product, price, isIncreasing) {
                                    let productInput = document.getElementById(product + '-numberthirtynine');
                                    let productNumber = productInput.value;
                                    if (isIncreasing == true) {
                                        productNumber = parseInt(productNumber) + 1;
                                    }
                                    else if (isIncreasing == false && productNumber > 0) {
                                        productNumber = parseInt(productNumber) - 1;
                                    }
                                    productInput.value = productNumber;
                                    // update product total
                                    let productTotal = document.getElementById(product + '-totalthirtynine');
                                    productTotal.innerText = productNumber * price;
                                    // calculate total
                                //     calculateTotal();
                                // }
                                }           
                                document.getElementById("phone-plusthirtynine").addEventListener('click', function () {
                                    updateProductNumberthirtynine('phone', 3599, true);
                                });
                                document.getElementById("phone-minusthirtynine").addEventListener('click', function () {
                                    updateProductNumberthirtynine('phone', 3599, false);
                                });
                               
                                               

                                                function updateProductNumberfourty(product, price, isIncreasing) {
                                                    let productInput = document.getElementById(product + '-numberfourty');
                                                    let productNumber = productInput.value;
                                                    if (isIncreasing == true) {
                                                        productNumber = parseInt(productNumber) + 1;
                                                    }
                                                    else if (isIncreasing == false && productNumber > 0) {
                                                        productNumber = parseInt(productNumber) - 1;
                                                    }
                                                    productInput.value = productNumber;
                                                    // update product total
                                                    let productTotal = document.getElementById(product + '-totalfourty');
                                                    productTotal.innerText = productNumber * price;
                                                    // calculate total
                                                //     calculateTotal();
                                                // }
                                                }           
                                                document.getElementById("phone-plusfourty").addEventListener('click', function () {
                                                    updateProductNumberfourty('phone', 3599, true);
                                                });
                                                document.getElementById("phone-minusfourty").addEventListener('click', function () {
                                                    updateProductNumberfourty('phone', 3599, false);
                                                });

                                                function updateProductNumberfourtyone(product, price, isIncreasing) {
                                                    let productInput = document.getElementById(product + '-numberfourtyone');
                                                    let productNumber = productInput.value;
                                                    if (isIncreasing == true) {
                                                        productNumber = parseInt(productNumber) + 1;
                                                    }
                                                    else if (isIncreasing == false && productNumber > 0) {
                                                        productNumber = parseInt(productNumber) - 1;
                                                    }
                                                    productInput.value = productNumber;
                                                    // update product total
                                                    let productTotal = document.getElementById(product + '-totalfourtyone');
                                                    productTotal.innerText = productNumber * price;
                                                    // calculate total
                                                //     calculateTotal();
                                                // }
                                                }           
                                                document.getElementById("phone-plusfourtyone").addEventListener('click', function () {
                                                    updateProductNumberfourtyone('phone', 3599, true);
                                                });
                                                document.getElementById("phone-minusfourtyone").addEventListener('click', function () {
                                                    updateProductNumberfourtyone('phone', 3599, false);
                                                });
            