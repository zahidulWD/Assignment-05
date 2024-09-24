

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

    document.getElementById("history-container").classList.add("hidden");
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
    });

    // date and time
    const dateToday = new Date();
    // history section
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="border border-[#1111111A] rounded-2xl p-5 md:p-8 mb-6">
        <h3 class="text-base md:text-xl font-bold mb-2 md:mb-4">${donationInput1}Taka is Donated for famine-2024 at Feni, Bangladesh</h3>
        <p class="text-sm md:text-base font-light text-black-2">Date : ${dateToday}</p>
        </div>

    `
    document.getElementById("inr-history-container").appendChild(div);


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

    // date and time
    const dateToday = new Date();
    // history section
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="border border-[#1111111A] rounded-2xl p-5 md:p-8 mb-6">
        <h3 class="text-base md:text-xl font-bold mb-2 md:mb-4">${donationInput2} Taka is Donated for Flood Relief in Feni,Bangladesh</h3>
        <p class="text-sm md:text-base font-light text-black-2">Date : ${dateToday}</p>
        </div>

    `
    document.getElementById("inr-history-container").appendChild(div);


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
    });

    // date and time
    const dateToday = new Date();
    // history section
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="border border-[#1111111A] rounded-2xl p-5 md:p-8 mb-6">
        <h3 class="text-base md:text-xl font-bold mb-2 md:mb-4">${donationInput3} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
        <p class="text-sm md:text-base font-light text-black-2">Date : ${dateToday}</p>
        </div>

    `
    document.getElementById("inr-history-container").appendChild(div);

});




