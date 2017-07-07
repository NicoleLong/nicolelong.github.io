/* global $ _ opspark */
$(function () {
  // ALL YOUR CODE GOES BELOW HERE //
  $.getJSON('data/product.json', function (data) {
 
 //Make a list showing the data//
 $('<section>').attr('id', 'section-desc').append($('<h2>').text('Phones and Cases').addClass('heading')).appendTo('main');
   data.map(function(phone){
      var $listItem = $('<li>').addClass('phoneList');
      var $desc = $('<div>').text(phone.desc).addClass('description');
      var $type = $('<div>').text(phone.type).addClass('type');
      var $price = $('<div>').text(phone.price).addClass('price');
      var $color = $('<div>').text(phone.color).addClass('color');
      var $allColors = $('<div>').text(phone.availableColors).addClass('allColors');
      var $specs = $('<div>').text(phone.specs).addClass('specs');
      var $stock = $('<div>').text(phone.stock).addClass('stock');
      var img = $('<img class="dynamic">');
      var $productPhoto = img.attr('src', phone.image);
      $listItem.append($productPhoto, $desc, $type, $price, $color, $allColors, $specs, $stock);
      $('#section-desc').append($listItem);
   });
  
  
  

  }) 
  // ALL YOUR CODE GOES ABOVE HERE //
});