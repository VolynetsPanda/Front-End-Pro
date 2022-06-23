$(document).ready(function (){
    // const title = $('h1')
    // console.log(title.text())
    // title.css({
    //     color: 'red',
    //     fontSize: 50
    // })
    // title.addClass('test')
    // console.log(title.attr('class', 'aaaaa'))
    // $('.btn').on('click', function (e){
        // console.log('$(this) => ', $(this))
        // console.log('this => ', this)
    //     $('.btn').removeClass('active')
    //     $(this).addClass('active')
    //     $(this).animate({
    //         marginLeft: 100
    //     }, {
    //         duration: 3000,
    //         complete: function (){
    //             $(this).css({
    //                 background: 'red'
    //             })
    //         }
    //     })
    //
    // })
    const opt = {
        rot: 0, // ячейка
        section: 12, // к-во ячеек
        item: 360 / 12,
        proc: 0,
        score: 0
    }
    $('.press').on('click', function (e){
        e.preventDefault()
        let dok = 12-opt.rot;
        opt.rot = Math.floor(Math.random() * opt.section + 1 )
        let col = Math.floor((Math.random() * 2) + 4)
        opt.proc += (opt.rot + col*12 + dok) * 30
        $('.desk').animate({  textIndent: opt.proc }, {
            duration: 5000,
            complete: function() {
                switch(opt.rot){
                    case 3:
                    case 5:
                    case 11: opt.score+=100; break;
                    case 1:
                    case 10:
                    case 7: {
                        //console.log('Действие');
                        let a = Math.floor((Math.random() * 10) + 1);
                        let b = Math.floor((Math.random() * 10) + 1);
                        let answear = prompt(a + '*' + b);
                        if (answear == (a*b)) opt.score+=150;
                    }; break;
                    case 2:
                    case 9: opt.score+=150; break;
                    case 6:
                    case 12: opt.score+=200; break;
                    case 4:
                    case 8: {
                        alert('Вы проиграли');
                        opt.score=0;
                    }; break;
                }
                $('.score').text(opt.score)
            },
            easing : 'swing',
            step: function(now,fx) {
                $(this).css('-webkit-transform','rotate('+now+'deg)');
            }
        })
    })
})
