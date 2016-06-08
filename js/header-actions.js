$(function(){
  // Assign DOM buttons to variables
  var menuBtn = $('.z-navmenu');
  var globalBtn = $('.z-global');
  var userBtn = $('.z-user');
  // Assign DOM popup boxes to variables
  var menuBox = $('.z-navmenu-box');
  var menuGlobal = $('.z-global-box');
  var userBox = $('.z-user-box');
  // Menu toggle function
  var menuToggle = function($menu1) {
    $menu1.fadeToggle(100);
  };
  // Function that keeps only one menu visible simultaneously 
  var menuActions = function(mnu1, mnu2, mnu3, btn1, btn2, btn3) {
    menuToggle(mnu1);
    btn1.toggleClass('is-active');
    mnu2.fadeOut(100);
    mnu3.fadeOut(100);
    btn2.removeClass('is-active');
    btn3.removeClass('is-active');
  };
  // Function to close any menu when clicking outside header
  $('html').click(function(){
    menuBox.fadeOut(100);
    menuGlobal.fadeOut(100);
    userBox.fadeOut(100);
    menuBtn.removeClass('is-active');
    globalBtn.removeClass('is-active');
    userBtn.removeClass('is-active');
  });
  // Function to keep Navigation menu popup visible when using the searchbox
  $('.z-input').click(function(){
    return false;
  });
  // Function to display each menu when its button is clicked
  menuBtn.click(function(e){
    menuActions(menuBox, menuGlobal, userBox, menuBtn, globalBtn, userBtn);
    return false;
  });
  globalBtn.click(function(e){
    menuActions(menuGlobal, menuBox, userBox, globalBtn, menuBtn, userBtn);
    return false;
  });
  userBtn.click(function(e){
    menuActions(userBox, menuGlobal, menuBox, userBtn, globalBtn, menuBtn);
    return false;
  });
}); 