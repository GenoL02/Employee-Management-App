import Controller from "sap/ui/core/mvc/Controller";
import ODataModel from "sap/ui/model/odata/v2/ODataModel";

/**
 * @namespace ui5.blocks.controller
 */
export default class Employees extends Controller {
  public onInit(): void {
    // Lấy ODataModel từ manifest
    const oModel = this.getOwnerComponent()?.getModel(
      "odataModel"
    ) as ODataModel;

    // Gắn model vào view
    this.getView()?.setModel(oModel);
  }
}
