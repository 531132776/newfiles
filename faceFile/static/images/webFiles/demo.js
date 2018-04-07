var isUnderIE10 = function() {
    var isIE = navigator.userAgent.indexOf('MSIE') >= 0;
    return isIE && !window.FormData;
};

var isIE = function() {
    var isIE = navigator.userAgent.indexOf('MSIE') >= 0;
    return isIE;
};

var JH_DEMO_LIMIT = !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/) ? 1 : 10;

var getToken = function() {

    var skey = $getCookie("skey"),
        token = skey == null ? " " : $time33(skey);

    return token;

    function $getCookie(name) {
        var reg = new RegExp("(^| )" + name + "(?:=([^;]*))?(;|$)"),
            val = document.cookie.match(reg);

        return val ? (val[2] ? unescape(val[2]) : "") : null;
    }

    function $time33(str) {
        for (var i = 0,
                len = str.length,
                hash = 5381; i < len; ++i) {
            hash += (hash << 5) + str.charAt(i).charCodeAt();
        }

        return hash & 0x7fffffff;
    }
};

// 用于获取 拖拽上传的文件，包括文件和文件夹内的全部文件
function walkFileSystem(directory, callback, error) {
    if (!callback.pending) {
        callback.pending = 0;
    }
    if (!callback.files) {
        callback.files = [];
    }

    callback.pending++;

    var reader = directory.createReader();
    reader.readEntries(function(entries) {
            callback.pending--;
            $.each(entries,
                function(index, entry) {
                    if (entry.isFile) {

                        callback.pending++;
                        entry.file(function(File) {
                                File.fullPath = entry.fullPath.replace('/', ''); //去掉第一个/
                                //File.path = encodeURIComponent(relativePath);
                                callback.files.push(File);
                                if (--callback.pending === 0) {
                                    callback(callback.files);
                                }
                            },
                            error);
                    } else {

                        walkFileSystem(entry, callback, error);
                    }
                });

            if (callback.pending === 0) {
                callback(callback.files);
            }
        },
        error);
}

var getSign = function() {

    var defer = $.Deferred();
    $.ajax({
        type: 'get',
        url: '//image.qcloud.com/api.php?Action=DetectDemo.GetSign',
        data: {
            mc_gtk: self.getToken(),
            '_': new Date().getTime()
        },
        dataType: "jsonp",
        success: function(ret) {
            if (0 == ret.code) {
                defer.resolve(ret.sign);
            } else {
                defer.reject();
            }
        }
    });

    return defer.promise();

};

