// 动态加载城市数据到页面
document.addEventListener('DOMContentLoaded', function() {
    fetch('cities.json')
        .then(response => response.json())
        .then(citiesData => {
            // 获取URL中的城市ID
            const urlParams = new URLSearchParams(window.location.search);
            const cityId = parseInt(urlParams.get('id'));

            // 查找对应的城市数据
            const city = citiesData.find(c => c.id === cityId);

            if (city) {
                document.getElementById('city-name').textContent = city.name;
                document.getElementById('city-img').src = city.img;
                document.getElementById('city-img').alt = city.name;
                document.getElementById('city-description').textContent = city.description;
            } else {
                document.getElementById('city-detail').textContent = '未找到相关城市信息';
            }
        })
        .catch(error => console.error('Error loading city data:', error));
});
