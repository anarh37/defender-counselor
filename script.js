// 정적 데이터로 변환된 질문 데이터
const allQuestions = {
  "피해자": [
    [
      "그때 너는 어떤 기분이 들었어? 그때 가장 원했던 것은 뭐야?",
      "그 상황을 떠올렸을 때 지금의 감정은 어때?",
      "너의 감정을 한 단어로 표현하면 뭐야?",
      "감정을 색깔로 표현한다면 무슨 색일까?",
      "그날 이후로 기분이 계속 어땠어?",
      "그 일이 있고 나서 학교 오는 게 어땠어? 학교에 대한 기분이 달라졌어?"
    ],
    [
      "어떤 일이 있었는지 자세히 말해줄 수 있어?",
      "그때 선생님이나 어른들은 그 상황을 알고 있었어?",
      "그 상황이 어떻게 시작됐는지 기억나?",
      "너는 그 상황에서 뭐라고 말했어?",
      "혹시 처음엔 어떻게 느껴졌어?언제부터 심각하다고 느꼈어?",
      "친구들은 그 상황을 어떻게 반응했어?",
      "비슷한 일이 전에도 있었어?"
    ],
    [
      "만약 다시 그 상황으로 돌아간다면 너는 어떻게 하고 싶어?",
      "지금 생각하면 가장 후회되는 건 뭐야?",
      "누군가 네 편에서 이야기해주거나 도와줬으면 어떻게 달라졌을 것 같아?",
      "비슷한 상황에 처한 다른 친구가 있다면, 네 경험을 토대로 어떤 조언이나 위로를 해주고 싶어?"
    ],
    [
      "너에게 상처를 주었던 친구들에게 지금 어떤 말을 하고 싶어?",
      "오늘 상담하면서 어떤 기분이 들었어?"
    ]
  ],
  "방관자": [
    [
      "그 상황에서 마음이 복잡했을 것 같아. 어떤 마음이 들었어?",
      "그 상황에서 '이건 좀 아닌데'라고 느꼈던 순간이 있었어?",
      "처음와 지금의 생각에 어떤 차이가 있는지 말해줄 수 있어?"
    ],
    [
      "그때 친구들에게 말하지 못했던 이유가 있었을까?"
    ],
    [
      "만약 네가 피해자였다면 어땠을 것 같아?",
      "만약 네가 피해자의 입장이었다면, 주변 친구들에게 어떻게 해주기를 기대했을까?",
      "혹시 후회하는 마음이 있다면 말해줄 수 있어?"
    ],
    [
      "다음에 또 그런 상황이 생기면, 어떻게 행동하고 싶어?",
      "누군가 힘들어하는 걸 봤을 때, 어떤 말을 해주면 좋을까?",
      "그 친구의 자리에 네 가장 친한 친구가 있었다면 어떻게 했을 것 같아?",
      "네가 할 수 있는 '작은 방어자 행동'은 뭐가 있을까?",
      "만약 그때와 같은 상황에서 내가 옆에 있어준다면, 같이 말해줄 수 있을까?",
      "지금 그 친구에게 전하고 싶은 말이 있다면 해 줄래?",
      "다른 친구가 비슷한 상황에서 방관자가 되었다면, 어떤 조언을 해주고 싶어?"
    ]
  ],
  "가해자": [
    [
      "왜 그런 행동을 했어? 너의 마음을 말해 줄래?",
      "비슷한 상황에서 다른 친구들은 어떻게 행동했어?",
      "네가 아끼는 사람이 그런 말을 들었다면, 너는 어떻게 반응했을 것 같아?",
      "그 친구 입장에서 '가장 속상했던 순간'은 언제였을까?",
      "그 친구가 지금 너에게 가장 듣고 싶은 말은 무엇일까?",
      "그 일이 있고 나서, 너와 그 친구 사이가 어떻게 달라졌다고 느껴?",
      "그 친구가 네 행동을 기억한다면, 어떤 감정이 가장 오래 남을까?",
      "그 친구가 혼자 있을 때 너의 말을 떠올리며 어떤 생각을 했을 것 같아?",
      "너도 누군가에게 그렇게 상처받은 적이 있었어?"
    ],
    [
      "그 일 이후 그 친구와 어떻게 지내고 있어?",
      "만약 시간을 되돌릴 수 있다면, 어떻게 행동하고 싶어?",
      "그때 네가 했던 말을 바꿔서 다시 해본다면 어떻게 말할 수 있을까?",
      "그 일을 후회한다면, 어떤 부분이 가장 아쉬워?",
      "앞으로 내가 할 수 있는 '작은 실천' 한 가지를 말해줄래?",
      "그 친구의 마음이 나아지도록 지금 할 수 있는 일이 있을까?",
      "네가 지금부터 바꾸고 싶은 나의 모습은 뭐야?",
      "이번 일을 통해 내가 배운 건 뭐야?",
      "이런 일이 다시 생기지 않도록 어떤 노력을 할 수 있을까?",
      "진심으로 사과한다는 건 어떤 행동과 태도를 말하는 걸까?"
    ]
  ],
  "방어자": [
    [
      "다른 친구들이 아무 말도 하지 않을 때, 네가 먼저 나서기로 한 이유는 뭐야?",
      "도움을 주기 전에 어떤 생각들이 머릿속을 스쳐 지나갔어?",
      "그 상황에서 용기를 내기가 쉽지 않았을 텐데, 두려움을 어떻게 극복할 수 있었어?",
      "도움을 주려고 결심한 순간이 언제였어?"
    ],
    [
      "친구를 돕기 위해 행동했을 때, 어떤 마음이 들었어?",
      "네가 용기 냈을 때, 주변 친구들은 어떻게 반응했어?",
      "네가 도움을 주고 난 후, 그 친구와 관계가 어떻게 변했어?",
      "방어자로 행동했던 경험이 너에게 어떤 의미가 있었어?",
      "네 행동이 교실 분위기에 어떤 영향을 미쳤다고 생각해?",
      "도움을 주는 과정에서 배운 가장 중요한 교훈은 뭐야?"
    ],
    [
      "피해 친구를 어떻게 도와주었어? 그 방법을 선택한 이유를 말해줄래?",
      "다른 친구들도 용기를 낼 수 있도록 어떻게 도울 수 있을까?"
    ],
    [
      "다음에도 비슷한 상황이 생긴다면 또 용기낼 수 있을까?",
      "누군가를 도울 때 가장 중요한 것은 무엇이라고 생각해?"
    ]
  ]
};

