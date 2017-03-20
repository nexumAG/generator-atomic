<a name"1.2.5"></a>
### 1.2.5 (2016-02-10)


#### Features

* **initialContent:** add Option to deactivate demo Content generation #30 Use the flag initialContent ([3a76b49a](https://github.com/nexumAG/generator-atomic/commit/3a76b49a))


<a name"1.2.4"></a>
### 1.2.4 (2016-02-01)


#### Bug Fixes

* **server.js:** remove unused code and fix yaml namespaces; use ES6 declarations ([aa7fe340](https://github.com/nexumAG/generator-atomic/commit/aa7fe340))


<a name"1.2.3"></a>
### 1.2.3 (2016-01-22)


#### Bug Fixes

* **stylelint:** add empty line before non-nested rule. ([86eac064](https://github.com/nexumAG/generator-atomic/commit/86eac064), closes [#48](https://github.com/nexumAG/generator-atomic/issues/48))


<a name"1.2.2"></a>
### 1.2.2 (2016-01-05)


#### Bug Fixes

* **subgenerator:** only call markup mixin if it exists. ([a65f366c](https://github.com/nexumAG/generator-atomic/commit/a65f366c))


<a name"1.2.1"></a>
### 1.2.1 (2015-12-18)


#### Bug Fixes

* **merge:** copy and test galenframework.js  instead of galen.js ([62b2789b](https://github.com/nexumAG/generator-atomic/commit/62b2789b))
* **prompts:** add missing space ([1155a852](https://github.com/nexumAG/generator-atomic/commit/1155a852))
* **subgenerators:**
  * replace hardcoded module types ([5615fcae](https://github.com/nexumAG/generator-atomic/commit/5615fcae))
  * replace hardcoded module types ([64a4e65d](https://github.com/nexumAG/generator-atomic/commit/64a4e65d))


<a name"1.2.0"></a>
## 1.2.0 (2015-12-14)


#### Bug Fixes

* **subgenerators:** always use camelized Modulenames in Pug / Less / Scss ([4f87db8a](https://github.com/nexumAG/generator-atomic/commit/4f87db8a))


#### Features

* **galen:** optimize galen usage ([8384bd48](https://github.com/nexumAG/generator-atomic/commit/8384bd48))


<a name"1.1.1"></a>
### 1.1.1 (2015-12-09)


#### Bug Fixes

* **test:** remove "waiting forever" from test run ([633b2bcc](https://github.com/nexumAG/generator-atomic/commit/633b2bcc))


#### Features

* **app:** command line options (used for travis) ([786ebe3c](https://github.com/nexumAG/generator-atomic/commit/786ebe3c))
* **galen:**
  * provide grunt lint, test and test:production targets ([da5822b9](https://github.com/nexumAG/generator-atomic/commit/da5822b9))
  * allow module specific galen tests (*.galen.js) ([bb9d9f8c](https://github.com/nexumAG/generator-atomic/commit/bb9d9f8c))
  * allow module specific galen tests (*.galen.js) ([8c2ab1a3](https://github.com/nexumAG/generator-atomic/commit/8c2ab1a3))
  * use latest grunt galen ([d95bcec5](https://github.com/nexumAG/generator-atomic/commit/d95bcec5))
* **injector:** generate cleaner galen tests ([f6c46a9c](https://github.com/nexumAG/generator-atomic/commit/f6c46a9c))
* **lodash:** bump lodash dependenciy ([d086f536](https://github.com/nexumAG/generator-atomic/commit/d086f536))
* **serve:** cleanup serve task ([d749fae6](https://github.com/nexumAG/generator-atomic/commit/d749fae6))


<a name"1.1.0"></a>
## 1.1.0 (2015-12-01)


#### Features

* **galen:** update to new grunt-galen version (based on galen 2) ([daa1fb66](https://github.com/nexumAG/generator-atomic/commit/daa1fb66))


<a name"1.0.6"></a>
### 1.0.6 (2015-11-30)


#### Bug Fixes

* **postcss:** correct postcss target src fpr server and dist ([e0720e0d](https://github.com/nexumAG/generator-atomic/commit/e0720e0d))
* **styles:** replace hard coded cssPreprocessor Extensions ([7db90cbf](https://github.com/nexumAG/generator-atomic/commit/7db90cbf))


<a name"1.0.5"></a>
### 1.0.5 (2015-11-28)


<a name"1.0.4"></a>
### 1.0.4 (2015-11-25)


#### Bug Fixes

* **galen:** revert to galen 1.6.x ([ad5788d4](https://github.com/nexumAG/generator-atomic/commit/ad5788d4))
* **injector:** fix wrong namespace cleaning ([18b2bb78](https://github.com/nexumAG/generator-atomic/commit/18b2bb78))


#### Features

* **generator:** correct copying of folder template paths ([d7b4db5a](https://github.com/nexumAG/generator-atomic/commit/d7b4db5a))


<a name"1.0.3"></a>
### 1.0.3 (2015-11-20)


#### Bug Fixes

* **specs:** fix galen spec files ([30cedc61](https://github.com/nexumAG/generator-atomic/commit/30cedc61))


<a name"1.0.2"></a>
### 1.0.2 (2015-11-19)


#### Bug Fixes

* **karma:** only generate unit tests if JS is generated ([ec2e2d8f](https://github.com/nexumAG/generator-atomic/commit/ec2e2d8f))
* **styles:** only copy the correct less/sass helperfiles ([474aa4f8](https://github.com/nexumAG/generator-atomic/commit/474aa4f8))


#### Features

* **galen:**
  * use new galen 2 spec language for demo spec files ([44d7ba1e](https://github.com/nexumAG/generator-atomic/commit/44d7ba1e))
  * allow galen tests during development with grunt galen:server ([7391ffd1](https://github.com/nexumAG/generator-atomic/commit/7391ffd1))


<a name"1.0.1"></a>
### 1.0.1 (2015-11-18)


#### Bug Fixes

* **galen:** correct config filename ([01dd896f](https://github.com/nexumAG/generator-atomic/commit/01dd896f))


#### Features

* **galen:** use newest version of galen ([5f4c1f05](https://github.com/nexumAG/generator-atomic/commit/5f4c1f05))
* **less:** output sourcemaps ([53403991](https://github.com/nexumAG/generator-atomic/commit/53403991))
* **subgenerator:** if no author is provided write "empty" ([2b2d6f6a](https://github.com/nexumAG/generator-atomic/commit/2b2d6f6a))
* **tasks:** remove unused tasks ([affa127e](https://github.com/nexumAG/generator-atomic/commit/affa127e))


<a name"1.0.0"></a>
## 1.0.0 (2015-11-18)


#### Bug Fixes

* **babel:** revert to babel v5 ([3fc55b62](https://github.com/nexumAG/generator-atomic/commit/3fc55b62))


#### Features

* **autoprefixer:** switch from grunt-autoprefixer to postcss ([4d10c009](https://github.com/nexumAG/generator-atomic/commit/4d10c009))
* **bower:** update dependencies, preinstall underscore ([48fb59b3](https://github.com/nexumAG/generator-atomic/commit/48fb59b3))
* **controller:** switch to const namespace declaration ([54e30e25](https://github.com/nexumAG/generator-atomic/commit/54e30e25))
* **csscomb:**
  * better sort order (support flexbox etc) ([f689c66d](https://github.com/nexumAG/generator-atomic/commit/f689c66d))
  * better sort order (support flexbox etc) ([6b158983](https://github.com/nexumAG/generator-atomic/commit/6b158983))
* **dependencies:** update dependencies ([c89aae9b](https://github.com/nexumAG/generator-atomic/commit/c89aae9b))
* **es6:**
  * arrow functions for unit tests ([7b1444b2](https://github.com/nexumAG/generator-atomic/commit/7b1444b2))
  * use arrow functions in unit tests ([53bd278e](https://github.com/nexumAG/generator-atomic/commit/53bd278e))
  * stronger eslint rules and cleanup es5 code ([330a7af8](https://github.com/nexumAG/generator-atomic/commit/330a7af8))
* **eslint:**
  * update eslintrc ([72670719](https://github.com/nexumAG/generator-atomic/commit/72670719))
  * update eslint ([58335983](https://github.com/nexumAG/generator-atomic/commit/58335983))
  * stronger eslint rules ([f3b05798](https://github.com/nexumAG/generator-atomic/commit/f3b05798))
* **express-server:**
  * modified index.js for task & server.js copy ([9d1f8668](https://github.com/nexumAG/generator-atomic/commit/9d1f8668))
  * add express-server tasks ([7900dab1](https://github.com/nexumAG/generator-atomic/commit/7900dab1))
  * add express-server component ([db13578b](https://github.com/nexumAG/generator-atomic/commit/db13578b))
* **generator:**
  * add new files to package.json ([f2bdca3e](https://github.com/nexumAG/generator-atomic/commit/f2bdca3e))
  * centralize template storage, reuse generator function, unify tests, allow genera ([4a464251](https://github.com/nexumAG/generator-atomic/commit/4a464251))
* **js:** use strict mode function based not filebased ([56534143](https://github.com/nexumAG/generator-atomic/commit/56534143))
* **less:** output sourcemaps ([a0e99ba2](https://github.com/nexumAG/generator-atomic/commit/a0e99ba2))
* **lint:** suit new linters ([bb470f5f](https://github.com/nexumAG/generator-atomic/commit/bb470f5f))
* **npm:** update dependencies ([50a3ced3](https://github.com/nexumAG/generator-atomic/commit/50a3ced3))
* **package.json:** default license field ([467d9c24](https://github.com/nexumAG/generator-atomic/commit/467d9c24))
* **sass:** enable sass sourcemap generation ([0d9669af](https://github.com/nexumAG/generator-atomic/commit/0d9669af))
* **stylelint:**
  * add stylelinter ([0fe8c3a3](https://github.com/nexumAG/generator-atomic/commit/0fe8c3a3))
  * add stylesheet code style checker stylelint ([ee419886](https://github.com/nexumAG/generator-atomic/commit/ee419886))
  * add stylesheet code style checker stylelint ([ff7a040e](https://github.com/nexumAG/generator-atomic/commit/ff7a040e))
* **watch:**
  * optimize watch task ([1d534eae](https://github.com/nexumAG/generator-atomic/commit/1d534eae))
  * clean up watch task ([c94d4359](https://github.com/nexumAG/generator-atomic/commit/c94d4359))


<a name"1.0.0-0"></a>
### 1.0.0-0 (2015-10-30)


#### Features

* **autoprefixer:** switch from autoprefixer to postCSS autoprefixer ([af70b50d](https://github.com/nexumAG/generator-atomic/commit/af70b50d))
* **bootstrap:** outsource bootstrap less files to bower ([28f5b9eb](https://github.com/nexumAG/generator-atomic/commit/28f5b9eb))
* **release:** add beta tag to prereleases ([d50d5d5b](https://github.com/nexumAG/generator-atomic/commit/d50d5d5b))
* **sass:**
  * update injector ([c0faa07a](https://github.com/nexumAG/generator-atomic/commit/c0faa07a))
  * copy new scss files ([5d486115](https://github.com/nexumAG/generator-atomic/commit/5d486115))
  * change npm packages to install ([e27dfdd6](https://github.com/nexumAG/generator-atomic/commit/e27dfdd6))
  * remove unused grunt configs ([d80cfadd](https://github.com/nexumAG/generator-atomic/commit/d80cfadd))
  * update the build chain ([d2644c88](https://github.com/nexumAG/generator-atomic/commit/d2644c88))
  * new sass grunt task ([380e02bb](https://github.com/nexumAG/generator-atomic/commit/380e02bb))
  * use the latest Bootstrap4 sass based version ([b9dd0188](https://github.com/nexumAG/generator-atomic/commit/b9dd0188))
  * convert less files to sass ([7b4c5daf](https://github.com/nexumAG/generator-atomic/commit/7b4c5daf))
  * remove old less files ([185e3852](https://github.com/nexumAG/generator-atomic/commit/185e3852))
* **sourcemaps:** copy sourcemaps to dist ([9157496e](https://github.com/nexumAG/generator-atomic/commit/9157496e))


<a name"0.6.1"></a>
### 0.6.1 (2015-10-28)


#### Bug Fixes

* **autoprefixer:** rename default task ([66ae6820](https://github.com/nexumAG/generator-atomic/commit/66ae6820))
* **injector:** remove unit tests from build ([59ee496d](https://github.com/nexumAG/generator-atomic/commit/59ee496d))
* **karma:** correct copying of karma config ([caf4822e](https://github.com/nexumAG/generator-atomic/commit/caf4822e))


#### Features

* **democode:** add use strict to js demo code ([a37446ea](https://github.com/nexumAG/generator-atomic/commit/a37446ea))
* **karma:** switch from chrome to phantomJS ([c10d7dec](https://github.com/nexumAG/generator-atomic/commit/c10d7dec))
* **travis:** add travis build status icon ([1a78644f](https://github.com/nexumAG/generator-atomic/commit/1a78644f))
* **unittests:** add globals ignores to unit test demos ([7ec508d4](https://github.com/nexumAG/generator-atomic/commit/7ec508d4))
* **watch:** improve watch speed. Do Karma on js change ([c48c1764](https://github.com/nexumAG/generator-atomic/commit/c48c1764))


<a name"0.6.0"></a>
## 0.6.0 (2015-10-27)


#### Bug Fixes

* **karma:** fix copy command (add dot) ([036007d7](https://github.com/nexumAG/generator-atomic/commit/036007d7))


#### Features

* **democode:** provide unit testable demo code ([bbed7aa9](https://github.com/nexumAG/generator-atomic/commit/bbed7aa9))
* **karma:**
  * default green unit tests ([5f9f757f](https://github.com/nexumAG/generator-atomic/commit/5f9f757f))
  * exclude unit tests from babel ([10ae4230](https://github.com/nexumAG/generator-atomic/commit/10ae4230))
  * copy karma task ([7be69acf](https://github.com/nexumAG/generator-atomic/commit/7be69acf))
  * add karma unit tests ([53f227f4](https://github.com/nexumAG/generator-atomic/commit/53f227f4))
  * add karma unit tests ([6900b783](https://github.com/nexumAG/generator-atomic/commit/6900b783))
* **namespace:** use camelized namespacing in Pug ([bf7e2ce2](https://github.com/nexumAG/generator-atomic/commit/bf7e2ce2))


<a name"0.5.0"></a>
## 0.5.0 (2015-10-27)



<a name"0.4.7"></a>
### 0.4.7 (2015-10-27)


#### Features

* **release:** commit new changelog on release ([2abf5883](https://github.com/nexumAG/generator-atomic/commit/2abf5883))


<a name"0.4.6"></a>
### 0.4.6 (2015-10-27)


#### Bug Fixes

* **release:**
  * remove bower from release task ([cd045d9e](https://github.com/nexumAG/generator-atomic/commit/cd045d9e))
  * fix release task ([1905bebe](https://github.com/nexumAG/generator-atomic/commit/1905bebe))


<a name"0.4.5"></a>
### 0.4.5 (2015-10-27)


#### Bug Fixes

* **release:** fix release task ([1905bebe](https://github.com/nexumAG/generator-atomic/commit/1905bebe))
