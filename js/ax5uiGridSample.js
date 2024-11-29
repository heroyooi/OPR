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
    showRowSelector: true,
    rowSelectorColumnWidth: 50,
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

var data1_9 = [
  { isChecked: "N", column1: '50', column2: '1112340500', column3: '교통사고', column4: '2024-10-25 14:23:35', column5: '000', column6: '2024-10-25 14:23:35', column7: '000', column8: '119/현장출동' },
  { isChecked: "N", column1: '49', column2: '1112340500', column3: '교통사고', column4: '2024-10-25 14:23:35', column5: '000', column6: '2024-10-25 14:23:35', column7: '000', column8: '현장출동 / 112/ 119' },
  { isChecked: "N", column1: '48', column2: '1112340500', column3: '교통사고', column4: '2024-10-25 14:23:35', column5: '000', column6: '2024-10-25 14:23:35', column7: '000', column8: '현장출동/ 견인업체 / 119' },
  { isChecked: "N", column1: '47', column2: '1112340500', column3: '교통사고', column4: '2024-10-25 14:23:35', column5: '000', column6: '2024-10-25 14:23:35', column7: '000', column8: '현장출동/ 견인업체 / 119' },
  { isChecked: "N", column1: '46', column2: '1112340500', column3: '교통사고', column4: '2024-10-25 14:23:35', column5: '000', column6: '2024-10-25 14:23:35', column7: '000', column8: '현장출동/ 견인업체 / 119' },
  { isChecked: "N", column1: '45', column2: '1112340500', column3: '교통사고', column4: '2024-10-25 14:23:35', column5: '000', column6: '2024-10-25 14:23:35', column7: '000', column8: '현장출동/ 견인업체 / 119' },
  { isChecked: "N", column1: '44', column2: '1112340500', column3: '교통사고', column4: '2024-10-25 14:23:35', column5: '000', column6: '2024-10-25 14:23:35', column7: '000', column8: '현장출동/ 견인업체 / 119' },
  { isChecked: "N", column1: '43', column2: '1112340500', column3: '교통사고', column4: '2024-10-25 14:23:35', column5: '000', column6: '2024-10-25 14:23:35', column7: '000', column8: '현장출동/ 견인업체 / 119' },
  { isChecked: "N", column1: '42', column2: '1112340500', column3: '교통사고', column4: '2024-10-25 14:23:35', column5: '000', column6: '2024-10-25 14:23:35', column7: '000', column8: '현장출동/ 견인업체 / 119' },
  { isChecked: "N", column1: '41', column2: '1112340500', column3: '교통사고', column4: '2024-10-25 14:23:35', column5: '000', column6: '2024-10-25 14:23:35', column7: '000', column8: '현장출동/ 견인업체 / 119 / 현장출동/ 견인업체 / 119 / 현장출동/ 견인업체 / 119 / 현장출동/ 견인업체 / 119' },
];

var data1_10 = [
  { isChecked: "N", column1: '50', column2: '2024-10-25 14:23:35', column3: '지점 명 표출', column4: '1112340500', column5: '12314123', column6: '78Km', column7: '원활' },
  { isChecked: "N", column1: '49', column2: '2024-10-25 14:23:35', column3: '지점 명 표출', column4: '1112340500', column5: '12314123', column6: '78Km', column7: '지체' },
  { isChecked: "N", column1: '48', column2: '2024-10-25 14:23:35', column3: '지점 명 표출', column4: '1112340500', column5: '12314123', column6: '78Km', column7: '혼잡' },
  { isChecked: "N", column1: '47', column2: '2024-10-25 14:23:35', column3: '지점 명 표출', column4: '1112340500', column5: '12314123', column6: '78Km', column7: '원활' },
  { isChecked: "N", column1: '46', column2: '2024-10-25 14:23:35', column3: '지점 명 표출', column4: '1112340500', column5: '12314123', column6: '78Km', column7: '원활' },
  { isChecked: "N", column1: '45', column2: '2024-10-25 14:23:35', column3: '지점 명 표출', column4: '1112340500', column5: '12314123', column6: '78Km', column7: '원활' },
  { isChecked: "N", column1: '44', column2: '2024-10-25 14:23:35', column3: '지점 명 표출', column4: '1112340500', column5: '12314123', column6: '78Km', column7: '원활' },
  { isChecked: "N", column1: '43', column2: '2024-10-25 14:23:35', column3: '지점 명 표출', column4: '1112340500', column5: '12314123', column6: '78Km', column7: '원활' },
  { isChecked: "N", column1: '42', column2: '2024-10-25 14:23:35', column3: '지점 명 표출', column4: '1112340500', column5: '12314123', column6: '78Km', column7: '원활' },
  { isChecked: "N", column1: '41', column2: '2024-10-25 14:23:35', column3: '지점 명 표출', column4: '1112340500', column5: '12314123', column6: '78Km', column7: '원활' },
];

var data1_11 = [
  { isChecked: "N", column1: '50', column2: 'VMS_IMG_0050', column3: '도로 파임 주의', column4: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '49', column2: 'VMS_IMG_0050', column3: '도로 파임 주의', column4: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '48', column2: 'VMS_IMG_0050', column3: '도로 파임 주의', column4: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '47', column2: 'VMS_IMG_0050', column3: '도로 파임 주의', column4: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '46', column2: 'VMS_IMG_0050', column3: '도로 파임 주의', column4: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '45', column2: 'VMS_IMG_0050', column3: '도로 파임 주의', column4: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '44', column2: 'VMS_IMG_0050', column3: '도로 파임 주의', column4: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '43', column2: 'VMS_IMG_0050', column3: '도로 파임 주의', column4: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '42', column2: 'VMS_IMG_0050', column3: '도로 파임 주의', column4: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '41', column2: 'VMS_IMG_0050', column3: '도로 파임 주의', column4: '2024-10-25 14:23:35' },
];

var data1_12 = [
  { isChecked: "N", column1: '50', column2: 'VMS-FORM-0050', column3: '텍스트+오브젝트', column4: '속도제한 50', column5: '문자식 2단 10열' },
  { isChecked: "N", column1: '49', column2: 'VMS-FORM-0050', column3: '텍스트+오브젝트', column4: '속도제한 50', column5: '문자식 2단 10열' },
  { isChecked: "N", column1: '48', column2: 'VMS-FORM-0050', column3: '텍스트+오브젝트', column4: '속도제한 50', column5: '문자식 2단 10열' },
  { isChecked: "N", column1: '47', column2: 'VMS-FORM-0050', column3: '텍스트+오브젝트', column4: '속도제한 50', column5: '문자식 2단 10열' },
  { isChecked: "N", column1: '41', column2: 'VMS-FORM-0050', column3: '텍스트+오브젝트', column4: '도형-예산구간소통정보', column5: '문자식 2단 10열' },
];

var data1_13 = [
  { isChecked: "N", column1: '4', column2: '아산만 방조제', column3: 'FOGW-0003', column4: '관심', column5: '250m초과', column6: '규정속도', column7: '-', column8: 'OFF', column9: 'OFF', column10: '점멸', column11: '자동' },
  { isChecked: "N", column1: '3', column2: '아산만 방조제', column3: 'FOGW-0003', column4: '주의', column5: '250m초과', column6: '규정속도', column7: '-', column8: 'OFF', column9: 'OFF', column10: '점멸', column11: '자동' },
  { isChecked: "N", column1: '2', column2: '아산만 방조제', column3: 'FOGW-0003', column4: '경계', column5: '250m초과', column6: '규정속도', column7: '-', column8: 'OFF', column9: 'OFF', column10: '점멸', column11: '자동' },
  { isChecked: "N", column1: '1', column2: '아산만 방조제', column3: 'FOGW-0003', column4: '심각', column5: '250m초과', column6: '규정속도', column7: '-', column8: 'OFF', column9: 'OFF', column10: '점멸', column11: '자동' },
];

