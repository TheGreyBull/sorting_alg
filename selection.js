let a = [7, 1, 6, 3, 3, 2, 6];

function selection(a) {
    for (let i = 0; i < a.length - 1; i++) {
        let posmin = i;
        for (let j = i+1; j < a.length; j++) {
            if (a[j] < a[posmin])
                posmin = j;
        }
        if (posmin != i) {
            let temp = a[i];
            a[i] = a[posmin];
            a[posmin] = temp;
        }
    }
    return a;
}

console.log(selection(a));