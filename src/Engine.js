'use strict';

var Engine = function () {

// private attributes and methods


    var board = new Array(6);
    var line, column;
    for (line=0; line < 6; line = line +1){
        board[line] = new Array(6)
    }

    this.check_length_board = function (){
        return board.length;
    };

    this.initialisation_board = function(){
        board[0][0] = "Black";
        board[2][4] = "Black";
        board[3][1] = "Black";
        board[4][3] = "Black";
        board[5][2] = "Black";
        board[5][5] = "Black";

        board[0][2] = "White";
        board[0][5] = "White";
        board[1][1] = "White";
        board[2][3] = "White";
        board[3][5] = "White";
        board[4][0] = "White";

        board[0][4] = "Red";
        board[1][3] = "Red";
        board[2][4] = "Red";
        board[3][0] = "Red";
        board[3][2] = "Red";
        board[5][3] = "Red";

        board[0][1] = "Green";
        board[1][2] = "Green";
        board[3][3] = "Green";
        board[4][1] = "Green";
        board[4][5] = "Green";
        board[5][4] = "Green";

        board[0][3] = "Blue";
        board[1][5] = "Blue";
        board[2][0] = "Blue";
        board[2][2] = "Blue";
        board[3][4] = "Blue";
        board[5][1] = "Blue";

        board[1][0] = "Yellow";
        board[1][4] = "Yellow";
        board[2][1] = "Yellow";
        board[4][2] = "Yellow";
        board[4][1] = "Yellow";
        board[5][0] = "Yellow";

        for (line=0; line < board.length();line = line+1){
            for (column = 0; column < board.height(); column = column +1){
                if (board[line-1] !== board[line] && board[line+1] !== board[line ){
                    if (board[column-1] !== board[column] && board[column+1] !== board[column]){
                        return true;
                    }
                }
                else
                {
                    return false;
                }
            }
        }
    }






// public methods
};
