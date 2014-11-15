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
    assertEquals(test.choice(), "Blue White Black White Black ");
    var line = 1;
    var column = "A";
    assertEquals(test.remove_piece(line, column, 2), true);
    line = 6;
    column = "F";
    assertEquals(test.remove_piece(line, column, 2), true);
    assertEquals(test.piece_number_player(2), 2);
};


PalettoTestCase.prototype.testStory6 = function (){
    var test = new Engine();
    test.initialisation();

    var column = "A";
    var line = 1;
    assertEquals(test.remove_piece(line,column,test.get_player()),true);
    assertEquals(test.win(),0);
    column = "F";
    line = 6;
    assertEquals(test.remove_piece(line,column,test.get_player()),true);
    assertEquals(test.win(),0);


    var player = test.get_player();
    assertNotEquals(test.change_player(),player);

    column = "B";
    line = 1;
    assertEquals(test.remove_piece(line,column,test.get_player()),true);
    assertEquals(test.win(),0);
    column = "E";
    line = 6;
    assertEquals(test.remove_piece(line,column,test.get_player()),true);
    assertEquals(test.win(),0);
    column = "F";
    line = 5;
    assertEquals(test.remove_piece(line,column,test.get_player()),true);
    assertEquals(test.win(),0);


    player = test.get_player();
    assertNotEquals(test.change_player(),player);

    column = "A";
    line = 2;
    assertEquals(test.remove_piece(line,column,test.get_player()),true);
    assertEquals(test.win(),0);
    column = "A";
    line = 6;
    assertEquals(test.remove_piece(line,column,test.get_player()),true);
    assertEquals(test.win(),0);

    player = test.get_player();
    assertNotEquals(test.change_player(),player);

    column = "A";
    line = 3;
    assertEquals(test.remove_piece(line,column,test.get_player()),true);
    assertEquals(test.win(),0);

    player = test.get_player();
    assertNotEquals(test.change_player(),player);

    column = "A";
    line = 5;
    assertEquals(test.remove_piece(line,column,test.get_player()),true);
    assertEquals(test.win(),0);
    column = "F";
    line = 4;
    assertEquals(test.remove_piece(line,column,test.get_player()),true);
    assertEquals(test.win(),0);
    column = "F";
    line = 1;
    assertEquals(test.remove_piece(line,column,test.get_player()),true);
    assertEquals(test.win(),0);
    column = "C";
    line = 1;
    assertEquals(test.remove_piece(line,column,test.get_player()),true);
    assertEquals(test.win(),0);

    player = test.get_player();
    assertNotEquals(test.change_player(),player);

    column = "E";
    line = 1;
    assertEquals(test.remove_piece(line,column,test.get_player()),true);
    assertEquals(test.win(),0);
    column = "F";
    line = 3;
    assertEquals(test.remove_piece(line,column,test.get_player()),true);
    assertEquals(test.win(),0);
    column = "D";
    line = 6;
    assertEquals(test.remove_piece(line,column,test.get_player()),true);
    assertEquals(test.win(),0);
    column = "A";
    line = 4;
    assertEquals(test.remove_piece(line,column,test.get_player()),true);
    assertEquals(test.win(),0);

    player = test.get_player();
    assertNotEquals(test.change_player(),player);

    column = "D";
    line = 3;
    assertEquals(test.remove_piece(line,column,test.get_player()),true);
    assertEquals(test.win(),0);
    column = "F";
    line = 2;
    assertEquals(test.remove_piece(line,column,test.get_player()),true);
    assertEquals(test.win(),0);
    column = "B";
    line = 6;
    assertEquals(test.remove_piece(line,column,test.get_player()),true);
    assertEquals(test.win(),0);

    player = test.get_player();
    assertNotEquals(test.change_player(),player);

    column = "B";
    line = 3;
    assertEquals(test.remove_piece(line,column,test.get_player()),true);
    assertEquals(test.win(),0);
    column = "E";
    line = 2;
    assertEquals(test.remove_piece(line,column,test.get_player()),true);
    assertEquals(test.win(),0);
    column = "E";
    line = 5;
    assertEquals(test.remove_piece(line,column,test.get_player()),true);
    assertEquals(test.win(),0);

    player = test.get_player();
    assertNotEquals(test.change_player(),player);

    column = "B";
    line = 4;
    assertEquals(test.remove_piece(line,column,test.get_player()),true);
    assertEquals(test.win(),0);
    column = "C";
    line = 6;
    assertEquals(test.remove_piece(line,column,test.get_player()),true);
    assertEquals(test.win(),0);
    column = "D";
    line = 5;
    assertEquals(test.remove_piece(line,column,test.get_player()),true);
    assertEquals(test.win(),0);
    column = "E";
    line = 3;
    assertEquals(test.remove_piece(line,column,test.get_player()),true);
    assertEquals(test.win(),1);


}