// 전역 변수 선언
let selectedRole = '';
// 각 역할별로 선택된 질문을 저장하는 객체
let roleSelectedQuestions = {
  "피해자": [],
  "방관자": [],
  "가해자": [],
  "방어자": []
};

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
  console.log('페이지 로드됨, 질문 데이터:', allQuestions);

  if (!allQuestions || Object.keys(allQuestions).length === 0) {
    showNotification('질문 데이터를 불러올 수 없습니다. 페이지를 새로고침 해보세요.', true);
  }

  // 역할 선택 이벤트 등록
  document.querySelectorAll('.role-card').forEach(card => {
    card.addEventListener('click', function() {
      selectRole(this.getAttribute('data-role'));
    });
  });

  // 버튼 이벤트 리스너 등록
  document.getElementById('saveBtn').addEventListener('click', saveSelectedQuestions);
  document.getElementById('loadBtn').addEventListener('click', loadSavedQuestions);
  document.getElementById('printBtn').addEventListener('click', prepareAndPrint);
  document.getElementById('pdfBtn').addEventListener('click', generatePDF);

  // 질문 그룹 헤더 제거
  function removeQuestionGroupHeaders() {
    // 모든 '질문 그룹' 관련 요소 삭제
    document.querySelectorAll('[id^="질문 그룹"], [class^="질문 그룹"]').forEach(el => {
      el.remove();
    });
    
    // '질문 그룹' 텍스트를 포함하는 요소 찾아서 삭제
    document.querySelectorAll('div').forEach(el => {
      if (el.textContent && (el.textContent.includes('질문 그룹') || el.textContent.includes('질문그룹'))) {
        if (el.textContent.trim() === '질문 그룹 1' || el.textContent.trim() === '질문 그룹 2' || 
            el.textContent.trim() === '질문그룹 1' || el.textContent.trim() === '질문그룹 2') {
          el.remove();
        }
      }
    });
  }
  
  // 저장된 데이터가 있는지 확인하고 불러오기
  loadSavedQuestions(false); // 알림 표시하지 않음
  
  // 질문 그룹 헤더 제거 실행
  removeQuestionGroupHeaders();
});

