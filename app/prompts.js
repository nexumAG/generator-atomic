const prompts = {};

const cssFrameworkPreprocessors = {
  'Bootstrap 4 (SCSS)': 'scss',
  'Bootstrap 3 (LESS)': 'less'
};

prompts.main = [
  {
    type: 'input',
    name: 'projectName',
    message: 'Name your new project',
    default: this.appname
  },
  {
    type: 'input',
    name: 'namespace',
    message: 'Choose the JavaScript namespace (short, lowercase, no special-chars)'
  },
  {
    type: 'input',
    name: 'author',
    message: 'Who are you? (authors name)',
    store: true
  },
  {
    type: 'list',
    name: 'cssPreprocessor',
    message: 'Choose your CSS framework and pre-processor',
    choices: Object.keys(cssFrameworkPreprocessors),
    default: Object.keys(cssFrameworkPreprocessors)[0],
    filter: (val) => cssFrameworkPreprocessors[val]
  },
  {
    type: 'confirm',
    name: 'galen',
    message: 'Would you like to use Galen for layout testing?',
    default: false
  },
  {
    type: 'confirm',
    name: 'karma',
    message: 'Would you like to use Karma and Jasmine for running JavaScript unit tests?',
    default: false
  },
  {
    type: 'confirm',
    name: 'camelized',
    message: 'Would you like to camelize your component names?',
    default: true
  }
];

prompts.module = function(type) {
  return [
    {
      type: 'input',
      name: 'moduleName',
      message: `Name this ${type}`
    },
    {
      type: 'input',
      name: 'description',
      message: `Describe this ${type}`
    },
    {
      type: 'input',
      name: 'author',
      message: 'Who are you? (author)',
      store: true
    }
  ]
};

module.exports = prompts;
