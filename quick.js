let a = [1, 6, 3, 3, 2, 6];

function quickSort(a) {
    if (a.length < 2) {
        return a;
    }

    const pivot = a[Math.floor(a.length / 2)];
    const left = [];
    const right = [];

    for (let i = 0; i < a.length; i++) {
        if (i === Math.floor(a.length / 2)) {
            continue;
        }
        if (a[i] < pivot) {
            left.push(a[i]);
        }
        else {
            right.push(a[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(a));