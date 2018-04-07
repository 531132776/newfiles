/**
 * 图片上传
 */
// $(document).ready(function(){


// })

var image = '';
var urlImg = '';

function selectImage(file) {
    // debugger
    urlImg = file.value;
    if (!file.files || !file.files[0]) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function(evt) {
        // document.getElementById('image').src = evt.target.result;
        image = evt.target.result;
        $.ajax({

            type: 'POST',

            url: '/AlgorithmusMall/ai/uploadAndRecognizeHumanFace',

            data: { image: image, url: urlImg },

            async: false,

            dataType: 'json',

            success: function(data) {

                /* image = '';
                                url=''; */
                if (data.success) {
                    //alert('上传成功');
                    /*  document.getElementById('image').width="260px";
                     document.getElementById('image').height="230px"; */
                    //document.getElementById('image').src = data.data.url;
                    $(".image-layer").css("background-image", "url(" + data.data.url + ")");
                    $(".face-infometion").show();
                    $("#datainfo").val(JSON.stringify(data));
                    /* $("#image").attr("width","265px");
                     $("#image").attr("height","235px");*/
                    //image_expression
                    if (data.data.objs.length > 0) {
                        if (data.data.objs.length == 1) {
                            $(".face-info").show();
                            $("#image_expression").text(data.data.objs[0].emotion);
                        } else {
                            $(".face-info").hide();
                        }

                    }
                } else {

                    alert('上传失败');

                }

            },

            error: function(err) {

                alert('网络故障');

            }

        });
    }
    reader.readAsDataURL(file.files[0]);

}