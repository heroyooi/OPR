/*var option1 = function($selector) {
  return { 
    target: $selector,
    // showLineNumber: true,
    // showRowSelector: true,
    header: {
      // align:'center',
      columnHeight: 32,
      selector: true,
    },
    // frozenColumnIndex: 13,
    // frozenRowIndex: 2,
    columns: columns1,
    // footSum: [
    //   [
    //     { label: '검색결과가 없습니다.', colspan: 21, align: 'center' }
    //   ]
    // ],
    body: {
      columnHeight: 44,
      // onDataChanged: function () {
      //   if (this.key == 'isChecked') {
      //     this.self.updateChildRows(this.dindex, {isChecked: this.item.isChecked});
      //   }
      //   else if (this.key == '__selected__'){
      //     this.self.updateChildRows(this.dindex, {__selected__: this.item.__selected__});
      //   }
      // }
    },
    page: {
      display: false,
    },
    // height: 174,
  }
}*/

// http://ax5ui.axisj.com/ax5ui-grid/api/index.html

var rowClass = function(item, type) {
  if (type == 1) {
    var state = 'row-state';
  } else if (type == 2) {
    var state = 'row-state grid-state';
  }
  if (item.rowState === 'red') {
    state += ' red';
  } else if (item.rowState === 'orange') {
    state += ' orange';
  } else if (item.rowState === 'green') {
    state += ' green';
  } else if (item.rowState === '') {
    state += ' normal';
  } else {
    state += ' no'
  }
  return state;
}

var checkColumns = {
  // key: "isChecked",
  // label: `<span class="chk-base chk-only">
  //   <input type="checkbox" id="chk-all" />
  //   <label for="chk-all">전체 체크박스</label>
  // </span>`,
  // width: 50,
  // sortable: false,
  // align: "center",
  // // editor: {
  //   //   type: "checkbox",
  //   //   config: { height: 17, trueValue: "Y", falseValue: "N" }
  //   // },
  // formatter: function() {
  //   if (this.item.isChecked === 'Y') {
  //     return `<span class="chk-base chk-only">
  //       <input type="checkbox" id="chk-${this.item.__index}" class="row-checkbox" checked />
  //       <label for="chk-${this.item.__index}">체크박스${this.item.__index}</label>
  //     </span>`;
  //   } else {
  //     return `<span class="chk-base chk-only">
  //       <input type="checkbox" id="chk-${this.item.__index}" class="row-checkbox" />
  //       <label for="chk-${this.item.__index}">체크박스${this.item.__index}</label>
  //     </span>`;
  //   }
  // }
  key: "isChecked",
  label: `<input type="checkbox" id="chk-all" />`,
  width: 50,
  sortable: false,
  align: "center",
  editor: {
    type: "checkbox",
    config: { height: 20, trueValue: "Y", falseValue: "N" }
  }
};

var getOptions = ($selector, columns) => {
  return { 
    target: $selector,
    header: {
      columnHeight: 32,
      selector: true,
    },
    columns,
    body: {
      columnHeight: 44,
    },
    page: {
      display: false,
    },
  }
}

