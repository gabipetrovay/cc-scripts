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