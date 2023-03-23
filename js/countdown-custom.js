jQuery(document).ready(function() {
    $(function () {
        // 오늘 날짜의 자정 시간
        var now = new Date();
        var midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24, 0, 0);

        // 다음 자정까지 남은 시간 계산
        var diff = midnight.getTime() - now.getTime();
        var diffSeconds = Math.round(diff / 1000);

        // 숫자가 한 자리일 경우 0을 붙여줌
        function formatNumber(number) {
            return number < 10 ? '0' + number : number;
        }

        $('#defaultCountdown').countdown({
            until: '+' + diffSeconds,
            format: 'DHMS',
            padZeroes: true,
            formatNumber: formatNumber
        });
        $('.countdown').countdown({
            until: '+' + diffSeconds,
            format: 'DHMS',
            padZeroes: true,
            formatNumber: formatNumber
        });
    });
});