Meteor.publish("allPages", function() {
	return Pages.find()
});

Meteor.publish("allStaff", function() {
	return Staff.find()
});

Meteor.publish("allImages", function() {
	return Images.find()
});