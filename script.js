const draggableList = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
    'Elon Musk',
    'Bernard Arnault',
    'Jeff Bezos',
    'Larry Elison',
    'Bill Gates',
    'Warren Buffett',
    'Mark Zuckerberg',
    'Larry Page',
    'Sergey Brin',
    'Steve Ballmer'

];

const listItems = [];

let dragStartIndex;

createList();

function createList() {
[...richestPeople]
    .forEach((person, index) => {
        const listItem = document.createElement('li');

        listItem.setAttribute('data-index', index);

        listItem.innerHTML = `
            <span class="number">${index + 1}</span>
            <div class="draggable" draggable="true>
                <p class="person-name">${person}</p>
                <i class="fas fa-grip-lines"></i>
            </div>
        `;

        listItems.push(listItem);
        draggableList.appendChild(listItem);
    });
}