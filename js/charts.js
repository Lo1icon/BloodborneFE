/**
 * Created by Lynn on 2017/3/3.
 */
$(function () {
    var keliucharts=echarts.init(document.getElementById('traffic'));
    function randomData() {
        now = new Date(+now + oneDay);
        value = value + Math.random() * 21 - 10;
        return {
            name: now.toString(),
            value: [
                [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                Math.round(value)
            ]
        }
    }

    var keliudata = [];
    var now = +new Date(1997, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var value = Math.random() * 1000;
    for (var i = 0; i < 1000; i++) {
        keliudata.push(randomData());
    }

    var option1={
        title:{
            text:'客流量'
        },
        tooltip:{
            trigger:'axis',
            formatter:function (params) {

            },
            axisPointer:{
                animation:false
            }
        },
        xAxis:{
            type:'time',
            splitLine:{
                show:false
            }
        },
        yAxis:{
            type:'value',
            boundaryGap:[0,'100%'],
            splitLine:{
                show:false
            }
        },
        series:[{
            name:'客流量模拟数据',
            type:'line',
            showSymbol:false,
            hoverAnimation:false,
            data:keliudata
        }]

    };
    keliucharts.setOption(option1);
    window.onresize=keliucharts.resize;
    setInterval(function () {

        for (var i = 0; i < 5; i++) {
            keliudata.shift();
            keliudata.push(randomData());
        }

        keliucharts.setOption({
            series: [{
                data: keliudata
            }]
        });
    }, 1000);
})