var data1_14 = [
  { isChecked: "N", column1: '50', column2: '20241025-01-S-002', column3: '교통사고', column4: '익산', column5: '임시저장', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '49', column2: '20241025-01-S-002', column3: '교통사고', column4: '익산', column5: '접수', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '48', column2: '20241025-01-S-002', column3: '교통사고', column4: '익산', column5: '접수', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '47', column2: '20241025-01-S-002', column3: '교통사고', column4: '평택', column5: '접수', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '46', column2: '20241025-01-S-002', column3: '교통사고', column4: '평택', column5: '접수', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '45', column2: '20241025-01-S-002', column3: '교통사고', column4: '평택', column5: '접수', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '44', column2: '20241025-01-S-002', column3: '교통사고', column4: '평택', column5: '접수', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '43', column2: '20241025-01-S-002', column3: '교통사고', column4: '평택', column5: '접수', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '42', column2: '20241025-01-S-002', column3: '교통사고', column4: '평택', column5: '접수', column6: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '41', column2: '20241025-01-S-002', column3: '교통사고', column4: '평택', column5: '접수', column6: '2024-10-25 14:23:35' },
];
var data1_15 = [
  { isChecked: "N", column1: '50', column2: '2024-10-25 14:23:35', column3: '월간', column4: '휴게소 주차정보', column5: 'VMS-N-0038', column6: '현덕 JCT', column7: '정상', column8: '-', column9: 'Y', column10: 'Ftms003' },
  { isChecked: "N", column1: '49', column2: '2024-10-25 14:23:35', column3: '월간', column4: '휴게소 주차정보', column5: 'VMS-N-0038', column6: '현덕 JCT', column7: '정상', column8: '-', column9: 'Y', column10: 'Ftms003' },
  { isChecked: "N", column1: '48', column2: '2024-10-25 14:23:35', column3: '월간', column4: '휴게소 주차정보', column5: 'VMS-N-0038', column6: '현덕 JCT', column7: '정상', column8: '-', column9: 'Y', column10: 'Ftms003' },
  { isChecked: "N", column1: '47', column2: '2024-10-25 14:23:35', column3: '월간', column4: '갱구부 LED', column5: 'VMS-N-0038', column6: '현덕 JCT', column7: '정상', column8: '-', column9: 'Y', column10: 'Ftms003' },
  { isChecked: "N", column1: '46', column2: '2024-10-25 14:23:35', column3: '월간', column4: '갱구부 LED', column5: 'VMS-N-0038', column6: '현덕 JCT', column7: '정상', column8: '1', column9: 'Y', column10: 'Ftms003' },
  { isChecked: "N", column1: '45', column2: '2024-10-25 14:23:35', column3: '월간', column4: 'VMS', column5: 'VMS-N-0038', column6: '의좋은형제 휴게소', column7: '정상', column8: '1', column9: 'Y', column10: 'Ftms003' },
  { isChecked: "N", column1: '44', column2: '2024-10-25 14:23:35', column3: '월간', column4: 'VMS', column5: 'VMS-N-0038', column6: '의좋은형제 휴게소', column7: '정상', column8: '1', column9: 'Y', column10: 'Ftms003' },
  { isChecked: "N", column1: '43', column2: '2024-10-25 14:23:35', column3: '월간', column4: 'VMS', column5: 'VMS-N-0038', column6: '의좋은형제 휴게소', column7: '정상', column8: '1', column9: 'Y', column10: 'Ftms003' },
  { isChecked: "N", column1: '42', column2: '2024-10-25 14:23:35', column3: '월간', column4: 'VMS', column5: 'VMS-N-0038', column6: '의좋은형제 휴게소', column7: '정상', column8: '-', column9: 'Y', column10: 'Ftms003' },
  { isChecked: "N", column1: '41', column2: '2024-10-25 14:23:35', column3: '월간', column4: 'VMS', column5: 'VMS-N-0038', column6: '의좋은형제 휴게소', column7: '정상', column8: '-', column9: 'Y', column10: 'Ftms003' },
];
var data1_16 = [
  { isChecked: "N", column1: '50', column2: '2024-10-25 14:23:35', column3: '월간', column4: '휴게소 주차정보', column5: 'VMS-N-0038', column6: '현덕 JCT', column7: '정상', column8: '-', column9: 'Y', column10: 'Ftms003' },
  { isChecked: "N", column1: '49', column2: '2024-10-25 14:23:35', column3: '월간', column4: '휴게소 주차정보', column5: 'VMS-N-0038', column6: '현덕 JCT', column7: '정상', column8: '-', column9: 'Y', column10: 'Ftms003' },
  { isChecked: "N", column1: '48', column2: '2024-10-25 14:23:35', column3: '월간', column4: '휴게소 주차정보', column5: 'VMS-N-0038', column6: '현덕 JCT', column7: '정상', column8: '-', column9: 'Y', column10: 'Ftms003' },
  { isChecked: "N", column1: '47', column2: '2024-10-25 14:23:35', column3: '월간', column4: '갱구부 LED', column5: 'VMS-N-0038', column6: '현덕 JCT', column7: '정상', column8: '-', column9: 'Y', column10: 'Ftms003' },
  { isChecked: "N", column1: '46', column2: '2024-10-25 14:23:35', column3: '월간', column4: '갱구부 LED', column5: 'VMS-N-0038', column6: '현덕 JCT', column7: '정상', column8: '1', column9: 'Y', column10: 'Ftms003' },
  { isChecked: "N", column1: '45', column2: '2024-10-25 14:23:35', column3: '월간', column4: 'VMS', column5: 'VMS-N-0038', column6: '의좋은형제 휴게소', column7: '정상', column8: '1', column9: 'Y', column10: 'Ftms003' },
  { isChecked: "N", column1: '44', column2: '2024-10-25 14:23:35', column3: '월간', column4: 'VMS', column5: 'VMS-N-0038', column6: '의좋은형제 휴게소', column7: '정상', column8: '1', column9: 'Y', column10: 'Ftms003' },
  { isChecked: "N", column1: '43', column2: '2024-10-25 14:23:35', column3: '월간', column4: 'VMS', column5: 'VMS-N-0038', column6: '의좋은형제 휴게소', column7: '정상', column8: '1', column9: 'Y', column10: 'Ftms003' },
  { isChecked: "N", column1: '42', column2: '2024-10-25 14:23:35', column3: '월간', column4: 'VMS', column5: 'VMS-N-0038', column6: '의좋은형제 휴게소', column7: '정상', column8: '-', column9: 'Y', column10: 'Ftms003' },
  { isChecked: "N", column1: '41', column2: '2024-10-25 14:23:35', column3: '월간', column4: 'VMS', column5: 'VMS-N-0038', column6: '의좋은형제 휴게소', column7: '정상', column8: '-', column9: 'Y', column10: 'Ftms003' },
];
var data1_17 = [
  { isChecked: "N", column1: '50', column2: '2024-10-25 14:23:35', column3: 'CCTV', column4: 'CCTV-N-0058', column5: '평택호휴게소', column6: '리셋', column7: '완료', column8: 'traffic00', column9: 'Y', column10: 'Y' },
  { isChecked: "N", column1: '49', column2: '2024-10-25 14:23:35', column3: 'CCTV', column4: 'CCTV-N-0058', column5: '평택호휴게소', column6: '리셋', column7: '완료', column8: 'traffic00', column9: 'Y', column10: 'Y' },
  { isChecked: "N", column1: '48', column2: '2024-10-25 14:23:35', column3: 'CCTV', column4: 'CCTV-N-0058', column5: '평택호휴게소', column6: '리셋', column7: '완료', column8: 'traffic00', column9: 'Y', column10: 'Y' },
  { isChecked: "N", column1: '47', column2: '2024-10-25 14:23:35', column3: 'CCTV', column4: 'CCTV-N-0058', column5: '평택호휴게소', column6: '리셋', column7: '완료', column8: 'traffic00', column9: 'Y', column10: 'Y' },
  { isChecked: "N", column1: '46', column2: '2024-10-25 14:23:35', column3: 'CCTV', column4: 'CCTV-N-0058', column5: '평택호휴게소', column6: '리셋', column7: '완료', column8: 'traffic00', column9: 'Y', column10: 'Y' },
  { isChecked: "N", column1: '45', column2: '2024-10-25 14:23:35', column3: 'CCTV', column4: 'CCTV-N-0058', column5: '평택호휴게소', column6: '리셋', column7: '완료', column8: 'traffic00', column9: 'Y', column10: 'Y' },
  { isChecked: "N", column1: '44', column2: '2024-10-25 14:23:35', column3: 'CCTV', column4: 'CCTV-N-0058', column5: '평택호휴게소', column6: '리셋', column7: '완료', column8: 'traffic00', column9: 'Y', column10: 'Y' },
  { isChecked: "N", column1: '43', column2: '2024-10-25 14:23:35', column3: 'CCTV', column4: 'CCTV-N-0058', column5: '평택호휴게소', column6: '리셋', column7: '완료', column8: 'traffic00', column9: 'Y', column10: 'Y' },
  { isChecked: "N", column1: '42', column2: '2024-10-25 14:23:35', column3: 'CCTV', column4: 'CCTV-N-0058', column5: '평택호휴게소', column6: '리셋', column7: '완료', column8: 'traffic00', column9: 'Y', column10: 'Y' },
  { isChecked: "N", column1: '41', column2: '2024-10-25 14:23:35', column3: 'CCTV', column4: 'CCTV-N-0058', column5: '평택호휴게소', column6: '리셋', column7: '완료', column8: 'traffic00', column9: 'Y', column10: 'Y' },
];
var data1_18 = [
  { isChecked: "N", column1: '50', column2: '2024-10-25', column3: '00', column4: '00', column5: '00', column6: '00', column7: '00' },
  { isChecked: "N", column1: '49', column2: '2024-10-25', column3: '00', column4: '00', column5: '00', column6: '00', column7: '00' },
  { isChecked: "N", column1: '48', column2: '2024-10-25', column3: '00', column4: '00', column5: '00', column6: '00', column7: '00' },
  { isChecked: "N", column1: '47', column2: '2024-10-25', column3: '00', column4: '00', column5: '00', column6: '00', column7: '00' },
  { isChecked: "N", column1: '46', column2: '2024-10-25', column3: '00', column4: '00', column5: '00', column6: '00', column7: '00' },
  { isChecked: "N", column1: '45', column2: '2024-10-25', column3: '00', column4: '00', column5: '00', column6: '00', column7: '00' },
  { isChecked: "N", column1: '44', column2: '2024-10-25', column3: '00', column4: '00', column5: '00', column6: '00', column7: '00' },
  { isChecked: "N", column1: '43', column2: '2024-10-25', column3: '00', column4: '00', column5: '00', column6: '00', column7: '00' },
  { isChecked: "N", column1: '42', column2: '2024-10-25', column3: '00', column4: '00', column5: '00', column6: '00', column7: '00' },
  { isChecked: "N", column1: '41', column2: '2024-10-25', column3: '00', column4: '00', column5: '00', column6: '00', column7: '00' },
];
var data1_19 = [
  
  { isChecked: "N", column1: '50', column2: '1234567890', column3: ['red', '70'], column4: ['red', '70'], column5: ['red', '70'], column6: ['red', '70'], column7: ['red', '70'], column8: ['red', '70'], column9: ['red', '70'], column10: ['red', '70'], column11: ['red', '70'], column12: ['red', '70'], column13: ['red', '70'], column14: ['red', '70'], column15: ['red', '70'], column16: ['red', '70'], column17: ['red', '70'], column18: ['red', '70'], column19: ['red', '70'], column20: ['red', '70'], column21: ['red', '70'], column22: ['red', '70'], column23: ['red', '70'], column24: ['red', '70'], column25: ['red', '70'], column26: ['red', '200'] },


  { isChecked: "N", column1: '49', column2: '1234567890', column3: ['red', '70'], column4: ['red', '70'], column5: ['red', '70'], column6: ['green', '70'], column7: ['red', '70'], column8: ['red', '70'], column9: ['red', '70'], column10: ['red', '70'], column11: ['red', '70'], column12: ['red', '70'], column13: ['red', '70'], column14: ['red', '70'], column15: ['red', '70'], column16: ['red', '70'], column17: ['red', '70'], column18: ['red', '70'], column19: ['red', '70'], column20: ['red', '70'], column21: ['red', '70'], column22: ['red', '70'], column23: ['red', '70'], column24: ['red', '70'], column25: ['red', '70'], column26: ['red', '70'] },

  { isChecked: "N", column1: '48', column2: '1234567890', column3: ['red', '70'], column4: ['red', '70'], column5: ['orange', '70'], column6: ['red', '70'], column7: ['red', '70'], column8: ['red', '70'], column9: ['red', '70'], column10: ['red', '70'], column11: ['red', '70'], column12: ['red', '70'], column13: ['red', '70'], column14: ['red', '70'], column15: ['red', '70'], column16: ['red', '70'], column17: ['red', '70'], column18: ['red', '70'], column19: ['red', '70'], column20: ['red', '70'], column21: ['red', '70'], column22: ['red', '70'], column23: ['red', '70'], column24: ['red', '70'], column25: ['red', '70'], column26: ['red', '70'] },

  { isChecked: "N", column1: '47', column2: '1234567890', column3: ['green', '70'], column4: ['green', '70'], column5: ['green', '70'], column6: ['red', '70'], column7: ['green', '70'], column8: ['green', '70'], column9: ['green', '70'], column10: ['green', '70'], column11: ['green', '70'], column12: ['green', '70'], column13: ['green', '70'], column14: ['green', '70'], column15: ['green', '70'], column16: ['green', '70'], column17: ['green', '70'], column18: ['green', '70'], column19: ['green', '70'], column20: ['green', '70'], column21: ['green', '70'], column22: ['green', '70'], column23: ['green', '70'], column24: ['green', '70'], column25: ['green', '70'], column26: ['green', '70'] },

  { isChecked: "N", column1: '46', column2: '1234567890', column3: ['green', '70'], column4: ['green', '70'], column5: ['green', '70'], column6: ['green', '70'], column7: ['green', '70'], column8: ['green', '70'], column9: ['green', '70'], column10: ['green', '70'], column11: ['green', '70'], column12: ['green', '70'], column13: ['green', '70'], column14: ['green', '70'], column15: ['green', '70'], column16: ['green', '70'], column17: ['green', '70'], column18: ['green', '70'], column19: ['green', '70'], column20: ['green', '70'], column21: ['green', '70'], column22: ['green', '70'], column23: ['green', '70'], column24: ['green', '70'], column25: ['green', '70'], column26: ['green', '70'] },

  { isChecked: "N", column1: '45', column2: '1234567890', column3: ['red', '70'], column4: ['red', '70'], column5: ['red', '70'], column6: ['green', '70'], column7: ['red', '70'], column8: ['red', '70'], column9: ['red', '70'], column10: ['red', '70'], column11: ['red', '70'], column12: ['red', '70'], column13: ['red', '70'], column14: ['red', '70'], column15: ['red', '70'], column16: ['red', '70'], column17: ['red', '70'], column18: ['red', '70'], column19: ['red', '70'], column20: ['red', '70'], column21: ['red', '70'], column22: ['red', '70'], column23: ['red', '70'], column24: ['red', '70'], column25: ['red', '70'], column26: ['red', '70'] },
  
  { isChecked: "N", column1: '44', column2: '1234567890', column3: ['red', '70'], column4: ['red', '70'], column5: ['orange', '70'], column6: ['red', '70'], column7: ['red', '70'], column8: ['red', '70'], column9: ['red', '70'], column10: ['red', '70'], column11: ['red', '70'], column12: ['red', '70'], column13: ['red', '70'], column14: ['red', '70'], column15: ['red', '70'], column16: ['red', '70'], column17: ['red', '70'], column18: ['red', '70'], column19: ['red', '70'], column20: ['red', '70'], column21: ['red', '70'], column22: ['red', '70'], column23: ['red', '70'], column24: ['red', '70'], column25: ['red', '70'], column26: ['red', '70'] },

  { isChecked: "N", column1: '43', column2: '1234567890', column3: ['green', '70'], column4: ['green', '70'], column5: ['green', '70'], column6: ['red', '70'], column7: ['green', '70'], column8: ['green', '70'], column9: ['green', '70'], column10: ['green', '70'], column11: ['green', '70'], column12: ['green', '70'], column13: ['green', '70'], column14: ['green', '70'], column15: ['green', '70'], column16: ['green', '70'], column17: ['green', '70'], column18: ['green', '70'], column19: ['green', '70'], column20: ['green', '70'], column21: ['green', '70'], column22: ['green', '70'], column23: ['green', '70'], column24: ['green', '70'], column25: ['green', '70'], column26: ['green', '70'] },

  { isChecked: "N", column1: '42', column2: '1234567890', column3: ['green', '70'], column4: ['green', '70'], column5: ['green', '70'], column6: ['green', '70'], column7: ['green', '70'], column8: ['green', '70'], column9: ['green', '70'], column10: ['green', '70'], column11: ['green', '70'], column12: ['green', '70'], column13: ['green', '70'], column14: ['green', '70'], column15: ['green', '70'], column16: ['green', '70'], column17: ['green', '70'], column18: ['green', '70'], column19: ['green', '70'], column20: ['green', '70'], column21: ['green', '70'], column22: ['green', '70'], column23: ['green', '70'], column24: ['green', '70'], column25: ['green', '70'], column26: ['green', '70'] },
  
  { isChecked: "N", column1: '41', column2: '1234567890', column3: ['green', '70'], column4: ['green', '70'], column5: ['green', '70'], column6: ['green', '70'], column7: ['green', '70'], column8: ['green', '70'], column9: ['green', '70'], column10: ['green', '70'], column11: ['green', '70'], column12: ['green', '70'], column13: ['green', '70'], column14: ['green', '70'], column15: ['green', '70'], column16: ['green', '70'], column17: ['green', '70'], column18: ['green', '70'], column19: ['green', '70'], column20: ['green', '70'], column21: ['green', '70'], column22: ['green', '70'], column23: ['green', '70'], column24: ['green', '70'], column25: ['green', '70'], column26: ['green', '70'] },
];
var data1_20 = [
  { isChecked: "N", column1: '50', column2: 'TCCTV-0186', column3: '봉수산터널CCTV28', column4: '터널', column5: '익산' },
  { isChecked: "N", column1: '49', column2: 'TCCTV-0186', column3: '봉수산터널CCTV28', column4: '터널', column5: '익산' },
  { isChecked: "N", column1: '48', column2: 'TCCTV-0186', column3: '봉수산터널CCTV28', column4: '터널', column5: '익산' },
  { isChecked: "N", column1: '47', column2: 'TCCTV-0186', column3: '봉수산터널CCTV28', column4: '터널', column5: '평택' },
  { isChecked: "N", column1: '46', column2: 'TCCTV-0186', column3: '봉수산터널CCTV28', column4: '터널', column5: '평택' },
  { isChecked: "N", column1: '45', column2: 'TCCTV-0186', column3: '봉수산터널CCTV28', column4: '터널', column5: '평택' },
  { isChecked: "N", column1: '44', column2: 'TCCTV-0186', column3: '봉수산터널CCTV28', column4: '터널', column5: '평택' },
  { isChecked: "N", column1: '43', column2: 'TCCTV-0186', column3: '봉수산터널CCTV28', column4: '터널', column5: '평택' },
  { isChecked: "N", column1: '42', column2: 'TCCTV-0186', column3: '봉수산터널CCTV28', column4: '터널', column5: '평택' },
  { isChecked: "N", column1: '41', column2: 'TCCTV-0186', column3: '봉수산터널CCTV28', column4: '터널', column5: '평택' },
];
var data1_21 = [
  { isChecked: "N", column1: '50', column2: '01-VDS-0048', column3: '대흥터널CCTV5', column4: '터널', column5: '익산' },
  { isChecked: "N", column1: '49', column2: 'VDS-0050', column3: 'OO 지점 VDS 1', column4: '터널', column5: '평택' },
  { isChecked: "N", column1: '48', column2: 'VDS-0050', column3: 'OO 지점 VDS 1', column4: '터널', column5: '평택' },
  { isChecked: "N", column1: '47', column2: 'VDS-0050', column3: 'OO 지점 VDS 1', column4: '터널', column5: '평택' },
  { isChecked: "N", column1: '46', column2: 'VDS-0050', column3: 'OO 지점 VDS 1', column4: '터널', column5: '평택' },
];
var data1_22 = [
  { isChecked: "N", column1: '50', column2: 'CCTV-N-0044', column3: 'OO CCTV 3', column4: '평택', column5: '0000-0000' },
  { isChecked: "N", column1: '49', column2: 'CCTV-N-0044', column3: 'OO CCTV 3', column4: '평택', column5: '0000-0000' },
  { isChecked: "N", column1: '48', column2: 'CCTV-N-0044', column3: 'OO CCTV 3', column4: '평택', column5: '0000-0000' },
  { isChecked: "N", column1: '47', column2: 'CCTV-N-0044', column3: 'OO CCTV 3', column4: '평택', column5: '0000-0000' },
  { isChecked: "N", column1: '46', column2: 'CCTV-N-0044', column3: 'OO CCTV 3', column4: '평택', column5: '0000-0000' },
  { isChecked: "N", column1: '45', column2: 'CCTV-N-0044', column3: 'OO CCTV 3', column4: '평택', column5: '0000-0000' },
  { isChecked: "N", column1: '44', column2: 'CCTV-N-0044', column3: 'OO CCTV 3', column4: '평택', column5: '0000-0000' },
  { isChecked: "N", column1: '43', column2: 'CCTV-N-0044', column3: 'OO CCTV 3', column4: '평택', column5: '0000-0000' },
  { isChecked: "N", column1: '42', column2: 'CCTV-N-0044', column3: 'OO CCTV 3', column4: '평택', column5: '0000-0000' },
  { isChecked: "N", column1: '41', column2: 'CCTV-N-0044', column3: 'OO CCTV 3', column4: '평택', column5: '0000-0000' },
];

