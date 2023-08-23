function updateProductNumbereighteen(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numbereighteen');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totaleighteen');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-pluseighteen").addEventListener('click', function () {
    updateProductNumbereighteen('phone', 599, true);
});
document.getElementById("phone-minuseighteen").addEventListener('click', function () {
    updateProductNumbereighteen('phone', 599, false);
});

              
                function updateProductNumbernineteen(product, price, isIncreasing) {
                    let productInput = document.getElementById(product + '-numbernineteen');
                    let productNumber = productInput.value;
                    if (isIncreasing == true) {
                        productNumber = parseInt(productNumber) + 1;
                    }
                    else if (isIncreasing == false && productNumber > 0) {
                        productNumber = parseInt(productNumber) - 1;
                    }
                    productInput.value = productNumber;
                    // update product total
                    let productTotal = document.getElementById(product + '-totalnineteen');
                    productTotal.innerText = productNumber * price;
                    // calculate total
                //     calculateTotal();
                // }
                }           
                document.getElementById("phone-plusnineteen").addEventListener('click', function () {
                    updateProductNumbernineteen('phone', 2599, true);
                });
                document.getElementById("phone-minusnineteen").addEventListener('click', function () {
                    updateProductNumbernineteen('phone', 2599, false);
                });
               
                             

                                function updateProductNumbertwenty(product, price, isIncreasing) {
                                    let productInput = document.getElementById(product + '-numbertwenty');
                                    let productNumber = productInput.value;
                                    if (isIncreasing == true) {
                                        productNumber = parseInt(productNumber) + 1;
                                    }
                                    else if (isIncreasing == false && productNumber > 0) {
                                        productNumber = parseInt(productNumber) - 1;
                                    }
                                    productInput.value = productNumber;
                                    // update product total
                                    let productTotal = document.getElementById(product + '-totaltwenty');
                                    productTotal.innerText = productNumber * price;
                                    // calculate total
                                //     calculateTotal();
                                // }
                                }           
                                document.getElementById("phone-plustwenty").addEventListener('click', function () {
                                    updateProductNumbertwenty('phone', 3599, true);
                                });
                                document.getElementById("phone-minustwenty").addEventListener('click', function () {
                                    updateProductNumbertwenty('phone', 3599, false);
                                });
                               
                                              
                                                function updateProductNumbertwentyone(product, price, isIncreasing) {
                                                    let productInput = document.getElementById(product + '-numbertwentyone');
                                                    let productNumber = productInput.value;
                                                    if (isIncreasing == true) {
                                                        productNumber = parseInt(productNumber) + 1;
                                                    }
                                                    else if (isIncreasing == false && productNumber > 0) {
                                                        productNumber = parseInt(productNumber) - 1;
                                                    }
                                                    productInput.value = productNumber;
                                                    // update product total
                                                    let productTotal = document.getElementById(product + '-totaltwentyone');
                                                    productTotal.innerText = productNumber * price;
                                                    // calculate total
                                                //     calculateTotal();
                                                // }
                                                }           
                                                document.getElementById("phone-plustwentyone").addEventListener('click', function () {
                                                    updateProductNumbertwentyone('phone', 3599, true);
                                                });
                                                document.getElementById("phone-minustwentyone").addEventListener('click', function () {
                                                    updateProductNumbertwentyone('phone', 3599, false);
                                                });
                                               
                                                               

                                                                function updateProductNumbertwentytwo(product, price, isIncreasing) {
                                                                    let productInput = document.getElementById(product + '-numbertwentytwo');
                                                                    let productNumber = productInput.value;
                                                                    if (isIncreasing == true) {
                                                                        productNumber = parseInt(productNumber) + 1;
                                                                    }
                                                                    else if (isIncreasing == false && productNumber > 0) {
                                                                        productNumber = parseInt(productNumber) - 1;
                                                                    }
                                                                    productInput.value = productNumber;
                                                                    // update product total
                                                                    let productTotal = document.getElementById(product + '-totaltwentytwo');
                                                                    productTotal.innerText = productNumber * price;
                                                                    // calculate total
                                                                //     calculateTotal();
                                                                // }
                                                                }           
                                                                document.getElementById("phone-plustwentytwo").addEventListener('click', function () {
                                                                    updateProductNumbertwentytwo('phone', 3599, true);
                                                                });
                                                                document.getElementById("phone-minustwentytwo").addEventListener('click', function () {
                                                                    updateProductNumbertwentytwo('phone', 3599, false);
                                                                });
                                                               
                                                                              

                                                                                function updateProductNumbertwentythree(product, price, isIncreasing) {
                                                                                    let productInput = document.getElementById(product + '-numbertwentythree');
                                                                                    let productNumber = productInput.value;
                                                                                    if (isIncreasing == true) {
                                                                                        productNumber = parseInt(productNumber) + 1;
                                                                                    }
                                                                                    else if (isIncreasing == false && productNumber > 0) {
                                                                                        productNumber = parseInt(productNumber) - 1;
                                                                                    }
                                                                                    productInput.value = productNumber;
                                                                                    // update product total
                                                                                    let productTotal = document.getElementById(product + '-totaltwentythree');
                                                                                    productTotal.innerText = productNumber * price;
                                                                                    // calculate total
                                                                                //     calculateTotal();
                                                                                // }
                                                                                }           
                                                                                document.getElementById("phone-plustwentythree").addEventListener('click', function () {
                                                                                    updateProductNumbertwentythree('phone', 3599, true);
                                                                                });
                                                                                document.getElementById("phone-minustwentythree").addEventListener('click', function () {
                                                                                    updateProductNumbertwentythree('phone', 3599, false);
                                                                                });
                                                                               