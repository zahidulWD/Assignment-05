

// History button/ Donation Button 
// ................................
const historyBtn = document.getElementById("history-btn");
const donationBtn = document.getElementById("donation-btn");
historyBtn.addEventListener("click",function(){
    historyBtn.classList.add(
        "bg-primary",
        "text-black",
    );
    donationBtn.classList.remove(
        "bg-primary",
        "text-black",
    );
    const donationSection = tabButtonId("donation-section");
    donationSection.classList.add("hidden");
    
    document.getElementById("history-container").classList.remove("hidden");

});

donationBtn.addEventListener("click",function(){
    donationBtn.classList.add(
        "bg-primary",
        "text-black",
    );
    historyBtn.classList.remove(
        "bg-primary",
        "text-black",
    );
    const donationSection = tabButtonId("donation-section");
    donationSection.classList.remove("hidden");
});

// donation_section start here
// donate section-01
document.getElementById("donate-btn1").addEventListener("click",function(event){
    event.preventDefault();

    const totalAmount = innerTextValueId("total-amount");
    let donationInput1 = inputValueId("input1");
    const flood1Amount =innerTextValueId("flood1-amount");

    if (isNaN(donationInput1) || donationInput1 < 1){
        alert("please enter a valid amount");
        return;
    }

    if(totalAmount < donationInput1){
        alert("You don't have enough money!please try again later");
        return;
    }

  
    const donateForFlood1 = flood1Amount + donationInput1;
    document.getElementById("flood1-amount").innerText = donateForFlood1;

    // calculate total amount
    const newUserTotalAmount = totalAmount - donationInput1;
    document.getElementById("total-amount").innerText = newUserTotalAmount;

    const congratsSection = document.getElementById("congrats-section");
    congratsSection.classList.remove("hidden");

    const closeInfoButton = document.getElementById("close-info-btn1");
    closeInfoButton.addEventListener("click",function(){
        congratsSection.classList.add("hidden");
    })


});

// donate section-02
document.getElementById("donate-btn2").addEventListener("click",function(event){
    event.preventDefault();

    const totalAmount = innerTextValueId("total-amount");
    let donationInput2 = inputValueId("input2");
    const flood2Amount =innerTextValueId("flood2-amount");

    if (isNaN(donationInput2) || donationInput2 < 1){
        alert("please enter a valid amount");
        return;
    }

    if(totalAmount < donationInput2){
        alert("You don't have enough money!please try again later");
        return;
    }

    
    const donateForFlood2 = flood2Amount + donationInput2;
    document.getElementById("flood2-amount").innerText = donateForFlood2;

    // calculate total amount
    const newUserTotalAmount = totalAmount - donationInput2;
    document.getElementById("total-amount").innerText = newUserTotalAmount;

    const congratsSection = document.getElementById("congrats-section");
    congratsSection.classList.remove("hidden");

    const closeInfoButton = document.getElementById("close-info-btn1");
    closeInfoButton.addEventListener("click",function(){
        congratsSection.classList.add("hidden");
    });

});

// donate section-01
document.getElementById("donate-btn3").addEventListener("click",function(event){
    event.preventDefault();

    const totalAmount = innerTextValueId("total-amount");
    let donationInput3 = inputValueId("input3");
    const flood3Amount =innerTextValueId("flood3-amount");

    if (isNaN(donationInput3) || donationInput3 < 1){
        alert("please enter a valid amount!");
        return;
    }

    if(totalAmount < donationInput3){
        alert("You don't have enough money!please try again later");
        return;
    }

  
    const donateForFlood3 = flood3Amount + donationInput3;
    document.getElementById("flood3-amount").innerText = donateForFlood3;

    // calculate total amount
    const newUserTotalAmount = totalAmount - donationInput3;
    document.getElementById("total-amount").innerText = newUserTotalAmount;

    const congratsSection = document.getElementById("congrats-section");
    congratsSection.classList.remove("hidden");

    const closeInfoButton = document.getElementById("close-info-btn1");
    closeInfoButton.addEventListener("click",function(){
        congratsSection.classList.add("hidden");
    })


});




