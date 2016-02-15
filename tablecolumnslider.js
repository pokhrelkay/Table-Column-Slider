/*!
 * Table Column Slider Jquery Plugin
 * Author: https://np.linkedin.com/in/pokhrelkiran
 *
 * Copyright 2016 Kiran Pokhrel
 * Released under the MIT license
 */

var tableColumnSlider = {
    config: {
        wrapper: "table",
        columnClass: "addToSlide",
        showDefault: "showDefault",
        next: ".next",
        prev: ".prev"
    },
    init: function(a) {
        jQuery.extend(this.config, a);
        var b = this.config;
        var c = jQuery(b.wrapper).find("thead .showDefault").length - 1;
        this.replicateClass(b);
        jQuery(b.wrapper).find("." + b.columnClass).hide();
        jQuery(b.wrapper).find("." + b.showDefault).show();
        jQuery(b.next).click(function() {
            jQuery(b.wrapper).find("tr").each(function(a) {
                var d = jQuery(this).find("." + b.columnClass + ":visible:last").index();
                if (jQuery(this).find("td, th").eq(d + 1).hasClass(b.columnClass)) jQuery(this).find("td, th").eq(d + 1).show();
                if (jQuery(this).find("td, th").eq(d - c).hasClass(b.columnClass)) jQuery(this).find("td, th").eq(d - c).hide();
            });
        });
        jQuery(b.prev).click(function() {
            jQuery(b.wrapper).find("tr").each(function(a) {
                var d = jQuery(this).find("." + b.columnClass + ":visible:first").index();
                if (jQuery(this).find("td, th").eq(d - 1).hasClass(b.columnClass)) jQuery(this).find("td, th").eq(d - 1).show();
                if (jQuery(this).find("td, th").eq(d + c).hasClass(b.columnClass)) jQuery(this).find("td, th").eq(d + c).hide();
            });
        });
    },
    replicateClass: function(a) {
        var b = [];
        var c = [];
        jQuery(a.wrapper).find("thead tr th").each(function(d) {
            if (jQuery(this).hasClass(a.columnClass)) b.push(d);
            if (jQuery(this).hasClass(a.showDefault)) c.push(d);
        });
        jQuery(a.wrapper).find("tbody tr").each(function(d) {
            var e = jQuery(this).find("th,td");
            jQuery.each(b, function(b, c) {
                e.eq(c).addClass(a.columnClass);
            });
            jQuery.each(c, function(b, c) {
                e.eq(c).addClass(a.showDefault);
            });
        });
        var d = jQuery(a.wrapper).find("tfoot tr th");
        jQuery.each(b, function(b, c) {
            d.eq(c).addClass(a.columnClass);
        });
        jQuery.each(c, function(b, c) {
            d.eq(c).addClass(a.showDefault);
        });
    }
};
