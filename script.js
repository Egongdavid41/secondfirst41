
var tablink = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("tab-linsks");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
    
}



/*let sidemenu = document.getElementById("sidemenu");
 function clicktap(sidemenu){
    for(sidemenu of sidemenu){
        sidemenu.classList.remove("sidemenu");
    }
    //sidemenu.classList.add("sidemenu");
 }

function tabin (tablinks){
    function clicktap ()
}*/


















