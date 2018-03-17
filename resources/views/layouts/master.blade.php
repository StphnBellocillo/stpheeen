<!DOCTYPE html>
<html class="no-js" lang="">

<head>
  <meta charset="utf-8">
  <title> Stphn </title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">
  <link rel="stylesheet" type="text/css" href="/css/all.css">
  <link href="https://fonts.googleapis.com/css?family=Exo+2:300" rel="stylesheet">
  <script src="/../public/js/vendor/bootstrap.js"></script> 
  <script src="/../public/js/vendor/jquery.js"></script>
  {{--   <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"> --}}

  <!-- <script>
      window.Laravel = <?php echo json_encode([
          'csrfToken' => csrf_token()
          ]); ?>
      </script> -->


  </head>
  <body class="sbody" style="background-color: #170f31;">

   <div  id="app" class="app layout-fixed-header">

    {{-- <div id="app"> --}}

        @include('layouts.sidebar')


        <!-- content panel -->
  
    @yield('content')

{{-- </div> --}}


</div>

<script type="text/javascript" src="/js/all.js"></script>
<script type="text/javascript" src="/js/app.js"></script>

<script type="text/javascript">

    app = $('.app');
    isChatOpen = false;
    isSearchOpen = false;
    offscreenDirection = '';
    offscreenDirectionClass = '';
    rapidClickCheck = false;
    isOffscreenOpen = false;
    psTarg = $('.no-touch .sidebar-panel');
    init();
    function init() {
        sidebarPanel();
        smallMenu();
    }
    /* Sidebar panel */
  
        $('.main-panel').on('click', function (e) {
          var target = e.target;
          if (isOffscreenOpen && target !== $('[data-toggle=offscreen]')) {
            toggleMenu();
        }
    });
        /* Sidebar sub-menus */
      
        $('.sidebar-panel').find('> li > .sub-menu').each(function () {
          if ($(this).find('ul.sub-menu').length > 0) {
            $(this).addClass('multi-level');
        }
    });
        $('.sidebar-panel').find('.sub-menu').each(function () {
          $(this).parent('li').addClass('menu-accordion');
      });
    }

    function toggleMenu() {
        if (isChatOpen) {
          toggleChatSidebar();
      }
      if (isOffscreenOpen) {
          app.removeClass('move-left move-right');
          setTimeout(function () {
            app.removeClass('offscreen');
        }, 150);
      } else {
          app.addClass('offscreen ' + offscreenDirectionClass);
      }
      isOffscreenOpen = !isOffscreenOpen;
      rapidClickFix();
  }

  /* Small menu */
  function smallMenu() {
    $('[data-toggle=layout-small-menu]').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      app.toggleClass('layout-small-menu');
      if (app.hasClass('layout-small-menu')) {
        destroyScrollbars();
        if ($('.quick-launch-apps').is(':visible')) {
          $('.quick-launch-apps').addClass('hide').next().removeClass('hide');
      }
  } else if (!psTarg.hasClass('ps-container')) {
    initScrollbars();
}
});
}

function initScrollbars() {
    if (app.hasClass('layout-small-menu') || app.hasClass('layout-static-sidebar') || app.hasClass('layout-boxed')) {
      return;
  }
  psTarg.perfectScrollbar({
      wheelPropagation: true,
      suppressScrollX: true
  });
}

function destroyScrollbars() {
    psTarg.perfectScrollbar('destroy').removeClass('ps-container ps-active-y ps-active-x');
}

function updateScrollbars() {
    if (psTarg.hasClass('ps-container') && !app.hasClass('layout-small-menu')) {
      psTarg.perfectScrollbar('update');
  }
}
initScrollbars();

function rapidClickFix() {
    setTimeout(function () {
      rapidClickCheck = false;
  }, 150);
}
</script>

</body>

</html>
