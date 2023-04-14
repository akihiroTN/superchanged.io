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
      $("fadeInDown").css("display", "none");
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
      $("fadeInDown").css("display", "none");
      $(this).removeClass("fadeInDown");
    }
  });
});

$("#animation3").css("visibility", "hidden");
$(window).scroll(function () {
  var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
  $("#animation3").each(function () {
    var targetPosition = $(this).offset().top;
    if (topWindow > targetPosition - windowHeight) {
      $(this).addClass("fadeInDown");
    } else {
      //左から右へ表示するクラスを取り除く
      $("fadeInDown").css("display", "none");
      $(this).removeClass("fadeInDown");
    }
  });
});

$("#animation4").css("visibility", "hidden");
$(window).scroll(function () {
  var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
  $("#animation4").each(function () {
    var targetPosition = $(this).offset().top;
    if (topWindow > targetPosition - windowHeight) {
      $(this).addClass("fadeInDown");
    } else {
      $("fadeInDown").css("display", "none");
      //左から右へ表示するクラスを取り除く
      $(this).removeClass("fadeInDown");
    }
  });
});

$("#animation5").css("visibility", "hidden");
$(window).scroll(function () {
  var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
  $("#animation5").each(function () {
    var targetPosition = $(this).offset().top;
    if (topWindow > targetPosition - windowHeight) {
      $(this).addClass("fadeInDown");
    } else {
      $("fadeInDown").css("display", "none");
      //左から右へ表示するクラスを取り除く
      $(this).removeClass("fadeInDown");
    }
  });
});

$("#animation6").css("visibility", "hidden");
$(window).scroll(function () {
  var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
  $("#animation6").each(function () {
    var targetPosition = $(this).offset().top;
    if (topWindow > targetPosition - windowHeight) {
      $(this).addClass("fadeInDown");
    } else {
      $("fadeInDown").css("display", "none");
      //左から右へ表示するクラスを取り除く
      $(this).removeClass("fadeInDown");
    }
  });
});

$("#animation7").css("visibility", "hidden");
$(window).scroll(function () {
  var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
  $("#animation7").each(function () {
    var targetPosition = $(this).offset().top;
    if (topWindow > targetPosition - windowHeight) {
      $(this).addClass("fadeInDown");
    } else {
      $("fadeInDown").css("display", "none");
      //左から右へ表示するクラスを取り除く
      $(this).removeClass("fadeInDown");
    }
  });
});

$("#animation8").css("visibility", "hidden");
$(window).scroll(function () {
  var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
  $("#animation8").each(function () {
    var targetPosition = $(this).offset().top;
    if (topWindow > targetPosition - windowHeight) {
      $(this).addClass("fadeInDown");
    } else {
      $("fadeInDown").css("display", "none");
      //左から右へ表示するクラスを取り除く
      $(this).removeClass("fadeInDown");
    }
  });
});

$("#animation9").css("visibility", "hidden");
$(window).scroll(function () {
  var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
  $("#animation9").each(function () {
    var targetPosition = $(this).offset().top;
    if (topWindow > targetPosition - windowHeight) {
      $(this).addClass("fadeInDown");
    } else {
      $("fadeInDown").css("display", "none");
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
