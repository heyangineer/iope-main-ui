/*gnb dropdown toggle*/
function showham1() {
  document.getElementById("filter-dark").style.display = "block";
  document.getElementById("sd-menu1").style.top = "100px";
  document.getElementById("closehambtn1").style.top = "125px";
}

function showham2() {
  document.getElementById("filter-dark").style.display = "block";
  document.getElementById("sd-menu2").style.top = "100px";
  document.getElementById("closehambtn2").style.top = "125px";
}

function showham3() {
  document.getElementById("filter-dark").style.display = "block";
  document.getElementById("sd-menu3").style.top = "100px";
  document.getElementById("closehambtn3").style.top = "125px";
}

function showham4() {
  document.getElementById("filter-dark").style.display = "block";
  document.getElementById("sd-menu4").style.top = "100px";
  document.getElementById("closehambtn4").style.top = "125px";
}


function closeham1() {
  document.getElementById("filter-dark").style.display = "none";
  document.getElementById("sd-menu1").style.top = "-350px";
  document.getElementById("closehambtn1").style.top = "-50px";
}

function closeham2() {
  document.getElementById("filter-dark").style.display = "none";
  document.getElementById("sd-menu2").style.top = "-350px";
  document.getElementById("closehambtn2").style.top = "-50px";
}

function closeham3() {
  document.getElementById("filter-dark").style.display = "none";
  document.getElementById("sd-menu3").style.top = "-350px";
  document.getElementById("closehambtn3").style.top = "-50px";
}

function closeham4() {
  document.getElementById("filter-dark").style.display = "none";
  document.getElementById("sd-menu4").style.top = "-350px";
  document.getElementById("closehambtn4").style.top = "-50px";
}
//ham
/*여기부터 whole menu*/
function openPcTap() {
  document.getElementById("pcTap").style.display = "block";
}

function closePcTap() {
  document.getElementById("pcTap").style.display = "none";
}

//video background
jQuery( function() {
  jQuery( '#background' ).YTPlayer();
});

/*Navbar changes color on scrolling*/
//중복이 안 됨
window.onscroll = () => {
  const nav = document.querySelector('.navbar');//원래 #navbar였음
  if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
};


//expanding flex cards
const options = document.querySelectorAll('.option');

options.forEach(element => {
  element.addEventListener('click', event => {
    options.forEach(el => el.classList.remove('active'));
    event.target.closest('.option').classList.add('active');
  })
});


//top-fix
$( document ).ready( function() {
  $( window ).scroll( function() {
    if ( $( this ).scrollTop() > 200 ) {
      $( '.top' ).fadeIn();
    } else {
      $( '.top' ).fadeOut();
    }
  });
  $( '.top' ).click( function() {
    $( 'html, body' ).animate( { scrollTop : 0 }, 1000 );
    return false;
  });
});
