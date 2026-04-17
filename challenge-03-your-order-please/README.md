# **Challenge 3: Your order, please**

## **🎯 Objective**

Sort a given string. Each word in the string contains a single number. This number dictates the position the word should have in the final result.

**Rules:**

* Numbers can be from 1 to 9\.  
* If the input string is empty, return an empty string.

## **💡 My Approach**

1. I split the input sentence into an array of words using .split(" ").  
2. I used .map() alongside a helper function findNumber (which utilizes .find() and Number()) to extract the embedded digit and create an array of objects containing the word and its target position.  
3. I sorted this array of objects based on the extracted position using .sort().  
4. Finally, I mapped back to just the words and .join(" ") them into the final sorted string.

## **🚀 How to run**

node main.js  
