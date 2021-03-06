'use strict';

var OFF = 0;
var ERROR = 2;

var config = {
    env: {
        browser: false,
        node: true,
        es6: false
    },
    rules: {}
};

if (!process.env.NO_LINT) {
    // possible errors
    config.rules['no-cond-assign'] = ERROR;
    config.rules['no-console'] = OFF;
    config.rules['no-constant-condition'] = ERROR;
    config.rules['no-control-regex'] = ERROR;
    config.rules['no-debugger'] = ERROR;
    config.rules['no-dupe-args'] = ERROR;
    config.rules['no-dupe-keys'] = ERROR;
    config.rules['no-duplicate-case'] = ERROR;
    config.rules['no-empty'] = ERROR;
    config.rules['no-empty-character-class'] = ERROR;
    config.rules['no-ex-assign'] = ERROR;
    config.rules['no-extra-boolean-cast'] = ERROR;
    config.rules['no-extra-semi'] = ERROR;
    config.rules['no-func-assign'] = ERROR;
    // config.rules['one-var'] = [ERROR, 'always']; // TODO: var overlapping
    // this is for variable hoisting, not necessary if we use block scoped declarations
    // config.rules['no-inner-declarations'] = [ ERROR, 'both' ];
    config.rules['no-invalid-regexp'] = ERROR;
    config.rules['no-irregular-whitespace'] = ERROR;
    config.rules['no-negated-in-lhs'] = ERROR;
    config.rules['no-reserved-keys'] = OFF;
    config.rules['no-regex-spaces'] = ERROR;
    config.rules['no-sparse-arrays'] = ERROR;
    config.rules['no-unreachable'] = ERROR;
    config.rules['use-isnan'] = ERROR;
    config.rules['valid-jsdoc'] = [ ERROR, {
        'requireReturnDescription': false,
        'prefer': {
            'return': 'returns'
        }
    }];
    config.rules['valid-typeof'] = ERROR;

    // best practices
    config.rules['block-scoped-var'] = ERROR;
    config.rules['consistent-return'] = ERROR;
    config.rules['curly'] = OFF;
    config.rules['default-case'] = ERROR;
    config.rules['dot-notation'] = [ ERROR, { 'allowKeywords': true } ];
    config.rules['eqeqeq'] = ERROR;
    config.rules['guard-for-in'] = ERROR;
    config.rules['no-alert'] = ERROR;
    config.rules['no-caller'] = ERROR;
    config.rules['no-div-regex'] = ERROR;
    config.rules['no-eq-null'] = ERROR;
    config.rules['no-eval'] = ERROR;
    config.rules['no-extend-native'] = ERROR;
    config.rules['no-extra-bind'] = ERROR;
    config.rules['no-fallthrough'] = ERROR;
    config.rules['no-floating-decimal'] = ERROR;
    config.rules['no-implied-eval'] = ERROR;
    config.rules['no-iterator'] = ERROR;
    config.rules['no-labels'] = ERROR;
    config.rules['no-lone-blocks'] = ERROR;
    config.rules['no-loop-func'] = OFF;
    config.rules['no-multi-spaces'] = OFF;
    config.rules['no-multi-str'] = OFF;
    config.rules['no-native-reassign'] = ERROR;
    config.rules['no-new'] = OFF;
    config.rules['no-new-func'] = ERROR;
    config.rules['no-new-wrappers'] = ERROR;
    config.rules['no-octal'] = ERROR;
    config.rules['no-octal-escape'] = ERROR;
    config.rules['no-param-reassign'] = OFF;
    config.rules['no-proto'] = ERROR;
    config.rules['no-process-env'] = OFF;
    config.rules['no-redeclare'] = ERROR;
    config.rules['no-return-assign'] = ERROR;
    config.rules['no-script-url'] = ERROR;
    config.rules['no-self-compare'] = ERROR;
    config.rules['no-sequences'] = ERROR;
    config.rules['no-throw-literal'] = ERROR;
    config.rules['no-unused-expressions'] = ERROR;

    config.rules['no-warning-comments'] = [ 1 ];
    config.rules['no-with'] = ERROR;
    config.rules['radix'] = ERROR;
    config.rules['wrap-iife'] = ERROR;

    // strict mode
    config.rules['strict'] = [ ERROR, 'global' ];

    // variables
    config.rules['no-catch-shadow'] = ERROR;
    config.rules['no-delete-var'] = ERROR;
    config.rules['no-shadow'] = ERROR;
    config.rules['no-shadow-restricted-names'] = ERROR;
    config.rules['no-undef'] = ERROR;
    config.rules['no-undef-init'] = ERROR;
    config.rules['no-undefined'] = OFF;
    config.rules['no-unused-vars'] = [ ERROR, { 'vars': 'all', 'args': 'none' } ];
    config.rules['no-use-before-define'] = [ ERROR, 'nofunc' ];

    // node.js
    config.rules['handle-callback-err'] = [ ERROR, '^.*(e|E)rr' ];
    config.rules['no-mixed-requires'] = ERROR;
    config.rules['no-new-require'] = ERROR;
    config.rules['no-path-concat'] = OFF;
    config.rules['no-process-exit'] = OFF;
}

// stylistic.
if (!process.env.NO_STYLE) {
    // general rules
    config.rules['consistent-this'] = [ERROR, 'self'];

    // alignment rules
    config.rules['max-len'] = [ERROR, 80];
    config.rules['indent'] = [ERROR, 4];

    // newline on EOF
    config.rules['eol-last'] = [ERROR, 'always'];

    // disallow rules
    config.rules['no-implicit-coercion'] = ERROR;
    config.rules['no-mixed-spaces-and-tabs'] = ERROR;
    config.rules['no-trailing-spaces'] = ERROR;
    config.rules['no-array-constructor'] = ERROR;
    config.rules['no-nested-ternary'] = ERROR;
    config.rules['no-new-object'] = ERROR;
    config.rules['no-lonely-if'] = ERROR;
    config.rules['no-underscore-dangle'] = OFF;
    config.rules['no-whitespace-before-property'] = ERROR;
    config.rules['yoda'] = ERROR;
    // config.rules['func-names'] = ERROR;          // TODO: unnamed functions

    // require rules
    config.rules['semi'] = ERROR;
    config.rules['comma-dangle'] = ERROR;
    config.rules['key-spacing'] = ERROR;
    config.rules['new-cap'] = ERROR;
    config.rules['quotes'] = [ ERROR, 'single' ];
    config.rules['space-infix-ops'] = ERROR;
    config.rules['keyword-spacing'] = ERROR;
    config.rules['space-unary-ops'] = ERROR;
    config.rules['space-before-blocks'] = ERROR;
    config.rules['space-infix-ops'] = ERROR;
    config.rules['space-unary-ops'] = ERROR;
};

module.exports = config;
