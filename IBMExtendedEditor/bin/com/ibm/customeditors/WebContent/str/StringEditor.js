define([
	"dojo/aspect",
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dojo/text!./templates/StringEditor.html",
	"dijit/Dialog", // used in template
	"dijit/form/Button", // used in template
	"dijit/form/CheckBox", // used in template
	"dijit/form/TextBox", // used in template
	"idx/form/_CssStateMixin",
	"idx/form/_CompositeMixin",
	"idx/form/_ValidationMixin",
	"pvr/widget/editors/mixins/_EditorMixin"
], function(aspect, declare, lang, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, template, Dialog, Button, CheckBox, TextBox, _CssStateMixin, _CompositeMixin, _ValidationMixin, _EditorMixin)
{
	return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, _CssStateMixin, _CompositeMixin, _ValidationMixin, _EditorMixin], {

		templateString: template,
		baseClass: "StringEditor",
		oneuiBaseClass: "",

		postCreate: function(){
			aspect.after(this.selBtn, "onClick", lang.hitch(this, "onSel"));
			aspect.after(this.dlg, "onExecute", lang.hitch(this, "onOk"));
			this._event = { "input": "onChange", "blur": "_onBlur", "focus": "_onFocus" };
			this.inherited(arguments);
		},

		_setValueAttr: function(/*String*/val){
			// You MUST implement this method to communicate with the controller
			this.textbox.set("value", val);
		},

		_getValueAttr: function(){
			// You MUST implement this method to communicate with the controller
			return this.textbox.get("value");
		},

		onSel: function(){
			var values = this.get("value").split(/,/);
			this.dlg.set("value", {cb1:values});
			this.dlg.show();
		},

		onOk: function(){
			this.set("value", this.dlg.get("value").cb1.join(","));

			// Notify the controller that the value has been changed
			this.onChange();
		},

		onChange: function(){
			// A stub function to be connected to
		}

	});
});
