var colors = ['#00bbfe', '#2f78ff', '#853cfc', '#00be9c', '#e3c208'];

var options = {
    bar: {
        title: {
            text: '돌발상황 발생량 통계'
        },
        tooltip: {},
        legend: {
            data: ['Publisher']
        },
        xAxis: {
            data: ['A', 'B', 'C', 'D', 'E', 'F']
        },
        yAxis: {},
        series: [
            {
            name: 'Publisher',
            type: 'bar',
            data: [85, 80, 50, 90, 30, 20]
            }
        ]
    },
    pie: {
        title: {
            text: '돌발상황 발생량 통계',
            subtext: 'Fake Data',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
            }
        ]
    },
    line: {
        title: {
            text: '돌발상황 발생량 통계'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
        feature: {
            saveAsImage: {}
        }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
        {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
        ]
    },
    lineBar: {
        color: colors,
        title: {
            text: '돌발상황 발생량 통계',
            textStyle: {
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            top: '0%', // 제목을 위쪽으로
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: '#000000',
            textStyle: {
                color: '#ffffff'
            }
        },
        legend: {
            data: ['차량고장', '과속', '빗길/눈길', '낙하물', '기타'],
            textStyle: {
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            top: '10%', // 범례를 제목 아래로
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            top: '20%', // 그래프 영역을 아래로 이동
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['12364', '56768', '66666', '66123', '55555', '66666', '76666', '86666', '96666', '106666'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#3e4157'
                }
            },
            axisLabel: {
                textStyle: {
                    fontSize: 11,
                    fontWeight: 600,
                    fontFamily: 'Pretendard',
                    color: '#b2bbce'
                },
                rotate: 45, 
                interval: 0,
            },
        },
        yAxis: [
            {
                type: 'value',
                position: 'left',
                alignTicks: true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#3e4157',
                    },
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#3e4157'
                    },
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 11,
                        fontWeight: 600,
                        fontFamily: 'Pretendard',
                        color: '#b2bbce'
                    }
                },
                min: 0,
                max: 1.2,
                interval: 0.2,
            },
            {
                type: 'value',
                position: 'right',
                alignTicks: true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#3e4157',
                    },
                },
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 11,
                        fontWeight: 600,
                        fontFamily: 'Pretendard',
                        color: '#b2bbce'
                    }
                },
            }
        ],
        series: [
            {
                name: '차량고장',
                type: 'bar',
                yAxisIndex: 1, // 오른쪽 y축 사용
                barWidth: 16,
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
                data: [48000, 9000, 24000, 53000, 33000, 49000, 50000, 20500, 29000, 11000],
            },
            {
                name: '과속',
                type: 'line',
                symbolSize: 10,
                data: [0.95, 0.9, 0.8, 0.9, 0.82, 1.1, 0.9, 1.05, 0.95, 0.91]
            },
            {
                name: '빗길/눈길',
                type: 'line',
                symbolSize: 10,
                data: [0.72, 0.72, 0.73, 0.76, 0.76, 0.79, 0.8, 0.76, 0.85, 0.75]
            },
            {
                name: '낙하물',
                type: 'line',
                symbolSize: 10,
                data: [0.95, 1.05, 0.85, 1.1, 0.8, 1.15, 1, 0.8, 0.9, 1]
            },
            {
                name: '기타',
                type: 'line',
                symbolSize: 10,
                data: [1.05, 0.85, 1.1, 1.05, 0.95, 1.05, 1.1, 1.05, 1.07, 1.01]
            },
            
        ]
    },
}