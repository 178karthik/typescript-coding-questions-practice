function longestSubstringWithoutRepeating(str: string): string {
    let longestNonRepeating = "";
    let seen = new Set<string>();
    let start = 0;
    
    for (let end = 0; end < str.length; end++) {
        while (seen.has(str[end])) {
            seen.delete(str[start]);
            start++;
        }
        seen.add(str[end]);

        if (end - start + 1 > longestNonRepeating.length) {
            longestNonRepeating = str.substring(start, end + 1);
        }
    }
    return longestNonRepeating;
}

// Test
console.log(longestSubstringWithoutRepeating("pwwkee"));

