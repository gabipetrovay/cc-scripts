M.wrap('github/lucaboieru/dms-scripts/dev/switchDetail.js', function (require, module, exports) {
$(document).ready(function () {
        $('#contentContainer').on('click', '#dataTable', function() {
            $('#leftContainer').hide();
            $('#dataContainer').hide();
            $('#detailContainer').show();
        });

        $('#contentContainer').on('click', '#detailBackBtn', function() {
            $('#detailContainer').hide();
            $('#leftContainer').show();
            $('#dataContainer').show();
        });
});

return module; });