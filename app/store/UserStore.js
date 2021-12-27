Ext.define("francoTest.store.UserStore", {
  extend: "Ext.data.Store",
  id: "userStore",
  model: "francoTest.model.UserModel",
  proxy: {
    type: "ajax",
    url: "http://localhost:8080/users/",
    reader: {
      type: "json",
      root: "results",
    },
  },
  autoload: true,
});
