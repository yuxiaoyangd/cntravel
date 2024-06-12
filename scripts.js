// 初始化Google地图
function initMap() {
    var map = new google.maps.Map(document.getElementById('map-container'), {
        center: {lat: 39.9042, lng: 116.4074}, // 北京坐标
        zoom: 5
    });
}

// 加载Google地图脚本
function loadScript() {
    var script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);
}

document.addEventListener('DOMContentLoaded', loadScript);

// 模拟天气预报数据
document.getElementById('weather-container').innerHTML = `
    <p>北京：晴，25°C</p>
    <p>上海：多云，22°C</p>
    <!-- 添加更多天气信息 -->
`;

// 菜单切换
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}
