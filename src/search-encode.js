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