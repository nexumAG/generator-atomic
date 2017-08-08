const Generator = require('yeoman-generator');

module.exports = function(type) {
  const prompts = require('./prompts').module(type);

  return class extends Generator {
    prompting() {
      return this.prompt(
        prompts
      ).then((answers) => {
        this.saveConfig(answers);
      });
    }
  }
};
