// Student Diagnostic Assessment Data Module
// Includes 140 Combined Questions + 2-Step Stage Question Banks + Reports Database

// Student Diagnostic Assessment Data Module
// Exact Verbatim One-Line Summary with Preserved Blank Lines & Colors

const QUESTIONS = [
  {
    "id": 1,
    "text": "문제를 풀기 전에 전체 구조를 먼저 떠올린다.",
    "mainCategory": "안정형",
    "subCategory": "구조·패턴 고정형"
  },
  {
    "id": 2,
    "text": "정리된 틀이나 패턴이 있어야 공부가 편하다.",
    "mainCategory": "안정형",
    "subCategory": "구조·패턴 고정형"
  },
  {
    "id": 3,
    "text": "새로운 문제를 보면 기존 문제 유형과 연결해 본다.",
    "mainCategory": "안정형",
    "subCategory": "구조·패턴 고정형"
  },
  {
    "id": 4,
    "text": "설명이 구조적으로 정리되어 있지 않으면 이해하기 어렵다.",
    "mainCategory": "안정형",
    "subCategory": "구조·패턴 고정형"
  },
  {
    "id": 5,
    "text": "공부할 때 전체 흐름을 먼저 파악하려 한다.",
    "mainCategory": "안정형",
    "subCategory": "구조·패턴 고정형"
  },
  {
    "id": 6,
    "text": "공부할 때 일정한 틀을 유지하는 것이 편하다.",
    "mainCategory": "안정형",
    "subCategory": "구조·패턴 고정형"
  },
  {
    "id": 7,
    "text": "풀이 과정이 논리적인 순서로 이어져야 이해가 된다.",
    "mainCategory": "안정형",
    "subCategory": "구조·패턴 고정형"
  },
  {
    "id": 8,
    "text": "문제를 풀 때 단계별 구조를 중요하게 생각한다.",
    "mainCategory": "안정형",
    "subCategory": "구조·패턴 고정형"
  },
  {
    "id": 9,
    "text": "개념을 배울 때 먼저 큰 틀을 파악하려 한다.",
    "mainCategory": "안정형",
    "subCategory": "구조·패턴 고정형"
  },
  {
    "id": 10,
    "text": "공부한 내용을 표나 구조로 정리하는 편이다.",
    "mainCategory": "안정형",
    "subCategory": "구조·패턴 고정형"
  },
  {
    "id": 11,
    "text": "작은 실수도 그냥 넘기지 못한다.",
    "mainCategory": "안정형",
    "subCategory": "꼼꼼·완벽주의형"
  },
  {
    "id": 12,
    "text": "문제를 풀고 나면 다시 확인하는 습관이 있다.",
    "mainCategory": "안정형",
    "subCategory": "꼼꼼·완벽주의형"
  },
  {
    "id": 13,
    "text": "틀린 문제는 정확히 이유를 알아야 마음이 편하다.",
    "mainCategory": "안정형",
    "subCategory": "꼼꼼·완벽주의형"
  },
  {
    "id": 14,
    "text": "정답이 맞더라도 풀이 과정을 다시 확인한다.",
    "mainCategory": "안정형",
    "subCategory": "꼼꼼·완벽주의형"
  },
  {
    "id": 15,
    "text": "실수를 줄이는 것이 공부에서 중요하다고 생각한다.",
    "mainCategory": "안정형",
    "subCategory": "꼼꼼·완벽주의형"
  },
  {
    "id": 16,
    "text": "공부할 때 꼼꼼하게 확인하는 편이다.",
    "mainCategory": "안정형",
    "subCategory": "꼼꼼·완벽주의형"
  },
  {
    "id": 17,
    "text": "풀이 과정이나 계산에 조금이라도 찜찜한 부분이 남으면 다음 문제로 넘어가지 못한다.",
    "mainCategory": "안정형",
    "subCategory": "꼼꼼·완벽주의형"
  },
  {
    "id": 18,
    "text": "시험에서도 실수를 줄이려고 조심하는 편이다.",
    "mainCategory": "안정형",
    "subCategory": "꼼꼼·완벽주의형"
  },
  {
    "id": 19,
    "text": "작은 오류도 발견하면 다시 고치려고 한다.",
    "mainCategory": "안정형",
    "subCategory": "꼼꼼·완벽주의형"
  },
  {
    "id": 20,
    "text": "공부할 때 정확성이 가장 중요하다고 생각한다.",
    "mainCategory": "안정형",
    "subCategory": "꼼꼼·완벽주의형"
  },
  {
    "id": 21,
    "text": "문제를 풀 때 충분히 생각한 뒤 답을 고른다.",
    "mainCategory": "안정형",
    "subCategory": "신중·느린 정확형"
  },
  {
    "id": 22,
    "text": "빠르게 푸는 것보다 정확하게 푸는 것이 중요하다.",
    "mainCategory": "안정형",
    "subCategory": "신중·느린 정확형"
  },
  {
    "id": 23,
    "text": "서두르면 실수할 것 같아 조심하는 편이다.",
    "mainCategory": "안정형",
    "subCategory": "신중·느린 정확형"
  },
  {
    "id": 24,
    "text": "문제를 풀 때 시간을 들여 생각한다.",
    "mainCategory": "안정형",
    "subCategory": "신중·느린 정확형"
  },
  {
    "id": 25,
    "text": "시험에서도 신중하게 답을 선택하는 편이다.",
    "mainCategory": "안정형",
    "subCategory": "신중·느린 정확형"
  },
  {
    "id": 26,
    "text": "빠른 판단보다는 확실한 판단을 선호한다.",
    "mainCategory": "안정형",
    "subCategory": "신중·느린 정확형"
  },
  {
    "id": 27,
    "text": "공부할 때 속도가 느리더라도 정확하게 이해하려 한다.",
    "mainCategory": "안정형",
    "subCategory": "신중·느린 정확형"
  },
  {
    "id": 28,
    "text": "문제를 풀 때 충분히 확인한 후 넘어간다.",
    "mainCategory": "안정형",
    "subCategory": "신중·느린 정확형"
  },
  {
    "id": 29,
    "text": "생각이 정리된 후에 행동하는 편이다.",
    "mainCategory": "안정형",
    "subCategory": "신중·느린 정확형"
  },
  {
    "id": 30,
    "text": "새로운 공부법을 시도하기보다 내가 오랫동안 검증해 온 익숙한 풀이 방식을 고수한다.",
    "mainCategory": "안정형",
    "subCategory": "신중·느린 정확형"
  },
  {
    "id": 31,
    "text": "선생님의 말투나 분위기에 영향을 받는다.",
    "mainCategory": "의미형",
    "subCategory": "감정·공감 우세형"
  },
  {
    "id": 32,
    "text": "누군가 나를 인정해 주면 공부 의욕이 생긴다.",
    "mainCategory": "의미형",
    "subCategory": "감정·공감 우세형"
  },
  {
    "id": 33,
    "text": "선생님의 지적이나 꾸중을 들으면 내 존재 전체를 비난받는 것처럼 속상하다.",
    "mainCategory": "의미형",
    "subCategory": "감정·공감 우세형"
  },
  {
    "id": 34,
    "text": "공부에서도 감정 상태가 영향을 준다.",
    "mainCategory": "의미형",
    "subCategory": "감정·공감 우세형"
  },
  {
    "id": 35,
    "text": "좋아하는 사람에게 배우면 더 집중된다.",
    "mainCategory": "의미형",
    "subCategory": "감정·공감 우세형"
  },
  {
    "id": 36,
    "text": "공부할 때 분위기가 중요하다.",
    "mainCategory": "의미형",
    "subCategory": "감정·공감 우세형"
  },
  {
    "id": 37,
    "text": "공감되는 설명이 이해를 돕는다.",
    "mainCategory": "의미형",
    "subCategory": "감정·공감 우세형"
  },
  {
    "id": 38,
    "text": "감정적으로 편해야 공부가 잘 된다.",
    "mainCategory": "의미형",
    "subCategory": "감정·공감 우세형"
  },
  {
    "id": 39,
    "text": "칭찬을 받으면 공부 의욕이 올라간다.",
    "mainCategory": "의미형",
    "subCategory": "감정·공감 우세형"
  },
  {
    "id": 40,
    "text": "선생님과의 관계나 수업의 정서적 분위기가 따뜻하고 편안해야 공부가 잘된다.",
    "mainCategory": "의미형",
    "subCategory": "감정·공감 우세형"
  },
  {
    "id": 41,
    "text": "공부할 때 왜 배우는지 의미를 찾는다.",
    "mainCategory": "의미형",
    "subCategory": "의미 몰입·과몰입형"
  },
  {
    "id": 42,
    "text": "이해되면 한 가지 주제에 깊게 몰입한다.",
    "mainCategory": "의미형",
    "subCategory": "의미 몰입·과몰입형"
  },
  {
    "id": 43,
    "text": "흥미 있는 내용은 오래 탐구하는 편이다.",
    "mainCategory": "의미형",
    "subCategory": "의미 몰입·과몰입형"
  },
  {
    "id": 44,
    "text": "의미 있는 공부는 시간 가는 줄 모르고 한다.",
    "mainCategory": "의미형",
    "subCategory": "의미 몰입·과몰입형"
  },
  {
    "id": 45,
    "text": "주제가 재미있으면 집중력이 높아진다.",
    "mainCategory": "의미형",
    "subCategory": "의미 몰입·과몰입형"
  },
  {
    "id": 46,
    "text": "이해한 내용은 더 깊이 생각하려 한다.",
    "mainCategory": "의미형",
    "subCategory": "의미 몰입·과몰입형"
  },
  {
    "id": 47,
    "text": "관심 있는 주제는 계속 찾아보는 편이다.",
    "mainCategory": "의미형",
    "subCategory": "의미 몰입·과몰입형"
  },
  {
    "id": 48,
    "text": "공부에서도 의미 있는 내용을 선호한다.",
    "mainCategory": "의미형",
    "subCategory": "의미 몰입·과몰입형"
  },
  {
    "id": 49,
    "text": "흥미 있는 공부는 스스로 더 하게 된다.",
    "mainCategory": "의미형",
    "subCategory": "의미 몰입·과몰입형"
  },
  {
    "id": 50,
    "text": "이해가 되면 공부가 즐거워진다.",
    "mainCategory": "의미형",
    "subCategory": "의미 몰입·과몰입형"
  },
  {
    "id": 51,
    "text": "완전히 이해되지 않으면 공부가 잘 안 된다.",
    "mainCategory": "의미형",
    "subCategory": "이해 고집형"
  },
  {
    "id": 52,
    "text": "이해가 안 되면 계속 생각하는 편이다.",
    "mainCategory": "의미형",
    "subCategory": "이해 고집형"
  },
  {
    "id": 53,
    "text": "공부할 때 개념을 깊이 이해하려 한다.",
    "mainCategory": "의미형",
    "subCategory": "이해 고집형"
  },
  {
    "id": 54,
    "text": "납득이 되지 않으면 문제를 풀기 어렵다.",
    "mainCategory": "의미형",
    "subCategory": "이해 고집형"
  },
  {
    "id": 55,
    "text": "이해 중심 공부가 중요하다고 생각한다.",
    "mainCategory": "의미형",
    "subCategory": "이해 고집형"
  },
  {
    "id": 56,
    "text": "이유를 알면 기억이 오래간다.",
    "mainCategory": "의미형",
    "subCategory": "이해 고집형"
  },
  {
    "id": 57,
    "text": "개념을 정확히 이해하려 노력한다.",
    "mainCategory": "의미형",
    "subCategory": "이해 고집형"
  },
  {
    "id": 58,
    "text": "이해된 내용을 다른 방식으로 설명하려 한다.",
    "mainCategory": "의미형",
    "subCategory": "이해 고집형"
  },
  {
    "id": 59,
    "text": "이해되지 않은 부분이 계속 신경 쓰인다.",
    "mainCategory": "의미형",
    "subCategory": "이해 고집형"
  },
  {
    "id": 60,
    "text": "공부에서 이해가 가장 중요하다고 생각한다.",
    "mainCategory": "의미형",
    "subCategory": "이해 고집형"
  },
  {
    "id": 61,
    "text": "문제를 보면 바로 풀어보고 싶다.",
    "mainCategory": "변화형",
    "subCategory": "즉흥·순간판단형"
  },
  {
    "id": 62,
    "text": "생각보다 행동이 먼저 나오는 편이다.",
    "mainCategory": "변화형",
    "subCategory": "즉흥·순간판단형"
  },
  {
    "id": 63,
    "text": "직감으로 답을 선택하는 경우가 있다.",
    "mainCategory": "변화형",
    "subCategory": "즉흥·순간판단형"
  },
  {
    "id": 64,
    "text": "순간적으로 판단하는 편이다.",
    "mainCategory": "변화형",
    "subCategory": "즉흥·순간판단형"
  },
  {
    "id": 65,
    "text": "빠르게 답을 고르는 편이다.",
    "mainCategory": "변화형",
    "subCategory": "즉흥·순간판단형"
  },
  {
    "id": 66,
    "text": "직관적인 판단을 자주 한다.",
    "mainCategory": "변화형",
    "subCategory": "즉흥·순간판단형"
  },
  {
    "id": 67,
    "text": "문제를 보면 바로 반응하는 편이다.",
    "mainCategory": "변화형",
    "subCategory": "즉흥·순간판단형"
  },
  {
    "id": 68,
    "text": "즉흥적인 결정이 많다.",
    "mainCategory": "변화형",
    "subCategory": "즉흥·순간판단형"
  },
  {
    "id": 69,
    "text": "빠른 판단을 선호한다.",
    "mainCategory": "변화형",
    "subCategory": "즉흥·순간판단형"
  },
  {
    "id": 70,
    "text": "생각보다 행동이 빠른 편이다.",
    "mainCategory": "변화형",
    "subCategory": "즉흥·순간판단형"
  },
  {
    "id": 71,
    "text": "공부하다가 다른 생각이 자주 떠오른다.",
    "mainCategory": "변화형",
    "subCategory": "산만·관심 이동형"
  },
  {
    "id": 72,
    "text": "집중이 오래 유지되지 않는다.",
    "mainCategory": "변화형",
    "subCategory": "산만·관심 이동형"
  },
  {
    "id": 73,
    "text": "새로운 자극이 있어야 집중된다.",
    "mainCategory": "변화형",
    "subCategory": "산만·관심 이동형"
  },
  {
    "id": 74,
    "text": "공부 중 다른 것에 관심이 이동한다.",
    "mainCategory": "변화형",
    "subCategory": "산만·관심 이동형"
  },
  {
    "id": 75,
    "text": "여러 가지를 동시에 하려 한다.",
    "mainCategory": "변화형",
    "subCategory": "산만·관심 이동형"
  },
  {
    "id": 76,
    "text": "한 가지 공부만 계속하기 어렵다.",
    "mainCategory": "변화형",
    "subCategory": "산만·관심 이동형"
  },
  {
    "id": 77,
    "text": "새로운 것이 있으면 관심이 옮겨간다.",
    "mainCategory": "변화형",
    "subCategory": "산만·관심 이동형"
  },
  {
    "id": 78,
    "text": "집중이 자주 바뀌는 편이다.",
    "mainCategory": "변화형",
    "subCategory": "산만·관심 이동형"
  },
  {
    "id": 79,
    "text": "주변의 작은 바스락거림이나 친구들의 움직임에 시선과 집중을 쉽게 빼앗긴다.",
    "mainCategory": "변화형",
    "subCategory": "산만·관심 이동형"
  },
  {
    "id": 80,
    "text": "관심사가 자주 바뀐다.",
    "mainCategory": "변화형",
    "subCategory": "산만·관심 이동형"
  },
  {
    "id": 81,
    "text": "문제 풀이 속도가 빠른 편이다.",
    "mainCategory": "변화형",
    "subCategory": "속도·가벼운 집중형"
  },
  {
    "id": 82,
    "text": "빠르게 문제를 푸는 것을 좋아한다.",
    "mainCategory": "변화형",
    "subCategory": "속도·가벼운 집중형"
  },
  {
    "id": 83,
    "text": "한 문제에 오래 머무는 것을 싫어한다.",
    "mainCategory": "변화형",
    "subCategory": "속도·가벼운 집중형"
  },
  {
    "id": 84,
    "text": "시험에서도 빠르게 풀려고 한다.",
    "mainCategory": "변화형",
    "subCategory": "속도·가벼운 집중형"
  },
  {
    "id": 85,
    "text": "문제를 풀 때 오래 붙잡고 늘어지기보다 대략적인 감으로 빠르게 찍고 넘어가는 편이다.",
    "mainCategory": "변화형",
    "subCategory": "속도·가벼운 집중형"
  },
  {
    "id": 86,
    "text": "빠르게 처리하는 능력이 있다고 생각한다.",
    "mainCategory": "변화형",
    "subCategory": "속도·가벼운 집중형"
  },
  {
    "id": 87,
    "text": "문제 풀이 속도가 자신 있다.",
    "mainCategory": "변화형",
    "subCategory": "속도·가벼운 집중형"
  },
  {
    "id": 88,
    "text": "다 풀고 나서 다시 검토하기보다는 차라리 쉬거나 다음 과목을 준비하는 게 낫다.",
    "mainCategory": "변화형",
    "subCategory": "속도·가벼운 집중형"
  },
  {
    "id": 89,
    "text": "빠르게 판단하고 넘어가는 편이다.",
    "mainCategory": "변화형",
    "subCategory": "속도·가벼운 집중형"
  },
  {
    "id": 90,
    "text": "문제를 빠르게 해결하려 한다.",
    "mainCategory": "변화형",
    "subCategory": "속도·가벼운 집중형"
  },
  {
    "id": 91,
    "text": "속도가 잘 나오면 계속 더 빠르게 풀고 싶다.",
    "mainCategory": "변화형",
    "subCategory": "속도 과몰입형"
  },
  {
    "id": 92,
    "text": "시험에서도 빠르게 푸는 것에 집중한다.",
    "mainCategory": "변화형",
    "subCategory": "속도 과몰입형"
  },
  {
    "id": 93,
    "text": "시험장에서 남들보다 시험지 넘어가는 소리가 늦게 들리면 나도 모르게 조급해진다.",
    "mainCategory": "변화형",
    "subCategory": "속도 과몰입형"
  },
  {
    "id": 94,
    "text": "문제를 빠르게 풀 때 만족감을 느낀다.",
    "mainCategory": "변화형",
    "subCategory": "속도 과몰입형"
  },
  {
    "id": 95,
    "text": "속도가 잘 나오면 자신감이 생긴다.",
    "mainCategory": "변화형",
    "subCategory": "속도 과몰입형"
  },
  {
    "id": 96,
    "text": "문제를 제한 시간보다 훨씬 일찍 다 풀고 엎드려 있을 때 묘한 쾌감을 느낀다.",
    "mainCategory": "변화형",
    "subCategory": "속도 과몰입형"
  },
  {
    "id": 97,
    "text": "시험에서 시간을 줄이려고 노력한다.",
    "mainCategory": "변화형",
    "subCategory": "속도 과몰입형"
  },
  {
    "id": 98,
    "text": "빠른 해결이 성취감을 준다.",
    "mainCategory": "변화형",
    "subCategory": "속도 과몰입형"
  },
  {
    "id": 99,
    "text": "속도 향상에 관심이 많다.",
    "mainCategory": "변화형",
    "subCategory": "속도 과몰입형"
  },
  {
    "id": 100,
    "text": "문제의 함정을 꼼꼼히 살피기보다는 속도를 내어 단숨에 시험지를 끝내버리고 싶다.",
    "mainCategory": "변화형",
    "subCategory": "속도 과몰입형"
  },
  {
    "id": 101,
    "text": "목표가 있으면 공부 의욕이 생긴다.",
    "mainCategory": "성취형",
    "subCategory": "목표형"
  },
  {
    "id": 102,
    "text": "목표를 세우고 공부하는 편이다.",
    "mainCategory": "성취형",
    "subCategory": "목표형"
  },
  {
    "id": 103,
    "text": "목표 달성을 중요하게 생각한다.",
    "mainCategory": "성취형",
    "subCategory": "목표형"
  },
  {
    "id": 104,
    "text": "달성하고 싶은 목표 점수와 등수가 명확할 때 공부 의욕이 강하게 불타오른다.",
    "mainCategory": "성취형",
    "subCategory": "목표형"
  },
  {
    "id": 105,
    "text": "목표를 이루기 위해 노력한다.",
    "mainCategory": "성취형",
    "subCategory": "목표형"
  },
  {
    "id": 106,
    "text": "목표가 분명해야 공부가 잘 된다.",
    "mainCategory": "성취형",
    "subCategory": "목표형"
  },
  {
    "id": 107,
    "text": "목표를 정하면 집중력이 올라간다.",
    "mainCategory": "성취형",
    "subCategory": "목표형"
  },
  {
    "id": 108,
    "text": "공부에서 목표 설정이 중요하다.",
    "mainCategory": "성취형",
    "subCategory": "목표형"
  },
  {
    "id": 109,
    "text": "목표 달성 자체가 동기부여가 된다.",
    "mainCategory": "성취형",
    "subCategory": "목표형"
  },
  {
    "id": 110,
    "text": "목표가 있으면 행동이 달라진다.",
    "mainCategory": "성취형",
    "subCategory": "목표형"
  },
  {
    "id": 111,
    "text": "목표를 높게 잡는 편이다.",
    "mainCategory": "성취형",
    "subCategory": "완벽주의형"
  },
  {
    "id": 112,
    "text": "성적이 기대보다 낮으면 만족하지 못한다.",
    "mainCategory": "성취형",
    "subCategory": "완벽주의형"
  },
  {
    "id": 113,
    "text": "스스로 기준이 높은 편이다.",
    "mainCategory": "성취형",
    "subCategory": "완벽주의형"
  },
  {
    "id": 114,
    "text": "결과가 완벽해야 만족한다.",
    "mainCategory": "성취형",
    "subCategory": "완벽주의형"
  },
  {
    "id": 115,
    "text": "시험이 끝나면 '실수만 안 했어도 더 잘 볼 수 있었는데'라며 심하게 자책한다.",
    "mainCategory": "성취형",
    "subCategory": "완벽주의형"
  },
  {
    "id": 116,
    "text": "95점을 받아도 틀린 1문제(5점)가 머릿속에서 계속 맴돌아 온전히 기뻐하지 못한다.",
    "mainCategory": "성취형",
    "subCategory": "완벽주의형"
  },
  {
    "id": 117,
    "text": "결과에 대해 스스로 엄격하다.",
    "mainCategory": "성취형",
    "subCategory": "완벽주의형"
  },
  {
    "id": 118,
    "text": "시험공부를 할 때 '100점이 아니면 실패'라는 완벽주의적 압박감을 자주 느낀다.",
    "mainCategory": "성취형",
    "subCategory": "완벽주의형"
  },
  {
    "id": 119,
    "text": "나보다 공부를 덜 한 친구가 나보다 점수가 잘 나오면 심한 분식과 좌절감을 느낀다.",
    "mainCategory": "성취형",
    "subCategory": "완벽주의형"
  },
  {
    "id": 120,
    "text": "결과가 부족하면 다시 도전하려 한다.",
    "mainCategory": "성취형",
    "subCategory": "완벽주의형"
  },
  {
    "id": 121,
    "text": "시험 결과에 감정이 크게 영향을 받는다.",
    "mainCategory": "성취형",
    "subCategory": "감정형"
  },
  {
    "id": 122,
    "text": "성적이 좋으면 기분이 매우 좋아진다.",
    "mainCategory": "성취형",
    "subCategory": "감정형"
  },
  {
    "id": 123,
    "text": "성적이 나쁘면 기분이 크게 떨어진다.",
    "mainCategory": "성취형",
    "subCategory": "감정형"
  },
  {
    "id": 124,
    "text": "시험이나 평가 결과가 기대에 못 미치면 하루 종일 아무것도 손에 잡히지 않는다.",
    "mainCategory": "성취형",
    "subCategory": "감정형"
  },
  {
    "id": 125,
    "text": "결과에 따라 자신감이 달라진다.",
    "mainCategory": "성취형",
    "subCategory": "감정형"
  },
  {
    "id": 126,
    "text": "성적이 감정에 영향을 준다.",
    "mainCategory": "성취형",
    "subCategory": "감정형"
  },
  {
    "id": 127,
    "text": "평가 결과에 민감하다.",
    "mainCategory": "성취형",
    "subCategory": "감정형"
  },
  {
    "id": 128,
    "text": "시험 결과에 감정 반응이 큰 편이다.",
    "mainCategory": "성취형",
    "subCategory": "감정형"
  },
  {
    "id": 129,
    "text": "공부 과정이 아무리 힘들었어도 시험 결과로 증명해내지 못하면 무의미하다고 느낀다.",
    "mainCategory": "성취형",
    "subCategory": "감정형"
  },
  {
    "id": 130,
    "text": "결과에 따라 동기 수준이 달라진다.",
    "mainCategory": "성취형",
    "subCategory": "감정형"
  },
  {
    "id": 131,
    "text": "공부 의욕이 올라갔다 내려갔다 한다.",
    "mainCategory": "성취형",
    "subCategory": "기복형"
  },
  {
    "id": 132,
    "text": "집중력이 일정하지 않다.",
    "mainCategory": "성취형",
    "subCategory": "기복형"
  },
  {
    "id": 133,
    "text": "시험 1번 문제부터 막히기 시작하면 머릿속이 하얘지면서 시험 전체를 망치곤 한다.",
    "mainCategory": "성취형",
    "subCategory": "기복형"
  },
  {
    "id": 134,
    "text": "공부할 때 기복이 있다.",
    "mainCategory": "성취형",
    "subCategory": "기복형"
  },
  {
    "id": 135,
    "text": "어떤 날은 공부가 잘 되고 어떤 날은 어렵다.",
    "mainCategory": "성취형",
    "subCategory": "기복형"
  },
  {
    "id": 136,
    "text": "컨디션에 따라 공부가 달라진다.",
    "mainCategory": "성취형",
    "subCategory": "기복형"
  },
  {
    "id": 137,
    "text": "집중력 변화가 있는 편이다.",
    "mainCategory": "성취형",
    "subCategory": "기복형"
  },
  {
    "id": 138,
    "text": "시험 당일 컨디션이나 긴장도에 따라 평소보다 성적이 20~30점 이상 널뛰기한다.",
    "mainCategory": "성취형",
    "subCategory": "기복형"
  },
  {
    "id": 139,
    "text": "자신 있는 과목은 전교권 수준으로 잘 보지만, 조금만 싫어하는 과목은 바닥을 친다.",
    "mainCategory": "성취형",
    "subCategory": "기복형"
  },
  {
    "id": 140,
    "text": "주변의 기대가 크거나 중요한 시험일수록 부담감 때문에 평소 실력의 절반도 못 낸다.",
    "mainCategory": "성취형",
    "subCategory": "기복형"
  }
];


