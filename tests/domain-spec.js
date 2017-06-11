describe('angular-utility-filters.domain module', function(){
    var $filter;
    beforeEach(module('angular-utility-filters.domain'));
    beforeEach(inject(function(_$filter_){
        $filter = _$filter_;
    }));
    it('should extract a domain name from string', function(){
        var input = 'https://example.com';
        expect($filter('domain')(input)).toBe('example.com');
    });
});