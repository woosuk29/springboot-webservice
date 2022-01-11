let main = {
    init : function () {
        let _this = this;
        $('#btn-save').on('click', function () {
            _this.save();
        });

        $('#btn-update').on('click', function () {
            _this.update();
         });

        $('#btn-delete').on('click', function () {
            _this.delete();
        });
    },

    save : function () {
        alert('등록');
        let data = {
            title: $('#title').val(),
            author: $('#author').val(),
            content: $('#content').val()
        };

        $.ajax({
            type: 'POST',
            url: '/api/v1/posts',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function () {
            alert('글이등록되었습니다.');
            window.location.href = '/';
        }).fail(function (error) {
            alert(error);
        });

    },

    update : function () {
        alert('수정');
        let data = {
            title   : $('#title').val(),
            content : $('#content').val()
        };

        let id = $('#id').val();

        $.ajax({
            type: 'PUT',
            url: '/api/v1/posts/'+id,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function () {
            alert('글이수정되었습니다.');
            window.location.href = '/';
        }).fail(function (error) {
            alert(error);
        });



    },

    delete : function () {
        alert("삭제");

        let id = $('#id').val();

        $.ajax({
            type: 'DELETE',
            url: '/api/v1/posts/'+id,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        }).done(function () {
            alert('글이삭제되었습니다.');
            window.location.href = '/';
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
        


    }
};

main.init();