const QUESTIONS_STAGE1_70 = [
  {
    "id": 1,
    "category": "안정형",
    "text": "문제를 풀기 전에 풀이 순서를 먼저 생각한다."
  },
  {
    "id": 2,
    "category": "안정형",
    "text": "정리 형식이 일정하지 않으면 공부가 불편하다."
  },
  {
    "id": 3,
    "category": "안정형",
    "text": "새로운 문제를 보면 기존에 배운 패턴과 연결하려 한다."
  },
  {
    "id": 4,
    "category": "안정형",
    "text": "설명이 구조적으로 정리되어야 이해가 쉽다."
  },
  {
    "id": 5,
    "category": "안정형",
    "text": "속도보다 정확하게 푸는 것이 더 중요하다."
  },
  {
    "id": 6,
    "category": "안정형",
    "text": "작은 실수도 그냥 넘기기 어렵다."
  },
  {
    "id": 7,
    "category": "안정형",
    "text": "답을 구했어도 다시 한 번 확인하는 편이다."
  },
  {
    "id": 8,
    "category": "안정형",
    "text": "완전히 이해되지 않으면 다음으로 넘어가기 어렵다."
  },
  {
    "id": 9,
    "category": "안정형",
    "text": "공부할 때 일정한 방법을 유지하는 것이 편하다."
  },
  {
    "id": 10,
    "category": "안정형",
    "text": "풀이 과정을 정리하는 것을 중요하게 생각한다."
  },
  {
    "id": 11,
    "category": "안정형",
    "text": "계획 없이 공부하면 불안한 편이다."
  },
  {
    "id": 12,
    "category": "안정형",
    "text": "같은 방식으로 반복 연습하는 것이 효과적이라고 생각한다."
  },
  {
    "id": 13,
    "category": "안정형",
    "text": "공부할 때 먼저 구조를 잡으려고 한다."
  },
  {
    "id": 14,
    "category": "안정형",
    "text": "실수를 줄이기 위해 확인을 여러 번 한다."
  },
  {
    "id": 15,
    "category": "안정형",
    "text": "수업 내용을 깔끔하게 필기하고 개념별로 정리해 두는 것을 좋아한다."
  },
  {
    "id": 16,
    "category": "안정형",
    "text": "문제 풀이가 틀어지면 처음부터 다시 확인한다."
  },
  {
    "id": 17,
    "category": "안정형",
    "text": "정확하게 읽고 풀려다보니 시험 후반부에 시간이 부족할 때가 많다."
  },
  {
    "id": 18,
    "category": "안정형",
    "text": "평소 풀던 방식과 다른 생소한 유형의 문제를 만나면 어떻게 시작할지 막막하다."
  },
  {
    "id": 19,
    "category": "의미형",
    "text": "공부할 때 왜 배우는지 이해되어야 집중된다."
  },
  {
    "id": 20,
    "category": "의미형",
    "text": "흥미가 없으면 공부하기 어렵다."
  },
  {
    "id": 21,
    "category": "의미형",
    "text": "지식을 이해하는 과정이 중요하다."
  },
  {
    "id": 22,
    "category": "의미형",
    "text": "공부 내용이 삶과 연결되면 더 기억에 남는다."
  },
  {
    "id": 23,
    "category": "의미형",
    "text": "설명을 들을 때 의미를 먼저 찾는다."
  },
  {
    "id": 24,
    "category": "의미형",
    "text": "납득이 되지 않으면 공부가 잘 진행되지 않는다."
  },
  {
    "id": 25,
    "category": "의미형",
    "text": "지적을 받으면 기분이 영향을 받는 편이다."
  },
  {
    "id": 26,
    "category": "의미형",
    "text": "선생님이나 부모의 말투에 민감하게 반응한다."
  },
  {
    "id": 27,
    "category": "의미형",
    "text": "공부할 때 내용에 몰입하는 편이다."
  },
  {
    "id": 28,
    "category": "의미형",
    "text": "이해가 되면 공부 속도가 빨라진다."
  },
  {
    "id": 29,
    "category": "의미형",
    "text": "원리를 모른 채 공식이나 개념을 무조건 외우라고 하면 거부감이 든다."
  },
  {
    "id": 30,
    "category": "의미형",
    "text": "논리적으로 연결된 설명이 좋다."
  },
  {
    "id": 31,
    "category": "의미형",
    "text": "공부가 재미있어지면 집중력이 올라간다."
  },
  {
    "id": 32,
    "category": "의미형",
    "text": "이야기나 사례로 설명하면 이해가 쉽다."
  },
  {
    "id": 33,
    "category": "의미형",
    "text": "문제나 지문을 읽을 때 숨겨진 트릭이나 다른 의도가 있을 것이라고 깊게 생각하는 경우가 있다."
  },
  {
    "id": 34,
    "category": "의미형",
    "text": "공부에서 공감이 중요하다고 생각한다."
  },
  {
    "id": 35,
    "category": "의미형",
    "text": "공부 내용을 스스로 납득하려는 편이다."
  },
  {
    "id": 36,
    "category": "변화형",
    "text": "새로운 문제를 보면 바로 풀어보고 싶다."
  },
  {
    "id": 37,
    "category": "변화형",
    "text": "같은 문제를 반복하는 공부는 지루하다."
  },
  {
    "id": 38,
    "category": "변화형",
    "text": "빠르게 판단하는 편이다."
  },
  {
    "id": 39,
    "category": "변화형",
    "text": "공부하다가 다른 생각이 자주 떠오른다."
  },
  {
    "id": 40,
    "category": "변화형",
    "text": "문제를 보면 직감적으로 답을 고르는 경우가 있다."
  },
  {
    "id": 41,
    "category": "변화형",
    "text": "새로운 방식의 문제를 좋아한다."
  },
  {
    "id": 42,
    "category": "변화형",
    "text": "공부하는 과목을 자주 바꿔가면서 하는 편이다."
  },
  {
    "id": 43,
    "category": "변화형",
    "text": "문제 풀이 속도가 빠른 편이다."
  },
  {
    "id": 44,
    "category": "변화형",
    "text": "생각보다 행동이 먼저 나가는 편이다."
  },
  {
    "id": 45,
    "category": "변화형",
    "text": "문제를 다 풀고 나면 다시 꼼꼼히 검토하기보다 빨리 제출하려고 하는 편이다."
  },
  {
    "id": 46,
    "category": "변화형",
    "text": "빠르게 풀다가 실수를 하는 경우가 있다."
  },
  {
    "id": 47,
    "category": "변화형",
    "text": "한 문제에 오래 머무는 것을 싫어한다."
  },
  {
    "id": 48,
    "category": "변화형",
    "text": "문제를 풀 때 속도가 중요하다고 생각한다."
  },
  {
    "id": 49,
    "category": "변화형",
    "text": "새로운 자극이 있어야 집중이 잘 된다."
  },
  {
    "id": 50,
    "category": "변화형",
    "text": "오랜 시간 길게 공부하기보다 짧은 시간 바짝 집중하는 것을 선호하는 편이다."
  },
  {
    "id": 51,
    "category": "변화형",
    "text": "직관적인 판단을 하는 경우가 많다."
  },
  {
    "id": 52,
    "category": "변화형",
    "text": "공부할 때 조용한 환경보다 약간의 소음이나 음악이 있는 것이 편하다."
  },
  {
    "id": 53,
    "category": "성취형",
    "text": "목표가 있으면 공부가 잘 된다."
  },
  {
    "id": 54,
    "category": "성취형",
    "text": "성적이 오르면 동기부여가 된다."
  },
  {
    "id": 55,
    "category": "성취형",
    "text": "경쟁 상황에서 더 집중이 된다."
  },
  {
    "id": 56,
    "category": "성취형",
    "text": "목표를 세우고 공부하는 편이다."
  },
  {
    "id": 57,
    "category": "성취형",
    "text": "시험 결과에 민감하다."
  },
  {
    "id": 58,
    "category": "성취형",
    "text": "성취감을 중요하게 생각한다."
  },
  {
    "id": 59,
    "category": "성취형",
    "text": "높은 목표를 세우는 편이다."
  },
  {
    "id": 60,
    "category": "성취형",
    "text": "성적을 통해 자신감을 얻는다."
  },
  {
    "id": 61,
    "category": "성취형",
    "text": "결과가 좋지 않으면 스트레스를 받는다."
  },
  {
    "id": 62,
    "category": "성취형",
    "text": "목표 달성을 중요하게 생각한다."
  },
  {
    "id": 63,
    "category": "성취형",
    "text": "시험 당일의 컨디션이나 긴장감에 따라 시험 점수 차이가 큰 편이다."
  },
  {
    "id": 64,
    "category": "성취형",
    "text": "성과를 확인하는 것이 중요하다."
  },
  {
    "id": 65,
    "category": "성취형",
    "text": "결과 중심으로 공부를 평가한다."
  },
  {
    "id": 66,
    "category": "성취형",
    "text": "틀린 문제나 모르는 문제가 나오면 맞힐 때까지 끝까지 스스로 파고든다."
  },
  {
    "id": 67,
    "category": "성취형",
    "text": "성적 향상이 큰 동기부여가 된다."
  },
  {
    "id": 68,
    "category": "성취형",
    "text": "목표를 이루면 큰 만족감을 느낀다."
  },
  {
    "id": 69,
    "category": "성취형",
    "text": "시험 전에는 과목별 중요도와 배점을 계산하여 전략적으로 공부한다."
  },
  {
    "id": 70,
    "category": "성취형",
    "text": "결과를 통해 자신의 능력을 확인하려 한다."
  }
];

