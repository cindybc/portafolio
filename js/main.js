  $(document).ready(function(){
  	//Parallax
  	 $('.parallax').parallax();


    //Menú desplegable 
  $(".button-collapse").sideNav({
  	closeOnClick: true,
    menuWidth: 250,
  });

  // Scrollspy
   $('.scrollspy').scrollSpy();

  // Desplazamiento
    $('a[href*="#"]').click(function(e){				
		e.preventDefault();
			$('body,html').stop(true,true).animate({				
				scrollTop: $(this.hash).offset().top
			},1000);
		
	});

    
  });
     

  


