'use strict';

{
  function draw(){
    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'underfined'){
      return;
    }
    const ctx = canvas.getContext('2d');

    const img = document.createElement('img');
    img.src = 'img/header_logo--short.png';

    img.addEventLinster('load', () =>{
      const pattern = ctx.createPattern(img, 'repeat');
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    });
  }

  draw();
}