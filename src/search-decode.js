angular.module('angular-utility-filters.search-decode', [])
    .filter('searchDecode', [function () {
        return function (input) {
            return typeof input === 'string' ? input.replace(/\+/gm, ' ') : input;
        }
    }]);