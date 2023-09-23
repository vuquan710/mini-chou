// var json_header = '{"header":{"is_login":0,"contact":"http:\/\/socnhi.com\/contact.html"},"main":{"ico_nhanhanvat":"http:\/\/socnhi3.vcmedia.vn\/header\/flash\/nhaava_20130507_2.swf","ico_hangtruyen":"http:\/\/socnhi3.vcmedia.vn\/header\/flash\/ht.swf","link_hangtruyen":"http:\/\/socnhi.com\/Hang-truyen.html","ico_ecorner":"http:\/\/socnhi3.vcmedia.vn\/header\/flash\/eco_opt_notext_20130504.swf","link_ecorner":"http:\/\/socnhi.com\/English-adventure.html","ico_hoasinhi":"http:\/\/socnhi3.vcmedia.vn\/header\/flash\/hsn.swf","link_hoasinhi":"http:\/\/socnhi.com\/Hoa-si-nhi.html","ico_thkm":"http:\/\/socnhi3.vcmedia.vn\/header\/flash\/thtt20131010.swf","link_thkm":"http:\/\/truonghoctructuyen.socnhi.com\/","ico_blog":"http:\/\/socnhi3.vcmedia.vn\/header\/flash\/blog.swf","link_blog":"http:\/\/socnhi.com\/Blog.html","ico_bachocnhi":"http:\/\/socnhi3.vcmedia.vn\/header\/flash\/bhn.swf","link_bachocnhi":"http:\/\/socnhi.com\/Bac-hoc-nhi.html","ico_cahq":"http:\/\/socnhi3.vcmedia.vn\/header\/flash\/cahq.swf","link_cahq":"http:\/\/socnhi.com\/Choi-anh-han-quoc.html","ico_nghesinhi":"http:\/\/socnhi3.vcmedia.vn\/header\/flash\/nsn.swf","link_nghesinhi":"http:\/\/socnhi.com\/Nghe-si-nhi.html","ico_congviengame":"http:\/\/socnhi3.vcmedia.vn\/\/header\/flash\/cvg.swf","link_congviengame":"http:\/\/socnhi.com\/Cong-vien-game.html","ico_raptivi":"http:\/\/socnhi3.vcmedia.vn\/header\/flash\/rtv.swf","link_raptivi":"http:\/\/socnhi.com\/Rap-tivi.html","ico_shop":"http:\/\/socnhi3.vcmedia.vn\/header\/flash\/shop.swf","link_shop":"http:\/\/socnhi.com\/shop_socnhi.html","avatar":"http:\/\/socnhi.com\/images\/avatar_no.png","tesst":"ladd","calendar":"lich-soc-nhi.html","nhacnen":"http:\/\/socnhi3.vcmedia.vn\/header\/flash\/bgm2.swf?v=2","maxvolume":1}}';
/////
_getX = function () {
    return (window.pageXOffset != null) ? window.pageXOffset : (document.documentElement.scrollLeft != null) ? document.documentElement.scrollLeft : document.body.scrollLeft;
},
    _getY = function () {
        return (window.pageYOffset != null) ? window.pageYOffset : (document.documentElement.scrollTop != null) ? document.documentElement.scrollTop : document.body.scrollTop;
    }
var PAGE = 'home';
var FLW = 1792;
var FLH = 879;
var VPBRPAD = 40;////test:40, def:0
var flloaded = false;
// header
var FLHW = 780;
var FLHH = 90;
// arrows
var FLARW = 68;
var FLARH = 68;

// banners
var appht, appea, ttbhn;

//
var tl, br, hd, aT, aL, aB, aR, ft;
var dt, dl, db, dr;

var px, py;
var dmx, dmy, dmt;
var cdate, ctime;
var t1, t2;
var xm1, xm2;
var ym1, ym2;



$(document).ready(function () {
    tl = $('#viewport_TL');
    br = $('#viewport_BR');
    hd = $('#canvasHeaderContentWrapper');
});

