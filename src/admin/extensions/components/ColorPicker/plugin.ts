import pluginPkg from "../../../../package.json";
import ColorPicker from "./index";
import pluginId from "./pluginId";

const name = pluginPkg.strapi.name;

export default {
  register(app: any) {
    app.customFields.register({
      name: "color-picker",
      pluginId: "color-picker",
      type: "string",
      intlLabel: {
        id: "color-picker.label",
        defaultMessage: "Color Picker",
      },
      intlDescription: {
        id: "color-picker.description",
        defaultMessage: "A color picker field",
      },
      components: {
        Input: ColorPicker,
      },
    });
  },

  bootstrap(app: any) {},
};
