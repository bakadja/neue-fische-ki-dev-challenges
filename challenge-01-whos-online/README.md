# **Challenge 1: Who's Online?**

## **🎯 Objective**

Given an array of objects containing usernames, status, and time since last activity (in mins), create a function to work out who is online, offline, and away.

**Rules:**

* If someone is online but their lastActivity was more than 10 minutes ago, they are considered away.  
* Return an object grouping the users by these three states.

## **💡 My Approach**

I utilized the reduce() array method to iterate through the list of users and construct the final grouped object in a single pass.

I applied conditional logic (ternary operators) to check the status and lastActivity time to correctly categorize each user into online, offline, or away arrays within the accumulator object.

## **🚀 How to run**

node main.js  