function bodyCoordUpdate() {
    var tmpHeight = window.innerHeight ? window.innerHeight : $(window).height();
    var marginTop = ((tmpHeight - FLH) / 2 + 'px');
    if (tmpHeight > FLH) {
        $('body').css({ 'margin-top': marginTop });
    } else {
        $('body').css({ 'margin-top': 0 });
    }
}

function viewportUpdate() {
    if (tl == null || br == null) { return; }

    tl.css({ left: $('body').offset().left + 'px', top: $('body').offset().top + 'px' });
    // 2015
    var tmpWidth = window.innerWidth ? window.innerWidth : $(window).width();
    var tmpHeight = window.innerHeight ? window.innerHeight : $(window).height();
    br.css({ left: $('body').offset().left + tmpWidth - VPBRPAD + 'px', top: $('body').offset().top + FLH - VPBRPAD + 'px' });

}

function overlayUpdate(dt, dl, db, dr) {
    if (br == undefined || tl == undefined) { return; }
    var hdx = (br.offset().left - tl.offset().left - FLHW) / 2;
    var hdy = (br.offset().top + tl.offset().top - FLHH) / 2;
    hd.css({ left: hdx + 'px', top: $('body').offset().top + 'px' });
}

function jsflCoordUpdate(dt, dl, db, dr) {
    bodyCoordUpdate();
    viewportUpdate();
    dt = $('#canvasContentWrapper').offset().top - $("#viewport_TL").offset().top;
    dl = $('#canvasContentWrapper').offset().left - $("#viewport_TL").offset().left;
    db = $('#canvasContentWrapper').offset().top + FLH - $("#viewport_BR").offset().top;
    dr = $('#canvasContentWrapper').offset().left + FLW - $("#viewport_BR").offset().left;
    overlayUpdate(dt, dl, db, dr);
}

function fljsScroll(dx, dy) {
    TweenLite.killTweensOf(window);

    TweenLite.to(window, 1, {
        scrollTo: { x: dx, y: dy }, ease: Power2.easeOut
    });
}

function fljsFlick(dx, dy, sp) {
    return;
    // in use, do not delete
}

function fljsScrollOnMouseDown(t) {
    var dx, dy;
    var mul = 3;
    var delta = 500 * mul;

    TweenLite.killTweensOf(window);

    if (t == 'T') {
        dx = '+=' + 0;
        dy = '-=' + delta;
    } else if (t == 'L') {
        dx = '-=' + delta;
        dy = '+=' + 0;
    } else if (t == 'B') {
        dx = '+=' + 0;
        dy = '+=' + delta;
    } else if (t == 'R') {
        dx = '+=' + delta;
        dy = '+=' + 0;
    }
    TweenMax.to(window, 1 * mul, {
        scrollTo: { x: dx, y: dy }, ease: Power0.easeOut
    });
}

var x0 = 0;
var y0 = 0;
var isscr = false;

function fljsScrollOnMouseMove(dx, dy, x1, y1) {
    return;

    TweenLite.killTweensOf(window);
    TweenMax.to(window, 0, {
        scrollTo: { x: dx, y: dy }, ease: Power0.easeOut
    });
}
function fljsScrollOnMouseMoveStart(dx, dy, x1, y1) {
    isscr = true;
    TweenLite.killTweensOf(window);
}

$(window).scroll(function () {
    jsflCoordUpdate(1, 2, 3, 4);
});

$(window).resize(function () {
    jsflCoordUpdate(1, 2, 3, 4);
});

$(document).ready(function (e) {
    jsflCoordUpdate(1, 2, 3, 4);
});

//// canvas
var htbg;
var ico_ht, ico_ea, ico_thtt, ico_blog, ico_bhn, ico_cahq, ico_nsn, ico_rtv, ico_cvg, ico_hsn, ico_nha, ico_fb;
var sil_ht, sil_ea, sil_thtt,/*tblog,*/sil_bhn, sil_cahq, sil_nsn, sil_rtv, tshop, sil_cvg, sil_hsn, tnha;
var jsonobj;

$(document).ready(function (e) {

    htbg = $('#canvasContent');
    jsflCoordUpdate(1, 2, 3, 4);
    tnha = $('#tnha');

    // jsonobj = JSON.parse(json_header);
    homeconfigParseComplete();

});

