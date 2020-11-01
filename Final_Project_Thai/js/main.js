
var products = [{
	id : 4,
	title : 'Burger and steak',
	img : './img/pic1.jpg',
	price : 30
},
{
	id : 4,
	title : 'Thai spacial rice',
	img : './img/pic2.jpg',
	price : 15
},
{
	id : 4,
	title : 'Chicken salad',
	img : './img/pic3.jpg',
	price : 20
},
{
	id : 4,
	title : 'Spring roll with egg',
	img : './img/pic4.jpg',
	price : 11
},{
	id : 4,
	title : 'Salad',
	img : './img/pic5.jpg',
	price : 12
},{
	id : 4,
	title : 'Vage spacial',
	img : './img/pic6.jpg',
	price : 19
},{
	id : 4,
	title : 'Cheese cake',
	img : './img/pic7.jpg',
	price : 9
},{
	id : 4,
	title : 'Strawberry',
	img : './img/pic8.jpg',
	price : 13
}];

function productsDisplay(products){

	$('.shop_foreach').html('');

	products.forEach(function(product){

		$('.shop_foreach').append('<div class="box">'+
          '<img src="'+product.img+'">'+
          '<h3>'+product.title+'</h3>'+
          '<p>'+product.price+'$</p>'+
          '<input type="number" name="quantity">'+
          '<input type="button" name="add_to_cart" value="Add to cart"></div>');
	});

}

$( document ).ready(function() {
	
   productsDisplay(products);

   $('.login_btn').on('click',function(e){
   		e.preventDefault();
   		if($('.username').val() == "admin" && $('.passwd').val() == "1234"){
   			window.location.href = "home.html"
   		}else{
   			alert("Username or Password is wrong");
   		}
   		
   });

   $('.search_btn').on('click',function(e){
   	e.preventDefault();
   	let str = $('.search_inp').val();
   	if(str != ''){
   	let searchProducts = products.filter(function(product) {
        return product.title.includes(str);
     });
   	    productsDisplay(searchProducts);
   	}else{
   		productsDisplay(products);	
   	}

   });

});

$(document). ready(function(){
	$("add_to_cart").click( function(){
		$("fa fa-shopping-cart").append
	});
});











