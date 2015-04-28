Router.configure({
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	layoutTemplate: 'Layout'
});

// hem - i stallet - verksamhet - om oss

Router.route('/', {
	name: 'main'
});

Router.route('/page/:slug', { // might wanna change this to a slug
	name: 'page',
	data: function () {
		return Pages.findOne({slug: this.params.slug});
	}
});

Router.route('/admin', {
	layoutTemplate: 'adminLayout',
	name: 'admin'
});
Router.route('/admin/page', {
	layoutTemplate: 'adminLayout',
	name: 'adminPage'
});
Router.route('/admin/page/:_id', {
	layoutTemplate: 'adminLayout',
	name: 'adminPageEdit'
});
Router.route('/admin/staff', {
	layoutTemplate: 'adminLayout',
	name: 'adminStaff'
});
Router.route('/admin/staff/:_id', {
	layoutTemplate: 'adminLayout',
	name: 'adminStaffEdit'
});