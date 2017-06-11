describe('angular-utility-filters.uc-words module', function(){
    var $filter;
    beforeEach(module('angular-utility-filters.uc-words'));
    beforeEach(inject(function(_$filter_){
        $filter = _$filter_;
    }));
    it('should uppercase first letter of all words in a sentence', function(){
        expect($filter('ucWords')('hello world')).toBe('Hello World');
    });
});