//====ロード後のアニメーションを隠す===
window.onload = function () {
  const spinner = document.getElementById("loading");
  const bc = document.getElementById("bc");
  const br = document.getElementById("br");
  const be = document.getElementById("be");
  const ba = document.getElementById("ba");
  const bt = document.getElementById("bt");
  const bi = document.getElementById("bi");
  const bv = document.getElementById("bv");
  const bve = document.getElementById("bve");
  const bpls = document.getElementById("bpls");
  const bplsa = document.getElementById("bplsa");
  var page_url = location.href;
  if (
    page_url === "https://koyo.ink/" ||
    page_url === "https://koyo.ink/#ourbusiness"
  ) {
    bc.classList.add("c");
    br.classList.add("r");
    be.classList.add("e");
    ba.classList.add("a");
    bt.classList.add("t");
    bi.classList.add("i");
    bv.classList.add("v");
    bve.classList.add("ve");
    bpls.classList.add("pls");
    bplsa.classList.add("pls");
  }
  spinner.classList.add("loaded");
  //====ロード後のスクロールの位置をトップに持ってくる===
  $(function () {
    if (/#/.test(page_url)) {
      return;
    }
    $("html,body").animate({ scrollTop: 0 }, "1");
  });
  slideAnime();
};
function slideAnime() {
  //====左に動くアニメーションここから===
  $(".leftAnime").each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      //左から右へ表示するクラスを付与
      //テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
      $(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
      $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft"); //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
    } else {
      //左から右へ表示するクラスを取り除く
      $(this).removeClass("slideAnimeLeftRight");
      $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  slideAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
  slideAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述

$("#animation").css("visibility", "hidden");
$(window).scroll(function () {
  var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
  $("#animation").each(function () {
    var targetPosition = $(this).offset().top;
    if (topWindow > targetPosition - windowHeight) {
      $(this).addClass("fadeInDown");
    } else {
      //左から右へ表示するクラスを取り除く
      $(this).removeClass("fadeInDown");
    }
  });
});

$("#animation2").css("visibility", "hidden");
$(window).scroll(function () {
  var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
  $("#animation2").each(function () {
    var targetPosition = $(this).offset().top;
    if (topWindow > targetPosition - windowHeight) {
      $(this).addClass("fadeInDown");
    } else {
      //左から右へ表示するクラスを取り除く
      $(this).removeClass("fadeInDown");
    }
  });
});

// TextTypingというクラス名がついている子要素（span）を表示から非表示にする定義
function TextTypingAnime() {
  $(".TextTyping").each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var thisChild = "";
    if (scroll >= elemPos - windowHeight) {
      thisChild = $(this).children(); //spanタグを取得
      //spanタグの要素の１つ１つ処理を追加
      thisChild.each(function (i) {
        var time = 100;
        //時差で表示する為にdelayを指定しその時間後にfadeInで表示させる
        $(this)
          .delay(time * i)
          .fadeIn(time);
      });
    } else {
      thisChild = $(this).children();
      thisChild.each(function () {
        $(this).stop(); //delay処理を止める
        $(this).css("display", "none"); //spanタグ非表示
      });
    }
  });
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  TextTypingAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
  //spanタグを追加する
  var element = $(".TextTyping");
  element.each(function () {
    var text = $(this).html();
    var textbox = "";
    text.split("").forEach(function (t) {
      if (t !== " ") {
        textbox += "<span>" + t + "</span>";
      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });

  TextTypingAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述
