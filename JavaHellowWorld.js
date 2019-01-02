/* Generated from Java with JSweet 2.0.0 - http://www.jsweet.org */
var PracticeTest = (function () {
    function PracticeTest() {
    }
    PracticeTest.main = function (args) {
        console.info(PracticeTest.findNumber([2, 3, 4, 5, 2], 2));
    };
    PracticeTest.findNumber = function (arr, K) {
        for (var i = 0; i < arr.length; i++) {
            if (K === arr[i])
                return "YEST";
        }
        ;
        return "NO";
    };
    return PracticeTest;
}());
PracticeTest["__class"] = "PracticeTest";
PracticeTest.main(null);
