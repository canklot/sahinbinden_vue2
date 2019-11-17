<template>
  <div id="searchContainer">
    <div class="classifiedBreadCrumbBackground fixed"></div>
    <div class="classifiedBreadCrumb fixed">
        <ol id="uiBreadCrumb" class="wide-container" itemscope="" itemtype="http://schema.org/BreadcrumbList">
            <li class="breadcrumbItem" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                    <a itemprop="item" href="/" class="sprite breadcrumbItem">
                        <span itemprop="name">Anasayfa</span>
                    </a>
                    <meta itemprop="position" content="1">
                </li>
            <li class="breadcrumbItem " itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                    <a itemprop="item" class="sprite breadcrumbItem" href="/kategori/ikinci-el-ve-sifir-alisveris">
                        <span itemprop="name">İkinci El ve Sıfır Alışveriş</span>
                    </a>
                    <meta itemprop="position" content="2">
                </li>
            <li class="breadcrumbItem " itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                    <a itemprop="item" class="sprite breadcrumbItem" href="/kategori/bilgisayar">
                        <span itemprop="name">Bilgisayar</span>
                    </a>
                    <meta itemprop="position" content="3">
                </li>
            <li class="breadcrumbItem leaf" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                    <a itemprop="item" class="sprite breadcrumbItem" href="/bilgisayar-dizustu-notebook">
                        <span itemprop="name">Dizüstü (Notebook)</span>
                    </a>
                    <meta itemprop="position" content="4">
                </li>
            <li class="breadcrumb-items">
                    <div class="breadcrumb-slice"></div>
<!-- Breadcrumb Items -->
<a id="myFavoriteClassifieds" href="https://banaozel.sahibinden.com/favori-ilanlar" class="item" rel="nofollow">Favori İlanlarım</a>
<span class="seperator"></span>
<a id="myFavoriteSearches" href="javascript:void(0)" class="item favorite-search-switch" rel="nofollow">Favori Aramalarım</a>
<span class="seperator"></span>
<a id="classifiedsForYou" href="javascript:void(0)" class="item lvc-switch recommendation-switch" rel="nofollow">Size Özel İlanlar</a>
<span class="seperator"></span>
<a id="classifiedComparator" href="javascript:void(0)" class="item fixed-compare-link" rel="nofollow">İlan Karşılaştır</a>
<!-- Favorite Search -->
<div class="favorite-search-container close">
    <div class="section-top">
        <div class="section-title">Favori Aramalarım</div>
    </div>
    <p class="empty-list">Favori Aramanız Bulunmamaktadır</p>

    <div class="favorite-search-box">
        <ul class="favorite-search-list loading-status"></ul>
    </div>

    <a href="https://banaozel.sahibinden.com/favori-aramalarim" class="show-all" rel="nofollow">
        Favori Aramalarım'a Git</a>
</div>
<!-- Last Visited Classifieds -->
<div class="lvcCarouselContainer close">
    <div class="section-top">
        <div id="recommendation-title" class="section-title">İlgilenebileceğiniz İlanlar</div>
    </div>
    <div class="section-top">
        <div id="last-visited-title" class="section-title active-title">Son Gezdiğiniz İlanlar</div>
    </div>
    <p id="last-visited-list" class="empty-list">Son gezdiğiniz ilanlar listeniz boş.</p>
    <p id="recommendation-list" class="empty-list" style="display: none;">Size ilan önerilebilmesi için yeteri kadar ilan bakma geçmişiniz bulunmamaktadır.</p>
<div id="lastVisitedItemsContainer" class="itemsContainer"><ul class="itemsList"></ul></div><div id="recommendationItemsContainer" class="itemsContainer" style="display: none;"><ul class="itemsList"></ul></div></div>
<!-- Classified Comparison -->
<input id="comparableValue" type="hidden" value="">
<div class="compare-classified-submenu">
    <div class="section-top">
        <div class="section-title">İlan Karşılaştır</div>
    </div>
    <div class="section-main">
        <div class="overlay-container"></div>
        <div class="section-confirm">
            <div class="section-confirm-message"></div>
            <div class="section-buttons">
                <a class="btn btn-link positive-action-button"></a>
                <a class="btn btn-alternative btn-link negative-action-button">Vazgeç</a>
            </div>
        </div>

        <div class="section-list">
            <div class="error-container"></div>
            <ul></ul>
        </div>
        <div class="section-final">
            <a href="javascript:void(0)" class="compare-now-button trackClick" data-route="/ilan-karsilastir" data-click-category="İlan Detay Events" data-click-event="İlan Karşılaştırma" data-click-label=" | " style="display: none;">
                Karşılaştır</a>
        </div>
    </div>
</div>
</li>
            </ol>
    </div>
<noscript>
    <div class="top-message">
        <div class="message-container no-script">
            <p><strong>Tarayıcınızda JavaScript devre dışı bırakılmıştır.</strong> sahibinden.com’u doğru görüntüleyebilmek için tarayıcınızda JavaScript'i etkinleştirmelisiniz.</p></div>
    </div>
</noscript><div class="opening"></div>

    <div class="searchResultsPage uiContent breadcrumb-offset">

        <input type="hidden" id="categoryId" name="categoryId" value="111812">
        <input type="hidden" id="nativeAdForceDfp" value="true">

        <div class="specialCatHeaders">
    </div>
<div class="classifiedStatusWarning classifiedExpired">
                <p>
                    <span>
                        <span class="statusMessage approval">
                            Görüntülemek istediğiniz ilan onay sürecindedir, aynı kategorideki benzer ilanlara aşağıdan ulaşabilirsiniz.</span>
                        <span class="statusMessage expired">
                            Görüntülemek istediğiniz ilan yayında değildir, aynı kategorideki benzer ilanlara aşağıdan ulaşabilirsiniz.</span>
                    </span>
                </p>
            </div>

        <form name="search_detailed" id="searchResultsSearchForm" action="/arama/ara" method="get" autocomplete="off">
            <div class="searchResultsContainer ptmdef clearfix">
                <div id="formData">
    <input class="formData" type="hidden" name="address_country" value="1" data-section="">
            <input class="formData" type="hidden" name="language" value="tr" data-section="">
            <input class="formData" type="hidden" name="category" value="111812" data-section="">
            </div>
<div class="search-left standard-mode">

    <div id="searchResultLeft-category" class="search-filter-section" data-name="category" data-depends-on="" data-triggers-refresh="false">
                                <div class="searchResultsCat " id="search_left">
    <div id="search_cats">
            <input type="hidden" name="category" value="111812">

            <ul>
                    <li class="cl0">
                                <div>
                                    <a href="/ikinci-el-ve-sifir-alisveris">
                                        İkinci El ve Sıfır Alışveriş</a>
                                    </div>
                                </li>
                        <li class="cl1">
                                <div>
                                    <a href="/bilgisayar">
                                        Bilgisayar</a>
                                    </div>
                                </li>
                        <li class="cl2">
                                <div>
                                    <a href="/bilgisayar-dizustu-notebook">
                                        Dizüstü (Notebook)</a>
                                    </div>
                                </li>
                        </ul>
            <div id="searchCategoryContainer" class="scroll-pane lazy-scroll" style="overflow: hidden; padding: 0px; width: 180px;">
                
                <div class="jspContainer" style="width: 180px; height: 92px;"><div class="jspPane" style="padding: 0px 7px 0px 0px; top: 0px; left: 0px; width: 173px;"><ul>
                        <li class="cl3">
                                <a href="/laptop-bilgisayar">Laptop</a>
                                <span>(27.660)</span>
                            </li>
                        <li class="cl3">
                                <a href="/donanim-dizustu-notebook">Donanım</a>
                                <span>(7.574)</span>
                            </li>
                        <li class="cl3">
                                <a href="/pcmcia-kartlar-dizustu-notebook">PCMCIA Kartlar</a>
                                <span>(1.324)</span>
                            </li>
                        <li class="cl3">
                                <a href="/dizustu-notebook-yedek-parca">Yedek Parça</a>
                                <span>(96.690)</span>
                            </li>
                        </ul></div></div></div>
        </div>
        </div>
</div>
                        <span class="shopping-search-filter-section-title">Durumu</span>
            <div id="searchResultLeft-" class="search-filter-section ">
                    <dl class="">
        </dl>
<dl class="">
        <dd class="collapseContent shoppingCollapseContent custom-product-condition">
                <ul class="facetedSearchList scroll-pane shopping-search-custom-condition" style="overflow: hidden; padding: 0px; width: 178px;">
                    
                    
                    
                    <div class="jspContainer" style="width: 178px; height: 61px;"><div class="jspPane" style="padding: 0px; top: 0px; left: 0px; width: 178px;"><li>
                            <a href="/arama/flt/?condition=used&amp;address_country=1&amp;language=tr&amp;category=111812" class="js-attribute facetedRadiobox single-selection" data-section="" data-value="used" data-id="condition">
                                <i tabindex="1"></i>
                                İkinci El</a>
                        </li><li>
                            <a href="/arama/flt/?condition=unused&amp;address_country=1&amp;language=tr&amp;category=111812" class="js-attribute facetedRadiobox single-selection" data-section="" data-value="unused" data-id="condition">
                                <i tabindex="2"></i>
                                Sıfır</a>
                        </li><li>
                            <a href="/arama/flt/?address_country=1&amp;language=tr&amp;category=111812" class="js-attribute facetedRadiobox single-selection checked" data-section="" data-value="#ANY" data-id="condition">
                                <i tabindex="3"></i>
                                Tümü</a>
                        </li></div></div></ul>

            </dd>
        </dl>
</div>
            <span class="shopping-search-filter-section-title">Alışveriş Seçenekleri</span>
            <div id="searchResultLeft-" class="search-filter-section ">
                    <div class="secureTrade-selector-container">
<dl class="">
        </dl>
<dl class="">
        <dd class="collapseContent shoppingCollapseContent custom-secure-trade-selector">
                <ul class="facetedSearchList scroll-pane shopping-search-custom-secureTrade jspScrollable" tabindex="0" style="overflow: hidden; padding: 0px; width: 178px;">
                    
                    
                    
                    <div class="jspContainer" style="width: 178px; height: 100px;"><div class="jspPane" style="padding: 0px; width: 168px;"><li class="">
                            <a href="/arama/flt/?hasSecureTrade=false&amp;address_country=1&amp;language=tr&amp;category=111812" class="js-attribute facetedRadiobox single-selection" data-section="" data-value="false" data-id="hasSecureTrade">
                                <i tabindex="4"></i>
                                Yüz Yüze Görüşerek</a>
                        </li><li class="">
                            <a href="/arama/flt/?hasSecureTrade=true&amp;address_country=1&amp;language=tr&amp;category=111812" class="js-attribute facetedRadiobox single-selection" data-section="" data-value="true" data-id="hasSecureTrade">
                                <i tabindex="5"></i>
                                Kredi Kartıyla (GeT)</a>
                        </li><li class="any">
                            <a href="/arama/flt/?address_country=1&amp;language=tr&amp;category=111812" class="js-attribute facetedRadiobox single-selection checked" data-section="" data-value="#ANY" data-id="hasSecureTrade">
                                <i tabindex="6"></i>
                                Tümü</a>
                        </li></div><div class="jspVerticalBar"><div class="jspCap jspCapTop"></div><div class="jspTrack" style="height: 100px;"><div class="jspDrag" style="height: 100px;"><div class="jspDragTop"></div><div class="jspDragBottom"></div></div></div><div class="jspCap jspCapBottom"></div></div></div></ul>

            </dd>
        </dl>
<div class="shopping-search-custom-free-shipping">
            <div class="title">Sadece kargo ile gönderim</div>
            <li>
                <a id="10" class="js-attribute facetedCheckbox" name="hasFreeShipping" href="/arama/flt/?hasFreeShipping=true&amp;address_country=1&amp;language=tr&amp;category=111812" data-section="" data-value="true" data-id="hasFreeShipping">
                    <i tabindex="7"></i>
                    Ücretsiz Kargo</a>
            </li>
        </div>
    </div>
</div>
            <span class="shopping-search-filter-section-title">Arama Seçenekleri</span>
            <div id="searchResultLeft-address" class="search-filter-section" data-name="address" data-depends-on="" data-triggers-refresh="false">
                                <dl class="">
        <dt class="collapseTitle notCollapsable" id="addressSelector">
            Adres</dt>
        <dd class="address-selector">
            <ul class="address-select-wrapper" data-locationvalues="[{&quot;breadcrumb&quot;:[{&quot;id&quot;:&quot;1&quot;,&quot;label&quot;:&quot;Türkiye&quot;,&quot;levelName&quot;:&quot;country&quot;}],&quot;suffix&quot;:&quot;country&quot;}]">
                <li data-address="city">
	                <a class="faceted-select" href="#">
	                	İl</a>
                    <div class="address-pane">
                        <div class="parent-location"></div>
                        <div class="address-filter">
                            <input type="text" class="js-address-filter" placeholder="İl">
                        </div>
                        <a class="collapse-pane" href="#"></a>
                        <div class="scroll-pane lazy-scroll" style="overflow: hidden; padding: 0px; width: 219px;">
                            
                        <div class="jspContainer" style="width: 219px; height: 330px;"><div class="jspPane" style="padding: 0px; top: 0px; left: 0px; width: 219px;"><ul class="address-search-list">
                            </ul></div></div></div>
                    </div>
                </li>

                <li data-address="town">
                     <a class="faceted-select passive" href="#">İlçe</a>
                     <div class="address-pane">
                        <div class="parent-location"></div>
                        <div class="address-filter">
                            <input type="text" class="js-address-filter" placeholder="İlçe">
                        </div>
                        <a class="collapse-pane" href="#"></a>
                        <div class="scroll-pane lazy-scroll" style="overflow: hidden; padding: 0px; width: 219px;">
                            
                        <div class="jspContainer" style="width: 219px; height: 330px;"><div class="jspPane" style="padding: 0px; top: 0px; left: 0px; width: 219px;"><ul class="address-search-list">
                            </ul></div></div></div>
                    </div>
                </li>
                <li data-address="country">
                    <div class="address-pane tooltip-style country-select hidden">
                        <div class="parent-location"></div>
                        <div class="address-filter">
                            <input type="text" class="js-address-filter" placeholder="Ülke">
                        </div>
                        <a class="collapse-pane" href="#"></a>
                        <div class="scroll-pane lazy-scroll" style="overflow: hidden; padding: 0px; width: 219px;">
                            
                        <div class="jspContainer" style="width: 219px; height: 330px;"><div class="jspPane" style="padding: 0px; top: 0px; left: 0px; width: 219px;"><ul class="address-search-list">
                            </ul></div></div></div>
                    </div>
                    <a href="#" title="Türkiye" class="country-change-link js-change-country">Türkiye</a>
                </li>
            </ul>
        </dd>
    </dl>

    <input type="hidden" id="hasStyled" value="">
    <div class="disable"></div>
</div>
                        <div id="searchResultLeft-query" class="search-filter-section" data-name="query" data-depends-on="" data-triggers-refresh="false">
                                </div>
                        <div id="searchResultLeft-price" class="search-filter-section" data-name="price" data-depends-on="" data-triggers-refresh="false">
                                <dl class="">
    <dt class="collapseTitle" id="_cllpsID_price">
        Fiyat</dt>
        <dd class="collapseContent">
            <ul class="tabbed-list" id="u-price">
                    <li>
                            <a href="/arama/flt/?address_country=1&amp;language=tr&amp;category=111812#u-price" class="js-attribute js-unit-tab checked" data-section="" data-value="1" data-id="price_currency">TL</a>
                        </li>
                    <li>
                            <a href="/arama/flt/?address_country=1&amp;language=tr&amp;category=111812&amp;price_currency=2#u-price" class="js-attribute js-unit-tab" data-section="" data-value="2" data-id="price_currency">USD</a>
                        </li>
                    <li>
                            <a href="/arama/flt/?address_country=1&amp;language=tr&amp;category=111812&amp;price_currency=3#u-price" class="js-attribute js-unit-tab" data-section="" data-value="3" data-id="price_currency">EUR</a>
                        </li>
                    <li>
                            <a href="/arama/flt/?address_country=1&amp;language=tr&amp;category=111812&amp;price_currency=4#u-price" class="js-attribute js-unit-tab" data-section="" data-value="4" data-id="price_currency">GBP</a>
                        </li>
                    </ul>
            <div class="numeric-input-holder clearfix">
                <input type="text" class="numericInput js-manual-search-input" placeholder="min TL" name="price_min" maxlength="11" data-section="" value="">
                <em>-</em>
                <input type="text" class="numericInput js-manual-search-input" placeholder="max TL" name="price_max" maxlength="11" value="" data-section="">
                <button class="btn btn-link js-manual-search-button">Ara</button>
                </div>
            <ul class="facetedSearchList scroll-pane" style="overflow: hidden; padding: 0px; width: 178px;">
                <div class="jspContainer" style="width: 178px; height: 0px;"><div class="jspPane" style="padding: 0px; top: 0px; left: 0px; width: 178px;"></div></div></ul>
            </dd>
    </dl>
</div>
                        <div id="searchResultLeft-exchange" class="search-filter-section" data-name="exchange" data-depends-on="" data-triggers-refresh="false">
                                <dl class="">
    <dt id="_cllpsID_exchange" class="collapseTitle collapseClosed">
            Takaslı</dt>
        <dd class="collapseContent disable">
            <ul class="facetedSearchList scroll-pane">
                <li>
                            <div class="text-content">
                                <a href="/arama/flt/?address_country=1&amp;language=tr&amp;exchange=yes&amp;category=111812" class="js-attribute facetedRadiobox single-selection" data-section="" data-value="yes" data-id="exchange">
                                    <i tabindex="8"></i>
                                    Evet</a>
                                </div>
                        </li>
                    <li>
                            <div class="text-content">
                                <a href="/arama/flt/?address_country=1&amp;language=tr&amp;exchange=no&amp;category=111812" class="js-attribute facetedRadiobox single-selection" data-section="" data-value="no" data-id="exchange">
                                    <i tabindex="9"></i>
                                    Hayır</a>
                                </div>
                        </li>
                    </ul>

        </dd>
    </dl>
</div>
                        <div id="searchResultLeft-userId" class="search-filter-section disable" data-name="userId" data-depends-on="" data-triggers-refresh="false">
                                <dl class="disable">
    </dl>
</div>
                        <div id="searchResultLeft-specialTypeId" class="search-filter-section disable" data-name="specialTypeId" data-depends-on="" data-triggers-refresh="false">
                                <dl class="disable">
    </dl>
</div>
                        <div class="search-filter-section filterByKeyword last-item clearfix">
    <dl class="">
        <dt class="collapseTitle" id="_cllpsID_filter-by-keyword">Kelime ile filtrele</dt>
        <dd class="collapseContent">
            <ul class="facetedSearchList">
                <li>
                    <input type="text" class="filterKeyword filterByKeywordButtonText js-manual-search-input" name="query_text" value="" required="required">
                    <button type="button" class="btn btn-link js-manual-search-button filterByKeywordSubmit filterByKeywordButton">
                        Filtrele</button>
                    <div class="includeAdDescCont form-style-wrapper">
                        <input type="checkbox" class="includeAdDesc" id="includeAdDesc" name="query_desc" value="true">
                        <label for="includeAdDesc">İlan açıklamalarını dahil et.</label>
                    </div>
                </li>
            </ul>
        </dd>
    </dl>
</div>
<span class="shopping-search-filter-section-title">Diğer Seçenekler</span>
            <div id="searchResultLeft-date" class="search-filter-section" data-name="date" data-depends-on="" data-triggers-refresh="false">
                                <dl class="">
    <dt id="_cllpsID_date" class="collapseTitle">
            İlan Tarihi</dt>
        <dd class="collapseContent">
            <ul class="facetedSearchList scroll-pane" style="overflow: hidden; padding: 0px; width: 178px;">
                
                    
                    
                    
                    
                    <div class="jspContainer" style="width: 178px; height: 105px;"><div class="jspPane" style="padding: 0px; top: 0px; left: 0px; width: 178px;"><li>
                            <div class="text-content">
                                <a href="/arama/flt/?date=1day&amp;address_country=1&amp;language=tr&amp;category=111812" class="js-attribute facetedRadiobox single-selection" data-section="" data-value="1day" data-id="date">
                                    <i tabindex="10"></i>
                                    Son 24 saat</a>
                                </div>
                        </li><li>
                            <div class="text-content">
                                <a href="/arama/flt/?date=3days&amp;address_country=1&amp;language=tr&amp;category=111812" class="js-attribute facetedRadiobox single-selection" data-section="" data-value="3days" data-id="date">
                                    <i tabindex="11"></i>
                                    Son 3 gün içinde</a>
                                </div>
                        </li><li>
                            <div class="text-content">
                                <a href="/arama/flt/?date=7days&amp;address_country=1&amp;language=tr&amp;category=111812" class="js-attribute facetedRadiobox single-selection" data-section="" data-value="7days" data-id="date">
                                    <i tabindex="12"></i>
                                    Son 7 gün içinde</a>
                                </div>
                        </li><li>
                            <div class="text-content">
                                <a href="/arama/flt/?date=15days&amp;address_country=1&amp;language=tr&amp;category=111812" class="js-attribute facetedRadiobox single-selection" data-section="" data-value="15days" data-id="date">
                                    <i tabindex="13"></i>
                                    Son 15 gün içinde</a>
                                </div>
                        </li><li>
                            <div class="text-content">
                                <a href="/arama/flt/?date=30days&amp;address_country=1&amp;language=tr&amp;category=111812" class="js-attribute facetedRadiobox single-selection" data-section="" data-value="30days" data-id="date">
                                    <i tabindex="14"></i>
                                    Son 30 gün içinde</a>
                                </div>
                        </li></div></div></ul>

        </dd>
    </dl>
