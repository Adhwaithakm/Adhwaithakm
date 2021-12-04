var options = {
          series: [25, 25, 30, 10, 5, 5],
          labels: ['Unlock for Burns', 'Liquidity pcs', 'Presale', ' Private Sale','Marketing' , 'Devs and Team'],
          chart: {
          width: 650,
          type: 'donut',
          strokeWidth: 0,

        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270,
            strokeWidth: 0
          }
        },
        dataLabels: {
          enabled: false,
          formatter: function (val) {
            return val + "%"
          }
        },
        legend: {
          labels: {
            colors: '#ffffff',
            useSeriesColors: false,
          },
          markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          strokeColor: '#ffffff',
          fillColors: ['#db0c26', '#ee6357', '#fc998c' , '#ffccc4', '#ffffff'],
          radius: 12,
          customHTML: undefined,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0
      },
          horizontalAlign:'center',
          fontFamily: 'Poppins, sans-serif',
          fontSize:'14px',
          position: 'bottom',
        },

        fill: {
          colors: ['#db0c26', '#ee6357', '#fc998c' , '#ffccc4', '#ffffff']
        },

       
        markers: {
            size: 20,
            colors: undefined,
            strokeColors: '#fff',
            strokeWidth: 2,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [],
            shape: "circle",
            radius: 2,
            offsetX: 0,
            offsetY: 0,
            onClick: undefined,
            onDblClick: undefined,
            showNullDataPoints: true,
            hover: {
              size: undefined,
              sizeOffset: 3
            }
        },

            stroke: {
              show: false, 
          },

        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 500
            },
            legend: {
              position: 'bottom'

            }
          }
        }]
        };



        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();



$('.st-burger-icon').on('click', function() {
  $(this).toggleClass('st-burger-icon--transformed');
  $('body').toggleClass('overflow');
  $('.mobile-nav').toggleClass('active');
});




$('.nav-links-mobile ul li a').on('click', function() {
  $('.mobile-nav').toggleClass('active');
  $('.st-burger-icon').toggleClass('st-burger-icon--transformed');
  $('body').toggleClass('overflow');
});


if($('#loading').hasClass('loading')){
   $('body').toggleClass('overflow');
}

$(window).ready(function(){
     setTimeout(function() {
        $('#loading').fadeOut();
             $('main').fadeIn();
      $('body').removeClass('overflow');
    }, 2000);

});



const video = document.getElementById("video");
const circlePlayButton = document.getElementById("circle-play-b");

function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}


circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function () {
  circlePlayButton.style.display = 'none';
});
video.addEventListener("pause", function () {
  circlePlayButton.style.display = 'block';
});


function playPause()
{ 
if (video.paused) 
  video.play(); 
else 
  video.pause(); 
}