const QUESTIONS_STAGE2_STABILITY = [
  {
    "id": 1,
    "subCategory": "구조·패턴 고정형",
    "text": "문제를 볼 때 유형이나 패턴부터 떠올린다."
  },
  {
    "id": 2,
    "subCategory": "구조·패턴 고정형",
    "text": "익숙한 형태의 문제에서는 실수가 거의 없다."
  },
  {
    "id": 3,
    "subCategory": "구조·패턴 고정형",
    "text": "문제 형식이 바뀌면 갑자기 어렵게 느껴진다."
  },
  {
    "id": 4,
    "subCategory": "구조·패턴 고정형",
    "text": "문제를 구조나 틀로 정리하는 것이 편하다."
  },
  {
    "id": 5,
    "subCategory": "구조·패턴 고정형",
    "text": "변형 문제보다 기본 유형 문제가 더 안정적이다."
  },
  {
    "id": 6,
    "subCategory": "구조·패턴 고정형",
    "text": "새로운 형식의 문제를 처음 보면 당황한다."
  },
  {
    "id": 7,
    "subCategory": "구조·패턴 고정형",
    "text": "예전에 풀었던 문제와 비슷한지부터 확인한다."
  },
  {
    "id": 8,
    "subCategory": "구조·패턴 고정형",
    "text": "조건이 조금만 달라도 다른 문제로 느껴진다."
  },
  {
    "id": 9,
    "subCategory": "구조·패턴 고정형",
    "text": "문제 풀이 전에 구조를 파악해야 마음이 놓인다."
  },
  {
    "id": 10,
    "subCategory": "구조·패턴 고정형",
    "text": "패턴이 보이면 빠르고 정확하게 푼다."
  },
  {
    "id": 11,
    "subCategory": "꼼꼼·완벽주의형",
    "text": "조건이나 예외를 빠짐없이 확인해야 안심된다."
  },
  {
    "id": 12,
    "subCategory": "꼼꼼·완벽주의형",
    "text": "이미 푼 문제도 다시 확인하는 편이다."
  },
  {
    "id": 13,
    "subCategory": "꼼꼼·완벽주의형",
    "text": "애매한 이해 상태로 답을 고르는 것이 불안하다."
  },
  {
    "id": 14,
    "subCategory": "꼼꼼·완벽주의형",
    "text": "한 문제에 시간을 오래 쓰는 편이다."
  },
  {
    "id": 15,
    "subCategory": "꼼꼼·완벽주의형",
    "text": "모든 선택지를 검토해야 마음이 놓인다."
  },
  {
    "id": 16,
    "subCategory": "꼼꼼·완벽주의형",
    "text": "실수할 가능성을 미리 차단하려고 한다."
  },
  {
    "id": 17,
    "subCategory": "꼼꼼·완벽주의형",
    "text": "맞았어도 찜찜한 문제는 계속 신경 쓰인다."
  },
  {
    "id": 18,
    "subCategory": "꼼꼼·완벽주의형",
    "text": "완전히 이해되지 않으면 다음으로 넘어가기 어렵다."
  },
  {
    "id": 19,
    "subCategory": "꼼꼼·완벽주의형",
    "text": "시험에서 시간 부족을 자주 느낀다."
  },
  {
    "id": 20,
    "subCategory": "꼼꼼·완벽주의형",
    "text": "답을 바꿔서 틀린 경험이 있다."
  },
  {
    "id": 21,
    "subCategory": "신중·느린 정확형",
    "text": "빠르게 푸는 것보다 정확하게 푸는 것이 중요하다."
  },
  {
    "id": 22,
    "subCategory": "신중·느린 정확형",
    "text": "문제를 충분히 이해한 뒤에야 풀이를 시작한다."
  },
  {
    "id": 23,
    "subCategory": "신중·느린 정확형",
    "text": "서두르면 오히려 실수가 늘어난다."
  },
  {
    "id": 24,
    "subCategory": "신중·느린 정확형",
    "text": "시험에서 문제를 다 풀지 못한 적이 있다."
  },
  {
    "id": 25,
    "subCategory": "신중·느린 정확형",
    "text": "쉬운 문제도 꼼꼼히 풀려고 한다."
  },
  {
    "id": 26,
    "subCategory": "신중·느린 정확형",
    "text": "시간 압박이 있으면 실력이 잘 안 나온다."
  },
  {
    "id": 27,
    "subCategory": "신중·느린 정확형",
    "text": "알지만 시간이 부족해 못 푼 문제가 많다."
  },
  {
    "id": 28,
    "subCategory": "신중·느린 정확형",
    "text": "풀이 순서를 차근차근 지키는 편이다."
  },
  {
    "id": 29,
    "subCategory": "신중·느린 정확형",
    "text": "제한 시간이 없으면 성적이 더 잘 나온다."
  },
  {
    "id": 30,
    "subCategory": "신중·느린 정확형",
    "text": "속도를 내라는 말이 부담스럽다."
  }
];

