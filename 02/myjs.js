window.onload = function () {
    var obj = document.getElementsByClassName("class");//先得到所有的div标记
    var info = document.getElementsByClassName("info");

    for (var i = 0; i < obj.length; i++) {
        var getObj = obj[i];
        let div = document.createElement("div"); //创建一个li标签
        if (obj[i].id == 'no1') {
            div.className = 'content';
            div.innerHTML = '<h3><br>Windows程序设计</h3><p> <div class="glyphicon glyphicon-time" style="color:rgb(81, 212, 29);margin-right:3%"></div><div class="glyphicon glyphicon-time" style="color:rgb(81, 212, 29);margin-right:3%"></div>周一1-2节</p><p><div class="glyphicon glyphicon-user" style="color:rgb(81, 212, 29);margin-right:4%"></div><i>李源</i></p><p><div class="glyphicon glyphicon-map-marker" style="color:rgba(4, 129, 246, 0.815);margin-right:4%"></div><u>n202</u></p>';
        }
        else if (obj[i].id == 'no2') {
            div.className = 'content';
            div.innerHTML = '<h3><br>微机原理与接口技术</h3><p><div class="glyphicon glyphicon-time" style="color:rgb(81, 212, 29);margin-right:3%"></div>周一3-4节</p><p><div class="glyphicon glyphicon-user" style="color:rgb(81, 212, 29);margin-right:4%"></div><i>金汉均</i></p><p><div class="glyphicon glyphicon-map-marker" style="color:rgba(4, 129, 246, 0.815);margin-right:4%"></div><u>n112</u></p>';
        }
        else if (obj[i].id == 'no4') {
            div.className = 'content';
            div.innerHTML = '<h3><br>专业英语</h3><p><div class="glyphicon glyphicon-time" style="color:rgb(81, 212, 29);margin-right:3%"></div>周一7-8节</p><p><div class="glyphicon glyphicon-user" style="color:rgb(81, 212, 29);margin-right:4%"></div><i>赵卫中</i></p><p><div class="glyphicon glyphicon-map-marker" style="color:rgba(4, 129, 246, 0.815);margin-right:4%"></div><u>n112</u></p>';
        }
        else if (obj[i].id == 'no7') {
            div.className = 'content';
            div.innerHTML = '<h3><br>(双)Web程序设计</h3><p><div class="glyphicon glyphicon-time" style="color:rgb(81, 212, 29);margin-right:3%"></div>周二1-2节</p><p><div class="glyphicon glyphicon-user" style="color:rgb(81, 212, 29);margin-right:4%"></div><i>涂新辉</i></p><p><div class="glyphicon glyphicon-map-marker" style="color:rgba(4, 129, 246, 0.815);margin-right:4%"></div><u>n108</u></p><br><hr><h3><br>(单)编译原理</h3><p><div class="glyphicon glyphicon-time" style="color:rgb(81, 212, 29);margin-right:3%"></div>周二1-2节</p><p><div class="glyphicon glyphicon-user" style="color:rgb(81, 212, 29);margin-right:4%"></div><i>杨青</i></p><p><div class="glyphicon glyphicon-map-marker" style="color:rgba(4, 129, 246, 0.815);margin-right:4%"></div><u>n223</u></p>';
        }
        else if (obj[i].id == 'no8') {
            div.className = 'content';
            div.innerHTML = '<h3><br>文献信息检索与利用</h3><p><div class="glyphicon glyphicon-time" style="color:rgb(81, 212, 29);margin-right:3%"></div>周二3-4节</p><p><div class="glyphicon glyphicon-user" style="color:rgb(81, 212, 29);margin-right:4%"></div><i>徐晨琛</i></p><p><div class="glyphicon glyphicon-map-marker" style="color:rgba(4, 129, 246, 0.815);margin-right:4%"></div><u>n307</u></p>';
        }
        else if (obj[i].id == 'no9') {
            div.className = 'content';
            div.innerHTML = '<h3><br>色彩信息魅力</h3><p><div class="glyphicon glyphicon-time" style="color:rgb(81, 212, 29);margin-right:3%"></div>周二5-6节</p><p><div class="glyphicon glyphicon-user" style="color:rgb(81, 212, 29);margin-right:4%"></div><i>欧阳丽莎</i></p><p><div class="glyphicon glyphicon-map-marker" style="color:rgba(4, 129, 246, 0.815);margin-right:4%"></div><u>8412</u></p>';
        }
        else if (obj[i].id == 'no9') {
            div.className = 'content';
            div.innerHTML = '<h3><br>视觉信息设计</h3><p><div class="glyphicon glyphicon-time" style="color:rgb(81, 212, 29);margin-right:3%"></div>周二7-8节</p><p><div class="glyphicon glyphicon-user" style="color:rgb(81, 212, 29);margin-right:4%"></div><i>欧阳丽莎</i></p><p><div class="glyphicon glyphicon-map-marker" style="color:rgba(4, 129, 246, 0.815);margin-right:4%"></div><u>8412</u></p>';
        }
        else if (obj[i].id == 'no14') {
            div.className = 'content';
            div.innerHTML = '<h3><br>操作系统原理</h3><p><div class="glyphicon glyphicon-time" style="color:rgb(81, 212, 29);margin-right:3%"></div>周三3-4节</p><p><div class="glyphicon glyphicon-user" style="color:rgb(81, 212, 29);margin-right:4%"></div><i>张茂元</i></p><p><div class="glyphicon glyphicon-map-marker" style="color:rgba(4, 129, 246, 0.815);margin-right:4%"></div><u>n218</u></p>';
        }
        else if (obj[i].id == 'no16') {
            div.className = 'content';
            div.innerHTML = '<h3><br>(双)Windows程序设计</h3><p><div class="glyphicon glyphicon-time" style="color:rgb(81, 212, 29);margin-right:3%"></div>周三7-8节</p><p><div class="glyphicon glyphicon-user" style="color:rgb(81, 212, 29);margin-right:4%"></div><i>李源</i></p><p><div class="glyphicon glyphicon-map-marker" style="color:rgba(4, 129, 246, 0.815);margin-right:4%"></div><u>n108</u></p><br><hr><h3><br>(单)微机原理与接口技术</h3><p>周三7-8节</p><p><div class="glyphicon glyphicon-user" style="color:rgb(81, 212, 29);margin-right:4%"></div><i>金汉均</i></p><p><div class="glyphicon glyphicon-map-marker" style="color:rgba(4, 129, 246, 0.815);margin-right:4%"></div><u>n201</u></p>';
        }
        else if (obj[i].id == 'no17') {
            div.className = 'content';
            div.innerHTML = '<h3><br>本科生科研方法训练</h2><p><div class="glyphicon glyphicon-time" style="color:rgb(81, 212, 29);margin-right:3%"></div>周三9-10节</p><p><div class="glyphicon glyphicon-user" style="color:rgb(81, 212, 29);margin-right:4%"></div><i>徐一骄</i></p><p><div class="glyphicon glyphicon-map-marker" style="color:rgba(4, 129, 246, 0.815);margin-right:4%"></div><u>8208</u></p>';
        }
        else if (obj[i].id == 'no20') {
            div.className = 'content';
            div.innerHTML = '<h3><br>&nbsp;习近平新时代中国特色社会主义概论&nbsp;</h2><p><div class="glyphicon glyphicon-time" style="color:rgb(81, 212, 29);margin-right:3%"></div>周四3-4节</p><p><div class="glyphicon glyphicon-user" style="color:rgb(81, 212, 29);margin-right:4%"></div><i>吕惠东</i></p><p><div class="glyphicon glyphicon-map-marker" style="color:rgba(4, 129, 246, 0.815);margin-right:4%"></div><u>n223</u></p>';
        }
        else if (obj[i].id == 'no21') {
            div.className = 'content';
            div.innerHTML = '<h3><br>Web程序设计</h3><p><div class="glyphicon glyphicon-time" style="color:rgb(81, 212, 29);margin-right:3%"></div>周四5-6节</p><p><div class="glyphicon glyphicon-user" style="color:rgb(81, 212, 29);margin-right:4%"></div><i>涂新辉</i></p><p><div class="glyphicon glyphicon-map-marker" style="color:rgba(4, 129, 246, 0.815);margin-right:4%"></div><u>n108</u></p>';
        }
        else if (obj[i].id == 'no22') {
            div.className = 'content';
            div.innerHTML = '<h3><br>编译原理</h3><p><div class="glyphicon glyphicon-time" style="color:rgb(81, 212, 29);margin-right:3%"></div>周四7-8节</p><p><div class="glyphicon glyphicon-user" style="color:rgb(81, 212, 29);margin-right:4%"></div><i>杨青</i></p><p><div class="glyphicon glyphicon-map-marker" style="color:rgba(4, 129, 246, 0.815);margin-right:4%"></div><u>n223</u></p>';
        }
        else if (obj[i].id == 'no25') {
            div.className = 'content';
            div.innerHTML = '<h3><br>操作系统原理</h3><p><div class="glyphicon glyphicon-time" style="color:rgb(81, 212, 29);margin-right:3%"></div>周五1-2节</p><p><div class="glyphicon glyphicon-user" style="color:rgb(81, 212, 29);margin-right:4%"></div><i>张茂元</i></p><p><div class="glyphicon glyphicon-map-marker" style="color:rgba(4, 129, 246, 0.815);margin-right:4%"></div><u>n218</u></p>';
        }
        else if (obj[i].id == 'no26') {
            div.className = 'content';
            div.innerHTML = '<h3><br>应用写作与能力</h3><p><div class="glyphicon glyphicon-time" style="color:rgb(81, 212, 29);margin-right:3%"></div>周五3-4节</p><p><div class="glyphicon glyphicon-user" style="color:rgb(81, 212, 29);margin-right:4%"></div><i>马俊</i></p><p><div class="glyphicon glyphicon-map-marker" style="color:rgba(4, 129, 246, 0.815);margin-right:4%"></div><u>n217</u></p>';
        }
        else {
            div.className = 'rest';
            div.innerHTML = '<h2>空闲</h2><p>放松一下吧~</p><p>(*^▽^*)</p>';
        }
        getObj.onmouseover = function () {
            if (info[0].children.length != 0) {
                var ss = info[0].children[0];
                info[0].removeChild(ss);
            }
            info[0].appendChild(div);
        }
    }
}
