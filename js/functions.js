$(document).ready(function() {
  // setTimeout(function(){ 
  //   document.getElementById("helper-logo").style.display = "block";
  //   $('#helper-logo').addClass("fade-in");
  // }, 1000);
});

// $('body *:not(.help-toggle)').on('click', function() {
//   if (document.getElementById("helper-logo").style.display == "block") {
//     document.getElementById("helper-logo").style.display = "none";
//     //$('#helper-logo').removeClass("fade-in");
//   } 
// });

window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};

$('.help-toggle').on('click', function() {
  if (document.getElementById("helper-logo").style.display == "block") {
    document.getElementById("helper-logo").style.display = "none";
  } else {
    document.getElementById("helper-logo").style.display = "block";
  }

  if (document.getElementById("overlay-2").style.display == "block") {
    document.getElementById("overlay-2").style.display = "none";
  } else {
    document.getElementById("overlay-2").style.display = "block";
  }

  if (document.getElementById("switcher-help").style.display == "block") {
    document.getElementById("switcher-help").style.display = "none";
  } else {
    document.getElementById("switcher-help").style.display = "block";
  }

  if (document.getElementById("tracklist-help").style.display == "block") {
    document.getElementById("tracklist-help").style.display = "none";
  } else {
    document.getElementById("tracklist-help").style.display = "block";
  }

});

/*
  Handles a click on the down button to slide down the playlist.
*/
$('.down-header').on('click', function(){
  /*
    Sets the list's height;
  */
  $('#list').css('height', ( parseInt( $('#flat-black-player-container').height() ) - 135 )+ 'px' );

  /*
    Slides down the playlist.
  */
  $('#list-screen').slideDown(500, function(){
      $(this).show();
  });
});

/*
  Handles a click on the up arrow to hide the list screen.
*/
$('.hide-playlist').on('click', function(){
  $('#list-screen').slideUp( 500, function(){
    $(this).hide();
  });
});

/*
  Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function( e ){
  var offset = this.getBoundingClientRect();
  var x = e.pageX - offset.left;

  Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
});

$('img[amplitude-song-info="cover_art_url"]').css('height', $('img[amplitude-song-info="cover_art_url"]').width() + 'px' );


$(window).on('resize', function(){
  $('img[amplitude-song-info="cover_art_url"]').css('height', $('img[amplitude-song-info="cover_art_url"]').width() + 'px' );
});

/*
  Switch between music and voice playlists
*/ 

$('.switcher').on('click', function() {

  var currentTime = Amplitude.getSongPlayedSeconds();
  var currentSongIndex = Amplitude.getActiveIndex();
  var newSongIndex = (currentSongIndex % 2) ? currentSongIndex - 1 : currentSongIndex + 1;
  //console.log(newSongIndex);
  Amplitude.skipTo(currentTime, newSongIndex);

});

$('.amplitude-next-playlist').on('click', function() {
  Amplitude.next();
  Amplitude.next();
});

$('.amplitude-prev-playlist').on('click', function() {
  Amplitude.prev();
  Amplitude.prev();
});

$(".fas").on('click', function() {
  if ($(".fas").hasClass('voice-activated')) {
    $(".fas").removeClass('voice-activated');  
  } else {
    $(".fas").addClass('voice-activated');
  }
});

$("#logo").on('click', function() {
  if (document.getElementById("overlay").style.display == "block") {
    document.getElementById("overlay").style.display = "none";
  } else {
    document.getElementById("overlay").style.display = "block";
  }
});

$('#overlay').on('click', function() {
  if (document.getElementById("overlay").style.display == "block") {
    document.getElementById("overlay").style.display = "none";
  } 
});

$('#overlay-2').on('click', function() {
  if (document.getElementById("overlay-2").style.display == "block") {
    document.getElementById("overlay-2").style.display = "none";
  } 
  if (document.getElementById("helper-logo").style.display == "block") {
    document.getElementById("helper-logo").style.display = "none";
  }
  if (document.getElementById("switcher-help").style.display == "block") {
    document.getElementById("switcher-help").style.display = "none";
  }
  if (document.getElementById("tracklist-help").style.display == "block") {
    document.getElementById("tracklist-help").style.display = "none";
  }
});