// 역할 선택 함수
function selectRole(role) {
  console.log('역할 선택:', role);

  document.querySelectorAll('.role-card').forEach(card => {
    card.classList.remove('selected');
  });

  document.querySelector(`.role-card[data-role="${role}"]`).classList.add('selected');
  selectedRole = role;

  displayQuestions(role);

  document.getElementById('help-text').style.display = 'none';
  document.getElementById('questions-container').style.display = 'block';
  document.getElementById('role-title').textContent = `${role} 역할의 질문 목록`;

  updateSelectedQuestionsUI();
  
  // 역할 선택 후 질문 그룹 헤더 제거
  document.querySelectorAll('[id^="질문 그룹"], [class^="질문 그룹"]').forEach(el => {
    el.remove();
  });
}

// 질문 표시 함수 - 수정된 버전
function displayQuestions(role) {
  console.log('질문 표시 함수 호출됨:', role);

  const questionsData = allQuestions[role];
  if (!questionsData || !Array.isArray(questionsData)) {
    showNotification('선택한 역할에 대한 질문이 없습니다.', true);
    return;
  }
  console.log('역할에 맞는 질문 데이터:', questionsData);

  const questionsList = document.getElementById('questions-list');
  questionsList.innerHTML = '';

  let allQuestionsArray = [];

  // 모든 카테고리의 질문들을 추가
  for (let categoryIndex = 0; categoryIndex < questionsData.length; categoryIndex++) {
    const categoryQuestions = questionsData[categoryIndex];
    
    // 각 질문 항목 생성 - 카테고리 헤더 없이 직접 질문 추가
    for (let i = 0; i < categoryQuestions.length; i++) {
      const question = categoryQuestions[i];
      allQuestionsArray.push(question);

      const questionItem = document.createElement('div');
      questionItem.className = 'question-item';
      questionItem.textContent = question;
      questionItem.dataset.question = question; // 데이터 속성 설정
      
      // 이미 선택된 질문인지 확인
      if (roleSelectedQuestions[role] && roleSelectedQuestions[role].includes(question)) {
        questionItem.classList.add('selected');
      }

      // 이벤트 리스너 추가 - 수정된 부분: stopPropagation 추가
      questionItem.addEventListener('click', function(e) {
        e.stopPropagation(); // 이벤트 버블링 방지
        toggleQuestionSelection(this);
      });
      
      questionsList.appendChild(questionItem);
    }
  }

  console.log('모든 질문:', allQuestionsArray);

  if (allQuestionsArray.length === 0) {
    const noQuestions = document.createElement('div');
    noQuestions.className = 'question-item';
    noQuestions.textContent = '이 역할에 대한 질문이 없습니다.';
    questionsList.appendChild(noQuestions);
  }
  
  // 질문 그룹 헤더 요소 제거
  document.querySelectorAll('[id^="질문 그룹"], [class^="질문 그룹"]').forEach(el => {
    el.remove();
  });
}

// 질문 선택 토글 함수 - 수정된 버전
function toggleQuestionSelection(questionElement) {
  // 디버깅을 위한 로그 추가
  console.log('toggleQuestionSelection 호출됨', questionElement);
  
  const question = questionElement.dataset.question;
  console.log('선택된 질문:', question);

  if (!roleSelectedQuestions[selectedRole]) {
    roleSelectedQuestions[selectedRole] = [];
  }

  // classList.toggle 사용으로 단순화
  const isSelected = questionElement.classList.toggle('selected');
  console.log('선택 상태 변경:', isSelected);
  
  if (isSelected) {
    // 선택된 상태로 변경
    if (!roleSelectedQuestions[selectedRole].includes(question)) {
      roleSelectedQuestions[selectedRole].push(question);
      console.log('질문 추가됨:', question);
    }
  } else {
    // 선택 해제된 상태로 변경
    const index = roleSelectedQuestions[selectedRole].indexOf(question);
    if (index > -1) {
      roleSelectedQuestions[selectedRole].splice(index, 1);
      console.log('질문 제거됨:', question);
    }
  }
  
  // UI 업데이트
  updateSelectedQuestionsUI();
  
  // 디버깅: 현재 선택된 질문 목록 출력
  console.log('현재 선택된 질문들:', roleSelectedQuestions[selectedRole]);
}

