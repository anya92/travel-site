import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
	constructor() {
		this.lazyImages = $('.lazyload');
		this.siteHeader = $('.site-header');
		this.headerTriggerElement = $('.large-hero__title');
		this.createHeaderWaypoint();
		this.pageSections = $('.page-section');
		this.headerLinks = $('.primary-nav a');
		this.createPageSectionWaypoints();
		this.addSmoothScrolling();
		this.refreshWaypoints();
	}

	refreshWaypoints() {
		this.lazyImages.on('load', function() {
			Waypoint.refreshAll();
		})
	}

	addSmoothScrolling() {
		this.headerLinks.smoothScroll();
	}

	createHeaderWaypoint() {
		// const that = this;
		new Waypoint({
			element: this.headerTriggerElement[0],
			handler: direction => {
				if (direction === 'down') {
					this.siteHeader.addClass('site-header--dark');
				} else {
					this.siteHeader.removeClass('site-header--dark');
				}
			}
		});
	}

	createPageSectionWaypoints() {
		const that = this;
		this.pageSections.each(function() {
			let currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction === 'down') {
						let matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
						that.headerLinks.removeClass('is-current-link');
						$(matchingHeaderLink).addClass('is-current-link');
					}
				},
				offset: '18%'
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction === 'up') {
						let matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
						that.headerLinks.removeClass('is-current-link');
						$(matchingHeaderLink).addClass('is-current-link');
					}
				},
				offset: '-40%'
			});
		});
	}

}

export default StickyHeader;
