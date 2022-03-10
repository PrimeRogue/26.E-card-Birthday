let pressNext = document.querySelector(".press");
let pressBack = document.querySelector(".back");
let cardContent = document.querySelector(".card-content");
let boxsImg = document.querySelectorAll(".card2 .box .image .view ion-icon");
let cardWrap = document.querySelectorAll(".card-wrap");
let nextButton = document.querySelectorAll(".card-wrap .next");
let prevButton = document.querySelectorAll(".card-wrap .prev");
let h2span = document.querySelectorAll(".card-wrap h2 span");

function playAudio(url) {
    new Audio(url).play();
}
window.addEventListener("load", function() {
    // Khi nhấn vào Button để mở card
    pressNext.addEventListener("click", function(e) {
        playAudio("sound/click.mp3");
        document.querySelector(".card1").classList.toggle("show");
        document.querySelector(".card2").classList.toggle("show");
        cardContent.style.height = "460px";
        cardContent.style.width = "366px";

    })

    // Khi nhấn vào Button để quay về card
    pressBack.addEventListener("click", function(e) {
        playAudio("sound/click.mp3");
        cardWrap.forEach(function(it) {
            it.classList.remove("active");
        })
        document.querySelector(".card1").classList.toggle("show");
        document.querySelector(".card2").classList.toggle("show");
    })

    // Khi nhấn vào từng box ảnh
    boxsImg.forEach(item => item.addEventListener("click", function(e) {
        playAudio("sound/click.mp3");
        nextButton.forEach(function(it) {
            it.style.display = "flex";
        })
        prevButton.forEach(function(it) {
            it.style.display = "none";
        })
        cardWrap.forEach(function(it) {
            if (it.classList.contains("active")) it.classList.remove("active");
            if (e.target.dataset.num == it.dataset.num) {
                it.classList.toggle("active");
            }
        })
    }))

    nextButton.forEach(item => item.addEventListener("click", function(e) {
        playAudio("sound/click2.mp3");
        item.style.display = "none";
        h2span.forEach(function(it) {
            if (e.target.dataset.num == it.dataset.num && it.dataset.num == 1) {
                it.textContent = "Vậy nên hãy lun trân trọng từng khoảnh khắc đáng nhớ của mình.";
            } else if (e.target.dataset.num == it.dataset.num && it.dataset.num == 2) {
                it.textContent = "Nhưng sự vui vẻ hoà đồng thì có thể xoá bỏ khoảng cách đó. Vậy nên hãy luôn giữ nụ cười trên mui.";
            }
        })
        prevButton.forEach(function(it) {
            it.style.display = "flex";
        })
    }))
    prevButton.forEach(item => item.addEventListener("click", function(e) {
        playAudio("sound/click2.mp3");
        item.style.display = "none";
        h2span.forEach(function(it) {
            if (e.target.dataset.num == it.dataset.num && it.dataset.num == 1) {
                it.textContent = "Khi bạn già đi, có 3 điều sẽ xảy ra. Đầu tiên, là trí nhớ của bạn sẽ dần mất đi. Và tất nhiên bạn sẽ quên toẹt 2 điều kia :D";

            } else if (e.target.dataset.num == it.dataset.num && it.dataset.num == 2) {
                it.textContent = "Trong từ điển tiếng Anh, 'Smiles' là từ xa nhất vì giữa 'S' và 's' là 1 mile :).";
            }
        })
        nextButton.forEach(function(it) {
            it.style.display = "flex";
        })
    }))

    // let arrImg = ["./images/Img1.png", "./images/Img2.png", "./images/Img3.png", "./images/Img4.png", "./images/Img5.png", "./images/Img6.png", "./images/Img7.png"]

    let arrImg = ["./images/Img1.png", "./images/Img2.png", "./images/Img3.png", "./images/Img4.png", "./images/Img5.png", "./images/Img6.png", "./images/Img7.png"]
    document.body.addEventListener("click", function(e) {
        let galleryImg = document.querySelector(".slider-items img").getAttribute("src");
        let index = arrImg.findIndex(
            item => item === galleryImg
        )
        console.log(e.target)
        if (e.target.matches(".gallery-next ion-icon")) {
            playAudio("sound/click2.mp3");
            index = index + 1;
            if (index > arrImg.length - 1) index = 0;
            document.querySelector(".slider-items img").setAttribute("src", arrImg[index]);
        }
        if (e.target.matches(".gallery-prev ion-icon")) {
            playAudio("sound/click2.mp3");
            index = index - 1;
            if (index < 0) index = arrImg.length - 1;
            document.querySelector(".slider-items img").setAttribute("src", arrImg[index]);
        }
    })
})