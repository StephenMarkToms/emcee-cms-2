import pluginPkg from "../../package.json";
import ColorPicker from "./extensions/components/ColorPicker";

const name = pluginPkg.strapi.name;
const pluginId = "color-picker";

export default {
  register(app) {
    app.customFields.register({
      name: "color-picker",
      pluginId,
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

  bootstrap(app) {},
};
