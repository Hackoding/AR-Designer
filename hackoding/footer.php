<!----------------------------- modal ourVideo------------------------------->
<div class="modal fade" id="ourVideo" tabindex="-1" role="dialog"  aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Our Video</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <iframe width="100%" height="300" src="https://www.youtube.com/embed/FxAG_11PzCk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="modal-footer justify-content-center">
        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<!----------------------------- modal ourVideo end------------------------------->
<!----------------------------- modal currencyConverter------------------------------->
<div class="modal fade currency-converter" id="currencyConverter" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document" style="max-width: 400px;">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Currency Converter</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
            <div id="demo-rate-convert"></div>
            <script>
            var apiTargetHtmlObj = document.getElementById("demo-rate-convert");
            var tmScript = document.createElement("script");
            tmScript.src = "https://www.transfermate.com/en/exchange_rates_api.asp";
            document.getElementsByTagName("head")[0].appendChild(tmScript);
            </script>
             <noscript><br/><span style="color: red;">Please enable your JavaScript.</span></noscript>
      </div>
    </div>
  </div>
</div>
<!----------------------------- modal currencyConverter end------------------------------->
<!----------------------------- gogle translate------------------------------->
<div id="google_translate_element" style="display: none"></div>
<script>
    function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false }, 'google_translate_element');
    }
</script>
<script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>   
<!----------------------------- gogle translate end------------------------------->

<!--Scroll Top-->
<a class="scroll-top-arrow" href="javascript:void(0);"><i class="fa fa-angle-up"></i></a>
<!--Scroll Top End-->

<!--Animated Cursor-->
<div id="aimated-cursor">
    <div id="cursor">
        <div id="cursor-loader"></div>
    </div>
</div>
<!--Animated Cursor End-->

<!-- Style Customizer -->
<div id="style-customizer">
    <div class="style-customizer-wrap form-horizontal">
        <h6 class="sc-header text-dark font-weight-500">Style Switcher</h6>
        <div class="sc-variable-row form-group d-flex">
            <label for="sc-color-prim" class="col-sm-8 control-label color-text">Gradient palette</label>
            <div class="col-sm-4">
                <div class="sc-btn-round">
                    <input type="color" id="sc-color-prim" class="sc-variable" data-key="colorPrimary">
                </div>
            </div>
        </div>
        <div class="sc-variable-row form-group d-flex">
            <label for="sc-color-prim" class="col-sm-8 control-label color-text">Gradient palette</label>
            <div class="col-sm-4">
                <div class="sc-btn-round">
                    <input type="color" id="sc-color-sec" class="sc-variable" data-key="colorSecondary">
                </div>
            </div>
        </div>
        <div class="sc-variable-row form-group d-flex">
            <label for="sc-color-prim" class="col-sm-8 control-label color-text">Color palette</label>
            <div class="col-sm-4">
                <div class="sc-btn-round">
                    <input type="color" id="sc-color-third" class="sc-variable" data-key="colorThird">
                </div>
            </div>
        </div>
        <hr/>
        <div class="form-group">
            <div class="col-xs-12 p-0 d-flex">
                <button type="button" class="sc-btn mr-2" id="reset" onClick="window.location.reload()">Reset</button>
                <button class="sc-btn" id="sc-download-css"><i class="fa fa-download"></i> Get CSS</button>
            </div>
        </div>
        <br/>
        <br/>

    </div>
    <button id="sc-toggle" title="Styles Customizer"><i class="fa fa-cog"></i></button>
</div>
<div class="modal fade" tabindex="-1" role="dialog" id="afterSaveCSSFileModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body pb-2"> In order to apply custom color styles to your template, Please follow these steps:
                <ol>
                    <li class="sc-after-save-todo-point-file">Upload the "color.css" file to "css" directory in your template</li>
                    <li class="sc-after-save-todo-point-stylesheet-code"> Copy this code and paste it into "index.html" file in your template, after the "style.css" <br><code>&lt;!-- Skin stylesheet --&gt;</code>
                        <pre><code>&lt;link rel="stylesheet" href="css/color.css"&gt;</code></pre>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</div>
<!-- Style Customizer End -->


<!-- Optional JavaScript -->
<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.appear.js"></script>
<script src="js/typewriter.js"></script>
<!-- isotop gallery -->
<!-- <script src="js/isotope.pkgd.min.js"></script> -->
<!-- cube portfolio gallery -->
<script src="js/jquery.cubeportfolio.min.js"></script>
<!-- owl carousel slider -->
<script src="js/owl.carousel.min.js"></script>
<!-- text rotate -->
<!-- <script src="js/morphext.min.js"></script> -->
<!-- particles -->
<!-- <script src="js/particles.min.js"></script> -->
<!-- parallax Background -->
<script src="js/parallaxie.min.js"></script>
<!-- fancybox popup -->
<!-- <script src="js/jquery.fancybox.min.js"></script> -->
<!-- wow animation -->
<script src="js/wow.js"></script>
<!-- intlTelInput -->
<script src="js/intlTelInput.js"></script>
<!-- tween max animation cursor -->
<script src="js/TweenMax.min.js"></script>
<!-- REVOLUTION JS FILES -->
<script src="js/jquery.themepunch.tools.min.js"></script>
<script src="js/jquery.themepunch.revolution.min.js"></script>
<!-- SLIDER REVOLUTION EXTENSIONS -->
<script src="js/extensions/revolution.extension.actions.min.js"></script>
<script src="js/revolution.extension.carousel.min.js"></script>
<script src="js/revolution.extension.kenburn.min.js"></script>
<script src="js/revolution.extension.layeranimation.min.js"></script>
<script src="js/revolution.extension.migration.min.js"></script>
<script src="js/revolution.extension.navigation.min.js"></script>
<script src="js/revolution.extension.parallax.min.js"></script>
<script src="js/revolution.extension.slideanims.min.js"></script>
<script src="js/revolution.extension.video.min.js"></script>
<!-- map -->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAhrdEzlfpnsnfq4MgU1e1CCsrvVx2d59s"></script>
<script src="js/map.js"></script>
<!-- Color Switcher -->
<script src="js/less.min.js" data-env="development"></script>
<script src="js/style-customizer.js"></script>
<!-- jQuery Custom Scroller CDN -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js"></script>
<!-- custom script -->
<script src="js/script.js"></script>
<!-- sidebar -->
<script>
    $(document).ready(function () {
        $("#sidebar").mCustomScrollbar({
            theme: "minimal"
        });

        $('#dismiss, .overlay').on('click', function () {
            $('#sidebar').removeClass('active');
            $('.overlay1').removeClass('active');
        });

        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').addClass('active');
            $('.overlay1').addClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
    });
</script>
<!-- intlTellnput -->
<script>
  $("#phone, #phone2, #phone3").intlTelInput({
    preferredCountries: ['in', 'jp', 'us', 'cn', 'ru'],
    // utilsScript: "../js/utils.js"
  });
</script>

</body>
</html>