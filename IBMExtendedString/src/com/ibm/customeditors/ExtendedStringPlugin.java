package com.ibm.customeditors;
import java.util.Locale;
import com.ibm.ecm.extension.Plugin;

public class ExtendedStringPlugin extends Plugin {

	@Override
	public String getId() {
		return "ExtendedStringPlugin";
	}

	@Override
	public String getName(Locale arg0) {
		return "IBM Case Manager Custom Editor plug-inString";
	}

	@Override
	public String getVersion() {
		return "1.0.0";
	}

	@Override
	public String getScript() {
		return "ExtendedStringPlugin.js";
	}


}
