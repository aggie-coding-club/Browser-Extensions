//where our code goes that runs in browser


window.addEventListener('load',function() {
    'use strict';

    p = document.getElementsByTagName("img");
    p[0].src = "https://yt3.ggpht.com/ytc/AKedOLTkvv3TyNLJYEWXsPdCsgg8fvSn9-Oj65GBhkAiEg=s800-c-k-c0x00ffffff-no-rj";
    
    p[1].src = "https://www.pinclipart.com/picdir/big/321-3219024_coffee-transparent-clip-art-coffee-cup-clipart-png.png";
    
    
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
     
    block_to_insert = document.createElement( 'iframe' );
    block_to_insert.src = "https://www.youtube.com/embed/jfKfPfyJRdk"
     
    container_block = document.getElementById( 'content-wrapper' );
    //container_block = document.getElementById("DashboardCard_Container");
    //container_block = container_block.parentNode;
    container_block.appendChild( block_to_insert );
    //let bleh = undefined;
    //container_block.insertBefore(block_to_insert, bleh );
    //container_block.insertBefore(block_to_insert, undefined);
    
    
    
    let e = document.createElement( 'iframe' );
        e.src = "https://www.youtube.com/embed/CHFif_y2TyM"
    
        let d = document.getElementById( 'content-wrapper' );
        d.appendChild( e );
    
    
    
    p = document.getElementsByClassName("fOyUs_bGBk fbyHH_bGBk fbyHH_vIby");
        for (let i = 0; i < p.length; i++){
            p[i].style.color = "#FFF";
            p[i].style.textDecorationColor = "#500000";
        }
    
    
    p = document.getElementsByClassName("fOyUs_bGBk fOyUs_cuDs ctrLD_bGBk ctrLD_doqw ctrLD_dnHs");
    
        for (let i = 0; i < p.length; i++){
            p[i].style.color = "#CE795B";
        }
    
    
    
    p = document.getElementsByClassName("event-details__title recent_feedback_title");
        for (let i = 0; i < p.length; i++){
            p[i].style.color = "#FFF";
        }
    
    p = document.getElementsByClassName("large ic-Dashboard-header__layout");
    p[0].style.backgroundColor = '#242222';
    
    //https://www.youtube.com/embed/CHFif_y2TyM
    //https://www.youtube.com/embed/Kl2v9ydanrI
    //loifi
    //https://www.youtube.com/embed/jfKfPfyJRdk
    //https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator&theme=0
    // Your code here...
})();