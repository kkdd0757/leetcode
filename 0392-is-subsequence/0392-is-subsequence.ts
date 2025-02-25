function isSubsequence(s: string, t: string): boolean {
    if(s.length >= t.length) return s === t;

    let idx = 0;
    for(let i = 0; i < t.length; i++) {
        if(s[idx] === t[i]) idx++;
    }
    return idx === s.length;
};