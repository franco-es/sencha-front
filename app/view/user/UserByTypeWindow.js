Ext.define("francoTest.view.user.UserByTypeWindow", {
  extend: "Ext.window.Window",
  xtype: "userByTypeWindow",
  id: "userByTypeWindow",
  title: "Buscar",
  layout: "fit",
  autoshow: true,
  items: [
    {
      xtype: "userByTypeForm",
    },
  ],
});
