
var state = {
	items: []
};

var addItem = function(state, text) {
	var item = {};
	item.text = text;
	item.checked = false;
    state.items.push(item);
};

var renderList = function(state, element){
	var itemHTML = "";
	for (i = 0; i < state.items.length; i++){
		itemHTML += "<li>"
		itemHTML += '<span class="shopping-item'; 
		if (state.items[i].checked){
			itemHTML += ' shopping-item-checked'
		};
		itemHTML += '">' + state.items[i].text + '</span>';
		itemHTML += '<div class="shopping-item-controls">';
        itemHTML += '<button class="shopping-item-toggle">';
        itemHTML += '<span class="button-label">check</span>';
        itemHTML += '</button>';
        itemHTML += '<button class="shopping-item-delete">';
        itemHTML += '<span class="button-label">delete</span>';
        itemHTML += '</button>';
        itemHTML += '</div>';	
        itemHTML += '</li>';	
	}
	element.html(itemHTML);
};

$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    addItem(state, $('#shopping-list-entry').val());
 	renderList(state, $('.shopping-list'));
});





