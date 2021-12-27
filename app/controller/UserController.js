Ext.define("francoTest.controller.UserController", {
  extend: "Ext.app.Controller",
  stores: ["UserStore"],
  models: ["UserModel"],
  views: [
    "ExtraView",
    "user.UserView",
    "user.UserByTypeForm",
    "user.UserByTypeWindow",
  ],
  refs: [{ ref: "UserGrid", selector: "app-main > tabpanel #UserView" }],
  init: function () {
    var me = this;
    me.control({
      UserView: {
        render: me.onRendered,
      },
      "app-main > tabpanel > #userPanel > #button1": {
        click: me.onClickbutton,
      },
      "userByTypeForm button[action=save]": {
        click: me.search,
      },
    });
  },
  onLaunch: () => {},
  onRendered: function () {
    this.getUserGrid().getStore().load();
  },

  //show pop-up form
  onClickbutton: function () {
    var userByTypeDialog = Ext.widget("userByTypeWindow");
    userByTypeDialog.show();
  },

  search: function (button) {
    var letter = button.up("form").getForm();

    var opTitle = letter.getFieldValues();
    Ext.Ajax.request({
      url: `http://localhost:8080/users/allGa?type=${opTitle.opTitle}`,
      method: "GET",
      timeout: 60000,
      success: function (response) {
        var data = response.responseText;
        var dataJson = JSON.parse(data);
        console.info(dataJson);
        var user = dataJson.id;
        console.log(user);
        var userStore = Ext.getStore("UserStore");
        userStore.removeAll();
        dataJson.forEach((element) => {
          console.log(element);
          userStore.add({ id: element.id, login: element.user.login });
        });
        // var userByTypeDialog = Ext.widget("userByTypeWindow");
        // userByTypeDialog.close();
      },
      failure: function (response) {
        Ext.Msg.alert("Status", "Request Failed.");
      },
    });
  },
});
