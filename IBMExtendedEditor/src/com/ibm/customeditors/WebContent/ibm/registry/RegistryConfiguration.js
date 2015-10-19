define([
	"dojo/_base/declare",
	"ibm/ExtendedBooelan",
	"str/StringEditor"
], function(declare, ExtendedBooelan,StringEditor) {
debugger;
	return {
		editors: {
			editorConfigs: {
				"bln": {
					label: "IBM Extended Booelan",
					editorClass: ExtendedBooelan
				},
				"str": {
					label: "IBM Extended String Editor",
					editorClass: StringEditor
				}
			},
			mappings: {
				types: {
					"boolean": {
						single: {
							editorConfigs: [
								"bln"
							]
						}
					},
					"string": {
						single: {
							editorConfigs: [
								"str"
							]
						}
					}
				}
			}
		}
	};
});
