var maxDistance = function(s, k) {
    let verti = 0, hori = 0, ans = 0;
    const n = s.length;

    for(let i = 0; i < n; i++){
        switch (s[i]) {
            case 'S':
                verti--;
                break;
            case 'N':
                verti++;
                break;
            case 'W':
                hori++;
                break;
            case 'E':
                hori--;
                break;

            default:
                break;
        }
        ans = Math.max(
            ans,
            Math.min(Math.abs(verti) + Math.abs(hori) + k*2, i + 1));
        console.log(ans);
    }
    return ans;
};

const s = "EWWE";
const k = 88;

console.log(maxDistance(s, k));