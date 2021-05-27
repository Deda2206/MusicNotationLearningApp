import React from 'react'
import Embed from 'flat-embed';

export default function Practice() {
    const container = document.getElementById('embed-container');
    const embed = new Embed(container, {
  score: '<score-id-you-want-to-load>',
  embedParams: {
    appId: '<your-app-id>',
    controlsPosition: 'bottom',
  }
});
    return (
        <div>
            <div id="embed-container"></div>
<button id="export-xml">Export to MusicXML</button>

<script src="https://prod.flat-cdn.com/embed-js/v1.1.0/embed.min.js"></script>
<script>
  var container = document.getElementById('embed-container');
  var embed = new Flat.Embed(container, {
    // The score hosted on Flat we use here as template.
    // You can also use `embed.loadMusicXML(file)` to load your files on the fly
    score: '56ae21579a127715a02901a6',
    embedParams: {
      mode: 'edit',
      appId: '59e7684b476cba39490801c2',
      // Simple customizations
      branding: false,
      controlsPosition: 'top',
    }
  });

  // Export the file when we click on the button
  document.getElementById('export-xml').addEventListener('click', function () {
    embed.getMusicXML({ compressed: true }).then(function (buffer) {
     // Exported MusicXML file in `buffer`
    });
  });
</script>
        </div>
        
    )
}
