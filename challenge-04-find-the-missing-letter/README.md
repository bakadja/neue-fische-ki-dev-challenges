# **Challenge 4: Find the missing letter**

## **🎯 Objective**

Write a method that takes an array of consecutive (increasing) letters as input and returns the missing letter in the sequence.

**Rules:**

* The array will always be valid and exactly one letter will be missing.  
* The length of the array will always be at least 2\.  
* The array will contain letters in only one case (upper or lower).

## **💡 My Approach**

I used a predefined alphabet string to find the starting point of the input sequence.

By slicing the correct portion of the alphabet string, I created a reference array of what the sequence *should* look like.

I then used .find() on this reference array, combined with .includes() on the input array, to identify the character that was present in the alphabet but missing from the input. Finally, I ensured the output matched the original casing.

## **🚀 How to run**

node main.js  