var Uploader = function(opt) {

    opt = opt || {};
    var self = this;

    var browseBtn = opt.browse;
    this.browseBtn = browseBtn;

    if (opt.autoStart === undefined) {
        opt.autoStart = true;
    }

    var domNode = browseBtn[0];
    var input;

    if (domNode.tagName === 'INPUT' && domNode.type === 'file') {
        input = domNode;
    } else {
        input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.style.display = 'none';

        if (isUnderIE10()) {
            $('body').append(input);
        } else {
            $(domNode).on('click',
                function() {
                    input.style.opacity = 0;
                    input.style.display = 'block';
                    input.focus();
                    input.click();
                    input.style.display = 'none';
                });
            domNode.appendChild(input);
        }

    }

    browseBtn = $(input);

    var limit = opt.limit || 1;

    if (opt.uploadType == 'detect' && limit > 1) {
        //支持多选
        $(browseBtn).attr('multiple', 'multiple');
    }

    if (opt.uploadType == 'face-check' && limit > 1) {
        //支持多选
        $(browseBtn).attr('multiple', 'multiple');
    }

    $(browseBtn).on('change',
        function(e) {
            var files = e.target.files;
            if (files.length > limit) {
                setDialog('所选文件不能超过' + limit + '个');
                return false;
            }

            for (var i = 0; i < files.length; i++) {
                var f = files[i];
                if (f && f.size > 1024 * 1024) {
                    setDialog('所选文件不能超过1M');
                    return false;
                }
            }

            self.files = files;

            if (opt.onFilesAdded) {
                opt.onFilesAdded(files);
            }

            if (opt.autoStart) {

                if (opt.uploadType == 'detect' && JH_DEMO_LIMIT == 10) {
                    self.startUpload();
                } else if (opt.uploadType == 'detect' && JH_DEMO_LIMIT == 1) {
                    doMobileJH("", $(input)[0].files[0], input);
                } else if (opt.uploadType == 'tag') {
                    self.startTagUpload();
                } else if (opt.uploadType == 'ocr-id') {
                    self.startOcrUpload();
                } else if (opt.uploadType == 'ocr-card') {
                    self.startOcrCardUpload();
                } else if (opt.uploadType == 'ocr-print') {
                    self.startOcrPrintUpload();
                } else if (opt.uploadType == 'ocr-drive') {
                    self.startOcrDriveUpload();
                } else if (opt.uploadType == 'ocr-vehicle') {
                    self.startOcrVehicleUpload();
                } else if (opt.uploadType == 'face-check') {
                    self.startFaceImageUpload();
                }
            }
        });

    var dropArea = opt.drop;
    if (dropArea) {

        var filesDeal = function(files, opt) {
            if (files.length > (JH_DEMO_LIMIT)) {
                setDialog('所选文件不能超过' + JH_DEMO_LIMIT + '个');
                return;
            }
            for (var i = 0; i < files.length; i++) {
                var f = files[i];
                var type = f.type;
                if (type.indexOf('image') < 0) {
                    setDialog('所选文件必须全部为图片文件');
                    return;
                }
                if (f.size > 1024 * 1024) {
                    setDialog('所选文件必须为1M以下文件');
                    return;
                }

            }

            self.files = files;

            if (opt.onDragAdded) {
                opt.onDragAdded(files);
            }

            if (opt.autoStart) {

                if (opt.uploadType == 'detect') {
                    self.startUpload();
                } else if (opt.uploadType == 'tag') {
                    self.startTagUpload();
                } else if (opt.uploadType == 'ocr-id') {
                    self.startOcrUpload();
                } else if (opt.uploadType == 'ocr-card') {
                    self.startOcrCardUpload();
                } else if (opt.uploadType == 'ocr-print') {
                    self.startOcrPrintUpload();
                } else if (opt.uploadType == 'ocr-drive') {
                    self.startOcrDriveUpload();
                } else if (opt.uploadType == 'ocr-vehicle') {
                    self.startOcrVehicleUpload();
                } else if (opt.uploadType == 'face-check') {
                    self.startFaceImageUpload();
                }

            }
        };

        dropArea.on('dragover',
            function(e) {
                e.preventDefault();
            });
        dropArea.on('dragenter',
            function(e) {
                e.preventDefault();
            });
        dropArea.on('drop',
            function(ev) {
                ev.preventDefault();

                var e = ev.originalEvent;

                var items = e.dataTransfer.items || [],
                    firstEntry;

                if (items[0] && items[0].webkitGetAsEntry && (firstEntry = items[0].webkitGetAsEntry())) {

                    walkFileSystem(firstEntry.filesystem.root,
                        function(allfiles) {

                            filesDeal(allfiles, opt);

                        },
                        function() {

                            var files = e.dataTransfer.files;

                            filesDeal(files, opt);

                        });
                } else {
                    var files = e.dataTransfer.files;

                    filesDeal(files, opt);
                }

                return false;

            });
    }

    self.onFilesUploaded = opt.onFilesUploaded;

    self.startUpload = function() {
        getSign().done(function(sign) {
            var defer = $.Deferred();

            var formData = new FormData();
            formData.append('appid', APPID);
            formData.append('bucket', BUCKET);

            var files = self.files;

            for (var i = 0; i < files.length; i++) {
                // IE10 ajax post 0b file
                if (isIE() && !isUnderIE10() && file && file.size == 0) {
                    formData.append('image[' + i + ']', null);
                } else {
                    formData.append('image[' + i + ']', files[i]);
                }

            }

            $.ajax({
                url: '//service.image.myqcloud.com/detection/porn_detect',
                type: 'POST',
                enctype: "multipart/form-data",
                data: formData,
                contentType: false,
                processData: false,
                beforeSend: function(xhr) {
                    xhr.setRequestHeader('Authorization', sign);
                },
                success: function(res) {

                    self.onFilesUploaded(res);

                    $(browseBtn).val('');

                    defer.resolve(res);

                }
            });

            return defer.promise();

        });
    };

    self.startTagUpload = function() {
        getSign().done(function(sign) {
            var defer = $.Deferred();

            var param = {
                appid: APPID,
                bucket: BUCKET
            };

            var file = self.files[0];

            var reader = new FileReader();
            reader.onload = function(e) {

                var fullRes = e.target.result;

                param.image = fullRes.split('base64,')[1];

                var ul = $('.js-ul-tag');
                ul.siblings().hide();
                ul.show();
                var len = $('.js-tag-content img').length;
                var tpl = '<li><div class="upload-img-item">\
                <img src="' + fullRes + '" class="upload-img">\
                </div></li>';
                if (len >= 1) {
                    ul.html(tpl);
                } else {
                    ul.append(tpl);
                }

                $.ajax({
                    url: '//service.image.myqcloud.com/v1/detection/imagetag_detect',
                    type: 'POST',
                    dataType: 'json',
                    contentType: "application/json",
                    data: JSON.stringify(param),
                    beforeSend: function(xhr) {
                        $('.js-tag-result').html('<li>\
                                <div class="identify-item">\
                                <span class="head">分析中...</span>\
                        </div>\
                        </li>').addClass('single-center-list');
                        xhr.setRequestHeader('Authorization', sign);
                    },
                    success: function(res) {

                        $('.js-tag-result').removeClass('single-center-list');

                        self.onFilesUploaded(res);

                        updateTagRes(res.tags);
                        //self.onFilesUploaded(res);
                        $(browseBtn).val('');

                        defer.resolve(res);

                    },
                    error: function() {
                        $('.js-tag-result').html('<li>\
                                <div class="identify-item">\
                                <span class="head">分析失败</span>\
                        </div>\
                        </li>').addClass('single-center-list');
                    }
                });

            };
            reader.readAsDataURL(file);

            return defer.promise();

        });
    };

    self.startOcrUpload = function() {
        getSign().done(function(sign) {
            var defer = $.Deferred();

            var formData = new FormData();
            formData.append('appid', APPID);
            formData.append('bucket', BUCKET);
            formData.append('card_type', 0); //0是正面 1是反面

            var file = self.files[0];

            formData.append('image[' + 0 + ']', file);

            var reader = new FileReader();
            reader.onload = function(e) {

                var fullRes = e.target.result;

                var ul = $('.js-ul-ocr-id');
                ul.siblings().hide();
                ul.show();
                var len = $('.js-ocr-content-id img').length;
                var tpl = '<li><div class="upload-img-item">\
                    <img src="' + fullRes + '" class="upload-img">\
                    </div></li>';
                if (len >= 1) {
                    ul.html(tpl);
                } else {
                    ul.append(tpl);
                }

                $.ajax({
                    url: '//service.image.myqcloud.com/ocr/idcard',
                    type: 'POST',
                    enctype: "multipart/form-data",
                    data: formData,
                    contentType: false,
                    processData: false,
                    beforeSend: function(xhr) {
                        $('.js-ocr-result-id').html('<li>\
                                <div class="identify-item">\
                                <span class="head">分析中...</span>\
                        </div>\
                        </li>').addClass('single-center-list');
                        xhr.setRequestHeader('Authorization', sign);
                    },
                    success: function(res) {

                        $('.js-ocr-result-id').removeClass('single-center-list');

                        self.onFilesUploaded(res);

                        updateOCRIdRes(res.result_list);

                        $(browseBtn).val('');

                        defer.resolve(res);

                    },
                    error: function() {
                        $('.js-ocr-result-id').html('<li>\
                                <div class="identify-item">\
                                <span class="head">身份证分析失败，请重新上传</span>\
                        </div>\
                        </li>').addClass('single-center-list');
                    }
                });

            };

            reader.readAsDataURL(file);

            return defer.promise();

        });
    };

    self.startOcrCardUpload = function() {
        getSign().done(function(sign) {
            var defer = $.Deferred();

            var formData = new FormData();
            formData.append('appid', APPID);
            formData.append('bucket', BUCKET);
            formData.append('ret_image', 0); //0不返回图片 1是返回

            var file = self.files[0];

            formData.append('image[' + 0 + ']', file);

            var reader = new FileReader();
            reader.onload = function(e) {

                var fullRes = e.target.result;

                var ul = $('.js-ul-ocr-card');
                ul.siblings().hide();
                ul.show();
                var len = $('.js-ocr-content-card img').length;
                var tpl = '<li><div class="upload-img-item">\
                    <img src="' + fullRes + '" class="upload-img">\
                    </div></li>';
                if (len >= 1) {
                    ul.html(tpl);
                } else {
                    ul.append(tpl);
                }

                $.ajax({
                    url: '//service.image.myqcloud.com/ocr/namecard',
                    type: 'POST',
                    enctype: "multipart/form-data",
                    data: formData,
                    contentType: false,
                    processData: false,
                    beforeSend: function(xhr) {
                        $('.js-ocr-result-card').html('<li>\
                                <div class="identify-item">\
                                <span class="head">分析中...</span>\
                        </div>\
                        </li>').addClass('single-center-list');
                        xhr.setRequestHeader('Authorization', sign);
                    },
                    success: function(res) {

                        $('.js-ocr-result-card').removeClass('single-center-list');

                        self.onFilesUploaded(res);

                        updateOCRCardRes(res.result_list);

                        $(browseBtn).val('');

                        defer.resolve(res);

                    },
                    error: function() {
                        $('.js-ocr-result-card').html('<li>\
                                <div class="identify-item">\
                                <span class="head">名片分析失败，请重新上传</span>\
                        </div>\
                        </li>').addClass('single-center-list');
                    }
                });

            };

            reader.readAsDataURL(file);

            return defer.promise();

        });
    };

    self.startOcrPrintUpload = function() {
        getSign().done(function(sign) {
            var defer = $.Deferred();

            var formData = new FormData();
            formData.append('appid', APPID + "");
            formData.append('bucket', BUCKET);

            var file = self.files[0];

            formData.append('image', file);

            var reader = new FileReader();
            reader.onload = function(e) {

                var fullRes = e.target.result;

                var ul = $('.js-ul-ocr-print');
                ul.siblings().hide();
                ul.show();
                var len = $('.js-ocr-content-print img').length;
                var tpl = '<li><div class="upload-img-item">\
                    <img src="' + fullRes + '" class="upload-img">\
                    </div></li>';
                if (len >= 1) {
                    ul.html(tpl);
                } else {
                    ul.append(tpl);
                }

                $.ajax({
                    url: '//recognition.image.myqcloud.com/ocr/general',
                    type: 'POST',
                    enctype: "multipart/form-data",
                    data: formData,
                    contentType: false,
                    processData: false,
                    beforeSend: function(xhr) {
                        $('.js-ocr-result-print').html('<li>\
                                <div class="identify-item">\
                                <span class="head">分析中...</span>\
                        </div>\
                        </li>').addClass('single-center-list');
                        xhr.setRequestHeader('Authorization', sign);
                    },
                    success: function(res) {

                        $('.js-ocr-result-print').removeClass('single-center-list');

                        self.onFilesUploaded(res);

                        updateOCRPrintRes(res);

                        $(browseBtn).val('');

                        defer.resolve(res);

                    },
                    error: function() {
                        $('.js-ocr-result-print').html('<li>\
                                <div class="identify-item">\
                                <span class="head">通用印刷体分析失败，请重新上传</span>\
                        </div>\
                        </li>').addClass('single-center-list');
                    }
                });

            };

            reader.readAsDataURL(file);

            return defer.promise();

        });
    };

    self.startOcrDriveUpload = function() {
        getSign().done(function(sign) {
            var defer = $.Deferred();

            var formData = new FormData();
            formData.append('appid', APPID + "");
            formData.append('bucket', BUCKET);
            formData.append('type', 1); //0为行驶证，1为驾驶证
            var file = self.files[0];

            formData.append('image', file);

            var reader = new FileReader();
            reader.onload = function(e) {

                var fullRes = e.target.result;

                var ul = $('.js-ul-ocr-drive');
                ul.siblings().hide();
                ul.show();
                var len = $('.js-ocr-content-drive img').length;
                var tpl = '<li><div class="upload-img-item">\
                    <img src="' + fullRes + '" class="upload-img">\
                    </div></li>';
                if (len >= 1) {
                    ul.html(tpl);
                } else {
                    ul.append(tpl);
                }

                $.ajax({
                    url: '//recognition.image.myqcloud.com/ocr/drivinglicence',
                    type: 'POST',
                    enctype: "multipart/form-data",
                    data: formData,
                    contentType: false,
                    processData: false,
                    beforeSend: function(xhr) {
                        $('.js-ocr-result-drive').html('<li>\
                                <div class="identify-item">\
                                <span class="head">分析中...</span>\
                        </div>\
                        </li>').addClass('single-center-list');
                        xhr.setRequestHeader('Authorization', sign);
                    },
                    success: function(res) {

                        $('.js-ocr-result-drive').removeClass('single-center-list');

                        self.onFilesUploaded(res);

                        updateOCRDriveRes(res);

                        $(browseBtn).val('');

                        defer.resolve(res);

                    },
                    error: function() {
                        $('.js-ocr-result-drive').html('<li>\
                                <div class="identify-item">\
                                <span class="head">驾驶证分析失败，请重新上传</span>\
                        </div>\
                        </li>').addClass('single-center-list');
                    }
                });

            };

            reader.readAsDataURL(file);

            return defer.promise();

        });
    };

    self.startOcrVehicleUpload = function() {
        getSign().done(function(sign) {
            var defer = $.Deferred();

            var formData = new FormData();
            formData.append('appid', APPID + "");
            formData.append('bucket', BUCKET);
            formData.append('type', 0);

            var file = self.files[0];

            formData.append('image', file);

            var reader = new FileReader();
            reader.onload = function(e) {

                var fullRes = e.target.result;

                var ul = $('.js-ul-ocr-vehicle');
                ul.siblings().hide();
                ul.show();
                var len = $('.js-ocr-content-vehicle img').length;
                var tpl = '<li><div class="upload-img-item">\
                    <img src="' + fullRes + '" class="upload-img">\
                    </div></li>';
                if (len >= 1) {
                    ul.html(tpl);
                } else {
                    ul.append(tpl);
                }

                $.ajax({
                    url: '//recognition.image.myqcloud.com/ocr/drivinglicence',
                    type: 'POST',
                    enctype: "multipart/form-data",
                    data: formData,
                    contentType: false,
                    processData: false,
                    beforeSend: function(xhr) {
                        $('.js-ocr-result-vehicle').html('<li>\
                                <div class="identify-item">\
                                <span class="head">分析中...</span>\
                        </div>\
                        </li>').addClass('single-center-list');
                        xhr.setRequestHeader('Authorization', sign);
                    },
                    success: function(res) {

                        $('.js-ocr-result-vehicle').removeClass('single-center-list');

                        self.onFilesUploaded(res);

                        updateOCRVehicleRes(res);

                        $(browseBtn).val('');

                        defer.resolve(res);

                    },
                    error: function() {
                        $('.js-ocr-result-vehicle').html('<li>\
                                <div class="identify-item">\
                                <span class="head">行驶证分析失败，请重新上传</span>\
                        </div>\
                        </li>').addClass('single-center-list');
                    }
                });

            };

            reader.readAsDataURL(file);

            return defer.promise();

        });
    };

    self.startFaceImageUpload = function() {
        var action = $('.ci-tab-panel-item-4').find('.page-demo-tab-item.active').attr('action');
        if (action == 'detect') {
            self.startFaceDetectUpload();
        } else if (action == 'location') {
            self.startFaceLocationUpload();
        } else if (action == 'recognize') {
            self.startFaceRecognizeUpload();
        } else if (action == 'verify') {
            self.startFaceVerifyUpload();
        }
    };

    self.reBindEvent = function(self) {
            $('.verify-delete-btn').off().click(function(event) {
                var index = $(event.target).closest('li').index();
                $(event.target).closest('li').remove();
                if ($('.verify-delete-btn').size() > 0) {
                    $('#uploadBtn4-2-dom').addClass('pull-right').show();
                } else {
                    $('#uploadBtn4-2-dom').removeClass('pull-right').show();
                }
                $(self.filearr).each(function(index, item) {
                    if (typeof item === 'string') {
                        if (item === $(event.target).closest('li').find('img').attr('src')) {
                            self.filearr.splice(index, 1);
                        }
                    } else {
                        var fileReaer = new FileReader();
                        fileReaer.onload = function(e) {
                            if (e.target.result == $(event.target).closest('li').find('img').attr('src')) {
                                self.filearr.splice(index, 1);
                            }
                        };
                        fileReaer.readAsDataURL(item);
                    }
                });
                self.replaceIndex = undefined;
            });

            $('.verify-update-btn').off().click(function(event) {
                var index = $(event.target).closest('li').index();
                self.replaceIndex = index;
                $('#uploadBtn4-2').trigger('click');
            });
        },

        self.startFaceVerifyUpload = function() {
            if (self.replaceIndex === 0 || self.replaceIndex === 1) {
                if (files.length > 1) {
                    uploader42.replaceIndex = undefined;
                    return;
                }
            }
            getSign().done(function(sign) {
                var defer = $.Deferred();
                var formData = new FormData(),
                    uploadBtnId = self.browseBtn.attr('id');
                formData.append('appid', APPID);
                formData.append('bucket', BUCKET);
                $('#face-verify-dom').find('.compare-upload-wrap').html('');
                var readerA = new FileReader();

                function loadImg(loadImgObj, callBack) {
                    if (typeof loadImgObj === 'string') {
                        $('#face-verify-dom').find('.compare-upload-wrap').append('<li><img src="' + loadImgObj + '" class="upload-img" />' + '<div class="options"> ' + '<a class="option-item verify-update-btn" href="javascript:void"> ' + '<i class="icon-replace"></i> ' + '<span class="text">替换</span> </a> <a class="option-item verify-delete-btn" href="javascript:void"> ' + '<i class="icon-delete"></i> <span class="text">删除</span> </a></div><div class="img-mask" style="display: none;"> ' + '<span class="progress"> <span class="percentage"> <span class="percentage-inner" style="width:74%">' + '</span> </span> <span class="progress-text">0%</span> </span></div><li>');
                        $($('#face-verify-dom').find('.compare-upload-wrap').find('li')).each(function(index, item) {
                            if ($(item).children().length == 0) {
                                $(item).remove();
                            }
                        });
                        self.reBindEvent(self);
                        if (callBack && self.filearr[1]) {
                            callBack(self.filearr[1], null);
                        }
                    } else {
                        var fileReader = new FileReader();
                        fileReader.onload = function(e) {
                            var fullRes = e.target.result;
                            //var result_area = $('.facein-result-area').find('.image-layer-wrap').find('.image-layer').css('background-image','url('+fullRes+')');
                            $('#face-verify-dom').find('.compare-upload-wrap').append('<li><img src="' + fullRes + '" class="upload-img" />' + '<div class="options"> ' + '<a class="option-item verify-update-btn" href="javascript:void"> ' + '<i class="icon-replace"></i> ' + '<span class="text">替换</span> </a> <a class="option-item verify-delete-btn" href="javascript:void"> ' + '<i class="icon-delete"></i> <span class="text">删除</span> </a></div><div class="img-mask" style="display: none;"> ' + '<span class="progress"> <span class="percentage"> <span class="percentage-inner" style="width:74%">' + '</span> </span> <span class="progress-text">0%</span> </span></div><li>');
                            $($('#face-verify-dom').find('.compare-upload-wrap').find('li')).each(function(index, item) {
                                if ($(item).children().length == 0) {
                                    $(item).remove();
                                }
                            });
                            self.reBindEvent(self);
                            if (callBack && self.filearr[1]) {
                                callBack(self.filearr[1], null);
                            }
                        };
                        fileReader.readAsDataURL(loadImgObj);
                    }
                }
                loadImg(self.filearr[0], loadImg);

                var fileA = self.filearr[0],
                    fileB;
                if (typeof fileA !== 'string') {
                    formData.append('imageA', fileA);
                } else {
                    formData.append('urlA', fileA);
                }
                if (self.filearr.length > 1) {
                    fileB = self.filearr[1];
                    if (typeof fileB !== 'string') {
                        formData.append('imageB', fileB);
                    } else {
                        formData.append('urlB', fileB);
                    }
                    $('#uploadBtn4-2-dom').hide();
                } else {
                    $('#uploadBtn4-2-dom').addClass('pull-right').show();
                }
                if (fileB) {
                    $($('#face-verify-dom').find('.compare-upload-wrap').find('li')).each(function(index, item) {
                        updateProgress($(item));
                    });
                    $('.col-3-area').find('.upload-result').find('#compare-value').html('分析中...');
                    $.ajax({
                        url: '//service.image.myqcloud.com/face/compare',
                        type: 'POST',
                        enctype: "multipart/form-data",
                        data: formData,
                        contentType: false,
                        processData: false,
                        beforeSend: function(xhr) {
                            xhr.setRequestHeader('Authorization', sign);
                        },
                        success: function(res) {
                            //self.onFilesUploaded(res);
                            $($('#face-verify-dom').find('.compare-upload-wrap').find('li')).each(function(index, item) {
                                updateProgress($(item), 100);
                            });
                            updateFaceCheckRes(res);
                            $(browseBtn).val('');
                            defer.resolve(res);
                        },
                        error: function() {

                        }
                    });
                }
                return defer.promise();
            });
        };

    self.startFaceLocationUpload = function(url) {
        $('.facein-result-area').find('.face-location-points').hide();
        getSign().done(function(sign) {
            var defer = $.Deferred();
            var formData = new FormData(),
                file;
            formData.append('appid', APPID);
            formData.append('bucket', BUCKET);
            formData.append('mode', 1); //0不返回图片 1是返回
            if (!url) {
                file = self.files[0];
                formData.append('image', file);
            } else {
                formData.append('url', url);
            }

            var reader = new FileReader(),
                uploadAction;
            updateProgress($('.facein-result-area'));
            uploadAction = function(e) {
                var fullRes;
                if (e && e.target) {
                    fullRes = e.target.result;
                    $('.facein-result-area').find('.image-layer-wrap').find('.image-layer').css('background-image', 'url(' + fullRes + ')');
                } else {
                    $('.facein-result-area').find('.image-layer-wrap').find('.image-layer').css('background-image', 'url(' + url + ')');
                }
                $('#face-location-dom').find('.facein-result-area').siblings().hide();
                $('#face-location-dom').find('.facein-result-area').show();
                $.ajax({
                    url: '//service.image.myqcloud.com/face/shape',
                    type: 'POST',
                    enctype: "multipart/form-data",
                    data: formData,
                    contentType: false,
                    processData: false,
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('Authorization', sign);
                    },
                    success: function(res) {
                        self.onFilesUploaded(res);
                        updateFaceCheckRes(res);
                        updateProgress($('.facein-result-area'), 100);
                        $(browseBtn).val('');
                        defer.resolve(res);
                    },
                    error: function() {

                    }
                });
            };
            reader.onload = uploadAction;
            if (file) {
                reader.readAsDataURL(file);
            } else {
                uploadAction();
            }
            return defer.promise();
        });
    };

    self.startFaceRecognizeUpload = function(url) {
        getSign().done(function(sign) {
            var defer = $.Deferred();
            var formData = new FormData(),
                file;
            formData.append('appid', APPID);
            formData.append('bucket', BUCKET);
            formData.append('group_id', 'demo'); //0不返回图片 1是返回
            if (!url) {
                file = self.files[0];
                formData.append('image', file);
            } else {
                formData.append('url', url);
            }
            var reader = new FileReader(),
                uploadAction;
            updateProgress($('.face-search').find('.upload-img-list').find('.upload-img-item').parent());
            uploadAction = function(e) {
                var fullRes;
                if (e && e.target) {
                    fullRes = e.target.result;
                    $('.face-search').find('.upload-img-list').find('.upload-img-item').find('img').attr('src', fullRes);
                } else {
                    $('.face-search').find('.upload-img-list').find('.upload-img-item').find('img').attr('src', url);
                }
                $.ajax({
                    url: '//service.image.myqcloud.com/face/identify',
                    type: 'POST',
                    enctype: "multipart/form-data",
                    data: formData,
                    contentType: false,
                    processData: false,
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('Authorization', sign);
                    },
                    success: function(res) {
                        self.onFilesUploaded(res);
                        updateProgress($('.face-search').find('.upload-img-list').find('.upload-img-item').parent(), 100);
                        updateFaceCheckRes(res);
                        $(browseBtn).val('');
                        defer.resolve(res);
                    },
                    error: function() {

                    }
                });
            };
            reader.onload = uploadAction;
            if (file) {
                reader.readAsDataURL(file);
            } else {
                uploadAction();
            }
            return defer.promise();
        });
    };

    self.startFaceDetectUpload = function(url) {
        $('.facein-result-area').find('.face-info').hide();
        $('.facein-result-area').find('.face-location').hide();
        getSign().done(function(sign) {
            var defer = $.Deferred();

            var formData = new FormData(),
                file;
            formData.append('appid', APPID);
            formData.append('bucket', BUCKET);
            formData.append('mode', 1); //0不返回图片 1是返回
            if (!url) {
                file = self.files[0];
                formData.append('image', file);
            } else {
                formData.append('url', url);
            }
            updateProgress($('.facein-result-area'));
            var uploadAction = function(e) {
                var fullRes, imgUrl;
                if (e && e.target) {
                    fullRes = e.target.result;
                    $('.facein-result-area').find('.image-layer-wrap').find('.image-layer').css('background-image', 'url(' + fullRes + ')');
                } else {
                    $('.facein-result-area').find('.image-layer-wrap').find('.image-layer').css('background-image', 'url(' + url + ')');
                }
                $('#face-detect-dom').find('.facein-result-area').siblings().hide();
                $('#face-detect-dom').find('.facein-result-area').show();
                $.ajax({
                    url: '//service.image.myqcloud.com/face/detect',
                    type: 'POST',
                    enctype: "multipart/form-data",
                    data: formData,
                    contentType: false,
                    processData: false,
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('Authorization', sign);
                    },
                    success: function(res) {
                        self.onFilesUploaded(res);
                        updateFaceCheckRes(res);
                        updateProgress($('.facein-result-area'), 100);
                        $(browseBtn).val('');
                        defer.resolve(res);
                    },
                    error: function() {

                    }
                });
            };
            var reader = new FileReader();
            reader.onload = uploadAction;
            if (file) {
                reader.readAsDataURL(file);
            } else {
                uploadAction();
            }
            return defer.promise();
        });
    };
};

