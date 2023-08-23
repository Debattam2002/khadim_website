function updateProductNumberthirty(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numberthirty');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totalthirty');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plusthirty").addEventListener('click', function () {
    updateProductNumberthirty('phone', 599, true);
});
document.getElementById("phone-minusthirty").addEventListener('click', function () {
    updateProductNumberthirty('phone', 599, false);
});

             

                function updateProductNumberthirtyone(product, price, isIncreasing) {
                    let productInput = document.getElementById(product + '-numberthirtyone');
                    let productNumber = productInput.value;
                    if (isIncreasing == true) {
                        productNumber = parseInt(productNumber) + 1;
                    }
                    else if (isIncreasing == false && productNumber > 0) {
                        productNumber = parseInt(productNumber) - 1;
                    }
                    productInput.value = productNumber;
                    // update product total
                    let productTotal = document.getElementById(product + '-totalthirtyone');
                    productTotal.innerText = productNumber * price;
                    // calculate total
                //     calculateTotal();
                // }
                }           
                document.getElementById("phone-plusthirtyone").addEventListener('click', function () {
                    updateProductNumberthirtyone('phone', 2599, true);
                });
                document.getElementById("phone-minusthirtyone").addEventListener('click', function () {
                    updateProductNumberthirtyone('phone', 2599, false);
                });
               
                               

                                function updateProductNumberthirtytwo(product, price, isIncreasing) {
                                    let productInput = document.getElementById(product + '-numberthirtytwo');
                                    let productNumber = productInput.value;
                                    if (isIncreasing == true) {
                                        productNumber = parseInt(productNumber) + 1;
                                    }
                                    else if (isIncreasing == false && productNumber > 0) {
                                        productNumber = parseInt(productNumber) - 1;
                                    }
                                    productInput.value = productNumber;
                                    // update product total
                                    let productTotal = document.getElementById(product + '-totalthirtytwo');
                                    productTotal.innerText = productNumber * price;
                                    // calculate total
                                //     calculateTotal();
                                // }
                                }           
                                document.getElementById("phone-plusthirtytwo").addEventListener('click', function () {
                                    updateProductNumberthirtytwo('phone', 3599, true);
                                });
                                document.getElementById("phone-minusthirtytwo").addEventListener('click', function () {
                                    updateProductNumberthirtytwo('phone', 3599, false);
                                });
                               
                                              

                                                function updateProductNumberthirtythree(product, price, isIncreasing) {
                                                    let productInput = document.getElementById(product + '-numberthirtythree');
                                                    let productNumber = productInput.value;
                                                    if (isIncreasing == true) {
                                                        productNumber = parseInt(productNumber) + 1;
                                                    }
                                                    else if (isIncreasing == false && productNumber > 0) {
                                                        productNumber = parseInt(productNumber) - 1;
                                                    }
                                                    productInput.value = productNumber;
                                                    // update product total
                                                    let productTotal = document.getElementById(product + '-totalthirtythree');
                                                    productTotal.innerText = productNumber * price;
                                                    // calculate total
                                                //     calculateTotal();
                                                // }
                                                }           
                                                document.getElementById("phone-plusthirtythree").addEventListener('click', function () {
                                                    updateProductNumberthirtythree('phone', 3599, true);
                                                });
                                                document.getElementById("phone-minusthirtythree").addEventListener('click', function () {
                                                    updateProductNumberthirtythree('phone', 3599, false);
                                                });
                                               
                                                               

                                                                function updateProductNumberthirtyfour(product, price, isIncreasing) {
                                                                    let productInput = document.getElementById(product + '-numberthirtyfour');
                                                                    let productNumber = productInput.value;
                                                                    if (isIncreasing == true) {
                                                                        productNumber = parseInt(productNumber) + 1;
                                                                    }
                                                                    else if (isIncreasing == false && productNumber > 0) {
                                                                        productNumber = parseInt(productNumber) - 1;
                                                                    }
                                                                    productInput.value = productNumber;
                                                                    // update product total
                                                                    let productTotal = document.getElementById(product + '-totalthirtyfour');
                                                                    productTotal.innerText = productNumber * price;
                                                                    // calculate total
                                                                //     calculateTotal();
                                                                // }
                                                                }           
                                                                document.getElementById("phone-plusthirtyfour").addEventListener('click', function () {
                                                                    updateProductNumberthirtyfour('phone', 3599, true);
                                                                });
                                                                document.getElementById("phone-minusthirtyfour").addEventListener('click', function () {
                                                                    updateProductNumberthirtyfour('phone', 3599, false);
                                                                });
                                                               
                                                                              

                                                                                function updateProductNumberthirtyfive(product, price, isIncreasing) {
                                                                                    let productInput = document.getElementById(product + '-numberthirtyfive');
                                                                                    let productNumber = productInput.value;
                                                                                    if (isIncreasing == true) {
                                                                                        productNumber = parseInt(productNumber) + 1;
                                                                                    }
                                                                                    else if (isIncreasing == false && productNumber > 0) {
                                                                                        productNumber = parseInt(productNumber) - 1;
                                                                                    }
                                                                                    productInput.value = productNumber;
                                                                                    // update product total
                                                                                    let productTotal = document.getElementById(product + '-totalthirtyfive');
                                                                                    productTotal.innerText = productNumber * price;
                                                                                    // calculate total
                                                                                //     calculateTotal();
                                                                                // }
                                                                                }           
                                                                                document.getElementById("phone-plusthirtyfive").addEventListener('click', function () {
                                                                                    updateProductNumberthirtyfive('phone', 3599, true);
                                                                                });
                                                                                document.getElementById("phone-minusthirtyfive").addEventListener('click', function () {
                                                                                    updateProductNumberthirtyfive('phone', 3599, false);
                                                                                });
                                                                               
                                                                                              

                                                                                                function updateProductNumberthirtysix(product, price, isIncreasing) {
                                                                                                    let productInput = document.getElementById(product + '-numberthirtysix');
                                                                                                    let productNumber = productInput.value;
                                                                                                    if (isIncreasing == true) {
                                                                                                        productNumber = parseInt(productNumber) + 1;
                                                                                                    }
                                                                                                    else if (isIncreasing == false && productNumber > 0) {
                                                                                                        productNumber = parseInt(productNumber) - 1;
                                                                                                    }
                                                                                                    productInput.value = productNumber;
                                                                                                    // update product total
                                                                                                    let productTotal = document.getElementById(product + '-totalthirtysix');
                                                                                                    productTotal.innerText = productNumber * price;
                                                                                                    // calculate total
                                                                                                //     calculateTotal();
                                                                                                // }
                                                                                                }           
                                                                                                document.getElementById("phone-plusthirtysix").addEventListener('click', function () {
                                                                                                    updateProductNumberthirtysix('phone', 3599, true);
                                                                                                });
                                                                                                document.getElementById("phone-minusthirtysix").addEventListener('click', function () {
                                                                                                    updateProductNumberthirtysix('phone', 3599, false);
                                                                                                });
