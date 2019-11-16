<template>
  
<header>



    <div class="header-container ">
        <div class="header ">
            <p class="clearfix">
                <a class="logo" href="https://www.sahibinden.com" title="sahibinden.com anasayfasına dön">sahibinden.com anasayfasına dön</a>
            </p>
            <form id="searchSuggestionForm" action="/kelime-ile-arama" method="get" novalidate>
                <input type="text" id="searchText" name="query_text" placeholder="Kelime, ilan no veya mağaza adı ile ara" title="Kelime, ilan no veya mağaza adı ile ara" required="required" />
                <button type="submit" value="Ara"></button>
                <span id="clearSearchPhrase"></span>
                <a href="https://www.sahibinden.com/arama/detayli" rel="nofollow">
                Detaylı Arama</a>
            </form>
            <ul>
                <li class="login-text">
                    <a rel="nofollow" href="https://secure.sahibinden.com/giris">
                    Giriş Yap</a>
                </li>
                <li class="register-text">
                    <a rel="nofollow" href="https://secure.sahibinden.com/kayit" data-funnel-trigger-register="header">
                    Üye Ol</a>
                </li>
                <li class="new-classified">
                    <a id="post-new-classified" rel="nofollow" class="btn btn-flat btn-link sourceTrigger trackLinkClick trackId_ucretsiz_ilan" data-source="new_classified">
                    Ücretsiz* İlan Ver</a>
                </li>
            </ul>
            <div id="user-login-tooltip" class="tipitip-target">
                <div class="my-account-menu">
                    <div id="profileArea" class="profile-area" data-hj-suppress>
                        <p class="store-name"></p>
                        <h3 class="name-surname"></h3>
                        
                       
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
	</header>
</template>

<script></script>

<style>

