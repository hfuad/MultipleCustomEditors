define([
	"dojo/_base/declare",
	"ibm/ExtenedString"
], function(declare, ExtenedString) {
debugger;
	return {
		editors: {
			editorConfigs: {
				"ExtenedString": {
					label: "IBM Extended String",
					editorClass: ExtenedString
				}
			},
			mappings: {
				types: {
					"string": {
						single: {
							editorConfigs: [
								"ExtenedString"
							]
						}
					}
				}
			}
		}
	};
});
