Template.nav.helpers({
	pages: function () {
		return Pages.find({menu: true}); 
	}
});