<template>
  <footer>
    <div class="footer-container">
      <div class="footer phdef pvdef clearfix">
        <ul class="footerMenu footer-menu">
          <li>
            <h2>Kurumsal</h2>
            <ul>
              <li>
                <a>Hakkımızda</a>
              </li>
              <li>
                <a> Medya İletişimi ve Görseller</a>
              </li>
              <li>
                <a>İnsan Kaynakları</a>
              </li>
              <li>
                <a>İletişim</a>
              </li>
            </ul>
          </li>
          <li>
            <h2>Hizmetlerimiz</h2>
            <ul>
              <li>
                <a> Doping</a>
              </li>
              <li>
                <a> Güvenli e-Ticaret (GeT)</a>
              </li>
              <li>
                <a> Toplu Ürün Girişi</a>
              </li>
              <li>
                <a> Reklam</a>
              </li>
              <li>
                <a> sahibinden Doğal Reklam</a>
              </li>
              <li>
                <a> Mobil</a>
              </li>
            </ul>
          </li>
          <li>
            <h2>Mağazalar</h2>
            <ul>
              <li>
                <a> Mağazam</a>
              </li>
              <li>
                <a> Mağaza Açmak İstiyorum</a>
              </li>
              <li>
                <a> Neden Mağaza?</a>
              </li>
              <li>
                <a> Maliyeti Nedir?</a>
              </li>
              <li>
                <a> Emlak Ofisim</a>
              </li>
              <li>
                <a> Galerim</a>
              </li>
            </ul>
          </li>
          <li>
            <h2>Gizlilik ve Kullanım</h2>
            <ul>
              <li>
                <a> Güvenli Alışverişin İpuçları</a>
              </li>
              <li>
                <a> Sözleşmeler ve Kurallar</a>
              </li>
              <li>
                <a> Üyelik Sözleşmesi</a>
              </li>
              <li>
                <a> Kullanım Koşulları</a>
              </li>
              <li>
                <a> Site Haritası</a>
              </li>
              <li>
                <a> Kişisel Verilerin Korunması</a>
              </li>
              <li>
                <a> Yardım ve İşlem Rehberi</a>
              </li>
            </ul>
          </li>
          <li class="followUs follow-us">
            <h2>Bizi Takip Edin</h2>
            <ul>
              <li>
                <a> Facebook</a>
              </li>
              <li>
                <a> Twitter </a>
              </li>
              <li>
                <a> Linkedin</a>
              </li>
              <li>
                <a> Instagram</a>
              </li>
              <li>
                <a> Youtube</a>
              </li>
            </ul>
          </li>
        </ul>

        <div class="clearfix">
          <ul class="contact-menu">
            <li class="call-center">
              <p>7/24 Müşteri Hizmetleri</p>
              <span>0 850 222 44 44</span>
            </li>
            <li class="help-center">
              <p>Yardım Merkezi</p>
            </li>
            <li class="store-logos">
              <a target="_blank" class="store-logo googleplay"></a
              ><a target="_blank" class="store-logo apple"></a>
            </li>
          </ul>
        </div>

        <p class="warningText warning-text">
          sahibinden.com'da yer alan kullanıcıların oluşturduğu tüm içerik,
          görüş ve bilgilerin doğruluğu, eksiksiz ve değişmez olduğu,
          yayınlanması ile ilgili yasal yükümlülükler içeriği oluşturan
          kullanıcıya aittir. Bu içeriğin, görüş ve bilgilerin yanlışlık,
          eksiklik veya yasalarla düzenlenmiş kurallara aykırılığından
          sahibinden.com hiçbir şekilde sorumlu değildir. Sorularınız için ilan
          sahibi ile irtibata geçebilirsiniz.
          <br />
          Yer Sağlayıcı Belge No : 581
        </p>

        <div class="postClassifiedFreeText post-classified-free-text">
          <p>
            (*) Bireysel üyeler için, limitli adetlerde, belirli kategorilerde
            ve belirli kampanyalarda
          </p>
          <a> English</a>
        </div>

        <p class="copyright mobil">
          Copyright © 2000-2019 sahibinden.com
        </p>
      </div>
    </div>
  </footer>
</template>

<script></script>

<style>
ul.soldabosluk {
  margin-left: 35px;
}

ul.soldabosluk li {
  padding: 3px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
h2,
p,
ul,
li,
a {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
a {
  color: #039;
  text-decoration: none;
  outline: 0;
}
a:focus {
  outline: 0;
}
a:hover {
  text-decoration: underline;
}

body {
  font: 12px "Lucida Grande", "LucidaGrande", Arial, sans-serif;
  font-size-adjust: none;
  font-stretch: normal;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  line-height: normal;
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  -ms-text-size-adjust: none;
  text-size-adjust: none;
  background: #fff;
}

.pvdef {
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
}

.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}

.footer-container {
  border-top: 1px solid #dfdfdf;
  background: #f9f9f9;
  position: relative;
  clear: left;
  margin-top: 28px;
}
.footer-container:before {
  content: "";
  background: #fff;
  display: block;
  height: 1px;
  width: 100%;
}
.footer-container .footer {
  width: 984px;
  margin: 0 auto;
  zoom: 1;
  padding: 28px 0;
}
.footer-container .footer .footer-menu {
  float: left;
  overflow: hidden;
  width: 100%;
}
.footer-container .footer .footer-menu li {
  float: left;
  width: 21%;
  margin-bottom: 6px;
}
.footer-container .footer .footer-menu li.follow-us {
  float: right;
  margin-right: 25px;
  width: 130px;
}
.footer-container .footer .footer-menu li li {
  float: none !important;
  line-height: 20px;
  width: inherit;
  overflow: hidden;
}
.footer-container .footer .footer-menu a {
  color: #888;
}
.footer-container .footer h2 {
  font-size: 14px;
  font-weight: bold;
  color: #555;
}
.footer-container .footer h2 + ul {
  margin-top: 12px;
}
.footer-container .footer .contact-menu li {
  float: left;
  padding-left: 50px;
  margin: 30px 40px 10px 0;
  font-weight: 700;
  position: relative;
}
.footer-container .footer .contact-menu li p {
  color: #c55353;
  margin-top: 2px;
}
.footer-container .footer .contact-menu li:before {
  position: absolute;
  left: 0;
  top: -3px;
}

.footer-container .footer .follow-us li {
  float: left;
}
.footer-container .footer .warning-text {
  font-size: 11px;
  color: #888;
  padding: 12px;
  background: #fff;
  border: 1px dashed #ccc;
  border-radius: 2px;
  margin: 8px 0;
}
.footer-container .footer .copyright,
.footer-container .footer .post-classified-free-text {
  color: #555;
  font-size: 11px;
}
.footer-container .footer .post-classified-free-text {
  margin: 0;
  float: right;
}
.footer-container .footer .post-classified-free-text p {
  display: inline;
}
</style>
