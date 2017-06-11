describe('angular-utility-filters.uc-first module', function(){
    var $filter;
    beforeEach(module('angular-utility-filters.uc-first'));
    beforeEach(inject(function(_$filter_){
        $filter = _$filter_;
    }));
    it('should change the first character of to uppercase', function(){
        expect($filter('ucFirst')('word')).toBe('Word');
    });
});