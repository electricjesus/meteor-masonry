reloadMasonry = function($container, item, width) {
	if(!$container) {
		console.log('cannot find container: ', $container);
		return;
	}
	if($container.hasClass('masonry')) {
		$container.imagesLoaded(function() {
			$container.masonry('reload');
		});
	} else {
		if(!item || !width) {
			console.log('no item selector or no width provided');
			return;
		}
		$container.imagesLoaded(function() {
			$container.masonry({
				itemSelector : item,
				columnWidth  : width
			});
		});
	}
}

