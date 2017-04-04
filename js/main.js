function slider(className){
    var self = this;

    self.main = document.getElementsByClassName("icons")[0];
    self.main.children[1].addEventListener("click", next);
    
    self.margin = 0;
    self.prev = 0;

    self.slide_div_length = document.getElementsByClassName("slide")[0].clientWidth;
    self.slider_length = document.querySelectorAll(".slides .slide").length;

    document.getElementsByClassName("slides")[0].style.transition = "all 0.5s";

    function next() {
        self.prev++;
        self.self.margin -= self.slide_div_length + 20;
        self.slides_div_margin = document.getElementsByClassName("slides")[0].style.marginLeft = self.margin + 'px';

        if (self.prev >= self.slider_length - 4) {
            self.margin = 0;
            self.slides_div_margin = document.getElementsByClassName("slides")[0].style.marginLeft = self.margin + 'px';
            self.prev = 0;
        }
    }



    self.main.children[0].addEventListener("click", previous);

    function previous() {
        self.prev--;
        self.margin += self.slide_div_length + 20;
        self.slides_div_margin = document.getElementsByClassName("slides")[0].style.marginLeft = self.margin + 'px';

        if (self.prev <= 0) {
            self.margin = -(self.slide_div_length + 20) * 4;
            self.prev = 5;
            self.slides_div_margin = document.getElementsByClassName("slides")[0].style.marginLeft = self.margin + 'px';
        }
    }
}



















// var main = document.getElementsByClassName("icons")[0];
//     main.children[1].addEventListener("click", next);
//     // var p = document.getElementsByClassName("slide")[0];
//     // var style = window.getComputedStyle(p).margin
//     var margin = 0;
//     var prev = 0;

//     var slide_div_length = document.getElementsByClassName("slide")[0].clientWidth; // 1 slide divin width -in olcur
//     var slider_length = document.querySelectorAll(".slides .slide").length; // bu slides divin icinde nece dene slide div oldugun qaytariri yeni 9

//     document.getElementsByClassName("slides")[0].style.transition = "all 0.5s"; // bu ise transition bildiyiimiz kimi

//     function next() {
//         prev++;
//         console.log("next" + prev);
//         margin -= slide_div_length + 20; // burada divin olcusu + margin qeder cixmasi ucun yazdim margini-de "slide_div_length" kimi goturmek olardi
//         var slides_div_margin = document.getElementsByClassName("slides")[0].style.marginLeft = margin + 'px'; //her click-liyende slides divi-i hereket edir lefte dogru
//         console.log(slides_div_margin);

//         if (prev >= slider_length - 4) {
//             margin = 0;
//             slides_div_margin = document.getElementsByClassName("slides")[0].style.marginLeft = margin + 'px'; //her click-liyende slides divi-i hereket edir lefte dogru
//             prev = 0;
//         }
//     }



//     main.children[0].addEventListener("click", previous);

//     function previous() {
//         prev--;
//         margin += slide_div_length + 20;
//         var slides_div_margin = document.getElementsByClassName("slides")[0].style.marginLeft = margin + 'px'; //her click-liyende slides divi-i hereket edir lefte dogru
//         console.log("prev" + prev);

//         if (prev <= 0) {
//             margin = -(slide_div_length + 20) * 4;
//             console.log(margin);
//             prev = 5;
//             var slides_div_margin = document.getElementsByClassName("slides")[0].style.marginLeft = margin + 'px'; //her click-liyende slides divi-i hereket edir lefte dogru
//         }
//     }