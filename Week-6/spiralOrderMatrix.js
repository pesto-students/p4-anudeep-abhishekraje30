// First, four variables containing the indices for the corner points of the array are initialized

// The algorithm starts from the top left corner of the array, and traverses the first row from left to right. Once it traverses the whole row it does not need to revisit it, thus, it increments the top corner index

// Once complete, it traverses the rightmost column top to bottom. Again, once this completes, there is no need to revisit the rightmost column, thus, it decrements the right corner index

// Next, the algorithm traverses the bottommost row and decrements the bottom corner index afterward

// Lastly, the algorithm traverses the leftmost column, incrementing the left corner index once it’s done

// This continues until the left index is greater than the right index, and the top index is greater than the bottom index.
const lodash = require("lodash");

let spiralMatrixPrint = (rows, columns, matrixArray) => {
    let top = 0
    let bottom = rows - 1
    let left = 0
    let right = columns - 1

    // Define directions, 0 means topLeft->topRight,  1 means topRight->bottomRight, 2 means bottomRight->bottomLeft, 3 means bottomLeft->topLeft
    let direction = 0

    while (top <= bottom && left <= right) {
        if (direction == 0) {
            for (const i of lodash.range(left, right + 1)) { // Left -> Right
                console.log(`${matrixArray[top][i]} `)

            }
            // Since we have traversed the whole first row, move down to the next row.
            top++
            direction = 1
        }

        if (direction == 1) {
            for (const i of lodash.range(top, bottom + 1)) { // Top -> Bottom
                console.log(`${matrixArray[i][right]} `)

            }
            // Since we have traversed the whole last column, move left from right column.
            right--
            direction = 2

        }

        if (direction == 2) {
            for (const i of lodash.range(right, left - 1, -1)) { // Right -> Left
                console.log(`${matrixArray[bottom][i]} `)

            }
            // Since we have traversed the whole last row, move down to the previous row.
            bottom--
            direction = 3

        }

        if (direction == 3) {
            for (const i of lodash.range(bottom, top - 1, -1)) { // Bottom -> Top
                console.log(`${matrixArray[i][left]} `)

            }
            // Since we have traversed the whole first column, move down to the next column.
            left++
            direction = 0
        }

    }

}

spiralMatrixPrint(3, 3, [[1, 2, 3], [4, 5, 6], [7, 8, 9]]) // [1, 2, 3, 6, 9, 8, 7, 4, 5]
