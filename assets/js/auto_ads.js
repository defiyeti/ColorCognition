var ua = navigator.userAgent;
var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
    ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/),
    iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
    android = ua.match(/(Android);?[\s\/]+([\d.]+)?/),
    wp = ua.match(/Windows Phone ([\d.]+)/),
    tablet = ua.match(/Tablet/),
    touch = ua.match(/Touch/),
    mobile = ua.match(/Mobile/),
    phone = ua.match(/Phone/);
var is_mobile = ipad || ipod || iphone || android || wp || tablet || touch || mobile || phone;
function show_ad() {
    if (true) {
        var big_ad = document.body.clientWidth > 468;
        if (is_mobile && !big_ad) {
            window.google_ad_client = "ca-pub-9015222295118017";
            window.google_ad_slot = "3031932430";
            window.google_ad_width = 320;
            window.google_ad_height = 50;
        } else {
            window.google_ad_client = "ca-pub-9015222295118017";
            window.google_ad_slot = "3516062839";
            window.google_ad_width = 728;
            window.google_ad_height = 90;
        }
        document.write("<script src='http://pagead2.googlesyndication.com/pagead/show_ads.js'><\/script><br/>");
    }
}
function show_android_app() {
    if (android) {
        document.write("<a href='https://play.google.com/store/apps/details?id=com.ioxapp.game.ragegame'><img src='http://m.ioxapp.com/img/badge_android.png'/></a>");
    }
}
function show_facebook_link() {
    if (true) {
        document.write("<a href='https://www.facebook.com/rageminigame'><img src='http://m.ioxapp.com/img/facebook.png'/></a>");
    }
}