// 2024-11
var data1_23 = [
  { isChecked: "N", column1: '50', column2: '2024-10-25 00:00:00', column3: '2024-10-25 00:00:00', column4: '00', column5: '00', column6: '00', column7: '00', column8: '00', column9: '00', column10: '남남동', column11: '남남서' },
  { isChecked: "N", column1: '49', column2: '2024-10-25 00:00:00', column3: '2024-10-25 00:00:00', column4: '00', column5: '00', column6: '00', column7: '00', column8: '00', column9: '00', column10: '남남동', column11: '남남서' },
  { isChecked: "N", column1: '48', column2: '2024-10-25 00:00:00', column3: '2024-10-25 00:00:00', column4: '00', column5: '00', column6: '00', column7: '00', column8: '00', column9: '00', column10: '남남동', column11: '남남서' },
  { isChecked: "N", column1: '47', column2: '2024-10-25 00:00:00', column3: '2024-10-25 00:00:00', column4: '00', column5: '00', column6: '00', column7: '00', column8: '00', column9: '00', column10: '남남동', column11: '남남서' },
  { isChecked: "N", column1: '46', column2: '2024-10-25 00:00:00', column3: '2024-10-25 00:00:00', column4: '00', column5: '00', column6: '00', column7: '00', column8: '00', column9: '00', column10: '남남동', column11: '남남서' },
  { isChecked: "N", column1: '45', column2: '2024-10-25 00:00:00', column3: '2024-10-25 00:00:00', column4: '00', column5: '00', column6: '00', column7: '00', column8: '00', column9: '00', column10: '남남동', column11: '남남서' },
  { isChecked: "N", column1: '44', column2: '2024-10-25 00:00:00', column3: '2024-10-25 00:00:00', column4: '00', column5: '00', column6: '00', column7: '00', column8: '00', column9: '00', column10: '남남동', column11: '남남서' },
  { isChecked: "N", column1: '43', column2: '2024-10-25 00:00:00', column3: '2024-10-25 00:00:00', column4: '00', column5: '00', column6: '00', column7: '00', column8: '00', column9: '00', column10: '남남동', column11: '남남서' },
  { isChecked: "N", column1: '42', column2: '2024-10-25 00:00:00', column3: '2024-10-25 00:00:00', column4: '00', column5: '00', column6: '00', column7: '00', column8: '00', column9: '00', column10: '남남동', column11: '남남서' },
  { isChecked: "N", column1: '41', column2: '2024-10-25 00:00:00', column3: '2024-10-25 00:00:00', column4: '00', column5: '00', column6: '00', column7: '00', column8: '00', column9: '00', column10: '남남동', column11: '남남서' },
  { isChecked: "N", column1: '40', column2: '2024-10-25 00:00:00', column3: '2024-10-25 00:00:00', column4: '00', column5: '00', column6: '00', column7: '00', column8: '00', column9: '00', column10: '남남동', column11: '남남서' },
];
var data1_24 = [
  { isChecked: "N", column1: '50', column2: '2024-10-25', column3: '00', column4: '00', column5: '00', column6: '00', column7: '00', column8: '00', column9: '00', column10: '00', column11: '00', column12: '00', column13: '00', column14: '00', column15: '00' },
  { isChecked: "N", column1: '49', column2: '2024-10-25', column3: '00', column4: '00', column5: '00', column6: '00', column7: '00', column8: '00', column9: '00', column10: '00', column11: '00', column12: '00', column13: '00', column14: '00', column15: '00' },
  { isChecked: "N", column1: '48', column2: '2024-10-25', column3: '00', column4: '00', column5: '00', column6: '00', column7: '00', column8: '00', column9: '00', column10: '00', column11: '00', column12: '00', column13: '00', column14: '00', column15: '00' },
  { isChecked: "N", column1: '47', column2: '2024-10-25', column3: '00', column4: '00', column5: '00', column6: '00', column7: '00', column8: '00', column9: '00', column10: '00', column11: '00', column12: '00', column13: '00', column14: '00', column15: '00' },
  { isChecked: "N", column1: '46', column2: '2024-10-25', column3: '00', column4: '00', column5: '00', column6: '00', column7: '00', column8: '00', column9: '00', column10: '00', column11: '00', column12: '00', column13: '00', column14: '00', column15: '00' },
  { isChecked: "N", column1: '45', column2: '2024-10-25', column3: '00', column4: '00', column5: '00', column6: '00', column7: '00', column8: '00', column9: '00', column10: '00', column11: '00', column12: '00', column13: '00', column14: '00', column15: '00' },
  { isChecked: "N", column1: '44', column2: '2024-10-25', column3: '00', column4: '00', column5: '00', column6: '00', column7: '00', column8: '00', column9: '00', column10: '00', column11: '00', column12: '00', column13: '00', column14: '00', column15: '00' },
  { isChecked: "N", column1: '43', column2: '2024-10-25', column3: '00', column4: '00', column5: '00', column6: '00', column7: '00', column8: '00', column9: '00', column10: '00', column11: '00', column12: '00', column13: '00', column14: '00', column15: '00' },
  { isChecked: "N", column1: '42', column2: '2024-10-25', column3: '00', column4: '00', column5: '00', column6: '00', column7: '00', column8: '00', column9: '00', column10: '00', column11: '00', column12: '00', column13: '00', column14: '00', column15: '00' },
  { isChecked: "N", column1: '41', column2: '2024-10-25', column3: '00', column4: '00', column5: '00', column6: '00', column7: '00', column8: '00', column9: '00', column10: '00', column11: '00', column12: '00', column13: '00', column14: '00', column15: '00' },
];

