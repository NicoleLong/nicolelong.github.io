/* global $ _ opspark */
$(function() {
    // ALL YOUR CODE GOES BELOW HERE //
    $.getJSON('data/product.json', function(data) {
        //const results = search(data, 'pink');

            //Make a list showing the data//

            //header
            $('<section>').attr('id', 'section-desc').append($('<h2>').text('Phones and Cases').addClass('heading')).appendTo('main');

            //list of phones/cases in the section
            function print(data) {
                $('#section-desc').append($('<ul>').attr('id', "itemList").addClass('itemList').addClass('container-fluid'));
                data.map(function(phone) {
                    
                    var $listItem = $('<li>').addClass('phoneList').addClass('row');
                    var $desc = $('<div>').append($('<h4>').text(phone.desc).addClass('description'));
                    var $type = $('<div>').text(phone.type).addClass('type').prepend('Type: ');
                    var $price = $('<div>').text(phone.price).addClass('price').prepend('Price: $');
                    var $color = $('<div>').text(phone.color).addClass('color').prepend('Color: ');
                    var $allColors = $('<div>').text(phone.availableColors).addClass('allColors').prepend('Available in: ');
                    var $specs = $('<div>').text(phone.specs).addClass('specs').prepend('Specifications: ');
                    var $stock = $('<div>').text(phone.stock).addClass('stock').prepend('In Stock: ');
                    var img = $('<img class="pics">');
                    var $productPhoto = img.attr('src', phone.image).addClass('col-sm-5');
                    $listItem.append($productPhoto, $desc, $type, $price, $color, $allColors, $specs, $stock);
                    $('#itemList').append($listItem);
                });
            }
            
            print(data);
            
            
            //CSS Styling//
            $('body').css('background', 'DarkSalmon');
            $('nav').css('background', 'FloralWhite').css('padding', '10px');
            $('#search').css('margin', '.4em 0em');
            $('#section-desc').css('border', 'ridge').css('padding', '10px').css('background', 'FloralWhite');
            $('.description').css('padding-top', '2em');
            $('.pics').css('height', '400px').css('width', '200px');
            $('li').css("list-style", "none").css('margin', '2em').css('border', 'solid').css('padding', '20px');
 
 
            
            //search button
            
            let searchData = [];
            $('#searchBtn').click(function(e) {
                $('#itemList').empty(); //clear the item list
                let searchKeywords = $('#searchInput')[0].value; //search input evaluation 
                let filteredProduct = search(data, searchKeywords);//call search function, pass in data, and term to be matched
                print(filteredProduct); //print just the values that match
                });
 
// recursion: breaks a problem down into manageable parts //

/**
 * Returns Objects wherein a string property matched a substring 
 * search of the term
 */
// [
//      {id: 1, desc: 'abc', spec: ['a', 'b']}, 
//      {id: 1, desc: 'abc', spec: ['a', 'b']}
// ]

function search(collection, term) {
    // 1. create container to collect matches //
    // 2. make term case insensitive
    term = term.toLowerCase();
    // 3. loop collection
    return _.reduce(collection, function(output, value) {
        // 4. inspect each value, is it complex, or a string?
        if(isCollection(value)) {
            // 5. if complex? recurse: if length on subsearch, push
            if(search(value, term).length) {
                output.push(value);
            }
        } else if (typeof value === 'string') {
            // 6. else-if is string? make value case insensitive, perform substring search
            if(value.toLowerCase().indexOf(term) > -1) {
                // 7. if match? collect value in output
                output.push(value);
            }
        }
        return output;
    }, []);
}

// is Array or Object (but not null or Date)
function isCollection(value) {
    if (value === null || value instanceof Date) return false;
    if (typeof value === 'object') return true;
    return false;
}


        })
        // ALL YOUR CODE GOES ABOVE HERE //
});

