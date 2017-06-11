/**
 * @copyright @murwa 2017
 */
(function () {
    angular.module('angular-utility-filters.domain', [])
        .filter('domain', [function () {
            return function (input, protocol) {
                var parser = document.createElement('a');
                if (protocol) {
                    input = protocol + input.replace(/www./, '');
                }
                parser.href = input;
                return parser.hostname.replace(/^www./, '');
            }
        }])
})(angular);
/**
 * Main module - depends on all other submodules
 * @copyright @murwa 2017
 */
(function (angular) {
    angular.module('angular-utility-filters', [
        'angular-utility-filters.str-limit',
        'angular-utility-filters.domain',
        'angular-utility-filters.uc-first',
        'angular-utility-filters.search-encode',
        'angular-utility-filters.search-decode',
        'angular-utility-filters.uc-words',
    ]);
})(angular)
/**
 * @copyright @murwa 2017
 */
(function (angular) {
    angular.module('angular-utility-filters.search-decode', [])
        .filter('searchDecode', [function () {
            return function (input) {
                return typeof input === 'string' ? input.replace(/\+/gm, ' ') : input;
            }
        }]);
})(angular)
/**
 * @copyright @murwa 2017
 */
(function (angular) {
    angular.module('angular-utility-filters.search-encode', [])
        .filter('searchEncode', [function () {
            return function (input) {
                return (typeof input === 'string' ? input.replace(/( )/gm, '+') : input).toLowerCase();
            }
        }])
})(angular);
/**
 * @copyright @murwa 2017
 */
(function (angular) {
    angular.module('angular-utility-filters.str-limit', [])
    .filter('strLimit', function () {
        return function (input, length, ellips) {
            if (!input) {
                return null;
            }
            if (!angular.isString(input) || !length || input.length <= length) {
                return input;
            }
            return input.substring(0, length) + (ellips || '...');
        }
    });
})(angular);
/**
 * @copyright @murwa 2017
 */
(function (angular) {
    angular.module('angular-utility-filters.uc-first', [])
        .filter('ucFirst', [function () {
            return function (input) {
                if (!input) {
                    return;
                }
                return input.charAt(0).toUpperCase() + input.slice(1)
            }
        }])
})(angular);
/**
 * @copyright @murwa 2017
 */
(function (angular) {
    angular.module('angular-utility-filters.uc-words', [])
        .filter('ucWords', function () {
            return function (input) {
                return angular.isString(input) ? input.replace(/^([a-z])|[\s|\t|\r|\n|\-|\.]+([a-z])/g, function (a) {
                    return a.toUpperCase();
                }) : input;
            };
        })
})(angular);