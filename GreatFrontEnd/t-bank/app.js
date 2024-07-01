const arr = [
    {
        fruit: 'lemon',
        qty: 40,
    },
    {
        fruit: 'lemon',
        qty: 40,
    },
    {
        fruit: 'apple',
        qty: 30,
    },
    {
        fruit: 'lemon',
        qty: 40,
    },
]

const getLemonQtyAvg = (fruit) => {
    // const lemons = fruit.filter(item => item.fruit === 'lemon');
    // const totalQty = lemons.reduce((acc, item) => acc + item.qty, 0);

    // return lemons.length ? totalQty / lemons.length : 0;

    const { totalQty, count } = fruit.reduce((acc, item) => {
        if (item.fruit === 'lemon') {
            acc.totalQty += item.qty;
            acc.count += 1;
        }
        return acc;
    }, { totalQty: 0, count: 0 });
    return count ? totalQty / count : 0;
};

console.log(getLemonQtyAvg(arr))

const arr2 = [
    '1',
    undefined,
    false,
    true,
    null,
    1,
    '2'
]

const getAllTrue = (arr) => {
    // return arr.filter(item => item);

    // const slicedArr = arr.slice(1, -1);
    // const truthyBooleans = slicedArr.filter(item => item).map(() => true);
    // return truthyBooleans;

    return arr.slice(1, -1).filter(item => Boolean(item)).map(el => !!el);

    // return arr.slice(1, -1).filter(item => Boolean(item)); 
}


console.log(getAllTrue(arr2))