import BlockBase from "sap/uxap/BlockBase";
import ViewType from "sap/ui/core/mvc/ViewType";

/**
 * @namespace ui5
 */
export default class Info2 extends BlockBase {
  public static metadata = {
    views: {
      Collapsed: {
        viewName: "ui5.SharedBlocks.Info.Info2",
        type: ViewType.XML,
      },
      Expanded: {
        viewName: "ui5.SharedBlocks.Info.Info2",
        type: ViewType.XML,
      },
    },
  };
}
