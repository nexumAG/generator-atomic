/**
 * @name nx-navigation
 * @description navigation for prototype
 * @author empty
 * @see {@link http://github.com/documentation|Specification}
 */
var nx = nx || {}; // get the apps namespace
nx.nxNavigation = (function () {
  'use strict';
  /**
   * @function privateFunctionExample
   * @description example private function
   * @param {string} name - The Name of who should be greeted.
   */
  var $navToggle = $('#nx-nav__toggle'),
      $navClose = $('#nx-nav__close'),
      $navOpen = $('#nx-nav__open'),
      $nav = $('.nx-nav');

  function toggleNav() {
    if (sessionStorage.getItem('nav') === 'small') {
      sessionStorage.setItem('nav', 'small');
      $nav.addClass('nx-nav--small');
    } else {
      sessionStorage.setItem('nav', 'large');
      $nav.removeClass('nx-nav--small');
    }

    $navToggle.click(function () {
      $nav.toggleClass('nx-nav--small');
      if (sessionStorage.getItem('nav') === 'small') {
        sessionStorage.setItem('nav', 'large');
      } else {
        sessionStorage.setItem('nav', 'small');
      }
    });
  }

  function displayNav() {

    if (sessionStorage.getItem('navDisplay') === 'hidden') {
      $nav.addClass('nx-nav--hidden');
      sessionStorage.setItem('navDisplay', 'hidden');
    } else {
      $nav.removeClass('nx-nav--hidden');
      sessionStorage.setItem('navDisplay', 'shown');
    }

    $navClose.click(function () {
      $nav.addClass('nx-nav--hidden');
      sessionStorage.setItem('navDisplay', 'hidden');
    });
    $navOpen.click(function () {
      $nav.removeClass('nx-nav--hidden');
      sessionStorage.setItem('navDisplay', 'shown');
    });
  }

  function atomsSubNav() {
    var $body = $('body');

    if ( $body.hasClass('atoms-index') ) {

      var atoms = [];

      $('.nx-anchor').each(function () {

        var _this = $(this);
        var _obj = {
          text: _this.text(),
          id: _this.attr('id')
        };
        atoms.push(_obj);
      });


      atoms.forEach(function (element) {

        $('#atomsNav').append('<li class="nx-nav__item nx-nav__item--secondlevel">' +
            '<a class="nx-nav__link nx-nav__link--secondlevel" href="#' + element.id + '">' + element.text + '</a></li>')
      })

    }

  }

  /**
   * functions that should run at app-start
   * @constructor
   */
  toggleNav();
  displayNav();
  atomsSubNav();
}());
