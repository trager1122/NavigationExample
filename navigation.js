$(document).ready(()=>{
// Gives user a way to click and open/close dropdown menu
    $(".dropbtn").click(()=>{
        $(".dropdown-content").toggle();    
    })

//Closes dropdown menu once mouse leaves dropdown-content element so it does not persist
    $(".dropdown-content").mouseleave(()=>{
        $(".dropdown-content").hide();
    })
});