Ext.define("francoTest.view.Main", {
  extend: "Ext.container.Container",
  requires: [
    "Ext.tab.Panel",
    "Ext.layout.container.Border",
    "francoTest.view.ExtraView",
    "francoTest.view.tree.tree",
    "francoTest.view.user.UserView",
    "francoTest.view.ExtraView",
  ],

  xtype: "app-main",

  layout: {
    type: "border",
  },

  items: [
    {
      region: "west",
      xtype: "treeView",
      title: "west",
      width: 150,
    },
    {
      region: "center",
      xtype: "tabpanel",
      items: [
        {
          title: "Listar",
          id: "userPanel",
          layout: {
            columns: 2,
          },
          items: [
            { xtype: "UserView" },
            {
              xtype: "button",
              id: "button1",
              text: "ClickMe",
            },
          ],
          margin: 10,
        },
        {
          title: "Users",
          id: "coolpanelTab",
          items: [
            {
              xtype: "coolpanel",
            },
          ],
        },
      ],
    },
  ],
});
