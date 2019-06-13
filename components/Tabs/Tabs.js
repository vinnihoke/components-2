
class Tab {
	constructor(tabElement) {
		// Assign this.element to the passed in DOM element
		this.element = tabElement;
		// Get the custom data attribute on the Link
		this.tabNumber = tabElement.dataset.tab;
		this.content = document.querySelector(`div.tabs-item[data-tab="${this.tabNumber}"]`);
		console.log(this.content);
		// this.content.classList.toggle(".tabs-item");
		this.element.addEventListener("click", () => {

		});


		// Using the custom data attribute get the associated Item element
		// this.itemElement;

		// Using the Item element, create a new instance of the TabItem class
		this.item = new TabItem(this.element);
		console.log(this.item, "This is supposed to be the tabItem");
		// Add a click event listener on this instance, calling the select method on click
		this.item.addEventListener("click", this.select.bind(this));
	};

	select() {
		// Get all of the elements with the tabs-link class
		const links = document.querySelector(".tabs-link");
		console.log(links);

		// Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
		// Array.from(links).forEach();

		// Add a class named "tabs-link-selected" to this link
		// this.element;

		// Call the select method on the item associated with this link

	}
}

//Is TabItem supposed to be the content of the text area?

class TabItem {
	constructor(element) {
		// Assign this.element to the passed in element
		// this.element;
		this.element = element;
	}

	select() {
		// Select all ".tabs-item" elements from the DOM
		const items = document.querySelectorAll(".tabs-item");
		console.log("Select is working!!");

		

		// Remove the class "tabs-item-selected" from each element
		this.element.classList.remove(".tabs-item-selected");

		console.log(this.element);

		// Add a class named "tabs-item-selected" to this element
		this.element.classList.add(".tabs-item-selected");
	}
}

/* START HERE:

- Select all classes named ".tabs-link" and assign that value to the links variable


- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

const tabs = document.querySelectorAll(".tabs-link");
tabs.forEach(tab => new Tab(tab));

//We're passing the tab into the new tab class

