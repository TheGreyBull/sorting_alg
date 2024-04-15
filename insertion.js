let a = [1, 6, 3, 3, 2, 6];

function insertionSort(a) {
    for (let i = 1; i < a.length; i++) {
        let value = a[i];
        let j = i-1;
        while (j >= 0 && a[j] > value) {
            a[j+1] = a[j];
            j = j-1;
        }
        a[j+1] = value;
    }
    return a;
}

console.log(insertionSort(a));