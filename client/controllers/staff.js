Template.staff.helpers({
	staff: function () {
		return Staff.find();
	}
});

Template.staffInfo.events({
	'click .staff': function () {
		bootbox.dialog({
			title: this.name + ' - ' + this.title,
			message: this.description
		});
	}
});