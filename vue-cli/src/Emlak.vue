<template>
  <div id="container">
    <div class="top-menu-container clearfix custom-category-container">
		<div class="top-menu-left">
			<div class="uiInlineBox category-list">
		<div class="uiInlineBoxTitle">
            <h1 class="category-name">Emlak</h1>

			</div>
		<div class="uiInlineBoxContent wide">
			<ul class="categoryList" style="overflow: hidden; padding: 0px; width: 204px;">
				
					
					
					
					
					
					<div class="jspContainer" style="width: 204px; height: 256px;"><div class="jspPane" style="padding: 0px; top: 0px; left: 0px; width: 204px;"><li><a href="/kategori/emlak-konut" data-categoryid="3613">Konut</a>
							<span>(701.564)</span>
						</li><li><a href="/kategori/isyeri" data-categoryid="3620">İşyeri</a>
							<span>(131.036)</span>
						</li><li><a href="/kategori/arsa" data-categoryid="89789">Arsa</a>
							<span>(188.636)</span>
						</li><li><a href="/kategori/bina" data-categoryid="3618">Bina</a>
							<span>(9.506)</span>
						</li><li><a href="/kategori/devremulk" data-categoryid="3619">Devremülk</a>
							<span>(1.990)</span>
						</li><li><a href="/kategori/emlak-turistik-tesis" data-categoryid="3617">Turistik Tesis</a>
							<span>(1.650)</span>
						</li></div></div></ul>
			<a href="/alt-kategori/emlak" class="all-sub-categories-link"><strong>
				Tüm Emlak Kategorileri</strong>
			</a>
		</div>
	</div>
