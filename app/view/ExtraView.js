Ext.define("francoTest.view.ExtraView", {
  extend: "Ext.container.Container",
  requires: ["Ext.layout.container.Table", "francoTest.view.user.UserAdd"],
  xtype: "coolpanel",
  layout: {
    type: "table",
    columns: 3,
    tdAttrs: { style: "padding: 10px;" },
  },

  defaults: {
    xtype: "panel",
  },
  items: [
    {
      xtype: "userAddForm",
    },
    {
      items: [
        {
          xtype: "UserView",
          width: 600,
          height: "auto",
          // padding: 30,
          // bodyPadding: 30,
        },
        {
          xtype: "button",
          // id: "button1",
          text: "ClickMe",
          margin: 15,
        },
      ],
    },
    // {
    //   title: "Header Icons",
    //   tools: [
    //     { type: "pin" },
    //     { type: "refresh" },
    //     { type: "search" },
    //     { type: "save" },
    //   ],
    //   html: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui hic, est facilis dolores illum fuga quod! Enim laudantium, non, animi labore eveniet alias aliquid veniam voluptatibus tenetur in modi eos. \
    //   A porro neque aut, quam soluta fugit maxime est voluptates veritatis natus explicabo quod odit, magnam inventore obcaecati repellendus eligendi nulla exercitationem eum quas sint animi, assumenda vel. Fuga, nihil. \
    //   Pariatur minus odio temporibus odit nihil autem reprehenderit eveniet nesciunt sed fugit itaque nemo aliquam iste ipsam, aperiam non quis tempore obcaecati consequuntur ratione sunt nam asperiores exercitationem? Est, aperiam \
    //   Eum quo tempore debitis maiores alias nisi iure, explicabo esse quas dignissimos! Quam officia architecto esse voluptates, possimus sint sunt corrupti quod, laudantium pariatur asperiores illo, rem eligendi enim eum.\
    //   Pariatur voluptatibus ad, animi accusamus adipisci aperiam aliquid ullam, aspernatur odit in corrupti reiciendis harum libero. Autem id aspernatur delectus, earum doloribus numquam. Labore ipsa ipsam, asperiores incidunt eligendi corporis.</p>",
    // },
    // {
    //   title: "Collapsed Panel",
    //   collapsed: true,
    //   collapsible: true,
    //   width: 640,
    //   html: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui hic, est facilis dolores illum fuga quod! Enim laudantium, non, animi labore eveniet alias aliquid veniam voluptatibus tenetur in modi eos. \
    //   A porro neque aut, quam soluta fugit maxime est voluptates veritatis natus explicabo quod odit, magnam inventore obcaecati repellendus eligendi nulla exercitationem eum quas sint animi, assumenda vel. Fuga, nihil. \
    //   Pariatur minus odio temporibus odit nihil autem reprehenderit eveniet nesciunt sed fugit itaque nemo aliquam iste ipsam, aperiam non quis tempore obcaecati consequuntur ratione sunt nam asperiores exercitationem? Est, aperiam \
    //   Eum quo tempore debitis maiores alias nisi iure, explicabo esse quas dignissimos! Quam officia architecto esse voluptates, possimus sint sunt corrupti quod, laudantium pariatur asperiores illo, rem eligendi enim eum.\
    //   Pariatur voluptatibus ad, animi accusamus adipisci aperiam aliquid ullam, aspernatur odit in corrupti reiciendis harum libero. Autem id aspernatur delectus, earum doloribus numquam. Labore ipsa ipsam, asperiores incidunt eligendi corporis.</p>",
    //   colspan: 3,
    // },
  ],
});
