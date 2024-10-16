// 簡易パスワードチェック
function checkPassword() {
    const inputPassword = document.getElementById("password-input").value;
    const correctPassword = "09"; // 正しいパスワード

    if (inputPassword === correctPassword) {
        document.getElementById("password-screen").style.display = "none"; // パスワード画面を非表示
        document.getElementById("protected-content").style.display = "block"; // コンテンツを表示
    } else {
        document.getElementById("error-message").style.display = "block"; // エラーメッセージ表示
    }
}

// 時刻表示の機能を継続
window.onload = function() {
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        document.querySelector('.time').textContent = timeString;
    }
    setInterval(updateTime, 1000);
    updateTime();
};
