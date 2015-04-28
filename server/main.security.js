// only allow admin to alter the database
Staff.permit(['insert', 'update', 'remove']).ifHasRole('admin').apply();
Pages.permit(['insert', 'update', 'remove']).ifHasRole('admin').apply();
// https://github.com/ongoworks/meteor-security/#using-with-collectionfs
Images.files.permit(['insert', 'update', 'remove']).ifHasRole('admin').apply();

Meteor.methods({
	addFirstUser: function () {
		console.log(Roles.getAllRoles().fetch().length)
		if(this.userId && Roles.getAllRoles().fetch().length === 0) {
			Roles.addUsersToRoles(this.userId, ['admin'])
			console.log("get black")
		}
	},
	anyAdmin: function() {
		return Roles.getAllRoles().fetch().length;
	}
});