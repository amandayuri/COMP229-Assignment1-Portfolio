
// ------- HEADER ------------
// Filename: app.ejs
// Student name: Amanda Yuri Monteiro Ike
// Student ID: 301257019
// Date: February, 2023 

//const { event } = require("jquery");

// IIFE -- Immediately Invoked Function Expression
(function(){
    function Start(){
        console.log("App Started..."); // this will running in the client-side

        let deleteButtons = document.querySelectorAll('.btn-danger');

        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/contact-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);
})();
