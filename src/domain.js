/**
 * @copyright @murwa 2017
 */
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