// 선택된 질문 UI 업데이트 - 디버깅 로그 추가
function updateSelectedQuestionsUI() {
  const selectedList = document.getElementById('selected-question-list');
  const selectedCount = document.getElementById('selected-count');
  const currentRoleQuestions = roleSelectedQuestions[selectedRole] || [];

  console.log('updateSelectedQuestionsUI 호출됨, 선택된 질문 수:', currentRoleQuestions.length);
  
  selectedCount.textContent = currentRoleQuestions.length;
  selectedList.innerHTML = '';

  if (currentRoleQuestions.length === 0) {
    const emptyMessage = document.createElement('div');
    emptyMessage.style.padding = '10px';
    emptyMessage.style.color = '#666';
    emptyMessage.textContent = '선택된 질문이 없습니다. 왼쪽에서 질문을 선택해주세요.';
    selectedList.appendChild(emptyMessage);
  } else {
    currentRoleQuestions.forEach(question => {
      const selectedItem = document.createElement('div');
      selectedItem.className = 'selected-item';

      const removeIcon = document.createElement('i');
      removeIcon.className = 'material-icons';
      removeIcon.textContent = 'close';
      removeIcon.addEventListener('click', function(e) {
        e.stopPropagation(); // 이벤트 버블링 방지
        removeSelectedQuestion(question);
      });

      const questionText = document.createElement('span');
      questionText.textContent = question;

      selectedItem.appendChild(removeIcon);
      selectedItem.appendChild(questionText);
      selectedList.appendChild(selectedItem);
    });
  }
}

// 선택된 질문 제거
function removeSelectedQuestion(question) {
  if (roleSelectedQuestions[selectedRole]) {
    const index = roleSelectedQuestions[selectedRole].indexOf(question);
    if (index > -1) {
      roleSelectedQuestions[selectedRole].splice(index, 1);
    }
  }

  const questionItems = document.querySelectorAll('.question-item');
  questionItems.forEach(item => {
    if (item.dataset.question === question) {
      item.classList.remove('selected');
    }
  });
  updateSelectedQuestionsUI();
}

function showNotification(message, isError = false) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.style.backgroundColor = isError ? '#F44336' : '#323232';
  notification.style.display = 'block';

  setTimeout(() => {
    notification.style.display = 'none';
  }, 3000);
}

// 선택된 질문 저장 함수 (localStorage 사용)
function saveSelectedQuestions() {
  try {
    localStorage.setItem('roleSelectedQuestions', JSON.stringify(roleSelectedQuestions));
    localStorage.setItem('lastSelectedRole', selectedRole);
    showNotification('질문이 저장되었습니다!');
    return true;
  } catch(error) {
    console.error('저장 오류:', error);
    showNotification('저장 중 오류가 발생했습니다: ' + error.message, true);
    return false;
  }
}

// 저장된 질문 불러오기
function loadSavedQuestions(showAlert = true) {
  try {
    const savedQuestions = localStorage.getItem('roleSelectedQuestions');
    const savedRole = localStorage.getItem('lastSelectedRole');

    if (savedQuestions) {
      roleSelectedQuestions = JSON.parse(savedQuestions);

      if (showAlert) {
        showNotification('저장된 질문을 불러왔습니다.');
      }

      if (savedRole && allQuestions[savedRole]) {
        selectRole(savedRole);
      }
      return true;
    } else {
      if (showAlert) {
        // showNotification('저장된 질문이 없습니다.', true);
      }
      return false;
    }
  } catch(error) {
    console.error('불러오기 오류:', error);
    if (showAlert) {
      showNotification('불러오기 중 오류가 발생했습니다: ' + error.message, true);
    }
    return false;
  }
}

