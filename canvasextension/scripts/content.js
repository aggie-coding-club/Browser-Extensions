//where our code goes that runs in browser


window.addEventListener('load',function() {
    'use strict';

    // Check the window width
    if (window.innerWidth < 1000) {
    // Adjust the width of a container element
        var container = document.getElementById("container"); // Replace "container" with your element's ID
        if (container) {
            container.style.minWidth = "1000px";}}

    //half page wont load if button is pressed too fast
    let p = document.getElementsByClassName("ic-Dashboard-header");
    let btn = document.createElement("button");
    btn.style.height = '50px'; //window
    btn.style.width = '300px';
    btn.innerHTML = "Lofi Mode";
    btn.style.fontFamily = "Merienda";
    btn.style.borderBlockColor = "#CE795B";
    btn.style.color = "#CE795B"
    btn.style.backgroundColor = '#242222';
    btn.style.borderRadius = '5px'; // Round the corners
    btn.style.boxShadow = '0px 3px 5px rgba(0,0,0,0.2)';
    btn.style.transition = "background-color 0.3s ease";
    p[0].appendChild(btn);
    
    btn.addEventListener("mouseover", function() {
        btn.style.transform = "translateY(-5px)"; // Move the button 5 pixels up on hover
    });
    
    btn.addEventListener("mouseout", function() {
        btn.style.transform = "translateY(0)"; // Reset the button's position when the mouse leaves
    });

    
   
    btn.addEventListener("click", anthonyisabword);
    
    //function that runs onn button click
    function anthonyisabword() {
    //buttonclicked = true;
    //button after click
    btn.innerHTML = "Refresh page to go back to normal"
    //btn.style.fontFamily = "Merienda";
    
    //coffie cup and lofi girl in corners
    p = document.getElementsByTagName("img");
    p[0].src = "https://yt3.ggpht.com/ytc/AKedOLTkvv3TyNLJYEWXsPdCsgg8fvSn9-Oj65GBhkAiEg=s800-c-k-c0x00ffffff-no-rj";
    
    p[1].src = "https://www.pinclipart.com/picdir/big/321-3219024_coffee-transparent-clip-art-coffee-cup-clipart-png.png";
    
    //changing background color
    p = document.getElementById("header");
    p.style.background = '#242222';
    
    p = document.getElementById("application");
    p.style.background = '#242222';
    
    
    //ic-DashboardCard__box__container
    
    //p = document.getElementById("header");
    //p.style.background = '#333333';
    
    //p = document.getElementById("application");
    //p.style.background = '#333333';
    
    
    var block_to_insert ;
    var container_block ;
    //lofi girl video, we redefine later
    block_to_insert = document.createElement( 'iframe' );
    block_to_insert.src = "https://www.youtube.com/embed/jfKfPfyJRdk"
     
    container_block = document.getElementById( 'content-wrapper' );

    //container_block = document.getElementById("DashboardCard_Container");
    //container_block = container_block.parentNode;
    //container_block.appendChild( block_to_insert ); --------------real one
    //let bleh = undefined;
    //container_block.insertBefore(block_to_insert, bleh );
    //container_block.insertBefore(block_to_insert, undefined);
    
    
    //not sure what this is, i think we redefine this later
    let e = document.createElement( 'iframe' );
        e.src = "https://www.youtube.com/embed/CHFif_y2TyM"
    
        let d = document.getElementById( 'content-wrapper' );
        //d.appendChild( e ); ----------------real one
    
    
    //font to white
    p = document.getElementsByClassName("fOyUs_bGBk fbyHH_bGBk fbyHH_vIby");
        for (let i = 0; i < p.length; i++){
            p[i].style.color = "#FFF";
            p[i].style.textDecorationColor = "#500000";
        }
    
    //font to orange
    p = document.getElementsByClassName("fOyUs_bGBk fOyUs_cuDs ctrLD_bGBk ctrLD_doqw ctrLD_dnHs");
    
        for (let i = 0; i < p.length; i++){
            p[i].style.color = "#CE795B";
        }
    
    
    //font to white
    p = document.getElementsByClassName("event-details__title recent_feedback_title");
        for (let i = 0; i < p.length; i++){
            p[i].style.color = "#FFF";
        }
    
    //background to grey
    p = document.getElementsByClassName("large ic-Dashboard-header__layout");
    p[0].style.backgroundColor = '#242222';
    
    
    //top banner
    p = document.getElementsByClassName('fOyUs_bGBk blnAQ_bGBk blnAQ_fCtg blnAQ_drOs');
    p[0].innerText = "lofi canvas";
    p[0].style.color = '#CE795B';
    p[0].style.fontFamily =  "Merienda";
    
    
    //grades header
    p = document.getElementsByClassName('h2 shared-space');
    p[0].style.color = '#CE795B';
    p[0].innerText = "grades!";
    
    //to do
    p = document.getElementsByClassName("todo-list-header");
    p[0].style.color = "#FFF";
    
    //card color
    p = document.getElementsByClassName("ic-DashboardCard__header_hero");
        for (let i = 0; i < p.length; i++){
            p[i].style.backgroundColor = "#CE795B";
        }
    
    
    
    //assignments and quizes
    p = document.getElementsByClassName("todo-list-header");
        for (let i = 0; i < p.length; i++){
            p[i].style.color = "#fff";}
    
    
    //little calendars
    p = document.getElementsByClassName("dUOHu_bGBk dUOHu_drOs dUOHu_eXrk cGqzL_bGBk ToDoSidebarItem__Icon");
    for (let i = 0; i < p.length; i++){
        p[i].style.color = "#fff";}
    
    //more button
    p = document.getElementsByClassName("more_link");
    //p[0].style.color = "#fff";
    
    //cards
    p = document.getElementsByClassName("ic-DashboardCard__header_hero");
    for (let i = 0; i < p.length; i++){
        p[i].style.opacity = '100';
        p[i].style.backgroundColor = "#CE795B";
        //p[i].style.opacity = '100'; //for pictures
        }
    //3 dots circle
    p = document.getElementsByClassName("icon-more");
    for (let i = 0; i < p.length; i++){
        p[i].style.backgroundColor = "#CE795B";}
    
    //show all button
    var loadInterval = setInterval(function (){
        var p = document.getElementsByClassName("fOyUs_bGBk fbyHH_bGBk fbyHH_bSMN");
        if(p[0]){
            p[0].style.color = "#ffffff";
            clearInterval(loadInterval);
        }
    }, 100);
    
    
    p = document.getElementsByClassName("ic-DashboardCard__header_hero");
    
    block_to_insert = document.createElement( 'iframe' );
    let block_to_insert2 = document.createElement( 'iframe' );
    let block_to_insert3= document.createElement( 'iframe' );
    let block_to_insert4 = document.createElement( 'iframe' );
    let block_to_insert5 = document.createElement( 'iframe' ); //if logic for more than 4 classes ?
    
    block_to_insert.src = "https://www.youtube.com/embed/jfKfPfyJRdk";
    block_to_insert2.src = "https://www.youtube.com/embed/CHFif_y2TyM";
    block_to_insert3.src = "https://www.youtube.com/embed/aG01KIXWrbU";
    block_to_insert4.src = "https://www.youtube.com/embed/Vcg7sLDTICk";
    block_to_insert5.src = "";

    length = p.length;
    
    //putting all the videos in
    container_block = document.getElementById( 'DashboardCard_Container');
    p[0].insertBefore(block_to_insert, null);
    p[1].insertBefore(block_to_insert2, null);
    p[2].insertBefore(block_to_insert3,null);
    p[3].insertBefore(block_to_insert4,null);
    //if i find another video, is not declared so nothing inserted
    if (length == 4)
        p[4].insertBefore(block_to_insert5,null);


    
    //x's
    p = document.getElementsByClassName("fQfxa_caGd fQfxa_VCXp fQfxa_buuG fQfxa_EMjX fQfxa_bCUx fQfxa_bVmg fQfxa_bIHL");
    for (let i = 0; i < p.length; i++){
        p[i].style.color = "#CE795B";}
    
    
    p = document.getElementsByClassName("fQfxa_eoCh");
    for (let i = 0; i < p.length; i++){
        p[i].style.color = "#CE795B";}
    
    
    
    //bottom of cards
    //p = document.getElementsByClassName("ic-DashboardCard__action-container");
    //for (let i = 0; i < p.length; i++){
    //    p[i].style.backgroundColor = "#CE795B";}
    
    //middle
    //p = document.getElementsByClassName("ic-DashboardCard__header_content");
    //for (let i = 0; i < p.length; i++){
    //    p[i].style.backgroundColor = "#CE795B";}
    
    //dots on cards
    p = document.getElementsByClassName("Button Button--icon-action-rev ic-DashboardCard__header-button");
    //p[0].style.backgroundColor = '#CE795B';
    for (let i = 0; i < p.length; i++){
        p[i].style.backgroundColor = "#CE795B";}
    
    
    p = document.getElementsByClassName("icon-more");
    //p[0].style.backgroundColor = '#fff';
    for (let i = 0; i < p.length; i++){
        p[i].style.color = "#CE795B";}
    
    
    
    p = document.getElementsByClassName("ic-DashboardCard__header-title ellipsis");
        for (let i = 0; i < p.length; i++){
            p[i].childNodes[0].style.color = "#CE795B";}

    localStorage.setItem("buttonClicked", "true");
    btn.disabled = true;
    btn.removeEventListener("click", buttonClickHandler);
    }

    //refresh to revert


    
    //https://stackoverflow.com/questions/66259592/how-to-resize-chrome-browser-window-with-an-extension
    
    //https://www.youtube.com/embed/CHFif_y2TyM
    //https://www.youtube.com/embed/Kl2v9ydanrI
    //loifi
    //https://www.youtube.com/embed/jfKfPfyJRdk
    //https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator&theme=0
})();