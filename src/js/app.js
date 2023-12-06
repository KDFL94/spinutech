// Import jQuery
window.$ = window.jQuery = require('jquery');

$(() => {

  /**
   *  Here is a mouse enter event.
   *  This handles when the icon/shape
   *  is hovered.
   */
  $('.a-icon-wrap').on('mouseenter', (event) => {
    // Targets the icon wrap and adds an active class to it
    $(event.target).closest('.a-icon-wrap').addClass('active');

    // Sets the icon wraps opacity to 50% except for the active one
    $('.a-icon-wrap').not('.active').css('opacity', '50%');
  });

  /**
   *  Here is a mouse leave event.
   *  This handles when the icon/shape
   *  is exited.
   */
  $('.a-icon-wrap').on('mouseleave', (event) => {
    // This removes the opacity set
    $('.a-icon-wrap').css('opacity', '');

    // Removes the active class from the active icon wrap
    $(event.target).closest('.a-icon-wrap').removeClass('active');
  });

  /**
   *  Hear is the icon click event.
   *  This handles when the icon/shape 
   *  is clicked it will add the clicked 
   *  icon to the correct row
   */
  $('.a-icon-wrap').on('click', () => {
    // This conditional checks the row of the active class
    if ($('.active').parent().attr('id') == 'row-1') {
      $('.active').prependTo('#row-2');
    }
    else {
      $('.active').prependTo('#row-1');
    }
  });
});