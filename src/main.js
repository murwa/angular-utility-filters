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
})(angular);