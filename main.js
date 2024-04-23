'use strict';

{
  const hiddenNavA = document.getElementById('menuListA');
  const mask = document.querySelector('.mask');
  const hiddenMenu01 = document.getElementById('hiddenMenu01')
  const hiddenMenu01A = document.getElementById('hiddenMenu01A')
  const hiddenMenu01B = document.getElementById('hiddenMenu01B')
  
  /*ナビゲーションに関するJS*/
  //サービス一覧にマウスを合わせたら、マスク・リストを出す
  function showList(){
    mask.classList.remove('hidden');
    mask.classList.remove('hide');
    mask.classList.add('show');
    hiddenMenu01.classList.remove('hidden');
    hiddenMenu01.classList.remove('hide');
    hiddenMenu01.classList.add('show');
    hiddenMenu01A.classList.remove('hidden');
    hiddenMenu01A.classList.remove('hide');
    hiddenMenu01A.classList.add('show');
    hiddenMenu01B.classList.remove('hidden');
    hiddenMenu01B.classList.remove('hide');
    hiddenMenu01B.classList.add('show');
  };

  hiddenNavA.addEventListener('mouseover', ()=>{
    showList();
  });

    //マスクにマウスを合わせたら、マスク・リストを出す
    mask.addEventListener('mouseover', ()=>{
      showList();
    });

  //サービス一覧からマウスを離したら、マスク・リストを消す
  function hideList(){
    mask.classList.remove('show');
    mask.classList.add('hide');
    hiddenMenu01.classList.remove('show');
    hiddenMenu01.classList.add('hide');
    hiddenMenu01A.classList.remove('show');
    hiddenMenu01A.classList.add('hide');
    hiddenMenu01B.classList.remove('show');
    hiddenMenu01B.classList.add('hide');
  }

  hiddenNavA.addEventListener('mouseout', ()=>{
    hideList();
  });

  //マスクからマウスを離したら、マスク・リストを消す
  mask.addEventListener('mouseout', ()=>{
    hideList();
  });

  /*スライドランディングページに関するJS*/
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const lpPage = document.getElementById('lpPage'); /*ulの要素*/
  const slides = lpPage.children; /*liの要素*/
  //***要検討***/ const lpImages = [
  //   'img/mv_bnr03--pc(shenzhen).jpg',
  //   'img/mv_bnr04--pc(france).jpg',
  //   'img/mv_bnr04--pc(DO).jpg',
  //   'img/mv_bnr04(naigaiCargo).jpg',
  // ];
  let currentIndex = -1;

  //**要検討**/ const currentImage = document.querySelectorAll('.lpWords');
  // currentImage.src = lpImages[currentIndex];

  // lpImages.forEach(image){
  //   const img = document.querySelectorAll('.lpWords img');
  //   img.src = image[currentIndex];
  // }

  function  moveNext(){ //LPを次に変える。
    currentIndex++;
    const slideWidth = slides[0].getBoundingClientRect().width;
    lpPage.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  } 

  function movePrev(){ //LPを前に変える。
    currentIndex--;
    const slideWidth = slides[0].getBoundingClientRect().width;
    lpPage.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  function slideNext(){ //5秒ごとにLPを次に変える。slides.length -1 = 最後のLPに来たら currentIndex -1(最初のLP)に戻る
    moveNext();
    const timeoutId = setTimeout(slideNext, 5000);
  
    if (currentIndex === slides.length -1){
      // clearTimeout(timeoutId);
      currentIndex = -1;
    }
  }

  slideNext();

  //クリックするたびに、画像を次（右）に移動する。
  next.addEventListener('click', () => {
    moveNext();
    if (currentIndex === slides.length -1){
      currentIndex = -1;
    }
  });
  //クリックするたびに、画像を前（左）に移動する。
  prev.addEventListener('click', () => {
    movePrev();
    if (currentIndex < 1){
      currentIndex = slides.length;
    }
  });

  /*動くナビゲーションについてのJS*/
  const target = document.getElementById('navigation');
  const logo = document.getElementById('companyLogo');
  
  function callback(entries) {
    console.log(entries[0]);

    if (entries[0].isIntersecting){
      entries[0].target.classList.remove('moveDown');
    } else {
      entries[0].target.classList.add('moveDown');
    }
  }
  
  const options = {
    threshold: 0.9,
  };

  const observer = new IntersectionObserver(callback,options);

  observer.observe(logo);

  /*ピックアップリストのスライダー画面*/
  const pickupList = document.getElementById('pickupList');
  const pickupListA = document.getElementById('pickupListA');
  const pickupListB = document.getElementById('pickupListB');
  const pickupCont = document.querySelectorAll('pickupCont');
  const firstBtn = document.getElementById('firstBtn');
  const secondBtn = document.getElementById('secondBtn');
  let plsA = pickupListA.children;
  let plsB = pickupListB.children;

  function slideLeft(){
    const pickupAWidth = pickupListA.getBoundingClientRect().width;
    const pickupBWidth = pickupListB.getBoundingClientRect().width;
    pickupListA.style.transform = `translateX(${-0.4 * pickupAWidth}px)`;
    pickupListB.style.transform = `translateX(${-0.4 * pickupBWidth}px)`;
  }

  function slideRight(){
    const pickupAWidth = pickupListA.getBoundingClientRect().width;
    const pickupBWidth = pickupListB.getBoundingClientRect().width;
    pickupListA.style.transform = `translateX(${0 * pickupAWidth}px)`;
    pickupListB.style.transform = `translateX(${0 * pickupBWidth}px)`;
  }

  firstBtn.addEventListener('click', ()=>{
    firstBtn.classList.add('checked');
    secondBtn.classList.remove('checked');
    slideRight();
    pickupListA.classList.remove('hiddenList');
    pickupListA.classList.add('showList');
    pickupListB.classList.remove('showList');
    pickupListB.classList.add('hiddenList');
    pickupListB.style.transform = 'translateX(50%)';
  });

  secondBtn.addEventListener('click', ()=>{
    secondBtn.classList.add('checked');
    firstBtn.classList.remove('checked');
    slideLeft();
    pickupListA.classList.remove('showList');
    pickupListA.classList.add('hiddenList');
    pickupListB.classList.remove('hiddenList');
    pickupListB.classList.add('showList');
  });

}

