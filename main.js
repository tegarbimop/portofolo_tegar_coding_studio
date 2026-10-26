// jQuery DOM Manipulation & Animation
function toggleDetail(e) {
    const target = $(e.target);

    if($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active");
    } else {
        $(target).html("Less Info").addClass("active");
    }
    
    const item = $(target).parents(".about-exp-item");
    const detail = $(item).children(".about-exp-item-detail");
    
    // jQuery Animation slideToggle
    $(detail).slideToggle(300);
}

// Form validation
function onFormSubmit(e) {
    e.preventDefault();
    const email = $("#inp_email");
    const subject = $("#inp_subject");
    const message = $("#inp_message");

    if(!$(email).val()) {
        alert("Email is required");
    } else if (!$(subject).val()) {
        alert("Subject is required");
    } else if (!$(message).val()) {
        alert("Message is required");
    } else {
        alert("Terima kasih! Pesan kamu telah tersubmit.");
        $(email).val("");
        $(subject).val("");
        $(message).val("");
    }
}