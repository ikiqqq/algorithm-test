function anagram (word1, word2){
    word1 = word1.toLowerCase("").split("").sort().join("").trim("")
    word2 = word2.toLowerCase("").split("").sort().join("").trim("")
    
    return word1 === word2
    
}

console.log (anagram('aaz', 'zza'))
console.log (anagram('anagram', 'nagaram'))

