/*!
 * Table Column Slider Jquery Plugin
 * Author: https://np.linkedin.com/in/pokhrelkiran
 *
 * Copyright 2016 Kiran Pokhrel
 * Released under the MIT license
 */

var tableColumnSlider = {
  config: {
    wrapper: 'table',
    columnClass: 'addToSlide',
    showDefault: 'showDefault',
    next: '.next',
    prev: '.prev'
  },
  init: function (config) {
    jQuery.extend(this.config, config);
    var customConfig = this.config;
    var slideStep = (jQuery(customConfig.wrapper).find('thead .showDefault').length) - 1;
    this.replicateClass(customConfig);
    jQuery(customConfig.wrapper).find('.' + customConfig.columnClass).hide();
    jQuery(customConfig.wrapper).find('.' + customConfig.showDefault).show();
    
	jQuery(customConfig.next).click(function () {
      jQuery(customConfig.wrapper).find('tr').each(function (index) {
        var transitionIndex = jQuery(this).find('.' + customConfig.columnClass + ':visible:last').index();
        if (jQuery(this).find('td, th').eq(transitionIndex + 1).hasClass(customConfig.columnClass))
        jQuery(this).find('td, th').eq(transitionIndex + 1).show();
        if (jQuery(this).find('td, th').eq(transitionIndex - slideStep).hasClass(customConfig.columnClass))
        jQuery(this).find('td, th').eq(transitionIndex - slideStep).hide();
      });
    });
    jQuery(customConfig.prev).click(function () {
      jQuery(customConfig.wrapper).find('tr').each(function (index) {
        var transitionIndex = jQuery(this).find('.' + customConfig.columnClass + ':visible:first').index();
        if (jQuery(this).find('td, th').eq(transitionIndex - 1).hasClass(customConfig.columnClass))
        jQuery(this).find('td, th').eq(transitionIndex - 1).show();
        if (jQuery(this).find('td, th').eq(transitionIndex + slideStep).hasClass(customConfig.columnClass))
        jQuery(this).find('td, th').eq(transitionIndex + slideStep).hide();
      });
    });
  },
  replicateClass: function (customConfig) {
    var slideIndex = [
    ];
    var defaultIndex = [
    ];
    jQuery(customConfig.wrapper).find('thead tr th').each(function (index) {
      if (jQuery(this).hasClass(customConfig.columnClass)) {
        slideIndex.push(index);
      }
      if (jQuery(this).hasClass(customConfig.showDefault)) {
        defaultIndex.push(index);
      }
    });
    jQuery(customConfig.wrapper).find('tbody tr').each(function (index) {
      var currentBodyRowElements = jQuery(this).find('th,td');
      jQuery.each(slideIndex, function (i, v) {
        currentBodyRowElements.eq(v).addClass(customConfig.columnClass);
      });
      jQuery.each(defaultIndex, function (i, v) {
        currentBodyRowElements.eq(v).addClass(customConfig.showDefault);
      });
    });
    var currentFootRowElements = jQuery(customConfig.wrapper).find('tfoot tr th');
    jQuery.each(slideIndex, function (i, v) {
      currentFootRowElements.eq(v).addClass(customConfig.columnClass);
    });
    jQuery.each(defaultIndex, function (i, v) {
      currentFootRowElements.eq(v).addClass(customConfig.showDefault);
    });
  }
};
//tableColumnSlider.init();
