
function reset_toggle(){
    chrome.storage.sync.get('state', function(data) {
        if (data.state === 'on') {
            console.log('extension is active');
            $('#toggle').prop('checked', true);
        } else if (data.state === 'off') {
            $('#toggle').prop('checked', false);
            console.log('extension is inactive');

        }
      });
      console.log("STARING API Experiment");
};

$(document).on('click', '#settings-button',function(){
    console.log("hi");
    chrome.tabs.create({ url: "index.html" });
});
$(document).on('click', '#toggle',function(){
    // if variable doesn't exist, set extension to off
    // if variable does exist, check what the status is 

    if ($('#toggle').is(':checked')) {
        console.log('extension is active');
        chrome.storage.sync.set({'state': 'on'});
        reset_toggle();
    } else {
        console.log('extension is inactive');
        chrome.storage.sync.set({'state': 'off'});
        reset_toggle();
    }
});
reset_toggle();