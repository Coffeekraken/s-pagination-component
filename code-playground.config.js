module.exports = {
  // server port
  port: 3000,

  // title
  title: "s-pagination-component",

  // layout
  layout: "right",

  // compile server
  compileServer: {
    // compile server port
    port: 4000
  },

  // editors
  editors: {
    html: {
      language: "html",
      data: `
        <s-pagination pages="50" current="5" limit="5"></s-pagination>

        <br />
        <br />

        <s-pagination
          pages="50"
          current="5"
          limit="7"
          color="primary"
        ></s-pagination>

        <br />
        <br />

        <s-pagination
          style="font-size:10px"
          pages="50"
          current="5"
          limit="15"
          color="secondary"
        ></s-pagination>
      `
    },
    css: {
      language: "scss",
      data: `
        @import 'node_modules/coffeekraken-sugar/index';
        @import 'node_modules/coffeekraken-s-typography-component/index';
        @include s-init();
        @include s-classes();
        @include s-typography-classes();
        body {
          padding: s-space(bigger);
        }
        @import 'index';
        @include s-pagination-classes();
      `
    },
    js: {
      language: "js",
      data: `
        import SPaginationComponent from './dist/index'
      `
    }
  }
}
