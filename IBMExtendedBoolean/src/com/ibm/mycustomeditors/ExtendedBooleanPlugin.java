package com.ibm.mycustomeditors;
import java.util.Locale;
import com.ibm.ecm.extension.Plugin;

public class ExtendedBooleanPlugin extends Plugin {

	@Override
	public String getId() {
		return "ExtendedBooleanPlugin";
	}

	@Override
	public String getName(Locale arg0) {
		return "IBM Case Manager Custom Editor plug-in";
	}

	@Override
	public String getVersion() {
		return "1.0.0";
	}

	@Override
	public String getScript() {
		return "ExtendedBooleanPlugin.js";
	}


}
