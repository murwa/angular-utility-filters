/**
 * @copyright @murwa 2017
 */
angular.module('angular-utility-filters.uc-words', [])
    .filter('ucWords', function () {
        return function (input) {
            return angular.isString(input) ? input.replace(/^([a-z])|[\s|\t|\r|\n|\-|\.]+([a-z])/g, function (a) {
                return a.toUpperCase();
            }) : input;
        };
    })