const QUESTIONS_STAGE2_MEANING = [
  {
    "id": 1,
    "subCategory": "감정·공감 우세형",
    "text": "문제를 풀 때 정답보다 느낌이 먼저 든다."
  },
  {
    "id": 2,
    "subCategory": "감정·공감 우세형",
    "text": "글을 읽으면 내용보다 감정이 더 오래 남는다."
  },
  {
    "id": 3,
    "subCategory": "감정·공감 우세형",
    "text": "상대의 말투나 표정에 영향을 많이 받는다."
  },
  {
    "id": 4,
    "subCategory": "감정·공감 우세형",
    "text": "틀린 이유를 감정적으로 받아들이는 편이다."
  },
  {
    "id": 5,
    "subCategory": "감정·공감 우세형",
    "text": "공부할 때 기분에 따라 집중도가 크게 달라진다."
  },
  {
    "id": 6,
    "subCategory": "감정·공감 우세형",
    "text": "문제의 분위기나 맥락을 먼저 파악하려 한다."
  },
  {
    "id": 7,
    "subCategory": "감정·공감 우세형",
    "text": "시험 중 감정이 흔들리면 회복이 어렵다."
  },
  {
    "id": 8,
    "subCategory": "감정·공감 우세형",
    "text": "지문을 읽을 때 공감이 많이 된다."
  },
  {
    "id": 9,
    "subCategory": "감정·공감 우세형",
    "text": "문제 풀이를 지적받으면 내가 비판받는 것처럼 느껴질 때가 있다."
  },
  {
    "id": 10,
    "subCategory": "감정·공감 우세형",
    "text": "정답이어도 마음에 안 들면 불편하다."
  },
  {
    "id": 11,
    "subCategory": "의미 몰입·과몰입형",
    "text": "문제를 풀 때 의미를 완전히 이해해야 넘어간다."
  },
  {
    "id": 12,
    "subCategory": "의미 몰입·과몰입형",
    "text": "부분보다 전체 흐름을 먼저 파악하려 한다."
  },
  {
    "id": 13,
    "subCategory": "의미 몰입·과몰입형",
    "text": "왜 이런 문제가 나왔는지가 궁금하다."
  },
  {
    "id": 14,
    "subCategory": "의미 몰입·과몰입형",
    "text": "출제자의 의도를 계속 생각한다."
  },
  {
    "id": 15,
    "subCategory": "의미 몰입·과몰입형",
    "text": "핵심보다 배경 설명에 오래 머문다."
  },
  {
    "id": 16,
    "subCategory": "의미 몰입·과몰입형",
    "text": "정답을 맞혀도 설명이 부족하면 불안하다."
  },
  {
    "id": 17,
    "subCategory": "의미 몰입·과몰입형",
    "text": "이해되지 않으면 다음 문제로 넘어가기 어렵다."
  },
  {
    "id": 18,
    "subCategory": "의미 몰입·과몰입형",
    "text": "공부 중 ‘이게 무슨 의미지?’라는 생각을 자주 한다."
  },
  {
    "id": 19,
    "subCategory": "의미 몰입·과몰입형",
    "text": "전체 구조가 잡혀야 마음이 놓인다."
  },
  {
    "id": 20,
    "subCategory": "의미 몰입·과몰입형",
    "text": "정리할 때 요약보다 서술이 길어진다."
  },
  {
    "id": 21,
    "subCategory": "이해 고집형",
    "text": "완전히 이해해야만 시작할 수 있다고 느낀다."
  },
  {
    "id": 22,
    "subCategory": "이해 고집형",
    "text": "설명을 끝까지 들어야 안심된다."
  },
  {
    "id": 23,
    "subCategory": "이해 고집형",
    "text": "조금이라도 이해가 안 되면 다시 돌아간다."
  },
  {
    "id": 24,
    "subCategory": "이해 고집형",
    "text": "공부 속도가 느린 편이다."
  },
  {
    "id": 25,
    "subCategory": "이해 고집형",
    "text": "이해가 부족하면 시도 자체를 미룬다."
  },
  {
    "id": 26,
    "subCategory": "이해 고집형",
    "text": "시험 중 이해 안 되는 문제가 나오면 멈춘다."
  },
  {
    "id": 27,
    "subCategory": "이해 고집형",
    "text": "100% 이해하지 못하면 불안하다."
  },
  {
    "id": 28,
    "subCategory": "이해 고집형",
    "text": "개념 하나에 오래 붙잡혀 있는 편이다."
  },
  {
    "id": 29,
    "subCategory": "이해 고집형",
    "text": "부분 암기보다 이해 위주로 공부한다."
  },
  {
    "id": 30,
    "subCategory": "이해 고집형",
    "text": "설명을 들으면 그 맥락을 다 알고 싶다."
  }
];

const QUESTIONS_STAGE2_CHANGE = [
  {
    "id": 1,
    "subCategory": "즉흥·순간판단형",
    "text": "문제를 보면 끝까지 읽기 전에 답이 떠오른다."
  },
  {
    "id": 2,
    "subCategory": "즉흥·순간판단형",
    "text": "설명을 듣다가 중간에 결론을 내리는 편이다."
  },
  {
    "id": 3,
    "subCategory": "즉흥·순간판단형",
    "text": "첫 느낌이 맞다고 믿는 편이다."
  },
  {
    "id": 4,
    "subCategory": "즉흥·순간판단형",
    "text": "조건을 다 보기 전에 선택하는 경우가 많다."
  },
  {
    "id": 5,
    "subCategory": "즉흥·순간판단형",
    "text": "빠른 판단이 장점이라고 느낀다."
  },
  {
    "id": 6,
    "subCategory": "즉흥·순간판단형",
    "text": "생각보다 행동이 먼저 나간다."
  },
  {
    "id": 7,
    "subCategory": "즉흥·순간판단형",
    "text": "문제를 다시 검토하는 편이 아니다."
  },
  {
    "id": 8,
    "subCategory": "즉흥·순간판단형",
    "text": "비슷해 보이면 같은 답이라고 생각한다."
  },
  {
    "id": 9,
    "subCategory": "즉흥·순간판단형",
    "text": "직관적으로 맞히는 경험이 많다."
  },
  {
    "id": 10,
    "subCategory": "즉흥·순간판단형",
    "text": "문제를 틀려도 왜 틀렸는지 분석하기보다 ‘그냥 감으로 찍은 것 같다’고 생각한다"
  },
  {
    "id": 11,
    "subCategory": "산만·관심 이동형",
    "text": "공부하다가 다른 생각으로 자주 옮겨간다."
  },
  {
    "id": 12,
    "subCategory": "산만·관심 이동형",
    "text": "한 가지에 오래 집중하기 어렵다."
  },
  {
    "id": 13,
    "subCategory": "산만·관심 이동형",
    "text": "여러 과목을 번갈아 공부하는 편이다."
  },
  {
    "id": 14,
    "subCategory": "산만·관심 이동형",
    "text": "흥미가 생기면 깊이 빠진다."
  },
  {
    "id": 15,
    "subCategory": "산만·관심 이동형",
    "text": "지루하면 바로 집중이 깨진다."
  },
  {
    "id": 16,
    "subCategory": "산만·관심 이동형",
    "text": "계획보다 그날 기분에 따라 공부한다."
  },
  {
    "id": 17,
    "subCategory": "산만·관심 이동형",
    "text": "공부 중 휴대폰이나 주변 자극에 민감하다."
  },
  {
    "id": 18,
    "subCategory": "산만·관심 이동형",
    "text": "집중 시간이 들쭉날쭉하다."
  },
  {
    "id": 19,
    "subCategory": "산만·관심 이동형",
    "text": "여러 일을 동시에 벌이는 편이다."
  },
  {
    "id": 20,
    "subCategory": "산만·관심 이동형",
    "text": "정리보다 탐색을 더 좋아한다."
  },
  {
    "id": 21,
    "subCategory": "속도·가벼운 집중형",
    "text": "문제를 빠르게 푸는 편이다."
  },
  {
    "id": 22,
    "subCategory": "속도·가벼운 집중형",
    "text": "속도가 느려지면 답답함을 느낀다."
  },
  {
    "id": 23,
    "subCategory": "속도·가벼운 집중형",
    "text": "빨리 끝내고 다음으로 넘어가고 싶다."
  },
  {
    "id": 24,
    "subCategory": "속도·가벼운 집중형",
    "text": "대충 이해되면 넘어가는 편이다."
  },
  {
    "id": 25,
    "subCategory": "속도·가벼운 집중형",
    "text": "실수는 속도의 대가라고 생각한다."
  },
  {
    "id": 26,
    "subCategory": "속도·가벼운 집중형",
    "text": "문제를 끝까지 확인하지 않을 때가 있다."
  },
  {
    "id": 27,
    "subCategory": "속도·가벼운 집중형",
    "text": "시간 제한이 있으면 집중이 더 잘 된다."
  },
  {
    "id": 28,
    "subCategory": "속도·가벼운 집중형",
    "text": "속도를 유지하는 게 중요하다고 느낀다."
  },
  {
    "id": 29,
    "subCategory": "속도·가벼운 집중형",
    "text": "한 번 흐름이 끊기면 다시 잡기 어렵다."
  },
  {
    "id": 30,
    "subCategory": "속도·가벼운 집중형",
    "text": "빠르게 푸는 날과 아닌 날 차이가 크다."
  },
  {
    "id": 31,
    "subCategory": "속도 과몰입형",
    "text": "집중이 시작되면 주변이 안 보인다."
  },
  {
    "id": 32,
    "subCategory": "속도 과몰입형",
    "text": "한 번 몰입하면 멈추기 어렵다."
  },
  {
    "id": 33,
    "subCategory": "속도 과몰입형",
    "text": "속도가 붙으면 실수도 함께 늘어난다."
  },
  {
    "id": 34,
    "subCategory": "속도 과몰입형",
    "text": "쉬라는 말을 들으면 답답하다."
  },
  {
    "id": 35,
    "subCategory": "속도 과몰입형",
    "text": "에너지가 올라오면 끝까지 가고 싶다."
  },
  {
    "id": 36,
    "subCategory": "속도 과몰입형",
    "text": "중간 점검을 잘 하지 않는다."
  },
  {
    "id": 37,
    "subCategory": "속도 과몰입형",
    "text": "지나치게 몰입한 후 탈진한다."
  },
  {
    "id": 38,
    "subCategory": "속도 과몰입형",
    "text": "컨디션에 따라 집중 강도가 크게 달라진다."
  },
  {
    "id": 39,
    "subCategory": "속도 과몰입형",
    "text": "잘 될 때는 과하게 몰아붙인다."
  },
  {
    "id": 40,
    "subCategory": "속도 과몰입형",
    "text": "집중이 꺼지면 아예 손을 놓는다."
  }
];

