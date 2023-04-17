//where our code goes that runs in browser


window.addEventListener('load',function() {
    'use strict';

    let block_to_insert = document.createElement( 'iframe' );
    block_to_insert.src = "https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator&theme=0"

    let container_block = document.getElementById( 'content-wrapper' );
    container_block.appendChild( block_to_insert );

    let e = document.createElement( 'iframe' );
    e.src = "https://www.youtube.com/embed/Kl2v9ydanrI"

    let d = document.getElementById( 'content-wrapper' );
    d.appendChild( e );

    let p = document.getElementById("header");
    p.style.background = '#000000';

    let x = document.getElementById("application");
    x.style.background = '#000000';


    // Your code here...
})();