var columns1 = [
  // checkColumns,
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
  // checkColumns,
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
  // checkColumns,
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
  // checkColumns,
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
  // checkColumns,
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
  // checkColumns,
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
  // checkColumns,
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
  // checkColumns,
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
var columns1_9 = [
  // checkColumns,
  {
    key: 'column1',
    label: '순번',
    width: 100,
    align: "center",
    sortable: true,
  },
  {
    key: 'column2',
    label: '링크 ID',
    width: 200,
    align: "center",
    sortable: true,
  },
  {
    key: 'column3',
    label: '화재 유형',
    width: 140,
    align: "center",
    sortable: true,
  },
  {
    key: 'column4',
    label: '화재 발생 일시',
    width: 200,
    align: "center",
    sortable: true,
  },
  {
    key: 'column5',
    label: '판정 결과',
    width: 140,
    align: "center",
    sortable: true,
  },
  {
    key: 'column6',
    label: '화재 발생 일시',
    width: 200,
    align: "center",
    sortable: true,
  },
  {
    key: 'column7',
    label: '해제 계측',
    width: 140,
    align: "center",
    sortable: true,
  },
  {
    key: 'column8',
    label: '대응 및 처리',
    width: '*',
    align: "left",
    sortable: true,
  },
];
var columns1_10 = [
  // checkColumns,
  {
    key: 'column1',
    label: '순번',
    width: 100,
    align: "center",
    sortable: true,
  },
  {
    key: 'column2',
    label: '검지일시',
    width: 200,
    align: "center",
    sortable: true,
  },
  {
    key: 'column3',
    label: '지점명',
    width: 500,
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
    label: 'Link ID',
    width: 200,
    align: "center",
    sortable: true,
  },
  {
    key: 'column6',
    label: '평균속도',
    width: 200,
    align: "center",
    sortable: true,
  },
  {
    key: 'column7',
    label: '소통상태',
    width: 140,
    align: "center",
    sortable: true,
    formatter: function() {
      if (this.value == '혼잡') {
        return '<span class="st-box red">' + this.value + '</span>';
      } else if (this.value == '지체') {
        return '<span class="st-box orange">' + this.value + '</span>';
      } else if (this.value == '원활') {
        return '<span class="st-box green">' + this.value + '</span>';
      }
    }
  },
];
var columns1_11 = [
  // checkColumns,
  {
    key: 'column1',
    label: '순번',
    width: 60,
    align: "center",
    sortable: true,
  },
  {
    key: 'column2',
    label: '이미지 ID',
    width: 313,
    align: "center",
    sortable: true,
  },
  {
    key: 'column3',
    label: '이미지 명',
    width: 313,
    align: "center",
    sortable: true,
  },
  {
    key: 'column4',
    label: '등록 일시',
    width: 313,
    align: "center",
    sortable: true,
  },
];
var columns1_12 = [
  // checkColumns,
  {
    key: 'column1',
    label: '순번',
    width: 60,
    align: "center",
    sortable: true,
  },
  {
    key: 'column2',
    label: '폼 ID',
    width: 133,
    align: "center",
    sortable: true,
  },
  {
    key: 'column3',
    label: '폼 유형',
    width: 133,
    align: "center",
    sortable: true,
  },
  {
    key: 'column4',
    label: '폼 명',
    width: 133,
    align: "center",
    sortable: true,
  },
  {
    key: 'column5',
    label: 'VMS 유형',
    width: 133,
    align: "center",
    sortable: true,
  },
];
var columns1_13 = [
  // checkColumns,
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
    width: 240,
    align: "center",
    sortable: true,
  },
  {
    key: 'column3',
    label: '지점명',
    width: 240,
    align: "center",
    sortable: true,
  },
  {
    key: 'column4',
    label: '단계',
    width: 120,
    align: "center",
    sortable: true,
    formatter: function() {
      if (this.value == '심각') {
        return '<span class="st-box red">4: ' + this.value + '</span>';
      } else if (this.value == '경계') {
        return '<span class="st-box orange deep">3: ' + this.value + '</span>';
      } else if (this.value == '주의') {
        return '<span class="st-box orange">2: ' + this.value + '</span>';
      } else if (this.value == '관심') {
        return '<span class="st-box green">1: ' + this.value + '</span>';
      }
    }
  },
  {
    key: 'column5',
    label: '시정거리',
    width: 120,
    align: "center",
    sortable: true,
  },
  {
    key: 'column6',
    label: '속도제한',
    width: 120,
    align: "center",
    sortable: true,
  },
  {
    key: 'column7',
    label: '통행제한',
    width: 120,
    align: "center",
    sortable: true,
  },
  {
    key: 'column8',
    label: '사이렌',
    width: 120,
    align: "center",
    sortable: true,
  },
  {
    key: 'column9',
    label: '안내방송',
    width: 120,
    align: "center",
    sortable: true,
  },
  {
    key: 'column10',
    label: '안개등',
    width: 120,
    align: "center",
    sortable: true,
  },
  {
    key: 'column11',
    label: '구분',
    width: 120,
    align: "center",
    sortable: true,
  },
];
var columns1_14 = [
  // checkColumns,
  {
    key: 'column1',
    label: '순번',
    width: 100,
    align: "center",
    sortable: true,
  },
  {
    key: 'column2',
    label: '돌발 ID',
    width: 100,
    align: "center",
    sortable: true,
  },
  {
    key: 'column3',
    label: '돌발 유형',
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
    label: '진행상태',
    width: 100,
    align: "center",
    sortable: true,
  },
  {
    key: 'column6',
    label: '발생 일시',
    width: '*',
    align: "center",
    sortable: true,
  },
];
var columns1_15 = [
  // checkColumns,
  {
    key: 'column1',
    label: '순번',
    width: 100,
    align: "center",
    sortable: true,
  },
  {
    key: 'column2',
    label: '점검일시',
    width: 270,
    align: "center",
    sortable: true,
  },
  {
    key: 'column3',
    label: '점검 유형',
    width: 100,
    align: "center",
    sortable: true,
  },
  {
    key: 'column4',
    label: '장비 유형',
    width: 120,
    align: "center",
    sortable: true,
  },
  {
    key: 'column5',
    label: '장비ID',
    width: 270,
    align: "center",
    sortable: true,
  },
  {
    key: 'column6',
    label: '위치',
    width: '*',
    align: "center",
    sortable: true,
  },
  {
    key: 'column7',
    label: '점검 결과',
    width: 100,
    align: "center",
    sortable: true,
  },
  {
    key: 'column8',
    label: '이상항목',
    width: 100,
    align: "center",
    sortable: true,
  },
  {
    key: 'column9',
    label: '이미지 등록여부',
    width: 100,
    align: "center",
    sortable: true,
  },
  {
    key: 'column10',
    label: '점검자',
    width: 100,
    align: "center",
    sortable: true,
  },
];
var columns1_16 = [
  // checkColumns,
  {
    key: 'column1',
    label: '순번',
    width: 100,
    align: "center",
    sortable: true,
  },
  {
    key: 'column2',
    label: '점검일시',
    width: 270,
    align: "center",
    sortable: true,
  },
  {
    key: 'column3',
    label: '점검 유형',
    width: 100,
    align: "center",
    sortable: true,
  },
  {
    key: 'column4',
    label: '장비 유형',
    width: 120,
    align: "center",
    sortable: true,
  },
  {
    key: 'column5',
    label: '장비ID',
    width: 270,
    align: "center",
    sortable: true,
  },
  {
    key: 'column6',
    label: '위치',
    width: '*',
    align: "center",
    sortable: true,
  },
  {
    key: 'column7',
    label: '점검 결과',
    width: 100,
    align: "center",
    sortable: true,
  },
  {
    key: 'column8',
    label: '이상항목',
    width: 100,
    align: "center",
    sortable: true,
  },
  {
    key: 'column9',
    label: '상세보기',
    width: 100,
    align: "center",
    sortable: true,
    formatter: function() {
      return '<a class="s-ico details" href="javascript:;"></a>';
    }
  },
  {
    key: 'column10',
    label: '점검자',
    width: 100,
    align: "center",
    sortable: true,
  },
];
var columns1_17 = [
  // checkColumns,
  {
    key: 'column1',
    label: '순번',
    width: 100,
    align: "center",
    sortable: true,
  },
  {
    key: 'column2',
    label: '수리/조치 완료 일시',
    width: 270,
    align: "center",
    sortable: true,
  },
  {
    key: 'column3',
    label: '장비',
    width: 100,
    align: "center",
    sortable: true,
  },
  {
    key: 'column4',
    label: '장비ID',
    width: 270,
    align: "center",
    sortable: true,
  },
  {
    key: 'column5',
    label: '위치',
    width: 270,
    align: "center",
    sortable: true,
  },
  {
    key: 'column6',
    label: '조치결과',
    width: 100,
    align: "center",
    sortable: true,
  },
  {
    key: 'column7',
    label: '진행상태',
    width: 100,
    align: "center",
    sortable: true,
  },
  {
    key: 'column8',
    label: '담당자',
    width: 100,
    align: "center",
    sortable: true,
  },
  {
    key: 'column9',
    label: '상세보기',
    width: 100,
    align: "center",
    sortable: true,
    formatter: function() {
      return '<a class="s-ico details" href="javascript:;"></a>';
    }
  },
  {
    key: 'column10',
    label: '출력',
    width: 100,
    align: "center",
    sortable: true,
    formatter: function() {
      return '<a class="s-ico print" href="javascript:void(0);" onclick="openPrint()"></a>';
    }
  },
];
var columns1_18 = [
  // checkColumns,
  {
    key: 'column1',
    label: '순번',
    width: 60,
    align: "center",
    sortable: true,
  },
  {
    key: 'column2',
    label: '일자',
    width: 170,
    align: "center",
    sortable: true,
  },
  {
    key: 'column3',
    label: '합계',
    width: 130,
    align: "center",
    sortable: true,
  },
  {
    key: 'column4',
    label: '차량고장',
    width: 130,
    align: "center",
    sortable: true,
  },
  {
    key: 'column4',
    label: '교통사고',
    width: 130,
    align: "center",
    sortable: true,
  },
  {
    key: 'column5',
    label: '낙하물',
    width: 130,
    align: "center",
    sortable: true,
  },
  {
    key: 'column6',
    label: '과속',
    width: 130,
    align: "center",
    sortable: true,
  },
  {
    key: 'column7',
    label: '난폭운전',
    width: 130,
    align: "center",
    sortable: true,
  },
];

