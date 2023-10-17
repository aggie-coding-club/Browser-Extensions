//where our code goes that runs in browser


window.addEventListener('load',function() {
    'use strict';

    // Check the window width - this doesnt work
    if (window.innerWidth < 1000) {
    // Adjust the width of a container element
        var container = document.getElementById("container"); // Replace "container" with your element's ID
        if (container) {
            container.style.minWidth = "1000px";}}

    //intitial button styles
    let p = document.getElementsByClassName("ic-Dashboard-header");
    let btn = document.createElement("button");
    btn.style.height = '50px'; //window
    btn.style.width = '300px';
    btn.innerHTML = "Lofi Mode";
    btn.style.fontFamily = "Merienda";
    btn.style.fontSize = "25px";
    btn.style.borderBlockColor = "#831010";
    btn.style.color = "#831010"
    btn.style.backgroundColor = '#FFFFFF';
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

    //make sure it cant be pressed when not at full size
    function updateButtonState() {
        const button = document.getElementById("myButton");
        if (window.innerWidth >= 1000) {
          btn.disabled = false;
        } else {
          btn.disabled = true;
        }}

    updateButtonState();

    // Add an event listener for the window's resize event to update the button state
    window.addEventListener("resize", updateButtonState);
    
    function addevent() {
        btn.addEventListener("click", anthonyisabword);
    }

    //make sure someone cant press button before xtags load
    setTimeout(addevent, 2000);
    
    //function that runs onn button click
    function anthonyisabword() {
    //buttonclicked = true;
    //button after click
    btn.innerHTML = "refresh page to undo"
    btn.style.fontSize = "25px";
    btn.style.color = "#CE795B"
    btn.style.borderBlockColor = "#FFFFFF"
    btn.style.backgroundColor = '#242222';
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
    let block_to_insert6 = document.createElement('iframe');
    
    block_to_insert.src = "https://www.youtube.com/embed/jfKfPfyJRdk";
    block_to_insert2.src = "https://www.youtube.com/embed/CHFif_y2TyM";
    block_to_insert3.src = "https://www.youtube.com/embed/aG01KIXWrbU";
    block_to_insert4.src = "https://www.youtube.com/embed/Vcg7sLDTICk";
    block_to_insert5.src = "https://www.youtube.com/embed/EeoCV3XyY94?si=nFrbi0l1gkQigdXv"; //has ads :()
    block_to_insert6.src = "https://www.youtube.com/embed/PXw7_u_6yGM?si=dM6yJio0EEV8GCso";


    length = p.length;
    
    //putting all the videos in
    container_block = document.getElementById( 'DashboardCard_Container');
    p[0].insertBefore(block_to_insert, null);
    p[1].insertBefore(block_to_insert2, null);
    p[2].insertBefore(block_to_insert3,null);
    p[3].insertBefore(block_to_insert4,null);
    //if i find another video, is not declared so nothing inserted
    if (length >= 4)    {
        p[4].insertBefore(block_to_insert5,null);}
    
    if (length >= 5)    {
        p[5].insertBefore(block_to_insert6,null);}


    
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


    //change button colors after click
    stopButton.style.borderBlockColor = "#FFFFFF";
    stopButton.style.color = "#CE795B";
    stopButton.style.backgroundColor = '#242222';
    stopButton.innerText = "clear";

    startButton.style.borderBlockColor = "#FFFFFF";
    startButton.style.color = "#CE795B";
    startButton.style.backgroundColor = '#242222';
    startButton.innerText = "start";

    timer.style.borderBlockColor = "#FFFFFF";
    timer.style.color = "#CE795B";
    timer.style.backgroundColor = '#242222';

    //makes it to where you can only click once
    localStorage.setItem("buttonClicked", "true");
    btn.disabled = true;
    btn.removeEventListener("click", buttonClickHandler);
    }

    //refresh to revert
    // btn.style.height = '50px'; //window
    // btn.style.width = '300px';
    // btn.innerHTML = "Lofi Mode";
    // btn.style.fontFamily = "Merienda";
    // btn.style.borderBlockColor = "#CE795B";
    // btn.style.color = "#CE795B"
    // btn.style.backgroundColor = '#242222';
    // btn.style.borderRadius = '5px'; // Round the corners
    // btn.style.boxShadow = '0px 3px 5px rgba(0,0,0,0.2)';
    // btn.style.transition = "background-color 0.3s ease";
    // p[0].appendChild(btn);
    
    // btn.addEventListener("mouseover", function() {
    //     btn.style.transform = "translateY(-5px)"; // Move the button 5 pixels up on hover
    // });
    
    // btn.addEventListener("mouseout", function() {
    //     btn.style.transform = "translateY(0)"; // Reset the button's position when the mouse leaves
    // });
    //pomodoro timer
    let timerplace = document.getElementsByClassName("ic-Dashboard-header");
    
    let startButton = document.createElement("button");
    timerplace[0].appendChild(startButton);
    startButton.innerText = "Start";
    startButton.style.backgroundColor = '#FFFFFF';
    startButton.style.borderBlockColor = "#831010";
    startButton.style.color = "#831010"
    startButton.style.height = '50px'; //window
    startButton.style.width = '100px';
    startButton.style.fontFamily = "Merienda";
    startButton.style.fontSize = "25px";
    startButton.style.borderRadius = '5px'; // Round the corners
    startButton.style.boxShadow = '0px 3px 5px rgba(0,0,0,0.2)';
    startButton.style.transition = "background-color 0.3s ease";

    startButton.addEventListener("mouseover", function() {
        startButton.style.transform = "translateY(-5px)"; // Move the button 5 pixels up on hover
     });
    
     startButton.addEventListener("mouseout", function() {
        startButton.style.transform = "translateY(0)"; // Reset the button's position when the mouse leaves
     });

    let stopButton = document.createElement("button");
    timerplace[0].appendChild(stopButton);
    stopButton.innerText = "Clear";
    stopButton.style.backgroundColor = '#FFFFFF';
    stopButton.style.borderBlockColor = "#831010";
    stopButton.style.color = "#831010"
    stopButton.style.height = '50px'; //window
    stopButton.style.width = '100px';
    stopButton.style.fontFamily = "Merienda";
    stopButton.style.fontSize = "25px";
    stopButton.style.borderRadius = '5px'; // Round the corners
    stopButton.style.boxShadow = '0px 3px 5px rgba(0,0,0,0.2)';
    stopButton.style.transition = "background-color 0.3s ease";

    stopButton.addEventListener("mouseover", function() {
        stopButton.style.transform = "translateY(-5px)"; // Move the button 5 pixels up on hover
     });
    
     stopButton.addEventListener("mouseout", function() {
        stopButton.style.transform = "translateY(0)"; // Reset the button's position when the mouse leaves
     });
    

    let timer = document.createElement("button");
    timerplace[0].appendChild(timer);
    let timestring = "00:00:00";
    timer.innerText = timestring;
    timer.style.backgroundColor = '#FFFFFF';
    timer.style.borderBlockColor = "#831010";
    timer.style.color = "#831010"
    timer.style.height = '50px'; //window
    timer.style.width = '200px';
    timer.style.fontFamily = "Merienda";
    timer.style.fontSize = "25px";
    timer.style.borderRadius = '5px'; // Round the corners
    timer.style.boxShadow = '0px 3px 5px rgba(0,0,0,0.2)';
    timer.style.transition = "background-color 0.3s ease";



    let intervalId; // Variable to store the interval ID

    function startTimer() {
        let seconds = 0;
        let minutes = 0;
        let hours = 0;

    // Update the timer every second
    intervalId = setInterval(function() {
        // background.js (or content script, depending on your needs)
        //var audio = new Audio("sound.mp3");

        // Play the sound
        //audio.play();

        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
        // Format the time as HH:MM:SS
        const timestring = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        // Update the timer display
        timer.textContent = timestring;
        //localStorage.setItem("buttonClicked", "true");
        startButton.disabled = true;
        startButton.removeEventListener("click", buttonClickHandler);
    }, 1000);
}

    function stopTimer() {
        clearInterval(intervalId); // Stop the timer
        timestring = "00:00:00";
        timer.textContent = timestring;
        startButton.addEventListener("click", startTimer); //adds event listener after stop button
        startButton.disabled = false;
    }

// Event listeners for start and stop buttons
    startButton.addEventListener("click", startTimer);
    stopButton.addEventListener("click", stopTimer);



    //https://stackoverflow.com/questions/66259592/how-to-resize-chrome-browser-window-with-an-extension
    
    //https://www.youtube.com/embed/CHFif_y2TyM
    //https://www.youtube.com/embed/Kl2v9ydanrI
    //loifi
    //https://www.youtube.com/embed/jfKfPfyJRdk
    //https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator&theme=0
})();


//<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5Fz8zEE8gKZbMymlPSVLf4?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>