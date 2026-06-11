const foodData = [
  {
    name: "김치찌개",
    tags: ["한식", "안 매운 거", "밥", "찌개/탕", "뜨거운 거", "육류 포함"],
    minPrice: 7000,
    maxPrice: 9000,
    priceDisplay: "7,000~9,000원",
  },
  {
    name: "짜장면",
    tags: ["중식", "안 매운 거", "면", "뜨거운 거"],
    minPrice: 6000,
    maxPrice: 8000,
    priceDisplay: "6,000~8,000원",
  },
  {
    name: "화끈 짬뽕",
    tags: ["중식", "매운 거", "면", "뜨거운 거"],
    minPrice: 8000,
    maxPrice: 10000,
    priceDisplay: "8,000~10,000원",
  },
  {
    name: "치즈버거 세트",
    tags: ["양식", "패스트푸드", "육류 포함"],
    minPrice: 6000,
    maxPrice: 8500,
    priceDisplay: "6,000~8,500원",
  },
  {
    name: "초밥 정식",
    tags: ["일식", "안 매운 거", "밥", "차가운 거"],
    minPrice: 15000,
    maxPrice: 25000,
    priceDisplay: "15,000~25,000원",
  },
  {
    name: "냉모밀",
    tags: ["일식", "안 매운 거", "면", "차가운 거", "건강식/샐러드"],
    minPrice: 7000,
    maxPrice: 9000,
    priceDisplay: "7,000~9,000원",
  },
  {
    name: "삼겹살 구이",
    tags: ["한식", "안 매운 거", "뜨거운 거", "육류 포함", "구이/볶음"],
    minPrice: 14000,
    maxPrice: 18000,
    priceDisplay: "14,000~18,000원",
  },
  {
    name: "마라탕",
    tags: ["중식", "매운 거", "면", "뜨거운 거", "육류 포함"],
    minPrice: 9000,
    maxPrice: 15000,
    priceDisplay: "9,000~15,000원",
  },
  {
    name: "딸기 빙수",
    tags: ["디저트", "안 매운 거", "차가운 거"],
    minPrice: 11000,
    maxPrice: 14000,
    priceDisplay: "11,000~14,000원",
  },
  {
    name: "닭가슴살 샐러드",
    tags: ["양식", "안 매운 거", "차가운 거", "육류 포함", "건강식/샐러드"],
    minPrice: 8000,
    maxPrice: 11000,
    priceDisplay: "8,000~11,000원",
  },
  {
    name: "비빔밥",
    tags: ["한식", "안 매운 거", "밥", "건강식/샐러드"],
    minPrice: 8000,
    maxPrice: 10000,
    priceDisplay: "8,000~10,000원",
  },
  {
    name: "돈가스",
    tags: ["일식", "안 매운 거", "튀김", "육류 포함", "뜨거운 거"],
    minPrice: 9000,
    maxPrice: 12000,
    priceDisplay: "9,000~12,000원",
  },
  {
    name: "팟타이",
    tags: ["아시안(동남아)", "안 매운 거", "면", "뜨거운 거", "육류 포함"],
    minPrice: 10000,
    maxPrice: 13000,
    priceDisplay: "10,000~13,000원",
  },
  {
    name: "떡볶이",
    tags: ["분식", "매운 거", "뜨거운 거", "찜"],
    minPrice: 4000,
    maxPrice: 7000,
    priceDisplay: "4,000~7,000원",
  },
  {
    name: "스테이크",
    tags: ["양식", "안 매운 거", "구이/볶음", "육류 포함", "뜨거운 거"],
    minPrice: 25000,
    maxPrice: 40000,
    priceDisplay: "25,000~40,000원",
  },
  {
    name: "쌀국수",
    tags: ["아시안(동남아)", "안 매운 거", "면", "뜨거운 거", "건강식/샐러드"],
    minPrice: 9000,
    maxPrice: 12000,
    priceDisplay: "9,000~12,000원",
  },
  {
    name: "불고기 전골",
    tags: ["한식", "안 매운 거", "뜨거운 거", "육류 포함", "찌개/탕"],
    minPrice: 12000,
    maxPrice: 16000,
    priceDisplay: "12,000~16,000원",
  },
  {
    name: "피자",
    tags: ["양식", "안 매운 거", "뜨거운 거", "육류 포함"],
    minPrice: 15000,
    maxPrice: 25000,
    priceDisplay: "15,000~25,000원",
  },
  {
    name: "회덮밥",
    tags: ["일식", "안 매운 거", "밥", "차가운 거", "건강식/샐러드"],
    minPrice: 10000,
    maxPrice: 15000,
    priceDisplay: "10,000~15,000원",
  },
  {
    name: "제육볶음",
    tags: ["한식", "매운 거", "밥", "구이/볶음", "육류 포함"],
    minPrice: 8000,
    maxPrice: 11000,
    priceDisplay: "8,000~11,000원",
  },
  {
    name: "크로플",
    tags: ["디저트", "안 매운 거", "뜨거운 거"],
    minPrice: 5000,
    maxPrice: 8000,
    priceDisplay: "5,000~8,000원",
  },
  {
    name: "깐풍기",
    tags: ["중식", "매운 거", "튀김", "육류 포함", "뜨거운 거"],
    minPrice: 18000,
    maxPrice: 25000,
    priceDisplay: "18,000~25,000원",
  },
  {
    name: "샌드위치",
    tags: ["양식", "안 매운 거", "차가운 거", "건강식/샐러드"],
    minPrice: 6000,
    maxPrice: 9000,
    priceDisplay: "6,000~9,000원",
  },
  {
    name: "갈비찜",
    tags: ["한식", "안 매운 거", "뜨거운 거", "육류 포함", "찜"],
    minPrice: 20000,
    maxPrice: 35000,
    priceDisplay: "20,000~35,000원",
  },
  {
    name: "우동",
    tags: ["일식", "안 매운 거", "면", "뜨거운 거"],
    minPrice: 6000,
    maxPrice: 9000,
    priceDisplay: "6,000~9,000원",
  },
  {
    name: "나시고랭",
    tags: ["아시안(동남아)", "안 매운 거", "밥", "구이/볶음", "육류 포함"],
    minPrice: 10000,
    maxPrice: 14000,
    priceDisplay: "10,000~14,000원",
  },
  {
    name: "감자튀김",
    tags: ["패스트푸드", "안 매운 거", "튀김", "뜨거운 거"],
    minPrice: 3000,
    maxPrice: 6000,
    priceDisplay: "3,000~6,000원",
  },
  {
    name: "샤브샤브",
    tags: ["일식", "안 매운 거", "뜨거운 거", "육류 포함", "찌개/탕"],
    minPrice: 15000,
    maxPrice: 22000,
    priceDisplay: "15,000~22,000원",
  },
  {
    name: "냉면",
    tags: ["한식", "안 매운 거", "면", "차가운 거"],
    minPrice: 8000,
    maxPrice: 11000,
    priceDisplay: "8,000~11,000원",
  },
  {
    name: "팟카파오무쌉",
    tags: ["아시안(동남아)", "매운 거", "밥", "구이/볶음", "육류 포함"],
    minPrice: 9000,
    maxPrice: 12000,
    priceDisplay: "9,000~12,000원",
  },
  {
    name: "팬케이크",
    tags: ["디저트", "안 매운 거", "뜨거운 거"],
    minPrice: 8000,
    maxPrice: 12000,
    priceDisplay: "8,000~12,000원",
  },
  {
    name: "치킨",
    tags: ["패스트푸드", "안 매운 거", "튀김", "육류 포함"],
    minPrice: 16000,
    maxPrice: 22000,
    priceDisplay: "16,000~22,000원",
  },
  {
    name: "닭볶음탕",
    tags: ["한식", "매운 거", "뜨거운 거", "육류 포함", "찜"],
    minPrice: 25000,
    maxPrice: 35000,
    priceDisplay: "25,000~35,000원",
  },
  {
    name: "라멘",
    tags: ["일식", "안 매운 거", "면", "뜨거운 거", "육류 포함"],
    minPrice: 9000,
    maxPrice: 12000,
    priceDisplay: "9,000~12,000원",
  },
  {
    name: "토마토 파스타",
    tags: ["양식", "안 매운 거", "면", "뜨거운 거"],
    minPrice: 10000,
    maxPrice: 15000,
    priceDisplay: "10,000~15,000원",
  },
  {
    name: "월남쌈",
    tags: [
      "아시안(동남아)",
      "안 매운 거",
      "차가운 거",
      "건강식/샐러드",
      "육류 포함",
    ],
    minPrice: 15000,
    maxPrice: 25000,
    priceDisplay: "15,000~25,000원",
  },
  {
    name: "순두부찌개",
    tags: ["한식", "매운 거", "밥", "찌개/탕", "뜨거운 거"],
    minPrice: 7000,
    maxPrice: 9000,
    priceDisplay: "7,000~9,000원",
  },
  {
    name: "딤섬",
    tags: ["중식", "안 매운 거", "찜", "육류 포함", "뜨거운 거"],
    minPrice: 7000,
    maxPrice: 12000,
    priceDisplay: "7,000~12,000원",
  },
  {
    name: "케이크",
    tags: ["디저트", "안 매운 거", "차가운 거"],
    minPrice: 6000,
    maxPrice: 9000,
    priceDisplay: "6,000~9,000원",
  },
  {
    name: "볶음밥",
    tags: ["중식", "안 매운 거", "밥", "구이/볶음"],
    minPrice: 7000,
    maxPrice: 9000,
    priceDisplay: "7,000~9,000원",
  },
];