// icons
function ico_htOver() {
    ico_ht.state = 1;
    htcv_icon_htOver();
}
function ico_htOut() {
    ico_ht.state = 0;
    htcv_icon_htOut();
}
function ico_htMouseDown(e) {
    if (ico_ht.state == 0) {
        ico_htOver();
    } else if (ico_ht.state == 1) {
        ico_htOut();
        if (e.which == 0 || e.which == 1) {
            window.open('/Hang-truyen.html', '_self');
        } else if (e.which == 2) {
            window.open('/Hang-truyen.html', '_blank');
        }
    }
}
function ico_htClickTouch(e) {
    if (e.type == 'click') {
        ico_htMouseDown(e);
    } else {
        ico_htMouseDown(e);
        e.preventDefault();
    }
}



function ico_eaOver() {
    ico_ea.state = 1;
    createjs.Ticker.addEventListener("tick", stage_ea);
    htcv_icon_eaOver();
}
function ico_eaOut() {
    ico_ea.state = 0;
    htcv_icon_eaOut();
}
function ico_eaMouseDown(e) {
    if (ico_ea.state == 0) {
        ico_eaOver();
    } else if (ico_ea.state == 1) {
        ico_eaOut();
        if (e.which == 0 || e.which == 1) {
            window.open('/English-adventure.html', '_self');
        } else if (e.which == 2) {
            window.open('/English-adventure.html', '_blank');
        }
    }
}
function ico_eaClickTouch(e) {
    if (e.type == 'click') {
        ico_eaMouseDown(e);
    } else {
        ico_eaMouseDown(e);
        e.preventDefault();
    }
}

function ico_thttOver() {
    ico_thtt.state = 1;
    htcv_icon_thttOver();
}
function ico_thttOut() {
    ico_thtt.state = 0;
    htcv_icon_thttOut();
}
function ico_thttMouseDown(e) {
    if (ico_thtt.state == 0) {
        ico_thttOver();
    } else if (ico_thtt.state == 1) {
        ico_thttOut();
        if (e.which == 0 || e.which == 1) {
            window.open('http://truonghoctructuyen.socnhi.com/', '_self');
        } else if (e.which == 2) {
            window.open('http://truonghoctructuyen.socnhi.com/', '_blank');
        }
    }
}
function ico_thttClickTouch(e) {
    if (e.type == 'click') {
        ico_thttMouseDown(e);
    } else {
        ico_thttMouseDown(e);
        e.preventDefault();
    }
}

function ico_bhnOver() {
    ico_bhn.state = 1;
    htcv_icon_bhnOver();
}
function ico_bhnOut() {
    ico_bhn.state = 0;
    htcv_icon_bhnOut();
}
function ico_bhnMouseDown(e) {
    if (ico_bhn.state == 0) {
        ico_bhnOver();
    } else if (ico_bhn.state == 1) {
        ico_bhnOut();
        if (e.which == 0 || e.which == 1) {
            window.open('/Bac-hoc-nhi.html', '_self');
        } else if (e.which == 2) {
            window.open('/Bac-hoc-nhi.html', '_blank');
        }
    }
}
function ico_bhnClickTouch(e) {
    if (e.type == 'click') {
        ico_bhnMouseDown(e);
    } else {
        ico_bhnMouseDown(e);
        e.preventDefault();
    }
}

function ico_blogOver() {
    ico_blog.state = 1;
    createjs.Ticker.addEventListener("tick", stage_blog);
    htcv_icon_blogOver();
}
function ico_blogOut() {
    ico_blog.state = 0;
    htcv_icon_blogOut();
}
function ico_blogMouseDown(e) {
    if (ico_blog.state == 0) {
        ico_blogOver();
    } else if (ico_blog.state == 1) {
        ico_blogOut();
        if (e.which == 0 || e.which == 1) {
            window.open('/Blog.html', '_self');
        } else if (e.which == 2) {
            window.open('/Blog.html', '_blank');
        }
    }
}
function ico_blogClickTouch(e) {
    if (e.type == 'click') {
        ico_blogMouseDown(e);
    } else {
        ico_blogMouseDown(e);
        e.preventDefault();
    }
}

