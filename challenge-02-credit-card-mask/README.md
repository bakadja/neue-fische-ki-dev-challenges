# **Challenge 2: Credit Card Mask**

## **🎯 Objective**

Write a function maskify which changes all but the last four characters of a string into \#.

**Rules:**

* Inputs shorter than 4 characters should remain unmasked.  
* Empty strings should return an empty string.

## **💡 My Approach**

I tackled this by first converting the input to a string.

I created a helper function generateMask to generate the correct number of \# characters based on the string length minus 4\.

Then, I used the .slice() method to extract the last four characters and concatenated them with the generated mask.

## **🚀 How to run**

node main.js  
