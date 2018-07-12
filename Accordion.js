var accButtons = $('.accordion button'),
  accContent = accButtons.siblings();

// // Add aria attributes
accButtons
  .attr('aria-expanded', 'false');

// Add controls and ids
accButtons.each(function onEachAcc(idx, el) {
  var onEachAcc = $(el),
    tabId = 'tabID' + idx,
    panelId = 'panelId' + idx;

    onEachAcc
    .attr('id', tabId)
    .attr('aria-controls', panelId)
    
  accContent.eq(idx)
    .attr('id', panelId)
    .attr('aria-labelledby', tabId)
    .attr('aria-hidden', 'true')
    .attr('hidden', 'hidden')
    .attr('tabindex', '0');
});

function accordionToggle() {
  accButtons.on('click', function(e) {
    $control = $(this);

    accordionCont = $(this).attr('aria-controls');
    closeContent($control[0]);

    // toggle aria-expanded to newAriaExpand
    ariaExpand = $control.attr('aria-expanded');
    newAriaExpand = (ariaExpand == "false") ? "true" : "false";
    $control.attr('aria-expanded', newAriaExpand);

    // toggle display if clicked  or clicked again
    ariaHidden = $('#' + accordionCont).attr('aria-hidden');
    if (ariaHidden == "true") {
      $('#' + accordionCont).attr('aria-hidden', "false");
      $('#' + accordionCont).css('display', 'block');
    } else { 
      $('#' + accordionCont).attr('aria-hidden', "true");
      $('#' + accordionCont).css('display', 'none');
    }
  });
};

// Hide previously opened content
function closeContent(elem) {
  for (var i=0; i<accButtons.length; i++) {
    accButton = accButtons[i];
    if (accButton != elem) {
      if (($(accButton).attr('aria-expanded')) == 'true') {
        $(accButton).attr('aria-expanded', 'false');
        content = $(accButton).attr('aria-controls');
        $('#' + content).attr('aria-hidden', 'true');
        $('#' + content).css('display', 'none');
      }
    }
  }
};

accordionToggle();