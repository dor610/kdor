document.onreadystatechange = () =>{
  if(document.readyState === "complete"){

     AOS.init();

    window.scrollTo({top: 0});
    setTimeout(() =>{
        closeLoader();
        //openNavBar();
    },1000);

    setTimeout(() =>{
      document.getElementById('video1').classList.add('hide-d');
      document.getElementById('video2').classList.remove('hide-d');
    },3000);
    /*(() => {
      document.getElementById('main-content').scrollTop = 0;
    })();*/
  }
}
