(function(){
  const trackClasses = 'd-track typo-track d-track_selectable d-track_with-cover';
  const trackSelector = `.${trackClasses.split(' ').join('.')}`;
  const trackElements = document.querySelectorAll(trackSelector);

  const tracksString = '';

  if (!Array.isArray(window.trackStrings)) window.trackStrings = [];

  const trackStrings = window.trackStrings;

  for (const element of trackElements) {
    const title = element.querySelector('.d-track__title').innerHTML;
    const artist = element.querySelector('.d-track__artists a').innerHTML;
    const trackString = `${artist} ${title}`;
    if (trackStrings.indexOf(tracksString) === -1) {
      trackStrings.push(trackString);
    }
  }

  console.log(trackStrings.join('\n'));
})();