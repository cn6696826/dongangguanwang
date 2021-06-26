(function ($) {
    $.fn.extend({
        qmTabs: function () {
            $(this).children("li").each(function (index) {
                $(this).click(function () {
                    alert(index);
                    $(this).removeClass().addClass('active').siblings().removeClass().addClass('');

                });
            });
        }
    });
})(jQuery);