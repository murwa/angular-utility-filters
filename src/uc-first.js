/**
 * @copyright @murwa 2017
 */
angular.module('angular-utility-filters.uc-first', [])
    .filter('ucFirst', [function () {
        return function (input) {
            if (!input) {
                return;
            }
            return input.charAt(0).toUpperCase() + input.slice(1)
        }
    }])