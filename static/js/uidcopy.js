function copyUid(elementId, uid) {
    var uidClipboard = new ClipboardJS(elementId);

    uidClipboard.on('success', function (e) {
        e.clearSelection();
        swal("复制成功", "如果写入剪贴板失败请手动复制uid哦：" + uid, "success")
        document.querySelector(elementId).remove();
    });

    uidClipboard.on('error', function (e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
        swal("Oops...", "复制出现错误！", "error")
    });
}