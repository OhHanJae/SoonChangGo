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