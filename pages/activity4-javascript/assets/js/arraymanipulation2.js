function mapSemThis(arr) {
    return arr.map(function(item){
        return item * 2;
    });
}

const nums2 = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums2));

console.log(nums2);