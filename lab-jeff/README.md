# Code 401 lab 5 Linked List

## Developers
Jeff Kusowski

## Purpose
The purpose of this lab is to learn about Linked Lists.  The instructor prewrote code to append and remove items from a linked list.  We had to add a "find(value)" method and write a test for it.  We use jest.js for our tests.

## File Structure
The main code is in linked-list.js within the lib folder while linked-list.test.js is in the __test__ folder.

## linked-list.js
This file contains a LinkedList constructor with 3 methods attached.  append() and remove() were provided.  I wrote find().  Find expects one arguement, which is the value to find within the linked list.  If it finds the value, the node where the value was found is returned.  If not, it returns null.
