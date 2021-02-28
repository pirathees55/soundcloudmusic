
SC.initialize({
    client_id: '340f063c670272fac27cfa67bffcafc4'
  });
  
  $(document).ready(function () {
    SC.stream('/tracks/324547811', function (sound) {
        //function for start button
        // $('#a').mouseenter(function (e) {
        //     e.preventDefault();
        //     sound.start();
        // });
        // $('#a').mouseleave(function (e) {
        //     e.preventDefault();
        //     sound.pause();
        // });
  
        $('#start1').click(function (e) {
            e.preventDefault();
            sound.start();
        });
  
        //function for stop button
  
        $('#stop1').click(function (e) {
            e.preventDefault();
            sound.stop();
        });
  
  
    });
  
        SC.stream('/tracks/540834516', function (sound) {
          $('.o').mouseenter(function (e) {
              e.preventDefault();
              sound.start();
          });
          $('.o').mouseleave(function (e) {
              e.preventDefault();
              sound.pause();
          });
          //function for start button
  
          $('#start16').click(function (e) {
              e.preventDefault();
              sound.start();
          });
  
          //function for stop button
  
          $('#stop16').click(function (e) {
              e.preventDefault();
              sound.stop();
          });
  
  
      });
  
  }); 
  
  