var APPID = 10000037;
var BUCKET = 'detect';

var appendDetectImg = function(url, index, input) {
    var len = $('.js-detect-content img').length;
    if (len >= 10) {
        return;
    }

    var ul = $('.js-ul-detect');
    ul.siblings().hide();
    ul.show();
    var li = '<li><div class="upload-img-item">\
                <img src="' + url + '" class="upload-img">\
                <span class="check-result js-detect-result" style="display: none">\
                    <i class="icon-result"></i>\
                    <span class="text"><span class="js-detect-result-text">正常</span>\
                    <span class="divide">|</span><span class="js-detect-result-score">0</span>%</span>\
                </span>\
                <div class="options">\
                    <a class="option-item js-detect-change" href="javascript:">\
                    <i class="icon-replace"></i>\
                    <span class="text">替换</span></a>\
                    <a class="option-item js-detect-del" href="javascript:">\
                    <i class="icon-delete"></i>\
                    <span class="text">删除</span></a>\
                </div>\
                <div class="img-mask" style="display: none">\
                    <span class="progress">\
                    <span class="percentage">\
                    <span class="percentage-inner" style="width:0%"></span>\
                    </span>\
                    <span class="progress-text">0%</span>\
                    </span>\
                </div>\
                </div></li>';
    ul.append(li);
    var li = ul.find('li:last');
    updateDetect(li, index, input);

    var changeBtn = li.find('.js-detect-change');

    var uploader = new Uploader({
        browse: changeBtn,
        limit: 1,
        uploadType: 'detect',
        onFilesAdded: function(files) {
            li.find('img').attr('src', 'about:blank');
            updateDetect(li, 0, changeBtn.find('input'));

        },
        onFilesUploaded: function(res) {
            var filesRes = res.result_list;

            $('.js-detect-tools').show();
            updateProgress(li, 100);
            updateDetectRes(li, filesRes[0]);

        }
    });

};

