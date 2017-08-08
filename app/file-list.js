const fileList = {};

fileList.static = function({cssPrecompiler}) {
  return [
    `app/0_basics/nx-helpers/nx-colorclasses.${cssPrecompiler}`,
    `app/0_basics/nx-helpers/nx-mediaqueries.${cssPrecompiler}`,
    `app/0_basics/nx-helpers/nx-radiocheckbox.${cssPrecompiler}`,
    `app/0_basics/nx-helpers/nx-spacerclasses.${cssPrecompiler}`,
    `app/0_basics/basics.yaml`,
    `app/0_basics/main.${cssPrecompiler}`,
    `app/0_basics/nojs.${cssPrecompiler}`,
    `app/0_basics/README.md`,
    `app/0_basics/variables.${cssPrecompiler}`,
    `app/0_basics/_default.pug`,
    `app/1_atoms`,
    `app/2_molecules`,
    `app/3_organisms`,
    `app/4_templates`,
    `app/5_pages`,
    `app/fonts`,
    `app/images`,
    `app/index.pug`,
    `tasks/babel.js`,
    `tasks/bump.js`,
    `tasks/changelog.js`,
    `tasks/clean.js`,
    `tasks/combine_mq.js`,
    `tasks/connect.js`,
    `tasks/copy.js`,
    `tasks/eslint.js`,
    `tasks/express.js`,
    `tasks/galenframework.js`,
    `tasks/htmlmin.js`,
    `tasks/imagemin.js`,
    `tasks/injector.js`,
    `tasks/karma.js`,
    `tasks/less.js`,
    `tasks/open.js`,
    `tasks/parallelize.js`,
    `tasks/postcss.js`,
    `tasks/pug.js`,
    `tasks/rev.js`,
    `tasks/sass.js`,
    `tasks/svgmin.js`,
    `tasks/usemin.js`,
    `tasks/useminPrepare.js`,
    `tasks/watch.js`,
    `tasks/wiredep.js`,
    `tests`,
    `.gitignore`,
    `.stylelintrc`,
    `.editorconfig`,
    `.eslintrc`,
    `Gruntfile.js`,
    `humans.txt`,
    `server.js`
  ];
};

fileList.templates = function() {
  return [
    `app/0_basics/controller.js`,
    `tasks/aliases.yaml`,
    `bower.json`,
    `package.json`,
    `README.md`
  ]
};

module.exports = fileList;