const QUESTIONS_STAGE2_ACHIEVEMENT = [
  {
    "id": 1,
    "subCategory": "목표형",
    "text": "공부를 시작할 때 항상 목표 성적이나 등급을 먼저 떠올린다."
  },
  {
    "id": 2,
    "subCategory": "목표형",
    "text": "문제를 풀면서도 결과나 점수를 계산하고 있다."
  },
  {
    "id": 3,
    "subCategory": "목표형",
    "text": "시험 중 전체 성적이 머릿속에 떠오른다."
  },
  {
    "id": 4,
    "subCategory": "목표형",
    "text": "목표가 분명할수록 집중력이 높아진다."
  },
  {
    "id": 5,
    "subCategory": "목표형",
    "text": "지금 문제보다 전체 전략이 더 신경 쓰인다."
  },
  {
    "id": 6,
    "subCategory": "목표형",
    "text": "목표 대비 성과가 안 보이면 불안해진다."
  },
  {
    "id": 7,
    "subCategory": "목표형",
    "text": "중요한 시험일수록 실수가 늘어난다."
  },
  {
    "id": 8,
    "subCategory": "목표형",
    "text": "이 문제는 꼭 맞혀야 한다는 압박을 느낀다."
  },
  {
    "id": 9,
    "subCategory": "목표형",
    "text": "목표에 도움이 안 되면 공부 의욕이 떨어진다."
  },
  {
    "id": 10,
    "subCategory": "목표형",
    "text": "결과가 좋으면 과정은 잘 기억나지 않는다."
  },
  {
    "id": 11,
    "subCategory": "완벽주의형",
    "text": "100% 이해되지 않으면 답을 고르기 불안하다."
  },
  {
    "id": 12,
    "subCategory": "완벽주의형",
    "text": "이미 고른 답을 다시 바꾸는 편이다."
  },
  {
    "id": 13,
    "subCategory": "완벽주의형",
    "text": "애매하게 맞는 것이 싫다."
  },
  {
    "id": 14,
    "subCategory": "완벽주의형",
    "text": "한 문제에 오래 붙잡힌다."
  },
  {
    "id": 15,
    "subCategory": "완벽주의형",
    "text": "모든 선택지를 설명해야 안심된다."
  },
  {
    "id": 16,
    "subCategory": "완벽주의형",
    "text": "검산이나 재확인을 여러 번 한다."
  },
  {
    "id": 17,
    "subCategory": "완벽주의형",
    "text": "맞았어도 찜찜한 문제가 기억에 남는다."
  },
  {
    "id": 18,
    "subCategory": "완벽주의형",
    "text": "완전히 이해하지 못하면 넘어가기 어렵다."
  },
  {
    "id": 19,
    "subCategory": "완벽주의형",
    "text": "시험 시간이 늘 부족하다."
  },
  {
    "id": 20,
    "subCategory": "완벽주의형",
    "text": "답을 바꿔서 틀린 경험이 많다."
  },
  {
    "id": 21,
    "subCategory": "감정형",
    "text": "시험이 가까워질수록 불안이 커진다."
  },
  {
    "id": 22,
    "subCategory": "감정형",
    "text": "시험장에서 평소보다 실력이 안 나온다."
  },
  {
    "id": 23,
    "subCategory": "감정형",
    "text": "한 문제를 틀렸다고 느끼면 이후가 흔들린다."
  },
  {
    "id": 24,
    "subCategory": "감정형",
    "text": "시험 후 말수가 줄어든다."
  },
  {
    "id": 25,
    "subCategory": "감정형",
    "text": "어려워 보이면 피하고 싶어진다."
  },
  {
    "id": 26,
    "subCategory": "감정형",
    "text": "감정이 흔들리면 집중이 어렵다."
  },
  {
    "id": 27,
    "subCategory": "감정형",
    "text": "감정 상태에 따라 성적 기복이 크다."
  },
  {
    "id": 28,
    "subCategory": "감정형",
    "text": "시험 전 걱정으로 잠을 설치는 편이다."
  },
  {
    "id": 29,
    "subCategory": "감정형",
    "text": "시험 중 ‘망했다’는 생각이 든다."
  },
  {
    "id": 30,
    "subCategory": "감정형",
    "text": "긴장하지 않으면 실력이 더 잘 나온다."
  },
  {
    "id": 31,
    "subCategory": "기복형",
    "text": "컨디션에 따라 공부 효율 차이가 크다."
  },
  {
    "id": 32,
    "subCategory": "기복형",
    "text": "어떤 날은 잘 풀리고 어떤 날은 헷갈린다."
  },
  {
    "id": 33,
    "subCategory": "기복형",
    "text": "시험 성적의 편차가 크다."
  },
  {
    "id": 34,
    "subCategory": "기복형",
    "text": "공부 루틴이 일정하지 않다."
  },
  {
    "id": 35,
    "subCategory": "기복형",
    "text": "잘 될 때 몰아서 공부한다."
  },
  {
    "id": 36,
    "subCategory": "기복형",
    "text": "안 될 때는 아예 쉬어버린다."
  },
  {
    "id": 37,
    "subCategory": "기복형",
    "text": "시험 당일 컨디션이 중요하다."
  },
  {
    "id": 38,
    "subCategory": "기복형",
    "text": "문제 풀이 순서가 매번 다르다."
  },
  {
    "id": 39,
    "subCategory": "기복형",
    "text": "같은 유형 문제를 들쭉날쭉 틀린다."
  },
  {
    "id": 40,
    "subCategory": "기복형",
    "text": "‘오늘 상태만 좋았어도’라는 생각을 자주 한다."
  }
];