var updateTagImg = function(url, index, input) {
    var len = $('.js-tag-content img').length;

    var ul = $('.js-ul-tag');
    ul.siblings().hide();
    ul.show();
    var tpl = '<li><div class="upload-img-item">\
                <img src="' + url + '" class="upload-img">\
                </div></li>';

    if (len >= 1) {
        ul.html(tpl);
    } else {
        ul.append(tpl);
    }

    var li = ul.find('li:first');
    var url = li.find('img').attr('src');

    //updateProgress(li);
    if (!url || url == 'about:blank') {

        previewImage(input[0], li.find('img'), index);
        return;
    }

    var param = {
        appid: APPID,
        bucket: BUCKET,
        url: 'https:' + url
    };

    getSign().done(function(sign) {
        $.ajax({
            url: '//service.image.myqcloud.com/v1/detection/imagetag_detect',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json",
            data: JSON.stringify(param),
            beforeSend: function(xhr) {
                $('.js-tag-result').html('<li>\
                                <div class="identify-item">\
                                <span class="head">分析中...</span>\
                        </div>\
                        </li>').addClass('single-center-list');
                xhr.setRequestHeader('Authorization', sign);
            },
            timeout: 10000,
            success: function(res) {

                $('.js-tag-result').removeClass('single-center-list');

                //updateProgress(li, 100);
                updateTagRes(res.tags);

            },
            error: function() {
                $('.js-tag-result').html('<li>\
                                <div class="identify-item">\
                                <span class="head">分析失败</span>\
                        </div>\
                        </li>').addClass('single-center-list');
                //updateProgress(li, 100);
            }
        });
    });

};

var updateOCRIdImg = function(url, index, input) {

    var len = $('.js-ocr-content-id img').length;

    var ul = $('.js-ul-ocr-id');
    ul.siblings().hide();
    ul.show();
    var tpl = '<li><div class="upload-img-item">\
                <img src="' + url + '" class="upload-img">\
                </div></li>';

    if (len >= 1) {
        ul.html(tpl);
    } else {
        ul.append(tpl);
    }

    var li = ul.find('li:first');
    var url = li.find('img').attr('src');

    //updateProgress(li);
    if (!url || url == 'about:blank') {

        previewImage(input[0], li.find('img'), index);
        return;
    }

    var type = 0; //0表示正面 1表示反面
    var param = {
        appid: APPID,
        bucket: BUCKET,
        card_type: type,
        url_list: ['https:' + url]
    };

    getSign().done(function(sign) {
        $.ajax({
            url: '//service.image.myqcloud.com/ocr/idcard',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json",
            data: JSON.stringify(param),
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', sign);
                $('.js-ocr-result-id').html('<li>\
                        <div class="identify-item">\
                        <span class="head">分析中...</span>\
                </div>\
                </li>').addClass('single-center-list');
            },
            timeout: 10000,
            success: function(res) {

                //updateProgress(li, 100);
                $('.js-ocr-result-id').removeClass('single-center-list');
                updateOCRIdRes(res.result_list);

            },
            error: function() {
                //$('.js-ocr-result-id').removeClass('single-center-list');
                //updateProgress(li, 100);
                $('.js-ocr-result-id').html('<li><div class="identify-item"><span class="head">身份证分析失败，请重新上传</span></div></li>');
            }
        });
    });

};

//点击示例图片更新操作
var updateOCRCardImg = function(url, index, input) {
    //判断是否已经选中图片，大于表示0选中,否则为选中
    var len = $('.js-ocr-content-card img').length;

    var ul = $('.js-ul-ocr-card');
    ul.siblings().hide();
    ul.show();
    var tpl = '<li><div class="upload-img-item">\
                <img src="' + url + '" class="upload-img">\
                </div></li>';

    if (len >= 1) {
        ul.html(tpl);
    } else {
        ul.append(tpl);
    }

    var li = ul.find('li:first');
    var url = li.find('img').attr('src');

    //updateProgress(li);
    if (!url || url == 'about:blank') {

        previewImage(input[0], li.find('img'), index);
        return;
    }

    var param = {
        appid: APPID,
        bucket: BUCKET,
        url_list: ['https:' + url]
    };

    getSign().done(function(sign) {
        $.ajax({
            url: '//service.image.myqcloud.com/ocr/namecard',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json",
            data: JSON.stringify(param),
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', sign);
                $('.js-ocr-result-card').html('<li><div class="identify-item">' + '<span class="head">分析中...</span></div></li>').addClass('single-center-list');
            },
            timeout: 10000,
            success: function(res) {
                $('.js-ocr-result-card').removeClass('single-center-list');
                //updateProgress(li, 100);
                updateOCRCardRes(res.result_list);

            },
            error: function() {
                //updateProgress(li, 100);
                //$('.js-ocr-result-card').html('');
                $('.js-ocr-result-card').html('<li><div class="identify-item"><span class="head">名片分析失败，请重新上传</span></div></li>');
            }
        });
    });
};

var updateOCRPrintImg = function(url, index, input) {
    //判断是否已经选中图片，大于表示0选中,否则为选中
    var len = $('.js-ocr-content-print img').length;

    var ul = $('.js-ul-ocr-print');
    ul.siblings().hide();
    ul.show();
    var tpl = '<li><div class="upload-img-item">\
                <img src="' + url + '" class="upload-img">\
                </div></li>';

    if (len >= 1) {
        ul.html(tpl);
    } else {
        ul.append(tpl);
    }

    var li = ul.find('li:first');
    var url = li.find('img').attr('src');

    if (!url || url == 'about:blank') {

        previewImage(input[0], li.find('img'), index);
        return;
    }

    var param = {
        appid: APPID + "",
        bucket: BUCKET,
        url: 'https:' + url
    };

    getSign().done(function(sign) {
        $.ajax({
            url: '//recognition.image.myqcloud.com/ocr/general',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json",
            data: JSON.stringify(param),
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', sign);
                $('.js-ocr-result-print').html('<li><div class="identify-item">' + '<span class="head">分析中...</span></div></li>').addClass('single-center-list');
            },
            timeout: 10000,
            success: function(res) {

                $('.js-ocr-result-print').removeClass('single-center-list');
                updateOCRPrintRes(res);

            },
            error: function() {
                $('.js-ocr-result-print').html('<li><div class="identify-item"><span class="head">通用印刷体分析失败，请重新上传</span></div></li>');
            }
        });
    });
}

var updateOCRDriveImg = function(url, index, input) {
    var len = $('.js-ocr-content-drive img').length;

    var ul = $('.js-ul-ocr-drive');
    ul.siblings().hide();
    ul.show();
    var tpl = '<li><div class="upload-img-item">\
                <img src="' + url + '" class="upload-img">\
                </div></li>';

    if (len >= 1) {
        ul.html(tpl);
    } else {
        ul.append(tpl);
    }

    var li = ul.find('li:first');
    var url = li.find('img').attr('src');

    //updateProgress(li);
    if (!url || url == 'about:blank') {

        previewImage(input[0], li.find('img'), index);
        return;
    }

    var param = {
        appid: APPID + "",
        bucket: BUCKET,
        type: 1,
        url: 'https:' + url
    };

    getSign().done(function(sign) {
        $.ajax({
            url: '//recognition.image.myqcloud.com/ocr/drivinglicence',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json",
            data: JSON.stringify(param),
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', sign);
                $('.js-ocr-result-drive').html('<li><div class="identify-item">' + '<span class="head">分析中...</span></div></li>').addClass('single-center-list');
            },
            timeout: 10000,
            success: function(res) {

                $('.js-ocr-result-drive').removeClass('single-center-list');
                updateOCRDriveRes(res);

            },
            error: function() {

                $('.js-ocr-result-drive').html('<li><div class="identify-item"><span class="head">驾驶证分析失败，请重新上传</span></div></li>');

            }
        });
    });
}

//行驶证
var updateOCRVehicleImg = function(url, index, input) {
    var len = $('.js-ocr-content-vehicle img').length;

    var ul = $('.js-ul-ocr-vehicle');
    ul.siblings().hide();
    ul.show();
    var tpl = '<li><div class="upload-img-item">\
                <img src="' + url + '" class="upload-img">\
                </div></li>';

    if (len >= 1) {
        ul.html(tpl);
    } else {
        ul.append(tpl);
    }

    var li = ul.find('li:first');
    var url = li.find('img').attr('src');

    if (!url || url == 'about:blank') {

        previewImage(input[0], li.find('img'), index);
        return;
    }

    var param = {
        appid: APPID + "",
        bucket: BUCKET,
        type: 0,
        url: 'https:' + url
    };

    getSign().done(function(sign) {
        $.ajax({
            url: '//recognition.image.myqcloud.com/ocr/drivinglicence',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json",
            data: JSON.stringify(param),
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', sign);
                $('.js-ocr-result-vehicle').html('<li><div class="identify-item">' + '<span class="head">分析中...</span></div></li>').addClass('single-center-list');
            },
            timeout: 10000,
            success: function(res) {

                $('.js-ocr-result-vehicle').removeClass('single-center-list');
                updateOCRVehicleRes(res);

            },
            error: function() {

                $('.js-ocr-result-vehicle').html('<li><div class="identify-item"><span class="head">行驶证分析失败，请重新上传</span></div></li>');

            }
        });
    });
}