var column1_19_formatter = function() {
  if (this.value[0] == 'red') {
    return '<span class="st-box red">' + this.value[1] + '</span>';
  } else if (this.value[0] == 'orange') {
    return '<span class="st-box orange">' + this.value[1] + '</span>';
  } else if (this.value[0] == 'green') {
    return '<span class="st-box green">' + this.value[1] + '</span>';
  }
}
var columns1_19 = [
  // checkColumns,
  {
    key: 'column1',
    label: '순번',
    width: 60,
    align: "center",
    sortable: true,
  },
  {
    key: 'column2',
    label: '구분',
    width: 140,
    align: "center",
    sortable: true,
  },
  {
    key: 'column3',
    label: '00',
    width: 56,
    align: "center",
    formatter: column1_19_formatter
  },
  {
    key: 'column4',
    label: '01',
    width: 56,
    align: "center",
    formatter: column1_19_formatter
  },
  {
    key: 'column5',
    label: '02',
    width: 56,
    align: "center",
    formatter: column1_19_formatter
  },
  {
    key: 'column6',
    label: '03',
    width: 56,
    align: "center",
    formatter: column1_19_formatter
  },
  {
    key: 'column7',
    label: '04',
    width: 56,
    align: "center",
    formatter: column1_19_formatter
  },
  {
    key: 'column8',
    label: '05',
    width: 56,
    align: "center",
    formatter: column1_19_formatter
  },
  {
    key: 'column9',
    label: '06',
    width: 56,
    align: "center",
    formatter: column1_19_formatter
  },
  {
    key: 'column10',
    label: '07',
    width: 56,
    align: "center",
    formatter: column1_19_formatter
  },
  {
    key: 'column11',
    label: '08',
    width: 56,
    align: "center",
    formatter: column1_19_formatter
  },
  {
    key: 'column12',
    label: '09',
    width: 56,
    align: "center",
    formatter: column1_19_formatter
  },
  {
    key: 'column13',
    label: '10',
    width: 56,
    align: "center",
    formatter: column1_19_formatter
  },
  {
    key: 'column14',
    label: '11',
    width: 56,
    align: "center",
    formatter: column1_19_formatter
  },
  {
    key: 'column15',
    label: '12',
    width: 56,
    align: "center",
    formatter: column1_19_formatter
  },
  {
    key: 'column16',
    label: '13',
    width: 56,
    align: "center",
    formatter: column1_19_formatter
  },
  {
    key: 'column17',
    label: '14',
    width: 56,
    align: "center",
    formatter: column1_19_formatter
  },
  {
    key: 'column18',
    label: '15',
    width: 56,
    align: "center",
    formatter: column1_19_formatter
  },
  {
    key: 'column19',
    label: '16',
    width: 56,
    align: "center",
    formatter: column1_19_formatter
  },
  {
    key: 'column20',
    label: '17',
    width: 56,
    align: "center",
    formatter: column1_19_formatter
  },
  {
    key: 'column21',
    label: '18',
    width: 56,
    align: "center",
    formatter: column1_19_formatter
  },
  {
    key: 'column22',
    label: '19',
    width: 56,
    align: "center",
    formatter: column1_19_formatter
  },
  {
    key: 'column23',
    label: '20',
    width: 56,
    align: "center",
    formatter: column1_19_formatter
  },
  {
    key: 'column24',
    label: '21',
    width: 56,
    align: "center",
    formatter: column1_19_formatter
  },
  {
    key: 'column25',
    label: '22',
    width: 56,
    align: "center",
    formatter: column1_19_formatter
  },
  {
    key: 'column26',
    label: '23',
    width: 56,
    align: "center",
    formatter: column1_19_formatter
  },
];

