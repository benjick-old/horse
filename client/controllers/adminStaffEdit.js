Template.adminStaffEdit.helpers({
	data: function () {
		return Staff.findOne(Router.current().params._id);
	}
});