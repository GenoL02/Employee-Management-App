import Control from "sap/ui/core/Control";
import UIComponent from "sap/ui/core/UIComponent";
import XMLView from "sap/ui/core/mvc/XMLView";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";

/**
 * @namespace ui5
 */
export default class Component extends UIComponent {
  public static metadata = {
    interfaces: ["sap.ui.core.IAsyncContentCreation"],
    manifest: "json",
  };
  init(): void {
    // call the init function of the parent
    super.init();

    // set i18n model
    const i18nModel = new ResourceModel({
      bundleName: "ui5.i18n.i18n",
    });
    this.setModel(i18nModel, "i18n");

    // create the views based on the url/hash
    this.getRouter().initialize();
  }
}
