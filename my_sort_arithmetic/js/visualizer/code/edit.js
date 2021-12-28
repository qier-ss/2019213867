var code_selector = 0

function showcode(index) {
    $('.selector div').removeClass('selector_active')
    $('.selector div:eq(0)').addClass('selector_active')
    code_selector = index
    show("Java")
}

$('.selector div').click(function () {
    let index = $('.selector div').index(this)
    $('.selector div').removeClass('selector_active')
    $(this).addClass('selector_active')
    var no = ["Java", "JavaScript", "Python", "C/C++"]

    show(no[index])
})


function show(method_n) {
    $('.ace-scroller').html('')
    $('.ace-gutter').html('')


    var stack = []
    var arr_item
    if (code_selector === 0)
        arr_item = (SelectionSort[method_n]).split('\n')
    else if (code_selector === 1)
        arr_item = (BubbleSort[method_n]).split('\n')

    for (let num in arr_item) {
        let a = $("<div>" + arr_item[num] + "</div>")
        if (arr_item[num].charAt(arr_item[num].length - 1) === '{') {
            stack.push(num)
            $("<div>" + num + "</div>").appendTo('.ace-gutter')
        }
        else if (arr_item[num].charAt(arr_item[num].length - 1) === '}') {
            let begin = stack.pop()
            let parent = $("<div>" + num + "</div>")
            var s = new Show_Hide(begin, num)
            s.add($('.ace-gutter div').eq(begin))
            parent.appendTo('.ace-gutter')
        }
        else {
            $("<div>" + num + "</div>").appendTo('.ace-gutter')
        }
        a.appendTo('.ace-scroller')
    }


    $('.ace-scroller div').click(function () {
        $('.ace-scroller div').css("background", "  #f1f5fd")
        $(this).css("background", "rgb(0,0,0,0.1)")
    })
}

// var arr_item = (SelectionSort.Java).split('\n')
// for (var it of arr_item) {
//     $("<div>" + it + "</div>").appendTo('.ace-scroller')
// }
// for (var num in arr_item) {
//     $("<div>" + num + "</div>").appendTo('.ace-gutter')
// }

// $('.ace-scroller div').click(function () {
//     $('.ace-scroller div').css("background", "  #f1f5fd")
//     $(this).css("background", "rgb(0,0,0,0.1)")
// })