var onDetectDone = function(res) {
    var filesRes = res.result_list;
    var len = filesRes.length;
    var ul = $('.js-ul-detect');
    var totalLen = ul.find('li').length;

    $('.js-detect-tools').show();

    if (totalLen >= (JH_DEMO_LIMIT)) {
        $('#uploadBtn1-2').parent().addClass('disabled');
    } else if (totalLen >= 1) {
        $('#uploadBtn1-2').parent().removeClass('disabled').show();
    } else {
        $('#uploadBtn1-2').parent().removeClass('disabled').show();
    }

    for (var i = totalLen - len,
            j = 0; j < len; i++, j++) {
        var li = $(ul.find('li').get(i));
        updateProgress(li, 100);
        updateDetectRes(li, filesRes[j]);
    }
};

var onTagDone = function() {
    $('.js-tag-tools').show();
};

var onOcrIdDone = function() {
    $('.js-ocr-tools-id').show();
};
var onOcrCardDone = function() {
    $('.js-ocr-tools-card').show();
};

var onOcrPrintDone = function() {
    $('.js-ocr-tools-print').show();
};

var onOcrDriveDone = function() {
    $('.js-ocr-tools-drive').show();
};

var onOcrVehicleDone = function() {
    $('.js-ocr-tools-vehicle').show();
};

var onFaceFileDoned = function() {
    $('.ci-tab-panel-item-4').find('.page-upload-btns').show();
};

var onDetectAdded = function(files, dom) {
    for (var i = 0; i < files.length; i++) {
        appendDetectImg('about:blank', i, dom);
    }
};

var updateProgress = function(li, res) {
    var mask = li.find('.img-mask');
    var percentText = li.find('.progress-text');
    var percent = parseInt(percentText.text());
    var percentBar = li.find('.percentage-inner');
    var sid = percentBar.data('sid');

    if (res) {
        percent = res;
        percentText.text(res + '%');
        clearTimeout(sid);
        percentBar.css('width', res + '%');

    }

    if (percent < 100) {

        var gap = percentBar.data('gap');
        if (sid) {
            clearTimeout(sid);
        }
        sid = setInterval(function() {
                var width = parseInt(percentBar[0].style.width);

                if (width < 60) {
                    percentBar.css('width', parseInt(width + 20 * Math.random()) + '%');
                } else if (width < 90) {
                    if (Math.random() > 0.9) {
                        percentBar.css('width', (width + 1) + '%');
                    }
                } else {
                    if (Math.random() > 0.999) {
                        percentBar.css('width', (width + 1) + '%');
                    }
                }
                percentText.text(width + '%');

            },
            100);
        percentBar.data('sid', sid);
        mask.show();
    } else {
        clearTimeout(sid);
        percentBar.css('width', '100%');
        mask.fadeOut(300,
            function() {
                percentText.text(0 + '%');
                percentBar.css('width', '0%');
            });
    }

};

var updateDetect = function(li, index, input) {

    var url = li.find('img').attr('src');

    updateProgress(li);

    if (!url || url == 'about:blank') {

        previewImage(input[0], li.find('img'), index);
        return;
    }

    var param = {
        appid: APPID,
        bucket: BUCKET,
        url_list: ['https:' + url]
    };
    //var percentText = li.find('.progress-text');
    getSign().done(function(sign) {
        $.ajax({
            url: '//service.image.myqcloud.com/detection/porn_detect',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json",
            data: JSON.stringify(param),
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', sign);
            },
            timeout: 10000,
            success: function(res) {

                updateProgress(li, 100);

                updateDetectRes(li, res.result_list[0]);

            },
            error: function() {
                updateProgress(li, 100);
            }
        });
    });
};

var updateDetectRes = function(li, res) {
    var data = res.data;
    var porn = data.porn_score;
    var result = data.result;
    var normal = data.normal_score;
    var hot = data.hot_score;
    var confidence = data.confidence;

    li.find('.js-detect-result').removeClass('warning').removeClass('success');

    if (result == 1) {
        li.find('.js-detect-result-text').text('色情');
        li.find('.js-detect-result-score').text(porn);
        li.find('.js-detect-result').show().addClass('warning');
    } else if (result == 0) {
        if (hot > normal) {
            li.find('.js-detect-result-text').text('性感');
            li.find('.js-detect-result-score').text(hot);
        } else {
            li.find('.js-detect-result-text').text('正常');
            li.find('.js-detect-result-score').text(normal);
        }
        li.find('.js-detect-result').show().addClass('success');

    } else if (result == 2) {
        li.find('.js-detect-result-text').text('疑似');
        li.find('.js-detect-result-score').text(confidence);
        li.find('.js-detect-result').show().addClass('warning');
    }
};

var updateTagRes = function(tags) {

    var ul = $('.js-tag-result');

    var li = '';

    tags.sort(function(item1, item2) {
        var v1 = item1['tag_confidence'] * 1;
        var v2 = item2['tag_confidence'] * 1;

        return v1 > v2 ? -1 : 1;
    });

    if (tags.length > 5) {
        tags = tags.slice(0, 5);
    }

    for (var i = 0; i < tags.length; i++) {
        var t = tags[i];
        li += '<li>\
                    <div class="identify-item">\
                        <div class="identify-per">\
                        <div class="identify-per-inner" style="width:' + t.tag_confidence + '%"></div>\
                        <span class="type">' + t.tag_name + '</span>\
                        <span class="num">' + t.tag_confidence + '</span>\
                        </div>\
                    </div>\
                </li>';
    }

    ul.html(li);

};

var updateOCRIdRes = function(res) {

    var ul = $('.js-ocr-result-id');

    var li = '';

    for (var i = 0; i < res.length; i++) {
        var t = res[i].data;
        li += '<li>\
                    <div class="identify-item">\
                        <span class="head">' + '姓名' + '</span>\
                        <span class="con">' + t.name + '</span>\
                        </div>\
                    </div>\
                </li>\
                <li>\
                    <div class="identify-item">\
                    <span class="head">性别</span>\
                    <span class="con">' + t.sex + '</span>\
                    </div>\
                </li>\
                <li>\
                    <div class="identify-item">\
                    <span class="head">民族</span>\
                    <span class="con">' + t.nation + '</span>\
                    </div>\
                </li>\
                <li>\
                    <div class="identify-item">\
                    <span class="head">出生日期</span>\
                    <span class="con">' + t.birth + '</span>\
                    </div>\
                </li>\
                <li>\
                    <div class="identify-item">\
                    <span class="head">身份证号</span>\
                    <span class="con">' + t.id + '</span>\
                    </div>\
                </li>';
    }

    ul.html(li);

};

var updateOCRPrintRes = function(res) {

    var ul = $('.js-ocr-result-print');
    var li = '';
    var data = res.data.items;

    for (var i = 0; i < data.length && i <= 8; i++) {
        li += '<li style="margin-top:10px">\
      <div class="identify-item">\
        <span class="con" style="display:block;margin:0 auto; max-width:320px;">' + data[i].itemstring + '</span>\
        </div>\
      </div>\
    </li>';
        if (i === 8) {
            li += '<li style="margin-top:10px">\
      <div class="identify-item">\
        <span class="con" style="display:block;margin:0 auto; max-width:320px;">...</span>\
        </div>\
      </div>\
    </li>';
        }

    }

    ul.html(li);

};

var updateOCRDriveRes = function(res) {

    var ul = $('.js-ocr-result-drive');
    var li = '';
    var data = res.data.items;

    for (var i = 0; i < data.length; i++) {
        li += '<li style="margin-top:10px">\
      <div class="identify-item">\
        <span class="head" style="width:100px">' + data[i].item + '</span>\
        <span class="con">' + data[i].itemstring + '</span>\
        </div>\
      </div>\
    </li>';

    }

    ul.html(li);

};

var updateOCRVehicleRes = function(res) {

    var ul = $('.js-ocr-result-vehicle');
    var li = '';
    var data = res.data.items;

    for (var i = 0; i < data.length; i++) {
        li += '<li style="margin-top:10px">\
      <div class="identify-item">\
        <span class="head" style="width:100px">' + data[i].item + '</span>\
        <span class="con">' + data[i].itemstring + '</span>\
        </div>\
      </div>\
    </li>';

    }

    ul.html(li);

};

var updateOCRCardRes = function(res) {

    var ul = $('.js-ocr-result-card');

    var li = '';

    for (var i = 0; i < res.length; i++) {
        var t = res[i].data;
        li += '<li>\
                    <div class="identify-item">\
                        <span class="head">' + '姓名' + '</span>\
                        <span class="con">' + t.name + '</span>\
                        </div>\
                    </div>\
                </li>\
                <li>\
                    <div class="identify-item">\
                    <span class="head">QQ</span>\
                    <span class="con">' + t.uin + '</span>\
                    </div>\
                </li>\
                <li>\
                    <div class="identify-item">\
                    <span class="head">电话</span>\
                    <span class="con">' + t.phone + '</span>\
                    </div>\
                </li>';
    }

    ul.html(li);

};

var updateFaceCheckRes = function(res) {
    var action = $('.ci-tab-panel-item-4').find('.page-demo-tab-item.active').attr('action');
    if (action == 'detect') {
        Face_Check_Handle.createFaceDetectManger();
        Face_Check_Handle.showImageResult(res);
    } else if (action == 'location') {
        Face_Check_Handle.createFaceLocationManager();
        Face_Check_Handle.showImageResult(res);
    } else if (action == 'recognize') {
        Face_Check_Handle.createFaceRecognizeManager();
        Face_Check_Handle.showImageResult(res);
    } else if (action == 'verify') {
        Face_Check_Handle.createFaceVerifyManager();
        Face_Check_Handle.showImageResult(res);
    }
};

function setDialog(message) {
    $('#message-field').html(message);
    $('#dialog-close-btn').off().click(function(event) {
        $('#dialog-field').hide();
    });
    $('#dialog-field').show();
}