</div>
                        <div id="searchResultLeft-hasVideo" class="search-filter-section" data-name="hasVideo" data-depends-on="" data-triggers-refresh="false">
                                <dl class="">
    <dt class="collapseTitle" id="_cllpsID_hasVideo">
                Videolu ilanlar</dt>
            <dd class="collapseContent">
                <ul class="facetedSearchList scroll-pane" style="overflow: hidden; padding: 0px; width: 178px;">
                    
                <div class="jspContainer" style="width: 178px; height: 17px;"><div class="jspPane" style="padding: 0px; top: 0px; left: 0px; width: 178px;"><li>
                        <a id="noneCategoryAttribute_hasVideo" name="hasVideo" href="/arama/flt/?hasVideo=true&amp;address_country=1&amp;language=tr&amp;category=111812" data-section="" data-value="true" data-id="hasVideo">
                            Videolu ilanlar</a>

                    </li></div></div></ul>
            </dd>

        </dl>
</div>
                        <div id="searchResultLeft-hasPhoto" class="search-filter-section" data-name="hasPhoto" data-depends-on="" data-triggers-refresh="false">
                                <dl class="">
    <dt class="collapseTitle" id="_cllpsID_hasPhoto">
                Fotoğraflı ilanlar</dt>
            <dd class="collapseContent">
                <ul class="facetedSearchList scroll-pane" style="overflow: hidden; padding: 0px; width: 178px;">
                    
                <div class="jspContainer" style="width: 178px; height: 17px;"><div class="jspPane" style="padding: 0px; top: 0px; left: 0px; width: 178px;"><li>
                        <a id="noneCategoryAttribute_hasPhoto" name="hasPhoto" href="/arama/flt/?hasPhoto=true&amp;address_country=1&amp;language=tr&amp;category=111812" data-section="" data-value="true" data-id="hasPhoto">
                            Fotoğraflı ilanlar</a>

                    </li></div></div></ul>
            </dd>

        </dl>
</div>
                        <div id="searchResultLeft-hasMegaPhoto" class="search-filter-section" data-name="hasMegaPhoto" data-depends-on="" data-triggers-refresh="false">
                                <dl class="">
    <dt class="collapseTitle" id="_cllpsID_hasMegaPhoto">
                MegaFotolu ilanlar</dt>
            <dd class="collapseContent">
                <ul class="facetedSearchList scroll-pane" style="overflow: hidden; padding: 0px; width: 178px;">
                    
                <div class="jspContainer" style="width: 178px; height: 17px;"><div class="jspPane" style="padding: 0px; top: 0px; left: 0px; width: 178px;"><li>
                        <a id="noneCategoryAttribute_hasMegaPhoto" name="hasMegaPhoto" href="/arama/flt/?address_country=1&amp;language=tr&amp;hasMegaPhoto=true&amp;category=111812" data-section="" data-value="true" data-id="hasMegaPhoto">
                            MegaFotolu ilanlar</a>

                    </li></div></div></ul>
            </dd>

        </dl>
</div>
                        <p id="moreSelectionLink" class="more-criteria-link">
            <a href="#" class="viewAllLightbox">Daha fazla seçenek göster</a>
        </p>
    <div class="sticky-search-button static" style="display: block;">
        <button class="btn btn-block search-submit">Ara</button>
    </div>

    <div class="form-style-wrapper refresh-on-click">
        <input type="checkbox" id="refresh-on-click" name="refresh-on-click">
        <label for="refresh-on-click">
            Seçtikçe sonuç getir</label>
        <span class="help-icon tipitip-trigger" data-position="east" data-content="Seçili konumdayken her yaptığınız seçimle birlikte arama sonuçları otomatik olarak yenilenir." data-class="promotion-code-tt"></span>
    </div>
</div>

<div class="searchResultsRight">

    <div class="relativeContainer">
    <div class="disable">
    <div id="saveSearchContent">
        <h3>Aramayı Favorilere Kaydet</h3>
        <ul class="favoriteSearchesDialogForm form-style-wrapper">
            <li>
                <span>Favori Arama Adı</span>
                <input type="text" class="textbox" name="favoriteSearchTitle" maxlength="30">
                <p class="form-error">Favori arama adı 30 karakterden fazla olamaz.</p>
                <p class="form-custom-error" error="already-exist">Aynı isimli kayıtlı favori aramanız var.</p>
                <p class="form-custom-error" error="title-empty">Favori arama adı girin.</p>
            </li>
            <li>
                <span>Günlük Bildirim Ayarları</span>
                <dl>
                    <dt>
                        <input type="checkbox" class="notification-choice" id="favSearchEmailNotifications" checked="checked">
                        <label for="favSearchEmailNotifications">E-posta Bildirimi</label>
                        <span class="btn btn-link btn-alternative question-icon tipitip-trigger" data-position="north" data-class="tipitip-dialog" data-content="Arama kriterlerinize uygun ilanlar günlük olarak e-posta adresinize gönderilecektir.">?</span>
                    </dt>
                    <dt>
                        <input type="checkbox" class="notification-choice" id="favSearchPushNotifications">
                        <label for="favSearchPushNotifications">Mobil Bildirim</label>
                        <span class="btn btn-link btn-alternative question-icon tipitip-trigger" data-position="north" data-class="tipitip-dialog" data-content="Arama kriterlerinize uygun ilanlar uygulamanın yüklü ve üyeliğinizin tanımlı olduğu cep telefonuna mobil bildirim olarak gönderilecektir.">?</span>
                    </dt>
                </dl>
            </li>
        </ul>
        <p class="dialog-buttons">
            <a class="btn btn-alternative btn-form close">Vazgeç</a>
            <button type="submit" class="btn btn-form" disabled="">Kaydet</button>
        </p>
    </div>
</div>
<div class="infoSearchResults">
	<div class="resultsTextWrapper">
		<div class="result-text"><h1>"<span title="Dizüstü (Notebook) Bilgisayar">Dizüstü (Notebook) Bilgisayar</span>"</h1> aramanızda <span>133.259 ürün</span> bulundu.</div>
				<div class="saveSearchWrapper">
		<input id="searchLinkInput" type="hidden" value="address_country=1&amp;language=tr&amp;category=111812">
		<div class="save-search-container">
			<a id="saveSearchResultLink" class="faceted-save-search" href="javascript:;">
				Aramayı Favorilere Kaydet</a>
		</div>
		<a href="" id="showSearchFilter" class="show-search-filter" style="display: none">Seçtiklerimi Göster</a>
		</div>
		<input type="hidden" id="queryTextModified" value="">
		</div>
	</div>
<div class="searchResultSorted faceted-table-top ">
        <div class="sortedTypes">
            <span class="viewTypeTitle" ondblclick="">Görünüm</span>
                <ul class="view-type-size-menu-item">
                        <ul class="faceted-sort-buttons view-type-menu">
                            <li>
                                    <span class="select-size-type listTypeClassic" title="Klasik"></span>
                                    </li>
                            <li>
                                    <a href="/bilgisayar-dizustu-notebook?viewType=List" class="listTypeListPassive" title="Liste"></a>
                                    </li>
                            <li>
                                    <a href="/bilgisayar-dizustu-notebook?viewType=Gallery" class="listTypeGalleryPassive" title="Galeri"></a>
                                    </li>
                            </ul>
                    
                </ul>
            <ul class="sort-order-menu">
                <li>
                    <a href="#!" id="advancedSorting" rel="nofollow">Gelişmiş sıralama</a>
                    <ul>
                        <li>
                                <a href="/bilgisayar-dizustu-notebook?sorting=bm">Gelişmiş sıralama</a>
                            </li>
                        <li>
                                <a href="/bilgisayar-dizustu-notebook?sorting=price_desc">Fiyata göre (Önce en yüksek)</a>
                            </li>
                        <li>
                                <a href="/bilgisayar-dizustu-notebook?sorting=price_asc">Fiyata göre (Önce en düşük)</a>
                            </li>
                        <li>
                                <a href="/bilgisayar-dizustu-notebook?sorting=date_desc">Tarihe göre (Önce en yeni ilan)</a>
                            </li>
                        <li>
                                <a href="/bilgisayar-dizustu-notebook?sorting=date_asc">Tarihe göre (Önce en eski ilan)</a>
                            </li>
                        <li>
                                <a href="/bilgisayar-dizustu-notebook?sorting=address_asc">Adrese göre (A-Z)</a>
                            </li>
                        <li>
                                <a href="/bilgisayar-dizustu-notebook?sorting=address_desc">Adrese göre (Z-A)</a>
                            </li>
                        </ul>
                </li>
            </ul>
        </div>
        <ul class="faceted-top-buttons new-toggle-menu">
            <li class="active">
                        <a class="phdef" href="/bilgisayar-dizustu-notebook">
                            Tüm İlanlar<span class="flag">Yeni</span>
                        </a>

                    </li>
                <li class="passive">
                        <a class="phdef trackLinkClick trackId_ikinci_el_tabi" href="/bilgisayar-dizustu-notebook/ikinci-el">
                            İkinci El<span class="flag">Yeni</span>
                        </a>

                    </li>
                <li class="passive">
                        <a class="phdef trackLinkClick trackId_sifir_tabi" href="/bilgisayar-dizustu-notebook/sifir">
                            Sıfır<span class="flag">Yeni</span>
                        </a>

                    </li>
                </ul>
    <div class="clear"></div>
    </div>
    </div>
<table id="searchResultsTable" class="">
    <thead>
    <tr>
        <td class="searchResultsFirstColumn">&nbsp;</td>
        <td class="">İlan Başlığı</td>
                    <td class="searchResultsPriceHeader" nowrap="">
                            <a href="/bilgisayar-dizustu-notebook?sorting=price_asc">
    Fiyat</a>
</td>
                    <td class="searchResultsDateHeader" nowrap="">
                            <a href="/bilgisayar-dizustu-notebook?sorting=date_desc">
    İlan Tarihi</a>
</td>
                    <td class="searchResultsLastColumn searchResultsLocationHeader" nowrap="">
                            <a href="/bilgisayar-dizustu-notebook?sorting=address_desc">
    İl / İlçe</a>
</td>
                    <td class="searchResultsIgnoredColumn"></td>
    </tr>
    </thead>
    <tbody class="searchResultsRowClass">
    <tr data-id="757720095" class="searchResultsItem     ">
    <td class="searchResultsLargeThumbnail">
            <a href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-asus7nesilamd-a9-94203.5ghz12gbram-1tbhd-4gb.ekrank.ultrabook-757720095/detay">

    <img src="https://image5.sahibinden.com/photos/72/00/95/thmb_757720095bel.jpg" alt="ASUS7NESİLAMD A9-94203.5GHZ12GBRAM-1TBHD-4GB.EKRANK.ULTRABOOK #757720095" title="ASUS7NESİLAMD A9-94203.5GHZ12GBRAM-1TBHD-4GB.EKRANK.ULTRABOOK">
    </a></td>
    <td class="searchResultsTitleValue ">
                    <input id="favoriteClassifiedsVisibility" type="hidden" value="true">
<div class="action-wrapper" data-classified-id="757720095">
                            <div class="add-to-favorites last favorite">
        <a href="#" class="action classifiedAddFavorite trackClick trackId_favorite  hidden" data-content="Favorilerime Ekle">
        </a>
        <a href="#" class="action classifiedRemoveFavorite trackClick trackId_favorite disable" data-content="Favorilerimde">
	    </a>
    </div>
<div class="compare hidden">
    <a class="facetedCheckbox action compare-classified" data-content="İlan Karşılaştır">
        <i></i>
    </a>
</div>
</div>
                    <img class="titleIcon" width="12" height="14" src="https://s0.shbdn.com/assets/images/iconNew@2x:212343d37981801512b7b8b249315156.png" alt="Yeni İlan" title="Yeni İlan" style="visibility: visible;">
<a class="classifiedTitle" href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-asus7nesilamd-a9-94203.5ghz12gbram-1tbhd-4gb.ekrank.ultrabook-757720095/detay">
    ASUS7NESİLAMD A9-94203.5GHZ12G­BRAM-1TBHD-4GB.­EKRANK.ULTRABOOK</a>

</td>
            <td class="searchResultsPriceValue">
                        <div> 2.150 TL</div></td>
                <td class="searchResultsDateValue">
                        <span>16 Kasım</span>
                        <br>
                        <span>2019</span>
                    </td>
                <td class="searchResultsLocationValue">
                        İstanbul<br>Bahçelievler</td>
                <td class="ignore-me">
    <a href="#" class="mark-as-ignored" title="Bu ilanla ilgilenmiyorum, gizle."></a>
    <a href="#" class="mark-as-not-ignored disable" data-content="Göster"></a>
</td>
</tr><tr data-id="757618195" class="searchResultsItem     ">
    <td class="searchResultsLargeThumbnail">
            <a href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-monster-i7-islemci-16gb-plus256ssd-plus1tb-plus6gb-gtx1060-10-ay-garantili-757618195/detay">

    <img src="https://image5.sahibinden.com/photos/61/81/95/thmb_7576181955xb.jpg" alt="MONSTER İ7 İŞLEMCI 16GB+256SSD+1TB+6GB GTX1060 10 AY GARANTİLİ #757618195" title="MONSTER İ7 İŞLEMCI 16GB+256SSD+1TB+6GB GTX1060 10 AY GARANTİLİ">
    </a></td>
    <td class="searchResultsTitleValue ">
                    <input id="favoriteClassifiedsVisibility" type="hidden" value="true">
<div class="action-wrapper" data-classified-id="757618195">
                            <div class="add-to-favorites last favorite">
        <a href="#" class="action classifiedAddFavorite trackClick trackId_favorite  hidden" data-content="Favorilerime Ekle">
        </a>
        <a href="#" class="action classifiedRemoveFavorite trackClick trackId_favorite disable" data-content="Favorilerimde">
	    </a>
    </div>
<div class="compare hidden">
    <a class="facetedCheckbox action compare-classified" data-content="İlan Karşılaştır">
        <i></i>
    </a>
</div>
</div>
                    <img class="titleIcon" width="12" height="14" src="https://s0.shbdn.com/assets/images/iconNew@2x:212343d37981801512b7b8b249315156.png" alt="Yeni İlan" title="Yeni İlan" style="visibility: visible;">
<a class="classifiedTitle" href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-monster-i7-islemci-16gb-plus256ssd-plus1tb-plus6gb-gtx1060-10-ay-garantili-757618195/detay">
    MONSTER İ7 İŞLEMCI 16GB+256SSD+1TB+6GB GTX1060 10 AY GARANTİLİ</a>

<a class="titleIcon store-icon" href="https://erkanticaret.sahibinden.com/" title="ERKAN TİCARET" style="visibility: visible;">
        <img class="titleIcon" src="https://s0.shbdn.com/assets/images/iconStore@2x:c1d32ca031d86c6735fd31957ee635cd.png" width="10" height="14" alt="ERKAN TİCARET" title="ERKAN TİCARET" style="visibility: visible;">
    </a>
</td>
            <td class="searchResultsPriceValue">
                        <div> 6.599 TL</div></td>
                <td class="searchResultsDateValue">
                        <span>16 Kasım</span>
                        <br>
                        <span>2019</span>
                    </td>
                <td class="searchResultsLocationValue">
                        İstanbul<br>Fatih</td>
                <td class="ignore-me">
    <a href="#" class="mark-as-ignored" title="Bu ilanla ilgilenmiyorum, gizle."></a>
    <a href="#" class="mark-as-not-ignored disable" data-content="Göster"></a>
</td>
</tr><tr data-id="757361261" class="searchResultsItem     ">
    <td class="searchResultsLargeThumbnail">
            <a href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-thinkpad-x1-carbon-i7-7600u-16gb-ram-256gb-nvme-ssd-14-full-hd-757361261/detay">

    <img src="https://image5.sahibinden.com/photos/36/12/61/thmb_7573612610oi.jpg" alt="ThinkPad X1 Carbon i7 7600U 16GB RAM 256GB NVMe SSD 14" full="" hd="" #757361261"="" title="ThinkPad X1 Carbon i7 7600U 16GB RAM 256GB NVMe SSD 14" hd"="">
    </a></td>
    <td class="searchResultsTitleValue ">
                    <input id="favoriteClassifiedsVisibility" type="hidden" value="true">
<div class="action-wrapper" data-classified-id="757361261">
                            <div class="add-to-favorites last favorite">
        <a href="#" class="action classifiedAddFavorite trackClick trackId_favorite  hidden" data-content="Favorilerime Ekle">
        </a>
        <a href="#" class="action classifiedRemoveFavorite trackClick trackId_favorite disable" data-content="Favorilerimde">
	    </a>
    </div>
<div class="compare hidden">
    <a class="facetedCheckbox action compare-classified" data-content="İlan Karşılaştır">
        <i></i>
    </a>
</div>
</div>
                    <img class="titleIcon" width="12" height="14" src="https://s0.shbdn.com/assets/images/iconNew@2x:212343d37981801512b7b8b249315156.png" alt="Yeni İlan" title="Yeni İlan">
<a class=" classifiedTitle" href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-thinkpad-x1-carbon-i7-7600u-16gb-ram-256gb-nvme-ssd-14-full-hd-757361261/detay">
    ThinkPad X1 Carbon i7 7600U 16GB RAM 256GB NVMe SSD 14" Full HD</a>

<a class="titleIcon store-icon" href="https://dortmbilisim.sahibinden.com/" title="4M Bilişim">
        <img class="titleIcon" src="https://s0.shbdn.com/assets/images/iconStore@2x:c1d32ca031d86c6735fd31957ee635cd.png" width="10" height="14" alt="4M Bilişim" title="4M Bilişim">
    </a>
</td>
            <td class="searchResultsPriceValue">
                        <div> 6.799 TL</div></td>
                <td class="searchResultsDateValue">
                        <span>15 Kasım</span>
                        <br>
                        <span>2019</span>
                    </td>
                <td class="searchResultsLocationValue">
                        İstanbul<br>Ümraniye</td>
                <td class="ignore-me">
    <a href="#" class="mark-as-ignored" title="Bu ilanla ilgilenmiyorum, gizle."></a>
    <a href="#" class="mark-as-not-ignored disable" data-content="Göster"></a>
</td>
</tr><tr class="searchResultsAdItem nativeAd shbdnNativeAd" style="">
    <td class="ad-panel" colspan="6">
        <div class="ad-complaint"></div>
        <div class="ad-container" id="a30b25fd-08b9-11ea-8f36-4e5b04dc70dc_b" data-href="https://kamerbilisim.sahibinden.com" data-api-href="/ajax/nad/c/a30b25fd-08b9-11ea-8f36-4e5b04dc70dc_b/false" data-usertype="STANDARD" force-display="false" header-bidding-check="false" header-bidding="false">
            <div class="ad-attribution">Reklam</div>
            <div class="ad-image">
                <a class="ad-image-link" href="#" target="_blank"><img src="https://image5.sahibinden.com/ntvd/71/00/61/thmb_30b1d0ad-0663-11ea-8f36-4e5b04dc70dc_b.jpg"></a>
            </div>
            <div class="ntvd_link_container">
                <div class="ad-title">
                    <a class="ad-title-link ulink" href="#" target="_blank">ariza tespit cihazlari</a>
                </div>
                <div class="ad-body">
                    <a class="ad-body-link" href="#" target="_blank">Kamer Bilişim Otomotiv Arıza Tespit Cihazları Ve Teknik Servis Hizmetleri Ekibi</a>
                </div>
                <div class="ad-call-to-action">
                    <a class="ad-call-to-action-link ulink" href="#" target="_blank">BILGI ALIN</a>
                </div>
            </div>
        </div>
    </td>
    <td class="complaint-add-panel" colspan="6" style="display: none">
        <div class="cancel-complaint"></div>
        <div class="complaint-buttons">
            <a class="complaint-btn" href="#">Reklamı şikayet et</a>
            <a class="landing-btn" href="#">sahibinden Doğal Reklam</a>
        </div>
    </td>
    <td class="complaint-description-panel" colspan="6" style="display: none">
        <p class="complaint-description">Şikayetiniz en kısa sürede değerlendirilecektir.</p>
    </td>