</div>
		<div class="top-menu-right">
			<div class="search-menu home" data-category="main">
				<div class="search-menu-container">
					<!-- real estate and commercial block start -->

						<ul class="search-menu-header clearfix">
							<li class="home  active"><a href="#" data-category="isResidental" data-tab="home">Konut</a></li>
							<li class="work "><a href="#" data-category="isCommercial" data-tab="work">İşyeri</a></li>
							<li class="land "><a href="#" data-category="isLand" data-tab="land">Arsa</a></li>
							<li class="building "><a href="#" data-category="isBuildings" data-tab="building">Bina</a></li>
							<li class="timeshare "><a href="#" data-category="isTimeshares" data-tab="timeshare">Devremülk</a></li>
							<li class="tourist-facility "><a href="#" data-category="isTourismFacilities" data-tab="tourist-facility">Turistik Tesis</a></li>
							</ul>
						<form action="/arama/ara" autocomplete="off" id="searchForm" class="searchForm isResidental">
								<div class="search-menu-main">
		                            <div class="menu-part clearfix" style="display: block;">
		                                <div class="categories-area split-area"><select name="categorySelect" id="categorySelect" style="display: none;"><option value="16623">Satılık</option><option value="16622">Kiralık</option><option value="16621">Günlük Kiralık</option><option value="229468">Devren Satılık Konut</option></select><div class="sahibindenSelect-holder"><div class="sahibindenSelect closed categoryArea"><span>Satılık</span><ul class="selectList"><li class="selected" data-value="16623">Satılık</li><li data-value="16622">Kiralık</li><li data-value="16621">Günlük Kiralık</li><li data-value="229468">Devren Satılık Konut</li></ul></div></div><select name="category" id="category" style="display: none;"><option value="16623">Konut</option><option value="16633">Daire</option><option value="152512">Residence</option><option value="16635">Müstakil Ev</option><option value="16636">Villa</option><option value="152456">Çiftlik Evi</option><option value="152480">Köşk &amp; Konak</option><option value="152490">Yalı</option><option value="152496">Yalı Dairesi</option><option value="16640">Yazlık</option><option value="17497">Prefabrik Ev</option><option value="16641">Kooperatif</option></select><div class="sahibindenSelect-holder"><div class="sahibindenSelect closed subCategoryArea"><span>Konut</span><ul class="selectList"><li class="selected" data-value="16623">Konut</li><li data-value="16633">Daire</li><li data-value="152512">Residence</li><li data-value="16635">Müstakil Ev</li><li data-value="16636">Villa</li><li data-value="152456">Çiftlik Evi</li><li data-value="152480">Köşk &amp; Konak</li><li data-value="152490">Yalı</li><li data-value="152496">Yalı Dairesi</li><li data-value="16640">Yazlık</li><li data-value="17497">Prefabrik Ev</li><li data-value="16641">Kooperatif</li></ul></div></div></div>
		                                <div class="location-area">
		                                	<select class="city" name="address_city" id="address_city" style="display: none;">
		                                		<option value="#ANY">İl</option>
                               						 <option value="34">
                                     						   İstanbul</option>
                              						 <option value="6">
                                     						   Ankara</option>
                              						 <option value="35">
                                     						   İzmir</option>
                              						 <option value="1">
                                     						   Adana</option>
                              						 <option value="2">
                                     						   Adıyaman</option>
                              						 <option value="3">
                                     						   Afyonkarahisar</option>
                              						 <option value="4">
                                     						   Ağrı</option>
                              						 <option value="68">
                                     						   Aksaray</option>
                              						 <option value="5">
                                     						   Amasya</option>
                              						 <option value="7">
                                     						   Antalya</option>
                              						 <option value="75">
                                     						   Ardahan</option>
                              						 <option value="8">
                                     						   Artvin</option>
                              						 <option value="9">
                                     						   Aydın</option>
                              						 <option value="10">
                                     						   Balıkesir</option>
                              						 <option value="74">
                                     						   Bartın</option>
                              						 <option value="72">
                                     						   Batman</option>
                              						 <option value="69">
                                     						   Bayburt</option>
                              						 <option value="11">
                                     						   Bilecik</option>
                              						 <option value="12">
                                     						   Bingöl</option>
                              						 <option value="13">
                                     						   Bitlis</option>
                              						 <option value="14">
                                     						   Bolu</option>
                              						 <option value="15">
                                     						   Burdur</option>
                              						 <option value="16">
                                     						   Bursa</option>
                              						 <option value="17">
                                     						   Çanakkale</option>
                              						 <option value="18">
                                     						   Çankırı</option>
                              						 <option value="19">
                                     						   Çorum</option>
                              						 <option value="20">
                                     						   Denizli</option>
                              						 <option value="21">
                                     						   Diyarbakır</option>
                              						 <option value="81">
                                     						   Düzce</option>
                              						 <option value="22">
                                     						   Edirne</option>
                              						 <option value="23">
                                     						   Elazığ</option>
                              						 <option value="24">
                                     						   Erzincan</option>
                              						 <option value="25">
                                     						   Erzurum</option>
                              						 <option value="26">
                                     						   Eskişehir</option>
                              						 <option value="27">
                                     						   Gaziantep</option>
                              						 <option value="28">
                                     						   Giresun</option>
                              						 <option value="29">
                                     						   Gümüşhane</option>
                              						 <option value="30">
                                     						   Hakkari</option>
                              						 <option value="31">
                                     						   Hatay</option>
                              						 <option value="76">
                                     						   Iğdır</option>
                              						 <option value="32">
                                     						   Isparta</option>
                              						 <option value="46">
                                     						   Kahramanmaraş</option>
                              						 <option value="78">
                                     						   Karabük</option>
                              						 <option value="70">
                                     						   Karaman</option>
                              						 <option value="36">
                                     						   Kars</option>
                              						 <option value="37">
                                     						   Kastamonu</option>
                              						 <option value="38">
                                     						   Kayseri</option>
                              						 <option value="71">
                                     						   Kırıkkale</option>
                              						 <option value="39">
                                     						   Kırklareli</option>
                              						 <option value="40">
                                     						   Kırşehir</option>
                              						 <option value="79">
                                     						   Kilis</option>
                              						 <option value="41">
                                     						   Kocaeli</option>
                              						 <option value="42">
                                     						   Konya</option>
                              						 <option value="43">
                                     						   Kütahya</option>
                              						 <option value="44">
                                     						   Malatya</option>
                              						 <option value="45">
                                     						   Manisa</option>
                              						 <option value="47">
                                     						   Mardin</option>
                              						 <option value="33">
                                     						   Mersin</option>
                              						 <option value="48">
                                     						   Muğla</option>
                              						 <option value="49">
                                     						   Muş</option>
                              						 <option value="50">
                                     						   Nevşehir</option>
                              						 <option value="51">
                                     						   Niğde</option>
                              						 <option value="52">
                                     						   Ordu</option>
                              						 <option value="80">
                                     						   Osmaniye</option>
                              						 <option value="53">
                                     						   Rize</option>
                              						 <option value="54">
                                     						   Sakarya</option>
                              						 <option value="55">
                                     						   Samsun</option>
                              						 <option value="56">
                                     						   Siirt</option>
                              						 <option value="57">
                                     						   Sinop</option>
                              						 <option value="58">
                                     						   Sivas</option>
                              						 <option value="63">
                                     						   Şanlıurfa</option>
                              						 <option value="73">
                                     						   Şırnak</option>
                              						 <option value="59">
                                     						   Tekirdağ</option>
                              						 <option value="60">
                                     						   Tokat</option>
                              						 <option value="61">
                                     						   Trabzon</option>
                              						 <option value="62">
                                     						   Tunceli</option>
                              						 <option value="64">
                                     						   Uşak</option>
                              						 <option value="65">
                                     						   Van</option>
                              						 <option value="77">
                                     						   Yalova</option>
                              						 <option value="66">
                                     						   Yozgat</option>
                              						 <option value="67">
                                     						   Zonguldak</option>
                              						 </select><div class="sahibindenSelect-holder"><div class="sahibindenSelect closed city"><span>İl</span><ul class="selectList"><li class="selected" data-value="#ANY">İl</li><li data-value="34">
                                     						   İstanbul</li><li data-value="6">
                                     						   Ankara</li><li data-value="35">
                                     						   İzmir</li><li data-value="1">
                                     						   Adana</li><li data-value="2">
                                     						   Adıyaman</li><li data-value="3">
                                     						   Afyonkarahisar</li><li data-value="4">
                                     						   Ağrı</li><li data-value="68">
                                     						   Aksaray</li><li data-value="5">
                                     						   Amasya</li><li data-value="7">
                                     						   Antalya</li><li data-value="75">
                                     						   Ardahan</li><li data-value="8">
                                     						   Artvin</li><li data-value="9">
                                     						   Aydın</li><li data-value="10">
                                     						   Balıkesir</li><li data-value="74">
                                     						   Bartın</li><li data-value="72">
                                     						   Batman</li><li data-value="69">
                                     						   Bayburt</li><li data-value="11">
                                     						   Bilecik</li><li data-value="12">
                                     						   Bingöl</li><li data-value="13">
                                     						   Bitlis</li><li data-value="14">
                                     						   Bolu</li><li data-value="15">
                                     						   Burdur</li><li data-value="16">
                                     						   Bursa</li><li data-value="17">
                                     						   Çanakkale</li><li data-value="18">
                                     						   Çankırı</li><li data-value="19">
                                     						   Çorum</li><li data-value="20">
                                     						   Denizli</li><li data-value="21">
                                     						   Diyarbakır</li><li data-value="81">
                                     						   Düzce</li><li data-value="22">
                                     						   Edirne</li><li data-value="23">
                                     						   Elazığ</li><li data-value="24">
                                     						   Erzincan</li><li data-value="25">
                                     						   Erzurum</li><li data-value="26">
                                     						   Eskişehir</li><li data-value="27">
                                     						   Gaziantep</li><li data-value="28">
                                     						   Giresun</li><li data-value="29">
                                     						   Gümüşhane</li><li data-value="30">
                                     						   Hakkari</li><li data-value="31">
                                     						   Hatay</li><li data-value="76">
                                     						   Iğdır</li><li data-value="32">
                                     						   Isparta</li><li data-value="46">
                                     						   Kahramanmaraş</li><li data-value="78">
                                     						   Karabük</li><li data-value="70">
                                     						   Karaman</li><li data-value="36">
                                     						   Kars</li><li data-value="37">
                                     						   Kastamonu</li><li data-value="38">
                                     						   Kayseri</li><li data-value="71">
                                     						   Kırıkkale</li><li data-value="39">
                                     						   Kırklareli</li><li data-value="40">
                                     						   Kırşehir</li><li data-value="79">
                                     						   Kilis</li><li data-value="41">
                                     						   Kocaeli</li><li data-value="42">
                                     						   Konya</li><li data-value="43">
                                     						   Kütahya</li><li data-value="44">
                                     						   Malatya</li><li data-value="45">
                                     						   Manisa</li><li data-value="47">
                                     						   Mardin</li><li data-value="33">
                                     						   Mersin</li><li data-value="48">
                                     						   Muğla</li><li data-value="49">
                                     						   Muş</li><li data-value="50">
                                     						   Nevşehir</li><li data-value="51">
                                     						   Niğde</li><li data-value="52">
                                     						   Ordu</li><li data-value="80">
                                     						   Osmaniye</li><li data-value="53">
                                     						   Rize</li><li data-value="54">
                                     						   Sakarya</li><li data-value="55">
                                     						   Samsun</li><li data-value="56">
                                     						   Siirt</li><li data-value="57">
                                     						   Sinop</li><li data-value="58">
                                     						   Sivas</li><li data-value="63">
                                     						   Şanlıurfa</li><li data-value="73">
                                     						   Şırnak</li><li data-value="59">
                                     						   Tekirdağ</li><li data-value="60">
                                     						   Tokat</li><li data-value="61">
                                     						   Trabzon</li><li data-value="62">
                                     						   Tunceli</li><li data-value="64">
                                     						   Uşak</li><li data-value="65">
                                     						   Van</li><li data-value="77">
                                     						   Yalova</li><li data-value="66">
                                     						   Yozgat</li><li data-value="67">
                                     						   Zonguldak</li></ul></div></div>
		                                	<select class="town" name="address_town" id="address_town" disabled="disabled" style="display: none;">
		                                		<option value="">İlçe</option>
		                                	</select><div class="sahibindenSelect-holder"><div class="sahibindenSelect closed town select-disabled"><span>İlçe</span><ul class="selectList"><li class="selected" data-value="">İlçe</li></ul></div></div>
		                                	<select class="district" name="address_quarter" id="address_quarter" disabled="disabled" multiple="" style="display: none;">
		                                		<option value="">Mahalle</option>
		                                	</select><div class="sahibindenSelect-holder"><div class="sahibindenSelect closed district select-disabled"><span>Mahalle</span><ul class="checkList"><li><input type="checkbox" id="address_quarter_option_0" class="sub-checkbox option-checkbox" name="address_quarter" value=""><label for="address_quarter_option_0" class="option-label">Mahalle</label></li></ul></div></div>
		                                </div>
		                            </div>
		                            <div class="menu-part clearfix" style="display: block;">
	                                	<div class="selectable-area split-area">
	                                        <input type="text" class="priceField" placeholder="Min TL" id="minPrice" name="price_min" value="">
	                                        <span class="splitter">
	                                            -
	                                        </span>
	                                        <input type="text" class="priceField" placeholder="Max TL" id="maxPrice" name="price_max" value="">
	                                        <select name="price_currency" id="" style="display: none;">
	                                            <option value="1">TL</option>
	                                            <option value="2">USD</option>
	                                            <option value="3">EUR</option>
	                                            <option value="4">GBP</option>
	                                            </select><div class="sahibindenSelect-holder"><div class="sahibindenSelect closed"><span>TL</span><ul class="selectList"><li class="selected" data-value="1">TL</li><li data-value="2">USD</li><li data-value="3">EUR</li><li data-value="4">GBP</li></ul></div></div>
	                                    </div>
	                                    <div class="selectable-area room-area">
	                                    	<select class="rooms residental" name="a20" id="a20" data-section="a20" multiple="" style="display: none;">
                           						 <option value="#ANY">
                                 						   Tümü</option>
                          						 <option value="38472">
                                 						   Stüdyo (1+0)</option>
                          						 <option value="38473">
                                 						   1+1</option>
                          						 <option value="1206094">
                                 						   1.5+1</option>
                          						 <option value="1213206">
                                 						   2+0</option>
                          						 <option value="38470">
                                 						   2+1</option>
                          						 <option value="1227923">
                                 						   2.5+1</option>
                          						 <option value="38496">
                                 						   2+2</option>
                          						 <option value="38474">
                                 						   3+1</option>
                          						 <option value="1227924">
                                 						   3.5+1</option>
                          						 <option value="38486">
                                 						   3+2</option>
                          						 <option value="38471">
                                 						   4+1</option>
                          						 <option value="1227925">
                                 						   4.5+1</option>
                          						 <option value="38485">
                                 						   4+2</option>
                          						 <option value="217738">
                                 						   4+3</option>
                          						 <option value="38502">
                                 						   4+4</option>
                          						 <option value="38475">
                                 						   5+1</option>
                          						 <option value="38479">
                                 						   5+2</option>
                          						 <option value="38494">
                                 						   5+3</option>
                          						 <option value="38497">
                                 						   5+4</option>
                          						 <option value="38477">
                                 						   6+1</option>
                          						 <option value="38480">
                                 						   6+2</option>
                          						 <option value="38500">
                                 						   6+3</option>
                          						 <option value="38478">
                                 						   7+1</option>
                          						 <option value="38481">
                                 						   7+2</option>
                          						 <option value="38490">
                                 						   7+3</option>
                          						 <option value="38482">
                                 						   8+1</option>
                          						 <option value="38483">
                                 						   8+2</option>
                          						 <option value="1133410">
                                 						   8+3</option>
                          						 <option value="38498">
                                 						   8+4</option>
                          						 <option value="38491">
                                 						   9+1</option>
                          						 <option value="38492">
                                 						   9+2</option>
                          						 <option value="38493">
                                 						   9+3</option>
                          						 <option value="38487">
                                 						   9+4</option>
                          						 <option value="38488">
                                 						   9+5</option>
                          						 <option value="38489">
                                 						   9+6</option>
                          						 <option value="38501">
                                 						   10+1</option>
                          						 <option value="38495">
                                 						   10+2</option>
                          						 <option value="38476">
                                 						   10 Üzeri</option>
                          						 </select><div class="sahibindenSelect-holder"><div class="sahibindenSelect closed rooms residental"><span>Oda Sayısı</span><ul class="checkList"><li><input type="checkbox" id="a20_option_0" class="sub-checkbox option-checkbox" name="a20" value="#ANY"><label for="a20_option_0" class="option-label">
                                 						   Tümü</label></li><li><input type="checkbox" id="a20_option_1" class="sub-checkbox option-checkbox" name="a20" value="38472"><label for="a20_option_1" class="option-label">
                                 						   Stüdyo (1+0)</label></li><li><input type="checkbox" id="a20_option_2" class="sub-checkbox option-checkbox" name="a20" value="38473"><label for="a20_option_2" class="option-label">
                                 						   1+1</label></li><li><input type="checkbox" id="a20_option_3" class="sub-checkbox option-checkbox" name="a20" value="1206094"><label for="a20_option_3" class="option-label">
                                 						   1.5+1</label></li><li><input type="checkbox" id="a20_option_4" class="sub-checkbox option-checkbox" name="a20" value="1213206"><label for="a20_option_4" class="option-label">
                                 						   2+0</label></li><li><input type="checkbox" id="a20_option_5" class="sub-checkbox option-checkbox" name="a20" value="38470"><label for="a20_option_5" class="option-label">
                                 						   2+1</label></li><li><input type="checkbox" id="a20_option_6" class="sub-checkbox option-checkbox" name="a20" value="1227923"><label for="a20_option_6" class="option-label">
                                 						   2.5+1</label></li><li><input type="checkbox" id="a20_option_7" class="sub-checkbox option-checkbox" name="a20" value="38496"><label for="a20_option_7" class="option-label">
                                 						   2+2</label></li><li><input type="checkbox" id="a20_option_8" class="sub-checkbox option-checkbox" name="a20" value="38474"><label for="a20_option_8" class="option-label">
                                 						   3+1</label></li><li><input type="checkbox" id="a20_option_9" class="sub-checkbox option-checkbox" name="a20" value="1227924"><label for="a20_option_9" class="option-label">
                                 						   3.5+1</label></li><li><input type="checkbox" id="a20_option_10" class="sub-checkbox option-checkbox" name="a20" value="38486"><label for="a20_option_10" class="option-label">
                                 						   3+2</label></li><li><input type="checkbox" id="a20_option_11" class="sub-checkbox option-checkbox" name="a20" value="38471"><label for="a20_option_11" class="option-label">
                                 						   4+1</label></li><li><input type="checkbox" id="a20_option_12" class="sub-checkbox option-checkbox" name="a20" value="1227925"><label for="a20_option_12" class="option-label">
                                 						   4.5+1</label></li><li><input type="checkbox" id="a20_option_13" class="sub-checkbox option-checkbox" name="a20" value="38485"><label for="a20_option_13" class="option-label">
                                 						   4+2</label></li><li><input type="checkbox" id="a20_option_14" class="sub-checkbox option-checkbox" name="a20" value="217738"><label for="a20_option_14" class="option-label">
                                 						   4+3</label></li><li><input type="checkbox" id="a20_option_15" class="sub-checkbox option-checkbox" name="a20" value="38502"><label for="a20_option_15" class="option-label">
                                 						   4+4</label></li><li><input type="checkbox" id="a20_option_16" class="sub-checkbox option-checkbox" name="a20" value="38475"><label for="a20_option_16" class="option-label">
                                 						   5+1</label></li><li><input type="checkbox" id="a20_option_17" class="sub-checkbox option-checkbox" name="a20" value="38479"><label for="a20_option_17" class="option-label">
                                 						   5+2</label></li><li><input type="checkbox" id="a20_option_18" class="sub-checkbox option-checkbox" name="a20" value="38494"><label for="a20_option_18" class="option-label">
                                 						   5+3</label></li><li><input type="checkbox" id="a20_option_19" class="sub-checkbox option-checkbox" name="a20" value="38497"><label for="a20_option_19" class="option-label">
                                 						   5+4</label></li><li><input type="checkbox" id="a20_option_20" class="sub-checkbox option-checkbox" name="a20" value="38477"><label for="a20_option_20" class="option-label">
                                 						   6+1</label></li><li><input type="checkbox" id="a20_option_21" class="sub-checkbox option-checkbox" name="a20" value="38480"><label for="a20_option_21" class="option-label">
                                 						   6+2</label></li><li><input type="checkbox" id="a20_option_22" class="sub-checkbox option-checkbox" name="a20" value="38500"><label for="a20_option_22" class="option-label">
                                 						   6+3</label></li><li><input type="checkbox" id="a20_option_23" class="sub-checkbox option-checkbox" name="a20" value="38478"><label for="a20_option_23" class="option-label">
                                 						   7+1</label></li><li><input type="checkbox" id="a20_option_24" class="sub-checkbox option-checkbox" name="a20" value="38481"><label for="a20_option_24" class="option-label">
                                 						   7+2</label></li><li><input type="checkbox" id="a20_option_25" class="sub-checkbox option-checkbox" name="a20" value="38490"><label for="a20_option_25" class="option-label">
                                 						   7+3</label></li><li><input type="checkbox" id="a20_option_26" class="sub-checkbox option-checkbox" name="a20" value="38482"><label for="a20_option_26" class="option-label">
                                 						   8+1</label></li><li><input type="checkbox" id="a20_option_27" class="sub-checkbox option-checkbox" name="a20" value="38483"><label for="a20_option_27" class="option-label">
                                 						   8+2</label></li><li><input type="checkbox" id="a20_option_28" class="sub-checkbox option-checkbox" name="a20" value="1133410"><label for="a20_option_28" class="option-label">
                                 						   8+3</label></li><li><input type="checkbox" id="a20_option_29" class="sub-checkbox option-checkbox" name="a20" value="38498"><label for="a20_option_29" class="option-label">
                                 						   8+4</label></li><li><input type="checkbox" id="a20_option_30" class="sub-checkbox option-checkbox" name="a20" value="38491"><label for="a20_option_30" class="option-label">
                                 						   9+1</label></li><li><input type="checkbox" id="a20_option_31" class="sub-checkbox option-checkbox" name="a20" value="38492"><label for="a20_option_31" class="option-label">
                                 						   9+2</label></li><li><input type="checkbox" id="a20_option_32" class="sub-checkbox option-checkbox" name="a20" value="38493"><label for="a20_option_32" class="option-label">
                                 						   9+3</label></li><li><input type="checkbox" id="a20_option_33" class="sub-checkbox option-checkbox" name="a20" value="38487"><label for="a20_option_33" class="option-label">
                                 						   9+4</label></li><li><input type="checkbox" id="a20_option_34" class="sub-checkbox option-checkbox" name="a20" value="38488"><label for="a20_option_34" class="option-label">
                                 						   9+5</label></li><li><input type="checkbox" id="a20_option_35" class="sub-checkbox option-checkbox" name="a20" value="38489"><label for="a20_option_35" class="option-label">
                                 						   9+6</label></li><li><input type="checkbox" id="a20_option_36" class="sub-checkbox option-checkbox" name="a20" value="38501"><label for="a20_option_36" class="option-label">
                                 						   10+1</label></li><li><input type="checkbox" id="a20_option_37" class="sub-checkbox option-checkbox" name="a20" value="38495"><label for="a20_option_37" class="option-label">
                                 						   10+2</label></li><li><input type="checkbox" id="a20_option_38" class="sub-checkbox option-checkbox" name="a20" value="38476"><label for="a20_option_38" class="option-label">
                                 						   10 Üzeri</label></li></ul></div></div>
	                                    </div>
	                                    <div class="button-holder">
	                                    	<a href="javascript:;" class="btn search">Ara</a>
		                            		<a class="btn btn-alternative searchOnMap" href="javascript:;"><span class="mapSearchButton">Haritada Ara</span></a>
	                                    </div>
		                            </div>
		                            <div class="menu-part clearfix" style="display: block;">
		                            	<a href="#" class="viewAllLightbox">Daha fazla seçenek göster</a>
		                            </div>
			                    </div>

							</form>
						<!-- real estate and commercial block ends -->

						<form class="searchForm isCommercial  hidden" autocomplete="off" action="/arama/ara" id="searchForm">
			                    <div class="search-menu-main">
			                        <div class="menu-part clearfix">
		                                <div class="categories-area split-area"></div>
		                                <div class="location-area">
		                                	<select class="city" name="address_city" id="address_city" style="display: none;">
		                                		<option value="#ANY">İl</option>
                               						 <option value="34">
                                     						   İstanbul</option>
                              						 <option value="6">
                                     						   Ankara</option>
                              						 <option value="35">
                                     						   İzmir</option>
                              						 <option value="1">
                                     						   Adana</option>
                              						 <option value="2">
                                     						   Adıyaman</option>
                              						 <option value="3">
                                     						   Afyonkarahisar</option>
                              						 <option value="4">
                                     						   Ağrı</option>
                              						 <option value="68">
                                     						   Aksaray</option>
                              						 <option value="5">
                                     						   Amasya</option>
                              						 <option value="7">
                                     						   Antalya</option>
                              						 <option value="75">
                                     						   Ardahan</option>
                              						 <option value="8">
                                     						   Artvin</option>
                              						 <option value="9">
                                     						   Aydın</option>
                              						 <option value="10">
                                     						   Balıkesir</option>
                              						 <option value="74">
                                     						   Bartın</option>
                              						 <option value="72">
                                     						   Batman</option>
                              						 <option value="69">
                                     						   Bayburt</option>
                              						 <option value="11">
                                     						   Bilecik</option>
                              						 <option value="12">
                                     						   Bingöl</option>
                              						 <option value="13">
                                     						   Bitlis</option>
                              						 <option value="14">
                                     						   Bolu</option>
                              						 <option value="15">
                                     						   Burdur</option>
                              						 <option value="16">
                                     						   Bursa</option>
                              						 <option value="17">
                                     						   Çanakkale</option>
                              						 <option value="18">
                                     						   Çankırı</option>
                              						 <option value="19">
                                     						   Çorum</option>
                              						 <option value="20">
                                     						   Denizli</option>
                              						 <option value="21">
                                     						   Diyarbakır</option>
                              						 <option value="81">
                                     						   Düzce</option>
                              						 <option value="22">
                                     						   Edirne</option>
                              						 <option value="23">
                                     						   Elazığ</option>
                              						 <option value="24">
                                     						   Erzincan</option>
                              						 <option value="25">
                                     						   Erzurum</option>
                              						 <option value="26">
                                     						   Eskişehir</option>
                              						 <option value="27">
                                     						   Gaziantep</option>
                              						 <option value="28">
                                     						   Giresun</option>
                              						 <option value="29">
                                     						   Gümüşhane</option>
                              						 <option value="30">
                                     						   Hakkari</option>
                              						 <option value="31">
                                     						   Hatay</option>
                              						 <option value="76">
                                     						   Iğdır</option>
                              						 <option value="32">
                                     						   Isparta</option>
                              						 <option value="46">
                                     						   Kahramanmaraş</option>
                              						 <option value="78">
                                     						   Karabük</option>
                              						 <option value="70">
                                     						   Karaman</option>
                              						 <option value="36">
                                     						   Kars</option>
                              						 <option value="37">
                                     						   Kastamonu</option>
                              						 <option value="38">
                                     						   Kayseri</option>
                              						 <option value="71">
                                     						   Kırıkkale</option>
                              						 <option value="39">
                                     						   Kırklareli</option>
                              						 <option value="40">
                                     						   Kırşehir</option>
                              						 <option value="79">
                                     						   Kilis</option>
                              						 <option value="41">
                                     						   Kocaeli</option>
                              						 <option value="42">
                                     						   Konya</option>
                              						 <option value="43">
                                     						   Kütahya</option>
                              						 <option value="44">
                                     						   Malatya</option>
                              						 <option value="45">
                                     						   Manisa</option>
                              						 <option value="47">
                                     						   Mardin</option>
                              						 <option value="33">
                                     						   Mersin</option>
                              						 <option value="48">
                                     						   Muğla</option>
                              						 <option value="49">
                                     						   Muş</option>
                              						 <option value="50">
                                     						   Nevşehir</option>
                              						 <option value="51">
                                     						   Niğde</option>
                              						 <option value="52">
                                     						   Ordu</option>
                              						 <option value="80">
                                     						   Osmaniye</option>
                              						 <option value="53">
                                     						   Rize</option>
                              						 <option value="54">
                                     						   Sakarya</option>
                              						 <option value="55">
                                     						   Samsun</option>
                              						 <option value="56">
                                     						   Siirt</option>
                              						 <option value="57">
                                     						   Sinop</option>
                              						 <option value="58">
                                     						   Sivas</option>
                              						 <option value="63">
                                     						   Şanlıurfa</option>
                              						 <option value="73">
                                     						   Şırnak</option>
                              						 <option value="59">
                                     						   Tekirdağ</option>
                              						 <option value="60">
                                     						   Tokat</option>
                              						 <option value="61">
                                     						   Trabzon</option>
                              						 <option value="62">
                                     						   Tunceli</option>
                              						 <option value="64">
                                     						   Uşak</option>
                              						 <option value="65">
                                     						   Van</option>
                              						 <option value="77">
                                     						   Yalova</option>
                              						 <option value="66">
                                     						   Yozgat</option>
                              						 <option value="67">
                                     						   Zonguldak</option>
                              						 </select><div class="sahibindenSelect-holder"><div class="sahibindenSelect closed city"><span>İl</span><ul class="selectList"><li class="selected" data-value="#ANY">İl</li><li data-value="34">
                                     						   İstanbul</li><li data-value="6">
                                     						   Ankara</li><li data-value="35">
                                     						   İzmir</li><li data-value="1">
                                     						   Adana</li><li data-value="2">
                                     						   Adıyaman</li><li data-value="3">
                                     						   Afyonkarahisar</li><li data-value="4">
                                     						   Ağrı</li><li data-value="68">
                                     						   Aksaray</li><li data-value="5">
                                     						   Amasya</li><li data-value="7">
                                     						   Antalya</li><li data-value="75">
                                     						   Ardahan</li><li data-value="8">
                                     						   Artvin</li><li data-value="9">
                                     						   Aydın</li><li data-value="10">
                                     						   Balıkesir</li><li data-value="74">
                                     						   Bartın</li><li data-value="72">
                                     						   Batman</li><li data-value="69">
                                     						   Bayburt</li><li data-value="11">
                                     						   Bilecik</li><li data-value="12">
                                     						   Bingöl</li><li data-value="13">
                                     						   Bitlis</li><li data-value="14">
                                     						   Bolu</li><li data-value="15">
                                     						   Burdur</li><li data-value="16">
                                     						   Bursa</li><li data-value="17">
                                     						   Çanakkale</li><li data-value="18">
                                     						   Çankırı</li><li data-value="19">
                                     						   Çorum</li><li data-value="20">
                                     						   Denizli</li><li data-value="21">
                                     						   Diyarbakır</li><li data-value="81">
                                     						   Düzce</li><li data-value="22">
                                     						   Edirne</li><li data-value="23">
                                     						   Elazığ</li><li data-value="24">
                                     						   Erzincan</li><li data-value="25">
                                     						   Erzurum</li><li data-value="26">
                                     						   Eskişehir</li><li data-value="27">
                                     						   Gaziantep</li><li data-value="28">
                                     						   Giresun</li><li data-value="29">
                                     						   Gümüşhane</li><li data-value="30">
                                     						   Hakkari</li><li data-value="31">
                                     						   Hatay</li><li data-value="76">
                                     						   Iğdır</li><li data-value="32">
                                     						   Isparta</li><li data-value="46">
                                     						   Kahramanmaraş</li><li data-value="78">
                                     						   Karabük</li><li data-value="70">
                                     						   Karaman</li><li data-value="36">
                                     						   Kars</li><li data-value="37">
                                     						   Kastamonu</li><li data-value="38">
                                     						   Kayseri</li><li data-value="71">
                                     						   Kırıkkale</li><li data-value="39">
                                     						   Kırklareli</li><li data-value="40">
                                     						   Kırşehir</li><li data-value="79">
                                     						   Kilis</li><li data-value="41">
                                     						   Kocaeli</li><li data-value="42">
                                     						   Konya</li><li data-value="43">
                                     						   Kütahya</li><li data-value="44">
                                     						   Malatya</li><li data-value="45">
                                     						   Manisa</li><li data-value="47">
                                     						   Mardin</li><li data-value="33">
                                     						   Mersin</li><li data-value="48">
                                     						   Muğla</li><li data-value="49">
                                     						   Muş</li><li data-value="50">
                                     						   Nevşehir</li><li data-value="51">
                                     						   Niğde</li><li data-value="52">
                                     						   Ordu</li><li data-value="80">
                                     						   Osmaniye</li><li data-value="53">
                                     						   Rize</li><li data-value="54">
                                     						   Sakarya</li><li data-value="55">
                                     						   Samsun</li><li data-value="56">
                                     						   Siirt</li><li data-value="57">
                                     						   Sinop</li><li data-value="58">
                                     						   Sivas</li><li data-value="63">
                                     						   Şanlıurfa</li><li data-value="73">
                                     						   Şırnak</li><li data-value="59">
                                     						   Tekirdağ</li><li data-value="60">
                                     						   Tokat</li><li data-value="61">
                                     						   Trabzon</li><li data-value="62">
                                     						   Tunceli</li><li data-value="64">
                                     						   Uşak</li><li data-value="65">
                                     						   Van</li><li data-value="77">
                                     						   Yalova</li><li data-value="66">
                                     						   Yozgat</li><li data-value="67">
                                     						   Zonguldak</li></ul></div></div>
		                                	<select class="town" name="address_town" id="address_town" disabled="disabled" style="display: none;">
		                                		<option value="">İlçe</option>
		                                	</select><div class="sahibindenSelect-holder"><div class="sahibindenSelect closed town select-disabled"><span>İlçe</span><ul class="selectList"><li class="selected" data-value="">İlçe</li></ul></div></div>
		                                	<select class="district" name="address_quarter" id="address_district" disabled="disabled" multiple="" style="display: none;">
		                                		<option value="">Mahalle</option>
		                                	</select><div class="sahibindenSelect-holder"><div class="sahibindenSelect closed district select-disabled"><span>Mahalle</span><ul class="checkList"><li><input type="checkbox" id="address_quarter_option_0" class="sub-checkbox option-checkbox" name="address_quarter" value=""><label for="address_quarter_option_0" class="option-label">Mahalle</label></li></ul></div></div>
		                                </div>
		                            </div>
		                            <div class="menu-part clearfix">
										<div class="selectable-area">
	                                        <input type="text" class="priceField" placeholder="Min TL" id="minPrice" name="price_min" value="">
	                                        <span class="splitter">
	                                            -
	                                        </span>
	                                        <input type="text" class="priceField" placeholder="Max TL" id="maxPrice" name="price_max" value="">
	                                          <select name="price_currency" id="" style="display: none;">
	                                            <option value="1">TL</option>
	                                            <option value="2">USD</option>
	                                            <option value="3">EUR</option>
	                                            <option value="4">GBP</option>
	                                            </select><div class="sahibindenSelect-holder"><div class="sahibindenSelect closed"><span>TL</span><ul class="selectList"><li class="selected" data-value="1">TL</li><li data-value="2">USD</li><li data-value="3">EUR</li><li data-value="4">GBP</li></ul></div></div>
	                                    </div>
	                                    <div class="button-holder">
	                                    	<a href="javascript:;" class="btn search">Ara</a>
		                            		<a class="btn btn-alternative searchOnMap" href="javascript:;"><span class="mapSearchButton">Haritada Ara</span></a>
	                                    </div>
		                            </div>
		                            <div class="menu-part clearfix">
		                            	<a href="#" class="viewAllLightbox">Daha fazla seçenek göster</a>
		                            </div>
			                    </div>
		               		 </form>
						<!-- commercial tab blog ends -->

							<!-- land tab blog starts -->
						<form class="searchForm isLand  hidden" autocomplete="off" action="/arama/ara" id="searchForm">
			                    <div class="search-menu-main">
			                        <div class="menu-part clearfix">
		                                <div class="categories-area split-area"></div>
		                                <div class="location-area">
		                                	<select class="city" name="address_city" id="address_city" style="display: none;">
		                                		<option value="#ANY">İl</option>
                               						 <option value="34">
                                     						   İstanbul</option>
                              						 <option value="6">
                                     						   Ankara</option>
                              						 <option value="35">
                                     						   İzmir</option>
                              						 <option value="1">
                                     						   Adana</option>
                              						 <option value="2">
                                     						   Adıyaman</option>
                              						 <option value="3">
                                     						   Afyonkarahisar</option>
                              						 <option value="4">
                                     						   Ağrı</option>
                              						 <option value="68">
                                     						   Aksaray</option>
                              						 <option value="5">
                                     						   Amasya</option>
                              						 <option value="7">
                                     						   Antalya</option>
                              						 <option value="75">
                                     						   Ardahan</option>
                              						 <option value="8">
                                     						   Artvin</option>
                              						 <option value="9">
                                     						   Aydın</option>
                              						 <option value="10">
                                     						   Balıkesir</option>
                              						 <option value="74">
                                     						   Bartın</option>
                              						 <option value="72">
                                     						   Batman</option>
                              						 <option value="69">
                                     						   Bayburt</option>
                              						 <option value="11">
                                     						   Bilecik</option>
                              						 <option value="12">
                                     						   Bingöl</option>
                              						 <option value="13">
                                     						   Bitlis</option>
                              						 <option value="14">
                                     						   Bolu</option>
                              						 <option value="15">
                                     						   Burdur</option>
                              						 <option value="16">
                                     						   Bursa</option>
                              						 <option value="17">
                                     						   Çanakkale</option>
                              						 <option value="18">
                                     						   Çankırı</option>
                              						 <option value="19">
                                     						   Çorum</option>
                              						 <option value="20">
                                     						   Denizli</option>
                              						 <option value="21">
                                     						   Diyarbakır</option>
                              						 <option value="81">
                                     						   Düzce</option>
                              						 <option value="22">
                                     						   Edirne</option>
                              						 <option value="23">
                                     						   Elazığ</option>
                              						 <option value="24">
                                     						   Erzincan</option>
                              						 <option value="25">
                                     						   Erzurum</option>
                              						 <option value="26">
                                     						   Eskişehir</option>
                              						 <option value="27">
                                     						   Gaziantep</option>
                              						 <option value="28">
                                     						   Giresun</option>
                              						 <option value="29">
                                     						   Gümüşhane</option>
                              						 <option value="30">
                                     						   Hakkari</option>
                              						 <option value="31">
                                     						   Hatay</option>
                              						 <option value="76">
                                     						   Iğdır</option>
                              						 <option value="32">
                                     						   Isparta</option>
                              						 <option value="46">
                                     						   Kahramanmaraş</option>
                              						 <option value="78">
                                     						   Karabük</option>
                              						 <option value="70">
                                     						   Karaman</option>
                              						 <option value="36">
                                     						   Kars</option>
                              						 <option value="37">
                                     						   Kastamonu</option>
                              						 <option value="38">
                                     						   Kayseri</option>
                              						 <option value="71">
                                     						   Kırıkkale</option>
                              						 <option value="39">
                                     						   Kırklareli</option>
                              						 <option value="40">
                                     						   Kırşehir</option>
                              						 <option value="79">
                                     						   Kilis</option>
                              						 <option value="41">
                                     						   Kocaeli</option>
                              						 <option value="42">
                                     						   Konya</option>
                              						 <option value="43">
                                     						   Kütahya</option>
                              						 <option value="44">
                                     						   Malatya</option>
                              						 <option value="45">
                                     						   Manisa</option>
                              						 <option value="47">
                                     						   Mardin</option>
                              						 <option value="33">
                                     						   Mersin</option>
                              						 <option value="48">
                                     						   Muğla</option>
                              						 <option value="49">
                                     						   Muş</option>
                              						 <option value="50">
                                     						   Nevşehir</option>
                              						 <option value="51">
                                     						   Niğde</option>
                              						 <option value="52">
                                     						   Ordu</option>
                              						 <option value="80">
                                     						   Osmaniye</option>
                              						 <option value="53">
                                     						   Rize</option>
                              						 <option value="54">
                                     						   Sakarya</option>
                              						 <option value="55">
                                     						   Samsun</option>
                              						 <option value="56">
                                     						   Siirt</option>
                              						 <option value="57">
                                     						   Sinop</option>
                              						 <option value="58">
                                     						   Sivas</option>
                              						 <option value="63">
                                     						   Şanlıurfa</option>
                              						 <option value="73">
                                     						   Şırnak</option>
                              						 <option value="59">
                                     						   Tekirdağ</option>
                              						 <option value="60">
                                     						   Tokat</option>
                              						 <option value="61">
                                     						   Trabzon</option>
                              						 <option value="62">
                                     						   Tunceli</option>
                              						 <option value="64">
                                     						   Uşak</option>
                              						 <option value="65">
                                     						   Van</option>
                              						 <option value="77">
                                     						   Yalova</option>
                              						 <option value="66">
                                     						   Yozgat</option>
                              						 <option value="67">
                                     						   Zonguldak</option>
                              						 </select><div class="sahibindenSelect-holder"><div class="sahibindenSelect closed city"><span>İl</span><ul class="selectList"><li class="selected" data-value="#ANY">İl</li><li data-value="34">
                                     						   İstanbul</li><li data-value="6">
                                     						   Ankara</li><li data-value="35">
                                     						   İzmir</li><li data-value="1">
                                     						   Adana</li><li data-value="2">
                                     						   Adıyaman</li><li data-value="3">
                                     						   Afyonkarahisar</li><li data-value="4">
                                     						   Ağrı</li><li data-value="68">
                                     						   Aksaray</li><li data-value="5">
                                     						   Amasya</li><li data-value="7">
                                     						   Antalya</li><li data-value="75">
                                     						   Ardahan</li><li data-value="8">
                                     						   Artvin</li><li data-value="9">
                                     						   Aydın</li><li data-value="10">
                                     						   Balıkesir</li><li data-value="74">
                                     						   Bartın</li><li data-value="72">
                                     						   Batman</li><li data-value="69">
                                     						   Bayburt</li><li data-value="11">
                                     						   Bilecik</li><li data-value="12">
                                     						   Bingöl</li><li data-value="13">
                                     						   Bitlis</li><li data-value="14">
                                     						   Bolu</li><li data-value="15">
                                     						   Burdur</li><li data-value="16">
                                     						   Bursa</li><li data-value="17">
                                     						   Çanakkale</li><li data-value="18">
                                     						   Çankırı</li><li data-value="19">
                                     						   Çorum</li><li data-value="20">
                                     						   Denizli</li><li data-value="21">
                                     						   Diyarbakır</li><li data-value="81">
                                     						   Düzce</li><li data-value="22">
                                     						   Edirne</li><li data-value="23">
                                     						   Elazığ</li><li data-value="24">
                                     						   Erzincan</li><li data-value="25">
                                     						   Erzurum</li><li data-value="26">
                                     						   Eskişehir</li><li data-value="27">
                                     						   Gaziantep</li><li data-value="28">
                                     						   Giresun</li><li data-value="29">
                                     						   Gümüşhane</li><li data-value="30">
                                     						   Hakkari</li><li data-value="31">
                                     						   Hatay</li><li data-value="76">
                                     						   Iğdır</li><li data-value="32">
                                     						   Isparta</li><li data-value="46">
                                     						   Kahramanmaraş</li><li data-value="78">
                                     						   Karabük</li><li data-value="70">
                                     						   Karaman</li><li data-value="36">
                                     						   Kars</li><li data-value="37">
                                     						   Kastamonu</li><li data-value="38">
                                     						   Kayseri</li><li data-value="71">
                                     						   Kırıkkale</li><li data-value="39">
                                     						   Kırklareli</li><li data-value="40">
                                     						   Kırşehir</li><li data-value="79">
                                     						   Kilis</li><li data-value="41">
                                     						   Kocaeli</li><li data-value="42">
                                     						   Konya</li><li data-value="43">
                                     						   Kütahya</li><li data-value="44">
                                     						   Malatya</li><li data-value="45">
                                     						   Manisa</li><li data-value="47">
                                     						   Mardin</li><li data-value="33">
                                     						   Mersin</li><li data-value="48">
                                     						   Muğla</li><li data-value="49">
                                     						   Muş</li><li data-value="50">
                                     						   Nevşehir</li><li data-value="51">
                                     						   Niğde</li><li data-value="52">
                                     						   Ordu</li><li data-value="80">
                                     						   Osmaniye</li><li data-value="53">
                                     						   Rize</li><li data-value="54">
                                     						   Sakarya</li><li data-value="55">
                                     						   Samsun</li><li data-value="56">
                                     						   Siirt</li><li data-value="57">
                                     						   Sinop</li><li data-value="58">
                                     						   Sivas</li><li data-value="63">
                                     						   Şanlıurfa</li><li data-value="73">
                                     						   Şırnak</li><li data-value="59">
                                     						   Tekirdağ</li><li data-value="60">
                                     						   Tokat</li><li data-value="61">
                                     						   Trabzon</li><li data-value="62">
                                     						   Tunceli</li><li data-value="64">
                                     						   Uşak</li><li data-value="65">
                                     						   Van</li><li data-value="77">
                                     						   Yalova</li><li data-value="66">
                                     						   Yozgat</li><li data-value="67">
                                     						   Zonguldak</li></ul></div></div>
		                                	<select class="town" name="address_town" id="address_town" disabled="disabled" style="display: none;">
		                                		<option value="">İlçe</option>
		                                	</select><div class="sahibindenSelect-holder"><div class="sahibindenSelect closed town select-disabled"><span>İlçe</span><ul class="selectList"><li class="selected" data-value="">İlçe</li></ul></div></div>
		                                	<select class="district" name="address_quarter" id="address_quarter" disabled="disabled" multiple="" style="display: none;">
		                                		<option value="">Mahalle</option>
		                                	</select><div class="sahibindenSelect-holder"><div class="sahibindenSelect closed district select-disabled"><span>Mahalle</span><ul class="checkList"><li><input type="checkbox" id="address_quarter_option_0" class="sub-checkbox option-checkbox" name="address_quarter" value=""><label for="address_quarter_option_0" class="option-label">Mahalle</label></li></ul></div></div>
		                                </div>
		                            </div>
		                            <div class="menu-part clearfix">
		                                <div class="selectable-area">
	                                        <input type="text" class="priceField" placeholder="Min TL" id="minPrice" name="price_min" value="">
	                                        <span class="splitter">
	                                            -
	                                        </span>
	                                        <input type="text" class="priceField" placeholder="Max TL" id="maxPrice" name="price_max" value="">
	                                        <select name="price_currency" id="" style="display: none;">
	                                            <option value="1">TL</option>
	                                            <option value="2">USD</option>
	                                            <option value="3">EUR</option>
	                                            <option value="4">GBP</option>
	                                            </select><div class="sahibindenSelect-holder"><div class="sahibindenSelect closed"><span>TL</span><ul class="selectList"><li class="selected" data-value="1">TL</li><li data-value="2">USD</li><li data-value="3">EUR</li><li data-value="4">GBP</li></ul></div></div>
	                                    </div>
	                                    <div class="button-holder">
	                                    	<a href="javascript:;" class="btn search">Ara</a>
		                            		<a class="btn btn-alternative searchOnMap" href="javascript:;"><span class="mapSearchButton">Haritada Ara</span></a>
	                                    </div>
		                            </div>
		                            <div class="menu-part clearfix">
		                            	<a href="#" class="viewAllLightbox">Daha fazla seçenek göster</a>
		                            </div>
			                    </div>
			                </form>
						<!-- land tab blog ends -->

						<!-- buildings tab blog starts -->

						<form class="searchForm isBuildings  hidden" autocomplete="off" action="/arama/ara" id="searchForm">
			                    <div class="search-menu-main">
			                        <div class="menu-part clearfix">
		                                <div class="categories-area split-area"></div>
		                                <div class="location-area">
		                                	<select class="city" name="address_city" id="address_city" style="display: none;">
		                                		<option value="#ANY">İl</option>
                               						 <option value="34">
                                     						   İstanbul</option>
                              						 <option value="6">
                                     						   Ankara</option>
                              						 <option value="35">
                                     						   İzmir</option>
                              						 <option value="1">
                                     						   Adana</option>
                              						 <option value="2">
                                     						   Adıyaman</option>
                              						 <option value="3">
                                     						   Afyonkarahisar</option>
                              						 <option value="4">
                                     						   Ağrı</option>
                              						 <option value="68">
                                     						   Aksaray</option>
                              						 <option value="5">
                                     						   Amasya</option>
                              						 <option value="7">
                                     						   Antalya</option>
                              						 <option value="75">
                                     						   Ardahan</option>
                              						 <option value="8">
                                     						   Artvin</option>
                              						 <option value="9">
                                     						   Aydın</option>
                              						 <option value="10">
                                     						   Balıkesir</option>
                              						 <option value="74">
                                     						   Bartın</option>
                              						 <option value="72">
                                     						   Batman</option>
                              						 <option value="69">
                                     						   Bayburt</option>
                              						 <option value="11">
                                     						   Bilecik</option>
                              						 <option value="12">
                                     						   Bingöl</option>
                              						 <option value="13">
                                     						   Bitlis</option>
                              						 <option value="14">
                                     						   Bolu</option>
                              						 <option value="15">
                                     						   Burdur</option>
                              						 <option value="16">
                                     						   Bursa</option>
                              						 <option value="17">
                                     						   Çanakkale</option>
                              						 <option value="18">
                                     						   Çankırı</option>
                              						 <option value="19">
                                     						   Çorum</option>
                              						 <option value="20">
                                     						   Denizli</option>
                              						 <option value="21">
                                     						   Diyarbakır</option>
                              						 <option value="81">
                                     						   Düzce</option>
                              						 <option value="22">
                                     						   Edirne</option>
                              						 <option value="23">
                                     						   Elazığ</option>
                              						 <option value="24">
                                     						   Erzincan</option>
                              						 <option value="25">
                                     						   Erzurum</option>
                              						 <option value="26">
                                     						   Eskişehir</option>
                              						 <option value="27">
                                     						   Gaziantep</option>
                              						 <option value="28">
                                     						   Giresun</option>
                              						 <option value="29">
                                     						   Gümüşhane</option>
                              						 <option value="30">
                                     						   Hakkari</option>
                              						 <option value="31">
                                     						   Hatay</option>
                              						 <option value="76">
                                     						   Iğdır</option>
                              						 <option value="32">
                                     						   Isparta</option>
                              						 <option value="46">
                                     						   Kahramanmaraş</option>
                              						 <option value="78">
                                     						   Karabük</option>
                              						 <option value="70">
                                     						   Karaman</option>
                              						 <option value="36">
                                     						   Kars</option>
                              						 <option value="37">
                                     						   Kastamonu</option>
                              						 <option value="38">
                                     						   Kayseri</option>
                              						 <option value="71">
                                     						   Kırıkkale</option>
                              						 <option value="39">
                                     						   Kırklareli</option>
                              						 <option value="40">
                                     						   Kırşehir</option>
                              						 <option value="79">
                                     						   Kilis</option>
                              						 <option value="41">
                                     						   Kocaeli</option>
                              						 <option value="42">
                                     						   Konya</option>
                              						 <option value="43">
                                     						   Kütahya</option>
                              						 <option value="44">
                                     						   Malatya</option>
                              						 <option value="45">
                                     						   Manisa</option>
                              						 <option value="47">
                                     						   Mardin</option>
                              						 <option value="33">
                                     						   Mersin</option>
                              						 <option value="48">
                                     						   Muğla</option>
                              						 <option value="49">
                                     						   Muş</option>
                              						 <option value="50">
                                     						   Nevşehir</option>
                              						 <option value="51">
                                     						   Niğde</option>
                              						 <option value="52">
                                     						   Ordu</option>
                              						 <option value="80">
                                     						   Osmaniye</option>
                              						 <option value="53">
                                     						   Rize</option>
                              						 <option value="54">
                                     						   Sakarya</option>
                              						 <option value="55">
                                     						   Samsun</option>
                              						 <option value="56">
                                     						   Siirt</option>
                              						 <option value="57">
                                     						   Sinop</option>
                              						 <option value="58">
                                     						   Sivas</option>
                              						 <option value="63">
                                     						   Şanlıurfa</option>
                              						 <option value="73">
                                     						   Şırnak</option>
                              						 <option value="59">
                                     						   Tekirdağ</option>
                              						 <option value="60">
                                     						   Tokat</option>
                              						 <option value="61">
                                     						   Trabzon</option>
                              						 <option value="62">
                                     						   Tunceli</option>
                              						 <option value="64">
                                     						   Uşak</option>
                              						 <option value="65">
                                     						   Van</option>
                              						 <option value="77">
                                     						   Yalova</option>
                              						 <option value="66">
                                     						   Yozgat</option>
                              						 <option value="67">
                                     						   Zonguldak</option>
                              						 </select><div class="sahibindenSelect-holder"><div class="sahibindenSelect closed city"><span>İl</span><ul class="selectList"><li class="selected" data-value="#ANY">İl</li><li data-value="34">
                                     						   İstanbul</li><li data-value="6">
                                     						   Ankara</li><li data-value="35">
                                     						   İzmir</li><li data-value="1">
                                     						   Adana</li><li data-value="2">
                                     						   Adıyaman</li><li data-value="3">
                                     						   Afyonkarahisar</li><li data-value="4">
                                     						   Ağrı</li><li data-value="68">
                                     						   Aksaray</li><li data-value="5">
                                     						   Amasya</li><li data-value="7">
                                     						   Antalya</li><li data-value="75">
                                     						   Ardahan</li><li data-value="8">
                                     						   Artvin</li><li data-value="9">
                                     						   Aydın</li><li data-value="10">
                                     						   Balıkesir</li><li data-value="74">
                                     						   Bartın</li><li data-value="72">
                                     						   Batman</li><li data-value="69">
                                     						   Bayburt</li><li data-value="11">
                                     						   Bilecik</li><li data-value="12">
                                     						   Bingöl</li><li data-value="13">
                                     						   Bitlis</li><li data-value="14">
                                     						   Bolu</li><li data-value="15">
                                     						   Burdur</li><li data-value="16">
                                     						   Bursa</li><li data-value="17">
                                     						   Çanakkale</li><li data-value="18">
                                     						   Çankırı</li><li data-value="19">
                                     						   Çorum</li><li data-value="20">
                                     						   Denizli</li><li data-value="21">
                                     						   Diyarbakır</li><li data-value="81">
                                     						   Düzce</li><li data-value="22">
                                     						   Edirne</li><li data-value="23">
                                     						   Elazığ</li><li data-value="24">
                                     						   Erzincan</li><li data-value="25">
                                     						   Erzurum</li><li data-value="26">
                                     						   Eskişehir</li><li data-value="27">
                                     						   Gaziantep</li><li data-value="28">
                                     						   Giresun</li><li data-value="29">
                                     						   Gümüşhane</li><li data-value="30">
                                     						   Hakkari</li><li data-value="31">
                                     						   Hatay</li><li data-value="76">
                                     						   Iğdır</li><li data-value="32">
                                     						   Isparta</li><li data-value="46">
                                     						   Kahramanmaraş</li><li data-value="78">
                                     						   Karabük</li><li data-value="70">
                                     						   Karaman</li><li data-value="36">
                                     						   Kars</li><li data-value="37">
                                     						   Kastamonu</li><li data-value="38">
                                     						   Kayseri</li><li data-value="71">
                                     						   Kırıkkale</li><li data-value="39">
                                     						   Kırklareli</li><li data-value="40">
                                     						   Kırşehir</li><li data-value="79">
                                     						   Kilis</li><li data-value="41">
                                     						   Kocaeli</li><li data-value="42">
                                     						   Konya</li><li data-value="43">
                                     						   Kütahya</li><li data-value="44">
                                     						   Malatya</li><li data-value="45">
                                     						   Manisa</li><li data-value="47">
                                     						   Mardin</li><li data-value="33">
                                     						   Mersin</li><li data-value="48">
                                     						   Muğla</li><li data-value="49">
                                     						   Muş</li><li data-value="50">
                                     						   Nevşehir</li><li data-value="51">
                                     						   Niğde</li><li data-value="52">
                                     						   Ordu</li><li data-value="80">
                                     						   Osmaniye</li><li data-value="53">
                                     						   Rize</li><li data-value="54">
                                     						   Sakarya</li><li data-value="55">
                                     						   Samsun</li><li data-value="56">
                                     						   Siirt</li><li data-value="57">
                                     						   Sinop</li><li data-value="58">
                                     						   Sivas</li><li data-value="63">
                                     						   Şanlıurfa</li><li data-value="73">
                                     						   Şırnak</li><li data-value="59">
                                     						   Tekirdağ</li><li data-value="60">
                                     						   Tokat</li><li data-value="61">
                                     						   Trabzon</li><li data-value="62">
                                     						   Tunceli</li><li data-value="64">
                                     						   Uşak</li><li data-value="65">
                                     						   Van</li><li data-value="77">
                                     						   Yalova</li><li data-value="66">
                                     						   Yozgat</li><li data-value="67">
                                     						   Zonguldak</li></ul></div></div>
		                                	<select class="town" name="address_town" id="address_town" disabled="disabled" style="display: none;">
		                                		<option value="">İlçe</option>
		                                	</select><div class="sahibindenSelect-holder"><div class="sahibindenSelect closed town select-disabled"><span>İlçe</span><ul class="selectList"><li class="selected" data-value="">İlçe</li></ul></div></div>
		                                	<select class="district" name="address_quarter" id="address_quarter" disabled="disabled" multiple="" style="display: none;">
		                                		<option value="">Mahalle</option>
		                                	</select><div class="sahibindenSelect-holder"><div class="sahibindenSelect closed district select-disabled"><span>Mahalle</span><ul class="checkList"><li><input type="checkbox" id="address_quarter_option_0" class="sub-checkbox option-checkbox" name="address_quarter" value=""><label for="address_quarter_option_0" class="option-label">Mahalle</label></li></ul></div></div>
		                                </div>
		                            </div>
		                            <div class="menu-part clearfix">
		                            	<div class="selectable-area split-area">
	                                        <input type="text" class="priceField" placeholder="Min TL" id="minPrice" name="price_min" value="">
	                                        <span class="splitter">
	                                            -
	                                        </span>
	                                        <input type="text" class="priceField" placeholder="Max TL" id="maxPrice" name="price_max" value="">
	                                        <select name="price_currency" id="" style="display: none;">
	                                            <option value="1">TL</option>
	                                            <option value="2">USD</option>
	                                            <option value="3">EUR</option>
	                                            <option value="4">GBP</option>
	                                            </select><div class="sahibindenSelect-holder"><div class="sahibindenSelect closed"><span>TL</span><ul class="selectList"><li class="selected" data-value="1">TL</li><li data-value="2">USD</li><li data-value="3">EUR</li><li data-value="4">GBP</li></ul></div></div>
	                                    </div>
	                                    <div class="selectable-area room-area">
	                                    	<select class="rooms building" name="a485" id="a485" data-section="a485" multiple="" style="display: none;">
                           						 <option value="#ANY">
                                 						   Tümü</option>
                          						 <option value="38574">
                                 						   1</option>
                          						 <option value="38575">
                                 						   2</option>
                          						 <option value="38576">
                                 						   3</option>
                          						 <option value="38577">
                                 						   4</option>
                          						 <option value="38578">
                                 						   5</option>
                          						 <option value="38579">
                                 						   6</option>
                          						 <option value="38580">
                                 						   7</option>
                          						 <option value="38581">
                                 						   8</option>
                          						 <option value="38582">
                                 						   9 +</option>
                          						 </select><div class="sahibindenSelect-holder"><div class="sahibindenSelect closed rooms building"><span>Kat Sayısı</span><ul class="checkList"><li><input type="checkbox" id="a485_option_0" class="sub-checkbox option-checkbox" name="a485" value="#ANY"><label for="a485_option_0" class="option-label">
                                 						   Tümü</label></li><li><input type="checkbox" id="a485_option_1" class="sub-checkbox option-checkbox" name="a485" value="38574"><label for="a485_option_1" class="option-label">
                                 						   1</label></li><li><input type="checkbox" id="a485_option_2" class="sub-checkbox option-checkbox" name="a485" value="38575"><label for="a485_option_2" class="option-label">
                                 						   2</label></li><li><input type="checkbox" id="a485_option_3" class="sub-checkbox option-checkbox" name="a485" value="38576"><label for="a485_option_3" class="option-label">
                                 						   3</label></li><li><input type="checkbox" id="a485_option_4" class="sub-checkbox option-checkbox" name="a485" value="38577"><label for="a485_option_4" class="option-label">
                                 						   4</label></li><li><input type="checkbox" id="a485_option_5" class="sub-checkbox option-checkbox" name="a485" value="38578"><label for="a485_option_5" class="option-label">
                                 						   5</label></li><li><input type="checkbox" id="a485_option_6" class="sub-checkbox option-checkbox" name="a485" value="38579"><label for="a485_option_6" class="option-label">
                                 						   6</label></li><li><input type="checkbox" id="a485_option_7" class="sub-checkbox option-checkbox" name="a485" value="38580"><label for="a485_option_7" class="option-label">
                                 						   7</label></li><li><input type="checkbox" id="a485_option_8" class="sub-checkbox option-checkbox" name="a485" value="38581"><label for="a485_option_8" class="option-label">
                                 						   8</label></li><li><input type="checkbox" id="a485_option_9" class="sub-checkbox option-checkbox" name="a485" value="38582"><label for="a485_option_9" class="option-label">
                                 						   9 +</label></li></ul></div></div>
	                                    </div>
	                                    <div class="button-holder">
	                                    	<a href="javascript:;" class="btn search">Ara</a>
		                            		<a class="btn btn-alternative searchOnMap" href="javascript:;"><span class="mapSearchButton">Haritada Ara</span></a>
	                                    </div>
		                            </div>
		                            <div class="menu-part clearfix">
		                            	<a href="#" class="viewAllLightbox">Daha fazla seçenek göster</a>
		                            </div>
			                    </div>
			                </form>
						<!-- buildings tab blog ends -->

						<!-- timeshare tab blog starts -->

						<form class="searchForm isTimeshares  hidden" autocomplete="off" action="/arama/ara" id="searchForm">
			                    <div class="search-menu-main">
			                        <div class="menu-part clearfix">
		                                <div class="selectable-area split-area">
	                                        <select name="a476" id="a476" class="type-attribute" style="display: none;">
	                                        	<option value="38591">Satılık</option>
	                                        	<option value="38592">Kiralık</option>
	                                        </select><div class="sahibindenSelect-holder"><div class="sahibindenSelect closed type-attribute"><span>Satılık</span><ul class="selectList"><li class="selected" data-value="38591">Satılık</li><li data-value="38592">Kiralık</li></ul></div></div>
	                                    </div>
	                                    <div class="selectable-area categories-area">
	                                    </div>
		                            </div>
		                            <div class="menu-part clearfix">
		                                <div class="selectable-area devremulkPrice split-area">
	                                        <input type="text" class="priceField" placeholder="Min TL" id="minPrice" name="price_min" value="">
	                                        <span class="splitter">
	                                            -
	                                        </span>
	                                        <input type="text" class="priceField" placeholder="Max TL" id="maxPrice" name="price_max" value="">
	                                        <select name="price_currency" id="" style="display: none;">
	                                            <option value="1">TL</option>
	                                            <option value="2">USD</option>
	                                            <option value="3">EUR</option>
	                                            <option value="4">GBP</option>
	                                            </select><div class="sahibindenSelect-holder"><div class="sahibindenSelect closed"><span>TL</span><ul class="selectList"><li class="selected" data-value="1">TL</li><li data-value="2">USD</li><li data-value="3">EUR</li><li data-value="4">GBP</li></ul></div></div>
	                                    </div>
	                                    <div class="selectable-area room-area">
	                                    	<select class="rooms time" name="a9283" id="a9283" data-section="a9283" multiple="" style="display: none;">
                           						 <option value="#ANY">
                                 						   Tümü</option>
                          						 <option value="1202899">
                                 						   7 Gün Altı</option>
                          						 <option value="1202898">
                                 						   7 Gün</option>
                          						 <option value="829192">
                                 						   15 Gün</option>
                          						 <option value="136605">
                                 						   21 Gün</option>
                          						 <option value="136606">
                                 						   1 Ay</option>
                          						 <option value="654196">
                                 						   45 Gün</option>
                          						 <option value="262692">
                                 						   Sınırsız</option>
                          						 </select><div class="sahibindenSelect-holder"><div class="sahibindenSelect closed rooms time"><span>Süre</span><ul class="checkList"><li><input type="checkbox" id="a9283_option_0" class="sub-checkbox option-checkbox" name="a9283" value="#ANY"><label for="a9283_option_0" class="option-label">
                                 						   Tümü</label></li><li><input type="checkbox" id="a9283_option_1" class="sub-checkbox option-checkbox" name="a9283" value="1202899"><label for="a9283_option_1" class="option-label">
                                 						   7 Gün Altı</label></li><li><input type="checkbox" id="a9283_option_2" class="sub-checkbox option-checkbox" name="a9283" value="1202898"><label for="a9283_option_2" class="option-label">
                                 						   7 Gün</label></li><li><input type="checkbox" id="a9283_option_3" class="sub-checkbox option-checkbox" name="a9283" value="829192"><label for="a9283_option_3" class="option-label">
                                 						   15 Gün</label></li><li><input type="checkbox" id="a9283_option_4" class="sub-checkbox option-checkbox" name="a9283" value="136605"><label for="a9283_option_4" class="option-label">
                                 						   21 Gün</label></li><li><input type="checkbox" id="a9283_option_5" class="sub-checkbox option-checkbox" name="a9283" value="136606"><label for="a9283_option_5" class="option-label">
                                 						   1 Ay</label></li><li><input type="checkbox" id="a9283_option_6" class="sub-checkbox option-checkbox" name="a9283" value="654196"><label for="a9283_option_6" class="option-label">
                                 						   45 Gün</label></li><li><input type="checkbox" id="a9283_option_7" class="sub-checkbox option-checkbox" name="a9283" value="262692"><label for="a9283_option_7" class="option-label">
                                 						   Sınırsız</label></li></ul></div></div>
	                                    </div>
	                                    <div class="button-holder">
	                                    	<a href="javascript:;" class="btn search">Ara</a>
		                            		<a class="btn btn-alternative searchOnMap" href="javascript:;"><span class="mapSearchButton">Haritada Ara</span></a>
	                                    </div>
		                            </div>
		                            <div class="menu-part clearfix">
		                            	<a href="#" class="viewAllLightbox">Daha fazla seçenek göster</a>
		                            </div>
			                    </div>
			                </form>
						<!-- timeshare tab blog ends -->

							<!-- tourism facility tab blog starts -->
						<form class="searchForm isTourismFacilities  hidden" autocomplete="off" action="/arama/ara" id="searchForm">
			                    <div class="search-menu-main">
			                        <div class="menu-part clearfix">
		                                <div class="categories-area split-area"></div>
		                                <div class="location-area">
		                                	<select class="city" name="address_city" id="address_city" style="display: none;">
		                                		<option value="#ANY">İl</option>
                               						 <option value="34">
                                     						   İstanbul</option>
                              						 <option value="6">
                                     						   Ankara</option>
                              						 <option value="35">
                                     						   İzmir</option>
                              						 <option value="1">
                                     						   Adana</option>
                              						 <option value="2">
                                     						   Adıyaman</option>
                              						 <option value="3">
                                     						   Afyonkarahisar</option>
                              						 <option value="4">
                                     						   Ağrı</option>
                              						 <option value="68">
                                     						   Aksaray</option>
                              						 <option value="5">
                                     						   Amasya</option>
                              						 <option value="7">
                                     						   Antalya</option>
                              						 <option value="75">
                                     						   Ardahan</option>
                              						 <option value="8">
                                     						   Artvin</option>
                              						 <option value="9">
                                     						   Aydın</option>
                              						 <option value="10">
                                     						   Balıkesir</option>
                              						 <option value="74">
                                     						   Bartın</option>
                              						 <option value="72">
                                     						   Batman</option>
                              						 <option value="69">
                                     						   Bayburt</option>
                              						 <option value="11">
                                     						   Bilecik</option>
                              						 <option value="12">
                                     						   Bingöl</option>
                              						 <option value="13">
                                     						   Bitlis</option>
                              						 <option value="14">
                                     						   Bolu</option>
                              						 <option value="15">
                                     						   Burdur</option>
                              						 <option value="16">
                                     						   Bursa</option>
                              						 <option value="17">
                                     						   Çanakkale</option>
                              						 <option value="18">
                                     						   Çankırı</option>
                              						 <option value="19">
                                     						   Çorum</option>
                              						 <option value="20">
                                     						   Denizli</option>
                              						 <option value="21">
                                     						   Diyarbakır</option>
                              						 <option value="81">
                                     						   Düzce</option>
                              						 <option value="22">
                                     						   Edirne</option>
                              						 <option value="23">
                                     						   Elazığ</option>
                              						 <option value="24">
                                     						   Erzincan</option>
                              						 <option value="25">
                                     						   Erzurum</option>
                              						 <option value="26">
                                     						   Eskişehir</option>
                              						 <option value="27">
                                     						   Gaziantep</option>
                              						 <option value="28">
                                     						   Giresun</option>
                              						 <option value="29">
                                     						   Gümüşhane</option>
                              						 <option value="30">
                                     						   Hakkari</option>
                              						 <option value="31">
                                     						   Hatay</option>
                              						 <option value="76">
                                     						   Iğdır</option>
                              						 <option value="32">
                                     						   Isparta</option>
                              						 <option value="46">
                                     						   Kahramanmaraş</option>
                              						 <option value="78">
                                     						   Karabük</option>
                              						 <option value="70">
                                     						   Karaman</option>
                              						 <option value="36">
                                     						   Kars</option>
                              						 <option value="37">
                                     						   Kastamonu</option>
                              						 <option value="38">
                                     						   Kayseri</option>
                              						 <option value="71">
                                     						   Kırıkkale</option>
                              						 <option value="39">
                                     						   Kırklareli</option>
                              						 <option value="40">
                                     						   Kırşehir</option>
                              						 <option value="79">
                                     						   Kilis</option>
                              						 <option value="41">
                                     						   Kocaeli</option>
                              						 <option value="42">
                                     						   Konya</option>
                              						 <option value="43">
                                     						   Kütahya</option>
                              						 <option value="44">
                                     						   Malatya</option>
                              						 <option value="45">
                                     						   Manisa</option>
                              						 <option value="47">
                                     						   Mardin</option>
                              						 <option value="33">
                                     						   Mersin</option>
                              						 <option value="48">
                                     						   Muğla</option>
                              						 <option value="49">
                                     						   Muş</option>
                              						 <option value="50">
                                     						   Nevşehir</option>
                              						 <option value="51">
                                     						   Niğde</option>
                              						 <option value="52">
                                     						   Ordu</option>
                              						 <option value="80">
                                     						   Osmaniye</option>
                              						 <option value="53">
                                     						   Rize</option>
                              						 <option value="54">
                                     						   Sakarya</option>
                              						 <option value="55">
                                     						   Samsun</option>
                              						 <option value="56">
                                     						   Siirt</option>
                              						 <option value="57">
                                     						   Sinop</option>
                              						 <option value="58">
                                     						   Sivas</option>
                              						 <option value="63">
                                     						   Şanlıurfa</option>
                              						 <option value="73">
                                     						   Şırnak</option>
                              						 <option value="59">
                                     						   Tekirdağ</option>
                              						 <option value="60">
                                     						   Tokat</option>
                              						 <option value="61">
                                     						   Trabzon</option>
                              						 <option value="62">
                                     						   Tunceli</option>
                              						 <option value="64">
                                     						   Uşak</option>
                              						 <option value="65">
                                     						   Van</option>
                              						 <option value="77">
                                     						   Yalova</option>
                              						 <option value="66">
                                     						   Yozgat</option>
                              						 <option value="67">
                                     						   Zonguldak</option>
                              						 </select><div class="sahibindenSelect-holder"><div class="sahibindenSelect closed city"><span>İl</span><ul class="selectList"><li class="selected" data-value="#ANY">İl</li><li data-value="34">
                                     						   İstanbul</li><li data-value="6">
                                     						   Ankara</li><li data-value="35">
                                     						   İzmir</li><li data-value="1">
                                     						   Adana</li><li data-value="2">
                                     						   Adıyaman</li><li data-value="3">
                                     						   Afyonkarahisar</li><li data-value="4">
                                     						   Ağrı</li><li data-value="68">
                                     						   Aksaray</li><li data-value="5">
                                     						   Amasya</li><li data-value="7">
                                     						   Antalya</li><li data-value="75">
                                     						   Ardahan</li><li data-value="8">
                                     						   Artvin</li><li data-value="9">
                                     						   Aydın</li><li data-value="10">
                                     						   Balıkesir</li><li data-value="74">
                                     						   Bartın</li><li data-value="72">
                                     						   Batman</li><li data-value="69">
                                     						   Bayburt</li><li data-value="11">
                                     						   Bilecik</li><li data-value="12">
                                     						   Bingöl</li><li data-value="13">
                                     						   Bitlis</li><li data-value="14">
                                     						   Bolu</li><li data-value="15">
                                     						   Burdur</li><li data-value="16">
                                     						   Bursa</li><li data-value="17">
                                     						   Çanakkale</li><li data-value="18">
                                     						   Çankırı</li><li data-value="19">
                                     						   Çorum</li><li data-value="20">
                                     						   Denizli</li><li data-value="21">
                                     						   Diyarbakır</li><li data-value="81">
                                     						   Düzce</li><li data-value="22">
                                     						   Edirne</li><li data-value="23">
                                     						   Elazığ</li><li data-value="24">
                                     						   Erzincan</li><li data-value="25">
                                     						   Erzurum</li><li data-value="26">
                                     						   Eskişehir</li><li data-value="27">
                                     						   Gaziantep</li><li data-value="28">
                                     						   Giresun</li><li data-value="29">
                                     						   Gümüşhane</li><li data-value="30">
                                     						   Hakkari</li><li data-value="31">
                                     						   Hatay</li><li data-value="76">
                                     						   Iğdır</li><li data-value="32">
                                     						   Isparta</li><li data-value="46">
                                     						   Kahramanmaraş</li><li data-value="78">
                                     						   Karabük</li><li data-value="70">
                                     						   Karaman</li><li data-value="36">
                                     						   Kars</li><li data-value="37">
                                     						   Kastamonu</li><li data-value="38">
                                     						   Kayseri</li><li data-value="71">
                                     						   Kırıkkale</li><li data-value="39">
                                     						   Kırklareli</li><li data-value="40">
                                     						   Kırşehir</li><li data-value="79">
                                     						   Kilis</li><li data-value="41">
                                     						   Kocaeli</li><li data-value="42">
                                     						   Konya</li><li data-value="43">
                                     						   Kütahya</li><li data-value="44">
                                     						   Malatya</li><li data-value="45">
                                     						   Manisa</li><li data-value="47">
                                     						   Mardin</li><li data-value="33">
                                     						   Mersin</li><li data-value="48">
                                     						   Muğla</li><li data-value="49">
                                     						   Muş</li><li data-value="50">
                                     						   Nevşehir</li><li data-value="51">
                                     						   Niğde</li><li data-value="52">
                                     						   Ordu</li><li data-value="80">
                                     						   Osmaniye</li><li data-value="53">
                                     						   Rize</li><li data-value="54">
                                     						   Sakarya</li><li data-value="55">
                                     						   Samsun</li><li data-value="56">
                                     						   Siirt</li><li data-value="57">
                                     						   Sinop</li><li data-value="58">
                                     						   Sivas</li><li data-value="63">
                                     						   Şanlıurfa</li><li data-value="73">
                                     						   Şırnak</li><li data-value="59">
                                     						   Tekirdağ</li><li data-value="60">
                                     						   Tokat</li><li data-value="61">
                                     						   Trabzon</li><li data-value="62">
                                     						   Tunceli</li><li data-value="64">
                                     						   Uşak</li><li data-value="65">
                                     						   Van</li><li data-value="77">
                                     						   Yalova</li><li data-value="66">
                                     						   Yozgat</li><li data-value="67">
                                     						   Zonguldak</li></ul></div></div>
		                                	<select class="town" name="address_town" id="address_town" disabled="disabled" style="display: none;">
		                                		<option value="">İlçe</option>
		                                	</select><div class="sahibindenSelect-holder"><div class="sahibindenSelect closed town select-disabled"><span>İlçe</span><ul class="selectList"><li class="selected" data-value="">İlçe</li></ul></div></div>
		                                	<select class="district" name="address_quarter" id="address_quarter" disabled="disabled" multiple="" style="display: none;">
		                                		<option value="">Mahalle</option>
		                                	</select><div class="sahibindenSelect-holder"><div class="sahibindenSelect closed district select-disabled"><span>Mahalle</span><ul class="checkList"><li><input type="checkbox" id="address_quarter_option_0" class="sub-checkbox option-checkbox" name="address_quarter" value=""><label for="address_quarter_option_0" class="option-label">Mahalle</label></li></ul></div></div>
		                                </div>
		                            </div>
		                            <div class="menu-part clearfix">
										<div class="selectable-area">
	                                        <input type="text" class="priceField" placeholder="Min TL" id="minPrice" name="price_min" value="">
	                                        <span class="splitter">
	                                            -
	                                        </span>
	                                        <input type="text" class="priceField" placeholder="Max TL" id="maxPrice" name="price_max" value="">
	                                          <select name="price_currency" id="" style="display: none;">
	                                            <option value="1">TL</option>
	                                            <option value="2">USD</option>
	                                            <option value="3">EUR</option>
	                                            <option value="4">GBP</option>
	                                            </select><div class="sahibindenSelect-holder"><div class="sahibindenSelect closed"><span>TL</span><ul class="selectList"><li class="selected" data-value="1">TL</li><li data-value="2">USD</li><li data-value="3">EUR</li><li data-value="4">GBP</li></ul></div></div>
	                                    </div>
	                                    <div class="button-holder">
	                                    	<a href="javascript:;" class="btn search">Ara</a>
		                            		<a class="btn btn-alternative searchOnMap" href="javascript:;"><span class="mapSearchButton">Haritada Ara</span></a>
	                                    </div>
		                            </div>
		                            <div class="menu-part clearfix">
		                            	<a href="#" class="viewAllLightbox">Daha fazla seçenek göster</a>
		                            </div>
			                    </div>

			                </form>

						<!-- tourism facility tab blog ends -->


				</div>
			</div>
		</div>