var columns1_20 = [
  // checkColumns,
  {
    key: 'column1',
    label: '순번',
    width: 60,
    align: "center",
    sortable: true,
  },
  {
    key: 'column2',
    label: '장비ID',
    width: 230,
    align: "center",
    sortable: true,
  },
  {
    key: 'column3',
    label: '이름',
    width: 233,
    align: "center",
    sortable: true,
  },
  {
    key: 'column4',
    label: '구분',
    width: 100,
    align: "center",
    sortable: true,
  },
  {
    key: 'column5',
    label: '방향',
    width: 100,
    align: "center",
    sortable: true,
  },
];
var columns1_21 = [
  // checkColumns,
  {
    key: 'column1',
    label: '순번',
    width: 60,
    align: "center",
    sortable: true,
  },
  {
    key: 'column2',
    label: '장비ID',
    width: 128,
    align: "center",
    sortable: true,
  },
  {
    key: 'column3',
    label: '이름',
    width: 128,
    align: "center",
    sortable: true,
  },
  {
    key: 'column4',
    label: '구분',
    width: 68,
    align: "center",
    sortable: true,
  },
  {
    key: 'column5',
    label: '방향',
    width: 68,
    align: "center",
    sortable: true,
  },
];

var columns1_22 = [
  // checkColumns,
  {
    key: 'column1',
    label: '순번',
    width: 60,
    align: "center",
    sortable: true,
  },
  {
    key: 'column2',
    label: 'CCTV ID',
    width: 188,
    align: "center",
    sortable: true,
  },
  {
    key: 'column3',
    label: 'CCTV 명',
    width: 188,
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
    label: '설치위치',
    width: 188,
    align: "center",
    sortable: true,
  },
];

