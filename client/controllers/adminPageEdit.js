Template.adminPageEdit.helpers({
	data: function () {
		return Pages.findOne(Router.current().params._id);
	}
});