const REPORTS = {
  "변화형-산만·관심 이동형": {
    "isTextBased": true,
    "mainCategory": "변화형",
    "subCategory": "산만·관심 이동형",
    "title": "변화형 - 산만·관심 이동형",
    "badge": "산만·관심 이동형 전문 유형",
    "summary": "한 가지에 묶이기보다 빠르게 전환하며 여러 정보를 처리하는 능력이 뛰어난 유형입니다.",
    "strengths": [
      "• 다양한 정보를 빠르게 받아들입니다.",
      "• 새로운 상황에 빠르게 적응합니다",
      "• 사고 전함이 유연합니다.",
      "\" 전환 속도와 적응력이 강한 유형\"입니다"
    ],
    "stagnation": [
      "이 학생은 능력이 부족한 것이 아닙니다",
      "전환 기준 없이 사고가 이동하는 구조입니다 .",
      "• 한 문제를 끝내기 전에 다른 문제로 이동",
      "• 여러 개를 동시에 건드립니다",
      "• 시작은 많지만 완료가 적습니다",
      "그 결과",
      "• 공부는 했지만 남는 것이 없고",
      "• 성과가 쌓이지 않으며",
      "• 시험에서도 완성도가 떨어집니다",
      "즉",
      "문제는 집중력이 아니라 `완료 기준 부재` 입니다.",
      "이 학생은 더 집중시키는 것이 아니라",
      "끝내는 구조를 만들어야 합니다.",
      "완료기준에 따라 학습하는 방식을 체득해야합니다."
    ],
    "dangerousTitle": "이 유형에게\n가장 위험한 학습 방식은",
    "dangerousBody": "• 접종해라\"는 반복 요구\n • 한 문제를 끝까지 붙잡기 하는 지도\n• 여러 과목/문제를 동시에 진행하는 방식\n\n\n이 방식은 성장을 만드는 것이 아니라 이탈을 더 빠르게\n만드는 구조입니다.",
    "coreStrategies": [
      {
        "num": "①",
        "head": "핵심 전략 ① : 관제 단위 분할",
        "desc": "• 문제 3~5개 단위로 학습"
      },
      {
        "num": "②",
        "head": "핵심 전략 ② : 완료 후 이동",
        "desc": "• 이거 끝내고 다음\n• 중간 이동 금지"
      },
      {
        "num": "③",
        "head": "핵심 전략 ③ : 한 번에 하나만 수행",
        "desc": "• 동시에 여러 개 X\n• 하나 완료 후 전환 ⃝"
      }
    ],
    "oneLineBody": "이 학생은 집중을 못하는 아이가 아닙니다 \n끝내지 못하는 아이입니다\n\n완료 기준만 생기면 \n산만∙관심이동형은\n가장 빠르게 성적이 상승하는 유형입니다",
    "oneLineHighlight": "집중시키지 마세요 \n끝내게 만들어 주세요",
    "exactOneLineSummaryRaw": "이 학생은 집중을 못하는 아이가 아닙니다 \n끝내지 못하는 아이입니다\n\n완료 기준만 생기면 \n산만∙관심이동형은\n가장 빠르게 성적이 상승하는 유형입니다\n\n집중시키지 마세요 \n끝내게 만들어 주세요"
  },
  "변화형-속도·가벼운 집중형": {
    "isTextBased": true,
    "mainCategory": "변화형",
    "subCategory": "속도·가벼운 집중형",
    "title": "변화형 - 속도·가벼운 집중형",
    "badge": "속도·가벼운 집중형 전문 유형",
    "summary": "짧은 시간 안에 빠르게 집중하는 즉각적인 몰입력과 처리 속도가 뛰어난 유형입니다",
    "strengths": [
      "• 집중 진입 속도가 매우 다릅니다.",
      "• 짧은 시간에 많은 내용을 처리합니다",
      "• 부담 없이 바로 시작할 수 있습니다.",
      "\" 짧고 강한 집중력이 강점인 유형\"입니다"
    ],
    "stagnation": [
      "이 학생은 능력이 부족한 것이 아닙니다",
      "짧은 집중을 연결하지 못하는 구조입니다.",
      "• 오래 집중하려다 중간에 끊김니다",
      "• 집중이 끊기면 다시 시작하지 않습니다",
      "• 몰입을 이어가지 못합니다",
      "그 결과",
      "• 공부량 대비 성과가 낮고",
      "• 시험 후반으로 갈수록 무너집니다",
      "즉",
      "문제는 집중 부족이 아니라 '연결 구조 부재’입니다",
      "이 유형은 더 오래 하는 것이 아니라",
      "짧은 집중을 여러 번 반복하는 연습을 해야 합니다"
    ],
    "dangerousTitle": "이 유형에게\n가장 위험한 학습 방식은",
    "dangerousBody": "• \"오래 앉아 있어라\"는 장시간 학습\n • 한 번에 끝내려는 방식\n• 집중이 짧다는 지적\n\n\n이 방식은 성장을 만드는 것이 아니라\n\n몰입 자체를 \n포기하게 만드는 \n구조입니다",
    "coreStrategies": [
      {
        "num": "①",
        "head": "핵심 전략 ① : 짧은 단위 학습",
        "desc": "• 10~15분 집중"
      },
      {
        "num": "②",
        "head": "핵심 전략 ② : 반복 구조",
        "desc": "• 끊고 → 다시 시작\n여러 번 반복"
      },
      {
        "num": "③",
        "head": "핵심 전략 ③ : 집중 횟수 늘리기",
        "desc": "• 얼마나 오래  X\n• 몇 번 집중했는가 ⃝"
      }
    ],
    "oneLineBody": "이 학생은 집중을 못하는 아이가 아닙니다\n 집중을 이어가지 못하는 아이입니다\n\n짧은 집중을 반복하면 \n속도ㆍ가벼운 집중형은\n가장 빠르게 성적이 상승하는 유형입니다.",
    "oneLineHighlight": "오래 하게 하지 마세요 \n여러 번 하게 만들어 주세요.",
    "exactOneLineSummaryRaw": "이 학생은 집중을 못하는 아이가 아닙니다\n 집중을 이어가지 못하는 아이입니다\n\n짧은 집중을 반복하면 \n속도ㆍ가벼운 집중형은\n가장 빠르게 성적이 상승하는 유형입니다.\n\n오래 하게 하지 마세요 \n여러 번 하게 만들어 주세요."
  },
  "변화형-속도 과몰입형": {
    "isTextBased": true,
    "mainCategory": "변화형",
    "subCategory": "속도 과몰입형",
    "title": "변화형 - 속도 과몰입형",
    "badge": "속도 과몰입형 전문 유형",
    "summary": "한 번 몰입이 시작되면 빠른 속도로 깊게 파고드는 강한 집중력을 가진 유형입니다.",
    "strengths": [
      "• 집중이 시작되면 몰입도가 매우 높습니다.",
      "• 어려운 문제에도 끝까지 도전합니다.",
      "• 몰입 상태에서 성과가 크게 올라갑니다.",
      "\"몰입 시 폭발력이 가장 강한 유형\"입니다."
    ],
    "stagnation": [
      "이 학생은 능력이 부족한 것이 아닙니다.",
      "멈추지 못해서 무너지는 구조입니다.",
      "• 한 문제에 과도하게 시간을 사용합니다.",
      "• 어려운 문제를 계속 붙잡습니다.",
      "• 시간 배분이 무너집니다.",
      "그 결과",
      "• 쉬운 문제를 놓치고",
      "• 뒤로 갈수록 시간 부족이 발생하며",
      "• 시험에서 성적이 크게 흔들립니다.",
      "즉,",
      "문제는 집중 부족이 아니라 '멈춤 기준 부재’입니다.",
      "이 학생은 더 집중하는 것이 아니라",
      "멈춤 기준을 세우고 적용하는 연습이 필요합니다."
    ],
    "dangerousTitle": "이 유형에게\n가장 위험한 학습 방식은",
    "dangerousBody": "• \"끝까지 풀어야지\"\n• \"포기하지 마 \"\n• '이 문제 꼭 잡고 가자\"\n\n이 방식은 성장을 만드는 것이 아니라\n\n 시간을 \n무너뜨리는 구조입니다.",
    "coreStrategies": [
      {
        "num": "①",
        "head": "핵심 전략 ① : 문제당 시간 제한 설정",
        "desc": "• 일정 시간 지나면 이동"
      },
      {
        "num": "②",
        "head": "핵심 전략 ② : 강제 이동 구조",
        "desc": "• 조금만 더  X\n• 바로 다음 문제 ⃝"
      },
      {
        "num": "③",
        "head": "핵심 전략 ③ : 2차접근 방식",
        "desc": "• 어려운 문제 표시\n• 마지막에 다시 풀이"
      }
    ],
    "oneLineBody": "이 학생은 집중을 못하는 아이가 아닙니다\n 멈추지 못하는 아이입니다.\n\n멈추는 기준만 생기면 \n속도ㆍ과몰입형은\n가장 빠르게 성적이 상승하는 유형입니다.",
    "oneLineHighlight": "더 집중하게 하지 마세요. \n멈추게 만들어 주세요.",
    "exactOneLineSummaryRaw": "이 학생은 집중을 못하는 아이가 아닙니다\n 멈추지 못하는 아이입니다.\n\n멈추는 기준만 생기면 \n속도ㆍ과몰입형은\n가장 빠르게 성적이 상승하는 유형입니다.\n\n더 집중하게 하지 마세요. \n멈추게 만들어 주세요."
  },
  "변화형-즉흥·순간판단형": {
    "isTextBased": true,
    "mainCategory": "변화형",
    "subCategory": "즉흥·순간판단형",
    "title": "변화형 - 즉흥·순간판단형",
    "badge": "즉흥·순간판단형 전문 유형",
    "summary": "고민보다 반응이 빠른 즉각적인 판단력과 속도가 뛰어난 유형입니다.",
    "strengths": [
      "• 문제 접근 속도가 매우 부릅니다",
      "• 직관적으로 핵심을 잡는 능력이 있습니다",
      "• 시간 안에 많은 문제를 처리할 수 있습니다.",
      "\"속도와 반응력이 가장 강한 유형\"입니다."
    ],
    "stagnation": [
      "이 학생은 능력이 부족한 것이 아닙니다",
      "판단 기준 없이 빠르게 선택하는 구조입니다",
      "• 문제를 끝까지 읽기 전에 답을 고릅니다",
      "• \"이거 같은데?\" 느낌으로 선택합니다.",
      "• 검토 없이 다음 문제로 이동합니다",
      "그 결과",
      "•  실수가 반복되고",
      "• 정확도가 떨어지며",
      "• 성적이 불안정해집니다",
      "즉,",
      "문제는 실력이 아니라 ’ 판단 기준 부재’입니다",
      "이 유형은 더 천천히 하는 것이 아니라",
      "판단 기준을 추가해야 합니다."
    ],
    "dangerousTitle": "이 유형에게\n가장 위험한 학습 방식은",
    "dangerousBody": "• ＂빨리 풀어봐 식 속도 강조\n • 문제 수만 늘리는 학습 \n• 검토 없이 계속 푸는 방식\n\n이 방식은 성장을 만드는 것이 아니라\n\n오답 속도를\n더 빠르게 만드는 \n구조입니다.",
    "coreStrategies": [
      {
        "num": "①",
        "head": "핵심 전략 ① : 문제 풀이 전 기준 1개 설정",
        "desc": "• '근거 하나 확인 후 답 선택 ‘"
      },
      {
        "num": "②",
        "head": "핵심 전략 ② : 선택 후 이유 확인",
        "desc": "• 답 고른 뒤\n\"왜 이 답인지 한 번 확인”"
      },
      {
        "num": "③",
        "head": "핵심 전략 ③ : 검토 문제 확보",
        "desc": "• 하루 최소 3문제는\n→ 반드시 검토까지 진행"
      }
    ],
    "oneLineBody": "이 학생은 공부를 못하는 아이가 아닙니다. \n기준 없이 빠르게 선택하는 아이입니다.\n\n기준만 추가되면 \n즉흥ㆍ순간판단형은\n가장 빠르게 성적이 상승하는 유형입니다.",
    "oneLineHighlight": "속도를 줄이지 마세요 \n기준을 넘어주세요.",
    "exactOneLineSummaryRaw": "이 학생은 공부를 못하는 아이가 아닙니다. \n기준 없이 빠르게 선택하는 아이입니다.\n\n기준만 추가되면 \n즉흥ㆍ순간판단형은\n가장 빠르게 성적이 상승하는 유형입니다.\n\n속도를 줄이지 마세요 \n기준을 넘어주세요."
  },
  "성취형-감정형": {
    "isTextBased": true,
    "mainCategory": "성취형",
    "subCategory": "감정형",
    "title": "성취형 - 감정형",
    "badge": "감정형 전문 유형",
    "summary": "감정이 동기와 연결될 가장 강한 몰입과 집중력을 발휘하는 유형입니다.",
    "strengths": [
      "• 하고 싶은 마음이 생기면 폭발적으로 집증합니다.",
      "• 감정이 붙으면 실행력이 매우 강합니다",
      "• 성취 경험이 쌓이면 빠르게 성장합니다",
      "\"동기가 살아나면 가장 강한 유형\"입니다."
    ],
    "stagnation": [
      "이 학생은 능력이 부족한 것이 아닙니다.",
      "감정 상태에 따라 학습이 크게 흔들리는 구조입니다.",
      "• 기분에 따라 공부량이 달라집니다",
      "• 잘 될 때와 안 될 때 차이가 큽니다.",
      "• 결과에 감정이 크게 반응합니다.",
      "그 결과",
      "• 꾸준함이 유지되지 않고",
      "• 성적이 들쭉날쭉하며",
      "• 안정적인 성장으로 이어지지 않습니다.",
      "문제는 의지가 아니라 '감정 의존 구조 ' 입니다.",
      "이 학생은 더 강하게 밀어붙이는 것이 아니라",
      "감정과 분리된 실행 구조를 만들고 적용해야합니다."
    ],
    "dangerousTitle": "이 유형에게\n가장 위험한 학습 방식은",
    "dangerousBody": "• \"기분에 상관없이 해야지 \"\n• \" 왜 이렇게 기복이 심해? \"\n• 감정을 무시하는 지도\n\n이 방식은 성장을 만드는 것이 아니라\n\n학습 자체를 \n더 흔들리게 만드는 \n구조입니다.",
    "coreStrategies": [
      {
        "num": "①",
        "head": "핵심 전략 ① : 루틴 고정",
        "desc": "• 같은 시간,\n같은 방식 반복"
      },
      {
        "num": "②",
        "head": "핵심 전략 ② : 작은 목표 설정",
        "desc": "• 부담 없는 목표부터 시작"
      },
      {
        "num": "③",
        "head": "핵심 전략 ③ : 감정과 행동 분리",
        "desc": "• \"기분 상관없이 이것만 한다 \""
      }
    ],
    "oneLineBody": "이 학생은 의지가 약한 아이가 아닙니다. \n감정에 따라 움직이는 아이입니다.\n\n루틴만 안정되면\n감정형은\n가장 빠르게 성적이 상승하는 유형입니다.",
    "oneLineHighlight": "기분에 맡기지 마세요.\n루틴으로 고정하세요.",
    "exactOneLineSummaryRaw": "이 학생은 의지가 약한 아이가 아닙니다. \n감정에 따라 움직이는 아이입니다.\n\n루틴만 안정되연\n감정형은\n가장 빠르게 성적이 상승하는 유형입니다.\n\n기분에 맡기지 마세요.\n루틴으로 고정하세요."
  },
  "성취형-기복형": {
    "isTextBased": true,
    "mainCategory": "성취형",
    "subCategory": "기복형",
    "title": "성취형 - 기복형",
    "badge": "기복형 전문 유형",
    "summary": "한 번 흐름을 타면 짧은 시간 안에 높은 성과를 만들어내는 유형입니다.",
    "strengths": [
      "• 집중이 붙을 때 성과가 크게 올라갑니다.",
      "• 성취 경험이 쌓이면 폭발적으로 성장합니다. .",
      "• 경쟁 상황에서 강한 힘을 발휘합니다.",
      "\"상승 시 폭발력이 가장 큰 유형\"입니다."
    ],
    "stagnation": [
      "이 학생은 능력이 부족한 것이 아닙니다.",
      "성과에 따라 학습이 크게 흔들리는 구조입니다.",
      "• 잘 되면 과하게 몰입합니다.",
      "• 안 되면 급격히 포기합니다.",
      "• 결과에 따라 태도가 달라집니다",
      "그 결과",
      "• 공부 흐름이 끊기고",
      "• 꾸준함이 유지되지 않으며",
      "• 성적이 크게 들쭉날쭉합니다",
      "즉",
      "문제는 의지가 아니라 '성과 의존 구조'입니다.",
      "이 학생은 더 잘하게 하는 것이 아니라",
      "루틴 고정으로 흐름을 일정하게 만드는 것이 중요합니다."
    ],
    "dangerousTitle": "이 유형에게\n가장 위험한 학습 방식은",
    "dangerousBody": "• \"이번엔 꼭 잘 해야지 \"\n• \"결과가 중요하다'\n• 성과 중심 압박\n\n이 방식은 성장을 만드는 것이 아니라\n\n기복을 더 크게 만드는\n구조입니다.",
    "coreStrategies": [
      {
        "num": "①",
        "head": "핵심 전략 ① : 루틴 고정",
        "desc": "• 결과와 상관없이\n동일한 학습 반복"
      },
      {
        "num": "②",
        "head": "핵심 전략 ② : 성과와 분리된 기준 설정",
        "desc": "• \"오늘은 이만큼만 한다 \""
      },
      {
        "num": "③",
        "head": "핵심 전략 ③ : 작은 성공 누적",
        "desc": "• 큰 성과 X\n• 안정적 반복⃝"
      }
    ],
    "oneLineBody": "이 학생은 의지가 약한 아이가 아닙니다. \n성과에 따라 흔들리는 아이입니다.\n\n흐름만 안정되면\n기복형은\n가장 빠르게 성적이 상승하는 유형입니다.",
    "oneLineHighlight": "결과에 흔들리지 마세요.\n 흐름을 유지하세요.",
    "exactOneLineSummaryRaw": "이 학생은 의지가 약한 아이가 아닙니다. \n성과에 따라 흔들리는 아이입니다.\n\n흐름만 안정되면\n기복형은\n가장 빠르게 성적이 상승하는 유형입니다.\n\n결과에 흔들리지 마세요.\n 흐름을 유지하세요."
  },
  "성취형-목표형": {
    "isTextBased": true,
    "mainCategory": "성취형",
    "subCategory": "목표형",
    "title": "성취형 - 목표형",
    "badge": "목표형 전문 유형",
    "summary": "목표가 분명해지면 가장 강한 추진력으로 결과를 만들어내는 유형입니다.",
    "strengths": [
      "• 목표가 있을 때 집중력이 폭발적으로 올라갑니다.",
      "• 실행 속도가 빠르고 결과 지향적입니다.",
      "• 단기간 성과를 만들어내는 힘이 있습니다.",
      "\" 목표가 보이면 가장 감한 유형\"입니다."
    ],
    "stagnation": [
      "이 학생은 능력이 부족한 것이 아닙니다.",
      "목표가 없거나 불분명한 상태에서 학습하고 있기 때문입니다.",
      "• \"열심히 해야지' 같은 추상적 목표만 있습니다.",
      "• 장기 목표만 있고 단기 목표가 없습니다",
      "• 끝이 보이지 않는 학습 구조에 부담을 느낍니다",
      "그 결과",
      "• 시작이 늦어지고",
      "• 집중이 들쭉날쭉하며",
      "• 꾸준함이 유지되지 않습니다.",
      "즉,",
      "문제는 의지가 아니라 '목표 부재'입니다",
      "이 학생은 더 노력하게 하는 것이 아니라",
      "명학한 목표를 세우고 달성하는 연습이 필요합니다."
    ],
    "dangerousTitle": "이 유형에게\n가장 위험한 학습 방식은",
    "dangerousBody": "• \" 꾸준히 혜라 \"는 지도\n• 과정 중심 강조 \n• 장기 계획만 제시하는 방식\n\n이 방식은 성장을 만드는 것이 아니라\n\n동기를 떨어뜨리는\n구조입니다.",
    "coreStrategies": [
      {
        "num": "①",
        "head": "핵심 전략 ① : 하루 목표 1개 설정",
        "desc": "• \"오늘 이것 하나만 끝낸다 \""
      },
      {
        "num": "②",
        "head": "핵심 전략 ② : 종료 기준 명학화",
        "desc": "• \" 여기까지 하면 끝 \""
      },
      {
        "num": "③",
        "head": "핵심 전략 ③ : 즉각적인 성취 확인",
        "desc": "• 목표 달성 → 바로 인정"
      }
    ],
    "oneLineBody": "이 학생은 의지가 약한 아이가 아닙니다. \n목표가 없으면 움직이지 않는 아이입니다.\n\n목표만 명확해지면\n목표형은\n가장 빠르게 성적이 상승하는 유형입니다",
    "oneLineHighlight": "더 열심히 하라고 하지 마세요.\n끝을 보여주세요.",
    "exactOneLineSummaryRaw": "이 학생은 의지가 악한 아이가 아닙니다. \n목표가 없으면 움직이지 않는 아이입니다.\n\n목표만 명확해지면\n목표형은\n가장 빠르게 성적이 상승하는 유형입니다\n\n더 열심히 하라고 하지 마세요.\n끝을 보여주세요."
  },
  "성취형-완벽주의형": {
    "isTextBased": true,
    "mainCategory": "성취형",
    "subCategory": "완벽주의형",
    "title": "성취형 - 완벽주의형",
    "badge": "완벽주의형 전문 유형",
    "summary": "결과에 대한 기준이 높고 완성도를 끝까지 끌어올리는 힘이 있는 유형입니다.",
    "strengths": [
      "• 목표 달성 의지가 매우 강합니다",
      "• 결과에 대한 책임감이 큽니다",
      "• 한 번 몰입하면 완성도가 높습니다",
      "\"결과의 질을 끝까지 끌어올리는 유형\"입니다."
    ],
    "stagnation": [
      "이 학생은 능력이 부족한 것이 아닙니다.",
      "완벽하지 않으면 시작하거나 끝내지 않는 구조입니다",
      "• '완벽하게 해야 한다\"는 부담을 크게 느낍니다.",
      "• 틀릴 가능성 자체를 회피하고 싶어 합니다.",
      "• 기준이 높아 실행이 늦어집니다",
      "그 결과",
      "• 시작이 지연되고",
      "• 속도가 떨어지며",
      "• 결과가 불안정해집니다.",
      "즉,",
      "문제는 실력이 아니라 ＇완벽 기준 과다＇입니다.",
      "이 학생은 더 잘하게 하는 것이 아니라",
      "완료기준을 낮추는 연습이 필요합니다."
    ],
    "dangerousTitle": "이 유형에게\n가장 위험한 학습 방식은",
    "dangerousBody": "• \"더 잘 해야지 \" \n•  \"완벽하게 해\"\n• 높은 기준만 계속 요구 \n\n이 방식은 성장을 만드는 것이 아니라\n\n실행 자체를 막는\n 구조입니다.",
    "coreStrategies": [
      {
        "num": "①",
        "head": "핵심 전략 ① : 완료 기준 낮추기",
        "desc": "• \"이 정도면 충분\" 설정"
      },
      {
        "num": "②",
        "head": "핵심 전략 ② : 시간 제한 적용",
        "desc": "• 일정 시간 후 무조건 종료"
      },
      {
        "num": "③",
        "head": "핵심 전략 ③ : 부분 성공 인정",
        "desc": "• 완벽 X\n• 완료 ⃝"
      }
    ],
    "oneLineBody": "이 학생은 부족한 아이가 아닙니다. \n완벽하려다 멈추는 아이입니다.\n\n완료 기준만 낮아지면 \n완벽주의형은\n가장 빠르게 성적이 상승하는 유형입니다.",
    "oneLineHighlight": "더 잘하게 하지 마세요.\n끝내게 만들어 주세요.",
    "exactOneLineSummaryRaw": "이 학생은 부족한 아이가 아닙니다. \n완벽하려다 멈추는 아이입니다.\n\n완료 기준만 낮아지면 \n완벽주의형은\n가장 빠르게 성적이 상승하는 유형입니다.\n\n더 잘하게 하지 마세요.\n끝내기 만들어 주세요."
  },
  "안정형-구조·패턴 고정형": {
    "isTextBased": true,
    "mainCategory": "안정형",
    "subCategory": "구조·패턴 고정형",
    "title": "안정형 - 구조·패턴 고정형",
    "badge": "구조·패턴 고정형 전문 유형",
    "summary": "한 번 기준이 잡히면 가장 안정적으로 성적이 상승하는 유형입니다.",
    "strengths": [
      "• 반복과 구조 속에서 실력이 빠르게 쌓입니다.",
      "• 실수율이 낮고 정확도가 높습니다.",
      "• 꾸준함이 성적으로 연결되는 구조입니다.",
      "“흔들리지 않으면 가장 감한 유형\"입니다."
    ],
    "stagnation": [
      "능력이 부족한 것이 아닙니다",
      "기준 없이 시작하려 하기 때문에 멈추는 상태입니다.",
      "문제를 보자마자 구조 확인 없이 바로 풀려고 합니다.",
      "이러한 접근 방식은 “이게 맞나? \"하는 불안감을 키우고",
      "그 결과",
      "• 속도가 느려지고",
      "• 시작이 늦어지며",
      "• 실수보다 '멈춤'이 더 많이 발생합니다.",
      "즉,",
      "문제는 실력이 아니라 '시작 기준 부재’입니다",
      "이 유형은 공부를 더 하는 것이 아니라",
      "방식을 바꿔야 성적이 오릅니다",
      "구조를 확인하는 방식부터 체득해야합니다."
    ],
    "dangerousTitle": "이 유형에게\n가장 위험한 학습 방식은",
    "dangerousBody": "• 문제를 많이 풀게 하는 방식 \n• 속도를 올리라고 하는 지도 \n• 빨리 해라\"는 압박\n\n이 방식은\n성장을 만드는 것이 아니라 \n사고를 더 \n멈추게 만드는 구조 \n입니다.",
    "coreStrategies": [
      {
        "num": "①",
        "head": "핵심 전략 ① : 문제 풀이 전 구조 먼저 확인",
        "desc": "• \"이 문제는 어떤 유형인가?\"\n• \"어떤 방식으로 풀어야 하는가?\n이 질문이 먼저 나와야 합니다"
      },
      {
        "num": "②",
        "head": "핵심 전략 ② : 같은 흐름 반복",
        "desc": "• 개념 →  예제 → 유사문제\n• 이 순서를 항상 동일하게 유지\n바뀌지 않는 구조가 중요합니다"
      },
      {
        "num": "③",
        "head": "핵심 전략 ③ : 완료 기준 설정",
        "desc": "• \"이 정도면 충분하다 기준 만들기\n• 완벽하려다 멈추는 것을 방지"
      }
    ],
    "oneLineBody": "이 학생은 느린 아이가 아닙니다\n기준이 없으면 시작하지 않는 아이입니다. \n기준만 먼저 잡아주면\n안정형 구조·패턴 고정형은\n가장 꾸준하게 성적이 오르는 유형입니다.",
    "oneLineHighlight": "",
    "exactOneLineSummaryRaw": "이 학생은 느린 아이가 아닙니다\n기준이 없으면 시작하지 않는 아이입니다. \n기준만 먼저 잡아주면\n안정형 구조∙패턴 고정형은\n가장 꾸준하게 성적이 오르는 유형입니다."
  },
  "안정형-꼼꼼·완벽주의형": {
    "isTextBased": true,
    "mainCategory": "안정형",
    "subCategory": "꼼꼼·완벽주의형",
    "title": "안정형 - 꼼꼼·완벽주의형",
    "badge": "꼼꼼·완벽주의형 전문 유형",
    "summary": "한 번 이해한 내용을 가장 정학하게 완성해내는 유형입니다.",
    "strengths": [
      "• 실수율이 매우 낫습니다",
      "•  디테일을 놓치지 않습니다",
      "• 한 번 잡은 개념은 무너지지 않습니다",
      "“완성도가 가장 높은 유형\"입니다.."
    ],
    "stagnation": [
      "능력이 부족한 것이 아닙니다.",
      "완벽하게 하려다 시작이 늦어지는 구조입니다.",
      "• 완벽하게 이해하고 시작하려 합니다.",
      "• '틀리면 안 된다’ 는 부담을 크게 느낍니다",
      "작은 오류도 지나치게 신경 쓰다보면 결과적으로",
      "• 시작이 늦어지고",
      "• 속도가 떨어지며",
      "• 전체 진도가 밀립니다",
      "즉,",
      "문제는 실력이 아니라 '완료 기준 부재'입니다.",
      "이 유형은 더 정확하게 하는 것이 아니라",
      "덜 완벽하게 끝내는 연습이 필요합니다",
      "명확한 완료 기준을 세우고",
      "끝낼줄 아는 기술을 체득해야합니다."
    ],
    "dangerousTitle": "이 유형에게\n가장 위험한 학습 방식은",
    "dangerousBody": "• 완벽 이해를 요구하는 학습 \n• 틀린 문제를 오래 붙잡는 방식\n• \"다 맞춰야 한다\"는 압박\n\n이 방식은 성장을 만드는 것이 아니라 실행을\n멈추게 만드는 \n구조 입니다.",
    "coreStrategies": [
      {
        "num": "①",
        "head": "핵심 전략 ① : 완료 기준 먼저 설정",
        "desc": "• \"이 정도면 넘어간다“\n기준 만들기\n• 완벽 대신 완료'를 우선"
      },
      {
        "num": "②",
        "head": "핵심 전략 ② : 시간 제한 적용",
        "desc": "• 문제당 시간 설정\n• 일정 시간 지나면 다음 문제\n멈추지 않게 하는 구조"
      },
      {
        "num": "③",
        "head": "핵심 전략 ③ : 오답을 '수정'이 아닌",
        "desc": "'통과' 기준으로 관리\n• 틀린 문제 오래 붙잡기 X\n• 표시 후 다음으로 이동 ⃝"
      }
    ],
    "oneLineBody": "이 학생은 느린 아이가 아닙니다 \n완벽에 이르지 못하면 멈추는 아이입니다\n\n완료 기준만 생기면\n 꼼꼼-완벽주의형은\n가장 안정적으로 성적이 상승하는 유형입니다.",
    "oneLineHighlight": "완벽하게 하지 마세요. \n끝내게 만들어 주세요.",
    "exactOneLineSummaryRaw": "이 학생은 느린 아이가 아닙니다 \n완벽에 이르지 못하면 멈추는 아이입니다\n\n완료 기준만 생기면\n 꼼꼼-완벽주의형은\n가장 안정적으로 성적이 상승하는 유형입니다.\n\n완벽하게 하지 마세요. \n끝내게 만들어 주세요.."
  },
  "안정형-신중·느린 정확형": {
    "isTextBased": true,
    "mainCategory": "안정형",
    "subCategory": "신중·느린 정확형",
    "title": "안정형 - 신중·느린 정확형",
    "badge": "신중·느린 정확형 전문 유형",
    "summary": "급하게 판단하지 않고 끝까지 정확하게 확인하는 힘이 있는 유형입니다.",
    "strengths": [
      "• 실수가 매우 적습니다.",
      "• 검토 능력이 뛰어납니다.",
      "• 안정적인 사고 흐름을 유지합니다 .",
      "\"흔들리지 않는 정확성\"이 강점인 유형입니다."
    ],
    "stagnation": [
      "능력이 부족한 것이 아닙니다.",
      "확인 과정이 길어져 실행 속도가 늦어지는 구조입니다.",
      "• 한 문제를 여러 번 확인합니다.",
      "• 확신이 생길 때까지 넘어가지 않습니다.",
      "이렇게 판단을 계속 미루는 결함으로 인해",
      "• 시간 소모가 많아지고",
      "• 문제 수를 충분히 처리하지 못하며",
      "• 시험에서 뒤로 갈수록 무너집니다.",
      "즉,",
      "문제는 실력이 아니라 판단 종료 지연'입니다.",
      "이 유형은 더 신중해질 필요가 아니라",
      "판단을 끝내는 연습이 필요합니다.",
      "명학한 판단 종료의 기준을 세워야합니다."
    ],
    "dangerousTitle": "이 유형에게\n가장 위험한 학습 방식은",
    "dangerousBody": "• 문제를 많이 풀게 하는 방식\n• 속도를 올리라고 하는 지도 \n• “빨리 해라”는 압박\n\n이 방식은 \n성장을 만드는 것이 아니라 \n사고를 더\n멈추게 만드는 구조\n입니다.",
    "coreStrategies": [
      {
        "num": "①",
        "head": "핵심 전략 ① : 판단종료 기준 설정",
        "desc": "• “한번 확인하면 끝”\n• 반복 확인 금지"
      },
      {
        "num": "②",
        "head": "핵심 전략 ② : 시간제한 적용",
        "desc": "• 문제당 시간 고정\n• 시간지나면 다음문제로 이동"
      },
      {
        "num": "③",
        "head": "핵심 전략 ③ : 검토 횟수 제한",
        "desc": "• 검토는 1회만\n• 반복검토 금지"
      }
    ],
    "oneLineBody": "이 학생은 느린 아이가 아닙니다. \n판단을 끝내지 못하는 아이입니다.\n\n신중·느린 정확형은 판단 종료 기준만 생기면 \n가장 안정적으로 성적이 올라가는 유형입니다.",
    "oneLineHighlight": "더 확인하게 하지 마세요. \n결정하게 만들어 주세요.",
    "exactOneLineSummaryRaw": "이 학생은 느린 아이가 아닙니다. \n판단을 끝내지 못하는 아이입니다.\n\n신중 ·느린 정학형은 판단 종료 기준만 생기면 \n가장 안정적으로 성적이 올라가는 유형입니다.\n\n더 확인하게 하지 마세요. \n결정하게 만들어 주세요."
  },
  "의미형-감정·공감 우세형": {
    "isTextBased": true,
    "mainCategory": "의미형",
    "subCategory": "감정·공감 우세형",
    "title": "의미형 - 감정·공감 우세형",
    "badge": "감정·공감 우세형 전문 유형",
    "summary": "의미를 느끼고 연결할 때 가장 강하게 성장하는 유형입니다.",
    "strengths": [
      "• 이해력이 빠르게 올라옵니다.",
      "• 개념 간 연결 능력이 뛰어납니다.",
      "• 한 번 납득하면 기억이 오래 유지됩니다.",
      "\" 이해 기반 성장 속도가 가장 빠른 유형\"입니다."
    ],
    "stagnation": [
      "능력이 부족한 것이 아닙니다",
      "이해와 감정이 연결되지 않으면 시작하지 않는 구조입니다.",
      "• '왜 해야 하는 지” 가 없으면 멈춥니다.",
      "• 의미가 없는 학습에 거부감을 느낍니다.",
      "감정이 결합되지 않으면 집중이 안 되고 결과적으로",
      "•  시작이 늦어지고",
      "•  실행이 끊기며",
      "• 시험에서는 속도가 무너집니다.",
      "즉,",
      "문제는 실력이 아니라 '연결 부족’입니다.",
      "이 유형은 더 이해시키는 것이 아니라",
      "짧게 연결하고 바로 실행하게 해야 합니다.",
      "즉시 실행 구조를 체득해야합니다."
    ],
    "dangerousTitle": "이 유형에게\n가장 위험한 학습 방식은",
    "dangerousBody": "• \" 그냥 외워 \" \n• \"이건 원래 하는 거야 \"\n• \"생각하지 말고 해 \"\n이 방식은 성장을 만드는 것이 아니라 학습 자체를\n거부하게 만드는 구조입니다.\n• 설명을 너무 길게 하는 지도 \n• 이해를 충분히 시키고 시작\n\n실행을 늦추는 가장 큰 원인입니다",
    "coreStrategies": [
      {
        "num": "①",
        "head": "핵심 전략 ① : 짧은 의미 연결",
        "desc": "• “이게 어디에 쓰이는지”\n한 줄 설명\n• 길게 설명X"
      },
      {
        "num": "②",
        "head": "핵심 전략 ② : 즉시 실행 구조",
        "desc": "• 설명 → 바로 문제\n• 이해 후 기다림X"
      },
      {
        "num": "③",
        "head": "핵심 전략 ③ : 검토 횟수 제한",
        "desc": "• \"이 정도면 됐다\"\n• 바로 결과 확인"
      }
    ],
    "oneLineBody": "이 학생은 공부를 못하는 아이가 아닙니다\n이해와 감정이 연결되지 않으면 움직이지 않는 아이입니다.\n짧게 연결하고 바로 실행하면 \n감정-공감 우세형은\n가장 빠르게 성적이 상승하는 유형입니다",
    "oneLineHighlight": "이해를 길게 하지 마세요. \n연결하고 바로 시작하게 하세요.",
    "exactOneLineSummaryRaw": "이 학생은 공부를 못하는 아이가 아닙니다\n이해와 감정이 연결되지 않으면 움직이지 않는 아이입니다.\n짧게 연결하고 바로 실행하면 \n감정-공감 우세형은\n가장 빠르게 성적이 상승하는 유형입니다\n\n이해를 길게 하지 마세요. \n연결하고 바로 시작하게 하세요."
  },
  "의미형-의미 몰입·과몰입형": {
    "isTextBased": true,
    "mainCategory": "의미형",
    "subCategory": "의미 몰입·과몰입형",
    "title": "의미형 - 의미 몰입·과몰입형",
    "badge": "의미 몰입·과몰입형 전문 유형",
    "summary": "한 번 의미를 잡으면 깊이 있게 파고들며 이해를 확장하는 힘이 있는 유형입니다.",
    "strengths": [
      "• 개념 이해력이 매우 뛰어납니다",
      "• 하나를 배우면 넘게 연결합니다.",
      "• 사고 깊이가 빠르게 성장합니다.",
      "\"깊이 있는 사고 성장력이 가장 뛰어난 유형\"입니다."
    ],
    "stagnation": [
      "능력이 부족한 것이 아닙니다",
      "이해에 머무르고 실행으로 넘어가지 않는 구조입니다.",
      "개념 이해에 시간을 많이 씁니다",
      "\"완전히 이해하고 나서\" 시작하려 합니다.",
      "문제 풀이로의 전환이 늦어 결과적으로",
      "• 공부는 많이 하는데",
      "• 문제 해결력이 올라가지 않고",
      "• 시험에서는 속도가 무너집니다",
      "즉,",
      "문제는 이해 부족이 아니라 '실행 부족'입니다.",
      "이 유형은 더 이해하는 것이 아니라",
      "이해를 줄이고 바로 적용해야 합니다",
      "문제 중심의 학습 방식을 체득해야 합니다."
    ],
    "dangerousTitle": "이 유형에게\n가장 위험한 학습 방식은",
    "dangerousBody": "• 개념 설명을 길게 하는 학습\n • 이해 중심 수업\n• 완벽하게 이해하고 풀자\"는 지도\n\n이 방식은\n성장을 만드는 것이 아니라 \n실행을 지연시키는 구조입니다",
    "coreStrategies": [
      {
        "num": "①",
        "head": "핵심 전략 ① : 이해 후 즉시 문제 연결",
        "desc": "• 개념→바로 문제 → 2~ 3개\n• 이해 후 대기X"
      },
      {
        "num": "②",
        "head": "핵심 전략 ② : 이해제한",
        "desc": "• \"이 정도면 충분\" 기준 설정\n• 더 깊은 이해 금지"
      },
      {
        "num": "③",
        "head": "핵심 전략 ③ : 문제 중심 학습 전환",
        "desc": "• 설명보다 문제 풀이 비중 확대\n• 적용 중심 학습"
      }
    ],
    "oneLineBody": "이 학생은 공부를 못하는 아이가 아닙니다. \n이해에 머물러 실행이 늦는 아이입니다.\n\n이해를 줄이고 바로 적용하면 \n의미 몰입형은\n가장 빠르게 성적이 상승하는 유형입니다",
    "oneLineHighlight": "더 이해시키지 마세요 \n바로 풀게 하세요",
    "exactOneLineSummaryRaw": "이 학생은 공부를 못하는 아이가 아닙니다. \n이해에 머물러 실행이 늦는 아이입니다.\n\n이해를 줄이고 바로 적용하면 \n의미 몰입형은\n가장 빠르게 성적이 상승하는 유형입니다\n\n더 이해시키지 마세요 \n바로 풀게 하세요"
  },
  "의미형-이해 고집형": {
    "isTextBased": true,
    "mainCategory": "의미형",
    "subCategory": "이해 고집형",
    "title": "의미형 - 이해 고집형",
    "badge": "이해 고집형 전문 유형",
    "summary": "자신만의 방식으로 개념 정리 및 구조화 하는 힘이 있는 유형입니다.",
    "strengths": [
      "• 자기만의 풀이 방식이 있습니다",
      "• 논리적으로 설명하는 능력이 뛰어납니다.",
      "• 한 번 정리한 개념은 오래 유지됩니다.",
      "\"자기 기준이 명확한 사고형”입니다."
    ],
    "stagnation": [
      "능력이 부족한 것이 아닙니다.",
      "기존 이해 방식을 바꾸지 않는 구조입니다",
      "• 자신의 풀이를 고수합니다.",
      "• 다른 풀이를 받아들이지 않습니다",
      "• 틀린 문제도 같은 방식으로 반복합니다.",
      "그 결과",
      "• 오답이 반복되고",
      "• 새로운 유형에서 막히며",
      "• 성적이 정체됩니다",
      "즉,",
      "문제는 이해 부족이 아니라 '이해 수정 부재’입니다",
      "이 유형은 더 배우는 것이 아니라",
      "기존 이해를 수정하는 훈련이 필요합니다.",
      "비교하고 수정하는 방식의 학습을 체득해야합니다."
    ],
    "dangerousTitle": "이 유형에게\n가장 위험한 학습 방식은",
    "dangerousBody": "• \"이렇게 풀어야 해” 식 설명 \n• 정답 풀이만 보여주는 방식\n • 반복 문제풀이 중심 학습\n\n이 방식은 \n성장을 만드는 것이 아니라 \n고집을 더 강화하는 \n구조입니다.",
    "coreStrategies": [
      {
        "num": "①",
        "head": "핵심 전략 ① : 풀이 비교 구조 만들기",
        "desc": "• 내 풀이 vs 다른 풀이 ∙\n•  차이 확인"
      },
      {
        "num": "②",
        "head": "핵심 전략 ② : 오답 수정 중심 학습",
        "desc": "• \"왜 틀렸나\" X\n• \"어디서 방식이 달랐나” ⃝"
      },
      {
        "num": "③",
        "head": "핵심 전략 ③ : 다른 풀이 1개 반드시 추가",
        "desc": "• 한 문제 =한 방식 X\n• 한 문제 =최소 2방식 ⃝"
      }
    ],
    "oneLineBody": "이 학생은 이해를 못하는 아이가 아닙니다 \n이해를 바꾸지 않는 아이입니다\n\n비교와 수정이 들어가면 \n이해고집형은\n가장 빠르게 성적이 상승하는 유형입니다",
    "oneLineHighlight": "더 설명하지 마세요 \n비교하게 만드세요",
    "exactOneLineSummaryRaw": "이 학생은 이해를 못하는 아이가 아닙니다 \n이해를 바꾸지 않는 아이입니다\n\n비교와 수정이 들어가면 \n이해고집형은\n가장 빠르게 성적이 상승하는 유형입니다\n\n더 설명하지 마세요 \n비교하게 만드세요"
  }
};
