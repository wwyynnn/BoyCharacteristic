var myChart = echarts.init(document.getElementById('myBarChart'));
var option = {
    title: {
        text: '2011年-2017年男性护肤品市场增速与总体市场增速比较',
        subtext: '智研咨询网《2017-2023年中国男性护肤品行业市场深度调研及投资前景分析报告》'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['男性市场','总体市场']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['2011年','2012年','2013年','2014年','2015年','2016年','2017年']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} %'
        }
    },
    series: [
        {
            name:'男性市场',
            type:'line',
            data:[33.4, 28.8, 25.1, 15.3, 16.2, 18.7, 18.1],
        },
        {
            name:'总体市场',
            type:'line',
            data:[20.6, 23, 21.2, 12.1, 12.5, 7.9, 13.7],
        }
    ]
};
myChart.setOption(option);