let a = [1, 6, 3, 3, 2, 6, 0];

function mergeSort(a) {
    if (a.length < 2) {
        return a;
    }

    // Punto di divisione
    const middle = Math.floor(a.length / 2);

    // Dividi l'array in due parti
    const left = a.slice(0, middle);
    const right = a.slice(middle);

    // Ricorsione per entrambe le parti
    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Finche' ci sono elementi in entrambi gli array
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatena gli elementi restanti, se ci sono
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort(a));