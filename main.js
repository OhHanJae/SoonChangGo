document.addEventListener('click', function (event) {
    var targetElement = event.target;
    if (targetElement.matches('.dropdown-item')) {
        event.preventDefault();
        var target = document.querySelector(targetElement.getAttribute('href'));
        var offset = 200; // 스크롤할 오프셋 값(조정 가능)
        var targetPos = target.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: targetPos - offset,
            behavior: 'smooth'
        });
    }
});

// 앵커 클릭 시 스크롤 위치 조정
document.querySelector('a.dropdown-item[href^="#"]').addEventListener('click', function (e) {
    e.preventDefault();

    var target = document.querySelector(this.getAttribute('href'));
    var offset = 200; // 스크롤할 오프셋 값(조정 가능)
    var targetPos = target.getBoundingClientRect().top + window.pageYOffset;

    // 모바일 환경에서의 스크롤 방향 확인
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
        offset = -offset; // 모바일 환경에서는 offset 값을 반대로 설정
    }

    window.scrollTo({
        top: targetPos - offset,
        behavior: 'smooth'
    });
});
