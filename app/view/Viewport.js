Ext.define("francoTest.view.Viewport", {
  extend: "Ext.container.Viewport",
  requires: ["Ext.layout.container.Fit", "francoTest.view.Main"],

  layout: {
    type: "fit",
  },

  items: [
    {
      xtype: "app-main",
    },
  ],
});
