$(document).ready(function() {
    setGrid(16);
    
    $('#clr_grid').click(function() {
        $('#wrapper div').css('background-color', 'gray');
    });
    
    $('#new_grid').click(function() {
        var numPerSide = prompt("How many squares per side? (Under 80)");
        setGrid(numPerSide);
    });
    
    $(document).on('mouseover', '#wrapper div', function() {
        $(this).css('background-color', '#44443C');            
    });    
    
});

function setGrid(numPerSide) {
    $('#wrapper').empty();
    var sideLength = 960 / numPerSide;
    for(var i = 1; i <= (numPerSide * numPerSide); i++) {
        $('#wrapper').append('<div></div>');
    }
    $('#wrapper div').empty();
    $('#wrapper div').height(sideLength);
    $('#wrapper div').width(sideLength);
}