// 인쇄 준비 및 실행 함수
function prepareAndPrint() {
  if (!selectedRole) {
    showNotification('먼저 역할을 선택해주세요.', true);
    return;
  }

  const mainCard = document.querySelector('.main-card');
  const originalContent = mainCard.innerHTML;

  mainCard.innerHTML = generatePrintContent();
  window.print();

  setTimeout(() => {
    mainCard.innerHTML = originalContent;

    document.querySelectorAll('.role-card').forEach(card => {
      card.addEventListener('click', function() {
        selectRole(this.getAttribute('data-role'));
      });
    });

    document.getElementById('saveBtn').addEventListener('click', saveSelectedQuestions);
    document.getElementById('loadBtn').addEventListener('click', loadSavedQuestions);
    document.getElementById('printBtn').addEventListener('click', prepareAndPrint);
    document.getElementById('pdfBtn').addEventListener('click', generatePDF);

    if (selectedRole) {
      const roleCard = document.querySelector(`.role-card[data-role="${selectedRole}"]`);
      if (roleCard) roleCard.classList.add('selected');

      document.getElementById('questions-container').style.display = 'block';
      document.getElementById('help-text').style.display = 'none';
      document.getElementById('role-title').textContent = `${selectedRole} 역할의 질문 목록`;
      updateSelectedQuestionsUI();
      displayQuestions(selectedRole);
    }
  }, 500);
}

// 인쇄용 HTML 생성
function generatePrintContent() {
  if (!selectedRole) {
    return '<p>선택된 역할이 없습니다.</p>';
  }

  let content = `
    <div class="print-header" style="font-family: 'Noto Sans KR', sans-serif; padding: 20px;">
      <h1 style="font-size: 24px; color: #3f51b5; margin-bottom: 20px;">${selectedRole} 역할을 위한 인터뷰 질문</h1>
      <p style="font-size: 14px; margin-bottom: 20px;">생성 날짜: ${new Date().toLocaleDateString()}</p>
    </div>
  `;

  const questions = roleSelectedQuestions[selectedRole] || [];
  if (questions.length === 0) {
    content += '<p style="font-family: \'Noto Sans KR\', sans-serif; padding-left: 20px;">선택된 질문이 없습니다.</p>';
  } else {
    content += '<ul class="print-questions" style="font-family: \'Noto Sans KR\', sans-serif; padding-left: 40px; list-style-type: disc;">';
    questions.forEach(question => {
      content += `<li style="font-size: 16px; margin-bottom: 10px;">${question}</li>`;
    });
    content += '</ul>';
  }
  return content;
}
// PDF 생성 함수를 텍스트 기반으로 변경 (pdfMake 사용)
function generatePDF() {
  showNotification('모든 역할의 선택된 질문이 포함된 PDF를 생성 중입니다... 잠시 기다려주세요.');

  try {
    // PDF 문서 정의
    const docDefinition = createPDFDocDefinition();

    // PDF 생성 및 다운로드
    pdfMake.fonts = {
      NotoSans: {
        normal: 'https://cdn.jsdelivr.net/gh/notofonts/noto-cjk@main/Sans/OTF/Korean/NotoSansCJKkr-Regular.otf',
        bold: 'https://cdn.jsdelivr.net/gh/notofonts/noto-cjk@main/Sans/OTF/Korean/NotoSansCJKkr-Bold.otf'
      }
    };

    pdfMake.createPdf(docDefinition).download(`방어자상담소_인터뷰_질문_모음_${new Date().toISOString().slice(0,10)}.pdf`);
    showNotification('PDF 파일이 생성되었습니다.');
  } catch (error) {
    console.error('PDF 생성 오류:', error);
    showNotification('PDF 생성 중 오류가 발생했습니다: ' + error.message, true);
  }
}