// 2024-11
var columns1_23 = [
  {
    key: 'column1',
    label: '순번',
    width: 60,
    align: "center",
    sortable: true,
  },
  {
    key: 'column2',
    label: '일자',
    width: 170,
    align: "center",
    sortable: true,
  },
  {
    key: 'column3',
    label: '제어기 ID',
    width: 170,
    align: "center",
    sortable: true,
  },
  {
    label: '기온 (℃)',
    columns: [
      {
        key: 'column4',
        label: '최고',
        width: 80,
        align: 'center',
        sortable: true,
      },
      {
        key: 'column5',
        label: '최저',
        width: 80,
        align: 'center',
        sortable: true,
      }
    ]
  },
  {
    label: '습도 (%)',
    columns: [
      {
        key: 'column6',
        label: '최고',
        width: 80,
        align: 'center',
        sortable: true,
      },
      {
        key: 'column7',
        label: '최저',
        width: 80,
        align: 'center',
        sortable: true,
      },
    ]
  },
  {
    label: '풍속 (m/s)',
    columns: [
      {
        key: 'column8',
        label: '최고',
        width: 80,
        align: 'center',
        sortable: true,
      },
      {
        key: 'column9',
        label: '최저',
        width: 80,
        align: 'center',
        sortable: true,
      }
    ]
  },
  {
    label: '풍향',
    columns: [
      {
        key: 'column10',
        label: '최고',
        width: 80,
        align: 'center',
        sortable: true,
      },
      {
        key: 'column11',
        label: '최저',
        width: 80,
        align: 'center',
        sortable: true,
      }
    ]
  },
];
var columns1_24 = [
  {
    key: 'column1',
    label: '순번',
    width: 60,
    align: "center",
    sortable: true,
  },
  {
    key: 'column2',
    label: '일자',
    width: 100,
    align: "center",
    sortable: true,
  },
  {
    key: 'column3',
    label: '합계',
    width: 62,
    align: "center",
    sortable: true,
  },
  {
    key: 'column4',
    label: '차량고장',
    width: 62,
    align: "center",
    sortable: true,
  },
  {
    key: 'column4',
    label: '교통사고',
    width: 62,
    align: "center",
    sortable: true,
  },
  {
    key: 'column5',
    label: '장애물',
    width: 62,
    align: "center",
    sortable: true,
  },
  {
    key: 'column6',
    label: '차량증가/<br />정체',
    width: 62,
    align: "center",
    sortable: true,
  },
  {
    key: 'column7',
    label: '강우',
    width: 62,
    align: "center",
    sortable: true,
  },
  {
    key: 'column8',
    label: '강우',
    width: 62,
    align: "center",
    sortable: true,
  },
  {
    key: 'column9',
    label: '강설',
    width: 62,
    align: "center",
    sortable: true,
  },
  {
    key: 'column10',
    label: '노면결빙',
    width: 62,
    align: "center",
    sortable: true,
  },
  {
    key: 'column11',
    label: '안개',
    width: 62,
    align: "center",
    sortable: true,
  },
  {
    key: 'column12',
    label: '위험물질<br />방출',
    width: 62,
    align: "center",
    sortable: true,
  },
  {
    key: 'column13',
    label: '지진',
    width: 62,
    align: "center",
    sortable: true,
  },
  {
    key: 'column14',
    label: '산사태',
    width: 62,
    align: "center",
    sortable: true,
  },
  {
    key: 'column15',
    label: '역주행',
    width: 62,
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
  // checkColumns,
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
    showRowSelector: true,
    rowSelectorColumnWidth: 50,
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
  // checkColumns,
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
    showRowSelector: true,
    rowSelectorColumnWidth: 50,
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
  var $grid1_9 = $('[data-ax5grid="grid1_9"]');
  var $grid1_10 = $('[data-ax5grid="grid1_10"]');
  var $grid1_11 = $('[data-ax5grid="grid1_11"]');
  var $grid1_12 = $('[data-ax5grid="grid1_12"]');
  var $grid1_13 = $('[data-ax5grid="grid1_13"]');
  var $grid1_14 = $('[data-ax5grid="grid1_14"]');
  var $grid1_15 = $('[data-ax5grid="grid1_15"]');
  var $grid1_16 = $('[data-ax5grid="grid1_16"]');
  var $grid1_17 = $('[data-ax5grid="grid1_17"]');
  var $grid1_18 = $('[data-ax5grid="grid1_18"]');
  var $grid1_19 = $('[data-ax5grid="grid1_19"]');
  var $grid1_20 = $('[data-ax5grid="grid1_20"]');
  var $grid1_21 = $('[data-ax5grid="grid1_21"]');
  var $grid1_22 = $('[data-ax5grid="grid1_22"]');
  var $grid1_23 = $('[data-ax5grid="grid1_23"]');
  var $grid1_24 = $('[data-ax5grid="grid1_24"]');
  
  var $grid2 = $('[data-ax5grid="grid2"]');
  var $grid3 = $('[data-ax5grid="grid3"]');
  var $grid4 = $('[data-ax5grid="grid4"]');

  if (
    $grid1.length || $grid1_2.length || $grid1_3.length || $grid1_4.length || $grid1_5.length || $grid1_6.length || $grid1_7.length || $grid1_8.length || $grid1_9.length || $grid1_10.length || $grid1_11.length || $grid1_12.length || $grid1_13.length || $grid1_14.length || $grid1_15.length || $grid1_16.length || $grid1_17.length || $grid1_18.length || $grid1_19.length || $grid1_20.length || $grid1_21.length || $grid1_22.length || $grid1_23.length || $grid1_24.length
  ) {
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
    } else if ($grid1_9.length) {
      new ax5.ui.grid(getOptions($grid1_9, columns1_9)).setData(data1_9);
    } else if ($grid1_10.length) {
      new ax5.ui.grid(getOptions($grid1_10, columns1_10)).setData(data1_10);
    } else if ($grid1_11.length) {
      new ax5.ui.grid(getOptions($grid1_11, columns1_11)).setData(data1_11);
    } else if ($grid1_12.length) {
      new ax5.ui.grid(getOptions($grid1_12, columns1_12)).setData(data1_12);
    } else if ($grid1_13.length) {
      new ax5.ui.grid(getOptions($grid1_13, columns1_13)).setData(data1_13);
    } else if ($grid1_14.length) {
      new ax5.ui.grid(getOptions($grid1_14, columns1_14)).setData(data1_14);
    } else if ($grid1_15.length) {
      new ax5.ui.grid(getOptions($grid1_15, columns1_15)).setData(data1_15);
    } else if ($grid1_16.length) {
      new ax5.ui.grid(getOptions($grid1_16, columns1_16)).setData(data1_16);
    } else if ($grid1_17.length) {
      new ax5.ui.grid(getOptions($grid1_17, columns1_17)).setData(data1_17);
    } else if ($grid1_18.length) {
      new ax5.ui.grid(getOptions($grid1_18, columns1_18)).setData(data1_18);
    } else if ($grid1_19.length) {
      new ax5.ui.grid(getOptions($grid1_19, columns1_19)).setData(data1_19);
    } else if ($grid1_20.length) {
      new ax5.ui.grid(getOptions($grid1_20, columns1_20)).setData(data1_20);
    } else if ($grid1_21.length) {
      new ax5.ui.grid(getOptions($grid1_21, columns1_21)).setData(data1_21);
    } else if ($grid1_22.length) {
      new ax5.ui.grid(getOptions($grid1_22, columns1_22)).setData(data1_22);
    } else if ($grid1_23.length) {
      new ax5.ui.grid(getOptions($grid1_23, columns1_23)).setData(data1_23); // 2024-11
    } else if ($grid1_24.length) {
      new ax5.ui.grid(getOptions($grid1_24, columns1_24)).setData(data1_24); // 2024-11
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
      },
      show: null,
      hide: null
    }).tooltip("open");
  });
  $(document).on("mouseleave", "[data-ax5grid-panel-scroll=body] span", function (e) {
    $(e.target).tooltip("option", "hide", false);
    $(e.target).tooltip("close");
    $(".ui-helper-hidden-accessible").remove();
  })
});