const tagsList = [
  "한식",
  "양식",
  "중식",
  "일식",
  "아시안(동남아)",
  "디저트",
  "매운 거",
  "안 매운 거",
  "밥",
  "면",
  "찌개/탕",
  "구이/볶음",
  "튀김",
  "찜",
  "패스트푸드",
  "뜨거운 거",
  "차가운 거",
  "육류 포함",
  "건강식/샐러드",
];

// HTML이 로드되면 자동으로 체크박스 생성
window.onload = function () {
  const wrapper = document.getElementById("tags-wrapper");
  tagsList.forEach((tag) => {
    wrapper.innerHTML += `
      <input type="checkbox" id="tag-${tag}" class="tag-checkbox food-tag-cb" value="${tag}">
      <label for="tag-${tag}" class="tag-label">${tag}</label>
    `;
  });
  // 초기 상태로 전체 음식 보여주기
  displayFoods(foodData);
};

// 화면에 음식 목록을 렌더링하는 함수
function displayFoods(foods) {
  const resultContainer = document.getElementById("food-result");
  resultContainer.innerHTML = "";

  if (foods.length === 0) {
    resultContainer.innerHTML = "<p>조건에 맞는 음식을 찾지 못했어요. 😢</p>";
    return;
  }

  foods.forEach((food) => {
    resultContainer.innerHTML += `
      <div class="food-item">
        <h3>${food.name}</h3>
        <p><strong>가격대:</strong> ${food.priceDisplay}</p>
        <div class="food-tags">${food.tags.map((t) => `#${t}`).join(" ")}</div>
      </div>
    `;
  });
}

// 필터링 및 정렬 실행 함수
function filterFoods() {
  // 1. 선택된 체크박스 값 가져오기
  const checkboxes = document.querySelectorAll(".food-tag-cb:checked");
  const selectedTags = Array.from(checkboxes).map((cb) => cb.value);

  // 2. 입력된 가격 가져오기
  const userPriceInput = document.getElementById("user-price").value;
  const userPrice = userPriceInput ? parseInt(userPriceInput) : Infinity;

  // 3. 가격 필터링 및 태그 매칭 개수 계산
  let filtered = [];

  foodData.forEach((food) => {
    // 가격 조건 만족하는지 확인
    const isPriceMatch = food.minPrice <= userPrice;

    if (isPriceMatch) {
      if (selectedTags.length === 0) {
        // 선택된 태그가 없다면 매칭 개수를 0으로 두고 모두 포함
        food.matchCount = 0;
        filtered.push(food);
      } else {
        // 음식 태그 중 사용자가 선택한 태그와 겹치는 개수 계산 (OR 조건 기반)
        const matchCount = food.tags.filter((tag) =>
          selectedTags.includes(tag),
        ).length;

        // 하나라도 겹치는 태그가 있다면 배열에 추가
        if (matchCount > 0) {
          food.matchCount = matchCount; // 정렬을 위해 매칭된 개수를 객체에 임시 저장
          filtered.push(food);
        }
      }
    }
  });

  // 4. 태그가 많이 중복될수록 앞쪽에 도출되도록 정렬 (내림차순)
  if (selectedTags.length > 0) {
    filtered.sort((a, b) => b.matchCount - a.matchCount);
  }

  // 5. 최종 결과 화면에 뿌리기
  displayFoods(filtered);
}