// PDF 문서 정의 생성 함수 - 페이지 나눔 제거 버전
function createPDFDocDefinition() {
  const today = new Date().toLocaleDateString();
  const roles = ["피해자", "방관자", "가해자", "방어자"];
  
  // 역할별 색상 정의
  const roleColors = {
    "피해자": "#F44336",
    "방관자": "#FF9800",
    "가해자": "#673AB7",
    "방어자": "#4CAF50"
  };
  
  // 기본 폰트 설정
  const defaultStyle = {
    font: 'NotoSans',
    fontSize: 12
  };
  
  // 문서 내용 정의
  const content = [];
  
  // 제목 추가
  content.push({
    text: '방어자 상담소 인터뷰 질문 모음',
    style: 'header',
    alignment: 'center',
    margin: [0, 0, 0, 10]
  });
  
  // 날짜 추가
  content.push({
    text: `생성 날짜: ${today}`,
    alignment: 'center',
    margin: [0, 0, 0, 20],
    fontSize: 10
  });
  
  // 각 역할별 질문 추가
  let anyQuestionsSelected = false;
  
  for (const role of roles) {
    const questions = roleSelectedQuestions[role] || [];
    
    // 역할 섹션 제목 - pageBreak 속성 제거
    content.push({
      text: `${role} 역할의 질문`,
      style: 'roleHeader',
      color: roleColors[role],
      // pageBreak 속성 제거됨
      margin: [0, 15, 0, 5] // 여백 추가로 구분감 유지
    });
    
    // 구분선 추가
    content.push({
      canvas: [{
        type: 'line',
        x1: 0, y1: 5,
        x2: 520, y2: 5,
        lineWidth: 1,
        lineColor: roleColors[role]
      }],
      margin: [0, 0, 0, 10]
    });
    
    if (questions.length === 0) {
      content.push({
        text: '선택된 질문이 없습니다.',
        fontSize: 12,
        color: '#666666',
        margin: [5, 0, 0, 15]
      });
    } else {
      anyQuestionsSelected = true;
      
      // 질문 목록 추가
      const questionItems = [];
      questions.forEach(question => {
        questionItems.push({
          text: question,
          margin: [0, 0, 0, 6]
        });
      });
      
      content.push({
        ul: questionItems,
        margin: [0, 10, 0, 15]
      });
    }
  }
  
  // 질문이 하나도 없을 경우
  if (!anyQuestionsSelected) {
    content.length = 3; // 제목과 날짜만 유지
    content.push({
      text: '선택된 질문이 없습니다. 질문을 선택한 후 다시 시도해주세요.',
      alignment: 'center',
      fontSize: 14,
      color: '#666666',
      margin: [0, 50, 0, 0]
    });
  }
  
  // 문서 정의 반환
  return {
    content: content,
    defaultStyle: defaultStyle,
    styles: {
      header: {
        fontSize: 20,
        bold: true,
        color: '#3f51b5',
        margin: [0, 20, 0, 10]
      },
      roleHeader: {
        fontSize: 16,
        bold: true,
        margin: [0, 15, 0, 5]
      }
    },
    pageMargins: [40, 40, 40, 40]
  };
}

// PDF 생성 함수는 동일하게 유지
function generatePDF() {
  showNotification('모든 역할의 선택된 질문이 포함된 PDF를 생성 중입니다... 잠시 기다려주세요.');

  try {
    // PDF 문서 정의
    const docDefinition = createPDFDocDefinition();

    // PDF 생성 및 다운로드
    pdfMake.fonts = {
      NotoSans: {
        normal: 'https://cdn.jsdelivr.net/gh/notofonts/noto-cjk@main/Sans/OTF/Korean/NotoSansCJKkr-Regular.otf',
        bold: 'https://cdn.jsdelivr.net/gh/notofonts/noto-cjk@main/Sans/OTF/Korean/NotoSansCJKkr-Bold.otf'
      }
    };

    pdfMake.createPdf(docDefinition).download(`방어자상담소_인터뷰_질문_모음_${new Date().toISOString().slice(0,10)}.pdf`);
    showNotification('PDF 파일이 생성되었습니다.');
  } catch (error) {
    console.error('PDF 생성 오류:', error);
    showNotification('PDF 생성 중 오류가 발생했습니다: ' + error.message, true);
  }
}
