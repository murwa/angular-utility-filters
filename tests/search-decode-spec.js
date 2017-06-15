describe('angular-utility-filters.search-decode module', function(){
    var $filter;
    beforeEach(module('angular-utility-filters.search-decode'));
    beforeEach(inject(function(_$filter_){
        $filter = _$filter_;
    }));
    it('should replace unwanted characters with whitespace', function(){
        var input = 'a+fly-is-smilling,happily';
        expect($filter('searchDecode')(input)).toBe('a fly is smilling happily');
    });
});