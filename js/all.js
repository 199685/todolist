window.onload = function() {
    var content = document.querySelector('.content');
    var addlist = document.querySelector('.list');
    var data = JSON.parse(localStorage.getItem('listdata')) || [];
    updata();

    function join(e) {
        e.preventDefault();
        //add data
        var text = document.querySelector('.text');
        if (e.target.type == 'button' && text.value !== '') {
            var textdata = { content: text.value }
            data.push(textdata);
            text.value = '';
        } else if (e.target.type == 'button') {
            alert('請輸入內容:');
        }
        //remove data
        if (e.target.nodeName == 'A') {
            var listnumber = e.target.dataset.number;
            data.splice(listnumber, 1)

        }
        updata()
    }

    function updata() {
        var len = data.length;
        var str = '';
        for (var i = 0; i < len; i++) {
            str += '<li><a href="#" data-number=' + i + '>刪除</a><span>' + data[i].content + '<span></li>'
        }
        addlist.innerHTML = str;
        console.log(str)
        localStorage.setItem('listdata', JSON.stringify(data))
    }





    content.addEventListener('click', join, false);
};