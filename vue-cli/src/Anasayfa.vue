<template>
  <body>
    <kutular class="right clearfix">
      <img
        src="../../pics/bodyresimler/18.PNG"
        alt="Smiley face"
        height="255"
        width="1200"
      />
    </kutular>

    <div class="center clearfix">
      <solmenu class="left clearfix">
        <ul class="no_bullet" >
          <li class="acil" ><a href="">Acil Acil</a></li>
          <li class="fiyatidusen" ><a href="">Fiyatı Düşenler</a></li>
          <li class="son48" >
            <a href="">Son 48 Saat </a>/<a href=""> 1 Hafta </a>/
            <a href="">1 Ay</a>
          </li>
          <hr />
          <li class="hasarsorgulama"><a href="">Hasar Sorgulama</a></li>
          <li class="otoexpertis"><a href="">Oto Ekspertiz yeni</a></li>
          <li class="aracdegerlendirme"><a href="">Araç Değerleme yeni</a></li>
          <li class="aracsigorta"><a href="">Araç Sigorta Teklifleri</a></li>
          <li class="emlakendeksi"><a href="">Emlak Endeksi</a></li>
          <li class="dask"><a href="">DASK ve Konut Sigortası yeni</a></li>
          <hr />
          <li class="emlak"><a href="/#/Emlak">Emlak</a> (1.027.885)</li>
          <ul class="no_bullet soldabosluk">
            <li><a href="">Konut</a>(696.295)</li>
            <li><a href="">İşyeri</a> (131.244)</li>
            <li><a href="">Arsa</a> (187.315)</li>
            <li><a href="">Projeler</a></li>
            <li><a href="">Bina</a> (9.408)</li>
            <li><a href="">Devremülk</a> (2.022)</li>
            <li><a href="">Turistik Tesis</a> (1.599)</li>
          </ul>
          <hr />
          <li class="vasıta"><a href="">Vasıta</a> (467.772)</li>
          <ul class="no_bullet soldabosluk">
            <li><a href="">Otomobil</a> (279.547)</li>
            <li><a href="">Arazi, SUV & Pickup</a> (38.644)</li>
            <li><a href="">Motosiklet</a> (35.056)</li>
            <li><a href="">Minivan & Panelvan</a> (57.456)</li>
            <li><a href="">Ticari Araçlar</a> (34.507)</li>
            <li><a href="">Kiralık Araçlar</a> (8.872)</li>
            <li><a href="">Deniz Araçları</a> (4.434)</li>
            <li><a href="">Hasarlı Araçlar</a> (4.381)</li>
          </ul>

          <div id="demo">
            <span v-if="show">
              <li><a href="">Klasik Araçlar</a> (1.694)</li>
              <li><a href="">Elektrikli Araçlar</a> (1.335)</li>
              <li><a href="">Modifiye Araçlar</a> (115)</li>
              <li><a href="">Hava Araçları</a> (27)</li>
              <li><a href="">ATV</a>(899)</li>
              <li><a href="">UTV</a> (80)</li>
              <li><a href="">Karavan</a> (524)</li>
              <li><a href="">Engelli Plakalı Araçlar</a> (129)</li>
            </span>
            <p v-on:click="show = !show">
              Göster/Gizle
            </p>
            <transition name="fade"> </transition>
          </div>
        </ul>
        <hr />

        <li class="yedek">
          <a href=""> Yedek Parça, Aksesuar,Donanım</a> (1.795.597)
        </li>
        <ul class="no_bullet soldabosluk">
          <li><a href="">Otomotiv Ekipmanları</a> (1.641.871)</li>
          <li><a href="">Motosiklet Ekipmanları</a> (146.671)</li>
          <li><a href="">Deniz Aracı Ekipmanları</a> (7.038)</li>
          <li><a href="">Hava Aracı Ekipmanları</a> (16)</li>
        </ul>
        <hr />
        <li class="ikinciel">
          <a href="">İkinci El veSıfır Alışveriş</a> (1.671.956)
        </li>
        <ul class="no_bullet soldabosluk">
          <li><a href="/#/Laptop">Bilgisayar</a>(252.591)</li>
          <li><a href="">Cep Telefonu</a> (225.453)</li>
          <li><a href="">Fotoğraf & Kamera</a> (40.426)</li>
          <li><a href="">Ev Dekorasyon</a> (196.785)</li>
          <li><a href="">Ev Elektroniği</a> (76.092)</li>
          <li><a href="">Elektrikli Ev Aletleri</a> (59.093)</li>
          <li><a href="">Giyim & Aksesuar</a> (117.686)</li>
          <li><a href="">Saat</a> (38.771)</li>
          <li><a href="">Anne & Bebek</a> (35.564)</li>
          <li><a href="">Kişisel Bakım & Kozmetik</a> (28.028)</li>
          <li><a href="">Hobi & Oyuncak</a> (45.447)</li>
          <li><a href="">Oyun & Konsol</a> (54.015)</li>
          <li><a href="">Kitap, Dergi & Film</a> (21.309)</li>
          <li><a href="">Müzik</a> (66.478)</li>
          <li><a href="">Spor</a> (66.195)</li>
          <li><a href="">Takı, Mücevher & Altın</a> (31.464)</li>
          <li><a href="">Koleksiyon</a> (23.820)</li>
          <li><a href="">Antika</a> (24.318)</li>
          <li><a href="">Bahçe & Yapı Market</a> (89.769)</li>
          <li><a href="">Teknik Elektronik</a> (74.979)</li>
          <li><a href="">Ofis & Kırtasiye</a> (76.138)</li>
          <li><a href="">Yiyecek & İçecek</a> (14.318)</li>
          <li><a href="">Diğer Her Şey</a> (13.216)</li>
        </ul>
        <hr />
        <li class="işmakineleri">
          <a href="">İş Makineleri & Sanayi</a> (69.233)
        </li>
        <ul class="no_bullet soldabosluk">
          <li><a href="">İş Makineleri</a> (12.623)</li>
          <li><a href="">Tarım Makineleri</a> (19.032)</li>
          <li><a href="">Sanayi</a> (34.664)</li>
          <li><a href="">Elektrik & Enerji</a> (2.914)</li>
        </ul>
        <hr />
        <li class="ustalar"><a href="">Ustalar ve Hizmetler</a> (23.773)</li>
        <ul class="no_bullet soldabosluk">
          <li><a href="">Ev Tadilat & Dekorasyon</a></li>
          <li><a href="">Nakliye</a></li>
          <li><a href="">Araç Servis & Bakım</a></li>
          <li><a href="">Tamirat & Teknik Servis</a></li>
          <li><a href="">Düğün & Etkinlik</a></li>
          <li><a href="">Diğer</a></li>
        </ul>

        <hr />
        <li class="özelders"><a href="">Özel Ders Verenler</a> (9.500)</li>
        <ul class="no_bullet soldabosluk">
          <li><a href="">Lise & Üniversite Hazırlık</a> (2.729)</li>
          <li><a href="">İlköğretim</a> (2.843)</li>
          <li><a href="">Yabancı Dil</a> (1.997)</li>
          <div id="demo2">
            <span v-if="show">
              <li><a href="">Bilgisayar</a> (170)</li>
              <li><a href="">Direksiyon</a> (459)</li>
              <li><a href="">Spor</a> (215)</li>
              <li><a href="">Sanat</a> (70)</li>
              <li><a href="">Dans</a> (12)</li>
              <li><a href="">Müzik & Enstrüman</a> (433)</li>
              <li><a href="">Tiyatro & Oyunculuk</a> (11)</li>
              <li><a href="">Kişisel Gelişim</a> (65)</li>
              <li><a href="">Mesleki Dersler</a> (230)</li>
              <li><a href="">Özel Eğitim</a> (229)</li>
              <li><a href="">Çocuk Gelişimi</a> (17)</li>
              <li><a href="">Güzel Konuşma & Diksiyon </a> (10)</li>
              <li><a href="">Fotoğrafçılık</a> (10)</li>
            </span>
            <p v-on:click="show = !show">
              Göster/Gizle
            </p>
            <transition name="fade"> </transition>
          </div>
        </ul>
        <hr />
        <li class="işilanları"><a href="">İş İlanları</a> (12.600)</li>
        <ul class="no_bullet soldabosluk">
          <li><a href="">Avukatlık & Hukuki Danışmanlık</a> (11)</li>
          <li><a href="">Eğitim</a> (261)</li>
          <li><a href="">Eğlence ve Aktiviteler</a> (616)</li>
          <li><a href="">Güzellik ve Bakım</a> (961)</li>
          <li><a href="">IT ve Yazılım Geliştirme</a> (69)</li>
          <li><a href="">İnsan Kaynakları</a> (19)</li>

          <div id="demo3">
            <transition name="fade">
              <span v-if="show">
                <li><a href="">İnşaat ve Yapı</a> (143)</li>
                <li><a href="">İşletme ve Stratejik Yönetim</a> (139)</li>
                <li><a href="">Koruma ve Güvenlik</a> (512)</li>
                <li><a href="">Lojistik ve Taşıma</a> (1.565)</li>
                <li><a href="">Mağazacılık ve Perakendecilik</a> (374)</li>
                <li><a href="">Muhasebe, Finans ve Bankacılık</a>(173)</li>
                <li><a href="">Mühendislik</a> (59)</li>
                <li><a href="">Müşteri Hizmetleri</a> (335)</li>
                <li><a href="">Ofis Yönetimi ve İdari İşler</a> (711)</li>
                <li><a href="">Part Time ve Ek İş Fırsatları</a> (609)</li>
                <li><a href="">Pazarlama ve Ürün Yönetimi</a> (251)</li>
                <li><a href="">Restoran ve Konaklama</a> (2.862)</li>
                <li><a href="">Sağlık</a> (101)</li>
                <li><a href="">Satış</a> (906)</li>
                <li><a href="">Tamir ve Bakım</a> (684)</li>
                <li><a href="">Tarım ve Hayvancılık</a> (86)</li>
                <li><a href="">Tasarım ve Yaratıcılık</a> (144)</li>
                <li><a href="">Tekstil ve Konfeksiyon</a> (530)</li>
                <li><a href="">Üretim ve İmalat</a> (479)</li>
              </span>
            </transition>

            <p v-on:click="show = !show">
              Göster/Gizle
            </p>
          </div>
        </ul>
        <hr />
        <li class="yardımcıara"><a href="">Yardımcı Arayanlar</a> (1.577)</li>
        <ul class="no_bullet soldabosluk">
          <li><a href="">Bebek & Çocuk Bakıcısı </a> (614)</li>
          <li><a href="">Yaşlı & Hasta Bakıcısı</a> (206)</li>
          <li><a href="">Temizlikçi & Ev İşlerine Yardımcı</a> (757)</li>

          <hr />
          <li class="hayvanlaralemi">
            <a href="">Hayvanlar Alemi</a> (101.309)
          </li>
          <ul class="no_bullet soldabosluk">
            <li><a href="">Evcil Hayvanlar</a> (2.363)</li>
            <li><a href="">Akvaryum Balıkları</a> (7.148)</li>
            <li><a href="">Aksesuarlar</a> (17.300)</li>
            <li><a href="">Bakım Ürünleri</a> (511)</li>
            <li><a href="">Yem & Mama</a> (2.119)</li>
            <li><a href="">Kümes Hayvanları</a> (60.265)</li>
            <li><a href="">Büyükbaş Hayvanlar</a> (3.468)</li>
            <li><a href="">Küçükbaş Hayvanlar </a>( 7.340)</li>
            <li><a href="">Deniz Canlıları</a> (142)</li>
            <li><a href="">Sürüngenler</a> (424)</li>
            <li><a href="">Böcekler</a> (229)</li>
          </ul>
        </ul>
        <br />
        <br />
        <ul class="no_bullet soldabosluk">
          Seçtiklerimiz
          <hr />
          <li class="hikayenipaylaş"><a href="">Hikayeni Paylaş</a></li>
          <li class="efsaneilanlar"><a href="">Efsane İlanlar</a></li>
          <li class="ilginçilanlar"><a href="">İlginç İlanlar</a></li>

          <div style="float:left">Haberler</div>
          <div style="float:right"><a href="">Tüm Haberler</a></div>
          <br />
          <hr />
          <li><a href="">sahibinden.com'a 3 Ödül Birden!</a></li>
          <li><a href="">sahibinden.com Brand of the Year seçildi</a></li>
        </ul>
      </solmenu>

      <kutular class="right clearfix">
        <div style="float:left">Anasayfa Vitrini</div>
        <div style="float:right; padding-right: 30px">
          <a href="">Tüm vitrin ilanlarını göster</a>
        </div>
        <br />
        <kutu>
          <a href="https://www.w3schools.com">
            <div id="app-2">
              <span v-bind:title="message">
                <img
                  src="../../pics/bodyresimler/1.1.jpg"
                  alt="Smiley face"
                  height="75"
                  width="100"
                />
                <span>Güneş paneli ile ...</span>
              </span>
            </div>
          </a>
        </kutu>

        <kutu>
          <a href="https://www.w3schools.com">
            <div id="app-3">
              <span v-bind:title="message">
                <img
                  src="../../pics/bodyresimler/1.2.jpg"
                  alt="Smiley face"
                  height="75"
                  width="100"
                />
                <span>Peşin fiyatına</span>
              </span>
            </div>
          </a>
        </kutu>

        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/1.3.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>2017 Hatasız Bo...</span>
          </a>
        </kutu>

        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/1.4.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Sahibinden Taka...</span>
          </a>
        </kutu>

        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/1.5.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Çözüm Oto 2016...</span>
          </a>
        </kutu>

        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/1.6.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Vıp 9+1 Hasar K...</span>
          </a>
        </kutu>

        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/1.7.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Özdemirden Hat...</span>
          </a>
        </kutu>

        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/2.1.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Acil Fırsat! Bim M...</span>
          </a>
        </kutu>

        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/2.2.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>İnönü Mahallesin...</span>
          </a>
        </kutu>

        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/2.3.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Kombpe Set Ismai...</span>
          </a>
        </kutu>

        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/2.4.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Sahibinden Satılı...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/2.5.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Hatasız 2015 Bm...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/2.6.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Ömer Sarı Auto'd...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/2.7.png"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>.</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/3.1.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>2016 Vito 43.00...</span>
          </a>
        </kutu>

        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/3.2.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Hitachi Zx450Ich...</span>
          </a>
        </kutu>

        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/3.3.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Hıstory Garage S...</span>
          </a>
        </kutu>

        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/3.4.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Avrupa Atı Holla...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/3.5.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Hatasız Sahibind...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/3.6.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>İstanbul Arnavut...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/3.7.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Sahibinden Hasar...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/4.1.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Tekbaş City De 1...</span>
          </a>
        </kutu>

        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/4.2.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Ka Yapı Dan Soğ...</span>
          </a>
        </kutu>

        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/4.3.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Boyasız Ilk Gelen...</span>
          </a>
        </kutu>

        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/4.4.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Jaguar S-type Ağ...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/4.5.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Sahibinden Acil S...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/4.6.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Full Servis Bakiml...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/4.7.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Ağır Gebe Ve Süt...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/5.1.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Otokobi--2016 ...</span>
          </a>
        </kutu>

        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/5.2.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Böyle Fırsat Yok! ...</span>
          </a>
        </kutu>

        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/5.3.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Sarkon Otodan H...</span>
          </a>
        </kutu>

        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/5.4.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Şirketlerin Ve Yat...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/5.5.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Sahibinden Acil S...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/5.6.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>'gültekin Inşaat'...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/5.7.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Palladıum Avm Y...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/6.1.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>3+1 Vadıstanbul Fo</span>
          </a>
        </kutu>

        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/6.2.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Şok 350tl Den A...</span>
          </a>
        </kutu>

        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/6.3.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>EN Iyi Konumda ...</span>
          </a>
        </kutu>

        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/6.4.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Becikoğlu Emlak ...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/6.5.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>2011 Model Hata...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/6.6.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Tr'de Ilk 12x50 ...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/6.7.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>//otomatik//201...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/7.1.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Fiyat Düştü-plak...</span>
          </a>
        </kutu>

        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/7.2.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>2016 Model ....26...</span>
          </a>
        </kutu>

        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/7.3.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Bluetoothlu Univ...</span>
          </a>
        </kutu>

        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/7.4.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Plazada Dubleks ...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/7.5.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Gehl 6640 7469 ...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/7.6.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>2mt Makasaralı 1...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/7.7.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Otomotiv Logola...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/8.1.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Peugeot Soysal Pl...</span>
          </a>
        </kutu>

        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/8.2.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Acıbadem Cadde...</span>
          </a>
        </kutu>

        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/8.3.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Tr Bir Ilk10x30 K...</span>
          </a>
        </kutu>

        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/8.4.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Ada Auto'dan 20...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/8.5.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Bintaş Inş.hemen...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/8.6.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Paşaoğlu - C300...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/8.7.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>2012 Model Mer...</span>
          </a>
        </kutu>

        <div class="">
          <!--div class="left2">-->

          <img
            src="../../pics/bodyresimler/14.PNG"
            alt="Smiley face"
            height="110"
            width="900"
          />
          <h3>
            <br /><br /><br /><br /><br />
            <div style="float:left">Projeler</div>
            <div style="margin-left: 700px; width:200px">
              <a href="">Tüm Projeleri Göster</a>
            </div>
          </h3>
          <br />
          <div>
            <img
              src="../../pics/bodyresimler/0.1.jpg"
              alt="Smiley face"
              height="175"
              width="375"
            />
            <div style="float:right;">
              <img
                src="../../pics/bodyresimler/0.2.png"
                alt="Smiley face"
                height="175"
                width="375"
              />
            </div>
          </div>
          <br />
          <span
            ><div style="float:left; width: 300px">
              <a href="https://www.w3schools.com"
                >Avcılar Exclusive (İzmir / Bayraklı)</a
              >
              <br />m2: 100 m2 - 173 m2<br />Teslim Tarihi: Haziran 2021
            </div>
            <div style="float:left; margin-left: 200px; width: 300px">
              <a href="https://www.w3schools.com"
                >Folkart Yaka Evleri (İzmir / Karşıyaka)</a
              >
              <br />m2: 69 m2 - 138 m2<br />Teslim Tarihi: Ağustos 2020
            </div>
          </span>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div style="float:left">Günün Fırsat Ürünleri</div>
          <div style="float:right"><a href="">Tüm Fırsatları Göster</a></div>
          <br />
          <br />
          <img
            src="../../pics/bodyresimler/11.PNG"
            alt="Smiley face"
            height="250"
            width="875"
          />

          <br />
          <div style="float:left">İlginç İlanlar</div>
          <div style="float:right">
            <a href="">Tüm İlginç İlanları Göster</a>
          </div>
          <br />
          <br />
        </div>
      </kutular>
      <kutular class="right clearfix">
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/11.1.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>AYAKKABI YAĞM...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/11.2.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Piyalepara Otom...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/11.3.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Remax Asisten H...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/11.4.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Ters paketlenmiş...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/11.5.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>ÖZEL DİZAYN PR...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/11.6.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>Sea Scooter Deni...</span>
          </a>
        </kutu>
        <kutu>
          <a href="https://www.w3schools.com">
            <img
              src="../../pics/bodyresimler/11.7.jpg"
              alt="Smiley face"
              height="75"
              width="100"
            />
            <span>TÜRKİYE'DE TEK...</span>
          </a>
        </kutu>

        <img
          src="../../pics/bodyresimler/12.PNG"
          alt="Smiley face"
          height="150"
          width="875"
        />

        <div>
          <span style="margin-left:70px;margin-right:70px">Dronelar</span>
          <span style="margin-left:30px;margin-right:50px"
            >Giyilebilir Teknoloji</span
          >
          <span style="margin-left:20px;margin-right:30px"
            >Kablosuz Kulaklıklar</span
          >
          <span style="margin-left:30px;margin-right:30px"
            >Aksiyon Kameralar</span
          >
          <span style="margin-left:10px;margin-right:50px"
            >Elektrikli Ev Aletleri</span
          >
        </div>

        <img
          src="../../pics/bodyresimler/13.PNG"
          alt="Smiley face"
          height="255"
          width="880"
        />
        <br />
        <br />
        <br />
        <div style="height:100px">
          Popüler Aramalar
          <br />

          <div>
            <a href="">
              <benikutula class="one"> ikinciel </benikutula>
            </a>
            <a href="">
              <benikutula class="one"> iPhone XS </benikutula>
            </a>
            <a href="">
              <benikutula class="one"> iPhone XS Max</benikutula>
            </a>
            <a href="">
              <benikutula class="one"> Araç Kiralama </benikutula>
            </a>
            <a href="">
              <benikutula class="one"> Kiralık Villa </benikutula>
            </a>
            <a href="">
              <benikutula class="one"> Passat</benikutula>
            </a>
            <a href="">
              <benikutula class="one"> Kiralık Daire</benikutula>
            </a>
            <a href="">
              <benikutula class="one"> Araba</benikutula>
            </a>
            <a href="">
              <benikutula class="one"> Golf</benikutula>
            </a>

            <a href="">
              <benikutula class="one"> Galaxy Note 9 </benikutula>
            </a>
            <a href="">
              <benikutula class="one"> İstanbul Kiralık Daire </benikutula>
            </a>
            <a href="">
              <benikutula class="one"> ikinci el otomobil </benikutula>
            </a>
          </div>
          <br />
          <br />
        </div>
        <br />
        <br />
        <br />
        En Çok Aranan Hizmetler
        <br />

        <div>
          <a href="">
            <benikutula class="one"> Boyacı </benikutula>
          </a>
          <a href="">
            <benikutula class="one"> Evden Eve Nakliye </benikutula>
          </a>
          <a href="">
            <benikutula class="one"> Mantoloma</benikutula>
          </a>
          <a href="">
            <benikutula class="one"> Su Tesisatı </benikutula>
          </a>
          <a href="">
            <benikutula class="one"> Doğal Gaz Tesisatı</benikutula>
          </a>
          <a href="">
            <benikutula class="one"> Oto Boya</benikutula>
          </a>
          <a href="">
            <benikutula class="one"> Oto Tamiri</benikutula>
          </a>
          <a href="">
            <benikutula class="one"> Elektrikçi </benikutula>
          </a>
        </div>

        <div>
          <a href="">
            <benikutula class="one"> Çilingir </benikutula>
          </a>
          <a href="">
            <benikutula class="one"> Plaka </benikutula>
          </a>
          <a href="">
            <benikutula class="one"> Parke</benikutula>
          </a>
          <a href="">
            <benikutula class="one"> Mutfak Yenileme</benikutula>
          </a>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          En Çok Aranan İş İlanları
          <br />

          <div>
            <a href="">
              <benikutula class="one"> Restoran ve Konaklama</benikutula>
            </a>
            <a href="">
              <benikutula class="one">Mağaza ve Perakendecilik</benikutula>
            </a>
            <a href="">
              <benikutula class="one"> Tekstil ve Konfeksiyon </benikutula>
            </a>
            <a href="">
              <benikutula class="one"> Ofis Elemanı </benikutula>
            </a>
            <a href="">
              <benikutula class="one"> Satış</benikutula>
            </a>
            <a href="">
              <benikutula class="one"> Müşteri Hizmetleri </benikutula>
            </a>
          </div>

          <div>
            <a href="">
              <benikutula class="one">İstanbul İş İlanları</benikutula>
            </a>
            <a href="">
              <benikutula class="one"> Ankara İş İlanları</benikutula>
            </a>
            <a href="">
              <benikutula class="one"> İzmir İş İlanları </benikutula>
            </a>
            <a href="">
              <benikutula class="one"> Adana İş İlanları </benikutula>
            </a>
            <a href="">
              <benikutula class="one"> Bursa İş İlanları </benikutula>
            </a>
            <a href="">
              <benikutula class="one">Antalya İş İlanları</benikutula>
            </a>
          </div>
        </div>
      </kutular>
    </div>
  </body>
