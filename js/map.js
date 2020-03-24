$(function () {
    var country = [
        {id: 'NL-89', name: 'Netherlands', event: '', url: ''},
        {id: 'CN-102', name: 'China', event: '', url: ''},
        {id: 'TH-152', name: 'Thailand', event: '', url: ''},
    ];
    var province = [
        {id: 'CN-44', name: 'Guangdong', event: '', url: ''},
        {id: 'CN-31', name: 'Shanghai', event: '', url: ''},
        {id: 'CN-32', name: 'Jiangsu', event: '', url: ''},
        {id: 'CN-42', name: 'Hubei', event: '', url: ''},
    ];


    $('#world-map').vectorMap({
        map: 'world_merc',
        // backgroundColor: '#77cfff',
        markerStyle: {
            initial: {
                fill: '#fd8888', // 足迹位置的填充颜色
                stroke: '#fff'   // 足迹位置的描边颜色
            },
            hover: {
                fill: '#fd2020', // 鼠标滑动至足迹位置后的填充颜色
                stroke: '#fff',  // 鼠标滑动至足迹位置后的描边颜色
                "fill-opacity": 0.8
            },
        },
        regionStyle: {
            initial: {
                fill: '#fff',   // 地图颜色
                "fill-opacity": 1, // 省份（州）是否隐藏，鼠标滑动时显示; 1：显示，2：隐藏。
                stroke: 'none',
                "stroke-width": 0,
                "stroke-opacity": 1
            },
            hover: {
                fill: '#A79A74',  // 鼠标滑动至某省份的高亮颜色。
                "fill-opacity": 0.8
            },
            selected: {
                fill: 'yellow'
            },
            selectedHover: {}
        },
        series: {
            regions: [{
                values: {
                    "CN": 1,
                    "NL": 1,
                    "TH": 1,
                },
                scale: ['#C8EEFF', '#A79A74'],
                normalizeFunction: 'polynomial'
            }]
        },
        focusOn:
            {
                x: 0.66,
                y: 0.56,
                scale: 2.6,
            },
        // markers: [ // 足迹位置
        //
        //     // {latLng: [经度（保留两位小数）, 纬度（保留两位小数）], name: '城市名称'},
        //     // 推荐查询经纬度网站：http://www.gpsspg.com/maps.htm
        //     {latLng: [31.24, 121.50], name: 'Shanghai 上海'},
        //     {latLng: [30.59, 114.31], name: 'Wuhan 武汉'},
        //     {latLng: [22.27, 113.58], name: 'Zhuhai 珠海'},
        //     {latLng: [22.28, 114.17], name: 'Hong Kong 香港'},
        //     {latLng: [32.06, 118.80], name: 'Nanjing 南京'},
        //     {latLng: [31.30, 120.58], name: 'Suzhou 苏州'},
        //     {latLng: [22.20, 113.55], name: 'Macao 澳门'},
        //     {latLng: [22.52, 113.39], name: 'Zhongshan 中山'},
        //     {latLng: [22.54, 114.06], name: 'Shenzhen 深圳'},
        //     {latLng: [23.13, 113.26], name: 'Guangzhou 广州'},
        //     {latLng: [23.35, 116.68], name: 'Shantou 汕头'},
        //     {latLng: [23.11, 114.42], name: 'Huizhou 惠州'},
        //     {latLng: [13.73, 100.57], name: 'Bangkok 曼谷'},
        //     {latLng: [18.79, 98.99], name: 'Chiangmai 清迈'},
        //     {latLng: [12.92, 100.88], name: 'Pattaya 芭提雅'},
        //     {latLng: [52.37, 4.90], name: 'Amsterdam 阿姆斯特丹'},
        //     {latLng: [52.08, 4.31], name: 'Den Haag 海牙'},
        //     {latLng: [52.01, 4.36], name: 'Delft 代尔夫特'},
        //     {latLng: [52.16, 4.50], name: 'Leiden 莱顿'},
        // ]
    });
});
$(function () {
    $('#china-map').vectorMap({
            map: 'cn_merc',
            markerStyle: {
                initial: {
                    fill: '#696e74', // 足迹位置的填充颜色
                    stroke: '#fff'   // 足迹位置的描边颜色
                },
                hover: {
                    fill: '#fff', // 鼠标滑动至足迹位置后的填充颜色
                    stroke: '#696e74',  // 鼠标滑动至足迹位置后的描边颜色
                    "fill-opacity": 0.8
                },
            },
            regionStyle: {
                initial: {
                    fill: '#fff',   // 地图颜色
                    "fill-opacity": 1, // 省份（州）是否隐藏，鼠标滑动时显示; 1：显示，2：隐藏。
                    stroke: 'none',
                    "stroke-width": 0,
                    "stroke-opacity": 1
                },
                hover: {
                    fill: '#A79A74',  // 鼠标滑动至某省份的高亮颜色。
                    "fill-opacity": 0.8
                },
                selected: {
                    fill: 'yellow'
                },
                selectedHover: {}
            },
            series: {
                regions: [{
                    values: {
                        "CN-31": 1,
                        "CN-32": 1,
                        "CN-44": 1,
                        "CN-42": 1

                        // "CN-44": 1,
                        // "CN-42": 1
                    },
                    scale: ['#C8EEFF', '#A79A74'],
                    normalizeFunction: 'polynomial'
                }],
            },
            markers: [ // 足迹位置

            // {latLng: [经度（保留两位小数）, 纬度（保留两位小数）], name: '城市名称'},
            // 推荐查询经纬度网站：http://www.gpsspg.com/maps.htm
                {latLng: [31.24, 121.50], name: 'Shanghai 上海'},
                {latLng: [30.59, 114.31], name: 'Wuhan 武汉'},
                {latLng: [22.27, 113.58], name: 'Zhuhai 珠海'},
                {latLng: [22.28, 114.17], name: 'Hong Kong 香港'},
                {latLng: [32.06, 118.80], name: 'Nanjing 南京'},
                {latLng: [31.30, 120.58], name: 'Suzhou 苏州'},
                {latLng: [22.20, 113.55], name: 'Macao 澳门'},
                {latLng: [22.52, 113.39], name: 'Zhongshan 中山'},
                {latLng: [22.54, 114.06], name: 'Shenzhen 深圳'},
                {latLng: [23.13, 113.26], name: 'Guangzhou 广州'},
                {latLng: [23.35, 116.68], name: 'Shantou 汕头'},
                {latLng: [23.11, 114.42], name: 'Huizhou 惠州'}
        //     {latLng: [13.73, 100.57], name: 'Bangkok 曼谷'},
        //     {latLng: [18.79, 98.99], name: 'Chiangmai 清迈'},
        //     {latLng: [12.92, 100.88], name: 'Pattaya 芭提雅'},
        //     {latLng: [52.37, 4.90], name: 'Amsterdam 阿姆斯特丹'},
        //     {latLng: [52.08, 4.31], name: 'Den Haag 海牙'},
        //     {latLng: [52.01, 4.36], name: 'Delft 代尔夫特'},
        //     {latLng: [52.16, 4.50], name: 'Leiden 莱顿'},
            ]
        }
    );
});
$(function () {
    $('#thailand-map').vectorMap({
        map: 'th_merc',
        markerStyle: {
            initial: {
                fill: '#696e74', // 足迹位置的填充颜色
                stroke: '#fff'   // 足迹位置的描边颜色
            },
            hover: {
                fill: '#fff', // 鼠标滑动至足迹位置后的填充颜色
                stroke: '#696e74',  // 鼠标滑动至足迹位置后的描边颜色
                "fill-opacity": 0.8
            },
        },
        regionStyle: {
            initial: {
                fill: '#fff',   // 地图颜色
                "fill-opacity": 1, // 省份（州）是否隐藏，鼠标滑动时显示; 1：显示，2：隐藏。
                stroke: 'none',
                "stroke-width": 0,
                "stroke-opacity": 1
            },
            hover: {
                fill: '#A79A74',  // 鼠标滑动至某省份的高亮颜色。
                "fill-opacity": 0.8
            },
            selected: {
                fill: 'yellow'
            },
            selectedHover: {}
        },
        series: {
            regions: [{
                values: {
                    "TH-50": 1,
                    "TH-10": 1,
                    "TH-20": 1,
                },
                scale: ['#C8EEFF', '#A79A74'],
                normalizeFunction: 'polynomial'
            }],
        },
        markers: [ // 足迹位置

            // {latLng: [经度（保留两位小数）, 纬度（保留两位小数）], name: '城市名称'},
            // 推荐查询经纬度网站：http://www.gpsspg.com/maps.htm
            // {latLng: [31.24, 121.50], name: 'Shanghai 上海'},
            // {latLng: [30.59, 114.31], name: 'Wuhan 武汉'},
            // {latLng: [22.27, 113.58], name: 'Zhuhai 珠海'},
            // {latLng: [22.28, 114.17], name: 'Hong Kong 香港'},
            // {latLng: [32.06, 118.80], name: 'Nanjing 南京'},
            // {latLng: [31.30, 120.58], name: 'Suzhou苏州'},
            // {latLng: [22.20, 113.55], name: 'Macao 澳门'},
            // {latLng: [22.52, 113.39], name: 'Zhongshan 中山'},
            // {latLng: [22.54, 114.06], name: 'Shenzhen 深圳'},
            // {latLng: [23.13, 113.26], name: 'Guangzhou 广州'},
            // {latLng: [23.35, 116.68], name: 'Shantou 汕头'},
            // {latLng: [23.11, 114.42], name: 'Huizhou 惠州'},
            {latLng: [13.73, 100.57], name: '曼谷 Bangkok'},
            {latLng: [18.79, 98.99], name: '清迈 Chiangmai'},
            {latLng: [12.92, 100.88], name: '芭提雅 Pattaya'},
            // {latLng: [52.37, 4.90], name: 'Amsterdam 阿姆斯特丹'},
            // {latLng: [52.08, 4.31], name: 'Den Haag 海牙'},
            // {latLng: [52.01, 4.36], name: 'Delft 代尔夫特'},
            // {latLng: [52.16, 4.50], name: 'Leiden 莱顿'},
        ]


    });
});
$(function () {
    $('#netherlands-map').vectorMap({
            map: 'nl_merc',
        markerStyle: {
            initial: {
                fill: '#696e74', // 足迹位置的填充颜色
                stroke: '#fff'   // 足迹位置的描边颜色
            },
            hover: {
                fill: '#fff', // 鼠标滑动至足迹位置后的填充颜色
                stroke: '#696e74',  // 鼠标滑动至足迹位置后的描边颜色
                "fill-opacity": 0.8
            },
        },
        regionStyle: {
            initial: {
                fill: '#fff',   // 地图颜色
                "fill-opacity": 1, // 省份（州）是否隐藏，鼠标滑动时显示; 1：显示，2：隐藏。
                stroke: 'none',
                "stroke-width": 0,
                "stroke-opacity": 1
            },
            hover: {
                fill: '#A79A74',  // 鼠标滑动至某省份的高亮颜色。
                "fill-opacity": 0.8
            },
            selected: {
                fill: 'yellow'
            },
            selectedHover: {}
        },
        series: {
            regions: [{
                values: {
                    "NL-NH": 1,
                    "NL-ZH": 1,
                },
                scale: ['#C8EEFF', '#A79A74'],
                normalizeFunction: 'polynomial'
            }],
        },
            markers: [ // 足迹位置

                // {latLng: [经度（保留两位小数）, 纬度（保留两位小数）], name: '城市名称'},
                // 推荐查询经纬度网站：http://www.gpsspg.com/maps.htm
                // {latLng: [31.24, 121.50], name: 'Shanghai 上海'},
                // {latLng: [30.59, 114.31], name: 'Wuhan 武汉'},
                // {latLng: [22.27, 113.58], name: 'Zhuhai 珠海'},
                // {latLng: [22.28, 114.17], name: 'Hong Kong 香港'},
                // {latLng: [32.06, 118.80], name: 'Nanjing 南京'},
                // {latLng: [31.30, 120.58], name: 'Suzhou苏州'},
                // {latLng: [22.20, 113.55], name: 'Macao 澳门'},
                // {latLng: [22.52, 113.39], name: 'Zhongshan 中山'},
                // {latLng: [22.54, 114.06], name: 'Shenzhen 深圳'},
                // {latLng: [23.13, 113.26], name: 'Guangzhou 广州'},
                // {latLng: [23.35, 116.68], name: 'Shantou 汕头'},
                // {latLng: [23.11, 114.42], name: 'Huizhou 惠州'},
                // {latLng: [13.73, 100.57], name: 'Bangkok 曼谷'},
                // {latLng: [18.79, 98.99], name: 'Chiangmai 清迈'},
                // {latLng: [12.92, 100.88], name: 'Pattaya 芭提雅'},
                {latLng: [52.37, 4.90], name: '阿姆斯特丹 Amsterdam'},
                {latLng: [52.08, 4.31], name: '海牙 Den Haag'},
                {latLng: [52.01, 4.36], name: '代尔夫特 Delft'},
            ]
        }
    );
});