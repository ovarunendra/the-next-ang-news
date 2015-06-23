describe('thenextangnewsapp homepage', function() {
    it('should have a title', function() {
        browser.get('https://thenextangnewsapp.firebaseapp.com');
        expect(browser.getTitle()).toEqual('https://thenextangnewsapp.firebaseapp.com/#/');
    });
});