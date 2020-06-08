$(function(){
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<div class="title">#title#</div>',
        labels: {
            previous : 'Back',
            next : 'Next',
            finish : 'Confirm',
            current : ''
        },
        onStepChanging: function (event, currentIndex, newIndex) { 
            var fullname = $('#first_name').val() + ' ' + $('#last_name').val();
            var date = $('#dob').val();
            var mail = $('#your-mail').val();
            var addr = $('#mail').val() + ' ' + $('#mail2').val() + ' ' + $('#city').val() + ' ' + $('#zip').val() + ' ' + $('#state').val();
            var addr2 = $('#padd').val() + ' ' + $('#padd2').val() + ' ' + $('#city2').val() + ' ' + $('#zip2').val() + ' ' + $('#state2').val();
            var skill = $('#skill').val();
            var edu = $('#edu').val();
            var phoneNumber = $('#phone').val();

            $('#fullname-val').text(fullname);
            $('#DOB').text(date);
            $('#mail-val').text(mail);
            $('#edu-val').text(edu);
            $('#skill-val').text(skill);
            $('#addr-val').text(addr);
            $('#addr2-val').text(addr2);
            $('#phone-num').text(phoneNumber);

            return true;
        }
    });
});
