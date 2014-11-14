'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {
    var test = new Engine();
    test.initialisation();
    assertEquals(test.check_length_board(),36);
    assertNotEquals(test.juxtaposition(),0);

};


PalettoTestCase.prototype.testStory2 = function () {
    var test = new Engine();
    test.initialisation();
    var column = "A";
    var line = 6;
    assertEquals(test.ascii_code(column), 0);
    assertEquals(test.get_player(), 1);
    assertEquals(test.remove_piece(line, column, 1), true);
};

