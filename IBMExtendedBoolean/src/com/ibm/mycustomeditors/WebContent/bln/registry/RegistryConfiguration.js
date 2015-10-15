define([
	"dojo/_base/declare",
	"bln/ExtendedBoolean"
], function(declare, ExtendedBoolean) {

	return {
		editors: {
			editorConfigs: {
				"ExtendedBoolean": {
					label: "IBM Extended Boolean",
					editorClass: ExtendedBoolean
				}
			},
			mappings: {
				types: {
					"boolean": {
						single: {
							editorConfigs: [
								"ExtendedBoolean"
							]
						}
					}
				}
			}
		}
	};
});
