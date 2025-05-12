// 정적 데이터로 변환된 질문 데이터
const allQuestions = {
  "피해자": {
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
  },
  "방관자": {
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
  },
  "가해자": {
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
  },
  "방어자": {
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
  // document.getElementById('exportBtn').addEventListener('click', exportQuestionsAsJSON); // JSON 내보내기 삭제
  document.getElementById('printBtn').addEventListener('click', prepareAndPrint);
  document.getElementById('pdfBtn').addEventListener('click', generatePDF);

  // 저장된 데이터가 있는지 확인하고 불러오기
  loadSavedQuestions(false); // 알림 표시하지 않음
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

  const questionsList = document.getElementById('questions-list');
  questionsList.innerHTML = '';

  let allQuestionsArray = [];

  Object.keys(questionsData).forEach(categoryIndex => { // category 를 categoryIndex로 변경하여 명확성 증대
    if (Array.isArray(questionsData[categoryIndex])) {
      // 카테고리 헤더를 원하시면 여기에 추가할 수 있습니다. 예:
      // const categoryHeader = document.createElement('div');
      // categoryHeader.className = 'category-header';
      // categoryHeader.textContent = `질문 그룹 ${parseInt(categoryIndex) + 1}`;
      // questionsList.appendChild(categoryHeader);

      questionsData[categoryIndex].forEach(question => {
        allQuestionsArray.push(question);

        const questionItem = document.createElement('div');
        questionItem.className = 'question-item';
        questionItem.textContent = question;
        questionItem.dataset.question = question;
        // questionItem.dataset.category = categoryIndex; // 카테고리 정보가 필요하다면 사용

        if (roleSelectedQuestions[role] && roleSelectedQuestions[role].includes(question)) {
          questionItem.classList.add('selected');
        }

        questionItem.addEventListener('click', function() {
          toggleQuestionSelection(this);
        });
        questionsList.appendChild(questionItem);
      });
    }
  });

  console.log('모든 질문:', allQuestionsArray);

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

  if (!roleSelectedQuestions[selectedRole]) { // 혹시 해당 역할의 배열이 초기화되지 않았다면
      roleSelectedQuestions[selectedRole] = [];
  }

  if (questionElement.classList.contains('selected')) {
    questionElement.classList.remove('selected');
    const index = roleSelectedQuestions[selectedRole].indexOf(question);
    if (index > -1) {
      roleSelectedQuestions[selectedRole].splice(index, 1);
    }
  } else {
    questionElement.classList.add('selected');
    if (!roleSelectedQuestions[selectedRole].includes(question)) {
      roleSelectedQuestions[selectedRole].push(question);
    }
  }
  updateSelectedQuestionsUI();
}

// 선택된 질문 UI 업데이트
function updateSelectedQuestionsUI() {
  const selectedList = document.getElementById('selected-question-list');
  const selectedCount = document.getElementById('selected-count');
  const currentRoleQuestions = roleSelectedQuestions[selectedRole] || []; // 현재 역할의 질문이 없으면 빈 배열

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
  notification.style.backgroundColor = isError ? '#F44336' : '#323232'; // Red for error, dark grey for info
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

      if (savedRole && allQuestions[savedRole]) { // 저장된 역할이 유효한 경우에만 선택
        selectRole(savedRole);
      } else if (Object.keys(allQuestions).length > 0) {
        // 저장된 역할이 없거나 유효하지 않으면, 첫 번째 역할을 기본으로 선택 (선택사항)
        // selectRole(Object.keys(allQuestions)[0]);
      }
      return true;
    } else {
      if (showAlert) {
        // showNotification('저장된 질문이 없습니다.', true); // 초기 로드 시에는 알림 불필요
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

// JSON으로 내보내기 기능 삭제됨
// function exportQuestionsAsJSON() { ... }

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
    // document.getElementById('exportBtn').addEventListener('click', exportQuestionsAsJSON); // 삭제됨
    document.getElementById('printBtn').addEventListener('click', prepareAndPrint);
    document.getElementById('pdfBtn').addEventListener('click', generatePDF);

    if (selectedRole) {
      const roleCard = document.querySelector(`.role-card[data-role="${selectedRole}"]`);
      if (roleCard) roleCard.classList.add('selected');

      document.getElementById('questions-container').style.display = 'block';
      document.getElementById('help-text').style.display = 'none';
      document.getElementById('role-title').textContent = `${selectedRole} 역할의 질문 목록`;
      updateSelectedQuestionsUI(); // UI 복원 후 선택된 질문 목록 다시 표시
      displayQuestions(selectedRole); // 질문 목록도 다시 표시하여 선택 상태 반영
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


// PDF 생성 함수 (HTML2Canvas와 jsPDF 사용) - 한글 폰트 처리 개선
async function generatePDF() {
  if (!selectedRole) {
    showNotification('먼저 역할을 선택해주세요.', true);
    return;
  }

  showNotification('PDF 생성 중입니다... 잠시 기다려주세요.');

  try {
    // Noto Sans KR 폰트가 로드될 때까지 기다립니다.
    await document.fonts.ready;

    const tempContainer = document.createElement('div');
    // PDF 렌더링을 위한 스타일 설정
    tempContainer.style.position = 'absolute';
    tempContainer.style.left = '-9999px'; // 화면에 보이지 않도록 처리
    tempContainer.style.top = '0';
    tempContainer.style.width = '800px'; // A4 비율과 유사한 너비로 설정 (조정 가능)
    tempContainer.style.padding = '20px';
    tempContainer.style.backgroundColor = 'white'; // 배경색 지정 (캔버스에 영향)
    tempContainer.style.fontFamily = "'Noto Sans KR', sans-serif"; // 핵심: 폰트 지정
    tempContainer.style.fontSize = "16px"; // 기본 폰트 크기
    tempContainer.style.lineHeight = "1.6"; // 줄 간격

    // PDF에 포함될 HTML 내용 생성 (generateQuestionsHTMLForPDF 함수 사용)
    tempContainer.innerHTML = generateQuestionsHTMLForPDF();
    document.body.appendChild(tempContainer);

    // html2canvas 옵션 설정
    const canvas = await html2canvas(tempContainer, {
      scale: 2, // 고해상도 캡처
      useCORS: true, // CORS 이미지 허용
      logging: false, // 디버깅 로그 비활성화
      backgroundColor: '#ffffff', // 명시적으로 배경색 지정
      onclone: (clonedDoc) => {
        // 복제된 문서에 스타일을 한 번 더 적용하여 안정성 확보
        const contentRoot = clonedDoc.querySelector('div'); // 가장 바깥쪽 div
        if (contentRoot) {
            contentRoot.style.fontFamily = "'Noto Sans KR', sans-serif";
        }
      }
    });

    document.body.removeChild(tempContainer); // 임시 컨테이너 제거

    const imgData = canvas.toDataURL('image/png');
    const { jsPDF } = window.jspdf; // window.jspdf에서 jsPDF 객체 가져오기
    const pdf = new jsPDF('p', 'mm', 'a4'); // A4 용지, 세로 방향

    const imgWidth = 210; // A4 너비 (mm)
    const pageHeight = 297; // A4 높이 (mm)
    const imgHeight = canvas.height * imgWidth / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight; // 음수 값으로 다음 페이지의 이미지 시작점 설정
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(`${selectedRole}_인터뷰_질문_${new Date().toISOString().slice(0,10)}.pdf`);
    showNotification('PDF 파일이 생성되었습니다.');

  } catch (error) {
    console.error('PDF 생성 오류:', error);
    showNotification('PDF 생성 중 오류가 발생했습니다: ' + error.message, true);
    // 오류 발생 시 임시 컨테이너가 남아있을 수 있으므로 한 번 더 확인 후 제거
    const strayContainer = document.querySelector('div[style*="left: -9999px"]');
    if (strayContainer) {
        document.body.removeChild(strayContainer);
    }
  }
}

// PDF 생성용 HTML을 별도로 생성하는 함수 (스타일 일관성 유지)
function generateQuestionsHTMLForPDF() {
  const questions = roleSelectedQuestions[selectedRole] || [];
  const today = new Date().toLocaleDateString();

  let html = `<div style="font-family: 'Noto Sans KR', sans-serif;">`; // 전체 컨테이너에 폰트 적용
  html += `<h1 style="color: #3f51b5; font-size: 24px; margin-bottom: 20px; font-weight: 700;">${selectedRole} 역할을 위한 인터뷰 질문</h1>`;
  html += `<p style="font-size: 14px; margin-bottom: 20px;">생성 날짜: ${today}</p>`;

  if (questions.length === 0) {
    html += '<p style="font-size: 16px; color: #666;">선택된 질문이 없습니다.</p>';
  } else {
    html += '<ul style="padding-left: 20px; list-style-type: disc; margin-top: 20px;">';
    questions.forEach((question) => {
      html += `<li style="margin-bottom: 10px; font-size: 16px;">${question}</li>`;
    });
    html += '</ul>';
  }
  html += '</div>';
  return html;
}