function ico_cahqOver() {
    ico_cahq.state = 1;
    createjs.Ticker.addEventListener("tick", stage_cahq);
    htcv_icon_cahqOver();
}
function ico_cahqOut() {
    ico_cahq.state = 0;
    htcv_icon_cahqOut();
}
function ico_cahqMouseDown(e) {
    if (ico_cahq.state == 0) {
        ico_cahqOver();
    } else if (ico_cahq.state == 1) {
        ico_cahqOut();
        if (e.which == 0 || e.which == 1) {
            window.open('/Choi-anh-han-quoc.html', '_self');
        } else if (e.which == 2) {
            window.open('/Choi-anh-han-quoc.html', '_blank');
        }
    }
}
function ico_cahqClickTouch(e) {
    if (e.type == 'click') {
        ico_cahqMouseDown(e);
    } else {
        ico_cahqMouseDown(e);
        e.preventDefault();
    }
}

function ico_nsnOver() {
    ico_nsn.state = 1;
    createjs.Ticker.addEventListener("tick", stage_nsn);
    htcv_icon_nsnOver();
}
function ico_nsnOut() {
    ico_nsn.state = 0;
    htcv_icon_nsnOut();
}
function ico_nsnMouseDown(e) {
    if (ico_nsn.state == 0) {
        ico_nsnOver();
    } else if (ico_nsn.state == 1) {
        ico_nsnOut();
        if (e.which == 0 || e.which == 1) {
            window.open('/Nghe-si-nhi.html', '_self');
        } else if (e.which == 2) {
            window.open('/Nghe-si-nhi.html', '_blank');
        }
    }
}
function ico_nsnClickTouch(e) {
    if (e.type == 'click') {
        ico_nsnMouseDown(e);
    } else {
        ico_nsnMouseDown(e);
        e.preventDefault();
    }
}

function ico_rtvOver() {
    ico_rtv.state = 1;
    createjs.Ticker.addEventListener("tick", stage_rtv);
    htcv_icon_rtvOver();
}
function ico_rtvOut() {
    ico_rtv.state = 0;
    htcv_icon_rtvOut();
}
function ico_rtvMouseDown(e) {
    if (ico_rtv.state == 0) {
        ico_rtvOver();
    } else if (ico_rtv.state == 1) {
        ico_rtvOut();
        if (e.which == 0 || e.which == 1) {
            window.open('/Rap-tivi.html', '_self');
        } else if (e.which == 2) {
            window.open('/Rap-tivi.html', '_blank');
        }
    }
}
function ico_rtvClickTouch(e) {
    if (e.type == 'click') {
        ico_rtvMouseDown(e);
    } else {
        ico_rtvMouseDown(e);
        e.preventDefault();
    }
}

function ico_cvgOver() {
    ico_cvg.state = 1;
    createjs.Ticker.addEventListener("tick", stage_cvg);
    htcv_icon_cvgOver();
}
function ico_cvgOut() {
    ico_cvg.state = 0;
    htcv_icon_cvgOut();
}

function ico_cvgMouseDown(e) {
    if (ico_cvg.state == 0) {
        ico_cvgOver();
    } else if (ico_cvg.state == 1) {
        ico_cvgOut();
        if (e.which == 0 || e.which == 1) {
            // window.open('/#', '_self');
        } else if (e.which == 2) {
            // window.open('/Cong-vien-game.html', '_blank');
        }
    }
}
function ico_cvgClickTouch(e) {
    if (e.type == 'click') {
        ico_cvgMouseDown(e);
    } else {
        ico_cvgMouseDown(e);
        e.preventDefault();
    }
}

