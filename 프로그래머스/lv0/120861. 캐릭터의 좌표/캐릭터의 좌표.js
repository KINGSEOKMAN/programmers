function solution(keyinput, board) {
    const maxWidth = Math.floor(board[0] / 2);
    const maxHeight = Math.floor(board[1] / 2);
    let x = 0;
    let y = 0;

    for (const direction of keyinput) {
        switch (direction) {
            case "up":
                if (y < maxHeight) {
                    y++;
                }
                break;
            case "down":
                if (y > -maxHeight) {
                    y--;
                }
                break;
            case "left":
                if (x > -maxWidth) {
                    x--;
                }
                break;
            case "right":
                if (x < maxWidth) {
                    x++;
                }
                break;
        }
    }

    return [x, y];
}