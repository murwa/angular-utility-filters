angular.module('str-limit', [])
    .filter('strLimit', ['$filter', function ($filter) {
        return function (input, length, ellipse) {
            if (!input || !angular.isString(input)) {
                return null;
            }
            return $filter('limitTo')(angular.copy(input), length) + (input && input.length > length ? (ellipse || '...') : '');
        }
    }]);