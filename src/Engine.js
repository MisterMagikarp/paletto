'use strict';

var Engine = function () {

// private attributes and methods

    var player;
    var player1 = new Array(0);
    var player2 = new Array(0);
    var player1_piece;
    var player2_piece;
    var corner = new Array(0);
    var corner_color = new Array(6);

    var board = new Array(6);
    var line, column;
    for (line = 0; line < 6; line = line + 1) {
        board[line] = new Array(6)
    }

    this.initialisation = function () {
        this.initialisation_player();
        this.initialisation_board();
    };

    this.get_player = function () {
        return player;
    };

    this.check_length_board = function () {
        return ((board.length) * (board.length));
    };

    this.initialisation_player = function () {
        player = 1;
        player1_piece = 0;
        player2_piece = 0;
        corner.push("A6", "A1", "F1", "F6");
    };

    this.initialisation_board = function () {
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

    };

    this.juxtaposition = function () {
        var juxtaposition = 0;
        var line = 1;

        do {
            for (column = 1; column < board.length - 2; column = column + 1) {
                if ((board[line][column] == board[line + 1][column]) || (board[line][column] == board[line - 1][column]) || (board[line][column] == board[line][column + 1]) || (board[line][column] == board[line][column - 1])) {
                    juxtaposition = 1;
                }
            }

            line = line + 1;

        } while (line < 5);
        return juxtaposition;

    };

    this.ascii_code = function (column) {
        return column.charCodeAt(0) - 65;
    };

    this.remove_piece = function (line, column, player) {
        var done = false;
        column = this.ascii_code(column);

        if (board[line - 1][column] != -1) {
            done = true;
            var piece = board[line - 1][column];
            board[line - 1][column] = -1;
            if (player == 1) {
                player1.unshift(piece);
                player1_piece = player1_piece + 1;
            }
            else {
                player2.unshift(piece);
                player2_piece = player2_piece + 1;
            }
            if (this.remove_corner(line - 1, column) == 0) {
                this.add_corner(line - 1, column);
            }
        }

        return done;
    };

    this.piece_number_player = function (player) {
        if (player == 1) {
            return player1_piece;
        }
        else if (player == 2) {
            return player2_piece;
        }
        return 0;
    };

    this.get_piece_tray = function () {
        var total = 0;
        for (line = 0; line < 6; line = line + 1) {
            for (column = 0; column < 6; column = column + 1) {
                if (board[line][column] != -1) {
                    total++;
                }
            }
        }
        return total;
    };

    this.neighbor = function (line, column) {
        var nb_neighbor = 0;
        if (board[line - 1][column] != -1) {
            nb_neighbor = nb_neighbor + 1;
        }
        if (board[line + 1][column] != -1) {
            nb_neighbor = nb_neighbor + 1;
        }
        if (board[line][column - 1] != -1) {
            nb_neighbor = nb_neighbor + 1;
        }
        if (board[line][column + 1] != -1) {
            nb_neighbor = nb_neighbor + 1;
        }
        if (nb_neighbor >= 3) {
            return 1;
        }
    };

    this.letter = function (column) {
        column = column + 65;
        column = String.fromCharCode(column);
        return column;
    };

    this.remove_corner = function (line, column) {
        var remove = 0;
        var nb;
        var temp;
        var popped;

        if (line != 5 && line != 0) {
            if (column != 5 && column != 0) {
                if (this.neighbor(line, column) == 1) {
                    if (this.neighbor(line, column)) {
                        remove = 1;
                        column = this.letter(column);
                        nb = 0;
                        while (nb < corner.length) {
                            popped = corner.pop();
                            temp = column;
                            temp = temp + (line + 1);
                            if (popped != temp) {
                                corner.unshift(popped);
                            }
                            nb++;
                        }
                    }
                }
            }
        }

        else {
            column = this.letter(column);
            nb = 0;
            while (nb < corner.length) {
                popped = corner.pop();
                temp = column;
                temp = temp + (line + 1);
                if (popped != temp) {
                    corner.unshift(popped);
                }
                nb++;
            }
        }
        return remove;
    };

    this.add_corner = function (line, column) {
        var col;
        var l;
        var temp;
        if (line != 5 && line != 0) {
            if (column != 0 && column != 5) {
                col = this.letter(column - 1);
                l = line + 1;
                temp = col;
                temp = temp + l;
                this.insertion(line, column, temp);
                col = this.letter(column + 1);
                l = line + 1;
                temp = col;
                temp = temp + l;
                this.insertion(line, column, temp);
                col = this.letter(column);
                l = line + 2;
                temp = col;
                temp = temp + l;
                this.insertion(line, column, temp);
                col = this.letter(column);
                l = line;
                temp = col;
                temp = temp + l;
                this.insertion(line, column, temp);
            }
        } else if (line == 0) {
            if (column == 0) {
                col = this.letter(column + 1);
                l = line + 1;
                temp = col;
                temp = temp + l;
                this.insertion(line, column, temp);
                col = this.letter(column);
                l = line + 2;
                temp = col;
                temp = temp + l;
                this.insertion(line, column, temp);
            } else if (column == 5) {
                col = this.letter(column - 1);
                l = line + 1;
                temp = col;
                temp = temp + l;
                this.insertion(line, column, temp);
                col = this.letter(column);
                l = line + 2;
                temp = col;
                temp = temp + l;
                this.insertion(line, column, temp);
            } else {
                col = this.letter(column + 1);
                l = line + 1;
                temp = col;
                temp = temp + l;
                this.insertion(line, column, temp);
                col = this.letter(column - 1);
                l = line + 1;
                temp = col;
                temp = temp + l;
                this.insertion(line, column, temp);
                col = this.letter(column);
                l = line + 2;
                temp = col;
                temp = temp + l;
                this.insertion(line, column, temp);
            }
        } else if (line == 5) {
            if (column == 0) {
                col = this.letter(column);
                l = line;
                temp = col;
                temp = temp + l;
                this.insertion(line, column, temp);
                col = this.letter(column + 1);
                l = line + 1;
                temp = col;
                temp = temp + l;
                this.insertion(line, column, temp);
            } else if (column == 5) {
                col = this.letter(column);
                l = line;
                temp = col;
                temp = temp + l;
                this.insertion(line, column, temp);
                col = this.letter(column - 1);
                l = line + 1;
                temp = col;
                temp = temp + l;
                this.insertion(line, column, temp);
            } else {
                col = this.letter(column);
                l = line;
                temp = col;
                temp = temp + l;
                this.insertion(line, column, temp);
                col = this.letter(column - 1);
                l = line + 1;
                temp = col;
                temp = temp + l;
                this.insertion(line, column, temp);
                col = this.letter(column + 1);
                l = line + 1;
                temp = col;
                temp = temp + l;
                this.insertion(line, column, temp);
            }
        }
    };

    this.insertion = function (l, col, temp) {
        if (board[l][col] != -1) {
            corner.unshift(temp);
        }
    };

    this.choice = function () {
        var popped;
        var size = corner.length;
        var nb = 0;
        var color = "";

        while (nb < size) {
            popped = corner.pop();
            var temp_col = this.ascii_code(popped);
            var temp_line = (popped.substr(1, 1)) - 1;
            corner_color.push(board[temp_line][temp_col]);
            corner.unshift(popped);
            nb++;
        }

        nb = 0;
        while (nb < size) {
            popped = corner_color.pop();
            color = color + popped + " ";
            corner_color.unshift(popped);
            nb++;
        }

        return color;
    };

    this.win = function () {
        if (this.get_piece_tray() == 0) {
            return player;
        }
        else {
            var size;
            if (player1.length > player2.length) {
                size = player1.length;
            }
            else {
                size = player2.length;
            }

            var j1_black = 0;
            var j2_black = 0;
            var j1_white = 0;
            var j2_white = 0;
            var j1_red = 0;
            var j2_red = 0;
            var j1_blue = 0;
            var j2_blue = 0;
            var j1_green = 0;
            var j2_green = 0;
            var j1_yellow = 0;
            var j2_yellow = 0;

            var nb = 0;

            while (nb < size) {

                var popped1 = player1.pop();
                var popped2 = player2.pop();


                if (popped1 == "Black") {
                    j1_black++;
                }
                if (popped2 == "Black") {
                    j2_black++;
                }

                if (popped1 == "White") {
                    j1_white++;
                }
                if (popped2 == "White") {
                    j2_white++;
                }

                if (popped1 == "Red") {
                    j1_red++;
                }
                if (popped2 == "Red") {
                    j2_red++;
                }

                if (popped1 == "Blue") {
                    j1_blue++;
                }
                if (popped2 == "Blue") {
                    j2_blue++;
                }

                if (popped1 == "Green") {
                    j1_green++;
                }
                if (popped2 == "Green") {
                    j2_green++;
                }

                if (popped1 == "Yellow") {
                    j1_yellow++;
                }
                if (popped2 == "Yellow") {
                    j2_yellow++;
                }

                nb++;
                player1.unshift(popped1);
                player2.unshift(popped2);
            }

            if (j1_black == 6 || j1_white == 6 || j1_red == 6 || j1_green == 6 || j1_blue == 6 || j1_yellow == 6) {
                return 1;
            }

            else if (j2_black == 6 || j2_white == 6 || j2_red == 6 || j2_green == 6 || j2_blue == 6 || j2_yellow == 6) {
                return 2;
            }
        }
        return 0;
    };

    this.change_player = function(){
        if (player == 1){
            player =2;
        }
        else {
            player =1;
        }
        return player;
    };

};

