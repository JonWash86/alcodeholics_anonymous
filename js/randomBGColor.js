var getTD = document.getElementsByTagName('td');

function addEventsToTDs() {
    for(var i = 0; i < getTD.length; i++) {
        getTD[i].addEventListener('mouseover', changeBGColor);
    }
}

function changeBGColor(e) {
    var target = e.target;
    console.log(target);
    if(target.nodeName == 'TD') {
        for(var i = 0; i < getTD.length; i++) {
            getTD[i].style.backgroundColor = '';
        }
    target.style.backgroundColor = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ', 0.5)';
    }
}


function functionsOnPageLoad() {
    addEventsToTDs();
    var getFieldSet = document.getElementById('ingredientsCheck');
    function addEventsToFieldSet() {
      getFieldSet.addEventListener('mouseover', clearBGColor);
    }
    function clearBGColor(e) {
        var target = e.target;
        if(target.nodeName == 'FIELDSET') {
            for(var i = 0; i < getTD.length; i++) {
                getTD[i].style.backgroundColor = '';
            }
        }
    }
    addEventsToFieldSet();
}