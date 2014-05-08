var instanceNames = new Array();
var isSacFrame = false;

$(document).ready(function() {

	chrome.windows.getCurrent(function(win) {
	
		try {		
			chrome.tabs.getAllInWindow(win.id, function(tabs) {
				$.each(tabs, function(index, tab) {			
				
					if (tab.active && tab.url.indexOf('abril') > 0) {
					
						doConfigSystem(tab.url);
						
						var title = tab.title,
							url = tab.url;
						
						if(isSacFrame){
							url = url.concat('abrilSac');
						}
						
						chrome.cookies.get({"url": url, "name": "JSESSIONID"}, function(cookie) {
							var currenteInstanceName = cookie.value.split(".")[1]						
						
							$('li#title').html(title);
							
							$.each(instanceNames, function(index2, instanceName) {
								htmlInstanceName = '';
								if (instanceName == currenteInstanceName) {
									htmlInstanceName = '<li class="active">' + currenteInstanceName + '</li>';
									
								} else {
									htmlInstanceName = '<li class="inactive">' + instanceName + '</li>';
								}
								
								$('li#instanceName ul').append(htmlInstanceName);
							});
							
						});
					}
				});					
			});
        }
        catch(e){
            console.debug(e);
        }
	});
	
	$('#refresh').on('click',clearCache);
});

function doConfigSystem(url) {

	// Instâncias do AssineAbril
	if (url.indexOf('assine.abril') > 0) {
		if (url.toLowerCase().indexOf('homolog') > 0 || url.toLowerCase().indexOf('jbhom') > 0 ) {
			instanceNames[0] = 'JBHOM01';
			instanceNames[1] = 'JBHOM02';
			instanceNames[2] = 'JBHOM06';
			instanceNames[3] = 'JBHOM07';
		} else {	
			instanceNames[0] = 'JBPRD01';
			instanceNames[1] = 'JBPRD02';
			instanceNames[2] = 'JBPRD06';
			instanceNames[3] = 'JBPRD07';
			instanceNames[4] = 'JBPRD19';
			instanceNames[5] = 'JBPRD20';
		}
	}
	
	// Instâncias do SAC Abril
	if (url.indexOf('sac.abril') > 0) {
		if (url.toLowerCase().indexOf('homolog') > 0 || url.toLowerCase().indexOf('jbhom') > 0 ) {
			instanceNames[0] = 'JBHOM03';
			instanceNames[1] = 'JBHOM08';
			instanceNames[2] = 'JBHOM11';
			instanceNames[3] = 'JBHOM23';
		} else {	
			instanceNames[0] = 'JBPRD23';
			instanceNames[1] = 'JBPRD34';

		}
		
		if(url.indexOf('abrilSac') < 0){
			isSacFrame = true;
		}
	}
	
	// Instâncias do Clube do Assinante
	if (url.indexOf('clubedoassinante.abril') > 0) {
		if (url.toLowerCase().indexOf('homolog') > 0 || url.toLowerCase().indexOf('jbhom') > 0 ) {
			instanceNames[0] = 'JBHOM04';
			instanceNames[1] = 'JBHOM09';
		} else {	
			instanceNames[0] = 'JBPRD04';
			instanceNames[1] = 'JBPRD09';
		}
	}
	
	// Instâncias de serviços e TOF
	if (url.indexOf('servicosass.abril') > 0 || url.indexOf('tof.abril') > 0) {
		if (url.toLowerCase().indexOf('homolog') > 0 || url.toLowerCase().indexOf('jbhom') > 0 ) {
			instanceNames[0] = 'JBHOM05';
			instanceNames[1] = 'JBHOM10';
			instanceNames[2] = 'JBHOM15';
			instanceNames[2] = 'JBHOM16';
		} else {	
		}
	}
}

function clearCache(event){
	event.preventDefault();
	console.log('teste');
}