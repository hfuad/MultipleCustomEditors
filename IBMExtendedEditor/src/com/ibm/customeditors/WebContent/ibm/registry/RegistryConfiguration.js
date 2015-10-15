define([
	"dojo/_base/declare",
	"ibm/ExtendedBooelan"
], function(declare, ExtendedBooelan) {

	return {
		editors: {
			editorConfigs: {
				"ExtendedBooelan2": {
					label: "IBM Extended Booelan",
					editorClass: ExtendedBooelan
				}
			},
			mappings: {
				types: {
					"boolean": {
						single: {
							editorConfigs: [
								"ExtendedBooelan2"
							]
						}
					}
				}
			}
		}
	};
});
