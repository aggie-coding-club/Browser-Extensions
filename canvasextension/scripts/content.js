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
    
    
    
    
    //p = document.getElementById("header");
    //p.style.background = '#333333';
    
    //p = document.getElementById("application");
    //p.style.background = '#333333';
    
    
    var block_to_insert ;
    var container_block ;
     
    block_to_insert = document.createElement( 'iframe' );
    block_to_insert.src = "https://www.youtube.com/embed/jfKfPfyJRdk"
     
    container_block = document.getElementById( 'content-wrapper' );
    container_block.appendChild( block_to_insert );
    
    
    let e = document.createElement( 'iframe' );
        e.src = "https://www.youtube.com/embed/CHFif_y2TyM"
    
        let d = document.getElementById( 'content-wrapper' );
        d.appendChild( e );
    
    //https://www.youtube.com/embed/CHFif_y2TyM
    //https://www.youtube.com/embed/Kl2v9ydanrI
    //loifi
    //https://www.youtube.com/embed/jfKfPfyJRdk
    //https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator&theme=0
    // Your code here...
})();