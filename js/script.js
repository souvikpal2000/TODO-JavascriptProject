const container = document.querySelector('.container');
var inputValue = document.querySelector('.input');
const add = document.querySelector('.add');

class item
{
	constructor(name)
	{
		this.createItem(name);
	}
    createItem(name)
    {
    	var itemBox = document.createElement('div');
        itemBox.classList.add('item');

    	var input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
    	input.value = name;
    	input.classList.add('item_input');

    	var edit = document.createElement('button');
    	edit.classList.add('edit');
    	edit.innerHTML = "EDIT";
    	edit.addEventListener('click', () => this.edit(input));

    	var remove = document.createElement('button');
    	remove.classList.add('remove');
    	remove.innerHTML = "REMOVE";
    	remove.addEventListener('click', () => this.remove(itemBox));

    	container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);

    }

    edit(input)
    {
    	if(input.disabled === true)
    	{
    		input.disabled = false;
    	}
    	else
    	{
    		input.disabled = true;
    	}
    }

    remove(itemBox)
    {
        itemBox.parentNode.removeChild(itemBox);
    }
}

add.addEventListener('click', check);
document.addEventListener('keydown', pressedEnter);
function pressedEnter(event)
{
	var key = event.keyCode;
	if(key == 13)
	{
		check();
	}
}

function check()
{
	if(inputValue.value != "")
	{
		new item(inputValue.value);
		inputValue.value = "";
	}
}

new item("Sample");