var data1 = [
  { isChecked: "N", column1: '50', column2: '돌발상황이 감지되었습니다.', column3: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '49', column2: '돌발상황이 감지되었습니다.', column3: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '48', column2: '돌발상황이 감지되었습니다.', column3: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '47', column2: '돌발상황이 감지되었습니다.', column3: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '46', column2: '돌발상황이 감지되었습니다.', column3: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '45', column2: '돌발상황이 감지되었습니다.', column3: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '44', column2: '돌발상황이 감지되었습니다.', column3: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '43', column2: '돌발상황이 감지되었습니다.', column3: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '42', column2: '돌발상황이 감지되었습니다.', column3: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '41', column2: '돌발상황이 감지되었습니다.', column3: '2024-10-25 14:23:35' },
  // { isChecked: "N", column1: '40', column2: '돌발상황이 감지되었습니다.', column3: '2024-10-25 14:23:35' },
  // { isChecked: "N", column1: '39', column2: '돌발상황이 감지되었습니다.', column3: '2024-10-25 14:23:35' },
  // { isChecked: "N", column1: '38', column2: '돌발상황이 감지되었습니다.', column3: '2024-10-25 14:23:35' },
  // { isChecked: "N", column1: '37', column2: '마지막 돌발상황이 감지되었습니다.', column3: '2024-10-25 14:23:35' },
];
var data1_2 = [
  { isChecked: "N", column1: '50', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '49', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '48', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '47', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '46', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '45', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '44', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '43', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '42', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '41', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
];
var data1_3 = [
  { isChecked: "N", column1: '50', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '49', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '48', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '47', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '46', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '45', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '44', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '43', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '42', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '41', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '40', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '39', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '38', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '37', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '36', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '35', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '34', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '33', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '32', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '31', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
];
var data1_4 = [
  { isChecked: "N", column1: '50', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '49', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '48', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '47', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '46', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '45', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '44', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '43', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '42', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '41', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '40', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '39', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '38', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '37', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '36', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '35', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '34', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '33', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '32', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '31', column2: 'traffic12', column3: '김○○', column4: '교통관리팀', column5: '000-0000-0000', column6: '2024-10-25 14:23:35' },
];
var data1_5 = [
  { isChecked: "N", column1: '50', column2: 'VDS-0050', column3: 'OO 지점 VDS 1', column4: '익산', column5: '4차로', column6: '2024-10-25 14:23:35' },
  { isChecked: "Y", column1: '49', column2: 'VDS-0050', column3: 'OO 지점 VDS 1', column4: '익산', column5: '4차로', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '48', column2: 'VDS-0050', column3: 'OO 지점 VDS 1', column4: '익산', column5: '4차로', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '47', column2: 'VDS-0050', column3: 'OO 지점 VDS 1', column4: '익산', column5: '4차로', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '46', column2: 'VDS-0050', column3: 'OO 지점 VDS 1', column4: '익산', column5: '4차로', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '45', column2: 'VDS-0050', column3: 'OO 지점 VDS 1', column4: '익산', column5: '4차로', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '44', column2: 'VDS-0050', column3: 'OO 지점 VDS 1', column4: '익산', column5: '4차로', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '43', column2: 'VDS-0050', column3: 'OO 지점 VDS 1', column4: '익산', column5: '4차로', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '42', column2: 'VDS-0050', column3: 'OO 지점 VDS 1', column4: '익산', column5: '4차로', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '41', column2: 'VDS-0050', column3: 'OO 지점 VDS 1', column4: '익산', column5: '4차로', column6: '2024-10-25 14:23:35' },
];
var data1_6 = [
  { isChecked: "N", column1: '50', column2: 'VDS-0050', column3: 'OO 지점 VDS 1', column4: '경기도 평택시 OO' },
  { isChecked: "N", column1: '49', column2: 'VDS-0050', column3: 'OO 지점 VDS 1', column4: '경기도 평택시 OO' },
  { isChecked: "N", column1: '48', column2: 'VDS-0050', column3: 'OO 지점 VDS 1', column4: '경기도 평택시 OO' },
  { isChecked: "N", column1: '47', column2: 'VDS-0050', column3: 'OO 지점 VDS 1', column4: '경기도 평택시 OO' },
  { isChecked: "N", column1: '46', column2: 'VDS-0050', column3: 'OO 지점 VDS 1', column4: '경기도 평택시 OO' },
];
var data1_7 = [
  { isChecked: "N", column1: '50', column2: 'VDS-0050', column3: 'OO 지점 VDS 1', column4: '익산', column5: '4차로', column6: '30초', column7: '000', column8: '000', column9: '000', column10: '000', column11: '000', column12: '000', column13: '45 dm', column14: '18 dm', column15: '25대', column16: '175km/h', column17: '250dm', column18: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '49', column2: 'VDS-0050', column3: 'OO 지점 VDS 1', column4: '익산', column5: '4차로', column6: '30초', column7: '000', column8: '000', column9: '000', column10: '000', column11: '000', column12: '000', column13: '45 dm', column14: '18 dm', column15: '25대', column16: '175km/h', column17: '250dm', column18: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '48', column2: 'VDS-0050', column3: 'OO 지점 VDS 1', column4: '익산', column5: '4차로', column6: '30초', column7: '000', column8: '000', column9: '000', column10: '000', column11: '000', column12: '000', column13: '45 dm', column14: '18 dm', column15: '25대', column16: '175km/h', column17: '250dm', column18: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '47', column2: 'VDS-0050', column3: 'OO 지점 VDS 1', column4: '익산', column5: '4차로', column6: '30초', column7: '000', column8: '000', column9: '000', column10: '000', column11: '000', column12: '000', column13: '45 dm', column14: '18 dm', column15: '25대', column16: '175km/h', column17: '250dm', column18: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '46', column2: 'VDS-0050', column3: 'OO 지점 VDS 1', column4: '익산', column5: '4차로', column6: '30초', column7: '000', column8: '000', column9: '000', column10: '000', column11: '000', column12: '000', column13: '45 dm', column14: '18 dm', column15: '25대', column16: '175km/h', column17: '250dm', column18: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '45', column2: 'VDS-0050', column3: 'OO 지점 VDS 1', column4: '익산', column5: '4차로', column6: '30초', column7: '000', column8: '000', column9: '000', column10: '000', column11: '000', column12: '000', column13: '45 dm', column14: '18 dm', column15: '25대', column16: '175km/h', column17: '250dm', column18: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '44', column2: 'VDS-0050', column3: 'OO 지점 VDS 1', column4: '익산', column5: '4차로', column6: '30초', column7: '000', column8: '000', column9: '000', column10: '000', column11: '000', column12: '000', column13: '45 dm', column14: '18 dm', column15: '25대', column16: '175km/h', column17: '250dm', column18: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '43', column2: 'VDS-0050', column3: 'OO 지점 VDS 1', column4: '익산', column5: '4차로', column6: '30초', column7: '000', column8: '000', column9: '000', column10: '000', column11: '000', column12: '000', column13: '45 dm', column14: '18 dm', column15: '25대', column16: '175km/h', column17: '250dm', column18: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '42', column2: 'VDS-0050', column3: 'OO 지점 VDS 1', column4: '익산', column5: '4차로', column6: '30초', column7: '000', column8: '000', column9: '000', column10: '000', column11: '000', column12: '000', column13: '45 dm', column14: '18 dm', column15: '25대', column16: '175km/h', column17: '250dm', column18: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '41', column2: 'VDS-0050', column3: 'OO 지점 VDS 1', column4: '익산', column5: '4차로', column6: '30초', column7: '000', column8: '000', column9: '000', column10: '000', column11: '000', column12: '000', column13: '45 dm', column14: '18 dm', column15: '25대', column16: '175km/h', column17: '250dm', column18: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '40', column2: 'VDS-0050', column3: 'OO 지점 VDS 1', column4: '익산', column5: '4차로', column6: '30초', column7: '000', column8: '000', column9: '000', column10: '000', column11: '000', column12: '000', column13: '45 dm', column14: '18 dm', column15: '25대', column16: '175km/h', column17: '250dm', column18: '2024-10-25 14:23:35' },
];

var data1_8 = [
  { isChecked: "N", column1: '50', column2: '2024-10-25 14:23:35', column3: '03VDE000112', column4: 'VDS-ZONE-0023', column5: 'X', column6: 'X', column7: 'X', column8: '운영자 확인', column9: '돌발' },
  { isChecked: "N", column1: '49', column2: '2024-10-25 14:23:35', column3: '03VDE000112', column4: 'VDS-ZONE-0023', column5: 'X', column6: 'X', column7: 'X', column8: '운영자 확인', column9: '돌발' },
  { isChecked: "N", column1: '48', column2: '2024-10-25 14:23:35', column3: '03VDE000112', column4: 'VDS-ZONE-0023', column5: 'X', column6: 'X', column7: 'X', column8: '운영자 확인', column9: '돌발' },
  { isChecked: "N", column1: '47', column2: '2024-10-25 14:23:35', column3: '03VDE000112', column4: 'VDS-ZONE-0023', column5: 'X', column6: 'X', column7: 'O', column8: '운영자 확인', column9: '-' },
  { isChecked: "N", column1: '46', column2: '2024-10-25 14:23:35', column3: '03VDE000112', column4: 'VDS-ZONE-0023', column5: 'O', column6: 'O', column7: 'O', column8: '돌발상황', column9: '돌발' },
  { isChecked: "N", column1: '45', column2: '2024-10-25 14:23:35', column3: '03VDE000112', column4: 'VDS-ZONE-0023', column5: 'O', column6: 'O', column7: 'O', column8: '운영자 확인', column9: '돌발' },
  { isChecked: "N", column1: '44', column2: '2024-10-25 14:23:35', column3: '03VDE000112', column4: 'VDS-ZONE-0023', column5: 'O', column6: 'O', column7: 'O', column8: '운영자 확인', column9: '돌발' },
  { isChecked: "N", column1: '43', column2: '2024-10-25 14:23:35', column3: '03VDE000112', column4: 'VDS-ZONE-0023', column5: 'X', column6: 'X', column7: 'O', column8: '운영자 확인', column9: '돌발' },
  { isChecked: "N", column1: '42', column2: '2024-10-25 14:23:35', column3: '03VDE000112', column4: 'VDS-ZONE-0023', column5: 'X', column6: 'X', column7: 'O', column8: '운영자 확인', column9: '돌발' },
  { isChecked: "N", column1: '41', column2: '2024-10-25 14:23:35', column3: '03VDE000112', column4: 'VDS-ZONE-0023', column5: 'X', column6: 'X', column7: 'O', column8: '운영자 확인', column9: '돌발' },
];

var columns1 = [
  checkColumns,
  {
    key: 'column1',
    label: '순번',
    width: 100,
    // enableFilter: true,
    align: "center",
    sortable: true,
  },
  {
    key: 'column2',
    label: '알림 내용',
    width: "*",
    align: "left",
    sortable: true,
  },
  {
    key: 'column3',
    label: '알림 일시',
    width: 200,
    align: "center",
    sortable: true,
  },
];
var columns1_2 = [
  checkColumns,
  {
    key: 'column1',
    label: '순번',
    width: 100,
    align: "center",
    sortable: true,
  },
  {
    key: 'column2',
    label: 'ID',
    width: "*",
    align: "center",
    sortable: true,
  },
  {
    key: 'column3',
    label: '이름',
    width: 200,
    align: "center",
    sortable: true,
  },
  {
    key: 'column4',
    label: '부서',
    width: "*",
    align: "center",
    sortable: true,
  },
  {
    key: 'column5',
    label: '전화번호',
    width: 170,
    align: "center",
    sortable: true,
  },
  {
    key: 'column6',
    label: '등록 일시',
    width: 200,
    align: "center",
    sortable: true,
  },
];
var columns1_3 = [
  checkColumns,
  {
    key: 'column1',
    label: '순번',
    width: 100,
    align: "center",
    sortable: true,
  },
  {
    key: 'column2',
    label: 'ID',
    width: "*",
    align: "center",
    sortable: true,
  },
  {
    key: 'column3',
    label: '이름',
    width: 200,
    align: "center",
    sortable: true,
  },
  {
    key: 'column4',
    label: '부서',
    width: "*",
    align: "center",
    sortable: true,
  },
  {
    key: 'column5',
    label: '전화번호',
    width: 170,
    align: "center",
    sortable: true,
  },
  {
    key: 'column6',
    label: '등록 일시',
    width: 200,
    align: "center",
    sortable: true,
  },
];
var columns1_4 = [
  checkColumns,
  {
    key: 'column1',
    label: '순번',
    width: 100,
    align: "center",
    sortable: true,
  },
  {
    key: 'column2',
    label: 'ID',
    width: "*",
    align: "center",
    sortable: true,
  },
  {
    key: 'column3',
    label: '이름',
    width: 200,
    align: "center",
    sortable: true,
  },
  {
    key: 'column4',
    label: '권한',
    width: "*",
    align: "center",
    sortable: true,
  },
  {
    key: 'column5',
    label: '로그인 일시',
    width: 170,
    align: "center",
    sortable: true,
  },
  {
    key: 'column6',
    label: '로그아웃 일시',
    width: 200,
    align: "center",
    sortable: true,
  },
];
var columns1_5 = [
  checkColumns,
  {
    key: 'column1',
    label: '순번',
    width: 100,
    align: "center",
    sortable: true,
  },
  {
    key: 'column2',
    label: 'VDS ID',
    width: 100,
    align: "center",
    sortable: true,
  },
  {
    key: 'column3',
    label: 'VDS 명',
    width: 150,
    align: "center",
    sortable: true,
  },
  {
    key: 'column4',
    label: '방향',
    width: 100,
    align: "center",
    sortable: true,
  },
  {
    key: 'column5',
    label: '차로수',
    width: 100,
    align: "center",
    sortable: true,
  },
  {
    key: 'column6',
    label: '설치 일시',
    width: '*',
    align: "center",
    sortable: true,
  },
];
var columns1_6 = [
  checkColumns,
  {
    key: 'column1',
    label: '순번',
    width: 50,
    align: "center",
    sortable: true,
  },
  {
    key: 'column2',
    label: 'VDS ID',
    width: 210,
    align: "center",
    sortable: true,
  },
  {
    key: 'column3',
    label: 'VDS 명',
    width: 210,
    align: "center",
    sortable: true,
  },
  {
    key: 'column4',
    label: '주소',
    width: 210,
    align: "center",
    sortable: true,
  },
];
var columns1_7 = [
  checkColumns,
  {
    key: 'column1',
    label: '순번',
    width: 50,
    align: "center",
    sortable: true,
  },
  {
    key: 'column2',
    label: 'VDS ID',
    width: 100,
    align: "center",
    sortable: true,
  },
  {
    key: 'column3',
    label: 'VDS 명',
    width: 118,
    align: "center",
    sortable: true,
  },
  {
    key: 'column4',
    label: '방향',
    width: 80,
    align: "center",
    sortable: true,
  },
  {
    key: 'column5',
    label: '차로수',
    width: 80,
    align: "center",
    sortable: true,
  },
  {
    key: 'column6',
    label: '수집주기',
    width: 80,
    align: "center",
    sortable: true,
  },
  {
    label: '차량 감응시간',
    columns: [
      {
        key: 'column7',
        label: '차량있음',
        width: 80,
        align: 'center',
        sortable: true,
      },
      {
        key: 'column8',
        label: '차량없음',
        width: 80,
        align: 'center',
        sortable: true,
      }
    ]
  },
  {
    label: '차량 감응시간',
    columns: [
      {
        key: 'column9',
        label: '속도 누적',
        width: 80,
        align: 'center',
        sortable: true,
      },
      {
        key: 'column10',
        label: '차량길이 누적',
        width: 80,
        align: 'center',
        sortable: true,
      },
      {
        key: 'column11',
        label: '속도',
        width: 80,
        align: 'center',
        sortable: true,
      },
      {
        key: 'column12',
        label: '차량길이',
        width: 80,
        align: 'center',
        sortable: true,
      },
    ]
  },
  {
    label: '속도 Loop',
    columns: [
      {
        key: 'column13',
        label: '간격',
        width: 80,
        align: 'center',
        sortable: true,
      },
      {
        key: 'column14',
        label: '길이',
        width: 80,
        align: 'center',
        sortable: true,
      }
    ]
  },
  {
    key: 'column15',
    label: '교통량<br />상한치',
    width: 80,
    align: "center",
    sortable: true,
  },
  {
    key: 'column16',
    label: '차량 속도<br />상한치',
    width: 85,
    align: "center",
    sortable: true,
  },
  {
    key: 'column17',
    label: '차량 길이<br />상한치',
    width: 80,
    align: "center",
    sortable: true,
  },
  {
    key: 'column18',
    label: '변경일시',
    width: 150,
    align: "center",
    sortable: true,
  },
];
var columns1_8 = [
  checkColumns,
  {
    key: 'column1',
    label: '순번',
    width: 100,
    align: "center",
    sortable: true,
  },
  {
    key: 'column2',
    label: '일시',
    width: 270,
    align: "center",
    sortable: true,
  },
  {
    key: 'column3',
    label: 'VDS ID',
    width: 270,
    align: "center",
    sortable: true,
  },
  {
    key: 'column4',
    label: '지점 ID',
    width: 200,
    align: "center",
    sortable: true,
  },
  {
    key: 'column5',
    label: 'APID검지',
    width: 140,
    align: "center",
    sortable: true,
    formatter: function() {
      if (this.item.column5 == "X") {
        return '<span class="s-ox"><img src="./img/ico-16-no.png" /></span>';
      } else if (this.item.column5 == "O") {
        return '<span class="s-ox"><img src="./img/ico-16-yes.png" /></span>';
      }
    }
  },
  {
    key: 'column6',
    label: 'EDS 검지',
    width: 140,
    align: "center",
    sortable: true,
    formatter: function() {
      if (this.item.column6 == "X") {
        return '<span class="s-ox"><img src="./img/ico-16-no.png" /></span>';
      } else if (this.item.column6 == "O") {
        return '<span class="s-ox"><img src="./img/ico-16-yes.png" /></span>';
      }
    }
  },
  {
    key: 'column7',
    label: 'DELOS 검지',
    width: 140,
    align: "center",
    sortable: true,
    formatter: function() {
      if (this.item.column7 == "X") {
        return '<span class="s-ox"><img src="./img/ico-16-no.png" /></span>';
      } else if (this.item.column7 == "O") {
        return '<span class="s-ox"><img src="./img/ico-16-yes.png" /></span>';
      }
    }
  },
  {
    key: 'column8',
    label: '판정 결과',
    width: 140,
    align: "center",
    sortable: true,
  },
  {
    key: 'column9',
    label: '대응',
    width: 140,
    align: "center",
    sortable: true,
  },
];

var data2 = [
  { column1: '로우데이터', column2: '로우데이터', column3: '로우데이터', state: 'red', column4: '로우 데이터' },
  { column1: '로우데이터', column2: '로우데이터', column3: '라벨', column3Type: 'label', state: 'orange', column4: '로우 데이터' },
  { column1: '로우데이터', column2: '로우데이터', column3: '로우데이터', state: 'green', column4: '로우 데이터' },
  { column1: '로우데이터 로우데이터 로우데이터 로우데이터', column2: '로우데이터 로우데이터 로우데이터 로우데이터 로우데이터 로우데이터', column3: '로우데이터 로우데이터 로우데이터', state: '-', column4: '로우 데이터' },
  { column1: '로우데이터', column2: '로우데이터', column3: '혼잡', column3Type: 'stBox', state: 'green', column4: '로우 데이터' },
  { column1: '로우데이터', column2: '로우데이터', column3: '지체', column3Type: 'stBox', state: 'green', column4: '로우 데이터' },
  { column1: '로우데이터', column2: '로우데이터', column3: '원활', column3Type: 'stBox', state: 'green', column4: '로우 데이터' },
  { column1: '로우데이터', column2: '로우데이터', column3: '혼잡', state: 'green', column4: '로우 데이터' },
  { column1: '로우데이터', column2: '로우데이터', column3: '로우 데이터', state: 'green', column4: '로우 데이터' },
  { column1: '로우데이터', column2: '로우데이터', column3: '로우 데이터 ', state: 'green', column4: '로우 데이터' },
  { column1: '로우데이터', column2: '로우데이터', column3: '로우 데이터 ', state: 'green', column4: '로우 데이터' },
  { column1: '로우데이터', column2: '로우데이터', column3: '로우 데이터 ', state: 'green', column4: '로우 데이터' },
  { column1: '로우데이터', column2: '로우데이터', column3: '로우 데이터 ', state: 'green', column4: '로우 데이터' },
  { column1: '마지막 로우데이터', column2: '마지막 로우데이터 마지막 로우데이터 마지막 로우데이터 마지막 로우데이터 마지막 로우데이터 마지막 로우데이터 마지막 로우데이터 마지막 로우데이터 마지막 로우데이터 마지막 로우데이터 마지막 로우데이터 마지막 로우데이터', column3: '로우 데이터 ', state: '-', column4: '로우 데이터' },
];

var columns2 = [
  checkColumns,
  {
    key: 'column1',
    label: '컬럼명1',
    width: 100,
    align: "center",
    // sortable: true,
  },
  {
    key: 'column2',
    label: '컬럼명2',
    width: 100,
    align: "center",
    // sortable: true,

    // 2줄 ...은 표현할 수 있으나 높이 계산이 잘못되어짐
    // formatter: function() {
    //   return '<div class="multi-line-cell">' + this.value + '</div>';
    // }
  },
  {
    key: 'column3',
    label: '컬럼명3',
    width: 100,
    align: "center",
    sortable: true,
    formatter: function() {
      if (this.item.column3Type == 'label') {
        return '<span class="s-label">' + this.value + '</span>';
      } else if (this.item.column3Type == 'stBox') {
        if (this.value == '혼잡') {
          return '<span class="st-box red">' + this.value + '</span>';
        } else if (this.value == '지체') {
          return '<span class="st-box orange">' + this.value + '</span>';
        } else if (this.value == '원활') {
          return '<span class="st-box green">' + this.value + '</span>';
        }
      } else {
        return this.value
      }
    }
  },
  {
    key: 'state',
    label: '상태',
    width: 100,
    sortable: true,
    align: "center",
    treeControl: true,
    styleClass: function(){
      var state = 'grid-state';
      if (this.item.state === 'red') {
        state += ' red';
      } else if (this.item.state === 'orange') {
        state += ' orange';
      } else if (this.item.state === 'green') {
        state += ' green';
      } else {
        state += ' no'
      }
      return state;
    },
    formatter: function(){
      if (this.item.state === '-') {
        return '<span class="state-ico">-</span>';
      } else if (this.item.state === 'red') {
        return '<span class="state-ico">혼잡</span>';
      } else if (this.item.state === 'orange') {
        return '<span class="state-ico">지체</span>';
      } else if (this.item.state === 'green') {
        return '<span class="state-ico">원활</span>';
      }
    }
  },
  {
    key: 'column4',
    label: '컬럼명',
    width: 100,
    align: "center",
  },
];

var option2 = function($selector) {
  return {
    target: $selector,
    header: {
      align:'center',
      columnHeight: 32,
    },
    columns: columns2,
    body: {
      columnHeight: 44,
    },
    page: {
      display: false,
    },
  }
}

var data3 = [
  { column1: '로우데이터', column2: '로우데이터', column3: '로우데이터', state: 'red', column4: '로우 데이터' },
  { column1: '로우데이터', column2: '로우데이터', column3: '라벨', column3Type: 'label', state: 'orange', column4: '로우 데이터' },
  { column1: '로우데이터', column2: '로우데이터', column3: '로우데이터', state: 'green', column4: '로우 데이터' },
  { column1: '로우데이터 로우데이터 로우데이터 로우데이터', column2: '로우데이터 로우데이터 로우데이터 로우데이터 로우데이터 로우데이터', column3: '로우데이터 로우데이터 로우데이터', state: '-', column4: '로우 데이터' },
  { column1: '로우데이터', column2: '로우데이터', column3: '혼잡', column3Type: 'stBox', state: 'green', column4: '로우 데이터' },
  { column1: '로우데이터', column2: '로우데이터', column3: '지체', column3Type: 'stBox', state: 'green', column4: '로우 데이터' },
  { column1: '로우데이터', column2: '로우데이터', column3: '원활', column3Type: 'stBox', state: 'green', column4: '로우 데이터' },
  { column1: '로우데이터', column2: '로우데이터', column3: '혼잡', state: 'green', column4: '로우 데이터' },
  { column1: '로우데이터', column2: '로우데이터 로우데이터 로우데이터 로우데이터 로우데이터 로우데이터 로우데이터 로우데이터 로우데이터 로우데이터 로우데이터 로우데이터', column3: '로우 데이터', state: 'green', column4: '로우 데이터' },
  { column1: '로우데이터', column2: '로우데이터', column3: '로우 데이터 ', state: 'green', column4: '로우 데이터' },
  { column1: '로우데이터', column2: '로우데이터', column3: '로우 데이터 ', state: 'green', column4: '로우 데이터' },
  { column1: '로우데이터', column2: '로우데이터', column3: '로우 데이터 ', state: 'green', column4: '로우 데이터' },
  { column1: '로우데이터', column2: '로우데이터', column3: '로우 데이터 ', state: 'green', column4: '로우 데이터' },
  { column1: '마지막 로우데이터', column2: '마지막 로우데이터 마지막 로우데이터 마지막 로우데이터 마지막 로우데이터 마지막 로우데이터 마지막 로우데이터 마지막 로우데이터 마지막 로우데이터 마지막 로우데이터 마지막 로우데이터 마지막 로우데이터 마지막 로우데이터', column3: '로우 데이터 ', state: '-', column4: '로우 데이터' },
];

var columns3 = [
  checkColumns,
  {
    key: 'column1',
    label: '컬럼명1',
    width: 100,
    align: "center",
    // sortable: true,
  },
  {
    key: 'column2',
    label: '컬럼명2',
    width: 200,
    align: "center",
    // sortable: true,

    formatter: function() {
      return '<div class="multi-line-cell">' + this.value + '</div>';
    }
  },
  {
    key: 'column3',
    label: '컬럼명3',
    width: 100,
    align: "center",
    sortable: true,
    formatter: function() {
      if (this.item.column3Type == 'label') {
        return '<span class="s-label">' + this.value + '</span>';
      } else if (this.item.column3Type == 'stBox') {
        if (this.value == '혼잡') {
          return '<span class="st-box red">' + this.value + '</span>';
        } else if (this.value == '지체') {
          return '<span class="st-box orange">' + this.value + '</span>';
        } else if (this.value == '원활') {
          return '<span class="st-box green">' + this.value + '</span>';
        }
      } else {
        return this.value
      }
    }
  },
  {
    key: 'state',
    label: '상태',
    width: 100,
    sortable: true,
    align: "center",
    treeControl: true,
    styleClass: function(){
      var state = 'grid-state';
      if (this.item.state === 'red') {
        state += ' red';
      } else if (this.item.state === 'orange') {
        state += ' orange';
      } else if (this.item.state === 'green') {
        state += ' green';
      } else {
        state += ' no'
      }
      return state;
    },
    formatter: function(){
      if (this.item.state === '-') {
        return '<span class="state-ico">-</span>';
      } else if (this.item.state === 'red') {
        return '<span class="state-ico">혼잡</span>';
      } else if (this.item.state === 'orange') {
        return '<span class="state-ico">지체</span>';
      } else if (this.item.state === 'green') {
        return '<span class="state-ico">원활</span>';
      }
    }
  },
  {
    key: 'column4',
    label: '컬럼명',
    width: 100,
    align: "center",
  },
];

var option3 = function($selector) {
  return {
    target: $selector,
    header: {
      align:'center',
      columnHeight: 32,
    },
    columns: columns3,
    body: {
      columnHeight: 44,
    },
    page: {
      display: false,
    },
  }
}

var data4 = [
  { rowState: 'red', column1: '로우데이터1', column2: '로우데이터', column3: '로우데이터' },
  { rowState: 'green', column1: '로우데이터2', column2: '로우데이터', column3: '로우데이터' },
  { rowState: 'orange', column1: '로우데이터3', column2: '로우데이터', column3: '로우데이터' },
  { rowState: '', column1: '로우데이터4', column2: '로우데이터', column3: '로우데이터' },
];

var columns4 = [
  {
    key: 'column1',
    label: '컬럼명1',
    width: 100,
    align: "center",
    styleClass: function(){
      return rowClass(this.item, 1);
    },
  },
  {
    key: 'column2',
    label: '컬럼명2',
    width: 100,
    align: "center",
    styleClass: function(){
      return rowClass(this.item, 1);
    },
  },
  {
    key: 'state',
    label: '상태',
    width: 124,
    sortable: true,
    align: "center",
    treeControl: true,
    styleClass: function(){
      return rowClass(this.item, 2);
    },
    formatter: function(){
      return '<span class="state-ico">로우 데이터</span>'
    }
  },
];

var option4 = function($selector) {
  return {
    target: $selector,
    header: {
      align:'center',
      columnHeight: 32,
    },
    columns: columns4,
    body: {
      columnHeight: 36,
      trStyleClass: function(){
        return `speed ${this.item.rowState || 'normal'}`;
      }
    },
    page: {
      display: false,
    },
  }
}

$(document.body).ready(function() {
  var $grid1 = $('[data-ax5grid="grid1"]');
  var $grid1_2 = $('[data-ax5grid="grid1_2"]');
  var $grid1_3 = $('[data-ax5grid="grid1_3"]');
  var $grid1_4 = $('[data-ax5grid="grid1_4"]');
  var $grid1_5 = $('[data-ax5grid="grid1_5"]');
  var $grid1_6 = $('[data-ax5grid="grid1_6"]');
  var $grid1_7 = $('[data-ax5grid="grid1_7"]');
  var $grid1_8 = $('[data-ax5grid="grid1_8"]');
  
  var $grid2 = $('[data-ax5grid="grid2"]');
  var $grid3 = $('[data-ax5grid="grid3"]');
  var $grid4 = $('[data-ax5grid="grid4"]');

  if ($grid1.length || $grid1_2.length || $grid1_3.length || $grid1_4.length || $grid1_5.length || $grid1_6.length || $grid1_7.length || $grid1_8.length) {
    if ($grid1.length) {
      new ax5.ui.grid(getOptions($grid1, columns1)).setData(data1);
    } else if ($grid1_2.length) {
      new ax5.ui.grid(getOptions($grid1_2, columns1_2)).setData(data1_2);
    } else if ($grid1_3.length) {
      new ax5.ui.grid(getOptions($grid1_3, columns1_3)).setData(data1_3);
    } else if ($grid1_4.length) {
      new ax5.ui.grid(getOptions($grid1_4, columns1_4)).setData(data1_4);
    } else if ($grid1_5.length) {
      new ax5.ui.grid(getOptions($grid1_5, columns1_5)).setData(data1_5);
    } else if ($grid1_6.length) {
      new ax5.ui.grid(getOptions($grid1_6, columns1_6)).setData(data1_6);
    } else if ($grid1_7.length) {
      new ax5.ui.grid(getOptions($grid1_7, columns1_7)).setData(data1_7);
    } else if ($grid1_8.length) {
      new ax5.ui.grid(getOptions($grid1_8, columns1_8)).setData(data1_8);
    }

    $(document).on('click', '#chk-all', function() {
        var isChecked = $(this).is(':checked');
        $('.row-checkbox').prop('checked', isChecked);
        if (isChecked) {
          $('.row-checkbox').closest('tr').addClass('checked');
        } else {
          $('.row-checkbox').closest('tr').removeClass('checked');
        }
    });

    $(document).on('click', '.row-checkbox', function() {
      var allChecked = $('.row-checkbox').length === $('.row-checkbox:checked').length;
      var isChecked = $(this).is(':checked');
      if (isChecked) {
        $(this).closest('tr').addClass('checked');
      } else {
        $(this).closest('tr').removeClass('checked');
      }
      $('#chk-all').prop('checked', allChecked);
    });
  }
  
  if ($grid2.length) new ax5.ui.grid(option2($grid2)).setData(data2);
  if ($grid3.length) new ax5.ui.grid(option3($grid3)).setData(data3);
  if ($grid4.length) new ax5.ui.grid(option4($grid4)).setData(data4);

  $(document).on("mouseover", "[data-ax5grid-panel-scroll=body] span", function (e) {
    const text = $(e.target).is("span") ? $(e.target).text() : $(e.target).children("span").text()
    $(e.target).tooltip({
      // track: true,
      content: text,
      items: "span",
      position: {
          my: "center top+5",
          at: "center bottom"
      }
    }).tooltip("open");
  });
  $(document).on("mouseleave", "[data-ax5grid-panel-scroll=body] span", function (e) {
    $(e.target).tooltip("close");
    $(".ui-helper-hidden-accessible").remove();
  })
});