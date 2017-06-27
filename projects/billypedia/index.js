/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        
        console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
    var topRated = data.discography.topRated;
    const $li = $('<li>');
     $('#list-top-rated').append($li);
        
        
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


