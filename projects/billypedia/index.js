/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        
        console.log(data);
        
    //Top Rated 
    //TODO 4 : Populate the Top Rated List
    //TODO 8 : Dynamically Swap Recording Images
    var topRated = data.discography.topRated;
    _.forEach(topRated, function(recording){
        console.log(recording);
        $('#list-top-rated').append($('<li>').text(recording.title).click(function(){
            $('#top-rated-image').attr('src', recording.art);
        }));
    });
  
  //General Recordings
  //TODO 5 : Populate the General Recordings List
    $('<section>').attr('id','section-recordings').append($('<h3>').text('Recordings')).appendTo($('#sidebar'));        
    $('#section-recordings').append($('<ul>').attr('id', "list-recordings").addClass('list-recordings'));//Calling the section we just created and giving it an unordered list with the id of list-recordings
    
    var otherRecords = data.discography.recordings;
    _.map(otherRecords, function(recording){
        var $listItem = $('<li>').addClass('recording').click(function(event){
            $('#list-recordings').attr('src', recording.art);
        });
        var $title = $('<div>').text(recording.title).addClass('title');
        var $artist = $('<div>').text(recording.artist).addClass('artist');
        var $release = $('<div>').text(recording.release).addClass('release');
        var $year = $('<div>').text(recording.year).addClass('year');
        $listItem.append($title, $artist, $release, $year);
        $('#list-recordings').append($listItem);
    });
    //Iterating through the recordings array. For each recording, create an element, give it attributes and text, assign it to a variable so that they can be called on dynamically
    //for each record, create a list item with a #recording and a click event handler that will change the source of the picure with the value of whatever recording.art is.
    
    //TODO 6 : Create Images for Recording Lists
    $('#section-top-rated').prepend($('<img>').attr('id', 'top-rated-image').attr('src', topRated[0].art));
    $('#section-recordings').prepend($('<img>').attr('id', 'list-recordings').attr('src', otherRecords[0].art));
    //put an image at the top of the designated section. Give the image an id attribute and a source attribute.
    
    //TODO 7 : Dynamically Swap Billy Images
    var billyImages = data.images.billy;
    $('#image-billy').click(function(event){
        var billyPic = $('#image-billy').attr('src');
        var billyIndex = _.indexOf(billyImages, billyPic);
        console.log(billyPic, billyIndex);
        if(billyIndex < billyImages.length-1){
            billyPic = billyImages[billyIndex + 1];
        } else {
            billyPic = billyImages[0];
        }
        $('#image-billy').attr('src', billyPic);
    });
    //calling on id image-billy (which already existed, looked up name in console). Giving it an event handler of click. Giving image-billy a source attribute. passing array of billyImages into index of function, starting at billyPic. index returns the index number. if the index number is less than the length of the billyImages array, billyPic is assigned to the image at the next index. else its reassigned back to the first index. Give image-billy source a value of billypic. 
    
   //TODO 9 Build a Table using jQuery 
    $('<section>').attr('id','section-Billys-rider').append($('<h3>').text('Billy\'s Rider').addClass('heading')).appendTo('.content');

    var rider = data.rider;
    var createTable = function(rider){
    var createRow = function(rider){
        var $row = $("<tr>");
        var $type = $("<td>").text(rider.type);
        var $desc = $("<td>").text(rider.desc);
        $row.append($type);
        $row.append($desc);
        return $row;
    };
    var $table = $("<table>");
    var $rows = rider.map(createRow);//only passing in the create row function
    $table.append($rows);
    return $table;
    };
createTable(rider).appendTo("#section-Billys-rider");

    //CSS Styling   
    $('li').css('color', '#BCDAEF');
    $('.list-recordings').css('background', '#2D6B96');
    $('.list-top-rated').css('background', '#2D6B96');
    $('body').css('background', '#5884A3');
    $('nav').css('background', '#2D6B96');
    $('main').css('background',  '#5884A3');
    $('.heading').css('color', '#BCDAEF' );
    //$('table').css('border-color', 'white');
    $('td').css('border', 'solid').css('border-color', '#BCDAEF');
        
    
     
  
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


