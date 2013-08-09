M.wrap('github/lucaboieru/cc-scripts/dev/UIFunctions.js', function (require, module, exports) {

$(document).ready(function () {

    $(document).keyup(function(e) {
        var el = $("#detail_view_container");
        var el2 = $("#detail_view_container_articles");
        
        if (e.keyCode == 27 && el.css("display") == "block") { 
            el.fadeOut(300);
        }
        if(e.keyCode == 27 && el2.css("display") == "block") {
            el2.fadeOut(300);
        }
    });

    /* detail Popup */

    $("body").on('click', '#dataTable', function (){
        if($("#submenu_list_templates .active").text() == "Articles") {
            $('#detail_view_container_articles').fadeIn(300);
        } else {
            $('#detail_view_container').fadeIn(300);
        }
    });

    $("#contentContainer").on('click', ".addBtn", function () {
        $(this).parent().prev(".addBubble").fadeIn(100);
    });

    $("#contentContainer").on('click', ".addBubble .closeBtn", function () {
        $(this).closest(".addBubble").fadeOut(100);
    });

    /*Submenu functions */

    var leftPosition = 0;
    $("#submenuControlLeft").click(function(){
        
        var leftOffset = $('#templateTabs li:last-child').offset().left;
        var windowWidth = $(window).width();
        if(leftOffset + 200 > windowWidth){
            leftPosition -= 100;
            $("#templateTabs").animate({"left": leftPosition});
        }
    });

    $("#submenuControlRight").click(function(){
        if(leftPosition < 0){
            leftPosition += 100;
            $("#templateTabs").animate({"left": leftPosition});
        }
    });

    /*End submenu functions*/

    /*Import page functions*/

    $('#importStage2Btn').click(function(){
        $('#containerStage1').hide();
        $('#containerStage2').show();
    });

    $('#cancelUploadBtn').click(function(){
        $('#containerStage2').hide();
        $('#containerStage1').show();
    });

    /*End import page funtions */

    /*Tempalate page functions */
    $("#templateLinkContent").css({
        position:   'absolute',
        visibility: 'hidden',
        display:    'block'
    });
        var height = $("#templateLinkContent").height();

    $("#templateLinkContent").css({
        position:   'static',
        visibility: 'visible',
        display:    'none',
        height:     '0'
    });

    $('#addTemplateLinkBtn').click(function(){
        $('#templateLinkContent').show().animate({'height': height}, 300);
    });

    $('#cancelTemplateLinkBtn').click(function(){
        $('#templateLinkContent').animate({'height': '0'}, 300, function(){
            $('#templateLinkContent').hide();
        });
    });
    /*End templates page functions*/

    /* Detail_view Functions*/
    $('#detail_users_table .tableCheckbox').on('click', function(e){
        $el = $(this).children('input[type=checkbox]');
        var toggleCheck = $el.is(':checked') ? false : true;
        $el.prop('checked', toggleCheck);
    });

    /*END*/
    if (top.location.pathname === '/sample'){
        $('body').scrollspy();
        $('#sidebar').affix()

       $('.header').click(function(){
            $.pnotify({
                title: 'Regular Notice',
                text: 'Check me out! I\'m a notice.'
            });
       });
    }

});
return module; });