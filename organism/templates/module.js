/**
 * @name Organism: <%= modulename %>
 * @description <%= description %>
 * @author <%= author %>
 * @see {@link http://github.com/documentation|GitHub}
 */
var <%= namespace %> = <%= namespace %> || {}; // get the apps namespace
<%= namespace %>.<%= modulenameCamelized %> = (function () {

  /**
   * @function privateFunctionExample
   * @description example private function
   * @param {string} name - The Name of who should be greeted.
   */
  function privateFunctionExample(name) {
    console.log('Organism "<%= modulename %>" was loaded: Hello ' + name);
  }

  /**
   * @function publicFunctionExample
   * @description example public function - made public through the return statement
   */
  function publicFunctionExample() {
  }

  /**
   * functions that should run at app-start
   * @constructor
   */
  privateFunctionExample('<%= author %>');

  return {
    // use the return statement to make variables and functions public
    publicFunctionExample: publicFunctionExample
  };

}());

/** Example Usage:
  <%= namespace %>.<%= modulenameCamelized %>.publicFunctionExample();
*/
