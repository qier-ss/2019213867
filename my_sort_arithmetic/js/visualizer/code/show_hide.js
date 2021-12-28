class Show_Hide {
    constructor(begin, end) {
        this.begin = begin
        this.end = end
        this.status = 0
        this.myclick = this.myclick.bind(this);
    }

    add(parent) {
        var span = $('<span></span>')
        span.bind('click', this.myclick)
        span.appendTo(parent)

        // var span = document.createElement('span')
        // var getChild = document.getElementsByClassName("ace-gutter")[0].children[this.begin];
        // getChild.appendChild(span)

        // span.addEventListener("click", this.myclick)
    }

    myclick() {
        if (this.status === 0) {
            this.status = 1
            let begin = parseInt(this.begin)
            let end = parseInt(this.end)
            // console.log(typeof this.begin)
            // let arr = [1, 2, 3, 4]
            // for (let v in arr)
            //     console.log(typeof v)   //类型为string

            $('.ace-gutter div').eq(begin).find('span').addClass('span-down')

            for (let i = begin + 1; i < end; i++) {
                $('.ace-gutter div').eq(i).addClass('hidden')
                $('.ace-scroller div').eq(i).addClass('hidden')
            }
        } else if (this.status === 1) {
            this.status = 0
            let begin = parseInt(this.begin)
            let end = parseInt(this.end)
            $('.ace-gutter div').eq(begin).find('span').removeClass('span-down')

            for (let i = begin + 1; i < end; i++) {
                $('.ace-gutter div').eq(i).removeClass('hidden')
                $('.ace-scroller div').eq(i).removeClass('hidden')
            }
        }
    }
}