</tr>



<tr data-id="757275966" class="searchResultsItem     ">
    <td class="searchResultsLargeThumbnail">
            <a href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-hp-840-g3-intel-i5-6200u-8gb-ddr4-ram-256gb-ssd-m2-2.el-dizustu-757275966/detay">

    <img src="https://image5.sahibinden.com/photos/27/59/66/thmb_757275966uc1.jpg" alt="HP 840 G3 İNTEL İ5 6200U 8GB DDR4 RAM 256GB SSD/M2 2.EL DİZÜSTÜ #757275966" title="HP 840 G3 İNTEL İ5 6200U 8GB DDR4 RAM 256GB SSD/M2 2.EL DİZÜSTÜ">
    </a></td>
    <td class="searchResultsTitleValue ">
                    <input id="favoriteClassifiedsVisibility" type="hidden" value="true">
<div class="action-wrapper" data-classified-id="757275966">
                            <div class="add-to-favorites last favorite">
        <a href="#" class="action classifiedAddFavorite trackClick trackId_favorite  hidden" data-content="Favorilerime Ekle">
        </a>
        <a href="#" class="action classifiedRemoveFavorite trackClick trackId_favorite disable" data-content="Favorilerimde">
	    </a>
    </div>
<div class="compare hidden">
    <a class="facetedCheckbox action compare-classified" data-content="İlan Karşılaştır">
        <i></i>
    </a>
</div>
</div>
                    <img class="titleIcon" width="12" height="14" src="https://s0.shbdn.com/assets/images/iconNew@2x:212343d37981801512b7b8b249315156.png" alt="Yeni İlan" title="Yeni İlan" style="visibility: visible;">
<a class="classifiedTitle" href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-hp-840-g3-intel-i5-6200u-8gb-ddr4-ram-256gb-ssd-m2-2.el-dizustu-757275966/detay">
    HP 840 G3 İNTEL İ5 6200U 8GB DDR4 RAM 256GB SSD/M2 2.EL DİZÜSTÜ</a>

<a class="titleIcon store-icon" href="https://hdcom.sahibinden.com/" title="HDCOM ELEKTRONİK VE GENEL TİCARET LTD ŞTİ" style="visibility: visible;">
        <img class="titleIcon" src="https://s0.shbdn.com/assets/images/iconStore@2x:c1d32ca031d86c6735fd31957ee635cd.png" width="10" height="14" alt="HDCOM ELEKTRONİK VE GENEL TİCARET LTD ŞTİ" title="HDCOM ELEKTRONİK VE GENEL TİCARET LTD ŞTİ" style="visibility: visible;">
    </a>
</td>
            <td class="searchResultsPriceValue">
                        <div> 2.199 TL</div></td>
                <td class="searchResultsDateValue">
                        <span>15 Kasım</span>
                        <br>
                        <span>2019</span>
                    </td>
                <td class="searchResultsLocationValue">
                        İstanbul<br>Ümraniye</td>
                <td class="ignore-me">
    <a href="#" class="mark-as-ignored" title="Bu ilanla ilgilenmiyorum, gizle."></a>
    <a href="#" class="mark-as-not-ignored disable" data-content="Göster"></a>
</td>
</tr><tr data-id="757275011" class="searchResultsItem     ">
    <td class="searchResultsLargeThumbnail">
            <a href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-hp-840-i7-5600u-3.20ghz-8gb-ram-120gb-ssd-2el-notebook-757275011/detay">

    <img src="https://image5.sahibinden.com/photos/27/50/11/thmb_757275011ke1.jpg" alt="HP 840 İ7 5600U 3.20GHz 8GB RAM 120GB SSD 2EL NOTEBOOK #757275011" title="HP 840 İ7 5600U 3.20GHz 8GB RAM 120GB SSD 2EL NOTEBOOK">
    </a></td>
    <td class="searchResultsTitleValue ">
                    <input id="favoriteClassifiedsVisibility" type="hidden" value="true">
<div class="action-wrapper" data-classified-id="757275011">
                            <div class="add-to-favorites last favorite">
        <a href="#" class="action classifiedAddFavorite trackClick trackId_favorite  hidden" data-content="Favorilerime Ekle">
        </a>
        <a href="#" class="action classifiedRemoveFavorite trackClick trackId_favorite disable" data-content="Favorilerimde">
	    </a>
    </div>
<div class="compare hidden">
    <a class="facetedCheckbox action compare-classified" data-content="İlan Karşılaştır">
        <i></i>
    </a>
</div>
</div>
                    <img class="titleIcon" width="12" height="14" src="https://s0.shbdn.com/assets/images/iconNew@2x:212343d37981801512b7b8b249315156.png" alt="Yeni İlan" title="Yeni İlan" style="visibility: visible;">
<a class="classifiedTitle" href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-hp-840-i7-5600u-3.20ghz-8gb-ram-120gb-ssd-2el-notebook-757275011/detay">
    HP 840 İ7 5600U 3.20GHz 8GB RAM 120GB SSD 2EL NOTEBOOK</a>

<a class="titleIcon store-icon" href="https://hdcom.sahibinden.com/" title="HDCOM ELEKTRONİK VE GENEL TİCARET LTD ŞTİ" style="visibility: visible;">
        <img class="titleIcon" src="https://s0.shbdn.com/assets/images/iconStore@2x:c1d32ca031d86c6735fd31957ee635cd.png" width="10" height="14" alt="HDCOM ELEKTRONİK VE GENEL TİCARET LTD ŞTİ" title="HDCOM ELEKTRONİK VE GENEL TİCARET LTD ŞTİ" style="visibility: visible;">
    </a>
</td>
            <td class="searchResultsPriceValue">
                        <div> 1.999 TL</div></td>
                <td class="searchResultsDateValue">
                        <span>15 Kasım</span>
                        <br>
                        <span>2019</span>
                    </td>
                <td class="searchResultsLocationValue">
                        İstanbul<br>Ümraniye</td>
                <td class="ignore-me">
    <a href="#" class="mark-as-ignored" title="Bu ilanla ilgilenmiyorum, gizle."></a>
    <a href="#" class="mark-as-not-ignored disable" data-content="Göster"></a>
</td>
</tr><tr data-id="754723213" class="searchResultsItem searchResultsPromoHighlight searchResultsPromoBold   ">
    <td class="searchResultsLargeThumbnail">
            <a href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-dell-xps-9575-2018-15.6-4k-8705g-i7-8-ram-512-ssd-radeon-rx-vega-754723213/detay">

    <img src="https://image5.sahibinden.com/photos/72/32/13/thmb_754723213i6w.jpg" alt="DELL XPS 9575 2018 15.6 4K 8705G i7 8 RAM 512 SSD RADEON RX VEGA #754723213" title="DELL XPS 9575 2018 15.6 4K 8705G i7 8 RAM 512 SSD RADEON RX VEGA">
    </a></td>
    <td class="searchResultsTitleValue ">
                    <input id="favoriteClassifiedsVisibility" type="hidden" value="true">
<div class="action-wrapper" data-classified-id="754723213">
                            <div class="add-to-favorites last favorite">
        <a href="#" class="action classifiedAddFavorite trackClick trackId_favorite  hidden" data-content="Favorilerime Ekle">
        </a>
        <a href="#" class="action classifiedRemoveFavorite trackClick trackId_favorite disable" data-content="Favorilerimde">
	    </a>
    </div>
<div class="compare hidden">
    <a class="facetedCheckbox action compare-classified" data-content="İlan Karşılaştır">
        <i></i>
    </a>
</div>
</div>
                    <a class=" classifiedTitle" href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-dell-xps-9575-2018-15.6-4k-8705g-i7-8-ram-512-ssd-radeon-rx-vega-754723213/detay">
    DELL XPS 9575 2018 15.6 4K 8705G i7 8 RAM 512 SSD RADEON RX VEGA</a>

<img class="titleIcon" alt="Videolu İlan" title="Videolu İlan" width="15" height="13" src="https://s0.shbdn.com/assets/images/iconHasVideo@2x:2e7f95dfc7fa1b71281430b0586e2cf5.png">
</td>
            <td class="searchResultsPriceValue">
                        <div> 9.600 TL</div></td>
                <td class="searchResultsDateValue">
                        <span>15 Kasım</span>
                        <br>
                        <span>2019</span>
                    </td>
                <td class="searchResultsLocationValue">
                        İstanbul<br>Fatih</td>
                <td class="ignore-me">
    <a href="#" class="mark-as-ignored" title="Bu ilanla ilgilenmiyorum, gizle."></a>
    <a href="#" class="mark-as-not-ignored disable" data-content="Göster"></a>
</td>
</tr><tr data-id="757272054" class="searchResultsItem     ">
    <td class="searchResultsLargeThumbnail">
            <a href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-lenovo-x240-i7-4600u-3.30ghz-8gb-ddr3-ram-180gb-ssd-2el-dizustu-757272054/detay">

    <img src="https://image5.sahibinden.com/photos/27/20/54/thmb_757272054bfj.jpg" alt="LENOVO X240 İ7 4600U 3.30GHz 8GB DDR3 RAM 180GB SSD 2EL DİZÜSTÜ #757272054" title="LENOVO X240 İ7 4600U 3.30GHz 8GB DDR3 RAM 180GB SSD 2EL DİZÜSTÜ">
    </a></td>
    <td class="searchResultsTitleValue ">
                    <input id="favoriteClassifiedsVisibility" type="hidden" value="true">
<div class="action-wrapper" data-classified-id="757272054">
                            <div class="add-to-favorites last favorite">
        <a href="#" class="action classifiedAddFavorite trackClick trackId_favorite  hidden" data-content="Favorilerime Ekle">
        </a>
        <a href="#" class="action classifiedRemoveFavorite trackClick trackId_favorite disable" data-content="Favorilerimde">
	    </a>
    </div>
<div class="compare hidden">
    <a class="facetedCheckbox action compare-classified" data-content="İlan Karşılaştır">
        <i></i>
    </a>
</div>
</div>
                    <img class="titleIcon" width="12" height="14" src="https://s0.shbdn.com/assets/images/iconNew@2x:212343d37981801512b7b8b249315156.png" alt="Yeni İlan" title="Yeni İlan" style="visibility: visible;">
<a class="classifiedTitle" href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-lenovo-x240-i7-4600u-3.30ghz-8gb-ddr3-ram-180gb-ssd-2el-dizustu-757272054/detay">
    LENOVO X240 İ7 4600U 3.30GHz 8GB DDR3 RAM 180GB SSD 2EL DİZÜSTÜ</a>

<a class="titleIcon store-icon" href="https://hdcom.sahibinden.com/" title="HDCOM ELEKTRONİK VE GENEL TİCARET LTD ŞTİ" style="visibility: visible;">
        <img class="titleIcon" src="https://s0.shbdn.com/assets/images/iconStore@2x:c1d32ca031d86c6735fd31957ee635cd.png" width="10" height="14" alt="HDCOM ELEKTRONİK VE GENEL TİCARET LTD ŞTİ" title="HDCOM ELEKTRONİK VE GENEL TİCARET LTD ŞTİ" style="visibility: visible;">
    </a>
</td>
            <td class="searchResultsPriceValue">
                        <div> 1.699 TL</div></td>
                <td class="searchResultsDateValue">
                        <span>15 Kasım</span>
                        <br>
                        <span>2019</span>
                    </td>
                <td class="searchResultsLocationValue">
                        İstanbul<br>Ümraniye</td>
                <td class="ignore-me">
    <a href="#" class="mark-as-ignored" title="Bu ilanla ilgilenmiyorum, gizle."></a>
    <a href="#" class="mark-as-not-ignored disable" data-content="Göster"></a>
</td>
</tr><tr data-id="757245763" class="searchResultsItem     ">
    <td class="searchResultsLargeThumbnail">
            <a href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-lenovo-x250-i5-5-nesil-8-gb-ram-256-gb-ssd-757245763/detay">

    <img src="https://image5.sahibinden.com/photos/24/57/63/thmb_757245763gv7.jpg" alt="Lenovo X250 i5 5. Nesil 8 GB RAM 256 GB SSD #757245763" title="Lenovo X250 i5 5. Nesil 8 GB RAM 256 GB SSD">
    </a></td>
    <td class="searchResultsTitleValue ">
                    <input id="favoriteClassifiedsVisibility" type="hidden" value="true">
<div class="action-wrapper" data-classified-id="757245763">
                            <div class="add-to-favorites last favorite">
        <a href="#" class="action classifiedAddFavorite trackClick trackId_favorite  hidden" data-content="Favorilerime Ekle">
        </a>
        <a href="#" class="action classifiedRemoveFavorite trackClick trackId_favorite disable" data-content="Favorilerimde">
	    </a>
    </div>
<div class="compare hidden">
    <a class="facetedCheckbox action compare-classified" data-content="İlan Karşılaştır">
        <i></i>
    </a>
</div>
</div>
                    <img class="titleIcon" width="12" height="14" src="https://s0.shbdn.com/assets/images/iconNew@2x:212343d37981801512b7b8b249315156.png" alt="Yeni İlan" title="Yeni İlan">
<a class=" classifiedTitle" href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-lenovo-x250-i5-5-nesil-8-gb-ram-256-gb-ssd-757245763/detay">
    Lenovo X250 i5 5. Nesil 8 GB RAM 256 GB SSD</a>

<a class="titleIcon store-icon" href="https://adresofis.sahibinden.com/" title="ADRES OFİS">
        <img class="titleIcon" src="https://s0.shbdn.com/assets/images/iconStore@2x:c1d32ca031d86c6735fd31957ee635cd.png" width="10" height="14" alt="ADRES OFİS" title="ADRES OFİS">
    </a>
</td>
            <td class="searchResultsPriceValue">
                        <div> 2.000 TL</div></td>
                <td class="searchResultsDateValue">
                        <span>15 Kasım</span>
                        <br>
                        <span>2019</span>
                    </td>
                <td class="searchResultsLocationValue">
                        İstanbul<br>Ümraniye</td>
                <td class="ignore-me">
    <a href="#" class="mark-as-ignored" title="Bu ilanla ilgilenmiyorum, gizle."></a>
    <a href="#" class="mark-as-not-ignored disable" data-content="Göster"></a>
</td>
</tr><tr data-id="397437632" class="searchResultsItem     ">
    <td class="searchResultsLargeThumbnail">
            <a href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-cagri-merkezi%2Cisyeri%2Cokul%2Cev-ve-ofis-icin-hp-laptop-397437632/detay">

    <img src="https://image5.sahibinden.com/photos/43/76/32/thmb_3974376321d2.jpg" alt="ÇAĞRI MERKEZİ,İŞYERİ,OKUL,EV VE OFİS İÇİN HP LAPTOP!!! #397437632" title="ÇAĞRI MERKEZİ,İŞYERİ,OKUL,EV VE OFİS İÇİN HP LAPTOP!!!">
    </a></td>
    <td class="searchResultsTitleValue ">
                    <input id="favoriteClassifiedsVisibility" type="hidden" value="true">
<div class="action-wrapper" data-classified-id="397437632">
                            <div class="add-to-favorites last favorite">
        <a href="#" class="action classifiedAddFavorite trackClick trackId_favorite  hidden" data-content="Favorilerime Ekle">
        </a>
        <a href="#" class="action classifiedRemoveFavorite trackClick trackId_favorite disable" data-content="Favorilerimde">
	    </a>
    </div>
<div class="compare hidden">
    <a class="facetedCheckbox action compare-classified" data-content="İlan Karşılaştır">
        <i></i>
    </a>
</div>
</div>
                    <a class=" classifiedTitle" href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-cagri-merkezi%2Cisyeri%2Cokul%2Cev-ve-ofis-icin-hp-laptop-397437632/detay">
    ÇAĞRI MERKEZİ,İŞY­ERİ,OKUL,EV VE OFİS İÇİN HP LAPTOP!!!</a>

<a class="titleIcon store-icon" href="https://odakbilisim.sahibinden.com/" title="Odak Bilişim">
        <img class="titleIcon" src="https://s0.shbdn.com/assets/images/iconStore@2x:c1d32ca031d86c6735fd31957ee635cd.png" width="10" height="14" alt="Odak Bilişim" title="Odak Bilişim">
    </a>
</td>
            <td class="searchResultsPriceValue">
                        <div> 500 TL</div></td>
                <td class="searchResultsDateValue">
                        <span>15 Kasım</span>
                        <br>
                        <span>2019</span>
                    </td>
                <td class="searchResultsLocationValue">
                        İstanbul<br>Ümraniye</td>
                <td class="ignore-me">
    <a href="#" class="mark-as-ignored" title="Bu ilanla ilgilenmiyorum, gizle."></a>
    <a href="#" class="mark-as-not-ignored disable" data-content="Göster"></a>
</td>
</tr><tr data-id="756985783" class="searchResultsItem     ">
    <td class="searchResultsLargeThumbnail">
            <a href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-hp-250-g6-i5-7200u-4gb-256gb-ssd-15.6-fhd-freedos-garantili-756985783/detay">

    <img src="https://image5.sahibinden.com/photos/98/57/83/thmb_756985783m0h.jpg" alt="HP 250 G6 İ5-7200U 4GB 256GB SSD 15.6 FHD FREEDOS GARANTİLİ #756985783" title="HP 250 G6 İ5-7200U 4GB 256GB SSD 15.6 FHD FREEDOS GARANTİLİ">
    </a></td>
    <td class="searchResultsTitleValue ">
                    <input id="favoriteClassifiedsVisibility" type="hidden" value="true">
<div class="action-wrapper" data-classified-id="756985783">
                            <div class="add-to-favorites last favorite">
        <a href="#" class="action classifiedAddFavorite trackClick trackId_favorite  hidden" data-content="Favorilerime Ekle">
        </a>
        <a href="#" class="action classifiedRemoveFavorite trackClick trackId_favorite disable" data-content="Favorilerimde">
	    </a>
    </div>
<div class="compare hidden">
    <a class="facetedCheckbox action compare-classified" data-content="İlan Karşılaştır">
        <i></i>
    </a>
</div>
</div>
                    <a class="classifiedTitle" href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-hp-250-g6-i5-7200u-4gb-256gb-ssd-15.6-fhd-freedos-garantili-756985783/detay">
    HP 250 G6 İ5-7200U 4GB 256GB SSD 15.6 FHD FREEDOS GARANTİLİ</a>

<a class="titleIcon store-icon" href="https://yuppi.sahibinden.com/" title="YUPPİ" style="visibility: visible;">
        <img class="titleIcon" src="https://s0.shbdn.com/assets/images/iconStore@2x:c1d32ca031d86c6735fd31957ee635cd.png" width="10" height="14" alt="YUPPİ" title="YUPPİ" style="visibility: visible;">
    </a>
</td>
            <td class="searchResultsPriceValue">
                        <div> 2.500 TL</div></td>
                <td class="searchResultsDateValue">
                        <span>14 Kasım</span>
                        <br>
                        <span>2019</span>
                    </td>
                <td class="searchResultsLocationValue">
                        İstanbul<br>Ataşehir</td>
                <td class="ignore-me">
    <a href="#" class="mark-as-ignored" title="Bu ilanla ilgilenmiyorum, gizle."></a>
    <a href="#" class="mark-as-not-ignored disable" data-content="Göster"></a>
</td>
</tr><tr data-id="756936448" class="searchResultsItem     ">
    <td class="searchResultsLargeThumbnail">
            <a href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-lenovo-thinkpad-x240-i5-4300u-vpro-8gb-500gb-12.5-windows-10-pro-756936448/detay">

    <img src="https://image5.sahibinden.com/photos/93/64/48/thmb_756936448yu2.jpg" alt="Lenovo Thinkpad X240 İ5-4300U vPro 8GB 500GB 12.5 Windows 10 Pro #756936448" title="Lenovo Thinkpad X240 İ5-4300U vPro 8GB 500GB 12.5 Windows 10 Pro">
    </a></td>
    <td class="searchResultsTitleValue ">
                    <input id="favoriteClassifiedsVisibility" type="hidden" value="true">
<div class="action-wrapper" data-classified-id="756936448">
                            <div class="add-to-favorites last favorite">
        <a href="#" class="action classifiedAddFavorite trackClick trackId_favorite  hidden" data-content="Favorilerime Ekle">
        </a>
        <a href="#" class="action classifiedRemoveFavorite trackClick trackId_favorite disable" data-content="Favorilerimde">
	    </a>
    </div>
<div class="compare hidden">
    <a class="facetedCheckbox action compare-classified" data-content="İlan Karşılaştır">
        <i></i>
    </a>
</div>
</div>
                    <a class="classifiedTitle" href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-lenovo-thinkpad-x240-i5-4300u-vpro-8gb-500gb-12.5-windows-10-pro-756936448/detay">
    Lenovo Thinkpad X240 İ5-4300U vPro 8GB 500GB 12.5 Windows 10 Pro</a>

