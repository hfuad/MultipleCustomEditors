define([
	"dojo/_base/declare",
	"str/StringEditor",
	"ibm/ExtendedBooelan"
], function(declare, StringEditor,ExtendedBoolean) {
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
