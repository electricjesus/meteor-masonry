Package.describe({
	summary: "Masonry by desandro packaged for Meteor"
});

Package.on_use(function (api) {
	api.use('jquery', 'client');
	api.add_files(['helpers.js', 'lib/masonry/masonry.pkgd.min.js'],'client');
});
