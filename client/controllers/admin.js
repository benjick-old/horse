Template.adminLayout.helpers({
	pages: function () {
		return Pages.find();
	},
	staff: function() {
		return Staff.find();
	},
	anyAdmin: function() {
		Meteor.call('anyAdmin', 1, function (error, result) {
			Session.set('anyAdmin', result);
		});
		if(Session.get('anyAdmin') > 0) {
			return true;
		}
		else {
			return false;
		}
	}
});

Template.adminLayout.events({
	'click .getadmin': function () {
		Meteor.call('addFirstUser');
	}
});