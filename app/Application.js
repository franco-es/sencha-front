Ext.define("francoTest.Application", {
  name: "francoTest",

  extend: "Ext.app.Application",

  views: [
    "user.UserView",
    "ExtraView",
    "user.UserByTypeForm",
    "user.UserByTypeWindow",
  ],

  controllers: ["UserController"],

  models: ["UserModel"],

  stores: ["UserStore"],
});
