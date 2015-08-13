(function(window,document){
	'use strict';
    
    var urlPath = window.urlPath || (window.urlPath = {});
    
    urlPath.join = function(){
    	
        var args = Array.prototype.slice.call(arguments);
        
        var regexFormat = /^(.*):\/\//g;
        var protocol = args[0].match(regexFormat);
        args[0] = args[0].replace(regexFormat,'');
        
        var tokens = [];
        
        for(var i=0;i<args.length;i++){
            var parts = args[i].split('/');
            for(var j=0;j<parts.length;j++){
	         	if(parts[j]){
                    tokens.push(parts[j]);
                }
            }
        }
        return protocol + tokens.join('/');
    };
    
})(window,document);