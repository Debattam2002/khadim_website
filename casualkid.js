function updateProductNumbertwentyfour(product, price, isIncreasing) {
    let productInput = document.getElementById(product + '-numbertwentyfour');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    let productTotal = document.getElementById(product + '-totaltwentyfour');
    productTotal.innerText = productNumber * price;
    // calculate total
//     calculateTotal();
// }
}           
document.getElementById("phone-plustwentyfour").addEventListener('click', function () {
    updateProductNumbertwentyfour('phone', 599, true);
});
document.getElementById("phone-minustwentyfour").addEventListener('click', function () {
    updateProductNumbertwentyfour('phone', 599, false);
});

            
                function updateProductNumbertwentyfive(product, price, isIncreasing) {
                    let productInput = document.getElementById(product + '-numbertwentyfive');
                    let productNumber = productInput.value;
                    if (isIncreasing == true) {
                        productNumber = parseInt(productNumber) + 1;
                    }
                    else if (isIncreasing == false && productNumber > 0) {
                        productNumber = parseInt(productNumber) - 1;
                    }
                    productInput.value = productNumber;
                    // update product total
                    let productTotal = document.getElementById(product + '-totaltwentyfive');
                    productTotal.innerText = productNumber * price;
                    // calculate total
                //     calculateTotal();
                // }
                }           
                document.getElementById("phone-plustwentyfive").addEventListener('click', function () {
                    updateProductNumbertwentyfive('phone', 2599, true);
                });
                document.getElementById("phone-minustwentyfive").addEventListener('click', function () {
                    updateProductNumbertwentyfive('phone', 2599, false);
                });
               
                              

                                function updateProductNumbertwentysix(product, price, isIncreasing) {
                                    let productInput = document.getElementById(product + '-numbertwentysix');
                                    let productNumber = productInput.value;
                                    if (isIncreasing == true) {
                                        productNumber = parseInt(productNumber) + 1;
                                    }
                                    else if (isIncreasing == false && productNumber > 0) {
                                        productNumber = parseInt(productNumber) - 1;
                                    }
                                    productInput.value = productNumber;
                                    // update product total
                                    let productTotal = document.getElementById(product + '-totaltwentysix');
                                    productTotal.innerText = productNumber * price;
                                    // calculate total
                                //     calculateTotal();
                                // }
                                }           
                                document.getElementById("phone-plustwentysix").addEventListener('click', function () {
                                    updateProductNumbertwentysix('phone', 3599, true);
                                });
                                document.getElementById("phone-minustwentysix").addEventListener('click', function () {
                                    updateProductNumbertwentysix('phone', 3599, false);
                                });
                               
                                              
                                                function updateProductNumbertwentyseven(product, price, isIncreasing) {
                                                    let productInput = document.getElementById(product + '-numbertwentyseven');
                                                    let productNumber = productInput.value;
                                                    if (isIncreasing == true) {
                                                        productNumber = parseInt(productNumber) + 1;
                                                    }
                                                    else if (isIncreasing == false && productNumber > 0) {
                                                        productNumber = parseInt(productNumber) - 1;
                                                    }
                                                    productInput.value = productNumber;
                                                    // update product total
                                                    let productTotal = document.getElementById(product + '-totaltwentyseven');
                                                    productTotal.innerText = productNumber * price;
                                                    // calculate total
                                                //     calculateTotal();
                                                // }
                                                }           
                                                document.getElementById("phone-plustwentyseven").addEventListener('click', function () {
                                                    updateProductNumbertwentyseven('phone', 3599, true);
                                                });
                                                document.getElementById("phone-minustwentyseven").addEventListener('click', function () {
                                                    updateProductNumbertwentyseven('phone', 3599, false);
                                                });
                                               
                                                             
                                                                
                                                                function updateProductNumbertwentyeight(product, price, isIncreasing) {
                                                                    let productInput = document.getElementById(product + '-numbertwentyeight');
                                                                    let productNumber = productInput.value;
                                                                    if (isIncreasing == true) {
                                                                        productNumber = parseInt(productNumber) + 1;
                                                                    }
                                                                    else if (isIncreasing == false && productNumber > 0) {
                                                                        productNumber = parseInt(productNumber) - 1;
                                                                    }
                                                                    productInput.value = productNumber;
                                                                    // update product total
                                                                    let productTotal = document.getElementById(product + '-totaltwentyeight');
                                                                    productTotal.innerText = productNumber * price;
                                                                    // calculate total
                                                                //     calculateTotal();
                                                                // }
                                                                }           
                                                                document.getElementById("phone-plustwentyeight").addEventListener('click', function () {
                                                                    updateProductNumbertwentyeight('phone', 3599, true);
                                                                });
                                                                document.getElementById("phone-minustwentyeight").addEventListener('click', function () {
                                                                    updateProductNumbertwentyeight('phone', 3599, false);
                                                                });
                                                               
                                                                function updateProductNumbertwentynine(product, price, isIncreasing) {
                                                                    let productInput = document.getElementById(product + '-numbertwentynine');
                                                                    let productNumber = productInput.value;
                                                                    if (isIncreasing == true) {
                                                                        productNumber = parseInt(productNumber) + 1;
                                                                    }
                                                                    else if (isIncreasing == false && productNumber > 0) {
                                                                        productNumber = parseInt(productNumber) - 1;
                                                                    }
                                                                    productInput.value = productNumber;
                                                                    // update product total
                                                                    let productTotal = document.getElementById(product + '-totaltwentynine');
                                                                    productTotal.innerText = productNumber * price;
                                                                    // calculate total
                                                                //     calculateTotal();
                                                                // }
                                                                }           
                                                                document.getElementById("phone-plustwentynine").addEventListener('click', function () {
                                                                    updateProductNumbertwentynine('phone', 3599, true);
                                                                });
                                                                document.getElementById("phone-minustwentynine").addEventListener('click', function () {
                                                                    updateProductNumbertwentynine('phone', 3599, false);
                                                                });
                                                                               
                                                          