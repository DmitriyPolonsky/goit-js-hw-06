const categoryСounter = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoryСounter.length}`);

const itemsRef = document.querySelectorAll('.item');
// console.log(itemsRef);

itemsRef.forEach(element => {
    console.log(`Category: ${element.querySelector('h2').textContent}`);
    console.log(`Elements: ${element.querySelectorAll('li').length}`);
});