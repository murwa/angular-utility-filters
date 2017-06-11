describe('angular-utility-filters.search-encode module', function(){
    var $filter;
    beforeEach(module('angular-utility-filters.search-encode'));
    beforeEach(inject(function(_$filter_){
        $filter = _$filter_;
    }));
    it('should replace white space with a plus sign', function(){
        var input = 'a fly';
        expect($filter('searchEncode')(input)).toBe('a+fly');
    });
});