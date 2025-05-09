import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @name ui5.controller.App
 */
export default class AppController extends Controller {
  onInit(): void {
    // Tạo viewModel để quản lý input riêng
    const oViewModel = new JSONModel({
      newTodo: "",
    });
    this.getView()?.setModel(oViewModel, "view");
  }
}
