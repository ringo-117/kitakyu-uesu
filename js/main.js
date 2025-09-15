// JavaScript Document
// =============================
// ハンバーガーメニューとスクロール制御
// =============================
// {
//   const btn = document.querySelector('.btn');
//   if (btn) {
//     const container = document.querySelector('.container');
//     const header   = document.querySelector('.header');
//     const logo     = document.querySelector('.logo-box');

//     btn.addEventListener('click', () => {
//       btn.classList.toggle('active');
//       container?.classList.toggle('active');
//       header?.classList.toggle('active');
//       logo?.classList.toggle('active');

//       // ボディのスクロール制御
//       const bodyStyle = document.body.style;
//       if (bodyStyle.overflow === 'hidden') {
//         bodyStyle.overflow = '';
//         bodyStyle.height   = '';
//       } else {
//         bodyStyle.overflow = 'hidden';
//         bodyStyle.height   = '100%';
//       }
//     });

//     // メニューリンクをクリックしたらメニューを閉じる（jQuery）
//     $('#nav-list a[href]').on('click', () => {
//       $('.btn').trigger('click');
//     });
//   }
// }


{
  const btn = document.querySelector('.btn');
  if (btn) {
    const container = document.querySelector('.container');
    const header    = document.querySelector('.header');
    const cover     = document.querySelector('.cover');
    const logo      = document.querySelector('.header .logo-box');
    const telBox = document.getElementById('telBox');

    function toggleMenu(forceClose = false) {
      const isOpen = btn.classList.contains('active');

      if (forceClose || isOpen) {
        // 閉じる処理
        btn.classList.remove('active');
        container?.classList.remove('active');
        header?.classList.remove('active');
        logo?.classList.remove('active');

        // ふわっと非表示開始
        cover?.classList.remove('active');
        document.body.style.overflow = '';
        document.body.style.height = '';

        telBox?.classList.remove('hide');

        // アニメーション後に cover を display: none に
        if (cover) {
          setTimeout(() => {
            if (!cover.classList.contains('active')) {
              cover.style.display = 'none';
            }
          }, 500); // ← CSSと同じ秒数
        }

      } else {
        // 開く処理
        btn.classList.add('active');
        container?.classList.add('active');
        header?.classList.add('active');
        logo?.classList.add('active');

        telBox?.classList.add('hide');

        // 表示してからふわっと出す
        if (cover) {
          cover.style.display = 'block';
          setTimeout(() => {
            cover.classList.add('active');
          }, 10); // 少し遅らせるとtransitionが効く
        }

        document.body.style.overflow = 'hidden';
        document.body.style.height = '100%';
      }
    }


    btn.addEventListener('click', () => {
      toggleMenu();
    });

    cover?.addEventListener('click', () => {
      toggleMenu(true);
    });

    document.querySelectorAll('#nav-list a[href]').forEach(link => {
      link.addEventListener('click', () => {
        toggleMenu(true);
      });
    });
  }
}



// モーダル
document.addEventListener('DOMContentLoaded', () => {
  const modalBg = document.querySelector('.modal-bg');
  const modals = document.querySelectorAll('.modal-container');
  // const modalClose = document.querySelector('.modal-close');

  // 開く処理
  document.querySelectorAll('.modal-open').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const targetModal = document.getElementById(targetId);
      if (targetModal) {
        targetModal.classList.add('active');
        modalBg.classList.add('active');
        // modalClose.classList.add('active');
        document.body.style.overflow = 'hidden'; // ← スクロール禁止
      }
    });
  });

  // 閉じる処理（背景クリック）
  modalBg.addEventListener('click', () => {
    closeModal();
  });
  // modalClose.addEventListener('click', () => {
  //   closeModal();
  // });

  // 閉じる処理（ボタン）
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      closeModal();
    });
  });

  // モーダル外クリックで閉じる
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      // modal-scroll の中身をクリックしたときは閉じない
      if (e.target === modal) {
        closeModal();
      }
    });
  });

  // 共通の閉じる関数
  function closeModal() {
    modals.forEach(m => m.classList.remove('active'));
    modalBg.classList.remove('active');
    document.body.style.overflow = ''; // ← スクロール再開
  }
});


// =============================
// ロード時：トップセクションをフェードアップ
// =============================
// window.addEventListener('DOMContentLoaded', () => {
//   const secTop = document.querySelector('.sec-top');
//   if (secTop) {
//     secTop.classList.add('fade-left');
//   }
// });

// =============================
// スクロール出現アニメーション
// =============================
// .fade : その場でフェード
// .fade-up  : 下からフェードアップ
// .zoom-img: 拡大→通常サイズ
// .fade-right : 右からフェードイン
// .img-wrap　:　左から表示
// 追加したいクラスがあれば selector に追記
// =============================
document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.fade, .fade-up, .zoom-img, .fade-right, .img-wrap');
  if (targets.length === 0) return; // 対象がなければ何もしない

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target); // 一度表示されたら監視終了
      }
    });
  }, {
    threshold: 0.2 // 20% 見えたら発火
  });

  targets.forEach(target => observer.observe(target));
});