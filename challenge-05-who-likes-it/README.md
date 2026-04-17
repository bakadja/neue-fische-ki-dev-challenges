# **Challenge 5: Who likes it?**

## **🎯 Objective**

Implement a function that takes an array containing the names of people that like an item and returns a display text similar to Facebook's "like" system.

**Rules:**

* \[\] \--\> "no one likes this"  
* \["Peter"\] \--\> "Peter likes this"  
* \["Jacob", "Alex"\] \--\> "Jacob and Alex like this"  
* \["Max", "John", "Mark"\] \--\> "Max, John and Mark like this"  
* \["Alex", "Jacob", "Mark", "Max"\] \--\> "Alex, Jacob and 2 others like this"

## **💡 My Approach**

I implemented a series of if statements (which act similarly to a switch based on array length) to handle the different formatting requirements based on names.length.

I used array methods like .join() and .slice() to construct the grammatically correct strings dynamically based on how many names were provided.

## **🚀 How to run**

node main.js  
