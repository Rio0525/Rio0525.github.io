// function([string1, string2],target id,[color1,color2])    
consoleText(['BSIT Gra', 'Bachelor of Science in Information Technology Graduate'], 'text',['#fff', '#fff']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 60)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 350)
}
function NavigatePage(navPage){    
  $('html, body').animate({        
      scrollTop: $('#'+navPage).offset().top
  }, 1000, 'swing'); 
  
};

var btn = $('#button'); 
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

$(document).ready(function () {
  var $sections = $('.box');
  $(window).scroll(function () {
      var currentScroll = $(this).scrollTop();
      var $currentSection
      $sections.each(function () {
          var divPosition = $(this).offset().top;
          if (divPosition - 100 < currentScroll) {
              $currentSection = $(this);
          }
          if ($currentSection) {
              var id = $currentSection.attr('id');
              $('button').removeClass('active');
              $(document.getElementsByName(id)).addClass('active');
          }
      })
  });
});

