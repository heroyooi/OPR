var colors = ['#00bbfe', '#2f78ff', '#853cfc', '#00be9c', '#e3c208'];
var options = {
    pie: {
        color: colors,
        title: {
            text: '돌발상황 발생량 통계',
            textStyle: {
                fontSize: 14,
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // 툴팁 배경색상 설정
            textStyle: {
                color: '#fff', // 툴팁 글씨색상 설정
                fontFamily: 'Pretendard',
                fontSize: 12,
                fontWeight: '600'
            },
            borderWidth: 0,
            formatter: '{b} {d}%'
        },
        legend: {
            orient: 'vertical', // 범례의 방향 설정 (수직)
            right: '0%', // 범례의 위치 설정
            align: 'left', // 범례 내용의 정렬 방향 (색상은 왼쪽, 텍스트는 오른쪽)
            top: 'middle', // 범례의 상단 위치 설정 (화면 상단 중앙)
            itemWidth: 16, // 아이템 너비
            itemHeight: 8, // 아이템 높이
            
            itemGap: 0, // 항목 간 상하 간격 조정
            textStyle: {
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            formatter: function (name) {
                return name; // 색상과 텍스트를 포함한 포맷을 설정
            }
        },
        series: [
            {
                type: 'pie',
                radius: '50%',
                center: ['45%', '60%'],
                data: [
                    { value: 65, name: '차량고장' },
                    { value: 15, name: '교통사고' },
                    { value: 10, name: '낙하물' },
                    { value: 7, name: '과목' },
                    { value: 3, name: '난폭운전' }
                ],
                label: {
                    formatter: '{b} {d}%', // 라벨 포맷 설정
                    textStyle: {
                        fontSize: 12,
                        color: '#b2bbce',
                        fontFamily: 'Pretendard',
                    }
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    
                }
            }
        ]
    },
    line: {
        color: colors,
        title: {
            text: '시간대별 사고 현황',
            textStyle: {
                fontSize: 14,
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // 툴팁 배경색상 설정
            textStyle: {
                color: '#fff', // 툴팁 글씨색상 설정
                fontFamily: 'Pretendard',
                fontSize: 12,
                fontWeight: '600'
            },
            borderWidth: 0,
            formatter: '{b} {c}건'
        },
        legend: {
            data: ['졸음운전', '과속', '빗길/눈길', '낙하물', '기타'],
            textStyle: {
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            top: '10%', // 범례를 제목 아래로
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '3%',
            containLabel: true,
            top: '20%', // 그래프 영역을 아래로 이동
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['0시', '1시', '2시', '3시', '4시', '5시', '6시', '7시', '8시', '9시', '10시', '11시', '12시', '13시', '14시', '15시', '16시', '17시', '18시', '19시', '20시', '21시', '22시', '23시'],
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
                interval: 0,
            },
            axisTick: {
                show: false // x축의 작은 세로선 숨기기
            }
        },
        yAxis: {
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
            max: 40,
            interval: 5,
        },
        series: [
            {
                name: "졸음운전",
                type: "line",
                symbol: 'circle',
                symbolSize: 7,
                data: [21, 27, 14, 15, 21, 11, 6, 20, 14, 10, 5, 11, 5, 10, 4, 6, 35, 10, 18, 16, 33, 23, 13, 22]
            },
            {
                name: "과속",
                type: "line",
                symbol: 'circle',
                symbolSize: 7,
                data: [19, 20, 17, 13, 25, 12, 9, 9, 10, 17, 7, 5, 8, 6, 4, 5, 20, 6, 16, 9, 18, 10, 12, 12]
            },
            {
                name: "빗길/눈길",
                type: "line",
                symbol: 'circle',
                symbolSize: 7,
                data: [12, 12, 6, 8, 0, 2, 20, 8, 6, 9, 4, 6, 10, 9, 2, 14, 14, 9, 11, 7, 14, 18, 9, 9]
            },
            {
                name: "낙하물",
                type: "line",
                symbol: 'circle',
                symbolSize: 7,
                data: [7, 13, 6, 6, 2, 25, 5, 4, 6, 7, 3, 4, 6, 5, 0, 27, 5, 2, 5, 14, 6, 2, 7, 6]
            },
            {
                name: "기타",
                type: "line",
                symbol: 'circle',
                symbolSize: 7,
                data: [1, 7, 14, 11, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]
            },
        ]
    },
    lineBar: {
        color: colors,
        title: {
            text: '돌발상황 발생량 통계',
            textStyle: {
                fontSize: 14,
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            top: '0%', // 제목을 위쪽으로
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            textStyle: {
                color: '#ffffff',
                fontFamily: 'Pretendard',
                fontSize: 12,
                fontWeight: '600'
            },
            borderWidth: 0,
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
            // feature: {
            //     saveAsImage: {}
            // }
            show: false
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
                symbol: 'circle',
                symbolSize: 7,
                data: [0.95, 0.9, 0.8, 0.9, 0.82, 1.1, 0.9, 1.05, 0.95, 0.91]
            },
            {
                name: '빗길/눈길',
                type: 'line',
                symbol: 'circle',
                symbolSize: 7,
                data: [0.72, 0.72, 0.73, 0.76, 0.76, 0.79, 0.8, 0.76, 0.85, 0.75]
            },
            {
                name: '낙하물',
                type: 'line',
                symbol: 'circle',
                symbolSize: 7,
                data: [0.95, 1.05, 0.85, 1.1, 0.8, 1.15, 1, 0.8, 0.9, 1]
            },
            {
                name: '기타',
                type: 'line',
                symbol: 'circle',
                symbolSize: 7,
                data: [1.05, 0.85, 1.1, 1.05, 0.95, 1.05, 1.1, 1.05, 1.07, 1.01]
            },
            
        ]
    },
    lineUp: {
        color: ['#00bbfe', '#2f78ff', '#e3c208'],
        title: {
            text: '통행시간',
            textStyle: {
                fontSize: 14,
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            top: '0%', // 제목을 위쪽으로
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            textStyle: {
                color: '#ffffff',
                fontFamily: 'Pretendard',
                fontSize: 12,
                fontWeight: '600'
            },
            borderWidth: 0,
        },
        legend: {
            data: ['소형', '중형', '대형'],
            textStyle: {
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            top: '7%', // 범례를 제목 아래로
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            top: '55%', // 그래프 영역을 아래로 이동
        },
        toolbox: {
            // feature: {
            //     saveAsImage: {}
            // }
            show: false
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['2024.10.01', '2024.10.01', '2024.10.01', '2024.10.01', '2024.10.01', '2024.10.01'],
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
                // rotate: 45, 
                interval: 0,
            },
        },
        yAxis: {
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
            max: 100,
            interval: 20,
        },
        series: [
            {
                name: '소형',
                type: 'line',
                symbol: 'circle',
                symbolSize: 8,
                data: [50, 81, 77, 83, 99, 100]
            },
            {
                name: '중형',
                type: 'line',
                symbol: 'circle',
                symbolSize: 8,
                data: [15, 15, 15, 15, 15, 15]
            },
            {
                name: '대형',
                type: 'line',
                symbol: 'circle',
                symbolSize: 8,
                data: [5, 5, 5, 5, 5, 5]
            },
        ]
    },
    pieDown: {
        color: ['#00bbfe', '#2f78ff', '#e3c208'],
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            textStyle: {
                color: '#ffffff',
                fontFamily: 'Pretendard',
                fontSize: 12,
                fontWeight: '600'
            },
            borderWidth: 0,
        },
        legend: {
            show: false,
        },
        series: [
            {
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 65, name: '소형' },
                    { value: 32, name: '중형' },
                    { value: 3, name: '대형' }
                ],
                label: {
                    formatter: '{b} {d}%',
                    textStyle: {
                        fontSize: 12,
                        color: '#b2bbce',
                        fontFamily: 'Pretendard',
                    }
                },
            }
        ]

    },
    barStack: {
        color: [...colors].reverse(),
        title: {
            text: '월별 교통사고 현황',
            textStyle: {
                fontSize: 14,
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // 툴팁 배경색상 설정
            textStyle: {
                color: '#fff', // 툴팁 글씨색상 설정
                fontFamily: 'Pretendard',
                fontSize: 12,
                fontWeight: '600'
            },
            borderWidth: 0,
            formatter: '{a} 사고 {b} {c}건'
        },
        legend: {
            itemWidth: 16, // 아이템 너비
            itemHeight: 8, // 아이템 높이
            data: ['1등급', '2등급', '3등급', '4등급', '5등급'],
            textStyle: {
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            top: '10%', // 범례를 제목 아래로
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '3%',
            containLabel: true,
            top: '20%', // 그래프 영역을 아래로 이동
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
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
                interval: 0,
            },
            axisTick: {
                show: false // x축의 작은 세로선 숨기기
            }
        },
        yAxis: {
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
            max: 50,
            interval: 5,
        },
        series: [
            {
                name: "5등급",
                type: "bar",
                barWidth: '40%',
                stack: "total",
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
                data: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
            },
            {
                name: "4등급",
                type: "bar",
                barWidth: '40%',
                stack: "total",
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
                data: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
            },
            {
                name: "3등급",
                type: "bar",
                barWidth: '40%',
                stack: "total",
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
                data: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 19]
            },
            {
                name: "2등급",
                type: "bar",
                barWidth: '40%',
                stack: "total",
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
                data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
            },
            {
                name: "1등급",
                type: "bar",
                barWidth: '40%',
                stack: "total",
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
                data: [22, 22, 22, 22, 22, 12, 22, 22, 22, 22, 22, 12]
            },
        ]
    },
    barMulti: {
        
    }
}