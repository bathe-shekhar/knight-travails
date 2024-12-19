function knightMoves(start, end) {

    const moves = [
        [2, 1],
        [2, -1],
        [-2, 1],
        [-2, -1],
        [1, 2],
        [1, -2],
        [-1, 2],
        [-1, -2],
    ];

    let queue = [[start, [start]]]; //It will store node and path

    let visited = new Set();

    visited.add(moveToString(start));

    function moveToString([x, y]) {
        return `${x},${y}`;
    }

    while (queue.length > 0) {

        const [currentPosition, path] = queue.shift();
        const [cx, cy] = currentPosition;


        //if current position is equal to end co-ordinates it mean we reached at destination

        if (currentPosition[0] === end[0] && currentPosition[1] === end[1]) {
            return path;
        }


        for (let [x, y] of moves) {

            const newX = cx + x;
            const newY = cy + y;
            const newPosition = [newX, newY];

            //check wheather the new position is valid i.e. within 8x8 grid

            if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {

                const positionStirng = moveToString(newPosition);

                if (!visited.has(positionStirng)) {
                    visited.add(positionStirng);
                    queue.push([newPosition, [...path, newPosition]]);
                }
            }

        }

    }

    console.log("Path not found...");
    return [];
}

const res = knightMoves([5, 0], [3, 6]);
console.log(`Knight Moves([5,0],[3,6]): You made it in ${res.length - 1} moves: `, res);

const res1 = knightMoves([3, 0], [7, 6]);
console.log(`Knight Moves([3,0],[7,6]): You made it in ${res1.length - 1} moves: `, res1);

const res2 = knightMoves([4, 1], [2, 6]);
console.log(`Knight Moves([4,1],[2,6]): You made it in ${res2.length - 1} moves: `, res2);