function previewImage(fileObj, previewDom, index) {
    var browserVersion = window.navigator.userAgent.toUpperCase();
    if (fileObj.files) { //HTML5实现预览，兼容chrome、火狐7+等
        if (window.FileReader) {
            var reader = new FileReader();
            reader.onload = function(e) {
                previewDom.attr('src', e.target.result);
            };
            reader.readAsDataURL(fileObj.files[index]);
        } else if (browserVersion.indexOf("SAFARI") > -1) {
            setDialog("不支持Safari6.0以下浏览器的图片预览!");
        }
    } else if (browserVersion.indexOf("MSIE") > -1) {
        if (browserVersion.indexOf("MSIE 6") > -1) { //ie6
            //document.getElementById(imgPreviewId).setAttribute("src", fileObj.value);
            previewDom.attr('src', fileObj.value);
        } else { //ie[7-9]
            fileObj.select();
            if (browserVersion.indexOf("MSIE 9") > -1) fileObj.blur(); //不加上document.selection.createRange().text在ie9会拒绝访问
            /*var newPreview = document.getElementById(divPreviewId + "New");
   if (newPreview == null) {
   newPreview = document.createElement("div");
   newPreview.setAttribute("id", divPreviewId + "New");
   newPreview.style.width = previewDom.width() + "px";
   newPreview.style.height = previewDom.height() + "px";
   newPreview.style.border = "solid 1px #d2e2e2";
   }
   newPreview.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale',src='" + document.selection.createRange().text + "')";
   var tempDivPreview = document.getElementById(divPreviewId);
   tempDivPreview.parentNode.insertBefore(newPreview, tempDivPreview);
   tempDivPreview.style.display = "none";*/
        }
    } else if (browserVersion.indexOf("FIREFOX") > -1) { //firefox
        var firefoxVersion = parseFloat(browserVersion.toLowerCase().match(/firefox\/([\d.]+)/)[1]);
        if (firefoxVersion < 7) { //firefox7以下版本
            previewDom.attr('src', fileObj.files[0].getAsDataURL());
        } else { //firefox7.0+
            //document.getElementById(imgPreviewId).setAttribute("src", window.URL.createObjectURL(fileObj.files[0]));
            previewDom.attr('src', window.URL.createObjectURL(fileObj.files[0]));
        }
    } else {
        previewDom.attr('src', fileObj.value);
    }
}

function doMobileJH(url, file, input) {
    var len = $('.js-detect-content img').length;
    if (len >= 0) {
        $('.js-ul-detect').find('li').remove();
    }
    var ul = $('.js-ul-detect');
    ul.siblings().hide();
    ul.show();
    var li = '<li><div class="upload-img-item">\
                <img src="' + url + '" class="upload-img">\
                <span class="check-result js-detect-result" style="display: none">\
                    <i class="icon-result"></i>\
                    <span class="text"><span class="js-detect-result-text">正常</span>\
                    <span class="divide">|</span><span class="js-detect-result-score">0</span>%</span>\
                </span>\
                <div class="options">\
                    <a class="option-item js-detect-change" href="javascript:">\
                    <i class="icon-replace"></i>\
                    <span class="text">替换</span></a>\
                    <a class="option-item js-detect-del" href="javascript:">\
                    <i class="icon-delete"></i>\
                    <span class="text">删除</span></a>\
                </div>\
                <div class="img-mask" style="display: none">\
                    <span class="progress">\
                    <span class="percentage">\
                    <span class="percentage-inner" style="width:0%"></span>\
                    </span>\
                    <span class="progress-text">0%</span>\
                    </span>\
                </div>\
                </div></li>';
    ul.append(li);
    var li = ul.find('li:last');
    doUpdateMobile(li, url, file, input);

    var changeBtn = li.find('.js-detect-change');
    var uploader = new Uploader({
        browse: changeBtn,
        limit: 1,
        uploadType: 'detect',
        onFilesAdded: function(files) {
            li.find('img').attr('src', 'about:blank');
            doUpdateMobile(li, 0, changeBtn.find('input'));
        },
        onFilesUploaded: function(res) {
            var filesRes = res.result_list;
            $('.js-detect-tools').show();
            updateProgress(li, 100);
            updateDetectRes(li, filesRes[0]);
        }
    });
}

function doUpdateMobile(li, url, file, input) {
    updateProgress(li);
    if (!url || url == 'about:blank') {
        previewImage($($("#uploadBtn1-2")[0])[0], li.find('img'), 0);
    }

    if (url) {
        var param = {
            appid: APPID,
            bucket: BUCKET,
            url_list: ['https:' + url]
        };
        getSign().done(function(sign) {
            $.ajax({
                url: '//service.image.myqcloud.com/detection/porn_detect',
                type: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(param),
                beforeSend: function(xhr) {
                    xhr.setRequestHeader('Authorization', sign);
                },
                timeout: 10000,
                success: function(res) {
                    updateProgress(li, 100);
                    updateDetectRes(li, res.result_list[0]);
                },
                error: function() {
                    updateProgress(li, 100);
                }
            });
        });
    } else {
        var formData = new FormData();
        formData.append('appid', APPID);
        formData.append('bucket', BUCKET);
        var files = self.files;
        formData.append('image[0]', file);
        getSign().done(function(sign) {
            $.ajax({
                url: '//service.image.myqcloud.com/detection/porn_detect',
                type: 'POST',
                enctype: "multipart/form-data",
                data: formData,
                contentType: false,
                processData: false,
                beforeSend: function(xhr) {
                    xhr.setRequestHeader('Authorization', sign);
                },
                success: function(res) {
                    updateProgress(li, 100);
                    updateDetectRes(li, res.result_list[0]);
                }
            });
        });
    }
}