@media screen, print{
h3,p,ul,li,a,form{margin:0;padding:0;background:no-repeat 0 0;}
button::-moz-focus-inner{border:0;padding:0;}
button{margin:0;font-size:100%;vertical-align:middle;}
ul{list-style:none;}
a{color:#039;text-decoration:none;outline:0;}
a:focus{outline:0;}
a:hover{text-decoration:underline;}
input{font:12px "Lucida Grande","LucidaGrande",Arial,sans-serif;}
.header-container{background:#3f475f;z-index:90;}
.clearfix:after{visibility:hidden;display:block;font-size:0;content:" ";clear:both;height:0;}
.header-container .header{margin:0 auto;width:984px;height:58px;font-size:12px;}
.header-container .header p{float:left;margin-right:20px;}
.header-container .header p a{display:block;height:36px;width:170px;margin-top:12px;text-indent:-9999px;background-image:url('https://s0.shbdn.com/assets/images/header:54c8a406a9d14a1fc651e7c4bdbc97e6.png');background-position:-484px -542px;width:160px;height:34px;content:'';display:inline-block;vertical-align:middle;}
@media (min--moz-device-pixel-ratio:1.5),(-o-min-device-pixel-ratio:3/2),(-webkit-min-device-pixel-ratio:1.5),(min-resolution:1.5dppx){
.header-container .header p a{background-image:url('https://s0.shbdn.com/assets/images/header_2x:6f23696e08be64f3d85f9666404fd7be.png');background-position:-240px -541px;-webkit-background-size:1321.5px 626px;-moz-background-size:1321.5px 626px;background-size:1321.5px 626px;}
}
.header-container .header .new-classified{display:block;height:28px;margin-top:12px;position:relative;}
.header-container .header .new-classified a{padding:10px 19px 8px 19px;margin-left:11px;font-size:12px;}
.header-container .header form{float:left;position:relative;}
.header-container .header form #clearSearchPhrase{display:none;float:left;position:relative;top:21px;left:24px;width:14px;height:14px;}
.header-container .header form #clearSearchPhrase:before{background-image:url('https://s0.shbdn.com/assets/images/header:54c8a406a9d14a1fc651e7c4bdbc97e6.png');background-position:-1518px -26px;width:14px;height:14px;content:'';display:inline-block;vertical-align:middle;}
@media (min--moz-device-pixel-ratio:1.5),(-o-min-device-pixel-ratio:3/2),(-webkit-min-device-pixel-ratio:1.5),(min-resolution:1.5dppx){
.header-container .header form #clearSearchPhrase:before{background-image:url('https://s0.shbdn.com/assets/images/header_2x:6f23696e08be64f3d85f9666404fd7be.png');background-position:-1275.5px -26px;-webkit-background-size:1321.5px 626px;-moz-background-size:1321.5px 626px;background-size:1321.5px 626px;}
}
.header-container .header form a{color:#fff;float:left;font-size:12px;margin:22px 0 0 24px;}
.header-container .header :-ms-input-placeholder{font-weight:normal;color:rgba(255,255,255,0.5);opacity:1;-ms-filter:none;filter:none;}
.header-container .header :-moz-placeholder{font-weight:normal;color:rgba(255,255,255,0.5);padding-left:1px;opacity:1;-ms-filter:none;filter:none;}
.header-container .header ::-ms-input-placeholder{font-weight:normal;color:rgba(255,255,255,0.5);opacity:1;-ms-filter:none;filter:none;}
.header-container .header ::-moz-placeholder{font-weight:normal;color:rgba(255,255,255,0.5);padding-left:1px;opacity:1;-ms-filter:none;filter:none;}
.header-container .header ::-webkit-input-placeholder{font-weight:normal;color:rgba(255,255,255,0.5);padding-left:1px;opacity:1;-ms-filter:none;filter:none;}
.header-container .header :focus::-webkit-input-placeholder{color:#333;}
.header-container .header :focus::-moz-placeholder{color:#333;}
.header-container .header :focus:-ms-input-placeholder{color:#333;}
.header-container .header button{position:absolute;top:11px;left:252px;height:36px;padding:0;margin:0;width:38px;border:0;cursor:pointer;background:0;outline:0;border-radius:0 3px 3px 0;}
.header-container .header button:before{background-image:url('https://s0.shbdn.com/assets/images/header:54c8a406a9d14a1fc651e7c4bdbc97e6.png');background-position:-1472px -70px;width:16px;height:16px;content:'';display:inline-block;vertical-align:middle;text-indent:0;font-size:18px;color:#fff;}
@media (min--moz-device-pixel-ratio:1.5),(-o-min-device-pixel-ratio:3/2),(-webkit-min-device-pixel-ratio:1.5),(min-resolution:1.5dppx){
.header-container .header button:before{background-image:url('https://s0.shbdn.com/assets/images/header_2x:6f23696e08be64f3d85f9666404fd7be.png');background-position:-1229.5px -70px;-webkit-background-size:1321.5px 626px;-moz-background-size:1321.5px 626px;background-size:1321.5px 626px;}
}
.header-container .header input{width:243px;height:34px;float:left;padding-left:7px;padding-right:40px;margin-top:11px;background:#2f3546;font-size:11px;border:0;border-radius:3px;outline:0;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;}
.header-container .header input:focus,.header-container .header input:valid{background:#fff;}
.header-container .header input:focus+button,.header-container .header input:valid+button{background:#448cd6;}
.header-container .header input:focus+button:before,.header-container .header input:valid+button:before{background-image:url('https://s0.shbdn.com/assets/images/header:54c8a406a9d14a1fc651e7c4bdbc97e6.png');background-position:-1456px -86px;width:16px;height:16px;content:'';display:inline-block;vertical-align:middle;}
@media (min--moz-device-pixel-ratio:1.5),(-o-min-device-pixel-ratio:3/2),(-webkit-min-device-pixel-ratio:1.5),(min-resolution:1.5dppx){
.header-container .header input:focus+button:before,.header-container .header input:valid+button:before{background-image:url('https://s0.shbdn.com/assets/images/header_2x:6f23696e08be64f3d85f9666404fd7be.png');background-position:-1213.5px -86px;-webkit-background-size:1321.5px 626px;-moz-background-size:1321.5px 626px;background-size:1321.5px 626px;}
}
.header-container .header input:focus+button:hover,.header-container .header input:valid+button:hover,.header-container .header input:focus+button:active,.header-container .header input:valid+button:active,.header-container .header input:focus+button:focus,.header-container .header input:valid+button:focus{outline:0;background:#3c7cbe;}
.header-container .header input:focus ~ a,.header-container .header input:valid ~ a{display:none;}
.header-container .header input:focus ~ #clearSearchPhrase,.header-container .header input:valid ~ #clearSearchPhrase{display:inline;}
.header-container .header input:focus ~ #clearSearchPhrase:hover,.header-container .header input:valid ~ #clearSearchPhrase:hover{cursor:pointer;}
.header-container .header input:focus ~ #clearSearchPhrase:hover:before,.header-container .header input:valid ~ #clearSearchPhrase:hover:before{background-image:url('https://s0.shbdn.com/assets/images/header:54c8a406a9d14a1fc651e7c4bdbc97e6.png');background-position:-1532px -12px;width:14px;height:14px;content:'';display:inline-block;vertical-align:middle;}
@media (min--moz-device-pixel-ratio:1.5),(-o-min-device-pixel-ratio:3/2),(-webkit-min-device-pixel-ratio:1.5),(min-resolution:1.5dppx){
.header-container .header input:focus ~ #clearSearchPhrase:hover:before,.header-container .header input:valid ~ #clearSearchPhrase:hover:before{background-image:url('https://s0.shbdn.com/assets/images/header_2x:6f23696e08be64f3d85f9666404fd7be.png');background-position:-1289.5px -12px;-webkit-background-size:1321.5px 626px;-moz-background-size:1321.5px 626px;background-size:1321.5px 626px;}
}
.header-container .header input:valid{color:#333;font-size:11px;font-weight:700;}
.header-container .header ul{float:right;}
.header-container .header li{float:left;display:none;}
.header-container .header .register-text{border-left:1px solid #404349;-webkit-box-shadow:inset 1px 0 0 0 #60656e;box-shadow:inset 1px 0 0 0 #60656e;}
.header-container .header .login-text a,.header-container .header .register-text a{display:block;color:#ebebeb;font-size:11px;text-shadow:1px 1px 0 #2f3339;text-align:right;}
.header-container .header .login-text,.header-container .header .register-text{padding:5px 10px 5px 10px;margin-top:18px;}
.header-container .header .user-unlogin .login-text,.header-container .header .user-unlogin .register-text{display:block;}
.btn{display:inline-block;padding:9px 22px;margin-bottom:0;font-family:'Lucida Grande','LucidaGrande',Arial,sans-serif;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;cursor:pointer;border:1px solid #437db9;border-radius:2px;color:#fff;background-color:#437db9;background-repeat:repeat-x;background-image:-moz-linear-gradient(top,#6198d3,#437db9);background-image:-ms-linear-gradient(top,#6198d3,#437db9);background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0%,#6198d3),color-stop(100%,#437db9));background-image:-webkit-linear-gradient(top,#6198d3,#437db9);background-image:-o-linear-gradient(top,#6198d3,#437db9);background-image:linear-gradient(top,#6198d3,#437db9);text-shadow:1px 1px 0 #29619b;box-shadow:inset 0 0 0 1px rgba(255,255,255,0.1),0 2px 2px -1px rgba(0,0,0,0.15);line-height:1.3em;outline:0;}
.btn:hover{background:#437db9;text-decoration:none;}
.btn:active{background:#3970a8;border:1px solid #376ca1;box-shadow:0 2px 1px 0 #315f8f inset;}
.btn-flat{background:#489af1;border:0;color:#fff;}
.btn-flat:hover{background:#3388e3;}
.btn-flat:active{background:#1e79db!important;border:0;box-shadow:inset 0 0 0 1px rgba(255,255,255,0.1),0 2px 2px -1px rgba(0,0,0,0.15);}
.btn-link{padding:4px 12px 5px;font-size:11px;line-height:1.4em;}
.tipitip-target{display:none;}
}
@media screen, print{
.header-container .header{width:1115px;}
.header-container .header p{margin-right:117px;}
}





</style>
