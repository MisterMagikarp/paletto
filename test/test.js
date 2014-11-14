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

PalettoTestCase.prototype.testStory3 = function (){
    var test = new Engine();
    test.initialisation();
    var column = "A";
    var line = 6;
    assertEquals(test.ascii_code(column),0);
    assertEquals(test.get_player(), 1);
    assertEquals(test.remove_piece(line,column, 1), true);
    assertEquals(test.piece_number_player(1), 1);
    assertEquals(test.get_piece_tray(), 35);
};

PalettoTestCase.prototype.testStory4 = function () {
    var test = new Engine();
    test.initialisation();
    test.remove_corner(5, 0);
    test.add_corner(5, 0);
    assertEquals(test.choice(), "Blue White BLack White Black");
    var line = 1;
    var column = "A";
    assertEquals(test.remove_piece(line, column, 2), true);
    line = 6;
    column = "F";
    assertEquals(test.remove_piece(line, column, 2), true);
    assertEquals(test.piece_number_player(2), 2);
};



}