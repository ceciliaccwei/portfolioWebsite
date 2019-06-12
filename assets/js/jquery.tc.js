$( document ).ready( function() {
          var entries = [
              { label: 'Python', url: 'https://www.jqueryscript.net/tags.php?/Back%20to%20top/', target: '_top' },
              { label: 'HTML', url: 'https://www.jqueryscript.net/tags.php?/Bootstrap/', target: '_top' },
              { label: 'CSS', url: 'https://www.jqueryscript.net/tags.php?/carousel/', target: '_top' },
              { label: 'Java', url: 'https://www.jqueryscript.net/tags.php?/countdown/', target: '_top' },
              { label: 'Assembly', url: 'https://www.jqueryscript.net/tags.php?/Drop%20Down%20Menu/', target: '_top' },
              { label: 'GitHub', url: 'https://codepen.io/', target: '_top' },
              { label: 'Algorithm', url: 'https://threejs.org/', target: '_top' },
              { label: 'UI/UX Design', url: 'https://www.jqueryscript.net/tags.php?/form%20validation/', target: '_top' },
              { label: 'Management', url: 'http://jscompress.com/', target: '_top' },
              { label: 'C', url: 'https://tinypng.com/', target: '_top' },
              { label: 'Shell', url: 'http://caniuse.com/', target: '_top' },
              { label: 'System Logs', url: 'https://goo.gl/', target: '_top' },
              { label: 'Debugging', url: 'https://www.jqueryscript.net/tags.php?/grid%20layout/', target: '_top' },
              { label: 'Promoting', url: 'https://twitter.com/niklaswebdev', target: '_top' },
              { label: 'Sketch', url: 'http://nkunited.deviantart.com/', target: '_top' },
              { label: 'Testing', url: 'http://gulpjs.com/', target: '_top' },
              { label: 'Quality Assurance', url: 'https://www.browsersync.io/', target: '_top' },
              { label: 'jQuery', url: 'https://github.com/', target: '_top' },
              { label: 'javascript', url: 'https://www.shadertoy.com/', target: '_top' },
              { label: 'SQLite', url: 'https://www.jqueryscript.net/tags.php?/tree%20view/', target: '_top' },
              { label: 'Database', url: 'http://jsperf.com/', target: '_top' },
              { label: 'Machine Learning', url: 'https://foundation.zurb.com/', target: '_top' },
              { label: 'Product Marketing', url: 'https://createjs.com/', target: '_top' },
              { label: 'Customer Focus', url: 'http://julian.com/research/velocity/', target: '_top' },
              { label: 'Leadership', url: 'https://greensock.com/docs/#/HTML5/GSAP/TweenLite/', target: '_top' },
              { label: 'Microsoft Office', url: 'https://jquery.com/', target: '_top' },
              { label: 'Technical Writing', url: 'https://www.jqueryscript.net/tags.php?/Notification/', target: '_top' },

          ];
          var settings = {
              entries: entries,
              width: 550,
              height: 480,
              radius: '65%',
              radiusMin: 75,
              bgDraw: true,
              bgColor: '#ffffff00',
              opacityOver: 1.00,
              opacityOut: 0.05,
              opacitySpeed: 6,
              fov: 800,
              speed: 0.4,
              fontFamily: 'Oswald, Arial, sans-serif',
              fontSize: '15',
              fontColor: '#111',
              fontWeight: 'normal',//bold
              fontStyle: 'normal',//italic
              fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
              fontToUpperCase: true
          };
          //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
          $( '#tag-cloud' ).svg3DTagCloud( settings );
} );
