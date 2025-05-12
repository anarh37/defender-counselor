// 정적 데이터로 변환된 질문 데이터
const allQuestions = {
  "피해자": {
    "감정을 묻는 질문 (정서 인식)": [
      "그때 너는 어떤 기분이 들었어? 그때 가장 원했던 것은 뭐야?",
      "그 상황을 떠올렸을 때 지금의 감정은 어때?",
      "너의 감정을 한 단어로 표현하면 뭐야?",
      "감정을 색깔로 표현한다면 무슨 색일까?",
      "그날 이후로 기분이 계속 어땠어?",
      "그 일이 있고 나서 학교 오는 게 어땠어? 학교에 대한 기분이 달라졌어?"
    ],
    "사건 상황을 묻는 질문 (경청 중심)": [
      "어떤 일이 있었는지 자세히 말해줄 수 있어?",
      "그때 선생님이나 어른들은 그 상황을 알고 있었어?",
      "그 상황이 어떻게 시작됐는지 기억나?",
      "너는 그 상황에서 뭐라고 말했어?",
      "혹시 처음엔 어떻게 느껴졌어?언제부터 심각하다고 느꼈어?",
      "친구들은 그 상황을 어떻게 반응했어?",
      "비슷한 일이 전에도 있었어?"
    ],
    "행동을 되돌아보는 질문 (책임 인식)": [
      "만약 다시 그 상황으로 돌아간다면 너는 어떻게 하고 싶어?",
      "지금 생각하면 가장 후회되는 건 뭐야?",
      "누군가 네 편에서 이야기해주거나 도와줬으면 어떻게 달라졌을 것 같아?",
      "비슷한 상황에 처한 다른 친구가 있다면, 네 경험을 토대로 어떤 조언이나 위로를 해주고 싶어?"
    ],
    "해결과 회복 중심 질문 (관계 회복, 실천)": [
      "너에게 상처를 주었던 친구들에게 지금 어떤 말을 하고 싶어?",
      "오늘 상담하면서 어떤 기분이 들었어?"
    ]
  },
  "방관자": {
    "정서 인식": [
      "그 상황에서 마음이 복잡했을 것 같아. 어떤 마음이 들었어?",
      "그 상황에서 '이건 좀 아닌데'라고 느꼈던 순간이 있었어?",
      "처음와 지금의 생각에 어떤 차이가 있는지 말해줄 수 있어?"
    ],
    "행동 이유 탐색": [
      "그때 친구들에게 말하지 못했던 이유가 있었을까?"
    ],
    "공감 촉진": [
      "만약 네가 피해자였다면 어땠을 것 같아?",
      "만약 네가 피해자의 입장이었다면, 주변 친구들에게 어떻게 해주기를 기대했을까?",
      "혹시 후회하는 마음이 있다면 말해줄 수 있어?"
    ],
    "책임 있는 행동 유도": [
      "다음에 또 그런 상황이 생기면, 어떻게 행동하고 싶어?",
      "누군가 힘들어하는 걸 봤을 때, 어떤 말을 해주면 좋을까?",
      "그 친구의 자리에 네 가장 친한 친구가 있었다면 어떻게 했을 것 같아?",
      "네가 할 수 있는 '작은 방어자 행동'은 뭐가 있을까?",
      "만약 그때와 같은 상황에서 내가 옆에 있어준다면, 같이 말해줄 수 있을까?",
      "지금 그 친구에게 전하고 싶은 말이 있다면 해 줄래?",
      "다른 친구가 비슷한 상황에서 방관자가 되었다면, 어떤 조언을 해주고 싶어?"
    ]
  },
  "가해자": {
    "공감 확장 질문": [
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
    "회복적 실천 유도 질문": [
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
  },
  "방어자": {
    "방어자의 동기": [
      "다른 친구들이 아무 말도 하지 않을 때, 네가 먼저 나서기로 한 이유는 뭐야?",
      "도움을 주기 전에 어떤 생각들이 머릿속을 스쳐 지나갔어?",
      "그 상황에서 용기를 내기가 쉽지 않았을 텐데, 두려움을 어떻게 극복할 수 있었어?",
      "도움을 주려고 결심한 순간이 언제였어?"
    ],
    "방어자의 경험": [
      "친구를 돕기 위해 행동했을 때, 어떤 마음이 들었어?",
      "네가 용기 냈을 때, 주변 친구들은 어떻게 반응했어?",
      "네가 도움을 주고 난 후, 그 친구와 관계가 어떻게 변했어?",
      "방어자로 행동했던 경험이 너에게 어떤 의미가 있었어?",
      "네 행동이 교실 분위기에 어떤 영향을 미쳤다고 생각해?",
      "도움을 주는 과정에서 배운 가장 중요한 교훈은 뭐야?"
    ],
    "방어자의 영향력": [
      "피해 친구를 어떻게 도와주었어? 그 방법을 선택한 이유를 말해줄래?",
      "다른 친구들도 용기를 낼 수 있도록 어떻게 도울 수 있을까?"
    ],
    "미래 행동": [
      "다음에도 비슷한 상황이 생긴다면 또 용기낼 수 있을까?",
      "누군가를 도울 때 가장 중요한 것은 무엇이라고 생각해?"
    ]
  }
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
  document.getElementById('exportBtn').addEventListener('click', exportQuestionsAsJSON);
  document.getElementById('printBtn').addEventListener('click', prepareAndPrint);
  document.getElementById('pdfBtn').addEventListener('click', generatePDF);
  
  // 저장된 데이터가 있는지 확인하고 불러오기
  loadSavedQuestions(false); // 알림 표시하지 않음
});

// 역할 선택 함수
function selectRole(role) {
  console.log('역할 선택:', role);
  
  // 이전 선택 초기화 (UI만 초기화)
  document.querySelectorAll('.role-card').forEach(card => {
    card.classList.remove('selected');
  });
  
  // 새 역할 선택
  document.querySelector(`.role-card[data-role="${role}"]`).classList.add('selected');
  selectedRole = role;
  
  // 역할에 맞는 질문 표시
  displayQuestions(role);
  
  // 도움말 텍스트 숨기기
  document.getElementById('help-text').style.display = 'none';
  
  // 질문 컨테이너 표시
  document.getElementById('questions-container').style.display = 'block';
  document.getElementById('role-title').textContent = `${role} 역할의 질문 목록`;
  
  // 선택된 질문 UI 업데이트
  updateSelectedQuestionsUI();
}

// 질문 표시 함수
function displayQuestions(role) {
  console.log('질문 표시 함수 호출됨:', role);
  
  const questionsData = allQuestions[role];
  if (!questionsData) {
    showNotification('선택한 역할에 대한 질문이 없습니다.', true);
    return;
  }
  
  console.log('역할에 맞는 질문 데이터:', questionsData);
  
  // 질문 목록 생성
  const questionsList = document.getElementById('questions-list');
  questionsList.innerHTML = '';
  
  // 카테고리별 모든 질문을 하나의 목록으로 표시
  let allQuestionsArray = [];
  
  Object.keys(questionsData).forEach(category => {
    if (Array.isArray(questionsData[category])) {
      const categoryHeader = document.createElement('div');
      categoryHeader.className = 'category-header';
      categoryHeader.textContent = category;
      questionsList.appendChild(categoryHeader);
      
      questionsData[category].forEach(question => {
        allQuestionsArray.push(question);
        
        const questionItem = document.createElement('div');
        questionItem.className = 'question-item';
        questionItem.textContent = question;
        questionItem.dataset.question = question;
        questionItem.dataset.category = category;
        
        // 이미 선택된 질문이면 선택 상태로 표시
        if (roleSelectedQuestions[role].includes(question)) {
          questionItem.classList.add('selected');
        }
        
        // 질문 클릭 이벤트
        questionItem.addEventListener('click', function() {
          toggleQuestionSelection(this);
        });
        
        questionsList.appendChild(questionItem);
      });
    }
  });
  
  console.log('모든 질문:', allQuestionsArray);
  
  // 질문이 없는 경우 메시지 표시
  if (allQuestionsArray.length === 0) {
    const noQuestions = document.createElement('div');
    noQuestions.className = 'question-item';
    noQuestions.textContent = '이 역할에 대한 질문이 없습니다.';
    questionsList.appendChild(noQuestions);
  }
}

// 질문 선택 토글 함수
function toggleQuestionSelection(questionElement) {
  const question = questionElement.dataset.question;
  
  if (questionElement.classList.contains('selected')) {
    // 이미 선택된 경우 -> 선택 해제
    questionElement.classList.remove('selected');
    const index = roleSelectedQuestions[selectedRole].indexOf(question);
    if (index > -1) {
      roleSelectedQuestions[selectedRole].splice(index, 1);
    }
  } else {
    // 선택되지 않은 경우 -> 선택
    questionElement.classList.add('selected');
    if (!roleSelectedQuestions[selectedRole].includes(question)) {
      roleSelectedQuestions[selectedRole].push(question);
    }
  }
  
  // 선택된 질문 UI 업데이트
  updateSelectedQuestionsUI();
}

// 선택된 질문 UI 업데이트
function updateSelectedQuestionsUI() {
  const selectedList = document.getElementById('selected-question-list');
  const selectedCount = document.getElementById('selected-count');
  const currentRoleQuestions = roleSelectedQuestions[selectedRole];
  
  // 선택된 질문 개수 업데이트
  selectedCount.textContent = currentRoleQuestions.length;
  
  // 선택된 질문 목록 업데이트
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
      removeIcon.addEventListener('click', function() {
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
  // 선택된 질문 배열에서 제거
  const index = roleSelectedQuestions[selectedRole].indexOf(question);
  if (index > -1) {
    roleSelectedQuestions[selectedRole].splice(index, 1);
  }
  
  // 원래 질문 목록의 선택 상태도 업데이트
  const questionItems = document.querySelectorAll('.question-item');
  questionItems.forEach(item => {
    if (item.dataset.question === question) {
      item.classList.remove('selected');
    }
  });
  
  // UI 업데이트
  updateSelectedQuestionsUI();
}

// 알림 표시
function showNotification(message, isError = false) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.style.backgroundColor = isError ? '#F44336' : '#323232';
  notification.style
