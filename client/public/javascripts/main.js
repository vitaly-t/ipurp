$(document).ready( () => {

  Movies.init();

  /* By defaults */
  $('.removeMovieForm').invisible();

});

(function($) {
    $.fn.invisible = function() {
        return this.css("visibility", "hidden");
    };
    $.fn.visible = function() {
        return this.css("visibility", "visible");
    };
    $.fn.inOpacity = function() {
        return this.css("opacity", "0");
    };
    $.fn.opacity = function() {
        return this.css("opacity", "1");
    };
})(jQuery);

const Movies = ( () => {
  function init() {
    addMovie();
    removeMovie();
    addMovieDisplay();
    removeMovieDisplay();
  }

  function addMovie() {
    $('.addMovie').click( (e) => {
      e.preventDefault();
      addMovieDisplay();
    });
  }

  function removeMovie() {
    $('.removeMovie').click( (e) => {
      e.preventDefault();
      removeMovieDisplay();
    });
  }

  function addMovieDisplay() {
    $('.addMovieForm').invisible();
    $('.removeMovieForm').visible();
  }

  function removeMovieDisplay() {
    $('.removeMovieForm').invisible();
    $('.addMovieForm').visible();
  }

  return {
    init: init
  }
})();