<a class="titleIcon store-icon" href="https://yuppi.sahibinden.com/" title="YUPPİ" style="visibility: visible;">
        <img class="titleIcon" src="https://s0.shbdn.com/assets/images/iconStore@2x:c1d32ca031d86c6735fd31957ee635cd.png" width="10" height="14" alt="YUPPİ" title="YUPPİ" style="visibility: visible;">
    </a>
</td>
            <td class="searchResultsPriceValue">
                        <div> 1.450 TL</div></td>
                <td class="searchResultsDateValue">
                        <span>14 Kasım</span>
                        <br>
                        <span>2019</span>
                    </td>
                <td class="searchResultsLocationValue">
                        İstanbul<br>Ataşehir</td>
                <td class="ignore-me">
    <a href="#" class="mark-as-ignored" title="Bu ilanla ilgilenmiyorum, gizle."></a>
    <a href="#" class="mark-as-not-ignored disable" data-content="Göster"></a>
</td>
</tr><tr data-id="756881586" class="searchResultsItem searchResultsPromoHighlight searchResultsPromoBold   ">
    <td class="searchResultsLargeThumbnail">
            <a href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-macbook-pro-13-w-touchbar-late-2016-756881586/detay">

    <img src="https://image5.sahibinden.com/photos/88/15/86/thmb_7568815866bn.jpg" alt="Macbook Pro 13 w touchbar (Late 2016 #756881586" title="Macbook Pro 13 w touchbar (Late 2016">
    </a></td>
    <td class="searchResultsTitleValue ">
                    <input id="favoriteClassifiedsVisibility" type="hidden" value="true">
<div class="action-wrapper" data-classified-id="756881586">
                            <div class="add-to-favorites last favorite">
        <a href="#" class="action classifiedAddFavorite trackClick trackId_favorite  hidden" data-content="Favorilerime Ekle">
        </a>
        <a href="#" class="action classifiedRemoveFavorite trackClick trackId_favorite disable" data-content="Favorilerimde">
	    </a>
    </div>
<div class="compare hidden">
    <a class="facetedCheckbox action compare-classified" data-content="İlan Karşılaştır">
        <i></i>
    </a>
</div>
</div>
                    <a class="classifiedTitle" href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-macbook-pro-13-w-touchbar-late-2016-756881586/detay">
    Macbook Pro 13 w touchbar (Late 2016</a>

</td>
            <td class="searchResultsPriceValue">
                        <div> 10.500 TL</div></td>
                <td class="searchResultsDateValue">
                        <span>14 Kasım</span>
                        <br>
                        <span>2019</span>
                    </td>
                <td class="searchResultsLocationValue">
                        İstanbul<br>Beşiktaş</td>
                <td class="ignore-me">
    <a href="#" class="mark-as-ignored" title="Bu ilanla ilgilenmiyorum, gizle."></a>
    <a href="#" class="mark-as-not-ignored disable" data-content="Göster"></a>
</td>
</tr><tr data-id="754017371" class="searchResultsItem     ">
    <td class="searchResultsLargeThumbnail">
            <a href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-macbook-pro-touchbar-15-2.7ghz-i7-16gb-512ssd-sifir-plusapplekutusu-754017371/detay">

    <img src="https://image5.sahibinden.com/photos/01/73/71/thmb_754017371326.jpg" alt="Macbook Pro Touchbar 15" 2.7ghz="" i7="" 16gb="" 512ssd="" sıfır+applekutusu="" #754017371"="" title="Macbook Pro Touchbar 15" sıfır+applekutusu"="">
    </a></td>
    <td class="searchResultsTitleValue ">
                    <input id="favoriteClassifiedsVisibility" type="hidden" value="true">
<div class="action-wrapper" data-classified-id="754017371">
                            <div class="add-to-favorites last favorite">
        <a href="#" class="action classifiedAddFavorite trackClick trackId_favorite  hidden" data-content="Favorilerime Ekle">
        </a>
        <a href="#" class="action classifiedRemoveFavorite trackClick trackId_favorite disable" data-content="Favorilerimde">
	    </a>
    </div>
<div class="compare hidden">
    <a class="facetedCheckbox action compare-classified" data-content="İlan Karşılaştır">
        <i></i>
    </a>
</div>
</div>
                    <a class=" classifiedTitle" href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-macbook-pro-touchbar-15-2.7ghz-i7-16gb-512ssd-sifir-plusapplekutusu-754017371/detay">
    Macbook Pro Touchbar 15" 2.7ghz/i7/1­6gb/512ssd Sıfır+applekutusu</a>

<a class="titleIcon store-icon" href="https://applekutusu.sahibinden.com/" title="applekutusu">
        <img class="titleIcon" src="https://s0.shbdn.com/assets/images/iconStore@2x:c1d32ca031d86c6735fd31957ee635cd.png" width="10" height="14" alt="applekutusu" title="applekutusu">
    </a>
</td>
            <td class="searchResultsPriceValue">
                        <div> 12.399 TL</div></td>
                <td class="searchResultsDateValue">
                        <span>14 Kasım</span>
                        <br>
                        <span>2019</span>
                    </td>
                <td class="searchResultsLocationValue">
                        İstanbul<br>Fatih</td>
                <td class="ignore-me">
    <a href="#" class="mark-as-ignored" title="Bu ilanla ilgilenmiyorum, gizle."></a>
    <a href="#" class="mark-as-not-ignored disable" data-content="Göster"></a>
</td>
</tr><tr data-id="756747798" class="searchResultsItem     ">
    <td class="searchResultsLargeThumbnail">
            <a href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-sony-i5-4gb-ram-16.4-1080p-nvidia-gt425-pil-iyi.her-ise-uygun-756747798/detay">

    <img src="https://image5.sahibinden.com/photos/74/77/98/thmb_7567477982jh.jpg" alt="SONY İ5 4GB RAM 16.4" 1080p="" nvİdİa="" gt425="" pİl="" İyİ.her="" İŞe="" uygun.="" #756747798"="" title="SONY İ5 4GB RAM 16.4" uygun."="">
    </a></td>
    <td class="searchResultsTitleValue ">
                    <input id="favoriteClassifiedsVisibility" type="hidden" value="true">
<div class="action-wrapper" data-classified-id="756747798">
                            <div class="add-to-favorites last favorite">
        <a href="#" class="action classifiedAddFavorite trackClick trackId_favorite  hidden" data-content="Favorilerime Ekle">
        </a>
        <a href="#" class="action classifiedRemoveFavorite trackClick trackId_favorite disable" data-content="Favorilerimde">
	    </a>
    </div>
<div class="compare hidden">
    <a class="facetedCheckbox action compare-classified" data-content="İlan Karşılaştır">
        <i></i>
    </a>
</div>
</div>
                    <a class=" classifiedTitle" href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-sony-i5-4gb-ram-16.4-1080p-nvidia-gt425-pil-iyi.her-ise-uygun-756747798/detay">
    SONY İ5 4GB RAM 16.4" 1080P NVİDİA GT425 PİL İYİ.HER İŞE UYGUN.</a>

<a class="titleIcon store-icon" href="https://buromak.sahibinden.com/" title="BÜROMAK">
        <img class="titleIcon" src="https://s0.shbdn.com/assets/images/iconStore@2x:c1d32ca031d86c6735fd31957ee635cd.png" width="10" height="14" alt="BÜROMAK" title="BÜROMAK">
    </a>
</td>
            <td class="searchResultsPriceValue">
                        <div> 1.049 TL</div></td>
                <td class="searchResultsDateValue">
                        <span>14 Kasım</span>
                        <br>
                        <span>2019</span>
                    </td>
                <td class="searchResultsLocationValue">
                        İzmir<br>Konak</td>
                <td class="ignore-me">
    <a href="#" class="mark-as-ignored" title="Bu ilanla ilgilenmiyorum, gizle."></a>
    <a href="#" class="mark-as-not-ignored disable" data-content="Göster"></a>
</td>
</tr><tr data-id="756706185" class="searchResultsItem     ">
    <td class="searchResultsLargeThumbnail">
            <a href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-asus-i7-4720hq-8gb-ram-gtx950-4gb-harici-kozmetik-ve-pil-hatasiz-756706185/detay">

    <img src="https://image5.sahibinden.com/photos/70/61/85/thmb_756706185j61.jpg" alt="ASUS İ7 4720HQ/8GB RAM/GTX950 4GB HARİCİ/KOZMETİK VE PİL HATASIZ #756706185" title="ASUS İ7 4720HQ/8GB RAM/GTX950 4GB HARİCİ/KOZMETİK VE PİL HATASIZ">
    </a></td>
    <td class="searchResultsTitleValue ">
                    <input id="favoriteClassifiedsVisibility" type="hidden" value="true">
<div class="action-wrapper" data-classified-id="756706185">
                            <div class="add-to-favorites last favorite">
        <a href="#" class="action classifiedAddFavorite trackClick trackId_favorite  hidden" data-content="Favorilerime Ekle">
        </a>
        <a href="#" class="action classifiedRemoveFavorite trackClick trackId_favorite disable" data-content="Favorilerimde">
	    </a>
    </div>
<div class="compare hidden">
    <a class="facetedCheckbox action compare-classified" data-content="İlan Karşılaştır">
        <i></i>
    </a>
</div>
</div>
                    <a class=" classifiedTitle" href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-asus-i7-4720hq-8gb-ram-gtx950-4gb-harici-kozmetik-ve-pil-hatasiz-756706185/detay">
    ASUS İ7 4720HQ/8GB RAM/GTX950 4GB HARİCİ/KOZMETİK VE PİL HATASIZ</a>

<a class="titleIcon store-icon" href="https://buromak.sahibinden.com/" title="BÜROMAK">
        <img class="titleIcon" src="https://s0.shbdn.com/assets/images/iconStore@2x:c1d32ca031d86c6735fd31957ee635cd.png" width="10" height="14" alt="BÜROMAK" title="BÜROMAK">
    </a>
</td>
            <td class="searchResultsPriceValue">
                        <div> 2.690 TL</div></td>
                <td class="searchResultsDateValue">
                        <span>13 Kasım</span>
                        <br>
                        <span>2019</span>
                    </td>
                <td class="searchResultsLocationValue">
                        İzmir<br>Konak</td>
                <td class="ignore-me">
    <a href="#" class="mark-as-ignored" title="Bu ilanla ilgilenmiyorum, gizle."></a>
    <a href="#" class="mark-as-not-ignored disable" data-content="Göster"></a>
</td>
</tr><tr data-id="756643872" class="searchResultsItem     ">
    <td class="searchResultsLargeThumbnail">
            <a href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-asusvivobook-plusinteli7-7500-12gbram-plus1tbhd-2gbhdgrafik620-756643872/detay">

    <img src="https://image5.sahibinden.com/photos/64/38/72/thmb_7566438724v6.jpg" alt="ASUSVivoBOOK+İNTELi7-7500-12GBRAM+1TBHD--2GBHDGRAFİK620 #756643872" title="ASUSVivoBOOK+İNTELi7-7500-12GBRAM+1TBHD--2GBHDGRAFİK620">
    </a></td>
    <td class="searchResultsTitleValue ">
                    <input id="favoriteClassifiedsVisibility" type="hidden" value="true">
<div class="action-wrapper" data-classified-id="756643872">
                            <div class="add-to-favorites last favorite">
        <a href="#" class="action classifiedAddFavorite trackClick trackId_favorite  hidden" data-content="Favorilerime Ekle">
        </a>
        <a href="#" class="action classifiedRemoveFavorite trackClick trackId_favorite disable" data-content="Favorilerimde">
	    </a>
    </div>
<div class="compare hidden">
    <a class="facetedCheckbox action compare-classified" data-content="İlan Karşılaştır">
        <i></i>
    </a>
</div>
</div>
                    <a class=" classifiedTitle" href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-asusvivobook-plusinteli7-7500-12gbram-plus1tbhd-2gbhdgrafik620-756643872/detay">
    ASUSVivoBOOK+İNTEL­i7-7500-12GBRAM+1TB­HD--2GBHDGRAFİK620</a>

</td>
            <td class="searchResultsPriceValue">
                        <div> 3.450 TL</div></td>
                <td class="searchResultsDateValue">
                        <span>13 Kasım</span>
                        <br>
                        <span>2019</span>
                    </td>
                <td class="searchResultsLocationValue">
                        İstanbul<br>Bahçelievler</td>
                <td class="ignore-me">
    <a href="#" class="mark-as-ignored" title="Bu ilanla ilgilenmiyorum, gizle."></a>
    <a href="#" class="mark-as-not-ignored disable" data-content="Göster"></a>
</td>
</tr><tr data-id="756526416" class="searchResultsItem     ">
    <td class="searchResultsLargeThumbnail">
            <a href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-karisik-markalarda-500gb-2%2C5-notbook-sata-harddisk-adetli-756526416/detay">

    <img src="https://image5.sahibinden.com/photos/52/64/16/thmb_756526416n1s.jpg" alt="KARIŞIK MARKALARDA 500GB 2,5 NOTBOOK SATA HARDDİSK ADETLİ #756526416" title="KARIŞIK MARKALARDA 500GB 2,5 NOTBOOK SATA HARDDİSK ADETLİ">
    </a></td>
    <td class="searchResultsTitleValue ">
                    <input id="favoriteClassifiedsVisibility" type="hidden" value="true">
<div class="action-wrapper" data-classified-id="756526416">
                            <div class="add-to-favorites last favorite">
        <a href="#" class="action classifiedAddFavorite trackClick trackId_favorite  hidden" data-content="Favorilerime Ekle">
        </a>
        <a href="#" class="action classifiedRemoveFavorite trackClick trackId_favorite disable" data-content="Favorilerimde">
	    </a>
    </div>
<div class="compare hidden">
    <a class="facetedCheckbox action compare-classified" data-content="İlan Karşılaştır">
        <i></i>
    </a>
</div>
</div>
                    <a class=" classifiedTitle" href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-karisik-markalarda-500gb-2%2C5-notbook-sata-harddisk-adetli-756526416/detay">
    KARIŞIK MARKALARDA 500GB 2,5 NOTBOOK SATA HARDDİSK ADETLİ</a>

<a class="titleIcon store-icon" href="https://teknolojidepo.sahibinden.com/" title="TeknolojiDepo">
        <img class="titleIcon" src="https://s0.shbdn.com/assets/images/iconStore@2x:c1d32ca031d86c6735fd31957ee635cd.png" width="10" height="14" alt="TeknolojiDepo" title="TeknolojiDepo">
    </a>
</td>
            <td class="searchResultsPriceValue">
                        <div> 90 TL</div></td>
                <td class="searchResultsDateValue">
                        <span>13 Kasım</span>
                        <br>
                        <span>2019</span>
                    </td>
                <td class="searchResultsLocationValue">
                        İstanbul<br>Şişli</td>
                <td class="ignore-me">
    <a href="#" class="mark-as-ignored" title="Bu ilanla ilgilenmiyorum, gizle."></a>
    <a href="#" class="mark-as-not-ignored disable" data-content="Göster"></a>
</td>
</tr><tr data-id="756328894" class="searchResultsItem     ">
    <td class="searchResultsLargeThumbnail">
            <a href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-casper-gaming-laptop-f700-12-gb-ram-i7-7500u-cpu-756328894/detay">

    <img src="https://image5.sahibinden.com/photos/32/88/94/thmb_756328894rkf.jpg" alt="CASPER Gaming Laptop F700 - 12 GB RAM - i7-7500U CPU #756328894" title="CASPER Gaming Laptop F700 - 12 GB RAM - i7-7500U CPU">
    </a></td>
    <td class="searchResultsTitleValue ">
                    <input id="favoriteClassifiedsVisibility" type="hidden" value="true">
<div class="action-wrapper" data-classified-id="756328894">
                            <div class="add-to-favorites last favorite">
        <a href="#" class="action classifiedAddFavorite trackClick trackId_favorite  hidden" data-content="Favorilerime Ekle">
        </a>
        <a href="#" class="action classifiedRemoveFavorite trackClick trackId_favorite disable" data-content="Favorilerimde">
	    </a>
    </div>
<div class="compare hidden">
    <a class="facetedCheckbox action compare-classified" data-content="İlan Karşılaştır">
        <i></i>
    </a>
</div>
</div>
                    <a class=" classifiedTitle" href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-casper-gaming-laptop-f700-12-gb-ram-i7-7500u-cpu-756328894/detay">
    CASPER Gaming Laptop F700 - 12 GB RAM - i7-7500U CPU</a>

</td>
            <td class="searchResultsPriceValue">
                        <div> 1.999 TL</div></td>
                <td class="searchResultsDateValue">
                        <span>12 Kasım</span>
                        <br>
                        <span>2019</span>
                    </td>
                <td class="searchResultsLocationValue">
                        Kütahya<br>Gediz</td>
                <td class="ignore-me">
    <a href="#" class="mark-as-ignored" title="Bu ilanla ilgilenmiyorum, gizle."></a>
    <a href="#" class="mark-as-not-ignored disable" data-content="Göster"></a>
</td>
</tr><tr data-id="756264526" class="searchResultsItem     ">
    <td class="searchResultsLargeThumbnail">
            <a href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-dell-i7-4-nesil-8gb-ram-1tb-hdd-2gb-nvidia-840m-batarya-2-saat-756264526/detay">

    <img src="https://image5.sahibinden.com/photos/26/45/26/thmb_756264526w37.jpg" alt="DELL İ7 4. NESİL 8GB RAM/1TB HDD/2GB NVİDİA 840M/BATARYA 2 SAAT! #756264526" title="DELL İ7 4. NESİL 8GB RAM/1TB HDD/2GB NVİDİA 840M/BATARYA 2 SAAT!">
    </a></td>
    <td class="searchResultsTitleValue ">
                    <input id="favoriteClassifiedsVisibility" type="hidden" value="true">
<div class="action-wrapper" data-classified-id="756264526">
                            <div class="add-to-favorites last favorite">
        <a href="#" class="action classifiedAddFavorite trackClick trackId_favorite  hidden" data-content="Favorilerime Ekle">
        </a>
        <a href="#" class="action classifiedRemoveFavorite trackClick trackId_favorite disable" data-content="Favorilerimde">
	    </a>
    </div>
<div class="compare hidden">
    <a class="facetedCheckbox action compare-classified" data-content="İlan Karşılaştır">
        <i></i>
    </a>
</div>
</div>
                    <a class=" classifiedTitle" href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-dell-i7-4-nesil-8gb-ram-1tb-hdd-2gb-nvidia-840m-batarya-2-saat-756264526/detay">
    DELL İ7 4. NESİL 8GB RAM/1TB HDD/2GB NVİDİA 840M/BATARYA 2 SAAT!</a>

<a class="titleIcon store-icon" href="https://buromak.sahibinden.com/" title="BÜROMAK">
        <img class="titleIcon" src="https://s0.shbdn.com/assets/images/iconStore@2x:c1d32ca031d86c6735fd31957ee635cd.png" width="10" height="14" alt="BÜROMAK" title="BÜROMAK">
    </a>
</td>
            <td class="searchResultsPriceValue">
                        <div> 1.990 TL</div></td>
                <td class="searchResultsDateValue">
                        <span>12 Kasım</span>
                        <br>
                        <span>2019</span>
                    </td>
                <td class="searchResultsLocationValue">
                        İzmir<br>Konak</td>
                <td class="ignore-me">
    <a href="#" class="mark-as-ignored" title="Bu ilanla ilgilenmiyorum, gizle."></a>
    <a href="#" class="mark-as-not-ignored disable" data-content="Göster"></a>
</td>
</tr><tr data-id="756254722" class="searchResultsItem     ">
    <td class="searchResultsLargeThumbnail">
            <a href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-dell-latitude-e5470-i5-6200u-8gb-256gb-ssd-14-freedos-756254722/detay">

    <img src="https://image5.sahibinden.com/photos/25/47/22/thmb_756254722txh.jpg" alt="Dell Latitude E5470 İ5-6200U 8GB 256GB SSD 14'' FREEDOS #756254722" title="Dell Latitude E5470 İ5-6200U 8GB 256GB SSD 14'' FREEDOS">
    </a></td>
    <td class="searchResultsTitleValue ">
                    <input id="favoriteClassifiedsVisibility" type="hidden" value="true">
<div class="action-wrapper" data-classified-id="756254722">
                            <div class="add-to-favorites last favorite">
        <a href="#" class="action classifiedAddFavorite trackClick trackId_favorite  hidden" data-content="Favorilerime Ekle">
        </a>
        <a href="#" class="action classifiedRemoveFavorite trackClick trackId_favorite disable" data-content="Favorilerimde">
	    </a>
    </div>
<div class="compare hidden">
    <a class="facetedCheckbox action compare-classified" data-content="İlan Karşılaştır">
        <i></i>
    </a>
</div>
</div>
                    <a class=" classifiedTitle" href="/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-notebook-dell-latitude-e5470-i5-6200u-8gb-256gb-ssd-14-freedos-756254722/detay">
    Dell Latitude E5470 İ5-6200U 8GB 256GB SSD 14'' FREEDOS</a>

<a class="titleIcon store-icon" href="https://yuppi.sahibinden.com/" title="YUPPİ">
        <img class="titleIcon" src="https://s0.shbdn.com/assets/images/iconStore@2x:c1d32ca031d86c6735fd31957ee635cd.png" width="10" height="14" alt="YUPPİ" title="YUPPİ">
    </a>
</td>
            <td class="searchResultsPriceValue">
                        <div> 2.450 TL</div></td>
                <td class="searchResultsDateValue">
                        <span>12 Kasım</span>
                        <br>
                        <span>2019</span>
                    </td>
                <td class="searchResultsLocationValue">
                        İstanbul<br>Ataşehir</td>
                <td class="ignore-me">
    <a href="#" class="mark-as-ignored" title="Bu ilanla ilgilenmiyorum, gizle."></a>
    <a href="#" class="mark-as-not-ignored disable" data-content="Göster"></a>
</td>
</tr><tr class="searchResultsPromoToplist">
                <td colspan="6">
                    <div><a href="/doping-tanitim/#doping-5" target="_blank"><strong>Siz de ilanınızın yukarıda yer almasını istiyorsanız <u>tıklayın</u>.</strong></a></div>
                </td>
            </tr>
        </tbody>
</table>
<div id="div-gpt-ad-1540980022936-0" style="width:728px; margin: 20px auto"><div id="google_ads_iframe_/32607536/search_leaderboard_2_0__container__" style="border: 0pt none; width: 728px; height: 90px;"></div></div><div class="mtmdef pageNavigator pvdef phdef ">
        <p class="mbdef">Toplam 6.663 sayfa içerisinde 1. sayfayı görmektesiniz</p>

        <div class="pageNavTable">
            <div class="clear"></div>
            <ul class="pageNaviButtons">
                <li>
                        <span class="currentPage">1</span>
                            <input id="currentPageValue" type="hidden" value="1">
                        </li>
                <li>
                        <a href="/bilgisayar-dizustu-notebook?pagingOffset=20">2</a>
                        </li>
                <li>
                        <a href="/bilgisayar-dizustu-notebook?pagingOffset=40">3</a>
                        </li>
                <li>
                        <a href="/bilgisayar-dizustu-notebook?pagingOffset=60">4</a>
                        </li>
                <li>
                        <a href="/bilgisayar-dizustu-notebook?pagingOffset=80">5</a>
                        </li>
                <li>
                        <a href="/bilgisayar-dizustu-notebook?pagingOffset=100">6</a>
                        </li>
                <li>
                        <a href="/bilgisayar-dizustu-notebook?pagingOffset=120">7</a>
                        </li>
                <li>
                        <a href="/bilgisayar-dizustu-notebook?pagingOffset=140">8</a>
                        </li>
                <li>
                        <a href="/bilgisayar-dizustu-notebook?pagingOffset=160">9</a>
                        </li>
                <li>
                        <a href="/bilgisayar-dizustu-notebook?pagingOffset=180">10</a>
                        </li>
                <li>
                        <a href="/bilgisayar-dizustu-notebook?pagingOffset=380">20</a>
                        </li>
                <li>
                        <a href="/bilgisayar-dizustu-notebook?pagingOffset=580">30</a>
                        </li>
                <li>
                        <a href="/bilgisayar-dizustu-notebook?pagingOffset=780">40</a>
                        </li>
                <li>
                        <a href="/bilgisayar-dizustu-notebook?pagingOffset=980">50</a>
                        </li>
                <li>
                        <a href="/bilgisayar-dizustu-notebook?pagingOffset=20" class="prevNextBut">Sonraki <span class="pager-arrow last"></span></a>
                    </li>
                </ul>
        </div>

        <div class="sortSizeOptions clearfix">
                <span>Her sayfada</span>
                <ul class="faceted-sort-buttons sort-size-menu">
                    <li>
                                <span class="select-size-type Limit20">
                                                        20</span>
                                </li>
                        <li>
                                <a href="/bilgisayar-dizustu-notebook?pagingSize=50" class="paging-size Limit50Passive">
                                        50</a>
                                </li>
                        </ul>
                <span>sonuç göster</span>
            </div>
        </div>
<input type="hidden" id="adultContent" value="false">

<div id="disclaimerConfirmModal" class="confirmModal" style="display: none;">
    <h3>Uyarı</h3>
    <p>Bu kategoride yayınlanmakta olan ilanların açıklama ya da görsellerinde 18 yaş altı kişilere uygun olmayan içerikler mevcut olabilir. Görüntülemek istediğiniz kategoride yayınlanan ilanların sorumluluğu ilan sahiplerine aittir, sahibinden.com hiçbir şekilde sorumlu tutulamaz. 18 yaş altı kişilerin girmesi yasaktır.</p>
    <p class="attentionParagraph">18 yaş ve üzerindeyim, sorumluluğu kabul ediyorum.</p>

    <p class="dialog-buttons">
        <a class="btn btn-alternative cancel-button" id="disclaimerConfirmCancel">    Vazgeç</a>
        <a class="btn agree-button" id="disclaimerConfirmAgree">Onaylıyorum</a>
    </p>
</div><!-- favorites list sub menu -->
    <div class="save-favorite-submenu">
        <input type="hidden" value="SEARCH_RESULT" id="favoriteSource">

        <div class="section-top">
            <p class="title">Ekleyeceğin Listeyi Seç</p>
            <a href="#" class="close-submenu"></a>
        </div>

        <div class="section-list folder-list">
            <ul></ul>
        </div>

        <div class="section-new-list">
            <a href="#" class="create-new-list">Yeni Liste Oluştur</a>
            <div class="new-list-container">
                <input type="text" maxlength="25" placeholder="Yeni Liste Oluştur">
                <button class="btn btn-form">Kaydet</button>
            </div>
        </div>

        <div class="error-container"></div>

        <div class="section-final">
            <p>İlan <strong></strong> Favori Listenize Eklendi</p>
        </div>
    </div>

    <div class="mtmdef pvmdef phmdef clearfix searchFooter">
    <div class="myFavoriteSearch clearfix">
        <div class="favoriteIconContainer"><span class="searchIcon"></span></div>
        <div class="infoFavoriteContainer">
            <span id="saveSearchResult" class="infoFavorite mtdef">
            Favori Aramalarım</span>
            <p class="infoFavorite">
                <span>Dizüstü (Notebook) Bilgisayar</span> listesine yeni bir ilan eklendiğinde size anında haber vermemizi ister misiniz?</p>
        </div>
        <div class="favoriteStoreSearch mldef mtdef">
            <a class="btn btn-alternative" id="saveSearchResultButton" href="javascript:;">
                Aramayı Favorilere Kaydet</a>
        </div>
    </div>
</div>

<div class="f11" id="searchResultsLastUpdated" style="padding:5px">
        Bu sayfa en son <span>17 Kasım 2019 00:39:58</span> tarihinde güncellenmiştir.</div>
</div>
<input type="hidden" id="standardNewSearch" value="true">
            </div>
        </form>
    </div>
</div>
</template>

<script>



 export default {
    name: 'App',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Sahibinden.com',
      // all titles will be injected into this template
      titleTemplate: '%s | Laptop'
    }
  }