$(function() {

    //tab 切换
    $('a.ci-tab-item').on('click',
        function() {
            var self = $(this);
            $('a.ci-tab-item').removeClass('active');
            self.addClass('active');
            var target = self.data('target');
            self.parents('.ci-tab').attr('class', target).addClass('ci-tab');
        });

    // TODO
    //$($('a.ci-tab-item')[2]).click();
    //点击图片检测
    $('.js-img-detect').on('click', 'li',
        function() {
            if (JH_DEMO_LIMIT > 1) {
                var self = $(this);
                var url = self.find('img').attr('src');
                appendDetectImg(url);
                $('.js-detect-tools').show();
                var totalLen = $('.js-ul-detect').find('li').length;
                if (totalLen >= JH_DEMO_LIMIT) {
                    $('#uploadBtn1-2').parent().hide();
                } else {
                    $('#uploadBtn1-2').parent().show();
                }

                $('.js-ul-detect').removeClass('img-1');
                $('.js-ul-detect').removeClass('img-2');
                $('.js-ul-detect').removeClass('img-3');
                $('.js-ul-detect').removeClass('img-4');
                $('.js-ul-detect').removeClass('img-more');
                if (totalLen > 4) {
                    $('.js-ul-detect').addClass('img-more');
                } else if (totalLen > 0) {
                    $('.js-ul-detect').addClass('img-' + totalLen);
                } else {
                    $('.js-ul-detect').addClass('img-1');
                }
            } else {
                $('.js-detect-tools').show();
                var url = $(this).find('img').attr('src');
                $('#uploadBtn1-2').parent().show();
                doMobileJH(url);
            }
        });

    //点击图片获取tag
    $('.js-img-tag').on('click', 'li',
        function() {

            var self = $(this);
            var url = self.find('img').attr('src');

            updateTagImg(url);

            $('.js-tag-tools').show();

        });

    $('.js-ocr-tab').on('click', 'a',
        function() {

            var self = $(this);

            var data = self.data('tab');

            self.addClass('active').siblings().removeClass('active');

            var switchPanel = function(key) {
                $('.ci-tab-panel-item-3 .page-upload-btns').hide();
                $('.js-default-img-' + key).show().siblings().hide();

                //切换上传button
                if ($('.js-ocr-content-' + key).find('li').size()) {
                    $('.js-ocr-tools-' + key).show();
                } else {
                    $('.js-ocr-tools-' + key).hide();
                }
            }

            switchPanel(data);

            return false;

        });

    var bindClick = function(key, handler) {
        $('.js-img-ocr-' + key).on('click', 'li',
            function() {

                var self = $(this);
                var url = self.find('img').attr('src');

                handler(url);

                $('.ci-tab-panel-item-3 .page-upload-btns').hide();
                $('.js-ocr-tools-' + key).show();
            });
    }

    //点击身份证
    bindClick('id', updateOCRIdImg);
    //点击名片
    bindClick('card', updateOCRCardImg);
    //点击通用印刷体
    bindClick('print', updateOCRPrintImg);
    //点击驾驶证
    bindClick('drive', updateOCRDriveImg);
    //点击行驶证
    bindClick('vehicle', updateOCRVehicleImg);

    //删除鉴黄的图
    $('.js-detect-content').on('click', 'li a.js-detect-del',
        function() {

            var self = $(this);
            var ul = self.parents('ul');
            self.parents('li').remove();
            if (ul.find('li').length == 0) {
                $('.js-detect-tools').hide();
                $('.js-detect-text').show();
            }

            var totalLen = $('.js-ul-detect').find('li').length;
            $('.js-ul-detect').removeClass('img-1');
            $('.js-ul-detect').removeClass('img-2');
            $('.js-ul-detect').removeClass('img-3');
            $('.js-ul-detect').removeClass('img-4');
            $('.js-ul-detect').removeClass('img-more');
            if (totalLen > 4) {
                $('.js-ul-detect').addClass('img-more');
            } else if (totalLen > 0) {
                $('.js-ul-detect').addClass('img-' + totalLen);
            } else {
                $('.js-ul-detect').addClass('img-1');
            }
            if (totalLen >= (JH_DEMO_LIMIT)) {
                $('#uploadBtn1-2').parent().addClass('disabled');
            } else if (totalLen >= 1) {
                $('#uploadBtn1-2').parent().removeClass('disabled').show();
            } else {
                $('#uploadBtn1-2').parent().removeClass('disabled').show();
            }

        });

    //删除所有鉴黄的图
    $('.js-detect-reset').on('click',
        function() {

            var self = $(this);
            var ul = $('.js-ul-detect');
            ul.find('li').remove();
            if (ul.find('li').length == 0) {
                $('.js-detect-tools').hide();
                $('.js-detect-text').show();
            }

        });

    $('.ci-tab-panel-item-4').find('.page-demo-tab').find('.page-demo-tab-item').off().click(function(event) {
        $('.ci-tab-panel-item-4').find('.page-demo-tab').find('.page-demo-tab-item').removeClass('active');
        $(event.target).addClass('active');
        var index = $(event.target).index();
        var action = $('.ci-tab-panel-item-4').find('.page-demo-tab-item.active').attr('action');
        if (index == 2) {
            $('#face-upload-btn-dom').hide();
        } else {
            $('#face-upload-btn-dom').show();
        }
        $('#face-' + action + '-dom').siblings().hide();
        $('#face-' + action + '-dom').show();
        $($('.ci-tab-panel-item-4').find('.default-img-list').find('li:first')).trigger('click');
    });

    $($('.ci-tab-panel-item-4').find('.page-demo-tab').find('.page-demo-tab-item')[0]).trigger('click');

    /* $('.ci-tab-panel-item-4').find('.default-img-list').find('li').click(function(event) {
      var action = $('.ci-tab-panel-item-4').find('.page-demo-tab-item.active').attr('action');
      var imgObj = $(event.target).find('img');
      var imgUrl = imgObj[0].src;
      if (action == "detect") {
        //uploader41.startFaceDetectUpload(imgUrl);
      } else if (action == 'location') {
        /uploader41.startFaceLocationUpload(imgUrl);
      } else if (action == 'recognize') {
        uploader41.startFaceRecognizeUpload(imgUrl);
      } else {
        uploader42.replaceIndex = undefined;
        if (uploader42.filearr.length > 1) {
          uploader42.filearr.length = 1;
        }
        uploader42.filearr.push(imgUrl);
        uploader42.startFaceVerifyUpload();
      }
    }); */

    $(window).scroll(function() {

        var scroll = $(window).scrollTop();
        if (scroll > 65) {
            $('.ci-tab-list-wrapper').css('top', 0);
        } else {
            $('.ci-tab-list-wrapper').css('top', 65);
        }
    });

    if (JH_DEMO_LIMIT > 1) {
        var uploader11 = new Uploader({
            browse: $('#uploadBtn1-1'),
            drop: $('.js-detect-content'),
            limit: JH_DEMO_LIMIT,
            uploadType: 'detect',
            onFilesAdded: function(files) {
                onDetectAdded(files, $('#uploadBtn1-1'));
                var ul = $('.js-ul-detect');
                var totalLen = ul.find('li').length;

                $('.js-detect-tools').show();

                if (JH_DEMO_LIMIT != 1) {
                    if (totalLen >= (JH_DEMO_LIMIT) && JH_DEMO_LIMIT != 1) {
                        $('#uploadBtn1-2').parent().hide();
                    } else {
                        $('#uploadBtn1-2').parent().show();
                    }
                } else {
                    $('#uploadBtn1-2').parent().show();
                }
            },
            onDragAdded: function(files) {
                var fakeInput = [];
                fakeInput.push({
                    files: files
                });
                onDetectAdded(files, fakeInput);
            },
            onFilesUploaded: onDetectDone
        });
        var uploader12 = new Uploader({
            uploadType: 'detect',
            browse: $('#uploadBtn1-2'),
            limit: 10,
            onFilesAdded: function(files) {
                onDetectAdded(files, $('#uploadBtn1-2'));
                var ul = $('.js-ul-detect');
                var totalLen = ul.find('li').length;

                $('.js-detect-tools').show();

                if (totalLen >= 10) {
                    $('#uploadBtn1-2').parent().addClass('disabled');
                } else if (totalLen >= 1) {
                    $('#uploadBtn1-2').parent().removeClass('disabled').show();
                } else {
                    $('#uploadBtn1-2').parent().removeClass('disabled').show();
                }

                $('.js-ul-detect').removeClass('img-1');
                $('.js-ul-detect').removeClass('img-2');
                $('.js-ul-detect').removeClass('img-3');
                $('.js-ul-detect').removeClass('img-4');
                $('.js-ul-detect').removeClass('img-more');
                if (totalLen > 4) {
                    $('.js-ul-detect').addClass('img-more');
                } else if (totalLen > 0) {
                    $('.js-ul-detect').addClass('img-' + totalLen);
                } else {
                    $('.js-ul-detect').addClass('img-1');
                }
            },
            onFilesUploaded: onDetectDone
        });
    } else {
        var uploader13 = new Uploader({
            uploadType: 'detect',
            browse: $('#uploadBtn1-2'),
            limit: JH_DEMO_LIMIT
        });
        $('.js-detect-reset').hide();
        $('#uploadBtn1-2').parent().removeClass('disabled').show();
    }

    var uploader21 = new Uploader({
        uploadType: 'tag',
        limit: 1,
        browse: $('#uploadBtn2-1'),
        drop: $('.js-tag-content'),
        onFilesUploaded: onTagDone
    });

    var uploader22 = new Uploader({
        uploadType: 'tag',
        limit: 1,
        browse: $('#uploadBtn2-2'),
        onFilesUploaded: onTagDone
    });

    var uploader31 = new Uploader({
        uploadType: 'ocr-id',
        limit: 1,
        browse: $('#uploadBtn3-1'),
        drop: $('.js-ocr-content-id'),
        onFilesUploaded: onOcrIdDone
    });

    var uploader32 = new Uploader({
        uploadType: 'ocr-id',
        limit: 1,
        browse: $('#uploadBtn3-2'),
        onFilesUploaded: onOcrIdDone
    });

    var uploader33 = new Uploader({
        uploadType: 'ocr-card',
        limit: 1,
        browse: $('#uploadBtn3-3'),
        drop: $('.js-ocr-content-card'),
        onFilesUploaded: onOcrCardDone
    });

    var uploader34 = new Uploader({
        uploadType: 'ocr-card',
        limit: 1,
        browse: $('#uploadBtn3-4'),
        onFilesUploaded: onOcrCardDone
    });

    var uploader35 = new Uploader({
        uploadType: 'ocr-print',
        limit: 1,
        browse: $('#uploadBtn3-5'),
        drop: $('.js-ocr-content-print'),
        onFilesUploaded: onOcrPrintDone
    });

    var uploader36 = new Uploader({
        uploadType: 'ocr-print',
        limit: 1,
        browse: $('#uploadBtn3-6'),
        onFilesUploaded: onOcrPrintDone
    });

    var uploader37 = new Uploader({
        uploadType: 'ocr-drive',
        limit: 1,
        browse: $('#uploadBtn3-7'),
        drop: $('.js-ocr-content-drive'),
        onFilesUploaded: onOcrDriveDone
    });

    var uploader38 = new Uploader({
        uploadType: 'ocr-drive',
        limit: 1,
        browse: $('#uploadBtn3-8'),
        onFilesUploaded: onOcrDriveDone
    });

    var uploader39 = new Uploader({
        uploadType: 'ocr-vehicle',
        limit: 1,
        browse: $('#uploadBtn3-9'),
        drop: $('.js-ocr-content-vehicle'),
        onFilesUploaded: onOcrVehicleDone
    });

    var uploader310 = new Uploader({
        uploadType: 'ocr-vehicle',
        limit: 1,
        browse: $('#uploadBtn3-10'),
        onFilesUploaded: onOcrVehicleDone
    });

    /*  var uploader41 = new Uploader({
       uploadType: 'face-check',
       limit: 1,
       browse: $('#fileUpload'),
       onFilesUploaded: onFaceFileDoned
     }); */

    var uploader42 = new Uploader({
        uploadType: 'face-check',
        limit: 2,
        //autoStart: true,
        browse: $('#uploadBtn4-2'),
        onFilesAdded: function(files) {
            if (uploader42.replaceIndex === 0 || uploader42.replaceIndex === 1) {
                if (files.length > 1) {
                    setDialog("替换时不能选取多个文件");
                    return;
                }
                uploader42.filearr[uploader42.replaceIndex] = files[0];
                uploader42.replaceIndex = undefined;
                return;
            }
            if (files.length == 2) {
                uploader42.filearr.length = 0;
            } else if (files.length > 2) {
                return;
            } else if (files.length == 1 && uploader42.filearr.length > 1) {
                uploader42.filearr.length = 1;
            }
            $(files).each(function(index, item) {
                uploader42.filearr.push(item);
            });
            uploader42.replaceIndex = undefined;
        },
        onFileDelete: function(src) {

        },
        onFilesUploaded: onFaceFileDoned
    });
    uploader42.filearr = [];
});

$(document).ready(function() {
    var t = $(window).innerHeight();

    $('.next-page').on('click',
        function(e) {
            var t = $(this).offset().top;
            var h = $(this).height();
            $(document).scrollTop(t + h);
            return false;
        });

    $(".page-description").height(t - 65 - 50);
    var i = $(".ci-tab"),
        a = $(".ci-tab-item"),
        c = $(".ci-tab-list-wrapper");

    var o = 0;
    $(window).on("scroll",
        function(t) {
            var i = $(window).scrollTop();
            if (i <= 0) {
                c.css('z-index', 4);
                c.css("top", "65px");
            } else {
                c.css('z-index', 101);
                c.css("top", "0"),
                    o = i;
            }

        });
    $('.ci-tab-panel-item-4').find('.page-demo-tab').find('.page-demo-tab-item.active').trigger('click');
    $('.ci-tab-panel-item-1').find('.default-img-list').find('li').attr('title', "点击图片可查看识别效果");
    $('.ci-tab-panel-item-2').find('.default-img-list').find('li').attr('title', "点击图片可查看识别效果");
    $('.ci-tab-panel-item-3').find('.default-img-list').find('li').attr('title', "点击图片可查看识别效果");
    $('.ci-tab-panel-item-4').find('.default-img-list').find('li').attr('title', "点击图片可查看识别效果");
    $($('.ci-tab-panel-item-1').find('.default-img-list').find('img')[0]).trigger('click');
    $($('.ci-tab-panel-item-2').find('.default-img-list').find('img')[0]).trigger('click');
    $($('.ci-tab-panel-item-3').find('.default-img-list.js-img-ocr-id').find('img')[0]).trigger('click');
    $($('.ci-tab-panel-item-3').find('.default-img-list.js-img-ocr-card').find('img')[0]).trigger('click');
    $($('.ci-tab-panel-item-3').find('.default-img-list.js-img-ocr-drive').find('img')[0]).trigger('click');
    $($('.ci-tab-panel-item-3').find('.default-img-list.js-img-ocr-vehicle').find('img')[0]).trigger('click');
    $($('.ci-tab-panel-item-3').find('.default-img-list.js-img-ocr-print').find('img')[0]).trigger('click');

    $($('.ci-tab-list').find('li')[0]).find('a').trigger('click');
    $('#face-detect-dom').css('height', $('#face-detect-dom').width());
    $('#face-location-dom').css('height', $('#face-location-dom').width());
    if (JH_DEMO_LIMIT == 1) {
        $('.page-detail-list').hide();
    }
});
/*
 * product-experience.js
 * by patyang 2015-08-27
 */

