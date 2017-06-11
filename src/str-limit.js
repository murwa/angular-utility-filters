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