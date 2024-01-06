document.addEventListener('DOMContentLoaded', function () {
    // Get the body element
    const body = document.body;

    // Create the h1 element for the grocery list title
    const h1 = document.createElement('h1');
    h1.textContent = 'GROCERY LIST:';

    // Create the ul element for the entire grocery list
    const groceryList = document.createElement('ul');

    // Create and append the first list item for Refrigerator Items
    const refrigeratorItems = createListItem('Refrigerator Items', [
        createSubList('Meats', ['Chicken', 'Sausage', 'Bacon', 'Ground Beef']),
        createSubList('Dairy', ['Milk', 'Cheese', 'Butter', 'Eggs'])
    ]);

    // Create and append the second list item for Pantry Items
    const pantryItems = createListItem('Pantry Items', [
        createSubList('Dry Goods', ['Oatmeal', 'Rice', 'Cereal', 'Pancake Mix']),
        createSubList('Canned Goods', ['Beans', 'Soup', 'Tuna', 'Vegetables'])
    ]);

    // Append all list items to the grocery list
    groceryList.appendChild(refrigeratorItems);
    groceryList.appendChild(pantryItems);

    // Append the h1 and groceryList to the body
    body.appendChild(h1);
    body.appendChild(groceryList);

    // Function to create a list item with a title and sub-items
    function createListItem(title, subItems) {
        const listItem = document.createElement('li');

        // Create the h2 element for the list item title
        const h2 = document.createElement('h2');
        h2.textContent = title;

        // Create the ul element for sub-items
        const subList = document.createElement('ul');

        // Append each sub-item to the subList
        subItems.forEach(function (subItem) {
            subList.appendChild(subItem);
        });

        // Append the h2 and subList to the listItem
        listItem.appendChild(h2);
        listItem.appendChild(subList);

        return listItem;
    }

    // Function to create a sub-list with a title and items
    function createSubList(title, items) {
        const subList = document.createElement('li');

        // Create the h3 element for the sub-list title
        const h3 = document.createElement('h3');
        h3.textContent = title;

        // Create the ul element for items
        const itemList = document.createElement('ul');

        // Append each item to the itemList
        items.forEach(function (item) {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            itemList.appendChild(listItem);
        });

        // Append the h3 and itemList to the subList
        subList.appendChild(h3);
        subList.appendChild(itemList);

        return subList;
    }
});
