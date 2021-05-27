import React from 'react'

export default function Practice() {
    return (
        
        
        
      
        <div id="embed-container"></div>
        <script src="https://prod.flat-cdn.com/embed-js/v1.3.0/embed.min.js"></script>
        <script src="https://prod.flat-cdn.com/embed-js/v1.3.0/embed.min.js"></script>
        <script>
          var container = document.getElementById('embed-container');
          var embed = new Flat.Embed(container, {
            score: '<score-id-you-want-to-load>',
            embedParams: {
              appId: '<your-app-id>',
              controlsPosition: 'bottom',
            }
          });
        </script>
    )
}
