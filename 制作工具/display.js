fetch('./res.json')
    .then((response) => response.json())
    .then(main);
function main(e) {
    var data = e;
    var start = {
        X: 0,
        Y: 100,
    }
    var border = document.createElement('div');
    document.getElementById('message').innerText = data.message;
    border.style.position = 'absolute';
    border.style.width = '450px';
    border.style.height = '600px';
    border.style.top = start.Y + 'px';
    border.style.border = '2px solid #000'
    border.style.left = start.X + 'px';
    var root = document.getElementById('container');
    root.append(border);
    var objects = data.level.objects;
    for (var i = 0; i < objects.length; i++) {
        var img = document.createElement('img');
        img.className = 'pics';
        img.src = objects[i].pic_src;
        img.classList.add('draggable');
        img.style.position = 'absolute';
        img.style.userSelect = 'none';
        img.setAttribute('draggable', false);
        img.style.width = objects[i].size.width + 'px';
        img.style.height = objects[i].size.height + 'px';
        img.style.maxWidth = '100%';
        img.style.maxHeight = '100%';
        img.style.left = start.X + objects[i].position.col + "px";
        img.style.top = start.Y + objects[i].position.row + "px";
        img.X = start.X;
        img.Y = start.Y;
        root.append(img);
        img.addEventListener('mousedown', dragStart);
    }
    let mousePosition = { x: 0, y: 0 };

    document.addEventListener('mousemove', function (event) {
        mousePosition.x = event.clientX;
        mousePosition.y = event.clientY;
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'a') {
            check(mousePosition)
        }
    });

    function check(event) {
        var condition = data.level.pass_condition;
        for (var i = 0; i < condition.length; i++)
            if (check_group(condition[i], event)) {
                alert('通过！');
                return;
            }
        alert('不对哦');
    }

    function check_group(list, e) {
        for (var i = 0; i < list.length; i++) {
            var a = list[i].first_object_id;
            var b = list[i].second_object_id;
            var row_lim = list[i].row_diff;
            var col_lim = list[i].col_diff;
            var obj = document.getElementsByClassName('pics');
            var cur = {};
            if (b == -1) cur.X = e.x, cur.Y = e.y;
            else cur.X = obj[b].X, cur.Y = obj[b].Y;
            console.log(cur);
            console.log(obj[a].X);
            console.log(obj[a].Y);
            console.log(col_lim);
            if (!(cur.X - obj[a].X >= col_lim.min && cur.X - obj[a].X <= col_lim.max &&
                cur.Y - obj[a].Y >= row_lim.min && cur.Y - obj[a].Y <= row_lim.max
            )) return false;
        }
        return true;
    }


    var offsetX, offsetY;
    var curDOM;

    function dragStart(e) {
        e.preventDefault();
        var img = e.target;
        curDOM = img;
        offsetX = e.clientX - img.getBoundingClientRect().left;
        offsetY = e.clientY - img.getBoundingClientRect().top;
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', dragEnd);
    }

    function drag(e) {
        e.preventDefault();
        var img = curDOM;
        if (img.className != 'pics draggablex`') return;
        var dragX = e.clientX - offsetX;
        var dragY = e.clientY - offsetY;
        img.style.left = dragX + 'px';
        img.style.top = dragY + 'px';
        img.X = dragX;
        img.Y = dragY;
    }

    function dragEnd() {
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', dragEnd);
    }

}