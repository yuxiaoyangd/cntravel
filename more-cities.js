// 动态加载城市数据到页面
document.addEventListener('DOMContentLoaded', function() {
    fetch('cities.json')
        .then(response => response.json())
        .then(citiesData => {
            const container = document.getElementById('more-cities-container');
            citiesData.forEach(city => {
                const cityElement = document.createElement('div');
                cityElement.classList.add('city');
                cityElement.innerHTML = `
                    <a href="city-detail.html?id=${city.id}">

                        <img src="${city.img}" alt="${city.name}">
                        <p>${city.description}</p>
                    </a>
                `;
                container.appendChild(cityElement);
            });
        })
        .catch(error => console.error('Error loading city data:', error));
});
