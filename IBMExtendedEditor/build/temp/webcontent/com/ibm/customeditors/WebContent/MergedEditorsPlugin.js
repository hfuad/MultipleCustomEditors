require([
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/dom-construct",
	"dojo/sniff",
	"dojo/promise/all",
	"dojo/Deferred"
], function(lang, array, domConstruct, sniff, all, Deferred) {

	debugger;
	var extensions = [
		{
			packages:
			{
				"str": "/navigator/plugin/MergedEditorsPlugin/getResource/str",
				"ibm": "/navigator/plugin/MergedEditorsPlugin/getResource/ibm"
			},
			css: [
			    "/navigator/plugin/MergedEditorsPlugin/getResource/str/resources/StringEditor.css",
				"/navigator/plugin/MergedEditorsPlugin/getResource/ibm/resources/ExtendedBooelan.css"
			],
			bootstrapModule: "plugin/MergedEditorsPlugin/getResource/InitializerMerged",
			bootstrapMethod: "initialize"
		}
	]; // End of extension definitions.



	// !!! DO NOT MODIFY THE CODE BELOW !!!
	// Load the extension packages
	var promises = [];
	array.forEach(extensions, function(extension) {
		if (extension.packages) {
			// Set up the promise;
			var deferred = new Deferred();
			promises.push(deferred.promise);
			debugger;
			// Load the module packages.
			require({
				paths: extension.packages
			});

			// Load the stylesheets.
			array.forEach(extension.css, function(url) {
				debugger;
				if (sniff("ie")) {
					document.createStyleSheet(url);
				} else {
					domConstruct.create("link", {
						rel: "stylesheet",
						type: "text/css",
						href: url
					}, document.getElementsByTagName("head")[0]);
				}
			});

			// Call the bootstrap method.
			if (extension.bootstrapModule && extension.bootstrapMethod) {
				require([extension.bootstrapModule], function(bootstrapClass) {
					debugger;
					var bootstrap = new bootstrapClass();
					if (lang.isFunction(bootstrap[extension.bootstrapMethod])) {
						bootstrap[extension.bootstrapMethod]();
						deferred.resolve();
					} else {
						deferred.resolve();
					}

				});
			} else {
				deferred.resolve();
			}
		}
	});
	all(promises);
});