function ico_hsnOver() {
    ico_hsn.state = 1;
    createjs.Ticker.addEventListener("tick", stage_hsn);
    htcv_icon_hsnOver();
}
function ico_hsnOut() {
    ico_hsn.state = 0;
    htcv_icon_hsnOut();
}
function ico_hsnMouseDown(e) {
    if (ico_hsn.state == 0) {
        ico_hsnOver();
    } else if (ico_hsn.state == 1) {
        ico_hsnOut();
        if (e.which == 0 || e.which == 1) {
            window.open('/Hoa-si-nhi.html', '_self');
        } else if (e.which == 2) {
            window.open('/Hoa-si-nhi.html', '_blank');
        }
    }
}
function ico_hsnClickTouch(e) {
    if (e.type == 'click') {
        ico_hsnMouseDown(e);
    } else {
        ico_hsnMouseDown(e);
        e.preventDefault();
    }
}

function ico_nhaOver() {
    ico_nha.state = 1;
    htcv_icon_nhaOver();
    createjs.Ticker.addEventListener("tick", stage_nha);
}
function ico_nhaOut() {
    ico_nha.state = 0;
    htcv_icon_nhaOut();
}
function ico_nhaMouseDown(e) {
    var islogin = jsonobj.header.is_login;
    if (ico_nha.state == 0) {
        ico_nhaOver();
    } else if (ico_nha.state == 1) {
        ico_nhaOut();
        if (e.which == 0 || e.which == 1) {
            if (islogin == 1) {
                window.open(jsonobj.main.avatar_link, '_self');
            } else {
                socnhi.showRegisterPopup();
            }
        } else if (e.which == 2) {
            if (islogin == 1) {
                window.open(jsonobj.main.avatar_link, '_blank');
            } else {
                socnhi.showRegisterPopup();
            }
        }
    }
}
function ico_nhaClickTouch(e) {
    if (e.type == 'click') {
        ico_nhaMouseDown(e);
    } else {
        ico_nhaMouseDown(e);
        e.preventDefault();
    }
}

function ico_fbOver() {
    ico_fb.state = 1;
    htcv_icon_fbOver();
}
function ico_fbOut() {
    ico_fb.state = 0;
    htcv_icon_fbOut();
}
function ico_fbMouseDown(e) {
    if (ico_fb.state == 0) {
        ico_fbOver();
    } else if (ico_fb.state == 1) {
        ico_fbOut();
        if (e.which == 0 || e.which == 1) {
            window.open('https://www.facebook.com/socnhi.com', '_self');
        } else if (e.which == 2) {
            window.open('https://www.facebook.com/socnhi.com', '_blank');
        }
    }
}
function ico_fbClickTouch(e) {
    if (e.type == 'click') {
        ico_fbMouseDown(e);
    } else {
        ico_fbMouseDown(e);
        e.preventDefault();
    }
}

$(document).on('touchstart', function (event) {
    if (!ico_ht.is(event.target)) {
        ico_ht.state = 0;
        ico_htOut();
    }
    if (!ico_ea.is(event.target)) {
        ico_ea.state = 0;
        ico_eaOut();
    }
    if (!ico_thtt.is(event.target)) {
        ico_thtt.state = 0;
        ico_thttOut();
    }
    if (!ico_bhn.is(event.target)) {
        ico_bhn.state = 0;
        ico_bhnOut();
    }
    if (!ico_blog.is(event.target)) {
        ico_blog.state = 0;
        ico_blogOut();
    }
    if (!ico_cahq.is(event.target)) {
        ico_cahq.state = 0;
        ico_cahqOut();
    }
    if (!ico_nsn.is(event.target)) {
        ico_nsn.state = 0;
        ico_nsnOut();
    }
    if (!ico_rtv.is(event.target)) {
        ico_rtv.state = 0;
        ico_rtvOut();
    }
    if (!ico_cvg.is(event.target)) {
        ico_cvg.state = 0;
        ico_cvgOut();
    }
    if (!ico_hsn.is(event.target)) {
        ico_hsn.state = 0;
        ico_hsnOut();
    }
    if (!ico_nha.is(event.target)) {
        ico_nha.state = 0;
        ico_nhaOut();
    }
    if (!ico_fb.is(event.target)) {
        ico_fb.state = 0;
        ico_fbOut();
    }
});