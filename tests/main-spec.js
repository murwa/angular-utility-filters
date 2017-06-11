describe('angular-utility-filters module', function(){
    var $filter;
    beforeEach(module('angular-utility-filters'));
    beforeEach(inject(function(_$filter_){
        $filter = _$filter_;
    }));
    it('should have domain filter', function(){
        expect($filter('domain')).toBeDefined();
    });
    it('should have search-decode filter', function(){
        expect($filter('searchDecode')).toBeDefined();
    });
    it('should have search-encode filter', function(){
        expect($filter('searchEncode')).toBeDefined();
    });
    it('should have str-limit filter', function(){
        expect($filter('strLimit')).toBeDefined();
    });
    it('should have uc-first filter', function(){
        expect($filter('ucFirst')).toBeDefined();
    });
    it('should have uc-words filter', function(){
        expect($filter('ucWords')).toBeDefined();
    });
});