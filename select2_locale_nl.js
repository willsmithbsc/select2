/**
 * Select2 Dutch translation
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['nl'] = {
        formatNoMatches: function () { return "Geen resultaten gevonden"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Vul " + n + " karakter" + (n == 1? "" : "s") + " meer in"; },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Vul " + n + " karakter" + (n == 1? "" : "s") + " minder in"; },
        formatSelectionTooBig: function (limit) { return "Maximaal " + limit + " item" + (limit == 1 ? "" : "s") + " toegestaan"; },
        formatLoadMore: function (pageNumber) { return "Meer resultaten laden…"; },
        formatSearching: function () { return "Zoeken…"; }
    }

	$.extend($.fn.select2.defaults, $.fn.select2.locales['nl']);
	);
})(jQuery);