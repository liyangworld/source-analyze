
$(function(){

    //如果是 lodash 页面
    if($('.main-sidebar').hasClass('lodash')){

        var cur_hash =  window.location.hash;
        if(cur_hash){
            var $active_a = $('a[href$="' + cur_hash + '"]');
            $active_a.closest('li').addClass('active');
        }

        var lodash_lis = $('.main-sidebar.lodash').find('.treeview-menu li');
        lodash_lis.on('click', 'a',function(e){
            lodash_lis.removeClass('active');
            $(this).closest('li').addClass('active');
        });
    }

    

    //根据当前高亮的li，将其所有的祖先li展开
    var lis = $('.main-sidebar .sidebar').find('li.active').parents('li');
    lis.addClass('menu-open active');
    lis.find(">ul").show();

    

});