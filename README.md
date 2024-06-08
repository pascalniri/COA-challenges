# Interactive Photo Gallery

## Description

This project is an interactive photo gallery based on the provided Figma designs. The gallery is responsive and works seamlessly on both desktop and mobile devices. Key features include image thumbnail navigation, full-size image viewing, and various interactions specified in the designs.

## Features

- *Responsive Design*: The gallery adapts to different screen sizes, providing an optimal viewing experience on both desktop and mobile devices.
- *Thumbnail Navigation*: Navigate through images using thumbnails.
- *Full-Size Image Viewing*: Click on a thumbnail to view the full-size image.
- *Interactive Elements*: Additional interactions as specified in the Figma designs.

## Installation

1. Clone the repository:
   bash
 https://github.com/pascalniri/COA-challenges.git



# Coding Challenges

## 4.2 Coding Challenge 1: Array Manipulation

### Problem Statement:
Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return true if such a subarray exists, otherwise return false.

### Example:
**Input:**
javascript
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
true;


function arrayManipulation(arr, target) {
    let sum = 0;
    let start = 0;
    
    for (let end = 0; end < arr.length; end++) {
        sum += arr[end];
        
        while (sum > target && start <= end) {
            sum -= arr[start];
            start++;
        }
        
        if (sum === target) {
            return true;
        }
    }
    
    return false;
}



# String Transformation Challenge

## Problem Statement

Given a string, transform it based on the following rules:
- If the length of the string is divisible by 3, reverse the entire string.
- If the length of the string is divisible by 5, replace each character with its ASCII code.
- If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform both operations in the order specified above.

### Examples

1. *Input:* "Hamburger"
   *Output:* "regrubmaH"
   *Explanation:* The length of the string is 9, which is divisible by 3 but not by 5 or 15. Therefore, the string is reversed, resulting in "regrubmaH".

2. *Input:* "Pizza"
   *Output:* "80 105 122 122 97"
   *Explanation:* The length of the string is 5, which is divisible by 5 but not by 3 or 15. Therefore, each character is replaced by its ASCII code, resulting in "80 105 122 122 97".

3. *Input:* "Chocolate Chip Cookie"
   *Output:* "eikooCpihCetalocohC"
   *Explanation:* The length of the string is 21, which is divisible by 3 but not by 5 or 15. Therefore, the string is reversed, resulting in "eikooCpihCetalocohC".

### Constraints

- The string will only contain alphanumeric characters and spaces.
- The length of the string will be between 1 and 1000.

### Expected Complexity

- *Time Complexity:* O(n), where n is the length of the string.
- *Space Complexity:* O(n), where n is the length of the string.

### Note

You can assume that the input will always be valid and within the specified constraints. Your solution should handle all possible cases and return the transformed string accordingly.

## Implementation

### JavaScript Code

```javascript
function stringTransformation(s) {
    const length = s.length;

    if (length % 15 === 0) {
        return s.split('').reverse().join('').split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        return s.split('').reverse().join('');
    } else if (length % 5 === 0) {
        return s.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
        return s;
    }
}
console.log(stringTransformation("Hamburger")); // Output: "regrubmaH"
console.log(stringTransformation("Pizza")); // Output: "80 105 122 122 97"
console.log(stringTransformation("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
console.assert(stringTransformation("Hamburger") === "regrubmaH", 'Test Case 1 Failed');
console.assert(stringTransformation("Pizza") === "80 105 122 122 97", 'Test Case 2 Failed');
console.assert(stringTransformation("Chocolate Chip Cookie") === "eikooCpihCetalocohC", 'Test Case 3 Failed');
console.assert(stringTransformation("Hello") === "72 101 108 108 111", 'Test Case 4 Failed');
console.assert(stringTransformation("OpenAI") === "IAnepO", 'Test Case 5 Failed');
