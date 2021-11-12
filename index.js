function anagram (word1, word2){
    word1 = word1.toLowerCase("").split("").join("").trim("")
    word2 = word2.toLowerCase("").split("").join("").trim("")
    
    return word1 === word2
    
}

console.log (anagram("tets","stet"))

