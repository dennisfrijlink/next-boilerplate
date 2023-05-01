const path = require("path");

/** @type {import("next-i18next").UserConfig} */
module.exports = {
  i18n: {
    locales: ["en", "nl"],
    defaultLocale: "en",
  },
  localePath: path.resolve("./src/locales"),
  defaultNS: "common",
};
