define([
	"dojo/_base/declare",
	"dojo/has!icm-builder?icm/propsdesign/ui/registry/RegistryManager:icm/widget/properties/registry/RegistryManager",
	"./registry/RegistryConfiguration"
], function(declare, RegistryManager, registryConfig) {
	debugger;
	return declare(null, {
		// Bootstrap method.
		initialize: function() {
			// Merge the registry for the custom editor.
			RegistryManager.mergeConfiguration(registryConfig);
			// More initialization code as you need..
		}
	});
});
