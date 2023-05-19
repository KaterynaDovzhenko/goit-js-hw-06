
const categories = document.querySelector('#categories');

const  numberofCategories = categories.children.length;
console.log('Number of Categories:', numberofCategories);

const items = categories.children;
const categoriesArr = [];

categoriesArr.forEach.call(items, (element) => {
    const title = element.querySelector('h2').textContent;
    const itemsLength = element.querySelectorAll('li').length;

    console.log(`Category: ${title} 
Elements: ${itemsLength}`);
});


