function showmain(index) {
    $('.main').empty()
    var head1 = "";
    var p = "";
    var head2 = "Performance";
    var div = [];
    var a = "";
    var stable, in_place;
    switch (index) {
        case 0:
            head1 = "How Selection Sort works"
            p = "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping adjacent elements if they are in the wrong order. This procedure is repeated until no swaps are required, indicating that the list has been sorted."
            div.push("N<sup>2</sup>")
            div.push("N<sup>2</sup>")
            div.push("N<sup>2</sup>")
            div.push("1")
            stable = false
            in_place = true
            a = "https://www.geeksforgeeks.org/selection-sort/"
            break;
        case 1:
            head1 = "How Bubble Sort works"
            p = "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping adjacent elements if they are in the wrong order. This procedure is repeated until no swaps are required, indicating that the list has been sorted."
            div.push("N<sup>2</sup>")
            div.push("N<sup>2</sup>")
            div.push("N")
            div.push("1")
            stable = true
            in_place = true
            a = "https://www.geeksforgeeks.org/bubble-sort/"
            break;
    }
    $("<header>" + head1 + "</header>").appendTo(".main")
    $("<p>" + p + "</p>").appendTo(".main")
    $("<header>" + head2 + "</header>").appendTo(".main")
    var perfor = $("<div class='performance' </div>")
    perfor.appendTo(".main")
    $("<p>" + "Assuming N is the size of array" + "</p>").appendTo(perfor)
    var row1 = $("<div class='row-container-one'></div>").appendTo(perfor)
    var row2 = $("<div class='row-container-two'></div>").appendTo(perfor)
    $("<div class='text'><p>Worst time complexity</p><p>Average time complexity</p><p>Best time complexity</p><p>Worst space complexity</p></div>").appendTo(row1)
    var con = $("<div class='complexity'></div>").appendTo(row1)
    $("<p>O(" + div[0] + ")</p>").appendTo(con)
    $("<p>θ(" + div[1] + ")</p>").appendTo(con)
    $("<p>Ω(" + div[2] + ")</p>").appendTo(con)
    $("<p>O(" + div[3] + ")</p>").appendTo(con)

    var pic1 = $("<div class='typeWithIcon'></div>").appendTo(row2)
    var pic2 = $("<div class='typeWithIcon'></div>").appendTo(row2)
    if (stable === false)
        $("<p>Stable</p><svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 512 512' color='#FF4E4E' height='25' width='25' xmlns='http://www.w3.org/2000/svg' style='color: rgb(255, 78, 78);'><path d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'></path></svg>").appendTo(pic1)
    else
        $("<p>Stable</p><svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 512 512' color='#11C2C9' height='25' width='25' xmlns='http://www.w3.org/2000/svg' style='color: rgb(17, 194, 201);'><path d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'></path></svg>").appendTo(pic1)

    if (in_place === false)
        $("<p>In-place</p><svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 512 512' color='#FF4E4E' height='25' width='25' xmlns='http://www.w3.org/2000/svg' style='color: rgb(255, 78, 78);'><path d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'></path></svg>").appendTo(pic2)
    else
        $("<p>In-place</p><svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 512 512' color='#11C2C9' height='25' width='25' xmlns='http://www.w3.org/2000/svg' style='color: rgb(17, 194, 201);'><path d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'></path></svg>").appendTo(pic2)

    $("<a href=" + a + " target='_blank'>" + "Click for more info" + "</a>").appendTo(".main")
}