</script>

<style>

/*! CSS Used from: https://s0.shbdn.com/assets/common:7c5589959e330525570183497675fd3a.css ; media=screen, print */
@media screen, print{
h1,h3,p,ul,ol,li,a,form,dl,dt,dd{margin:0;padding:0;background:no-repeat 0 0;}
button::-moz-focus-inner{border:0;padding:0;}
button{margin:0;font-size:100%;vertical-align:middle;}
ol,ul{list-style:none;}
img{border:0;}
a{color:#039;text-decoration:none;outline:0;}
a:focus{outline:0;}
a:hover{text-decoration:underline;}
@media screen and (min-width:501px) and (max-width:999px){
#searchContainer{width:984px!important;}
}
input{font:12px "Lucida Grande","LucidaGrande",Arial,sans-serif;}
input[type=checkbox]{cursor:pointer;}
.disable{display:none;}
.clear{clear:both;height:0;_display:inline;}
.mtdef{margin-top:15px;}
.mbdef{margin-bottom:15px;}
.mldef{margin-left:15px;}
.pvdef{padding-top:15px;}
.pvdef{padding-bottom:15px;}
.phdef{padding-left:15px;}
.phdef{padding-right:15px;}
.mtmdef{margin-top:10px;}
.ptmdef,.pvmdef{padding-top:10px;}
.pvmdef{padding-bottom:10px;}
.phmdef{padding-left:10px;}
.phmdef{padding-right:10px;}
table{border-collapse:collapse;border-spacing:0;border:0;}
.uiContent input[type="text"]{border:1px solid #d6d4d4;}
.uiContent input[type="text"]:focus{-webkit-box-shadow:0 0 1px 3px rgba(118,173,220,0.8);-moz-box-shadow:0 0 1px 3px rgba(118,173,220,0.8);box-shadow:0 0 1px 3px rgba(118,173,220,0.8);border:1px solid #91bde3;outline:0;}
.clearfix:after{visibility:hidden;display:block;font-size:0;content:" ";clear:both;height:0;}
.btn{display:inline-block;padding:9px 22px;margin-bottom:0;font-family:'Lucida Grande','LucidaGrande',Arial,sans-serif;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;cursor:pointer;border:1px solid #437db9;border-radius:2px;color:#fff;background-color:#437db9;background-repeat:repeat-x;background-image:-moz-linear-gradient(top,#6198d3,#437db9);background-image:-ms-linear-gradient(top,#6198d3,#437db9);background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0%,#6198d3),color-stop(100%,#437db9));background-image:-webkit-linear-gradient(top,#6198d3,#437db9);background-image:-o-linear-gradient(top,#6198d3,#437db9);background-image:linear-gradient(top,#6198d3,#437db9);text-shadow:1px 1px 0 #29619b;box-shadow:inset 0 0 0 1px rgba(255,255,255,0.1),0 2px 2px -1px rgba(0,0,0,0.15);line-height:1.3em;outline:0;}
.btn:hover{background:#437db9;text-decoration:none;}
.btn:active{background:#3970a8;border:1px solid #376ca1;box-shadow:0 2px 1px 0 #315f8f inset;}
.btn[disabled]{cursor:default;color:#d3deed;background:#6e9bcc;}
.btn[disabled]:active{border:0;box-shadow:none;}
.btn-alternative{border:1px solid #c0c0c0;color:#1064bc;background-color:#efefef;background-repeat:repeat-x;background-image:-moz-linear-gradient(top,#fff,#efefef);background-image:-ms-linear-gradient(top,#fff,#efefef);background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0%,#fff),color-stop(100%,#efefef));background-image:-webkit-linear-gradient(top,#fff,#efefef);background-image:-o-linear-gradient(top,#fff,#efefef);background-image:linear-gradient(top,#fff,#efefef);box-shadow:inset 0 0 0 1px #fff,0 2px 2px -1px rgba(0,0,0,0.15);text-shadow:none;}
.btn-alternative:hover{background:#fff;border-color:#9d9d9d;}
.btn-alternative:active{background:#eee;border:1px solid #9d9d9d;box-shadow:0 2px 1px 0 #cbcbcb inset;}
.btn-form{padding:6px 16px;}
.btn-link{padding:4px 12px 5px;font-size:11px;line-height:1.4em;}
.btn-block{display:block;width:100%;padding-right:0;padding-left:0;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}
.opening{display:none;position:fixed;left:0;top:0;bottom:0;right:0;z-index:9000;background:#fff;background:rgba(255,255,255,0.4);-ms-filter:"alpha(opacity=40)";}
.opening:before{content:"";position:absolute;left:50%;top:50%;width:80px;height:80px;margin-left:-40px;margin-top:-40px;background:url('https://s0.shbdn.com/assets/images/loading-80:8602c498a0e73d7c263f23c76b8be093.gif') no-repeat;}
}
/*! CSS Used from: https://s0.shbdn.com/assets/search:c12116256afd014ee6d52b4fdcdece35.css ; media=screen, print */
@media screen, print{
.jspContainer{overflow:hidden;position:relative;}
.jspPane{position:absolute;}
.jspVerticalBar{position:absolute;top:0;right:0;width:11px;height:100%;}
.jspVerticalBar *{margin:0;padding:0;}
.jspCap{display:none;}
.jspTrack{background:#f3f3f3;position:relative;}
.jspDrag{background:#fff;border:1px solid #d5d4d4;position:relative;top:0;left:0;cursor:pointer;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;-webkit-box-shadow:inset -2px -3px 2px #e6e5e5;-moz-box-shadow:inset -2px -3px 2px #e6e5e5;box-shadow:inset -2px -2px 2px #e6e5e5;}
.jspDrag:hover{background-color:#f1f1f1;-webkit-box-shadow:inset 2px 3px 2px #e6e5e5;-moz-box-shadow:inset 2px 3px 2px #e6e5e5;box-shadow:inset 2px 2px 2px #e6e5e5;}
.classifiedBreadCrumb,.classifiedBreadCrumb ol,.classifiedBreadCrumbBackground{-webkit-transition-property:background;-moz-transition-property:background;-o-transition-property:background;-ms-transition-property:background;transition-property:background;-webkit-transition-duration:.4s;-moz-transition-duration:.4s;-o-transition-duration:.4s;-ms-transition-duration:.4s;transition-duration:.4s;}
.classifiedBreadCrumbBackground{position:absolute;left:0;width:100%;height:27px;z-index:-1;background-color:#f2f2f2;background-repeat:repeat-x;-webkit-box-shadow:0 2px 3px 0 rgba(0,0,0,0.1),0 0 4px 0 rgba(0,0,0,0.06),1px 0 2px 0 rgba(0,0,0,0.08);box-shadow:0 2px 3px 0 rgba(0,0,0,0.1),0 0 4px 0 rgba(0,0,0,0.06),1px 0 2px 0 rgba(0,0,0,0.08);}
.classifiedBreadCrumbBackground.fixed{position:fixed;top:0;z-index:400;}
.classifiedBreadCrumb{position:relative;width:100%;height:27px;}
.classifiedBreadCrumb .breadcrumbItem.leaf{margin-right:0;}
.classifiedBreadCrumb .breadcrumbItem a{max-width:110px;overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis;}
.classifiedBreadCrumb .breadcrumb-items{position:relative;float:right;padding-right:0;padding-bottom:6px;-webkit-transition-property:background;-moz-transition-property:background;-o-transition-property:background;-ms-transition-property:background;transition-property:background;-webkit-transition-duration:.4s;-moz-transition-duration:.4s;-o-transition-duration:.4s;-ms-transition-duration:.4s;transition-duration:.4s;}
.classifiedBreadCrumb .breadcrumb-items:after{position:absolute;top:0;left:100%;content:'';height:27px;background:0;-webkit-transition-property:background;-moz-transition-property:background;-o-transition-property:background;-ms-transition-property:background;transition-property:background;-webkit-transition-duration:.4s;-moz-transition-duration:.4s;-o-transition-duration:.4s;-ms-transition-duration:.4s;transition-duration:.4s;}
.classifiedBreadCrumb .breadcrumb-items .breadcrumb-slice{position:absolute;top:0;left:-8px;width:8px;height:14px;background:transparent;-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);-o-transform:rotateY(180deg);-ms-transform:rotateY(180deg);transform:rotateY(180deg);-webkit-transition-property:background;-moz-transition-property:background;-o-transition-property:background;-ms-transition-property:background;transition-property:background;-webkit-transition-duration:.4s;-moz-transition-duration:.4s;-o-transition-duration:.4s;-ms-transition-duration:.4s;transition-duration:.4s;}
.classifiedBreadCrumb .breadcrumb-items .breadcrumb-slice:after{position:absolute;top:0;left:100%;width:9px;height:9px;content:'';background:0;-webkit-transition-property:background;-moz-transition-property:background;-o-transition-property:background;-ms-transition-property:background;transition-property:background;-webkit-transition-duration:.4s;-moz-transition-duration:.4s;-o-transition-duration:.4s;-ms-transition-duration:.4s;transition-duration:.4s;}
.classifiedBreadCrumb .breadcrumb-items .breadcrumb-slice:before{position:absolute;top:100%;left:0;width:8px;height:13px;content:'';background:0;border-radius:0 0 100% 0/0 0 100% 0;-webkit-transition-property:background;-moz-transition-property:background;-o-transition-property:background;-ms-transition-property:background;transition-property:background;-webkit-transition-duration:.4s;-moz-transition-duration:.4s;-o-transition-duration:.4s;-ms-transition-duration:.4s;transition-duration:.4s;}
.classifiedBreadCrumb .breadcrumb-items a.item{position:relative;margin:0 10px 0 8px;padding-left:0;font-size:10px;background:0;}
.classifiedBreadCrumb .breadcrumb-items a.item.fixed-compare-link{margin-right:0;}
.classifiedBreadCrumb .breadcrumb-items .seperator{display:inline-block;content:'';width:1px;height:10px;background-color:#d4d3d3;position:relative;top:1px;}
.classifiedBreadCrumb .breadcrumb-items .favorite-search-container{zoom:1;position:absolute;top:27px;right:200px;width:250px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;background:#fafafa;-webkit-box-shadow:2px 0 5px 0 rgba(0,0,0,0.1),0 2px 4px 0 rgba(0,0,0,0.1),-2px 0 5px 0 rgba(0,0,0,0.1);box-shadow:2px 0 5px 0 rgba(0,0,0,0.1),0 2px 4px 0 rgba(0,0,0,0.1),-2px 0 5px 0 rgba(0,0,0,0.1);z-index:400;}
.classifiedBreadCrumb .breadcrumb-items .favorite-search-container:before,.classifiedBreadCrumb .breadcrumb-items .favorite-search-container:after{display:table;content:"";zoom:1;}
.classifiedBreadCrumb .breadcrumb-items .favorite-search-container:after{clear:both;}
.classifiedBreadCrumb .breadcrumb-items .favorite-search-container:before{content:'';position:absolute;top:0;right:48px;width:0;height:0;margin-left:-0.5em;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:5px solid #fafafa;border-color:transparent transparent #fafafa #fafafa;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-o-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);-moz-transform:rotate(135deg);-webkit-transform:rotate(135deg);-moz-transform:rotate(135deg);-o-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);-webkit-box-shadow:-2px 2px 1px 0 rgba(0,0,0,0.1);-moz-box-shadow:-2px 2px 1px 0 rgba(0,0,0,0.1);-webkit-box-shadow:-2px 2px 1px 0 rgba(0,0,0,0.1);box-shadow:-2px 2px 1px 0 rgba(0,0,0,0.1);}
.classifiedBreadCrumb .breadcrumb-items .favorite-search-container.close{display:none;}
.classifiedBreadCrumb .breadcrumb-items .favorite-search-container .section-top{margin:0 10px;padding:20px 0 9px 10px;height:14px;border-bottom:1px solid #eaeaea;background-color:#fafafa;}
.classifiedBreadCrumb .breadcrumb-items .favorite-search-container .section-top .section-title{position:relative;font-size:12px;color:#438ed8;font-weight:bold;cursor:default;}
.classifiedBreadCrumb .breadcrumb-items .favorite-search-container .section-top .section-title:after{position:absolute;bottom:-9px;left:-10px;content:'';width:134px;height:2px;background:#438ed8;}
.classifiedBreadCrumb .breadcrumb-items .favorite-search-container .empty-list{display:none;width:200px;font-size:13px;color:#999;text-align:center;position:relative;top:39px;left:24px;}
.classifiedBreadCrumb .breadcrumb-items .favorite-search-container .favorite-search-box{min-height:95px;}
.classifiedBreadCrumb .breadcrumb-items .favorite-search-container .favorite-search-list{margin:10px 0 10px;width:100%!important;max-height:248px;overflow-y:auto;background-color:#fff;border-top:1px solid #d8d8d8;border-bottom:1px solid #d8d8d8;}
.classifiedBreadCrumb .breadcrumb-items .favorite-search-container .show-all{display:none;padding:9px 0 10px;color:#438ed8;text-align:center;background:0;border-top:1px solid #eaeaea;}
.classifiedBreadCrumb.fixed{position:fixed;top:0;left:0;z-index:400;}
.classifiedBreadCrumb.fixed .breadcrumb-items{position:relative;background:#555c70;}
.classifiedBreadCrumb.fixed .breadcrumb-items:after{width:200%;background:#555c70;}
.classifiedBreadCrumb.fixed .breadcrumb-items .breadcrumb-slice{background:#555c70;}
.classifiedBreadCrumb.fixed .breadcrumb-items .breadcrumb-slice:after{background:-webkit-radial-gradient(circle at 100% 100%,rgba(204,0,0,0) 8px,#555c70 9px);background:-moz-radial-gradient(circle at 100% 100%,rgba(204,0,0,0) 8px,#555c70 9px);background:-o-radial-gradient(circle at 100% 100%,rgba(204,0,0,0) 8px,#555c70 9px);background:-ms-radial-gradient(circle at 100% 100%,rgba(204,0,0,0) 8px,#555c70 9px);background:radial-gradient(circle at 100% 100%,rgba(204,0,0,0) 8px,#555c70 9px);}
.classifiedBreadCrumb.fixed .breadcrumb-items .breadcrumb-slice:before{background:#555c70;}
.classifiedBreadCrumb.fixed .breadcrumb-items a{color:#fff;}
.classifiedBreadCrumb.fixed .breadcrumb-items a.item:after{background-color:#5e6478;}
.classifiedBreadCrumb ol{margin:auto;zoom:1;line-height:15px;}
.classifiedBreadCrumb ul:before,.classifiedBreadCrumb ol:after{display:table;content:"";zoom:1;}
.classifiedBreadCrumb ol:after{clear:both;}
.classifiedBreadCrumb ol li{float:left;padding:5px 0 0 0;margin-right:15px;}
.classifiedBreadCrumb ol li:last-child{margin-right:0;}
.classifiedBreadCrumb ol li a{color:#00339f;padding-left:10px;background:url('https://s0.shbdn.com/assets/images/detail:8da7b49a68be47c286076d20366d1ef6.png') 1px -915px no-repeat;font-size:11px;display:inline-block;}
.save-favorite-submenu{display:none;position:absolute;right:0;top:-1px;z-index:100000;background:#fff;padding:10px 0;-webkit-box-shadow:0 1px 5px rgba(32,32,32,0.3);box-shadow:0 1px 5px rgba(32,32,32,0.3);border-radius:3px;width:263px;}
.save-favorite-submenu a{height:auto;padding:0;}
.save-favorite-submenu .section-top{padding:0 10px 10px 20px;height:17px;position:relative;border-bottom:1px solid #e8e8e8;z-index:1;}
.save-favorite-submenu .section-top .title{font-size:14px;font-weight:bold;color:#333;max-width:170px;display:inline-block;}
.save-favorite-submenu .section-top .close-submenu{background:url('https://s0.shbdn.com/assets/images/controls:7e263c442fb90cc64a7ba09f0d99a178.png') 0 -113px no-repeat;width:16px;height:16px;display:block;position:absolute;right:10px;top:2px;padding:0;}
.save-favorite-submenu .section-list{height:108px;overflow:auto;}
.save-favorite-submenu .section-new-list{padding:10px 10px 0;border-top:1px solid #e8e8e8;}
.save-favorite-submenu .section-new-list .create-new-list{color:#038;font-size:12px;font-weight:bold;display:inline-block;margin-left:10px;padding:0;}
.save-favorite-submenu .section-new-list .new-list-container{display:none;zoom:1;}
.save-favorite-submenu .section-new-list .new-list-container:before,.save-favorite-submenu .section-new-list .new-list-container:after{display:table;content:"";zoom:1;}
.save-favorite-submenu .section-new-list .new-list-container:after{clear:both;}
.save-favorite-submenu .section-new-list .new-list-container input[type="text"]{float:left;border:1px solid #c0c0c0;font-size:12px;line-height:16px;color:#333;border-radius:3px 3px 3px 3px;padding:7px 10px;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);width:150px;border-width:1px 1px 1px 1px;letter-spacing:-0.01em;}
.save-favorite-submenu .section-new-list .new-list-container input[type="text"]:focus{outline:0;}
.save-favorite-submenu .section-new-list .new-list-container .btn{float:right;font-size:11px;line-height:18px;padding:6px 12px;margin-left:-2px;}
.save-favorite-submenu .error-container{display:none;clear:both;padding:10px 20px 0;}
.save-favorite-submenu .section-final{display:none;text-align:center;}
.save-favorite-submenu .section-final p{color:#333;font-size:15px;line-height:140%;padding:0 20px 15px;word-wrap:break-word;}
.save-favorite-submenu .section-final p:before{background:url('https://s0.shbdn.com/assets/images/favorite-new-list-success:8ade6ad46fc80424b440fc4cd0d48750.png') no-repeat 0 0;display:block;width:48px;height:48px;content:'';margin:12px auto;}
#searchContainer{margin:0 auto;width:984px;overflow:hidden;}
.searchResultsContainer{padding-bottom:10px;}
.searchResultsPage{color:#292d2e;}
.searchResultsRight{float:right;width:774px;}
.searchResultsRight .pageNavigator{border:solid 1px #dbdbdb;border-top:0;}
.searchResultsCat{margin-bottom:17px;}
#search_cats li{overflow:hidden;padding:2px 0;}
#search_cats li.cl1{margin-left:8px;}
#search_cats li.cl2{margin-left:16px;}
#search_cats li.cl3{margin-left:24px;}
.infoSearchResults{margin:10px 0 0 0;}
.infoSearchResults h1,.infoSearchResults div{margin-right:5px;line-height:14px;font-weight:400;}
.infoSearchResults h1{float:left;font-size:12px;}
.infoSearchResults h1{font-weight:bolder;}
.infoSearchResults .resultsTextWrapper span{color:#8f0100;font-weight:700;}
#search_cats li a{line-height:19px!important;}
.searchResultSorted{background-color:#fff;border:1px solid #dedede;border-bottom:0;padding:12px 10px;height:17px;}
.relativeContainer{position:relative;}
.sortedTypes{float:right;}
.searchResultSorted ul{float:left;zoom:1;line-height:14px;}
span.viewTypeTitle{line-height:20px;margin-top:-2px;display:none;zoom:1;float:left;margin-right:5px;}
.numericInput{padding-right:5px;}
.numericInput:focus{background-color:#FFF!important;}
.collapseClosed{border-bottom:1px dotted #c3c1c2;}
.view-type-menu li a:before,.view-type-menu li span:before{position:absolute;content:' ';left:0;top:0;background:url('https://s0.shbdn.com/assets/images/iconsSearchResults:934ec12ae3f4fa0750a7533ce15a6062.png') no-repeat 0 0;display:block;height:26px;width:29px;}
.view-type-menu a.listTypeListPassive{border-left:0;border-right:0;}
.collapseTitle{cursor:pointer;}
.collapseTitle.notCollapsable{cursor:default;}
.collapseContent{padding-top:5px;}
#searchResultsTable{border-left:1px solid #dbdbdb;border-right:1px solid #dbdbdb;border-bottom:1px solid #dbdbdb;border-collapse:separate;border-spacing:0;color:#292d2e;width:100%;}
.searchResultsItem{cursor:pointer;}
.searchResultsItem .action-wrapper{position:absolute;bottom:3px;height:16px;font-weight:normal;}
.searchResultsItem .action-wrapper div{float:left;color:#7d7c7c;}
.searchResultsItem .action-wrapper .favorite{margin-right:15px;}
.searchResultsItem .action-wrapper .compare{left:130px;position:absolute;width:100px;}
.searchResultsItem .action-wrapper .favorite .action{padding-left:19px;}
.searchResultsItem .action-wrapper .action{font-size:11px;color:#a2a2a2;}
.searchResultsItem .action-wrapper .action:hover,.searchResultsItem .action-wrapper .action:hover:after{text-decoration:underline;}
.searchResultsItem .action-wrapper .favorite a.classifiedAddFavorite:before{content:'';position:absolute;top:0;left:0;background:url('https://s0.shbdn.com/assets/images/empty_star:4a37009727244c6cef5c456c80edc672.png');width:14px;height:14px;background-size:14px;}
.searchResultsItem .action-wrapper .favorite a.classifiedAddFavorite:after,.searchResultsItem .action-wrapper .favorite a.classifiedRemoveFavorite:after{display:inline-block;content:attr(data-content);}
.searchResultsItem .action-wrapper .favorite a.classifiedRemoveFavorite:before{content:'';position:absolute;top:0;left:0;background:url('https://s0.shbdn.com/assets/images/yellow_star:1fde038a9a5e64664bdba79b42d1b4fc.png');width:14px;height:14px;background-size:14px;}
#searchResultsTable thead td{background:#e9e9e9;height:30px;margin-bottom:10px;padding:0 4px;border-bottom:1px solid #fff;border-top:1px solid #fff;color:#292d2e;text-align:center;font-family:"Lucida Grande",Arial,sans-serif;font-size:12px;font-weight:bold;line-height:20px;}
#searchResultsTable thead td{border-left:1px solid #fff;}
#searchResultsTable thead td.searchResultsFirstColumn{border-left:none;}
#searchResultsTable thead td.searchResultsLastColumn{border-right:0;}
#searchResultsTable thead td.searchResultsDateHeader{min-width:80px;width:80px;}
#searchResultsTable thead td.searchResultsLocationHeader{width:90px;}
#searchResultsTable tbody td{border-left:1px solid #fff;text-align:center;padding:3px 3px 0 3px;}
#searchResultsTable tbody td:first-child{border-left:0;}
#searchResultsTable tbody tr.searchResultsItem:not(.premiumClassified):HOVER{background-color:#f0f6ff;}
#searchResultsTable tbody tr.searchResultsPromoToplist td{background:#ffd84f;border-top:1px solid #f3efbc;border-bottom:1px solid #f3efbc;height:40px;line-height:40px;margin:1px 0;text-align:center;color:#4f270b;}
#searchResultsTable tbody tr.nativeAd td{padding:0;}
#searchResultsTable tbody td.searchResultsPriceValue{text-align:right;white-space:nowrap;color:#910000;}
#searchResultsTable tbody td.searchResultsTitleValue{text-align:left;overflow:hidden;position:relative;}
.searchResultsLargeThumbnail{text-align:center;vertical-align:middle;}
.searchResultsLargeThumbnail{width:100px;position:relative;overflow:hidden;z-index:1;}
.searchResultsLargeThumbnail img{width:100px;height:75px;background-color:#fff;}
#searchResultsTable tbody tr.searchResultsPromoHighlight{background-color:#e6fbd3;}
#searchResultsTable tbody tr.searchResultsPromoBold{font-weight:bold;}
img.titleIcon{margin-left:3px;vertical-align:text-bottom;}
#searchResultsLastUpdated{text-align:center;}
#searchResultsLastUpdated span{color:#F00;}
.searchResultsCat ul li span{color:#a1a1a1;font-size:10px;}
.classifiedTitle:visited{color:#800080;}
.faceted-top-buttons.new-toggle-menu .flag{display:none;}
.ad-container{position:relative;overflow:hidden;cursor:pointer;}
.ad-container:hover a.ulink{text-decoration:underline;}
.ad-attribution{position:absolute;top:5px;right:23px;background-color:rgba(236,182,0,1);color:rgba(255,255,255,1);font-size:10px;display:table;margin:3px;padding:0 3px;border-radius:2px;}
.ad-image{margin:3px 37px 5px 3px;width:100px;height:75px;float:left;background-color:#fff;}
.ad-image img{width:100%;}
.ad-title{margin:17px 8px 8px 8px;width:666px;text-align:start;}
.ad-title a{color:rgba(0,51,153,1);font-weight:bold;font-family:"Lucida Grande",Arial,sans-serif;font-size:12px;line-height:18px;text-decoration:none;}
.ad-title a:hover{text-decoration:underline;}
.ad-body{color:rgba(103,103,103,1);margin:0 8px 8px 8px;width:666px;text-align:start;}
.ad-call-to-action{font-family:"Lucida Grande",Arial,sans-serif;font-weight:normal;font-size:12px;margin:8px 6px 8px 8px;position:absolute;top:22px;right:0;line-height:30px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:170px;}
.ad-call-to-action a{text-decoration:none;color:#039;}
.ad-call-to-action a:hover{text-decoration:underline;}
.ad-body-link{font-family:"Lucida Grande",Arial,sans-serif;color:rgba(103,103,103,1);text-decoration:none;}
.ad-body-link:hover{text-decoration:none;}
.ad-complaint{background:url('https://s0.shbdn.com/assets/images/complaint_alert:55999e69060bb2d4eb6cecdc78b720f9.png') no-repeat;background-size:14px 14px;width:14px;height:14px;position:absolute;margin:7px 2px 5px 4px;right:5px;z-index:1;}
.complaint-btn{padding:9px 22px;font-size:14px;vertical-align:middle;border:1px solid #437db9;border-radius:1px;color:#fff;background-color:#437db9;margin-right:50px;z-index:99999999;}
.landing-btn{padding:9px 22px;font-size:14px;vertical-align:middle;border-radius:1px;color:#437db9;background-color:#fff;z-index:99999999;}
.complaint-buttons{padding:30px;}
.cancel-complaint{background:url('https://s0.shbdn.com/assets/images/complaint_close:f762e2a7c18d046bf905f91fcf954064.png') no-repeat;background-size:14px 14px;width:14px;height:14px;position:absolute;right:5px;margin:5px 6px;z-index:99999999;}
.complaint-description{padding:30px;font-family:"Lucida Grande",Arial,sans-serif;font-size:14px;}
#searchResultsTable tbody tr.searchResultsAdItem:hover{background-color:#f0f6ff;cursor:pointer;}
.searchResultsRowClass tr:nth-child(odd){background-color:#FFF;}
.searchResultsRowClass tr:nth-child(even){background-color:#f2f2f2;}
.pageNavigator{background:#f5f5f5;text-align:center;}
.pageNaviButtons{display:table;_display:inline;*display:inline;_zoom:1;*zoom:1;margin:0 auto!important;overflow:hidden;}
.pageNaviButtons li{background-color:#FFF;display:inline-block;_display:inline;*display:inline;height:24px;line-height:24px;margin-bottom:15px;margin-right:3px;box-shadow:2px 2px 2px rgba(0,0,0,0.1);_zoom:1;*zoom:1;}
.pageNaviButtons a,.pageNaviButtons span{width:21px;padding:4px 2px 5px 1px;font-size:11px;line-height:1.4em;display:inline-block;margin-bottom:0;font-weight:bold;text-align:center;vertical-align:middle;border:1px solid #c0c0c0;box-shadow:inset 0 0 0 1px #fff,0 2px 2px -1px #e5e5e5;color:#1064bc;background-color:#efefef;border-radius:2px;background-repeat:repeat-x;background-image:-moz-linear-gradient(top,#fff,#efefef);background-image:-ms-linear-gradient(top,#fff,#efefef);background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0%,#fff),color-stop(100%,#efefef));background-image:-webkit-linear-gradient(top,#fff,#efefef);background-image:-o-linear-gradient(top,#fff,#efefef);background-image:linear-gradient(top,#fff,#efefef);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFF',endColorstr='#EFEFEF',GradientType=0);text-shadow:none;}
.pageNaviButtons a:hover,.pageNaviButtons span:hover{background:#FFF;border-color:#9d9d9d;text-decoration:none;}
.pageNaviButtons a.prevNextBut{width:auto;padding:4px 9px 5px 10px;}
.pageNaviButtons a{color:#1064bc;display:block;}
.pageNaviButtons li span{display:block;}
.pageNaviButtons li span.currentPage{filter:progid:DXImageTransform.Microsoft.gradient(enabled = false);background:#8598aa;color:#fff;}
.searchFooter{background:url('https://s0.shbdn.com/assets/images/bg_favorite_search:07819995e27d5f3ef21358e9734e3c76.jpg') repeat-x top #ecf0f3;border:1px solid #d0d0d0;_width:695px;_zoom:1;}
.searchFooter p{height:41px;}
.myFavoriteSearch{float:left;width:100%;}
.myFavoriteSearch .infoFavorite{padding-right:10px;}
.favoriteStoreSearch{width:35%;float:left;text-align:center;margin-top:24px;margin-left:0!important;}
.searchIcon{width:58px;height:55px;margin-left:9px;display:block;float:left;background:url('https://s0.shbdn.com/assets/images/favorite_search:70eb450200fb0009f2e4b2e93519a4c4.png') no-repeat 3px 20px;_background:url('https://s0.shbdn.com/assets/images/favorite_search:27b073d31bc86a265d8c3db129b2812e.gif') no-repeat 3px 20px;}
.myFavoriteSearch span.infoFavorite{font-size:14px;color:#039;font-weight:700;margin-right:5px;height:35px;line-height:47px;display:block;margin-top:3px;}
.pageNavTable{overflow:hidden;}
.pageNaviButtons span.pager-arrow{border:0;padding:0;box-shadow:none;display:inline-block;width:6px;height:10px;background:url('https://s0.shbdn.com/assets/images/iconsSearchResults:934ec12ae3f4fa0750a7533ce15a6062.png') no-repeat 0 0;margin-top:-2px;filter:progid:DXImageTransform.Microsoft.gradient(enabled = false);}
.pageNaviButtons span.pager-arrow.last{background-position:0 -400px;}
.searchResultsCat{background-color:#FFF;border:1px solid #dbdbdb;overflow:hidden;}
.search-filter-section dl .collapseTitle:before,.faceted-select:before,.address-select-wrapper .collapse-pane:before,.address-select-wrapper .address-filter:after{background-image:url('https://s0.shbdn.com/assets/images/newSearchRevised:cc212a21e9da5975e193093282f47e29.png');display:inline-block;content:'';}
.form-style-wrapper input[type="checkbox"]+label:before,.facetedCheckbox i,.facetedRadiobox i{background-image:url('https://s0.shbdn.com/assets/images/faceted_search:4270525e0c0f68b868030afd1a412e37.png');display:inline-block;content:'';}
.form-style-wrapper input[type="checkbox"]+label:before,.facetedCheckbox i{width:18px;height:15px;display:block;background-position:0 -366px;}
.form-style-wrapper input[type="checkbox"]:hover+label:before,.facetedCheckbox:hover i{background-position:0 -385px;}
.form-style-wrapper input[type="checkbox"]:checked+label:before{background-position:0 -403px;}
.facetedRadiobox i{width:18px;height:15px;display:block;background-position:0 -424px;}
.facetedRadiobox i:focus,.facetedRadiobox:hover i{background-position:0 -442px;}
.facetedRadiobox.checked i{background-position:0 -459px;}
.faceted-select:before{width:11px;height:7px;background-position:-98px -83px;}
.faceted-select.passive:before{width:11px;height:7px;background-position:-109px -90px;}
.address-select-wrapper .address-filter:after{width:20px;height:18px;background-position:0 0;}
.search-filter-section dl .collapseClosed:before{width:12px;height:6px;background-position:-86px -77px;}
.search-filter-section dl .collapseTitle:before{width:12px;height:6px;background-position:-74px -71px;}
.search-filter-section dl .collapseClosed:before{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);-moz-transform:rotate(180deg);-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-o-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);-webkit-transform-origin:5px 3px;-moz-transform-origin:5px 3px;-o-transform-origin:5px 3px;-ms-transform-origin:5px 3px;transform-origin:5px 3px;}
.search-filter-section dl .collapseClosed:before{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);-moz-transform:rotate(180deg);-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-o-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);-webkit-transform-origin:5px 4px;-moz-transform-origin:5px 4px;-o-transform-origin:5px 4px;-ms-transform-origin:5px 4px;transform-origin:5px 4px;}
.address-select-wrapper .collapse-pane:before{width:11px;height:11px;background-position:-41px -38px;}
.search-filter-section dl .collapseTitle{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}
@media (min--moz-device-pixel-ratio:1.5),(-o-min-device-pixel-ratio:3/2),(-webkit-min-device-pixel-ratio:1.5),(min-device-pixel-ratio:1.5),(min-resolution:1.5dppx){
.search-filter-section dl .collapseTitle:before,.faceted-select:before,.address-select-wrapper .collapse-pane:before,.address-select-wrapper .address-filter:after{background-image:url('https://s0.shbdn.com/assets/images/newSearchRevised_2x:2f07e805dbeac7d6923c37c51609b4cf.png');-webkit-background-size:128px 102px;-moz-background-size:128px 102px;background-size:128px 102px;}
.form-style-wrapper input[type="checkbox"]+label:before,.facetedCheckbox i,.facetedRadiobox i{background-image:url('https://s0.shbdn.com/assets/images/faceted_search_2x:62fd3c6dcaf52ea817a0d578543a7306.png');-webkit-background-size:32px;-moz-background-size:32px;background-size:32px;}
.facetedRadiobox i{background-position:0 -131px;}
.facetedRadiobox i:focus,.facetedRadiobox:hover i{background-position:0 -153px;}
.facetedRadiobox.checked i{background-position:0 -175px;}
.form-style-wrapper input[type="checkbox"]+label:before,.facetedCheckbox i{background-position:0 -83px;}
.form-style-wrapper input[type="checkbox"]:hover+label:before,.facetedCheckbox:hover i{background-position:0 -99px;}
.form-style-wrapper input[type="checkbox"]:checked+label:before{background-position:0 -115px;}
}
.jspVerticalBar{right:5px;}
.jspVerticalBar .jspTrack{width:6px;border-radius:17px;background:#dedede;}
.jspVerticalBar .jspTrack .jspDrag{border:0;background:#a2a2a2;border-radius:17px;}
.searchResultsPage.breadcrumb-offset{margin-top:27px;}
.searchResultsContainer{position:relative;}
body #searchContainer{overflow:visible;}
.search-left{width:200px;float:left;position:relative;padding:3px 0 0 0;}
.search-left.standard-mode{padding-bottom:60px;}
.search-left .searchResultsCat{border-radius:2px;border:solid 1px #dedede;padding:7px 0 8px 15px;}
.search-left .searchResultsCat li a{font-size:13px;}
.search-left .search-filter-section:not(#searchResultLeft-category) dl{background:#f4f4f4;border-bottom:0;border-top:0;}
.search-left .search-filter-section:not(#searchResultLeft-category){margin-bottom:2px;-webkit-transition:background .1s linear,box-shadow .1s linear;-moz-transition:background .1s linear,box-shadow .1s linear;-o-transition:background .1s linear,box-shadow .1s linear;-ms-transition:background .1s linear,box-shadow .1s linear;transition:background .1s linear,box-shadow .1s linear;}
.search-left .search-filter-section:not(#searchResultLeft-category):hover{-webkit-transition:background .1s linear,box-shadow .1s linear;-moz-transition:background .1s linear,box-shadow .1s linear;-o-transition:background .1s linear,box-shadow .1s linear;-ms-transition:background .1s linear,box-shadow .1s linear;transition:background .1s linear,box-shadow .1s linear;}
.search-left #searchResultLeft-address dl{border-top:solid 1px #f4f4f4!important;background:#f4f4f4;border-top-left-radius:3px;border-top-right-radius:3px;}
.search-filter-section{float:left;width:100%;}
.search-filter-section.last-item{margin-bottom:0;}
.search-filter-section.last-item dl{border-bottom:1px solid #f4f4f4!important;border-bottom-left-radius:3px;border-bottom-right-radius:3px;}
.search-filter-section#searchResultLeft-address .collapseTitle:before{display:none;}
.search-filter-section#searchResultLeft-address .collapseTitle:hover{background:#f4f4f4;}
.search-filter-section#searchResultLeft-address .address-selector{float:left;padding:0 15px 5px 15px;width:170px;}
.search-filter-section dl{float:left;width:200px;}
.search-filter-section dl .collapseTitle{font-weight:bold;font-size:14px;padding:13px 15px 13px 15px;position:relative;background:#f4f4f4;-webkit-transition:background .05s linear;-moz-transition:background .05s linear;-o-transition:background .05s linear;-ms-transition:background .05s linear;transition:background .05s linear;}
.search-filter-section dl .collapseTitle:hover{background:#dde0e6;-webkit-transition:background .05s linear;-moz-transition:background .05s linear;-o-transition:background .05s linear;-ms-transition:background .05s linear;transition:background .05s linear;}
.search-filter-section dl .collapseTitle:before{width:12px;height:6px;position:absolute;right:10px;top:17px;opacity:0;-ms-filter:"alpha(opacity=0)";filter:alpha(opacity=0);-webkit-transition:opacity .05s linear;-moz-transition:opacity .05s linear;-o-transition:opacity .05s linear;-ms-transition:opacity .05s linear;transition:opacity .05s linear;}
.search-filter-section dl .collapseTitle:hover:before{opacity:1;-ms-filter:none;filter:none;}
.search-filter-section dl .collapseClosed{border-bottom:0;}
.search-filter-section dl .collapseClosed:before{opacity:0;-ms-filter:"alpha(opacity=0)";filter:alpha(opacity=0);top:16px;right:9px;-webkit-transition:opacity .05s linear;-moz-transition:opacity .05s linear;-o-transition:opacity .05s linear;-ms-transition:opacity .05s linear;transition:opacity .05s linear;}
.search-filter-section dl .collapseClosed:hover:before{opacity:1;-ms-filter:none;filter:none;}
.search-filter-section dl .collapseContent{padding:5px 0 15px 15px;float:left;width:183px;}
.search-filter-section dl .collapseContent em{margin:0 3px;float:left;line-height:32px;color:#a2a2a2;font-style:normal;font-weight:normal!important;}
.search-filter-section dl .collapseContent input[type='text']{border:1px solid #c0c0c0;height:20px;font-size:12px;line-height:16px;padding:5px;border-radius:2px;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);}
.search-filter-section dl .collapseContent input.filterKeyword{width:102px;float:left;}
.search-filter-section dl .collapseContent input.numericInput{width:43px;font-size:10px;float:left;}
.search-filter-section dl .collapseContent .numeric-input-holder button{display:none;margin:0 0 0 5px;padding:0 8px;height:32px;width:42px;line-height:32px;-webkit-box-shadow:none;box-shadow:none;text-shadow:none;background:#438ed8;border:0;font-family:"Lucida Grande","LucidaGrande",Arial,sans-serif;}
.search-filter-section dl .collapseContent .numeric-input-holder button:hover{background:#3c7fc1;}
.search-filter-section dl .collapseContent .numeric-input-holder button:active{background:#3571ac;}
.search-filter-section dl .collapseContent .filterByKeywordButton{display:none;float:left;margin:0 0 0 5px;padding:0 8px;height:32px;line-height:32px;background:#438ed8;text-shadow:none;-webkit-box-shadow:none;box-shadow:none;border:0;font-family:"Lucida Grande","LucidaGrande",Arial,sans-serif;}
.search-filter-section dl .collapseContent .filterByKeywordButton:hover{background:#3c7fc1;}
.search-filter-section dl .collapseContent .filterByKeywordButton:active{background:#3571ac;}
.search-filter-section dl .collapseContent .includeAdDescCont{float:left;}
.search-filter-section dl .collapseContent .includeAdDescCont label{display:block;margin-top:10px;font-size:11px;line-height:16px;}
.search-filter-section dl .collapseContent .includeAdDescCont .includeAdDesc{float:left;}
.search-filter-section dl .shoppingCollapseContent{padding:12px 15px 12px 11px;}
.shopping-search-filter-section-title{margin-top:15px;margin-bottom:5px;font-weight:bold;font-size:14px;display:block;float:left;}
ul.facetedSearchList{width:178px;outline:0;}
ul.facetedSearchList li{width:100%;margin-bottom:5px;}
ul.facetedSearchList li:last-child{margin-bottom:0;}
ul.facetedSearchList li a{font-size:13px;line-height:17px;display:inline;}
ul.facetedSearchList li a.facetedRadiobox i{margin-top:1px!important;}
ul.facetedSearchList li a:focus{text-decoration:underline;}
ul.facetedSearchList.scroll-pane{max-height:128px;overflow:hidden;}
ul.tabbed-list{float:left;zoom:1;border-radius:2px;font-size:10px;margin-bottom:10px;margin-left:1px;}
ul.tabbed-list li{float:left;position:relative;}
ul.tabbed-list li a.checked{margin-left:-1px;width:22px;color:#fff;background-color:#8598aa;border:1px solid #8598aa;}
ul.tabbed-list li a.checked:hover{cursor:default;background-color:#8598aa;border-color:#8598aa;}
ul.tabbed-list li a{display:block;background-color:#fbfafa;padding:9px 10px 7px;font-weight:normal!important;width:21px;height:14px;text-align:center;border:1px solid #c0c0c0;border-left:none;color:#039;}
ul.tabbed-list li a:hover{background-color:#778898;border-color:#778898;color:#fff;}
ul.tabbed-list li a:active{background-color:#6a7988;border-color:#6a7988;}
ul.tabbed-list li:first-child a{border-left:1px solid #c0c0c0;border-bottom-left-radius:2px;border-top-left-radius:2px;}
ul.tabbed-list li:first-child a:hover{border-color:#778898;}
ul.tabbed-list li:first-child a.checked{border-color:#8598aa;}
ul.tabbed-list li:last-child a{border-bottom-right-radius:2px;border-top-right-radius:2px;}
.more-criteria-link{font-size:14px;text-align:center;text-decoration:underline;padding-top:15px;float:left;width:100%;}
#searchResultLeft-address{display:block;}
#searchResultLeft-address .country-change-link{display:block;font-size:11px;margin:0 0 0 10px;text-align:right;line-height:12px;max-width:130px;position:relative;}
.form-style-wrapper input[type="checkbox"]{margin:0;margin-top:1px \9;line-height:normal;display:none;opacity:0;-ms-filter:"alpha(opacity=0)";filter:alpha(opacity=0);width:0;height:0;}
.form-style-wrapper input[type="checkbox"]+label{padding-left:20px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;}
.form-style-wrapper input[type="checkbox"]+label:before{content:'';display:inline-block;position:absolute;width:14px;height:14px;top:0;left:0;}
.form-style-wrapper input[type="text"].textbox{border:1px solid #c0c0c0;height:14px;font-size:12px;line-height:16px;padding:4px 6px;border-radius:2px;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);}
.facetedCheckbox i,.facetedRadiobox i{position:relative;float:left;margin-right:2px;min-height:15px;}
.facetedCheckbox i:focus,.facetedRadiobox i:focus{outline:0;border:0;}
.action-wrapper .compare .facetedCheckbox:hover:after{text-decoration:underline;}
.action-wrapper .compare .facetedCheckbox i{-webkit-background-size:26px;-moz-background-size:26px;background-size:26px;background-position:0 -295px;min-height:15px;margin-right:-2px;top:-1px;}
.action-wrapper .compare .facetedCheckbox:after{content:attr(data-content);}
.tooltip-style{max-width:250px;position:absolute!important;border:3px solid #8598aa!important;border-radius:2px!important;font-size:11px;color:#5a5a5a;z-index:500;line-height:14px;word-wrap:break-word;opacity:1;-ms-filter:none;filter:none;margin-left:30px;}
.tooltip-style:after{border:solid transparent;border-width:10px;position:absolute;content:'';height:0;width:0;pointer-events:none;margin-top:-20px;border-right-color:#8598aa;right:100%;top:50%;}
.faceted-select{display:block;position:relative;z-index:1;width:148px;height:30px;padding:0 10px;font-size:13px;line-height:30px;background-color:#fff;border:1px solid #c0c0c0;border-radius:2px;color:#333;overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis;}
.faceted-select:hover{text-decoration:none;}
.faceted-select:before{position:absolute;right:10px;top:12px;background-position:-94px -83px!important;background-color:#fff;height:15px;padding-left:4px;}
.faceted-select.passive{background-color:#f2f2f2;color:#999;}
.faceted-select.passive:before{background-color:#f2f2f2;padding-left:4px;height:15px;background-position:-105px -90px!important;}
.address-select-wrapper{position:relative;}
.address-select-wrapper>li{position:relative;margin-bottom:10px;}
.address-select-wrapper>li[data-address='country']{position:absolute;right:0;top:-24px;}
.address-select-wrapper>li[data-address='country'] .address-pane{top:-18px;left:28px!important;}
.address-select-wrapper .collapse-pane{display:block;position:relative;float:right;width:10px;height:13px;padding:5px 6px;border-radius:2px;margin:8px 2px;background-color:#e8e7e7;}
.address-select-wrapper .address-filter{margin:12px 0 0 11px;float:left;position:relative;}
.address-select-wrapper .address-filter input{width:144px;padding:8px 30px 8px 6px!important;}
.address-select-wrapper .address-filter:after{position:absolute;top:6px;right:6px;}
.address-select-wrapper .parent-location{background:#ddd;height:26px;color:#4c4c4c;padding:0 0 0 10px;font-size:13px;font-weight:bold;line-height:26px;overflow:hidden;}
.address-select-wrapper .parent-location{position:absolute;display:none;width:198px;z-index:3;top:55px;left:0;}
.address-select-wrapper .address-pane{display:none;position:absolute;z-index:250;left:0;top:0;width:227px;border:1px solid #c0c0c0;border-radius:2px;background-color:#fff;-webkit-box-shadow:none;box-shadow:none;}
.address-select-wrapper .address-pane:hover .collapse-pane{background-color:transparent;}
.address-select-wrapper .address-pane:hover .collapse-pane:hover{background-color:#e8e7e7;}
.address-select-wrapper .address-pane.tooltip-style:after{top:28px!important;}
.address-select-wrapper .country-select{background:#fff;position:absolute;margin-top:4px;display:none;}
.address-select-wrapper .scroll-pane{width:219px;float:left;margin:10px 0;height:330px;overflow:hidden;}
.address-select-wrapper .address-search-list{width:208px;float:left;}
.sticky-search-button{padding:10px 0;background-color:#fff;background-color:rgba(255,255,255,0.8);border:1px solid #d5d3d3;border-radius:2px;width:202px;-webkit-box-shadow:0 1px 3px rgba(0,0,0,0.3);box-shadow:0 1px 3px rgba(0,0,0,0.3);margin-left:-2px;display:none;}
.sticky-search-button.static{position:absolute;background:transparent;-webkit-box-shadow:none;box-shadow:none;border:0;border-radius:0;margin:0;bottom:0;left:-1px;}
.sticky-search-button .search-submit{font-family:"Lucida Grande","LucidaGrande",Arial,Helvetica,sans-serif;margin:0 15px;width:170px;display:block;}
.refresh-on-click{font-size:12px;text-align:center;display:block;float:left;width:100%;padding-top:15px;}
.refresh-on-click label{line-height:16px;display:inline-block;}
.refresh-on-click .help-icon{margin:-8px 0 -8px 3px;}
#searchCategoryContainer{width:173px;padding-right:7px;max-height:308px;outline:0;overflow:none;}
.jspVerticalBar{width:8px;}
.jspDrag,.jspDrag:hover{background:#d3d3d3;position:relative;top:0;left:0;cursor:pointer;border-radius:8px;border:0;-webkit-box-shadow:none;box-shadow:none;-webkit-transition:background .1s linear;-moz-transition:background .1s linear;-o-transition:background .1s linear;-ms-transition:background .1s linear;transition:background .1s linear;}
.jspDrag:hover{background:#b5b4b4;-webkit-transition:background .1s linear;-moz-transition:background .1s linear;-o-transition:background .1s linear;-ms-transition:background .1s linear;transition:background .1s linear;}
.jspTrack{background:#e9e9e9;position:relative;border-radius:8px;right:1px;}
.searchResultsRight,.searchResultsRight .pageNavigator{border-bottom-left-radius:2px;border-bottom-right-radius:2px;}
.searchResultsRight .pageNavigator{border:1px solid #dedede!important;background:#fff;padding:30px 0;font-size:13px;color:#3e3e3e;}
.searchResultsRight .pageNavigator p.mbdef{margin-bottom:20px;}
.searchResultsRight .pageNavigator .pageNaviButtons li{-webkit-box-shadow:none;box-shadow:none;margin:0 0 0 10px;height:30px;}
.searchResultsRight .pageNavigator .pageNaviButtons li span,.searchResultsRight .pageNavigator .pageNaviButtons li a{height:16px;width:16px;padding:5px 6px 7px;font-size:13px;border:1px solid #dedede;border-radius:2px;background:#fff;color:#039;-webkit-box-shadow:none;box-shadow:none;font-weight:normal;}
.searchResultsRight .pageNavigator .pageNaviButtons li span:hover,.searchResultsRight .pageNavigator .pageNaviButtons li a:hover{background:#778898;border-color:#778898;color:#fff;}
.searchResultsRight .pageNavigator .pageNaviButtons li span:active,.searchResultsRight .pageNavigator .pageNaviButtons li a:active{background:#6a7988;}
.searchResultsRight .pageNavigator .pageNaviButtons li span.currentPage{background:#8598aa;border-color:#8598aa;color:#fff;cursor:default;}
.searchResultsRight .pageNavigator .pageNaviButtons li span.currentPage:hover{background:#8598aa;}
.searchResultsRight .pageNavigator .pageNaviButtons li a.prevNextBut{width:70px;}
.searchResultsRight .pageNavigator .pageNaviButtons li a.prevNextBut span{display:none;}
.searchResultsRight .searchFooter{border:1px solid #dedede;background:#fff;position:relative;height:auto;margin-bottom:50px;}
.searchResultsRight .searchFooter .myFavoriteSearch{display:table;height:100%;margin:10px 0;}
.searchResultsRight .searchFooter .myFavoriteSearch .infoFavoriteContainer{display:table-cell;vertical-align:middle;}
.searchResultsRight .searchFooter .myFavoriteSearch .favoriteIconContainer{display:table-cell;vertical-align:middle;padding-left:25px;width:52px;}
.searchResultsRight .searchFooter .myFavoriteSearch .favoriteIconContainer .searchIcon{background:url('https://s0.shbdn.com/assets/images/favorite_search:0b33c5f1380fa7809e2181d05ac5b949.png') no-repeat;height:63px;width:52px;float:none;margin:0;}
.searchResultsRight .searchFooter .myFavoriteSearch p{height:auto;}
.searchResultsRight .searchFooter .myFavoriteSearch .infoFavorite{margin-left:13px;color:#3e3e3e;font-size:13px;word-break:break-word;}
.searchResultsRight .searchFooter .myFavoriteSearch .infoFavorite#saveSearchResult{margin:0 0 0 13px;font-size:16px;line-height:normal;height:auto;}
.searchResultsRight .searchFooter .favoriteStoreSearch{width:214px;float:none;display:table-cell;vertical-align:middle;padding-right:23px;}
.searchResultsRight .searchFooter .favoriteStoreSearch #saveSearchResultButton{width:214px;background:#438ed8;border:1px solid #57a1f7;-webkit-box-shadow:0 2px 3px 0 rgba(0,0,0,0.1),0 0 4px 0 rgba(0,0,0,0.06),1px 0 2px 0 rgba(0,0,0,0.07);box-shadow:0 2px 3px 0 rgba(0,0,0,0.1),0 0 4px 0 rgba(0,0,0,0.06),1px 0 2px 0 rgba(0,0,0,0.07);color:#fff;font-weight:normal;padding:10px 0;}
.searchResultsRight .searchFooter .favoriteStoreSearch #saveSearchResultButton:hover{background:#3c7fc1;}
.searchResultsRight .searchFooter .favoriteStoreSearch #saveSearchResultButton:active{background:#3571ac;}
#saveSearchContent h3{font-size:22px;font-weight:normal;border-bottom:1px solid #d8d7d7;padding:0 0 10px 10px;}
#saveSearchContent .favoriteSearchesDialogForm{margin:20px 10px 30px 10px;width:540px;}
#saveSearchContent .favoriteSearchesDialogForm li{padding:10px 0;font-size:14px;}
#saveSearchContent .favoriteSearchesDialogForm li>span{display:inline-block;width:220px;}
#saveSearchContent .favoriteSearchesDialogForm li .form-error,#saveSearchContent .favoriteSearchesDialogForm li .form-custom-error{display:none;color:#fb0317;font-size:11px;margin:5px 0 0 225px;}
#saveSearchContent .favoriteSearchesDialogForm li dl{vertical-align:top;display:inline-block;}
#saveSearchContent .favoriteSearchesDialogForm li dl dt{margin-bottom:10px;}
#saveSearchContent .question-icon{width:16px;height:16px;padding:0;border-radius:100%;font-weight:bold;font-size:11px;vertical-align:2px;}
#saveSearchContent p.dialog-buttons{text-align:right;}
#saveSearchContent p.dialog-buttons .btn+.btn{margin-left:10px;}
.infoSearchResults{border:1px solid #dedede;border-radius:2px;margin:4px 0 8px;}
.infoSearchResults .resultsTextWrapper{zoom:1;padding:10px 0 9px 15px;}
.infoSearchResults .resultsTextWrapper:before,.infoSearchResults .resultsTextWrapper:after{display:table;content:"";zoom:1;}
.infoSearchResults .resultsTextWrapper:after{clear:both;}
.infoSearchResults .resultsTextWrapper .result-text{display:inline-block;max-width:660px;}
.infoSearchResults .resultsTextWrapper .result-text h1 span{color:#292d2e;max-width:330px;display:inline-block;line-height:120%;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:text-bottom;}
.infoSearchResults .resultsTextWrapper .saveSearchWrapper{float:right;height:11px;display:table;}
.infoSearchResults .save-search-container .faceted-save-search{text-decoration:none;font-weight:normal;font-size:12px;min-width:174px;background:#fff;padding:0 0 0 15px;display:inline-block;}
.infoSearchResults .save-search-container .faceted-save-search:before{content:'';background:url('https://s0.shbdn.com/assets/images/faceted_search_2x:62fd3c6dcaf52ea817a0d578543a7306.png') 1px -396px no-repeat;-webkit-background-size:32px;-moz-background-size:32px;background-size:32px;display:inline-block;width:19px;height:18px;vertical-align:middle;margin-right:3px;margin-top:-6px;}
.infoSearchResults .save-search-container .faceted-save-search:hover{text-decoration:underline;}
.show-search-filter{display:none;float:right;font-weight:normal!important;font-size:11px;text-decoration:none!important;position:relative;top:5px;right:20px;}
.show-search-filter:hover{text-decoration:underline!important;}
.show-search-filter:after{position:absolute;top:5px;right:-15px;content:'';display:inline-block;float:right;width:10px;height:6px;background:url('https://s0.shbdn.com/assets/images/faceted_search:4270525e0c0f68b868030afd1a412e37.png') right -1050px no-repeat;}
@media (min--moz-device-pixel-ratio:1.5),(-o-min-device-pixel-ratio:3/2),(-webkit-min-device-pixel-ratio:1.5),(min-device-pixel-ratio:1.5),(min-resolution:1.5dppx){
.action-wrapper .compare .facetedCheckbox i{-webkit-background-size:26px;-moz-background-size:26px;background-size:26px;background-position:0 -65px;}
.show-search-filter:after{background:url('https://s0.shbdn.com/assets/images/faceted_search_2x:62fd3c6dcaf52ea817a0d578543a7306.png') right -440px no-repeat;-webkit-background-size:32px;-moz-background-size:32px;background-size:32px;}
.sort-order-menu>li>a#advancedSorting:after{background:url('https://s0.shbdn.com/assets/images/faceted_search_2x:62fd3c6dcaf52ea817a0d578543a7306.png') right -440px no-repeat;-webkit-background-size:32px;-moz-background-size:32px;background-size:32px;}
.view-type-menu li span:before,.view-type-menu li a:before{background:url('https://s0.shbdn.com/assets/images/searchViewTypes@2x:babe5add37fb2c70fbdb0fdfeb2044f5.png') no-repeat 0 0!important;-webkit-background-size:39px 22px!important;-moz-background-size:39px 22px!important;background-size:39px 22px!important;}
.view-type-menu .listTypeListPassive:before{background-position:-15px -12px!important;}
.view-type-menu .listTypeListPassive:hover:before{background-position:-15px 0!important;}
.view-type-menu .listTypeGalleryPassive:before{background-position:-27px -12px!important;}
.view-type-menu .listTypeGalleryPassive:hover:before{background-position:-27px 0!important;}
.view-type-menu .listTypeClassic:before{background-position:0 0!important;}
.searchResultsRight .searchFooter .myFavoriteSearch .searchIcon{background:url('https://s0.shbdn.com/assets/images/favorite_search@2x:89055361aee714dfd80b52b8e851d910.png') no-repeat!important;-webkit-background-size:100%!important;-moz-background-size:100%!important;background-size:100%!important;}
}
#searchResultsTable{border:1px solid #dedede!important;border-top-right-radius:2px;padding-top:6px;-moz-user-select:none;}
#searchResultsTable thead td{height:28px;font-size:12px;line-height:13px;}
.faceted-top-buttons li{float:left;width:auto;margin-right:4px;background-color:#dee4eb;height:29px;line-height:29px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:solid 1px #c7d0db;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom:0;position:relative;bottom:-5px;}
.faceted-top-buttons li:hover{border:solid 1px #adbac8;border-bottom:0;background-color:#eef2f6;}
.faceted-top-buttons li:last-child{margin-right:0;}
.faceted-top-buttons li.active{background-color:#fff;border:solid 1px #dedede;border-bottom:solid 1px #fff;border-top:solid 3px #489ae9;height:34px;line-height:34px;bottom:-1px;z-index:2;}
.faceted-top-buttons li.active:hover{background-color:#fff;border:solid 1px #e9e4e4;border-bottom:solid 1px #fff;border-top:solid 3px #489ae9;}
.faceted-top-buttons li.active a,.faceted-top-buttons li.active span{color:#000;font-weight:bold;}
.faceted-top-buttons li a,.faceted-top-buttons li span{display:block;font-weight:bold;padding:0 10px;}
.faceted-top-buttons li a:hover,.faceted-top-buttons li span:hover{text-decoration:none;}
.faceted-sort-buttons li{float:left;position:relative;}
.faceted-sort-buttons li a,.faceted-sort-buttons li span{display:block;padding:5px 10px;background:#fff;}
span.viewTypeTitle{font-size:11px;padding-top:3px;margin-top:0;}
.searchResultSorted{min-height:34px;border:0;padding:6px 0 0;}
.searchResultSorted .sortedTypes{margin-top:3px;}
.searchResultSorted ul{line-height:15px!important;border-radius:2px;}
.classifiedStatusWarning{display:none;border-radius:3px;height:90px;border:1px solid #dbdbdb;margin-top:10px;position:relative;margin-bottom:10px;}
.classifiedStatusWarning p{height:58px;margin:1px;display:block;text-align:center;background-color:#fff;background-repeat:repeat-x;background-image:-webkit-linear-gradient(top,#efefef,#fff);background-image:-moz-linear-gradient(top,#efefef,#fff);background-image:-o-linear-gradient(top,#efefef,#fff);background-image:-ms-linear-gradient(top,#efefef,#fff);background-image:linear-gradient(to bottom,#efefef,#fff);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=fullcolor(#efefef),endColorstr=fullcolor(#fff),GradientType=1);}
.classifiedStatusWarning p span{display:inline-block;margin:auto;margin-top:2px;}
.classifiedStatusWarning .statusMessage{padding:10px 0 0 60px;display:block;position:relative;font-size:14px;color:#ce3737;min-height:20px;font-weight:bold;margin-top:22px;}
.classifiedStatusWarning .statusMessage.approval,.classifiedStatusWarning .statusMessage.expired{display:none;}
.classifiedStatusWarning .statusMessage:before{position:absolute;width:50px;height:50px;background:url('https://s0.shbdn.com/assets/images/detail:8da7b49a68be47c286076d20366d1ef6.png') -83px -343px no-repeat;display:block;content:' ';top:0;left:0;}
.sort-order-menu>li{position:relative;width:70px;height:26px;z-index:100;}
.sort-order-menu>li>ul{display:none;position:absolute;top:27px;right:0;border:1px solid #bebebe;background-color:#fff;}
.sort-order-menu>li>a{display:block;width:56px;height:17px;background:#fff;border-radius:2px;padding:4px 3px 2px 9px;border:1px solid #dedede;font-size:11px;position:absolute;z-index:10;text-decoration:none;color:#333;}
.sort-order-menu>li>a:after{content:' ';width:10px;height:6px;background:url('https://s0.shbdn.com/assets/images/faceted_search:4270525e0c0f68b868030afd1a412e37.png') right -1050px no-repeat;margin-left:5px;position:absolute;right:7px;top:9px;}
.view-type-size-menu-item{margin-right:10px;}
.sort-order-menu ul a{display:block;padding:7px 5px 7px 12px;border-bottom:1px solid #dadada;}
.sort-order-menu ul a:hover{text-decoration:none;background:#f2f2f2;}
.sort-order-menu>li{width:211px;}
.sort-order-menu>li>a{width:188px;padding:4px 12px 2px 9px;}
.view-type-menu li span,.sort-size-menu li span,.view-type-menu li a,.sort-size-menu li a{width:11px;height:13px;border:1px solid #dedede;}
.view-type-menu li span:before,.sort-size-menu li span:before,.view-type-menu li a:before,.sort-size-menu li a:before{top:8px;left:10px;width:13px;height:12px;background:url('https://s0.shbdn.com/assets/images/searchViewTypes@1x:789ffe3efa7922d4c8606d991a1254bc.png') no-repeat 0 0;}
.view-type-menu li span:hover,.sort-size-menu li span:hover,.view-type-menu li a:hover,.sort-size-menu li a:hover{background-color:#778898;}
.view-type-menu li span:active,.sort-size-menu li span:active,.view-type-menu li a:active,.sort-size-menu li a:active{background-color:#6a7988;}
.view-type-menu .listTypeListPassive:before{background-position:-15px -12px;}
.view-type-menu .listTypeListPassive:hover{border-color:#778898;}
.view-type-menu .listTypeListPassive:hover:before{background-position:-15px 0;}
.view-type-menu .listTypeGalleryPassive{border-top-right-radius:2px;border-bottom-right-radius:2px;}
.view-type-menu .listTypeGalleryPassive:before{background-position:-27px -12px;}
.view-type-menu .listTypeGalleryPassive:hover{border-color:#778898;}
.view-type-menu .listTypeGalleryPassive:hover:before{background-position:-27px 0;}
.view-type-menu .listTypeClassic{border-top-left-radius:2px;border-bottom-left-radius:2px;}
.view-type-menu .listTypeClassic:before{background-position:0 0;}
.view-type-menu .select-size-type,.sort-size-menu .select-size-type{background-color:#8598aa!important;border-color:#8598aa!important;color:#000;font-weight:bold;}
.sort-size-menu .Limit20{width:70px;height:15px;background:#8598aa;border:1px solid #8598aa;border-radius:2px;padding:7px 0;color:#fff;font-weight:normal;}
.sort-size-menu .Limit20:hover{text-decoration:none;cursor:default;}
.sort-size-menu .Limit20{margin-right:10px;}
.sort-size-menu .Limit50Passive{width:70px;height:15px;background:#fff;border:1px solid #dedede;border-radius:2px;padding:7px 0;color:#3e3e3e;}
.sort-size-menu .Limit50Passive:hover{text-decoration:none;color:#fff;background:#778898;border-color:#778898;}
.sort-size-menu .Limit50Passive:active{background:#6a7988;border-color:#6a7988;}
.sort-size-menu{display:inline-block;}
.sort-size-menu li span,.sort-size-menu li a{width:14px;height:14px;}
.sortSizeOptions{margin:20px 0 0 0;height:30px;}
.sortSizeOptions>span{display:inline-block;vertical-align:top;margin:8px 6px;}
.scroll-pane{outline:0;}
.hidden{display:none;}
.secureTrade-selector-container{position:relative;}
.secureTrade-selector-container .shopping-search-custom-free-shipping{position:absolute;top:50px;left:35px;}
.secureTrade-selector-container .shopping-search-custom-free-shipping .title{margin-bottom:8px;color:#888;font-size:11px;font-style:italic;}
.secureTrade-selector-container .shopping-search-custom-free-shipping li{list-style:none;}
.secureTrade-selector-container .shopping-search-custom-secureTrade{height:100px;}
.secureTrade-selector-container .shopping-search-custom-secureTrade .any{padding-top:40px;}
.secureTrade-selector-container .shopping-search-custom-secureTrade .jspVerticalBar{visibility:hidden;}
.help-icon{display:inline-block;width:21px;height:22px;background:url('https://s0.shbdn.com/assets/images/help-icon:f0e64832ee3418774b65187bf54a15af.png') top left no-repeat;cursor:pointer;}
input::-webkit-input-placeholder:focus{color:#fff;}
input:-moz-placeholder:focus{color:#fff;}
input:-ms-input-placeholder:focus{color:#fff;}
.mark-as-ignored{position:absolute;top:5px;right:7px;display:none;}
.mark-as-ignored:before{display:inline-block;position:relative;width:16px;height:16px;content:'';vertical-align:middle;background:url('https://s0.shbdn.com/assets/images/hide:fcb69f8e93424778bb338eeb02871673.png') 0 0 no-repeat;background-size:16px;}
#searchResultsTable{position:relative;}
#searchResultsTable tbody tr.searchResultsItem:hover .mark-as-ignored{display:block;}
.ignore-me{position:absolute;z-index:2;border-bottom:0!important;border-left:0!important;padding-right:0!important;}
.searchResultsIgnoredColumn{padding:0!important;border-left:none!important;}
#searchResultsTable tbody tr.searchResultsItem{position:relative;}
.mark-as-not-ignored:hover{text-decoration:underline;}
.lvcCarouselContainer{zoom:1;position:absolute;top:27px;right:80px;width:347px;padding:0 10px 10px 10px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;background:#fafafa;-webkit-box-shadow:2px 0 5px 0 rgba(0,0,0,0.1),0 2px 4px 0 rgba(0,0,0,0.1),-2px 0 5px 0 rgba(0,0,0,0.1);box-shadow:2px 0 5px 0 rgba(0,0,0,0.1),0 2px 4px 0 rgba(0,0,0,0.1),-2px 0 5px 0 rgba(0,0,0,0.1);z-index:400;}
.lvcCarouselContainer:before,.lvcCarouselContainer:after{display:table;content:"";zoom:1;}
.lvcCarouselContainer:after{clear:both;}
.lvcCarouselContainer:before{content:'';position:absolute;width:0;height:0;margin-left:-0.5em;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:5px solid #fafafa;border-color:transparent transparent #fafafa #fafafa;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-o-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);-moz-transform:rotate(135deg);-webkit-transform:rotate(135deg);-moz-transform:rotate(135deg);-o-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);-webkit-box-shadow:-2px 2px 1px 0 rgba(0,0,0,0.1);-moz-box-shadow:-2px 2px 1px 0 rgba(0,0,0,0.1);-webkit-box-shadow:-2px 2px 1px 0 rgba(0,0,0,0.1);box-shadow:-2px 2px 1px 0 rgba(0,0,0,0.1);top:0;right:48px;}
.lvcCarouselContainer.close{display:none;}
.lvcCarouselContainer .empty-list{display:none;padding:30px 10px 10px 10px;color:#666;cursor:default;text-align:center;clear:both;}
.lvcCarouselContainer .section-top{padding:20px 0 9px 0;height:14px;border-bottom:1px solid #eaeaea;background-color:#fafafa;width:163px;float:left;}
.lvcCarouselContainer .section-top .section-title{position:relative;font-size:12px;cursor:pointer;text-align:center;}
.lvcCarouselContainer .section-top .section-title:after{position:absolute;bottom:-9px;left:0;content:'';width:163px;height:2px;}
.lvcCarouselContainer .section-top .active-title{color:#438ed8;font-weight:bold;}
.lvcCarouselContainer .section-top .active-title:after{background:#438ed8;}
.lvcCarouselContainer .itemsContainer{margin:10px 0;clear:both;width:326px;float:left;}
.lvcCarouselContainer .itemsContainer .itemsList{zoom:1;position:relative;display:block;width:inherit!important;max-height:365px;overflow-y:auto;outline:0;}
.lvcCarouselContainer .itemsContainer .itemsList:before,.lvcCarouselContainer .itemsContainer .itemsList:after{display:table;content:"";zoom:1;}
.lvcCarouselContainer .itemsContainer .itemsList:after{clear:both;}
.compare-classified-submenu{display:none;position:absolute;top:27px;right:0;width:316px;padding:0 10px 10px 10px;background:#fafafa;-webkit-box-shadow:2px 0 5px 0 rgba(0,0,0,0.1),0 2px 4px 0 rgba(0,0,0,0.1),-2px 0 5px 0 rgba(0,0,0,0.1);box-shadow:2px 0 5px 0 rgba(0,0,0,0.1),0 2px 4px 0 rgba(0,0,0,0.1),-2px 0 5px 0 rgba(0,0,0,0.1);z-index:400;}
.compare-classified-submenu:before{content:'';position:absolute;width:0;height:0;margin-left:-0.5em;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:5px solid #fafafa;border-color:transparent transparent #fafafa #fafafa;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-o-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);-moz-transform:rotate(135deg);-webkit-transform:rotate(135deg);-moz-transform:rotate(135deg);-o-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);-webkit-box-shadow:-2px 2px 1px 0 rgba(0,0,0,0.1);-moz-box-shadow:-2px 2px 1px 0 rgba(0,0,0,0.1);-webkit-box-shadow:-2px 2px 1px 0 rgba(0,0,0,0.1);box-shadow:-2px 2px 1px 0 rgba(0,0,0,0.1);top:0;right:18px;}
.compare-classified-submenu .section-main{position:relative;}
.compare-classified-submenu a{height:auto;padding:0;background:0;}
.compare-classified-submenu .section-top{padding:20px 0 9px 10px;height:14px;border-bottom:1px solid #eaeaea;background-color:#fafafa;}
.compare-classified-submenu .section-top .section-title{position:relative;font-size:12px;color:#438ed8;font-weight:bold;cursor:default;}
.compare-classified-submenu .section-top .section-title:after{position:absolute;bottom:-9px;left:-10px;content:'';width:110px;height:2px;background:#438ed8;}
.compare-classified-submenu .section-list ul{width:inherit!important;}
.compare-classified-submenu .section-list .error-container{zoom:1;display:none;position:relative;margin-top:10px;height:40px;}
.compare-classified-submenu .section-list .error-container:before,.compare-classified-submenu .section-list .error-container:after{display:table;content:"";zoom:1;}
.compare-classified-submenu .section-list .error-container:after{clear:both;}
.compare-classified-submenu .section-final{position:relative;margin:20px 0 0;padding:9px 0 0;}
.compare-classified-submenu .section-final a{color:#00339f!important;font-size:10px;background:0;text-align:center;}
.compare-classified-submenu .section-final a:before{position:absolute;top:0;left:0;content:'';width:100%;height:1px;background:#eaeaea;}
.compare-classified-submenu .overlay-container{display:none;position:absolute;width:100%;height:100%;opacity:.65;-ms-filter:"alpha(opacity=65)";filter:alpha(opacity=65);z-index:1;background:#fff url('https://s0.shbdn.com/assets/images/loading:86b1ac6d1c485d54efa3a53643e91ceb.gif') no-repeat center center!important;}
.compare-classified-submenu .section-confirm{display:none;margin-top:10px;padding-bottom:10px;border-bottom:1px solid #e8e8e8;}
.compare-classified-submenu .section-confirm .section-confirm-message{position:relative;margin:10px;padding-left:30px;color:#545454;font-size:10px;}
.compare-classified-submenu .section-confirm .section-confirm-message:before{content:'';background:url('https://s0.shbdn.com/assets/images/classifiedComparison:7ba46bc8c922ed3c9783b2107c11d05a.png') no-repeat -27px -83px;display:block;position:absolute;width:24px;height:24px;left:0;top:7px;}
.compare-classified-submenu .section-confirm .section-buttons{text-align:center;}
.compare-classified-submenu .section-confirm .btn{padding:5px;margin-left:10px;width:100px;background:#fff;-webkit-box-shadow:none;box-shadow:none;}
.compare-classified-submenu .section-confirm .btn.positive-action-button{margin-left:0;background:#438ed8;border:1px solid #4d82bd;color:#fff;-webkit-box-shadow:none;box-shadow:none;text-shadow:none;}
.compare-classified-submenu .section-confirm .btn.positive-action-button:hover{background:#3c7fc1;}
.compare-classified-submenu .section-confirm .btn.positive-action-button:active{background:#3571ac;}
.section-list .error-container{background-color:#fffcee;border:1px solid #f2e4b2;}
@media (min--moz-device-pixel-ratio:1.5),(-o-min-device-pixel-ratio:3/2),(-webkit-min-device-pixel-ratio:1.5),(min-device-pixel-ratio:1.5),(min-resolution:1.5dppx){
.compare-classified-submenu .section-confirm .section-confirm-message:before{background:url('https://s0.shbdn.com/assets/images/classifiedComparison_2x:2208196c0a9d5e11224d4ae2cb895494.png') no-repeat -27px -83px;-webkit-background-size:135px 131px;-moz-background-size:135px 131px;background-size:135px 131px;}
}
#disclaimerConfirmModal{display:none;}
#disclaimerConfirmModal h3,#disclaimerConfirmModal .attentionParagraph{font-weight:bold;margin-bottom:25px;}
#disclaimerConfirmModal p{margin:20px 0;}
#disclaimerConfirmModal .dialog-buttons .cancel-button{border-radius:2px;box-shadow:0 2px 3px 0 rgba(0,0,0,0.1),0 0 4px 0 rgba(0,0,0,0.06),1px 0 2px 0 rgba(0,0,0,0.07);border:1px solid #efefef;}
#disclaimerConfirmModal .dialog-buttons .agree-button{border:0;border-radius:2px;box-shadow:0 2px 3px 0 rgba(0,0,0,0.16),0 0 4px 0 rgba(0,0,0,0.11),1px 0 2px 0 rgba(0,0,0,0.13);background-color:#489ae9;}
}
/*! CSS Used from: https://s0.shbdn.com/assets/wideSearchResults:beeead05be2d7e42d8cf7d40edefebc7.css ; media=screen, print */
@media screen, print{
@media screen and (min-device-width:1200px){
#searchContainer,.wide-container{width:1150px!important;}
.searchResultsRight{width:934px!important;}
.sortedTypes .viewTypeTitle{display:inline-block;}
}
}
/*! CSS Used fontfaces */
@font-face{font-family:"LucidaGrande";src:url('https://s0.shbdn.com/assets/blob/LucidaGrande:00351442acc65cff9586baf06437dcd6.woff');}
@font-face{font-family:"LucidaGrande";font-weight:bold;src:url('https://s0.shbdn.com/assets/blob/LucidaGrande-Bold:fb045a5535379e5c9818873ee5c7a9b0.woff');}

</style>