</template>














<script>



 export default {
    name: 'App',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Sahibinden.com',
      // all titles will be injected into this template
      titleTemplate: '%s | Anasayfa'
    }
  }








</script>
















<style>

.center{margin:auto;width:65%;}
.right{float:right;width:75%;}
.one{border:1px solid #dfdfdf;border-radius:5px;padding:5px 4px;color:#44474e;font-size:12px;margin:10px;margin-left:0px;padding:10px;float:left;}
.left{float:left;width:23%;}
.clearfix{overflow:auto;}
kutu{padding:10px;float:left;text-align:justify;width:100;}
kutu img{display:block;margin:0 auto;}
ul.no_bullet{list-style-type:none;padding:0;margin:0;}
li.acil:before{background-image:url(../../pics/simgeler.png);background-position:-696px -24px;width:24px;height:24px;content:'';display:inline-block;vertical-align:middle;margin:5px;}
li.fiyatidusen:before{background-image:url(../../pics/simgeler.png);background-position:-552px -168px;width:24px;height:24px;content:'';display:inline-block;vertical-align:middle;margin:5px;}
li.son48:before{background-image:url(../../pics/simgeler.png);background-position:-168px -552px;width:24px;height:24px;content:'';display:inline-block;vertical-align:middle;margin:5px;}
li.hasarsorgulama:before{background-image:url(../../pics/simgeler.png);background-position:-504px -216px;width:24px;height:24px;content:'';display:inline-block;vertical-align:middle;margin:5px;}
li.otoexpertis:before{background-image:url(../../pics/simgeler.png);background-position:-408px -312px;width:24px;height:24px;content:'';display:inline-block;vertical-align:middle;margin:5px;}
li.aracdegerlendirme:before{background-image:url(../../pics/simgeler.png);background-position:-48px -672px;width:24px;height:24px;content:'';display:inline-block;vertical-align:middle;margin:5px;}
li.aracsigorta:before{background-image:url(../../pics/simgeler.png);background-position:-360px -360px;width:24px;height:24px;content:'';display:inline-block;vertical-align:middle;margin:5px;}
li.emlakendeksi:before{background-image:url(../../pics/simgeler.png);background-position:-624px -96px;width:24px;height:24px;content:'';display:inline-block;vertical-align:middle;margin:5px;}
li.dask:before{background-image:url(../../pics/simgeler.png);background-position:-288px -432px;width:24px;height:24px;content:'';display:inline-block;vertical-align:middle;margin:5px;}
li.emlak:before{background-image:url(../../pics/simgeler.png);background-position:-600px -120px;width:24px;height:24px;content:'';display:inline-block;vertical-align:middle;margin:5px;}
li.vasıta:before{background-image:url(../../pics/simgeler.png);background-position:-96px -624px;;     width:24px;height:24px;content:'';display:inline-block;vertical-align:middle;margin:5px;}
li.yedek:before{background-image:url(../../pics/simgeler.png);background-position:0 -720px;width:24px;height:24px;content:'';display:inline-block;vertical-align:middle;margin:5px;}
li.ikinciel:before{background-image:url(../../pics/simgeler.png);background-position:-720px 0;width:24px;height:24px;content:'';display:inline-block;vertical-align:middle;margin:5px;}
li.işmakineleri:before{background-image:url(../../pics/simgeler.png);background-position:-264px -456px;width:24px;height:24px;content:'';display:inline-block;vertical-align:middle;margin:5px;}
li.ustalar:before{background-image:url(../../pics/simgeler.png);background-position:-120px -600px;width:24px;height:24px;content:'';display:inline-block;vertical-align:middle;margin:5px;}
li.özelders:before{background-image:url(../../pics/simgeler.png);background-position:-240px -480px;width:24px;height:24px;content:'';display:inline-block;vertical-align:middle;margin:5px;}
li.işilanları:before{background-image:url(../../pics/simgeler.png);background-position:-336px -384px;width:24px;height:24px;content:'';display:inline-block;vertical-align:middle;margin:5px;}
li.yardımcıara:before{background-image:url(../../pics/simgeler.png);background-position:-24px -696px;width:24px;height:24px;content:'';display:inline-block;vertical-align:middle;margin:5px;}
li.hayvanlaralemi:before{background-image:url(../../pics/simgeler.png);background-position:-480px -240px;width:24px;height:24px;content:'';display:inline-block;vertical-align:middle;margin:5px;}
li.hikayenipaylaş:before{background-image:url(../../pics/simgeler.png);background-position:-432px -288px;width:24px;height:24px;content:'';display:inline-block;vertical-align:middle;margin:5px;}
li.efsaneilanlar:before{background-image:url(../../pics/simgeler.png);background-position:-672px -48px;width:24px;height:24px;content:'';display:inline-block;vertical-align:middle;margin:5px;}
li.ilginçilanlar:before{background-image:url(../../pics/simgeler.png);background-position:-312px -408px;width:24px;height:24px;content:'';display:inline-block;vertical-align:middle;margin:5px;}



</style>
