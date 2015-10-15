define([
	"dojo/_base/declare",
	"str/StringEditor"
], function(declare, StringEditor) {

	return {
		editors: {
			editorConfigs: {
				"StringEditor2": {
					label: "IBM Extended String Editor",
					editorClass: StringEditor
				}
			},
			mappings: {
				types: {
					"string": {
						single: {
							editorConfigs: [
								"StringEditor2"
							]
						}
					}
				}
			}
		}
	};
});
