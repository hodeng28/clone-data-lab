const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        "@primary-color": "#333", // customize as needed
        "@link-color": "#333", // customize as needed
        "@font-size-base": "18px", // customize as needed
      },
    },
  })
);
