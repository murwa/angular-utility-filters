describe('str-limit module', function(){
    beforeEach(module('str-limit'));
    var $filter;
    beforeEach(inject(function(_$filter_){
        $filter = _$filter_;
    }))
    it('should truncate a string', function(){
        var input = 'This is a string';
        expect($filter('strLimit')(input, 10)).toBe(input.substr(0, 10) + '...');
    });
    it('should truncate a string and user ellips', function(){
        var input = 'This is a string',
        ellips = '###';
        expect($filter('strLimit')(input, 10, ellips)).toBe(input.substr(0, 10) + ellips);
    });
});