Meteor.publish("allData", function() {
	return [Pages.find(), Staff.find(), Images.find()]
});