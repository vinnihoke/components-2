
class TabLink {
	constructor(element) {
		// Assign this.element to the passed in DOM element
		this.element = element;
		// Get the custom data attribute on the Link
		this.data = element.dataset.tab;

		// Using the custom data attribute get the associated Item element
		this.itemElement = document.querySelector(`div.tabs-item[data-tab="${this.data}"]`);

		console.log(this.itemElement);

		// Using the Item element, create a new instance of the TabItem class
		this.tabItem = new TabItem(this.itemElement);
		// Add a click event listener on this instance, calling the select method on click
		this.element.addEventListener("click", this.select);
	};

	select = () => {

		
		// Get all of the elements with the tabs-link class
		const links = document.querySelectorAll(".tabs-link");

		// Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
		// links.forEach(link => {
		// 	link.classList.remove("tabs-link-selected");
		// });

		for(const link of links){
			link.classList.remove('tabs-link-selected');
		}

		//At this point all of the tabs have been deselected.

		// Add a class named "tabs-link-selected" to this link
		this.element.classList.add("tabs-link-selected");

		// Call the select method on the item associated with this link
		this.tabItem.select()
	}
}

class TabItem {
	constructor(itemElement) {
		// Assign this.element to the passed in element
		this.element = itemElement;
	}

	select() {
		console.log("Select is working on the TabItem class");
		// Select all ".tabs-item" elements from the DOM
		const items = document.getElementsByClassName("tabs-item");

		// Remove the class "tabs-item-selected" from each element
		// it.forEach(tabItem => {
		// 	tabItem.classList.remove("tabs-item-selected");
		// });

		for(const item of items){
			item.classList.remove("tabs-item-selected");
		}

		// Add a class named "tabs-item-selected" to this element
		this.element.classList.add("tabs-item-selected");
	}
}

/* START HERE:

- Select all classes named ".tabs-link" and assign that value to the links variable


- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

const links = document.querySelectorAll(".tabs-link");
links.forEach(link => new TabLink(link));

//We're passing the tab into the new tab class