var Face_Check_Handle = {
    //instance: DemoManager.DEMO_TYPE.DEMO_FACE_DETECT,
    ajScope: {},
    setScope: function(scope) {
        this.ajScope = scope;
    },
    flush: function() {
        this.ajScope.$apply();
    },
    clearResult: function() {
        Face_Check_Handle.ajScope.showError(false);
        Face_Check_Handle.ajScope.setRequest(0);
        Face_Check_Handle.ajScope.setResponse(0);
        Face_Check_Handle.ajScope.setResult(false);
    },
    sendAction: function(data) {
        DemoManager.sendAction(data,
            function() {
                Face_Check_Handle.ajScope.showProgress(true);
            },
            function(error, data) {
                Face_Check_Handle.ajScope.showProgress(false);
                if (data && data.result) {
                    var errorCode = data.result.errorcode;
                    if (0 != errorCode) {
                        var desc = DemoManager.getAPIError(errorCode);
                        Face_Check_Handle.ajScope.showError(true, desc);
                    }
                }
                if (error == 0) {
                    Face_Check_Handle.showImageResult(data);
                    Face_Check_Handle.ajScope.setRequest(error, data.request);
                    Face_Check_Handle.ajScope.setResponse(error, data.result);
                } else {
                    var errorDesc = {};
                    errorDesc.title = "未知错误";
                    errorDesc.desc = "请确认网络是否正常";
                    Face_Check_Handle.ajScope.showError(true, errorDesc);
                    Face_Check_Handle.ajScope.setRequest(error, '');
                    Face_Check_Handle.ajScope.setResponse(error, '');
                }
            });
    },

    showImageResult: function(data) {

    },

    Init: function(instance) {
        this.instance = instance;
        switch (instance) {
            case DemoManager.DEMO_TYPE.DEMO_FACE_DETECT:
                return this.createFaceDetectManger();
                break;
            case DemoManager.DEMO_TYPE.DEMO_FACE_LOC:
                return this.createFaceLocationManager();
                break;
            case DemoManager.DEMO_TYPE.DEMO_FACE_COMPARE:
                return this.createFaceVerifyManager();
                break;
            case DemoManager.DEMO_TYPE.DEMO_FACE_1N:
                return this.createFaceRecognizeManager();
                break;
            case DemoManager.DEMO_TYPE.DEMO_IMAGE_RECOGNIZE:
                return this.createImageRecognizeManager();
                break;
            case DemoManager.DEMO_TYPE.DEMO_OCR_ID:
                return this.createOCRIDManager();
                break;
            case DemoManager.DEMO_TYPE.DEMO_OCR_MP:
                return this.createOCRMingPianManager();
                break;
            case DemoManager.DEMO_TYPE.DEMO_IMAGE_PORN:
                return this.createImagePornManager();
                break;
            default:
                break
        }
    },
    createFaceDetectManger: function() {
        Face_Check_Handle = $.extend(Face_Check_Handle, {
            showImageResult: function(result) {
                var data = result;
                if (data != null && data.code == 0) {
                    var face = data.data["face"][0];
                    var x = face["x"];
                    var y = face["y"];
                    var w = face["width"];
                    var h = face["height"];
                    var image_width = data.data["image_width"];
                    var image_height = data.data["image_height"];
                    var max_len = Math.max(image_width, image_height);
                    var canvasWidth = Number($('#face-detect-dom').width());
                    var canvasHeight = Number($('#face-detect-dom').height()),
                        ratio;
                    if (max_len == canvasWidth) {
                        var ratio = canvasWidth / max_len;
                    } else {
                        ratio = canvasHeight / max_len;
                    }

                    var canvasXOffset = (canvasWidth - image_width * ratio) / 2.0;
                    var canvasYOffset = (canvasHeight - image_height * ratio) / 2.0;

                    var imgX = x * ratio;
                    var imgY = y * ratio;
                    var imgCanvasWidth = w * ratio;
                    var imgCanvasHeight = h * ratio;
                    var canvasX = canvasXOffset + imgX;
                    var canvasY = canvasYOffset + imgY;
                    var faceDetectBox = {
                        'left': (canvasX + 'px'),
                        'top': (canvasY + 'px'),
                        'width': (imgCanvasWidth + 'px'),
                        'height': (imgCanvasHeight + 'px')
                    };

                    var lx = canvasXOffset + imgX;
                    var rw = canvasWidth - lx - imgCanvasWidth;
                    var lw = lx;

                    var faceLabelLoc = {};
                    var faceLabelLeft = true;
                    if (rw < 130) {
                        if (lw < 130) {
                            if (lw > rw) {
                                faceLabelLoc = {
                                    'left': (2 + 'px'),
                                    'top': (canvasY + 'px')
                                };
                                faceLabelLeft = true;
                            } else {
                                faceLabelLoc = {
                                    'left': (canvasWidth - 106 + 'px'),
                                    'top': (canvasY + 'px')
                                };
                                faceLabelLeft = false;
                            }
                        } else {
                            var ix = (x) * ratio;
                            var cx = ix + canvasXOffset;
                            faceLabelLoc = {
                                'left': (cx - 30 - 100 + 'px'),
                                'top': (canvasY + 'px')
                            };
                            faceLabelLeft = true;
                        }
                    } else {
                        var iRTx = (x + w) * ratio + canvasXOffset + rw / 2;
                        //var cRTx = iRTx+canvasXOffset;
                        faceLabelLoc = {
                            'left': iRTx,
                            'top': (canvasY + 'px')
                        };
                        faceLabelLeft = false;
                    }

                    var expressionArray = ["黯然伤神", "半嗔半喜", "似笑非笑", "笑逐颜开", "莞尔一笑", "喜上眉梢", "眉开眼笑", "笑尽妖娆", "心花怒放", "一笑倾城"];
                    var genderVal = face["gender"];
                    var gender = "男";
                    if (genderVal < 50) {
                        gender = "女";
                    }
                    var age = "" + face["age"];
                    var expressionVal = face["expression"];
                    var section = parseInt(expressionVal / 10);
                    var expression = section < expressionArray.length ? expressionArray[section] : expressionArray[expressionArray.length - 1];
                    expression = "" + expression;
                    var beauty = "" + face["beauty"];
                    var faceDetectInfo = {
                        'gender': gender,
                        'age': age,
                        'expression': expression,
                        'beauty': beauty
                    };

                    var data = {};
                    data.faceDetectBox = faceDetectBox;
                    data.faceLabelLoc = faceLabelLoc;
                    data.faceDetectInfo = faceDetectInfo;
                    data.faceLabelLeft = faceLabelLeft;
                    if (faceLabelLeft) {
                        data.faceLabelMarginLeft = 5 + 'px';
                    } else {
                        data.faceLabelMarginLeft = 10 + 'px';
                    }
                    Face_Check_Handle.setResult(true, data);
                } else {
                    $('#error-check-detect-field').siblings().hide();
                    $('#error-check-detect-field').show();
                }
            },
            setResult: function(flag, data) {
                $('.facein-result-area').find('.face-location').show().css('width', data.faceDetectBox.width);
                $('.facein-result-area').find('.face-location').show().css('height', data.faceDetectBox.height);
                $('.facein-result-area').find('.face-location').show().css('left', data.faceDetectBox.left);
                $('.facein-result-area').find('.face-location').show().css('top', data.faceDetectBox.top);
                $('.facein-result-area').find('.face-info').show().css('left', data.faceLabelLoc.left);
                $('.facein-result-area').find('.face-info').show().css('top', data.faceLabelLoc.top);
                for (var key in data.faceDetectInfo) {
                    $('.facein-result-area').find('.face-info').find('#image_' + key).html(data.faceDetectInfo[key]);
                }
            }
        });
        return Face_Check_Handle;
    },
    createFaceLocationManager: function() {
        Face_Check_Handle = $.extend(Face_Check_Handle, {
            showImageResult: function(result) {
                var data = result.data;
                if (data && data.face_shape.length > 0) {
                    var max_len = Math.max(data.image_width, data.image_height);
                    var canvasWidth = Number($('#face-location-dom').width());
                    var scale = canvasWidth / max_len;
                    var canvasXOffset = (canvasWidth - data.image_width * scale) / 2.0;
                    var canvasYOffset = (canvasWidth - data.image_height * scale) / 2.0;

                    var landmark = new Array();
                    var shape = data.face_shape[0];
                    landmark = landmark.concat(shape.face_profile, shape.left_eye, shape.left_eyebrow, shape.mouth, shape.nose, shape.right_eye, shape.right_eyebrow);

                    var faceLocLandmarks = [];
                    for (var i = 0; i < landmark.length; ++i) {
                        var x = parseInt(scale * landmark[i].x);
                        var y = parseInt(scale * landmark[i].y);
                        x += canvasXOffset;
                        y += canvasYOffset;
                        var mark = {
                            left: x + 'px',
                            top: y + 'px'
                        };
                        faceLocLandmarks.push(mark);
                    }

                    var data = {};
                    data.faceLocLandmarks = faceLocLandmarks;
                    Face_Check_Handle.setResult(true, data);
                } else {
                    $('#error-check-location-field').siblings().hide();
                    $('#error-check-location-field').show();
                }
            },
            setResult: function(flag, data) {
                $('.facein-result-area').find('.face-location-points').html('');
                $(data.faceLocLandmarks).each(function(index, item) {
                    $('.facein-result-area').find('.face-location-points').append('<i class="point-item" style="left: ' + item.left + ';top: ' + item.top + ';"></i>');
                });
                $('.facein-result-area').find('.face-location-points').show();
            }
        });
        return Face_Check_Handle;
    },
    createFaceVerifyManager: function() {
        Face_Check_Handle = $.extend({},
            Face_Check_Handle, {
                showImageResult: function(result) {
                    var data = result.data;
                    if (data && result.code == 0) {
                        var score = data.similarity.toFixed(0);
                        var data = {};
                        data.score = score + "%";
                        Face_Check_Handle.setResult(true, data);
                    } else {
                        $('.col-3-area').find('.upload-result').find('#compare-value').html('识别失败,请重新选择图片!');
                    }
                },
                setResult: function(flag, data) {
                    $('.col-3-area').find('.upload-result').find('#compare-value').html('相似度：' + data.score);
                }
            });
        return Face_Check_Handle;
    },
    createFaceRecognizeManager: function() {
        Face_Check_Handle = $.extend(Face_Check_Handle, {
            showImageResult: function(result) {
                var data = result;
                if (data && data.code == 0) {
                    var returnArray = [];
                    var candidateArray = data.data.candidates;
                    for (var i = 0; i < candidateArray.length; i++) {
                        var candidateValue = {};
                        var candidate = candidateArray[i];
                        var score = parseInt(candidate.confidence);
                        candidateValue.score = score;

                        var person_id = candidate.person_id;
                        var splitArray = person_id.split("_");
                        var relativeURL = splitArray[0];
                        var realURL = 'https://' + candidateArray[i].tag;
                        candidateValue.url = realURL;

                        returnArray.push(candidateValue);
                    }
                    var data = {};
                    data.face1NRet = returnArray;
                    Face_Check_Handle.setResult(true, data);
                }
            },
            setResult: function(flag, data) {
                $('.face-search').find('.search-list').html('');
                $(data.face1NRet).each(function(index, item) {
                    $('.face-search').find('.search-list').append('<li><div class="search-result-item"> ' + '<img src="' + item.url + '" class="upload-img"> ' + '<span class="check-result ' + (index == 0 ? 'success' : '') + '" style=""><i class="icon-result"></i>' + '<span class="text"><span class="js-detect-result-text">' + Number(item.score.toFixed(2)) + '</span>%</span>' + '</span> </div></li>');
                });
                $('.face-search').find('.search-list').show();
            }
        });
        return Face_Check_Handle;
    }
};