</div>

	<!-- real estate special tab ends -->
	<div class="middle-container clearFlow custom-category-container">
        <div class="middle-box">
			<div class="uiInlineBox categoryContent emlakVitrin showcase-classifieds">
    <div class="uiInlineBoxTitle">
        <a href="/arama/ara?viewType=Gallery&amp;category=vc%3ACategoryShowcase&amp;category=3518">
                Tüm vitrin ilanlarını göster</a>
        <h3>Emlak Vitrin</h3>
    </div>

    <div class="uiInlineBoxContent" id="categoryShowcase">
        <ul class="showCaseList showCaseSubCategory category-showcase-container">
            <li class="showCaseListItem showCaseSubCategoryListItem col4-1th col5-1th  col6-1th  col7-1th">
                    <a href="/ilan/emlak-konut-satilik-site-icinde-satilik-daire-755118665/detay" title="Site içinde satılık daire">
                            <img src="https://i0.shbdn.com/photos/11/86/65/thmb_7551186651fd.jpg" border="0" class="gri_border">
                            <span>Site içinde s...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-2th col5-2th  col6-2th  col7-2th">
                    <a href="/ilan/emlak-konut-satilik-asansorlu-sifir-daire-750686527/detay" title="Asansörlu Sıfır Daire">
                            <img src="https://i0.shbdn.com/photos/68/65/27/thmb_7506865279mg.jpg" border="0" class="gri_border">
                            <span>Asansörlu Sıf...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-3th col5-3th  col6-3th  col7-3th">
                    <a href="/ilan/emlak-konut-satilik-mamak-ta-bugun-al-yarin-tasin-elektronik-akilli-daire-748895936/detay" title="mamak 'ta BUGUN AL YARIN TAŞIN ELEKTRONİK AKILLI DAIRE">
                            <img src="https://i0.shbdn.com/photos/89/59/36/thmb_748895936r27.jpg" border="0" class="gri_border">
                            <span>mamak 'ta BUG...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-4th col5-4th  col6-4th  col7-4th">
                    <a href="/ilan/emlak-isyeri-devren-satilik-gazi-universitesinin-hemen-yanibasinda-devren-satilik-755825879/detay" title="Gazi üniversitesinin hemen yanıbaşında devren satılık">
                            <img src="https://i0.shbdn.com/photos/82/58/79/thmb_755825879034.jpg" border="0" class="gri_border">
                            <span>Gazi üniversi...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-1th col5-5th  col6-5th  col7-5th">
                    <a href="/ilan/emlak-isyeri-satilik-aylik-17.500-tl-kurumsal-firma-kiracili-satilik-dukkan-755864088/detay" title="AYLIK 17.500 TL KURUMSAL FİRMA KİRACILI SATILIK DÜKKAN">
                            <img src="https://i0.shbdn.com/photos/86/40/88/thmb_755864088lob.jpg" border="0" class="gri_border">
                            <span>AYLIK 17.500 ...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-2th col5-1th  col6-6th  col7-6th">
                    <a href="/ilan/emlak-konut-satilik-kira-getirisi-1200-tl-749908703/detay" title="Kira getirisi 1200 tl">
                            <img src="https://i0.shbdn.com/photos/90/87/03/thmb_7499087039cy.jpg" border="0" class="gri_border">
                            <span>Kira getirisi...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-3th col5-2th  col6-1th  col7-7th">
                    <a href="/ilan/emlak-isyeri-devren-kiralik-devren-kiralik-bufe-askerlik-nedeni-ile-755837494/detay" title="DEVREN KİRALİK BÜFE ASKERLİK NEDENİ İLE">
                            <img src="https://i0.shbdn.com/photos/83/74/94/thmb_755837494d2l.jpg" border="0" class="gri_border">
                            <span>DEVREN KİRALİ...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-4th col5-3th  col6-2th  col7-1th">
                    <a href="/ilan/emlak-konut-satilik-sahibinden-luks-daire-755152849/detay" title="SAHİBİNDEN LÜKS DAİRE">
                            <img src="https://i0.shbdn.com/photos/15/28/49/thmb_755152849wxr.jpg" border="0" class="gri_border">
                            <span>SAHİBİNDEN LÜ...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-1th col5-4th  col6-3th  col7-2th">
                    <a href="/ilan/emlak-konut-satilik-menderes-mah-3-plus1-otoparkli-luks-ferah-daire-751659949/detay" title="MENDERES MAH. 3+1 OTOPARKLI LÜKS FERAH DAİRE">
                            <img src="https://i0.shbdn.com/photos/65/99/49/thmb_751659949p4k.jpg" border="0" class="gri_border">
                            <span>MENDERES MAH....</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-2th col5-5th  col6-4th  col7-3th">
                    <a href="/ilan/emlak-isyeri-devren-satilik-devren-satilik-market-755846241/detay" title="Devren Satılık Market">
                            <img src="https://i0.shbdn.com/photos/84/62/41/thmb_755846241x0j.jpg" border="0" class="gri_border">
                            <span>Devren Satılı...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-3th col5-1th  col6-5th  col7-4th">
                    <a href="/ilan/emlak-konut-satilik-emsalsiz-mimarisi-ile-plaj-yolu-nda-son-daire-755345361/detay" title="EMSALSİZ MİMARİSİ İLE PLAJ YOLU'NDA -SON DAİRE- !!!">
                            <img src="https://i0.shbdn.com/photos/34/53/61/thmb_7553453611j0.jpg" border="0" class="gri_border">
                            <span>EMSALSİZ MİMA...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-4th col5-2th  col6-6th  col7-5th">
                    <a href="/ilan/emlak-isyeri-satilik-20-milyon-araclik-cesme-otobanina-komsu-komple-satilik-avm-755880507/detay" title="20 Milyon Araçlık ÇEŞME OTOBANINA KOMŞU , KOMPLE SATILIK AVM">
                            <img src="https://i0.shbdn.com/photos/88/05/07/thmb_7558805075x8.jpg" border="0" class="gri_border">
                            <span>20 Milyon Ara...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-1th col5-3th  col6-1th  col7-6th">
                    <a href="/ilan/emlak-konut-satilik-sahibinden-acill-satilik-full-yapili-daire-pazarlik-payi-vardir-745111601/detay" title="SAHİBİNDEN ACİLL SATILIK FULL YAPILI DAİRE PAZARLIK PAYI VARDIR.">
                            <img src="https://i0.shbdn.com/photos/11/16/01/thmb_745111601rmz.jpg" border="0" class="gri_border">
                            <span>SAHİBİNDEN AC...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-2th col5-4th  col6-2th  col7-7th">
                    <a href="/ilan/emlak-isyeri-devren-kiralik-medigunes-has.karsisinda-eczane-medikal-icin-uygun-755869679/detay" title="MEDİGÜNEŞ HAS.karşısında Eczane medikal İçin uygun">
                            <img src="https://i0.shbdn.com/photos/86/96/79/thmb_755869679dgd.jpg" border="0" class="gri_border">
                            <span>MEDİGÜNEŞ HAS...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-3th col5-5th  col6-3th  col7-1th">
                    <a href="/ilan/emlak-konut-satilik-sahibinden-guncel-ilan-from-the-owner-active-updated-ad-743593503/detay" title="SAHİBİNDEN GÜNCEL İLAN (FROM THE OWNER ACTIVE / UPDATED AD)">
                            <img src="https://i0.shbdn.com/photos/59/35/03/thmb_743593503j7o.jpg" border="0" class="gri_border">
                            <span>SAHİBİNDEN GÜ...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-4th col5-1th  col6-4th  col7-2th">
                    <a href="/ilan/emlak-isyeri-devren-kiralik-yoga-studyosu-devren-kiralik-755844139/detay" title="Yoga Stüdyosu Devren Kiralık">
                            <img src="https://i0.shbdn.com/photos/84/41/39/thmb_755844139lsl.jpg" border="0" class="gri_border">
                            <span>Yoga Stüdyosu...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-1th col5-2th  col6-5th  col7-3th">
                    <a href="/ilan/emlak-konut-satilik-firsat-daire-arac-takasli-743692765/detay" title="FIRSAT DAİRE ARAÇ TAKASLI">
                            <img src="https://i0.shbdn.com/photos/69/27/65/thmb_743692765fa7.jpg" border="0" class="gri_border">
                            <span>FIRSAT DAİRE ...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-2th col5-3th  col6-6th  col7-4th">
                    <a href="/ilan/emlak-konut-satilik-sahibinden-asude-kucukcekmece-sitesinde-2-plus1-satilik-luks-daire-743631063/detay" title="SAHİBİNDEN ASUDE KÜÇÜKÇEKMECE SİTESİNDE 2+1 SATILIK LÜKS DAİRE">
                            <img src="https://i0.shbdn.com/photos/63/10/63/thmb_743631063hjx.jpg" border="0" class="gri_border">
                            <span>SAHİBİNDEN AS...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-3th col5-4th  col6-1th  col7-5th">
                    <a href="/ilan/emlak-konut-satilik-bodrum-da-yaz-kis-aileniz-ile-kaliteli-yasam-icin-son-sansiniz-746223893/detay" title="BODRUM'DA YAZ KIŞ AİLENİZ İLE KALİTELİ YAŞAM İÇİN SON ŞANSINIZ!">
                            <img src="https://i0.shbdn.com/photos/22/38/93/thmb_746223893bgw.jpg" border="0" class="gri_border">
                            <span>BODRUM'DA YAZ...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-4th col5-5th  col6-2th  col7-6th">
                    <a href="/ilan/emlak-konut-satilik-kusursuz-daire-arayanlar-icin-tasarlandi-750468538/detay" title="KUSURSUZ DAİRE ARAYANLAR İÇİN TASARLANDI">
                            <img src="https://i0.shbdn.com/photos/46/85/38/thmb_750468538srn.jpg" border="0" class="gri_border">
                            <span>KUSURSUZ DAİR...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-1th col5-1th  col6-3th  col7-7th">
                    <a href="/ilan/emlak-konut-gunluk-kiralik-antalya-merkezde-acilisa-ozel-710903061/detay" title="Antalya merkezde açılışa özel">
                            <img src="https://i0.shbdn.com/photos/90/30/61/thmb_7109030614vc.jpg" border="0" class="gri_border">
                            <span>Antalya merke...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-2th col5-2th  col6-4th  col7-1th">
                    <a href="/ilan/emlak-konut-satilik-tadilat-yapilmis-sapancada-743705399/detay" title="tadilat yapilmis sapancada">
                            <img src="https://i0.shbdn.com/photos/70/53/99/thmb_743705399orx.jpg" border="0" class="gri_border">
                            <span>tadilat yapil...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-3th col5-3th  col6-5th  col7-2th">
                    <a href="/ilan/emlak-konut-satilik-gorukle-merkezde-3-plus1-luks-esyali-daire-746195951/detay" title="GÖRÜKLE MERKEZDE 3+1 LÜKS EŞYALI DAİRE">
                            <img src="https://i0.shbdn.com/photos/19/59/51/thmb_74619595172y.jpg" border="0" class="gri_border">
                            <span>GÖRÜKLE MERKE...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-4th col5-4th  col6-6th  col7-3th">
                    <a href="/ilan/emlak-konut-satilik-marmaray-metroya-cok-yakin-yatirimlik-daire-754176603/detay" title="Marmaray, Metroya Çok Yakın, Yatırımlık Daire">
                            <img src="https://i0.shbdn.com/photos/17/66/03/thmb_754176603lzu.jpg" border="0" class="gri_border">
                            <span>Marmaray, Met...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-1th col5-5th  col6-1th  col7-4th">
                    <a href="/ilan/emlak-konut-satilik-golbasi-ruyakent-sitesinde-ruya-gibi-bir-yasam-750233350/detay" title="Gölbaşı Rüyakent sitesinde rüya gibi bir yaşam">
                            <img src="https://i0.shbdn.com/photos/23/33/50/thmb_750233350eld.jpg" border="0" class="gri_border">
                            <span>Gölbaşı Rüyak...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-2th col5-1th  col6-2th  col7-5th">
                    <a href="/doping-tanitim/#doping-4">
                            <img src="https://s0.shbdn.com/assets/images/see-your-ad-here-tr:f22d9eeae42a5ab3ac9e98f6d800c131.png" border="0" class="gri_border" style="display: none !important;">
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-3th col5-2th  col6-3th  col7-6th">
                    <a href="/ilan/emlak-konut-devren-satilik-konut-sahibinden-satilik-korfezkent-4-etap-2-plus1-755642119/detay" title="Sahibinden Satılık Körfezkent 4. Etap 2+1">
                            <img src="https://i0.shbdn.com/photos/64/21/19/thmb_75564211989h.jpg" border="0" class="gri_border">
                            <span>Sahibinden Sa...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-4th col5-3th  col6-4th  col7-7th">
                    <a href="/ilan/emlak-konut-satilik-universite-yolunda-4-plus1-havuzlu-daire-747765563/detay" title="Üniversite Yolunda 4+1 Havuzlu Daire">
                            <img src="https://i0.shbdn.com/photos/76/55/63/thmb_747765563xav.jpg" border="0" class="gri_border">
                            <span>Üniversite Yo...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-1th col5-4th  col6-5th  col7-1th">
                    <a href="/ilan/emlak-konut-devren-satilik-konut-yaveriye-tokide-yatirimlik-130m-3-plus1-745752167/detay" title="YAVERİYE TOKİDE YATIRIMLIK&nbsp;130M²(3+1)">
                            <img src="https://i0.shbdn.com/photos/75/21/67/thmb_745752167d0u.jpg" border="0" class="gri_border">
                            <span>YAVERİYE TOKİ...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-2th col5-5th  col6-6th  col7-2th">
                    <a href="/ilan/emlak-arsa-satilik-ahsenden-onu-cadde-arkasi-orman-mukemmel-bir-arazi-577250555/detay" title="AHSENDEN ÖNÜ CADDE ARKASI ORMAN MÜKEMMEL BİR ARAZİ">
                            <img src="https://i0.shbdn.com/photos/25/05/55/thmb_577250555dbz.jpg" border="0" class="gri_border">
                            <span>AHSENDEN ÖNÜ ...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-3th col5-1th  col6-1th  col7-3th">
                    <a href="/ilan/emlak-konut-satilik-145-m-3-plus1-teslime-hazir-son-daire-744330777/detay" title="(145 m² 3+1 teslime hazır son daire">
                            <img src="https://i0.shbdn.com/photos/33/07/77/thmb_7443307771cw.jpg" border="0" class="gri_border">
                            <span>(145 m² 3+1 t...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-4th col5-2th  col6-2th  col7-4th">
                    <a href="/ilan/emlak-isyeri-devren-satilik-anadolu-yakasi-devir-cafe-ulusal-marka-franchise-firsati-755833486/detay" title="Anadolu Yakası Devir Cafe - (Ulusal Marka Franchise Fırsatı)">
                            <img src="https://i0.shbdn.com/photos/83/34/86/thmb_755833486na9.jpg" border="0" class="gri_border">
                            <span>Anadolu Yakas...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-1th col5-3th  col6-3th  col7-5th">
                    <a href="/ilan/emlak-isyeri-satilik-bulbulzade-mah-satilik-dukkan-755860125/detay" title="Bülbülzade Mah Satılık Dükkan">
                            <img src="https://i0.shbdn.com/photos/86/01/25/thmb_755860125yxx.jpg" border="0" class="gri_border">
                            <span>Bülbülzade Ma...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-2th col5-4th  col6-4th  col7-6th">
                    <a href="/ilan/emlak-konut-satilik-satilik-daire-747753336/detay" title="SATILIK DAİRE">
                            <img src="https://i0.shbdn.com/photos/75/33/36/thmb_747753336hz1.jpg" border="0" class="gri_border">
                            <span>SATILIK DAİRE</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-3th col5-5th  col6-5th  col7-7th">
                    <a href="/ilan/emlak-konut-satilik-lens-istanbul-kurtkoy-ilk-sahibinden-sifir-2-plus1-large-daire-755197170/detay" title="Lens Istanbul Kurtköy ilk sahibinden sıfır 2+1 Large Daire">
                            <img src="https://i0.shbdn.com/photos/19/71/70/thmb_75519717025v.jpg" border="0" class="gri_border">
                            <span>Lens Istanbul...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-4th col5-1th  col6-6th  col7-1th">
                    <a href="/ilan/emlak-isyeri-devren-kiralik-ana-cadde-uzeri-devren-firin-755886924/detay" title="ana cadde üzeri devren fırın">
                            <img src="https://i0.shbdn.com/photos/88/69/24/thmb_755886924osf.jpg" border="0" class="gri_border">
                            <span>ana cadde üze...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-1th col5-2th  col6-1th  col7-2th">
                    <a href="/ilan/emlak-konut-satilik-besiktas-ta-otoparkli-3-plus1-ara-kat-ici-yeni-satilik-daire-754689600/detay" title="BEŞİKTAŞ'TA OTOPARKLI, 3+1, ARA KAT, İÇİ YENİ SATILIK DAİRE">
                            <img src="https://i0.shbdn.com/photos/68/96/00/thmb_754689600257.jpg" border="0" class="gri_border">
                            <span>BEŞİKTAŞ'TA O...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-2th col5-3th  col6-2th  col7-3th">
                    <a href="/ilan/emlak-konut-satilik-sahibinden-3-plus1-185m2-daire-kent-buca-sitesinde-744069919/detay" title="Sahibinden 3+1 185m2 daire kent buca sitesinde">
                            <img src="https://i0.shbdn.com/photos/06/99/19/thmb_744069919d3b.jpg" border="0" class="gri_border">
                            <span>Sahibinden 3+...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-3th col5-4th  col6-3th  col7-4th">
                    <a href="/ilan/emlak-konut-satilik-caydacira-da-park-manzarali-genis-4-plus1-sifir-5-kat-daire-satilik-755465808/detay" title="ÇAYDAÇIRA DA PARK MANZARALI GENİŞ 4+1 SIFIR 5. KAT DAİRE SATILIK">
                            <img src="https://i0.shbdn.com/photos/46/58/08/thmb_755465808kwj.jpg" border="0" class="gri_border">
                            <span>ÇAYDAÇIRA DA ...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-4th col5-5th  col6-4th  col7-5th">
                    <a href="/ilan/emlak-konut-satilik-ahenk-istanbul%2Csatilik-dubleks-3-plus1-751274887/detay" title="AHENK İSTANBUL,SATILIK DUBLEKS 3+1">
                            <img src="https://i0.shbdn.com/photos/27/48/87/thmb_751274887jel.jpg" border="0" class="gri_border">
                            <span>AHENK İSTANBU...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-1th col5-1th  col6-5th  col7-6th">
                    <a href="/ilan/emlak-isyeri-devren-satilik-sahilin-incisi-mekan-cafe-restoran-755845952/detay" title="SAHİLİN İNCİSİ MEKAN CAFE &amp; RESTORAN">
                            <img src="https://i0.shbdn.com/photos/84/59/52/thmb_755845952o24.jpg" border="0" class="gri_border">
                            <span>SAHİLİN İNCİS...</span>
                        </a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-2th col5-2th  col6-6th  col7-7th">
                    <a href="/ilan/emlak-konut-satilik-oturuma-hazir-firsat-ebeveyn-banyolu-2-plus1-daire-744334354/detay" title="oturuma hazır fırsat ebeveyn banyolu 2+1 daire">
                            <img src="https://i0.shbdn.com/photos/33/43/54/thmb_7443343549xg.jpg" border="0" class="gri_border">
                            <span>oturuma hazır...</span>
                        </a>
                    </li>
            </ul>
    </div>
</div>
</div>
		<div class="middle-banner">
    <div style="width:300px; height:auto; margin-bottom:15px;" id="div-gpt-ad-1453478544194-0">

    <div id="google_ads_iframe_/32607536/cat_rhs_1_0__container__" style="border: 0pt none; width: 300px; height: 250px;"></div></div>
    <div style="width:300px; height:auto; margin-bottom:14px;" id="div-gpt-ad-1453478544194-1">

    <div id="google_ads_iframe_/32607536/cat_rhs_2_0__container__" style="border: 0pt none; width: 300px; height: 250px;"></div></div>
    <div style="width:300px; height:auto;" id="div-gpt-ad-3084811-1">

    <div id="google_ads_iframe_/32607536/cat_rhs_4_0__container__" style="border: 0pt none; width: 300px; height: 155px;"></div></div>
</div>
</div>
	<!-- category specific div s -->

	<!-- housing project starts -->

	<!-- housing project ends -->
	<div class="custom-category-container">
		<div class="uiInlineBox categoryContent categoryStoreContent">
    <div class="uiInlineBoxTitle">
        <h3>Mağaza Vitrin</h3>
    </div>
    <div class="uiInlineBoxContent">
        <ul class="showCaseList showCaseSubCategory categoryStoreShowcase ">
            <li class="showCaseListItem showCaseSubCategoryListItem col4-1th col3-1th">
                    <div class="preloadedContainer">
                            <a href="https://evinbizdeneryaman2.sahibinden.com/">
                                <img src="https://image5.sahibinden.com/stores/logos/51/03/11/6b35982333e714be5d147ce176b2dbf3119052ae.png" border="0">
                            </a>
                        </div>
                        <a href="https://evinbizdeneryaman2.sahibinden.com/">
                            EVİNBİZDEN GAY...</a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-2th col3-2th">
                    <div class="preloadedContainer">
                            <a href="https://afsin46emlak.sahibinden.com/">
                                <img src="https://image5.sahibinden.com/stores/logos/00/33/61/fe96431ca2f4e8896c05f1ba4ecf53beb11a6102.png" border="0">
                            </a>
                        </div>
                        <a href="https://afsin46emlak.sahibinden.com/">
                            Afşin 46 Emlak</a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-3th col3-3th">
                    <div class="preloadedContainer">
                            <a href="https://terakamongayrimenkul.sahibinden.com/">
                                <img src="https://image5.sahibinden.com/stores/logos/19/50/21/terakamon_9665032_184645.jpg" border="0">
                            </a>
                        </div>
                        <a href="https://terakamongayrimenkul.sahibinden.com/">
                            TERAKAMON LÜKS...</a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-4th col3-1th">
                    <div class="preloadedContainer">
                            <a href="https://marsgayrimenkul.sahibinden.com/">
                                <img src="https://image5.sahibinden.com/stores/logos/38/79/46/smartinvestate_7900741_184273.jpg" border="0">
                            </a>
                        </div>
                        <a href="https://marsgayrimenkul.sahibinden.com/">
                            MARS GAYRİMENK...</a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-1th col3-2th">
                    <div>
                            <a href="https://www.sahibinden.com/doping-tanitim#doping-30">
                                <img src="https://s0.shbdn.com/assets/images/burada_yeral_mgz:89a7b83f736b7d87e1c19ab1316e79e1.gif" border="0">
                            </a>
                        </div>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-2th col3-3th">
                    <div class="preloadedContainer">
                            <a href="https://arevemlak.sahibinden.com/">
                                <img src="https://image5.sahibinden.com/stores/logos/76/01/45/arev-emlak_3909283_184845.jpg" border="0">
                            </a>
                        </div>
                        <a href="https://arevemlak.sahibinden.com/">
                            AREV EMLAK</a>
                    </li>
            <li class="showCaseListItem showCaseSubCategoryListItem col4-3th col3-1th">
                    <div class="preloadedContainer">
                            <a href="https://kumovainsaat.sahibinden.com/">
                                <img src="https://image5.sahibinden.com/stores/logos/43/55/25/_7151268_184231.jpg" border="0">
                            </a>
                        </div>
                        <a href="https://kumovainsaat.sahibinden.com/">
                            Ömer Kumova İn...</a>
                    </li>
            </ul>
    </div>
</div>
<div class="uiBox uiBoxContainer mbmdef category-description">
	<div class="category-description-title">
		<h4 class="mbmdef">
			<span>"Emlak" </span> kategorisi hakkında daha fazla
			bilgi:
		</h4>
	</div>
	<p>Türkiye'nin emlak ilan sitesi sahibinden.com'da yüzbinlerce
		emlak ilanından dakikada 1 tanesi sahibini buluyor. Özel olarak
		<sı></sı>nıflandırılmış Konut kategorisinde satılık ve kiralık ilanlarını,
		iş yeri kategorisinde devren, satılık ve kiralık işletmeleri, arsa
		kategorisinde tarla, bahçe ve yatırımlık arsaları bulabilirsiniz.
		Tatil için devremülk ve turistik tesis kategorilerindeki ilanları
		inceleyebilir, en yeni konut projelerini takip edebilirsiniz.
		Ücretsiz ilan vererek emlaklarınızı satar veya kiralayabilir,
		birikimlerinizi gayrimenkule çevirebilirsiniz.</p>
</div>

<p class="pageCreateTime mbmdef">
	Bu sayfa en son <span>17 Kasım 2019 00:30:43</span> tarihinde güncellenmiştir.</p>
</div>
</div>
</template>

<script></script>

<style>
/*! CSS Used from: https://s0.shbdn.com/assets/common:7c5589959e330525570183497675fd3a.css ; media=screen, print */
@media screen, print{
h1,h3,h4,p,ul,li,a,form{margin:0;padding:0;background:no-repeat 0 0;}
select{margin:0;font-size:100%;vertical-align:middle;}
ul{list-style:none;}
img{border:0;}
a{color:#039;text-decoration:none;outline:0;}
a:focus{outline:0;}
a:hover{text-decoration:underline;}
@media screen and (min-width:501px) and (max-width:999px){
#container{width:984px!important;}
}
select,input{font:12px "Lucida Grande","LucidaGrande",Arial,sans-serif;}
input[type=checkbox]{cursor:pointer;}
#container{margin:0 auto;width:984px;overflow:visible;}
.mbmdef{margin-bottom:10px;}
.clearfix:after{visibility:hidden;display:block;font-size:0;content:" ";clear:both;height:0;}
.clearFlow{overflow:hidden!important;}
.uiBox{border:1px solid #dedede;overflow:hidden;}
.uiBox{border:1px solid #dedede;position:relative;}
.uiInlineBoxTitle{border-bottom:1px solid #dedede;padding:6px 10px 7px 10px;background:#efefef;background:-moz-linear-gradient(top,#fff 0,#efefef 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0%,#fff),color-stop(100%,#efefef));background:-webkit-linear-gradient(top,#fff 0,#efefef 100%);background:-o-linear-gradient(top,#fff 0,#efefef 100%);background:-ms-linear-gradient(top,#fff 0,#efefef 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFF',endColorstr='#EFEFEF',GradientType=0);background:linear-gradient(top,#fff 0,#efefef 100%);*zoom:1;}
.uiBoxContainer{padding:15px;color:#000;background-color:#fff;}
.uiInlineBox{border:1px solid #dfdfdf;background:#fff;overflow:hidden;margin-bottom:10px;}
.uiInlineBoxTitle h3{font-size:14px;font-weight:700;}
.categoryContent .uiInlineBoxContent{background-color:#fff;padding:6px 10px 10px 18px;}
.btn{display:inline-block;padding:9px 22px;margin-bottom:0;font-family:'Lucida Grande','LucidaGrande',Arial,sans-serif;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;cursor:pointer;border:1px solid #437db9;border-radius:2px;color:#fff;background-color:#437db9;background-repeat:repeat-x;background-image:-moz-linear-gradient(top,#6198d3,#437db9);background-image:-ms-linear-gradient(top,#6198d3,#437db9);background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0%,#6198d3),color-stop(100%,#437db9));background-image:-webkit-linear-gradient(top,#6198d3,#437db9);background-image:-o-linear-gradient(top,#6198d3,#437db9);background-image:linear-gradient(top,#6198d3,#437db9);text-shadow:1px 1px 0 #29619b;box-shadow:inset 0 0 0 1px rgba(255,255,255,0.1),0 2px 2px -1px rgba(0,0,0,0.15);line-height:1.3em;outline:0;}
.btn:hover{background:#437db9;text-decoration:none;}
.btn:active{background:#3970a8;border:1px solid #376ca1;box-shadow:0 2px 1px 0 #315f8f inset;}
.btn-alternative{border:1px solid #c0c0c0;color:#1064bc;background-color:#efefef;background-repeat:repeat-x;background-image:-moz-linear-gradient(top,#fff,#efefef);background-image:-ms-linear-gradient(top,#fff,#efefef);background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0%,#fff),color-stop(100%,#efefef));background-image:-webkit-linear-gradient(top,#fff,#efefef);background-image:-o-linear-gradient(top,#fff,#efefef);background-image:linear-gradient(top,#fff,#efefef);box-shadow:inset 0 0 0 1px #fff,0 2px 2px -1px rgba(0,0,0,0.15);text-shadow:none;}
.btn-alternative:hover{background:#fff;border-color:#9d9d9d;}
.btn-alternative:active{background:#eee;border:1px solid #9d9d9d;box-shadow:0 2px 1px 0 #cbcbcb inset;}
.gri_border{border:1px solid #EEE;}
}
/*! CSS Used from: https://s0.shbdn.com/assets/categoryPage:857273659a8bcf94947821b091568f83.css ; media=screen, print */
@media screen, print{
.jspContainer{overflow:hidden;position:relative;}
.jspPane{position:absolute;}
.sahibindenSelect .selectList li{line-height:26px;position:relative;white-space:nowrap;}
.sahibindenSelect .selectList li[data-value='']:hover:before,.sahibindenSelect .selectList li[data-value='#ANY']:before,.sahibindenSelect .selectList li[data-value='#ANY']:hover:before{display:none;}
.sahibindenSelect.closed .selectList{display:none;}
.sahibindenSelect .selectList:focus{outline:0;}
.sahibindenSelect .checkList{overflow:hidden;max-height:250px;}
.uiInlineBox{float:left;width:100%;margin:0;border:0;}
.uiInlineBox .uiInlineBoxTitle{padding:0;background:0;border-bottom:0;}
.uiInlineBox .uiInlineBoxContent{padding:0;}
#container{font-family:'Lucida Grande','LucidaGrande',Arial,sans-serif;width:1050px!important;}
.custom-category-container{margin-top:16px;}
.custom-category-container .top-menu-left{width:235px;}
.custom-category-container .top-menu-right{width:800px;padding-left:15px;}
.custom-category-container .top-menu-right .search-menu{width:800px!important;}
.custom-category-container .category-list .uiInlineBoxTitle{padding-bottom:14px;color:#3e3e3e;}
.custom-category-container .category-list .uiInlineBoxTitle h1{font-size:16px;font-weight:bold;line-height:15px;}
.custom-category-container .category-list .uiInlineBoxContent{position:relative;padding:10px 10px 10px 15px;border:1px solid #eaeaea;height:289px;}
.custom-category-container .category-list .uiInlineBoxContent ul{height:256px;overflow:auto;position:relative;outline:0;}
.custom-category-container .category-list .uiInlineBoxContent ul li{padding:0;}
.custom-category-container .category-list .uiInlineBoxContent ul li a{font-size:13px;line-height:23px;}
.custom-category-container .category-list .uiInlineBoxContent ul span{color:#a1a1a1;font-size:10px;}
.custom-category-container.middle-container{margin-top:20px;}
.custom-category-container.middle-container .middle-box{width:735px;float:left;margin-right:15px;}
.custom-category-container.middle-container .middle-banner{float:left;margin-top:26px;}
.custom-category-container .uiInlineBox.showcase-classifieds{width:100%;}
.custom-category-container .uiInlineBox.showcase-classifieds .uiInlineBoxTitle{border-bottom:1px solid #eaeaea;padding-bottom:11px;color:#3e3e3e;}
.custom-category-container .uiInlineBox.showcase-classifieds .uiInlineBoxTitle h3{font-size:16px;font-weight:bold;line-height:15px;}
.custom-category-container .uiInlineBox.showcase-classifieds .uiInlineBoxTitle a{float:right;font-weight:200;}
.custom-category-container .uiInlineBox.showcase-classifieds .uiInlineBoxContent{padding:0;}
.custom-category-container .uiInlineBox.showcase-classifieds .uiInlineBoxContent .showCaseList .showCaseSubCategoryListItem{height:102px;width:110px;margin:15px 15px 0 0;float:left;display:-webkit-box;display:-moz-box;display:-webkit-flex;display:-ms-flexbox;display:box;display:flex;}
.custom-category-container .uiInlineBox.showcase-classifieds .uiInlineBoxContent .showCaseList .showCaseSubCategoryListItem img{height:81px;width:108px;display:-webkit-box;display:-moz-box;display:-webkit-flex;display:-ms-flexbox;display:box;display:flex;}
.custom-category-container .uiInlineBox.showcase-classifieds .uiInlineBoxContent .showCaseList .showCaseSubCategoryListItem span{color:#3e3e3e;margin-top:6px;display:block;font-size:11px;}
.custom-category-container .uiInlineBox.showcase-classifieds .uiInlineBoxContent .showCaseList .showCaseSubCategoryListItem.col6-6th{margin-right:0;}
.custom-category-container .uiInlineBox.categoryStoreContent .uiInlineBoxTitle{border-bottom:1px solid #eaeaea;padding-bottom:11px;}
.custom-category-container .uiInlineBox.categoryStoreContent .uiInlineBoxTitle h3{font-size:16px;font-weight:bold;line-height:15px;}
.custom-category-container .uiInlineBox.categoryStoreContent .showCaseList{overflow:hidden;height:100px;}
.custom-category-container .uiInlineBox.categoryStoreContent .showCaseList .showCaseSubCategoryListItem{float:left;margin:14px 25px 0 0;}
.custom-category-container .uiInlineBox.categoryStoreContent .showCaseList .showCaseSubCategoryListItem div{height:83px;width:152px;border:1px solid #eaeaea;}
.custom-category-container .uiInlineBox.categoryStoreContent .showCaseList .showCaseSubCategoryListItem div a{margin-top:24px;width:100%;}
.custom-category-container .uiInlineBox.categoryStoreContent .showCaseList .showCaseSubCategoryListItem div a img{height:35px;margin:0 auto;width:95px;display:block;}
.custom-category-container .uiInlineBox.categoryStoreContent .showCaseList .showCaseSubCategoryListItem a{color:#3e3e3e;margin-top:5px;display:inline-block;}
.custom-category-container .uiInlineBox.categoryStoreContent .showCaseList .showCaseSubCategoryListItem:nth-child(5){margin-right:26px;}
.custom-category-container .uiInlineBox.categoryStoreContent .showCaseList .showCaseSubCategoryListItem:nth-child(6){margin-right:0;}
.custom-category-container .category-description{float:left;padding:20px 0 14px 0;border:0;border-bottom:1px solid #eaeaea;}
.custom-category-container .category-description .category-description-title{border-bottom:1px solid #eaeaea;padding-bottom:11px;margin-bottom:14px;}
.custom-category-container .category-description .category-description-title h4{font-size:16px;font-weight:bold;margin:0;}
.custom-category-container .category-description p{text-align:justify;}
.custom-category-container .pageCreateTime{float:left;width:100%;text-align:center;padding:14px 0 40px 0;}
.custom-category-container .pageCreateTime span{color:#f00;font-weight:normal;}
@media screen and (min-width:1170px){
#container{width:1150px!important;}
#container .custom-category-container .top-menu-left{width:231px;}
#container .custom-category-container .top-menu-right{width:908px;padding-left:11px;}
#container .custom-category-container .top-menu-right .search-menu{width:908px!important;}
#container .custom-category-container .middle-box{width:836px;margin-right:14px;}
#container .custom-category-container .middle-box .uiInlineBox.showcase-classifieds .showCaseList .showCaseSubCategoryListItem{margin-right:11px!important;}
#container .custom-category-container .middle-box .uiInlineBox.showcase-classifieds .showCaseList .showCaseSubCategoryListItem.col7-7th{margin-right:0!important;}
#container .custom-category-container .uiInlineBox.categoryStoreContent .showCaseList .showCaseSubCategoryListItem{margin-right:12px!important;}
#container .custom-category-container .uiInlineBox.categoryStoreContent .showCaseList .showCaseSubCategoryListItem:last-child{margin-right:0!important;}
}
}
/*! CSS Used from: https://s0.shbdn.com/assets/realEstateMain:790fc70bf4d2125039b15661f7a66374.css ; media=screen, print */
@media screen, print{
.hidden{visibility:hidden;opacity:0;margin-left:-20px!important;}
input::-webkit-input-placeholder:focus{color:#fff;}
input:-moz-placeholder:focus{color:#fff;}
input:-ms-input-placeholder:focus{color:#fff;}
.viewAllLightbox{font-size:11px;}
input::-webkit-input-placeholder:focus{color:#fff;}
input:-moz-placeholder:focus{color:#fff;}
input:-ms-input-placeholder:focus{color:#fff;}
.jspContainer{overflow:hidden;position:relative;}
.jspPane{position:absolute;}
.search-menu{width:794px;height:340px;position:relative;}
.search-menu.home{background:url('https://s0.shbdn.com/assets/images/emlak-konut-1050:b4a335cdadeb8fd4c7116153e4c8021d.png') top left no-repeat;}
.search-menu-container{position:absolute;width:718px;left:50%;margin-left:-357px;top:148px;}
.search-menu-header li{float:left;width:110px;height:30px;line-height:30px;margin-left:3px;border-radius:2px 2px 0 0;background-color:#f7f7f7;text-align:center;opacity:.90;}
.search-menu-header li.tourist-facility{width:115px;}
.search-menu-header li:hover a{color:#535252;}
.search-menu-header li.active{padding-top:5px;margin-top:-5px;background-color:#feea0d;opacity:1;}
.search-menu-header li.active:hover a{color:#000;}
.search-menu-header li a{display:block;line-height:30px;font-size:11px;color:#676767;text-decoration:none;position:relative;}
.search-menu-header li a:before{content:" ";position:absolute;height:22px;background:url('https://s0.shbdn.com/assets/images/real-estate-icons:a6566d4e8502d978340102bebcc46f89.png') top left no-repeat;top:55%;margin-top:-12px;}
.search-menu-header li.home a{padding-left:25px;}
.search-menu-header li.home a:before{background-position:-7px -8px;width:18px;left:27px;}
.search-menu-header li.home:hover a:before{background-position:-7px -38px;}
.search-menu-header li.home.active a:before{background-position:-7px -68px;}
.search-menu-header li.work a{padding-left:25px;}
.search-menu-header li.work a:before{background-position:-36px -8px;width:18px;left:29px;}
.search-menu-header li.work:hover a:before{background-position:-36px -38px;}
.search-menu-header li.land a{padding-left:32px;}
.search-menu-header li.land a:before{background-position:-62px -8px;width:25px;left:27px;}
.search-menu-header li.land:hover a:before{background-position:-62px -38px;}
.search-menu-header li.building a{padding-left:22px;}
.search-menu-header li.building a:before{background-position:-98px -5px;width:15px;left:34px;}
.search-menu-header li.building:hover a:before{background-position:-98px -35px;}
.search-menu-header li.timeshare a{padding-left:26px;}
.search-menu-header li.timeshare a:before{background-position:-125px -8px;width:19px;left:14px;}
.search-menu-header li.timeshare:hover a:before{background-position:-125px -38px;}
.search-menu-header li.tourist-facility a{padding-left:28px;}
.search-menu-header li.tourist-facility a:before{background-position:-156px -8px;width:21px;left:5px;}
.search-menu-header li.tourist-facility:hover a:before{background-position:-156px -38px;}
.search-menu-header li.active a{color:#000;font-weight:bold;}
.search-menu-header li:first-child{margin-left:10px;}
.search-menu-main{height:131px;background-color:#f7f7f7;background-color:rgba(247,247,247,0.9);width:718px;border-radius:2px;border-top:6px solid #ecc40c;}
select.district+.sahibindenSelect-holder{padding-right:0;}
::-webkit-input-placeholder{color:#999;opacity:1;}
:-moz-placeholder{color:#999;opacity:1;}
::-moz-placeholder{color:#999;opacity:1;}
:-ms-input-placeholder{color:#999;opacity:1;}
.menu-part{padding:18px 20px 0 20px;position:relative;display:none;}
.selectable-area span{max-width:30px;padding-right:5px;font-size:11px;line-height:32px;color:#333;}
.selectable-area,.selectable-area span{float:left;}
.selectable-area:first-child{padding-left:0;}
span.splitter{width:auto;color:#c7c8c7;padding:0 5px;}
.selectable-area input[type='text']{border:1px solid #eaeaea;background-color:#fff;border-radius:2px;padding:2px 7px;-webkit-box-shadow:inset 0 1px 1px 0 rgba(0,0,0,0.1);-moz-box-shadow:inset 0 1px 1px 0 rgba(0,0,0,0.1);box-shadow:inset 0 1px 1px 0 rgba(0,0,0,0.1);height:26px;line-height:26px;float:left;outline:0;color:#333;font-size:11px;width:50px;}
.selectable-area input[type='text']:focus,.selectable-area input[type='text']:hover{border:1px solid #6198d3;}
.mapSearchButton{display:block;}
.btn.search,.btn.searchOnMap{height:12px;line-height:12px;box-shadow:0 2px 2px 0 rgba(0,0,0,0.1);}
.search-menu-main select{display:none;}
.emlakVitrin{min-height:625px;margin-bottom:0;width:738px;}
.emlakVitrin .uiInlineBoxContent{padding:12px 10px 10px 27px;}
.search-menu input[type=checkbox]{display:none;}
.selectable-area .sahibindenSelect-holder{margin-left:5px;}
.subCategoryArea,.categoryArea{width:auto!important;}
.subCategoryArea.closed{width:91px!important;}
.categoryArea.closed{width:77px!important;}
.checkList li{width:90px;}
.top-menu-left,.top-menu-right{float:left;}
.top-menu-left{width:237px;}
.top-menu-left .uiInlineBox{height:340px;position:relative;}
.top-menu-left .uiInlineBox .categoryList+a{position:absolute;bottom:10px;font-size:13px;}
.top-menu-right{width:796px;padding-left:17px;position:relative;}
.split-area{border-right:1px solid #eaeaea;margin-right:5px;min-width:205px;height:32px;float:left;}
.button-holder{float:right;width:211px;}
.sahibindenSelect.city{width:123px;}
.sahibindenSelect.city.closed{width:93px;}
.sahibindenSelect.town{width:107px;}
.sahibindenSelect.district{width:213px;}
form.hidden{display:none;}
.top-menu-container .uiInlineBox{margin-bottom:0;}
.district input+label:before,input.option-checkbox+label:before{background:url('https://s0.shbdn.com/assets/images/old_search_cb:59df4f64b4df0cf2fe855a90c2d7ce1d.png') 0 0 no-repeat;content:" ";height:13px;width:13px;position:absolute;margin-top:0;left:0;top:0;}
.district input+label,input.option-checkbox+label{padding-left:18px;font-size:11px;cursor:pointer;line-height:13px;position:relative;}
.district input:checked+label:before,input.option-checkbox:checked+label:before{background-position:0 -13px;}
.isTimeshares .type-attribute{width:187px!important;}
.rooms.closed{width:93px;}
.rooms.closed span{max-width:81px;}
.isTimeshares .type-attribute span{max-width:186px;}
.room-area .sahibindenSelect-holder,.isTimeshares .sahibindenSelect-holder{margin-left:0;}
.isTimeshares .devremulkPrice .sahibindenSelect-holder{margin-left:5px;}
.viewAllLightbox{display:block;width:145px;margin-top:-10px;}
.btn.search,.btn.searchOnMap{padding-left:0;padding-right:0;}
.btn.search{width:93px;}
.btn.searchOnMap{width:106px;margin-left:4px;}
.sahibindenSelect.rooms.closed{width:93px;}
.sahibindenSelect.rooms{width:110px;}
.sahibindenSelect.rooms>span{line-height:18px;max-width:110px;}
.sahibindenSelect.rooms>span,.sahibindenSelect.rooms .checkList{display:block;width:100%;}
@media screen and (min-width:1170px){
#container{width:1150px;}
.search-menu{width:908px;}
.search-menu.home{background:url('https://s0.shbdn.com/assets/images/emlak-konut-1150:28df29ee426dfc1b128b555510884fcd.png') top left no-repeat;}
.search-menu-container{width:818px;margin-left:-407px;}
.search-menu-main{width:818px;}
.categoryArea.closed{width:106px!important;}
.subCategoryArea.closed{width:100px!important;}
.sahibindenSelect.closed{width:50px;}
.sahibindenSelect.city.closed,.sahibindenSelect.rooms.closed{width:143px;}
.sahibindenSelect.town{width:137px;}
.sahibindenSelect.district{width:196px;}
.selectable-area input[type='text']{width:61px;}
.top-menu-left{width:231px;}
.top-menu-right{width:904px;padding-left:11px;}
}
.sahibindenSelect-holder{position:relative;float:left;height:32px;padding-right:5px;color:#333;}
.sahibindenSelect{width:auto;border:1px solid #c5c5c5;background-color:#fff;border-radius:3px 3px 0 0;font-size:11px;position:absolute;cursor:pointer;padding:6px;z-index:100;}
.sahibindenSelect.closed:hover{border:1px solid #6198d3;}
.sahibindenSelect.closed.select-disabled:hover{border:1px solid #c5c5c5;}
.sahibindenSelect span{display:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;line-height:normal;}
.sahibindenSelect.closed span{display:block;margin-right:15px;line-height:18px;min-width:14px;}
.sahibindenSelect.closed{overflow:hidden;border-radius:3px;position:relative;top:0;height:18px;}
.sahibindenSelect.closed:after{width:6px;height:6px;position:absolute;right:7px;top:50%;margin-top:-3px;background:url('https://s0.shbdn.com/assets/images/real-estate-icons:a6566d4e8502d978340102bebcc46f89.png') -41px -102px no-repeat;content:" ";}
.sahibindenSelect .selectList li{padding-left:10px;}
.sahibindenSelect .selectList li[data-value=''],.sahibindenSelect .selectList li[data-value='#ANY']{padding-left:0;}
.sahibindenSelect .checkList li,.sahibindenSelect .selectList li{line-height:20px;position:relative;white-space:nowrap;}
.sahibindenSelect .selectList li.selected:before,.sahibindenSelect .selectList li.selected:hover:before{width:8px;height:8px;position:absolute;left:0;top:50%;margin-top:-4px;background:url('https://s0.shbdn.com/assets/images/real-estate-icons:a6566d4e8502d978340102bebcc46f89.png') -100px -102px no-repeat;content:" ";}
.sahibindenSelect.select-disabled{background:#f2f2f2;color:#999;-webkit-box-shadow:inset 0 0 0 1px #f9f9f9;-moz-box-shadow:inset 0 0 0 1px #f9f9f9;box-shadow:inset 0 0 0 1px #f9f9f9;}
.sahibindenSelect .selectList li:hover:before{width:8px;height:8px;position:absolute;left:0;top:50%;margin-top:-4px;background:url('https://s0.shbdn.com/assets/images/real-estate-icons:a6566d4e8502d978340102bebcc46f89.png') -132px -102px no-repeat;content:" ";}
.sahibindenSelect .selectList li[data-value='']:before,.sahibindenSelect .selectList li[data-value='']:hover:before,.sahibindenSelect .selectList li[data-value='#ANY']:before,.sahibindenSelect .selectList li[data-value='#ANY']:hover:before{display:none;}
.sahibindenSelect.closed .checkList,.sahibindenSelect.closed .selectList{display:none;}
.sahibindenSelect .checkList:focus,.sahibindenSelect .selectList:focus{outline:0;}
.sahibindenSelect .selectList,.sahibindenSelect .checkList{overflow:hidden;max-height:250px;}
}
/*! CSS Used fontfaces */
@font-face{font-family:"LucidaGrande";src:url('https://s0.shbdn.com/assets/blob/LucidaGrande:00351442acc65cff9586baf06437dcd6.woff');}
@font-face{font-family:"LucidaGrande";font-weight:bold;src:url('https://s0.shbdn.com/assets/blob/LucidaGrande-Bold:fb045a5535379e5c9818873ee5c7a9b0.woff');}
</style>
