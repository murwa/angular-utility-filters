/**
 * @copyright @murwa 2017
 */
(function (angular) {
    angular.module('angular-utility-filters.search-encode', [])
        .provider('$searchEncode', function () {
            /**
             * Default encode character
             */
            var encodeCharacter = '+';
            /**
             * Set encode character
             * @param {string}
             * @return {*}
             */
            this.setEncodeCharacter = function (value) {
                encodeCharacter = value;
                return this;
            }

            /**
             * Provider's $get property
             */
            this.$get = [function () {
                return new SearchEncodeService(encodeCharacter);
                /**
                 * Search endcode service
                 *
                 * @param {*} value 
                 */
                function SearchEncodeService(value) {
                    this.getEncodeCharacter = function () {
                        return value;
                    }
                }
            }];

        })
        .filter('searchEncode', ['$searchEncode', function ($searchEncode) {
            return function (input) {
                return (typeof input === 'string' ? input.replace(/( )/gm, $searchEncode.getEncodeCharacter()) : input).toLowerCase();
            }
        }])
})(angular);