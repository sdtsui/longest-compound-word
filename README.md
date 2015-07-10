###findLongestCompound

Implemented in JavaScript.

#### Pseudocode: 
- Sort the list by length such that the longest words are last.
- Insert all of the words of the list into a hash table.
- Until the list is empty:
  - Pop the largest word from the list.
  - See if it is a compound word by:  
    -Take all the possible adjacent slices of the string, from largest to smallest.
    -If the slice (prefix) is in the hash table, check the rest of the string (suffix).



##### Problem Statement:  
Find the longest compound-word in the list, which is also a concatenation of other sub-words that exist in the list.  

##### [Source List](http://norvig.com/ngrams/word.list)


##### Instructions:
 - `clone` the repo (install node if needed)
 - `node ngrams.js`
