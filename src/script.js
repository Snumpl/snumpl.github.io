function preloader () {
   $(() => {
      setInterval(() => {
         let p = $('.preloader');

         p.css('opacity', 0);
      }, 1000);
   });
}

preloader();