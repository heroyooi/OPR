// http://ax5ui.axisj.com/ax5ui-grid/api/index.html
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
  { isChecked: "N", column1: '41', column2: '돌발상황이 감지되었습니다.', column3: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '41', column2: '돌발상황이 감지되었습니다.', column3: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '41', column2: '돌발상황이 감지되었습니다.', column3: '2024-10-25 14:23:35' },
  { isChecked: "N", column1: '41', column2: '마지막 돌발상황이 감지되었습니다.', column3: '2024-10-25 14:23:35' },
];

var columns1 = [
  {
    key: "isChecked",
    label: `<span class="chk-base chk-only">
      <input type="checkbox" id="chk1-all" />
      <label for="chk1-all">전체 체크박스</label>
    </span>`,
    width: 50,
    sortable: false,
    align: "center",
    // editor: {
    //   type: "checkbox",
    //   config: { height: 17, trueValue: "Y", falseValue: "N" }
    // },
    formatter: function() {
      if (this.item.isChecked === 'Y') {
        return `<span class="chk-base chk-only">
          <input type="checkbox" id="chk1-${this.item.__index}" class="row-checkbox1" checked />
          <label for="chk1-${this.item.__index}">체크박스${this.item.__index}</label>
        </span>`;
      } else {
        return `<span class="chk-base chk-only">
          <input type="checkbox" id="chk1-${this.item.__index}" class="row-checkbox1" />
          <label for="chk1-${this.item.__index}">체크박스${this.item.__index}</label>
        </span>`;
      }
    }
  },
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

var option1 = function($selector) {
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
      columnHeight: 30,
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
}

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
  { column1: '마지막 로우데이터', column2: '로우데이터', column3: '로우 데이터 ', state: '-', column4: '로우 데이터' },
];

var columns2 = [
  {
    key: "isChecked",
    label: `<span class="chk-base chk-only">
      <input type="checkbox" id="chk2-all" />
      <label for="chk2-all">전체 체크박스</label>
    </span>`,
    width: 60,
    sortable: false,
    align: "center",
    // editor: {
    //   type: "checkbox",
    //   config: { height: 17, trueValue: "Y", falseValue: "N" }
    // },
    formatter: function() {
      if (this.item.isChecked === 'Y') {
        return `<span class="chk-base chk-only">
          <input type="checkbox" id="chk2-${this.item.__index}" class="row-checkbox2" checked />
          <label for="chk2-${this.item.__index}">체크박스${this.item.__index}</label>
        </span>`;
      } else {
        return `<span class="chk-base chk-only">
          <input type="checkbox" id="chk2-${this.item.__index}" class="row-checkbox2" />
          <label for="chk2-${this.item.__index}">체크박스${this.item.__index}</label>
        </span>`;
      }
    }
  },
  {
    key: 'column1',
    label: '컬럼명1',
    width: 300,
    align: "center",
    // sortable: true,
  },
  {
    key: 'column2',
    label: '컬럼명2',
    width: 300,
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
    width: 300,
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
    width: 360,
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
    width: 300,
    align: "center",
  },
];

var option2 = function($selector) {
  return {
    target: $selector,
    header: {
      align:'center',
      columnHeight: 30,
    },
    columns: columns2,
    body: {
      columnHeight: 30,
    },
    page: {
      display: false,
    },
  }
}

$(document.body).ready(function() {
  var $grid1 = $('[data-ax5grid="grid1"]');
  var $grid2 = $('[data-ax5grid="grid2"]');

  if ($grid1.length) {
    var generalGrid = new ax5.ui.grid(option1($grid1)).setData(data1);
    // generalGrid.setHeight(174);

    // 전체 체크박스 클릭 이벤트
    $(document).on('click', '#chk1-all', function() {
        var isChecked = $(this).is(':checked');
        $('.row-checkbox1').prop('checked', isChecked);
        if (isChecked) {
          $('.row-checkbox1').closest('tr').addClass('checked');
        } else {
          $('.row-checkbox1').closest('tr').removeClass('checked');
        }
    });

    // 개별 행 체크박스 클릭 이벤트 (선택 상태 관리)
    $(document).on('click', '.row-checkbox1', function() {
        var allChecked = $('.row-checkbox1').length === $('.row-checkbox1:checked').length;
        var isChecked = $(this).is(':checked');
        if (isChecked) {
          $(this).closest('tr').addClass('checked');
        } else {
          $(this).closest('tr').removeClass('checked');
        }
        $('#chk1-all').prop('checked', allChecked);
    });

    $(document).on('click', '#chk2-all', function() {
      var isChecked = $(this).is(':checked');
      $('.row-checkbox2').prop('checked', isChecked);
        if (isChecked) {
          $('.row-checkbox2').closest('tr').addClass('checked');
        } else {
          $('.row-checkbox2').closest('tr').removeClass('checked');
        }
    });

    $(document).on('click', '.row-checkbox2', function() {
        var allChecked = $('.row-checkbox2').length === $('.row-checkbox2:checked').length;
        var isChecked = $(this).is(':checked');
        if (isChecked) {
          $(this).closest('tr').addClass('checked');
        } else {
          $(this).closest('tr').removeClass('checked');
        }
        $('#chk2-all').prop('checked', allChecked);
    });
  }
  
  if ($grid2.length) new ax5.ui.grid(option2($grid2)).setData(data2);
});