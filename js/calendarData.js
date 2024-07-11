/**
 * 점검계획 속성 색상값 (for backgroundColor & borderColor)
 * 
 * [점검계획 속성 : enabled color (hovered color)]
 * AVI : 0475f4 (035dc2)
 * CCTV : 4565e8 (1c42de)
 * DSRC : 28ae35 (1e8528)
 * VMS : ef7c3a (e35f12)
 * TMS : 5f7298 (4b5a79)
 * VSL : 9750e9 (7c23e3)
 * VDS : 4caff2 (1c9aef)
 * RWIS : e40e14 (b40b10)
 * 선로설비 : f5bc20 (d8a10a)
 * 통신설비 : 29c2b3 (20988c)
 * 특별점검 : f14e85 (ed1f64)
 */

// REF: https://fullcalendar.io/docs/event-parsing
var fnUrl = function(){
  alert(1);
}
var regularData = [
  {
    start: '2024-07-01',
    title: '[W] VDS | 김철수',
    backgroundColor: '#00bbfe',
    borderColor: '#00bbfe',
  },
  {
    start: '2024-07-01',
    title: '[W] VDS | 이철수',
    backgroundColor: '#00bbfe',
    borderColor: '#00bbfe',
  },
  {
    start: '2024-07-01',
    title: '[W] VDS | 김철수',
    backgroundColor: '#00bbfe',
    borderColor: '#00bbfe',
  },
  {
    start: '2024-07-01',
    title: '[W] VDS | 김철수',
    backgroundColor: '#00bbfe',
    borderColor: '#00bbfe',
  },
  {
    start: '2024-07-01',
    title: '[W] 긴급전화 센터설비센터설비센터설비센터설비 | 김우리나라',
    backgroundColor: '#ef4345',
    borderColor: '#ef4345',
  },
  {
    start: '2024-07-01',
    title: '[W] VDS | 김철수',
    backgroundColor: '#00bbfe',
    borderColor: '#00bbfe',
  },

  {
    start: '2024-07-02',
    title: '[W] VDS | 김철수',
    backgroundColor: '#4caff2',
    borderColor: '#4caff2',
  },
  

  {
    start: '2024-07-03T15:00:00',
    end: '2024-07-03T18:00:00',
    title: '긴급전화 센터설비 | 김우리나라',
    classNames: 'dot c-19b2e8',
  },
  {
    start: '2024-07-03T18:00:00',
    end: '2024-07-03T20:00:00',
    title: '긴급전화 센터설비 | 김우리나라',
    classNames: 'dot c-19b2e8',
  },

  {
    start: '2024-07-04T15:00:00',
    title: '긴급전화 센터설비 센터설비 센터설비 | 김우리',
    classNames: 'dot c-19b2e8',
  },
  {
    start: '2024-07-04T20:00:00',
    title: 'CCTV | 김은수',
    classNames: 'dot c-19b2e8',
  },
  {
    start: '2024-07-04T22:00:00',
    title: 'CCTV | 김은수',
    classNames: 'dot c-19b2e8',
  },
  
  {
    start: '2024-07-08',
    title: '[W] 장비/설비 | 김철수',
    backgroundColor: '#2f78ff',
    borderColor: '#2f78ff',
  },
  {
    start: '2024-07-08',
    title: '[W] 장비/설비 | 김철수',
    backgroundColor: '#e3c208',
    borderColor: '#e3c208',
  },
  {
    start: '2024-07-08',
    title: '[W] 장비/설비 | 김철수',
    backgroundColor: '#853cfc',
    borderColor: '#853cfc',
  },
  {
    start: '2024-07-09',
    title: '[W] 장비/설비 | 김철수',
    backgroundColor: '#00be9c',
    borderColor: '#00be9c',
  },
  {
    start: '2024-07-09',
    title: '[W] 장비/설비 | 김철수',
    backgroundColor: '#0bbe35',
    borderColor: '#0bbe35',
  },
  {
    start: '2024-07-09',
    title: '[W] 장비/설비 | 김철수',
    backgroundColor: '#ef4345',
    borderColor: '#ef4345',
  },
  {
    start: '2024-07-10',
    title: '[W] 장비/설비 | 김철수',
    backgroundColor: '#a89b8f',
    borderColor: '#a89b8f',
  },
  {
    start: '2024-07-10',
    title: '[W] 장비/설비 | 김철수',
    backgroundColor: '#ad2ec6',
    borderColor: '#ad2ec6',
  },
  {
    start: '2024-07-10',
    title: '[W] 장비/설비 | 김철수',
    backgroundColor: '#d83a73',
    borderColor: '#d83a73',
  },

  {
    start: '2024-07-15T05:00:00',
    title: '[W] 장비/설비 | 김철수',
    classNames: 'dot c-2f78ff',
  },
  {
    start: '2024-07-15T07:00:00',
    title: '[W] 장비/설비 | 김철수',
    classNames: 'dot c-e3c208',
  },
  {
    start: '2024-07-15T09:00:00',
    title: '[W] 장비/설비 | 김철수',
    classNames: 'dot c-853cfc',
  },

  {
    start: '2024-07-16T05:00:00',
    title: '[W] 장비/설비 | 김철수',
    classNames: 'dot c-00be9c',
  },
  {
    start: '2024-07-16T07:00:00',
    title: '[W] 장비/설비 | 김철수',
    classNames: 'dot c-0bbe35',
  },
  {
    start: '2024-07-16T09:00:00',
    title: '[W] 장비/설비 | 김철수',
    classNames: 'dot c-ef4345',
  },

  {
    start: '2024-07-17T14:00:00',
    title: '[W] 장비/설비 | 김철수',
    classNames: 'dot c-ad2ec6',
  },
  {
    start: '2024-07-17T16:00:00',
    title: '[W] 장비/설비 | 김철수',
    classNames: 'dot c-d83a73',
  },

  {
    start: '2024-07-22T05:00:00',
    end: '2024-07-22T07:00:00',
    title: '[W] 장비/설비 | 김철수',
    classNames: 'dot c-00be9c',
  },
  {
    start: '2024-07-22T09:00:00',
    end: '2024-07-22T12:00:00',
    title: '[W] 장비/설비 | 김철수',
    classNames: 'dot c-0bbe35',
  },
  {
    start: '2024-07-22T14:00:00',
    end: '2024-07-22T15:00:00',
    title: '[W] 장비/설비 | 김철수',
    classNames: 'dot c-ef4345',
  },
]



var specialData = [ // 특별점검계획 달력 데이터
  {
    title: '하반기 특별점검',
    start: '2021-12-06',
    end: '2021-12-13',
    backgroundColor: '#f14e85',
    borderColor: '#f14e85',
  },
]