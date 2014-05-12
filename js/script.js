
$(document).ready(function() {

	chrome.windows.getCurrent(function(win) {

		try {
			chrome.tabs.getAllInWindow(win.id, function(tabs) {
				$.each(tabs, function(index, tab) {

					if (tab.active && tab.url.indexOf('abril') > 0) {

						var instanceNames = doConfigSystem(tab.url);

						var title = tab.title;
						
						var url = doConfigUrl(tab.url);

						chrome.cookies.get({"url": url, "name": "JSESSIONID"}, function(cookie) {
							var currentInstanceName = cookie.value.split(".")[1]

							$('li#title').html(title);
							
							$.each(instanceNames, function(index2, instanceName) {
								htmlInstanceName = '';
								if (instanceName == currentInstanceName) {
									htmlInstanceName = '<li class="active">' + currentInstanceName + '&nbsp;<img src="../img/refresh.png" height="12" class="btnRefresh" /> </li> ';
									
								} else {
									htmlInstanceName = '<li class="inactive">' + instanceName + '</li>';
								}

							        $('li#instanceName ul').append(htmlInstanceName);

								});

							// Apaga cookie e dá refresh na página
							$('.btnRefresh').bind('click', function() {						
								chrome.cookies.remove({"url": tab.url, "name": "JSESSIONID"}, function() {
									chrome.tabs.reload(function() {
										setTimeout(function() { location.href = location.href; }, 3000);
									});
								});
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
});
	
function doConfigSystem(url) {

    instanceNames = new Array();

    isDev = url.toLowerCase().indexOf('desenv') > 0 || url.toLowerCase().indexOf('jbdev') > 0;
    isHomolog = url.toLowerCase().indexOf('homolog') > 0 || url.toLowerCase().indexOf('jbhom') > 0;

    environment = (isDev)?1:(isHomolog)?2:3;

    envDef = new Array();
    switch (environment){
        case 1:
            envDef = ARGOS.DESENV_SERVERS;
            break;
        case 2:
            envDef = ARGOS.HOMOLOG_SERVERS;
            break;
        case 3:
            envDef = ARGOS.PROD_SERVERS;
            break;

    }

	if (url.indexOf('assine.abril') > 0){
        instanceNames = envDef.ASSINE;
    } else if (url.indexOf('sac.abril') > 0){
        instanceNames = envDef.ABRILSAC;
    } else if (url.indexOf('clubedoassinante.abril') > 0){
        instanceNames = envDef.CLUBE;
    } else if (url.indexOf('servicosass.abril') > 0 || url.indexOf('tof.abril') > 0){
        instanceNames = envDef.SERVICOSASS;
    }

	return instanceNames;
}

function doConfigUrl(oldUrl) {

	newUrl = '';
	
	/*Criei essa verificação devido ao uso do elemento frame no index.html do Sac.
	 * Sendo assim, a menos que o complemento '/abrilSac' seja informado na url do site,
	 * não será possível recuperar o cookie e verificar a instância onde o sistema esta alocado.
	 */
	
    if (oldUrl.indexOf('sac.abril') > 0 && oldUrl.indexOf('abrilSac') < 0){
    	newUrl = oldUrl.concat('abrilSac');
    }else{
    	newUrl = oldUrl;
    }

	return newUrl;
}