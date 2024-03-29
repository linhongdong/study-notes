// @ts-nocheck
/**
 * 剑指 Offer 04. 二维数组中的查找
 * 与 240 题相同
 *
 *  在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
    示例:
    现有矩阵 matrix 如下：
    [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
    ]
    给定 target = 5，返回 true。
    给定 target = 20，返回 false。
 */
function findNumberIn2DArray(matrix, target) {
    if (!Array.isArray(matrix) || matrix.length < 1) return false;

    const rowLen = matrix.length;
    let row = 0;
    let col = matrix[0].length - 1;

    while (row < rowLen && col >= 0) {
        const cur = matrix[row][col];
        if (cur === target) {
            return true;
        } else if (cur < target) {
            row++;
        } else {
            col--;
        }
    }

    return false;
}
// console.log(
//     'findNumberIn2DArray 结果：',
//     findNumberIn2DArray(
//         [
//             [1, 4, 7, 11, 15],
//             [2, 5, 8, 12, 19],
//             [3, 6, 9, 16, 22],
//             [10, 13, 14, 17, 24],
//             [18, 21, 23, 26, 30],
//         ],
//         20,
//     ),
// );
// console.log('数组中的第K个最大元素：', findKthLargest([3, 3, 3, 2, 1, 5, 6, 4], 2));
// console.log('数组中的第K个最大元素：', findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
// console.log('数组中的第K个最大元素：', findKthLargest([1], 1));
// console.log('数组中的第K个最大元素：', findKthLargest([-1, -1], 2));
// console.log('数组中的第K个最大元素：', findKthLargest([-1, 2, 0], 2));

