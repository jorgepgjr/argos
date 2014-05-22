$(document).ready(function() {
	tabFavsActivate();
});

function tabFavsActivate() {
	$.each(ARGOS.favs, function(i, k) {
		$('li#favs ul').append('<li class="subTitle">' + k.groupName + '</li>');
		$('li#favs ul').append('<li class="spaceLine"></li>');
		
		$.each(k.list, function(b, l) {
			$('li#favs ul').append('<li><a href="' + l.url + '" target="_blank">' + l.name + '</a></li>');
		});
		$('li#favs ul').append('<li class="space"></li>');
	});	
}