
$(document).ready(function() {

	chrome.windows.getCurrent(function(win) {

		try {
			chrome.tabs.getAllInWindow(win.id, function(tabs) {
				$.each(tabs, function(index, tab) {

					if (tab.active && tab.url.indexOf('abril') > 0) {

						var instanceNames = doConfigSystem(tab.url);

						var title = tab.title;

						chrome.cookies.get({"url": tab.url, "name": "JSESSIONID"}, function(cookie) {
							var currentInstanceName = cookie.value.split(".")[1]

							$('li#title').html(title);

                            instanceFound = false;
                            if ( instanceNames.length > 0){
								$.each(instanceNames, function(index2, instanceName) {
									htmlInstanceName = '';

                                    if (instanceName == currentInstanceName) {
										htmlInstanceName = '<li class="active">' + currentInstanceName + '</li>';
                                        instanceFound = true;

									} else {
										htmlInstanceName = '<li class="inactive">' + instanceName + '</li>';
									}
							        $('li#instanceName ul').append(htmlInstanceName);

								});
							}

                            if ( !instanceFound ){
                                $('li#instanceName ul').append('<li class="active">' + currentInstanceName + '</li>');
                            }
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
