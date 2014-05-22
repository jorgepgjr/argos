var favs =	[{ groupName: "Projetos",
				list:[	
					{ name: "AssineAbril", url: "http://www.assine.abril.com.br" },
					{ name: "SAC", url: "http://www.sac.abril.com.br" },
					{ name: "Clube do Assinante", url: "http://www.clubedoassinante.abril.com.br/" }
				]
			},
			{ groupName: "Gerenciamento",
				list:[	
					{ name: "Jenkins", url: "http://webhomolog:8300/" },
					{ name: "Nexus", url: "http://webhomolog:8081/nexus/index.html" },
					{ name: "Confluence", url: "http://confluence.abril.com.br" }
				]
			}];

$(document).ready(function() {
	tabFavsActivate();
});

function tabFavsActivate() {
	$.each(favs, function(i, k) {
		$('li#favs ul').append('<li class="subTitle">' + k.groupName + '</li>');
		$('li#favs ul').append('<li class="spaceLine"></li>');
		
		$.each(k.list, function(b, l) {
			$('li#favs ul').append('<li><a href="' + l.url + '" target="_blank">' + l.name + '</a></li>');
		});
		$('li#favs ul').append('<li class="space"></li>');
	});	
}