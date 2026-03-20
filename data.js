window.siteData = {
  stats: [
    { value: "4", label: "course tracks" },
    { value: "30", label: "clickable places" },
    { value: "4", label: "verified anchors" }
  ],
  venueFilters: [
    { id: "all", label: "전체" },
    { id: "brunch", label: "브런치" },
    { id: "coffee", label: "카페" },
    { id: "experience", label: "체험" },
    { id: "dessert", label: "디저트" },
    { id: "dinner", label: "저녁" },
    { id: "night", label: "바/나이트" },
    { id: "walk", label: "산책" }
  ],
  principles: [
    {
      title: "앵커 한 곳을 먼저 정한다",
      body:
        "성수에서는 식당이나 바 한 군데를 먼저 고르고 앞뒤를 붙이는 방식이 가장 안전하다. 카드 수보다 메인 한 곳의 힘이 더 중요하다."
    },
    {
      title: "초반은 가볍고 후반에 밀도를 올린다",
      body:
        "커피나 산책으로 시작해 저녁과 바에서 온도를 올리면 하루의 감정선이 자연스럽다. 첫 만남일수록 이 리듬이 잘 먹힌다."
    },
    {
      title: "체험은 대화를 대신 끌어준다",
      body:
        "소품샵, 사진관, 체험형 공간을 하나만 넣어도 어색한 구간이 줄어든다. 말보다 행동이 기억을 더 쉽게 만든다."
    },
    {
      title: "지도로 동선을 마지막에 한 번 본다",
      body:
        "성수는 걸어도 좋지만 구역을 잘못 넘기면 체력이 빨리 빠진다. 지도에서 상대 위치를 한 번 확인하면 불필요한 왕복이 줄어든다."
    },
    {
      title: "변동성 큰 곳은 공식 링크로 다시 본다",
      body:
        "팝업, 체험 공간, 사진관, 바는 운영 시간이 자주 바뀐다. 상세페이지의 출처 링크를 마지막 체크 포인트로 쓰는 편이 안전하다."
    },
    {
      title: "숨은 카드는 보류 후보로 둔다",
      body:
        "정보가 약한 장소는 메인 라인업보다 백업 카드로 두는 편이 낫다. 이번 버전은 검증도가 높은 곳 위주로 메인에 올렸다."
    }
  ],
  courses: [
    {
      id: "baseline",
      kicker: "steady opening",
      title: "첫 만남용, 무난하지만 안 심심한 기본 코스",
      summary:
        "커피에서 식사, 바까지 자연스럽게 올라가는 가장 안정적인 성수 기본형이다.",
      suitableFor: "첫 만남, 오랜만의 데이트, 취향 탐색",
      budget: "1인 4만~8만 원대",
      bestWindow: "오후 2시 이후 시작",
      duration: "4~6시간",
      lede:
        "과하게 힙하지 않고, 그렇다고 평범하게 끝나지도 않는 타입이다. 어색한 사이도 버티기 쉽고, 이미 편한 사이면 2차를 더 길게 가져갈 수 있다.",
      timeline: [
        {
          time: "14:00",
          places: ["recovery-coffee-bar", "lowkey-seongsu"],
          note: "조용한 커피로 시작해 텐션을 맞춘다.",
          swap: "브루잉 세레모니로 바꾸면 더 커피 중심으로 갈 수 있다."
        },
        {
          time: "15:10",
          places: ["sobeauty-house"],
          note: "같이 작은 물건을 고르는 행동이 대화를 쉽게 만든다.",
          swap: "활동성을 더 원하면 포토오브제나 커스텀필름으로 교체한다."
        },
        {
          time: "16:20",
          places: ["hanjeongseon"],
          note: "짧고 강한 당 포인트로 저녁 전 템포를 유지한다.",
          swap: "좀 더 앉아 있고 싶으면 북극의열대어나 하하하성수로 이동한다."
        },
        {
          time: "18:00",
          places: ["corner-room-seongsu"],
          note: "분위기와 음식의 균형이 좋아 메인 식사 앵커로 가장 안전하다.",
          swap: "예약이 꼬이면 뇨끼룸이나 플레이버타운으로 옮긴다."
        },
        {
          time: "20:15",
          places: ["the-storage-room", "music-warehouse-lp-bar"],
          note: "더스토리지룸은 경험형, 음악창고는 대화형 2차에 가깝다.",
          swap: "술 강도를 낮추고 싶으면 소파나 하하하성수로 마감한다."
        }
      ],
      tip:
        "저녁 메인만 예약해 두고 나머지는 현장 감각으로 움직여도 잘 버틴다.",
      caution:
        "첫 만남인데 2차를 너무 늦게까지 끌면 피곤해진다. 마지막 한 곳만 확실히 정하는 편이 좋다."
    },
    {
      id: "experience",
      kicker: "activity-led",
      title: "체험형, 사진 한 장 남기는 성수 데이트",
      summary:
        "같이 무언가를 했다는 감각이 남는, 체험과 결과물이 중심인 코스다.",
      suitableFor: "사진 남기고 싶은 날, 기념일 전후, 어색한 사이",
      budget: "1인 5만~9만 원대",
      bestWindow: "오후 1시~7시",
      duration: "5~6시간",
      lede:
        "구경만 하면 비슷해질 수 있는 성수에서 체험 카드 하나만 넣어도 하루의 인상이 확 달라진다.",
      timeline: [
        {
          time: "13:30",
          places: ["macoy-seongsu", "brewing-ceremony"],
          note: "과하게 무겁지 않은 카페에서 시작해 동선을 정리한다.",
          swap: "웨이팅이 길면 리커버리커피바로 우회한다."
        },
        {
          time: "14:40",
          places: ["kia-unplugged-ground"],
          note: "무료 체험과 사진 포인트가 동시에 있는 성수형 브랜드 앵커다.",
          swap: "당일 운영이 애매하면 프로젝트 렌트 스케줄을 보고 대체한다."
        },
        {
          time: "16:00",
          places: ["photo-objet-seongsu", "custom-film-seongsu"],
          note: "이 코스의 결과물이 남는 구간이다.",
          swap: "사진보다 걷기를 원하면 서울숲 산책으로 바꾸고 디저트를 늘린다."
        },
        {
          time: "18:00",
          places: ["flavor-town", "omil-seongsu"],
          note: "메뉴 설명이 재밌고 반응이 좋은 저녁이 체험형 코스에 잘 붙는다.",
          swap: "조금 더 차분하면 코너룸 성수나 이짜로 이동한다."
        },
        {
          time: "20:00",
          places: ["ximxim", "scarf-seongsu"],
          note: "심심은 음악형, 스카프는 차분한 감도형 마감이다.",
          swap: "피로도가 높으면 저녁 뒤 바로 마무리해도 완성도는 충분하다."
        }
      ],
      tip:
        "사진관, 체험 공간, 소품샵 중 최소 하나는 확실히 넣는 편이 만족도가 높다.",
      caution:
        "체험 스폿은 운영 변동이 잦다. 상세페이지 출처 링크로 마지막 확인을 하고 나가는 편이 좋다."
    },
    {
      id: "sunset",
      kicker: "walk and skyline",
      title: "노을형, 서울숲에서 야경으로 넘어가는 산책 코스",
      summary:
        "먹고 마시는 밀도보다 걷는 동안 생기는 분위기를 중심에 둔 산책형이다.",
      suitableFor: "몇 번 만난 사이, 날씨 좋은 날, 조용한 데이트",
      budget: "1인 4만~10만 원대",
      bestWindow: "해 지기 2시간 전 출발",
      duration: "4~5시간",
      lede:
        "성수는 실내만 돌면 금방 비슷해질 수 있다. 서울숲과 성수구름다리를 넣으면 하루가 숨 쉬는 느낌이 생긴다.",
      timeline: [
        {
          time: "15:30",
          places: ["recovery-coffee-bar", "macoy-seongsu"],
          note: "브런치 대신 가벼운 커피로 출발 속도를 맞춘다.",
          swap: "달달하게 시작하고 싶으면 어피스앤드피스 대신 북극의열대어 계열로 바꿀 수 있다."
        },
        {
          time: "17:00",
          places: ["seoul-forest"],
          note: "실내에서 이어진 대화를 산책으로 환기하는 구간이다.",
          swap: "날씨가 안 좋으면 소브티하우스나 프로젝트 렌트처럼 실내 체류를 늘린다."
        },
        {
          time: "18:10",
          places: ["seongsu-cloud-bridge"],
          note: "노을형 코스의 핵심 장면이다. 해 질 무렵에 맞춰 도착하는 게 중요하다.",
          swap: "빛이 이미 내려앉았다면 바로 저녁 장소로 이동한다."
        },
        {
          time: "19:00",
          places: ["xesc-menzl", "elloco-seongsu"],
          note: "세스크멘슬은 와인형, 엘로코는 기념일 밀도형 저녁으로 붙는다.",
          swap: "좀 더 캐주얼하면 코너룸이나 이짜로 조정한다."
        },
        {
          time: "21:00",
          places: ["vinyl-hangang", "hahaha-seongsu"],
          note: "한강 뷰로 마감하고 싶으면 바이닐, 이동을 줄이고 싶으면 하하하성수다.",
          swap: "걷기가 이미 길었다면 성수 안에서 조용한 카페 한 곳으로 닫아도 된다."
        }
      ],
      tip:
        "노을형은 시간 조절이 거의 전부다. 성수구름다리 도착 시간을 먼저 정하고 앞을 끼워 넣는 편이 가장 좋다.",
      caution:
        "비나 강풍이 있으면 장점이 반쯤 사라진다. 이런 날은 체험형으로 갈아타는 판단이 빠를수록 좋다."
    },
    {
      id: "anniversary",
      kicker: "high-density night",
      title: "기념일형, 식사 밀도 높이고 바까지 완성하는 코스",
      summary:
        "오늘은 확실히 공들였다는 느낌이 필요한 날을 위한 고밀도 저녁형이다.",
      suitableFor: "기념일, 생일, 특별한 저녁",
      budget: "1인 8만~20만 원 이상",
      bestWindow: "오후 5시 이후",
      duration: "4시간 전후",
      lede:
        "기념일 코스의 핵심은 장소 수보다 밀도다. 카페는 짧게, 메인 식사는 길게, 마지막 술자리는 취향에 맞춰 명확하게 고른다.",
      timeline: [
        {
          time: "17:00",
          places: ["tropical-fish-of-the-arctic", "sofa-seongsu"],
          note: "오래 머무르기보다 무드를 맞추는 정도로 짧게 시작한다.",
          swap: "식사 집중형으로 갈 거면 이 구간은 건너뛰어도 된다."
        },
        {
          time: "18:30",
          places: ["elloco-seongsu", "negi-live"],
          note: "엘로코는 세련된 코스형, 네기라이브는 날의 성격을 확 올리는 파인다이닝형이다.",
          swap: "조금 덜 묵직하면 코너룸이나 뇨끼룸으로 톤을 낮춘다."
        },
        {
          time: "20:45",
          places: ["beombar", "baroque-seongsu", "grund-seongsu"],
          note: "범바는 대화형, 바로크는 경험형, 그룬트는 와인형 마무리에 가깝다.",
          swap: "술보다 공간 경험이 더 중요하면 더스토리지룸으로 조정한다."
        },
        {
          time: "22:10",
          places: ["sofa-seongsu", "scarf-seongsu"],
          note: "젤라또와 와인, 혹은 조용한 킷사텐 감성으로 여운을 남긴다.",
          swap: "음악이 더 중요하면 심심으로 마감한다."
        }
      ],
      tip:
        "메인 식사와 마지막 바 중 최소 한 곳은 예약하는 편이 좋다.",
      caution:
        "기념일형은 장소를 너무 많이 넣으면 오히려 피곤해진다. 세 곳 정도로 단정하게 끊는 편이 더 좋다."
    }
  ],
  verifiedNotes: [
    {
      title: "기아 언플러그드 그라운드",
      body:
        "기아 공식 페이지와 관련 기사 기준으로, EV 체험과 Apple Vision Pro, 포토 포인트 같은 체험형 요소가 분명한 브랜드 공간으로 확인된다. 성수에서 식사 전 넣기 좋은 무료 앵커다.",
      sourceLabel: "기아 공식 및 관련 기사",
      sourceUrl: "https://www.kia.com/kr/experience/flagship/unplugged-ground"
    },
    {
      title: "성수구름다리",
      body:
        "서울시 문서와 매체 기사에서 성수구름다리는 노을과 야경 포인트로 반복해서 언급된다. 실내 비중이 길어진 코스를 환기하는 산책 카드로 특히 좋다.",
      sourceLabel: "서울시 및 매체 기사",
      sourceUrl: "https://opengov.seoul.go.kr/sanction/34313568"
    },
    {
      title: "프로젝트 렌트 올드타운점",
      body:
        "이 공간은 고정 콘텐츠보다 스케줄형 팝업 성격이 강하다. 방문 전에 공식 스케줄을 확인하는 게 사실상 필수다.",
      sourceLabel: "프로젝트 렌트 스케줄",
      sourceUrl: "https://www.project-rent.com/schedule"
    },
    {
      title: "포토오브제 성수점",
      body:
        "공식 사이트가 24시간 무인 운영과 콘셉트 부스를 전면에 내세운다. 늦은 시간 체험형 카드로 쓰기 좋지만, 실제 부스 상태는 현장 기준으로 한 번 더 보는 편이 안전하다.",
      sourceLabel: "포토오브제 공식",
      sourceUrl: "https://photoobjet.co.kr/"
    }
  ],
  places: [
    {
      slug: "recovery-coffee-bar",
      name: "리커버리커피바",
      kicker: "quiet start",
      category: "coffee",
      categoryLabel: "카페",
      area: "뚝섬역·서울숲 입구",
      detailLevel: "재확인 권장",
      address: "서울 성동구 왕십리로16가길 10 1층",
      coordinates: { lat: 37.5466, lon: 127.0443 },
      positioning:
        "호주식 커피 톤이 살아 있는, 성수 초반 텐션을 차분하게 잡아주는 소규모 스페셜티 카페다.",
      summary:
        "커피 한 잔으로 조용히 시작하고 싶을 때 가장 먼저 떠올리기 좋은 타입이다.",
      highlights: [
        "호주식 카푸치노와 플랫화이트 계열이 자주 언급된다.",
        "골목 안쪽에 있어 초반 대화에 집중하기 좋다.",
        "서울숲으로 넘어가기 전 첫 앵커로 쓰기 쉽다."
      ],
      hours: "최신 운영시간은 웹상 표기가 흔들려 방문 전 재확인 권장.",
      dateUse:
        "첫 만남이나 산책 전 오프닝에 잘 맞는다. 성수 초반 텐션을 과하게 올리지 않고 시작할 수 있다.",
      caution:
        "운영시간이 출처마다 다르게 보이는 편이라 당일 확인이 안전하다.",
      courseFit: "기본형, 노을형 초반 앵커",
      tags: ["조용한 시작", "호주식 커피", "골목 카페", "첫 만남용"],
      sources: [
        { label: "식신 - 리커버리커피바", url: "https://www.siksinhot.com/P/1405331" },
        { label: "K-Trip Tips - 리커버리커피바", url: "https://www.ktriptips.com/kor/food/2895210" },
        { label: "행복이가득한집 - 송정동 새롭고 오래된 매력", url: "https://happy.designhouse.co.kr/magazine/magazine_view/00010005/7976" }
      ]
    },
    {
      slug: "lowkey-seongsu",
      name: "로우키 성수점",
      kicker: "specialty anchor",
      category: "coffee",
      categoryLabel: "카페",
      area: "연무장길",
      detailLevel: "검증됨",
      address: "서울 성동구 연무장3길 6",
      coordinates: { lat: 37.5449, lon: 127.0518 },
      positioning:
        "성수 스페셜티 커피 씬의 기준점처럼 쓰기 좋은 대표 로스터리다.",
      summary:
        "카페 무드보다 커피 자체를 더 중요하게 보는 사람에게 안정적으로 먹히는 카드다.",
      highlights: [
        "블렌드와 싱글오리진 선택 폭이 넓다.",
        "성수에서 커피 호핑을 시작하기 좋은 기준점 역할을 한다.",
        "로스터리 결이 분명해서 취향 차이가 있어도 설명하기 쉽다."
      ],
      hours: "월-금 09:00-20:00 / 토 12:00-21:00 / 일 12:00-18:00",
      dateUse:
        "카페가 목적이 아니라 커피가 목적일 때 좋다. 커피 취향이 분명한 상대와 특히 잘 맞는다.",
      caution:
        "좌석보다 커피 흐름에 집중하는 공간이라 오래 앉아 수다 떨기용과는 결이 조금 다를 수 있다.",
      courseFit: "기본형 초반, 커피 중심 데이트",
      tags: ["스페셜티", "로스터리", "연무장길", "커피 취향"],
      sources: [
        { label: "Lowkey 공식 스토어 페이지", url: "https://lowkeycoffee.com/pages/store.php" },
        { label: "Lowkey 공식 About", url: "https://lowkeycoffee.com/pages/about.php" },
        { label: "Lowkey 공식 History", url: "https://lowkeycoffee.com/pages/history.php" }
      ]
    },
    {
      slug: "macoy-seongsu",
      name: "맥코이 성수",
      kicker: "wood-tone mood",
      category: "coffee",
      categoryLabel: "카페",
      area: "에스팩토리",
      detailLevel: "재확인 권장",
      address: "서울 성동구 연무장15길 11 에스팩토리 B동 1F",
      coordinates: { lat: 37.5428358, lon: 127.0589363 },
      positioning:
        "미국 서부 산장 같은 우드톤 무드가 강한, 체험형 데이트 오프닝에 잘 붙는 카페다.",
      summary:
        "카페 자체가 포토 포인트가 되는 공간이라 체험형 코스의 첫 장면으로 특히 좋다.",
      highlights: [
        "시그니처 맥코이 커피가 가장 많이 언급된다.",
        "에스팩토리 권역과 바로 붙어 있어 심심 같은 밤 공간과도 연결이 쉽다.",
        "우드톤 실내가 따뜻한 인상을 만들어 준다."
      ],
      hours: "08:00-20:00 또는 08:00-20:30으로 확인됨. 방문 전 재확인 권장.",
      dateUse:
        "공간 무드가 중요한 날, 혹은 체험형 코스 오프닝으로 쓰기 좋다.",
      caution:
        "시간 표기가 소스마다 조금씩 달라 최신 값은 다시 보는 편이 안전하다.",
      courseFit: "체험형, 노을형 초반",
      tags: ["우드톤", "에스팩토리", "포토 포인트", "부드러운 시작"],
      sources: [
        { label: "SFACTORY - 맥코이 성수", url: "https://www.sfactory.co.kr/blogPost/macoy" },
        { label: "테이블링 - 맥코이 성수", url: "https://www.tabling.co.kr/place/677cd44c66de5f06988d26d5" },
        { label: "BigIssue - 나의 즐겨찾기", url: "https://www.bigissue.kr/magazine/new/365/3241" }
      ]
    },
    {
      slug: "brewing-ceremony",
      name: "브루잉 세레모니",
      kicker: "drip-focused",
      category: "coffee",
      categoryLabel: "카페",
      area: "연무장길 안쪽",
      detailLevel: "검증됨",
      address: "서울 성동구 연무장5가길 22-1 1층",
      coordinates: { lat: 37.5437, lon: 127.0548 },
      positioning:
        "커피에 집중하고 싶을 때 고르는, 성수의 조용한 핸드드립 중심 카페다.",
      summary:
        "조용하게 앉아 커피 이야기를 나누고 싶은 날에 가장 설득력 있는 선택지 중 하나다.",
      highlights: [
        "브루잉 중심 구성과 화이트 브라우니 언급이 잦다.",
        "원두 설명과 스토리텔링이 살아 있다는 평이 많다.",
        "시끄러운 카페보다 대화가 잘 붙는 타입이다."
      ],
      hours: "월-토 11:00-21:00 / 일 휴무",
      dateUse:
        "첫 만남보다는 취향이 조금씩 보이기 시작한 사이에 더 잘 맞는다.",
      caution:
        "메뉴보다 커피 경험 비중이 커서 달달한 디저트 카페를 기대하고 가면 결이 다를 수 있다.",
      courseFit: "기본형 초반, 체험형 오프닝 대체",
      tags: ["핸드드립", "조용한 데이트", "커피 이야기", "연무장길"],
      sources: [
        { label: "푸딘코 - 핸드드립 카페", url: "https://magazine.foodinko.com/%EC%BB%A4%ED%94%BC%ED%96%A5%EC%97%90-%EC%B7%A8%ED%95%98%EB%8A%94-%ED%95%B8%EB%93%9C%EB%93%9C%EB%A6%BD-%EC%B9%B4%ED%8E%98/" },
        { label: "에스콰이어 코리아 - 브루잉 세레모니", url: "https://www.esquirekorea.co.kr/article/47306" },
        { label: "뽈레 - 브루잉 세레모니", url: "https://polle.com/place/2de4KH/%EB%B8%8C%EB%A3%A8%EC%9E%89%20%EC%84%B8%EB%A0%88%EB%AA%A8%EB%8B%88" }
      ]
    },
    {
      slug: "hanjeongseon",
      name: "한정선",
      kicker: "grab-and-go sugar",
      category: "dessert",
      categoryLabel: "디저트",
      area: "연무장길 메인",
      detailLevel: "재확인 권장",
      address: "서울 성동구 연무장길 43-1 1층",
      coordinates: { lat: 37.5428665, lon: 127.0541934 },
      positioning:
        "성수 디저트 동선에 짧고 강한 당 포인트로 넣기 좋은 과일모찌 테이크아웃 스폿이다.",
      summary:
        "앉는 공간보다 코스의 템포를 끊지 않고 달달함을 넣는 중간 정차 카드에 가깝다.",
      highlights: [
        "생딸기 찹쌀떡과 과일모찌, 선물세트 포장 경험이 핵심이다.",
        "연무장길 동선 안에서 짧게 끼워 넣기 쉽다.",
        "선물용 감도도 있어 기념일형 데이트에도 잘 붙는다."
      ],
      hours: "12:00-21:00 또는 10:30-22:00 표기가 혼재. 방문 전 재확인 권장.",
      dateUse:
        "저녁 전 당 보충이나, 성수에서 작은 선물 같은 요소를 넣고 싶을 때 좋다.",
      caution:
        "앉아서 쉬는 장소로 기대하면 맞지 않는다. 템포 조절용 스폿으로 보는 편이 맞다.",
      courseFit: "기본형 중간, 선물형 디저트 포인트",
      tags: ["과일모찌", "짧은 정차", "선물용", "연무장길"],
      sources: [
        { label: "식신 - 한정선", url: "https://www.siksinhot.com/P/1617842" },
        { label: "다이닝코드 - 한정선", url: "https://www.diningcode.com/profile.php?rid=sF3RPtaiGrlQ" },
        { label: "블로그 후기 - 성수 한정선", url: "https://rainwithcappuccino.tistory.com/" }
      ]
    },
    {
      slug: "sofa-seongsu",
      name: "소파",
      kicker: "gelato and wine",
      category: "dessert",
      categoryLabel: "디저트",
      area: "북성수",
      detailLevel: "재확인 권장",
      address: "서울 성동구 성수일로4길 50 1층",
      coordinates: { lat: 37.5424349, lon: 127.0541421 },
      positioning:
        "젤라또와 와인을 같이 묶어 쓰기 좋은, 성수 후반부 무드를 예쁘게 정리해 주는 디저트 스폿이다.",
      summary:
        "술집만으로 끝내기 아쉬운 밤에 여운을 남기기 좋은 카드다.",
      highlights: [
        "소금올리브 젤라또와 와인 페어링 콘셉트가 분명하다.",
        "북성수 쪽 조용한 감도로 마감을 만들기 좋다.",
        "디저트지만 밤 코스와 잘 붙는 타입이다."
      ],
      hours: "최신 공식 시간은 안정적으로 못 잡음. 방문 전 재확인 권장.",
      dateUse:
        "기념일형 데이트, 술 다음 디저트, 혹은 밤 무드를 부드럽게 닫고 싶은 날에 좋다.",
      caution:
        "운영시간이 출처마다 정교하게 맞아떨어지지 않아 당일 체크가 필요하다.",
      courseFit: "기념일형 마감, 밤 디저트",
      tags: ["젤라또", "와인 페어링", "부드러운 마감", "북성수"],
      sources: [
        { label: "블로그 후기 - Sofar 소파", url: "https://hiiambk.tistory.com/1400" },
        { label: "속닥 - 젤라또에 술 마시기 좋은 곳", url: "https://www.socdoc.co.kr/articles/ODczMjk5OjIwMjUtMDctMTE6Mzg6MDMuMzY2MzMz" },
        { label: "Popga - 타바스코 성수 팝업 참여 매장", url: "https://popga.co.kr/popup/4933" }
      ]
    },
    {
      slug: "tropical-fish-of-the-arctic",
      name: "북극의열대어",
      kicker: "retro kissaten",
      category: "dessert",
      categoryLabel: "디저트",
      area: "북성수·중랑천 방향",
      detailLevel: "재확인 권장",
      address: "서울 성동구 광나루로4가길 12-7 2층",
      coordinates: { lat: 37.543, lon: 127.0507 },
      positioning:
        "빈티지 킷사텐 무드로 길게 앉기 좋은, 성수 후반부 휴식 카드다.",
      summary:
        "카페를 한 번 더 가야 한다면, 가장 감도 있는 휴식처처럼 쓰기 좋은 곳이다.",
      highlights: [
        "핸드드립과 젤라또, 간판 없는 공간감이 핵심 경험이다.",
        "조용하게 오래 머물기 좋은 쪽에 가깝다.",
        "성수 메인 거리에서 살짝 벗어난 느낌이 매력 포인트다."
      ],
      hours: "12:00-22:00 계열 표기 다수. 최신 값은 재확인 권장.",
      dateUse:
        "오랜만에 만난 사이, 혹은 이미 편한 관계에서 천천히 말 나누기 좋다.",
      caution:
        "메인 상권 한복판이 아니라 이동 감각이 달라질 수 있다. 노을형이나 기념일형 후반에 더 잘 맞는다.",
      courseFit: "노을형 마감, 기념일형 오프닝",
      tags: ["빈티지", "킷사텐", "길게 앉기", "조용한 휴식"],
      sources: [
        { label: "Keyzard - 북극의열대어 후기", url: "https://www.keyzard.cc/hiverlinge/nb/223982444351" },
        { label: "ShortTrend 인스타그램 분석", url: "https://shortrend.com/dashboard/samdori_archive" },
        { label: "PlaceView - 북극의열대어", url: "https://placeview.co.kr/id/MTc5NDkzNTgyMyAg" }
      ]
    },
    {
      slug: "kia-unplugged-ground",
      name: "기아 언플러그드 그라운드",
      kicker: "brand experience",
      category: "experience",
      categoryLabel: "체험",
      area: "성수역 인근",
      detailLevel: "검증됨",
      address: "서울 성동구 상원4길 10",
      coordinates: { lat: 37.547, lon: 127.0522 },
      positioning:
        "성수에서 가장 체험형으로 확실한 브랜드 공간. 차를 보는 곳이라기보다 EV 라이프스타일 쇼룸에 가깝다.",
      summary:
        "그냥 걷기만 하는 코스를 피하고 싶을 때 넣기 좋은 무료 체험 앵커다.",
      highlights: [
        "EV 전시, 가상 주행, 레이싱 시뮬레이터, 맞춤형 EV 선택, Apple Vision Pro 체험까지 이어진다.",
        "40~70분 정도 짧게 넣기 좋은 구조다.",
        "식사 전 에너지를 올리는 역할에 특히 강하다."
      ],
      hours: "공식 페이지 본문에서 고정 시간 확인이 어려워 방문 전 재확인 권장.",
      dateUse:
        "체험형 코스의 핵심 앵커. 산책만으로는 약할 때 중간 변주를 만들어 준다.",
      caution:
        "브랜드 공간은 이벤트성 운영 변화가 생길 수 있어 당일 공식 페이지 확인이 좋다.",
      courseFit: "체험형 메인 앵커",
      tags: ["무료 체험", "브랜드 쇼룸", "Apple Vision Pro", "식전 앵커"],
      sources: [
        { label: "기아 공식 체험거점", url: "https://www.kia.com/kr/experience/flagship/unplugged-ground" },
        { label: "현대차그룹 뉴스룸 리뉴얼 기사", url: "https://www.hyundai.co.kr/news/CONT0000000000171985" },
        { label: "기아 리뉴얼 오픈 기사", url: "https://www.hyundai.co.kr/amp/CONT0000000000172703" }
      ]
    },
    {
      slug: "sobeauty-house",
      name: "소브티하우스",
      kicker: "tiny things together",
      category: "experience",
      categoryLabel: "체험",
      area: "연무장길",
      detailLevel: "재확인 권장",
      address: "서울 성동구 연무장길 37-7",
      coordinates: { lat: 37.5438, lon: 127.0536 },
      positioning:
        "성수 소품샵 투어용으로 쓰기 좋은 아기자기한 편집 소품 공간이다.",
      summary:
        "첫 만남이나 낮 코스에서 대화거리를 만드는 중간 체류 스폿으로 설득력이 높다.",
      highlights: [
        "문구, 액세서리, 작은 오브제류를 같이 고르는 재미가 있다.",
        "짧게 들러도 서로 취향을 보기 좋다.",
        "카페와 저녁 사이의 가벼운 체류 포인트로 적합하다."
      ],
      hours: "최신 운영시간은 인스타그램 또는 당일 플레이스 확인 권장.",
      dateUse:
        "말을 오래 이어 가기 어렵다면, 같이 고르고 반응하는 행동을 만들어 주는 카드로 좋다.",
      caution:
        "상점형 공간이라 오래 체류하는 장소는 아니다. 템포 조절용으로 넣는 편이 맞다.",
      courseFit: "기본형 중간, 체험형 보조",
      tags: ["소품샵", "대화거리", "가벼운 체류", "연무장길"],
      sources: [
        { label: "Corner - 소브티하우스", url: "https://www.corner.inc/place/267039" },
        { label: "성수 소품샵 투어 후기", url: "https://belifgd.tistory.com/entry/%EC%84%B1%EC%88%98-%EC%86%8C%ED%92%88%EC%83%B5" },
        { label: "소브티하우스 위치 언급 블로그", url: "https://kototo1.tistory.com/entry/%EC%84%B1%EC%88%98%EB%8F%99-%EC%86%8C%ED%92%88%EC%83%B5-%ED%88%AC%EC%96%B4-%EA%B3%B5%EA%B0%84-%EC%99%80%EB%94%94%EC%A6%88-%EB%A9%94%EC%9D%B4%EB%93%9C%ED%8C%8C%EB%8B%88-%EC%86%8C%EB%B8%8C%ED%8B%B0%ED%95%98%EC%9A%B0%EC%8A%A4-%ED%97%A4%EC%9D%B4%EB%8D%B0%EC%9D%B4" }
      ]
    },
    {
      slug: "photo-objet-seongsu",
      name: "포토오브제 성수점",
      kicker: "self-portrait output",
      category: "experience",
      categoryLabel: "체험",
      area: "연무장길",
      detailLevel: "검증됨",
      address: "서울 성동구 연무장길 43-1",
      coordinates: { lat: 37.5428665, lon: 127.0541934 },
      positioning:
        "무인 셀프사진관 계열 중에서도 콘셉트 부스가 강한 쪽. 사진 한 장 남기기 목적이 분명한 스폿이다.",
      summary:
        "체험형 코스의 중심 장면을 맡기기 가장 쉬운 카드다.",
      highlights: [
        "수조, 세탁기, 비즈니스석, 엘리베이터 같은 콘셉트 부스가 분명하다.",
        "브랜드 공식이 24시간 무인 운영을 전면에 내세운다.",
        "결과물이 남기 때문에 데이트 만족도가 높다."
      ],
      hours: "24시간 운영으로 확인됨.",
      dateUse:
        "저녁 전후, 혹은 2차 전후에 넣기 좋다. 첫 만남보다 조금 편해진 사이에서 더 잘 터진다.",
      caution:
        "부스별 컨디션과 대기 상황은 현장 기준이므로 너무 촉박한 일정은 피하는 편이 좋다.",
      courseFit: "체험형 핵심 결과물",
      tags: ["셀프사진관", "24시간", "결과물 남음", "콘셉트 부스"],
      sources: [
        { label: "포토오브제 공식", url: "https://photoobjet.co.kr/" },
        { label: "Corner - 포토오브제 성수점", url: "https://www.corner.inc/place/696584" },
        { label: "당근알바 - 포토오브제 성수점", url: "https://www.daangn.com/kr/jobs/%ED%8F%AC%ED%86%A0%EC%98%A4%EB%B8%8C%EC%A0%9C-%EC%85%80%ED%94%84-%EC%82%AC%EC%A7%84%EA%B4%80-%EA%B7%BC%EB%AC%B4%ED%95%98%EC%8B%A4-%ED%8C%8C%ED%8A%B8%ED%83%80%EC%9D%B4%EB%A8%B8-%EA%B5%AC%EC%9D%B8%ED%95%A9%EB%8B%88%EB%8B%A4-enestwiusvpo/" }
      ]
    },
    {
      slug: "custom-film-seongsu",
      name: "커스텀필름 성수",
      kicker: "film mood portrait",
      category: "experience",
      categoryLabel: "체험",
      area: "뚝섬역 인근",
      detailLevel: "재확인 권장",
      address: "서울 성동구 왕십리로14길 19-1 지하1층",
      coordinates: { lat: 37.5457, lon: 127.0436 },
      positioning:
        "필름 무드 셀프사진관. 포토오브제보다 조금 더 촬영 결과물 중심으로 보이는 카드다.",
      summary:
        "우리 사진을 남기고 싶은 날에, 조금 더 필름 감성을 선호할 때 잘 맞는다.",
      highlights: [
        "필름 감성 필터와 포맷 중심의 셀프 촬영 경험이다.",
        "기념일이나 커플 사진 수요와 잘 붙는다.",
        "뚝섬역 쪽 동선과 연결이 좋다."
      ],
      hours: "화-금 13:00-21:00 / 토-일 11:00-21:00 / 월 휴무로 확인되나 재확인 권장.",
      dateUse:
        "첫 만남보다는 이미 어느 정도 편한 사이에서 더 잘 맞는 사진 카드다.",
      caution:
        "촬영 흐름상 서로 포즈를 잡아줘야 해서, 어색한 첫 만남에는 포토오브제가 더 무난할 수 있다.",
      courseFit: "체험형 보조, 뚝섬권 사진 포인트",
      tags: ["필름 무드", "셀프사진", "뚝섬역", "기념일"],
      sources: [
        { label: "Corner - 커스텀필름 성수", url: "https://www.corner.inc/place/696591" },
        { label: "사람인 기업정보", url: "https://www.saramin.co.kr/zf_user/company-info/view/csn/Q1cxbkNiUExjQlU0VDBGWUlGZlYrUT09/company_nm/%EC%BB%A4%EC%8A%A4%ED%85%80%ED%95%84%EB%A6%84%2B%EC%84%B1%EC%88%98%2B%EC%85%80%ED%94%84%EC%82%AC%EC%A7%84%EA%B4%80" },
        { label: "Trip.com 모먼트", url: "https://kr.trip.com/moments/detail/seoul-234-133395327/" }
      ]
    },
    {
      slug: "seongsu-cloud-bridge",
      name: "성수구름다리",
      kicker: "sunset bridge",
      category: "walk",
      categoryLabel: "산책",
      area: "서울숲-한강 연결",
      detailLevel: "검증됨",
      address: "서울 성동구 성수동1가 일대",
      coordinates: { lat: 37.5477, lon: 127.0418 },
      positioning:
        "성수 실내 코스에 숨을 붙여 주는 노을·야경용 산책 포인트다.",
      summary:
        "성수 코스를 기억나는 하루로 바꾸는 장면용 스폿에 가깝다.",
      highlights: [
        "한강, 성수대교, 스카이라인을 보는 흐름이 핵심이다.",
        "서울숲 산책 뒤 20~30분 끼워 넣기 좋다.",
        "야경과 노을 모두 강점이 있다."
      ],
      hours: "보행교 성격상 상시 개방으로 보되, 시설 정비는 공문 단위 변동 가능.",
      dateUse:
        "노을형 코스의 핵심 장면. 실내 위주 동선을 환기하고 싶을 때 가장 강력하다.",
      caution:
        "날씨 영향을 크게 받는다. 비나 강풍이 있으면 장점이 크게 줄어든다.",
      courseFit: "노을형 핵심 장면",
      tags: ["노을 포인트", "야경", "서울숲 연결", "기억 포인트"],
      sources: [
        { label: "서울시 정보소통광장 - 성수구름다리 정비 보고", url: "https://opengov.seoul.go.kr/sanction/34313568" },
        { label: "Cosmopolitan Korea - 성수 구름다리", url: "https://www.cosmopolitan.co.kr/article/76515" },
        { label: "DotMap - 성수구름다리", url: "https://dotmap.io/portal/channel/T-y6r6Da2aQH0iKj7eTDN/place/EDSOdntvVEIuHi65-OyF1" }
      ]
    },
    {
      slug: "seoul-forest",
      name: "서울숲",
      kicker: "green buffer",
      category: "walk",
      categoryLabel: "산책",
      area: "서울숲",
      detailLevel: "검증됨",
      address: "서울 성동구 뚝섬로 273",
      coordinates: { lat: 37.5446, lon: 127.0376 },
      positioning:
        "성수 데이트에서 가장 안전한 산책 앵커. 날씨만 받쳐주면 코스 전체 질감이 좋아진다.",
      summary:
        "브런치 뒤 걷거나, 성수구름다리로 넘어가기 전 완충 구간으로 가장 쓰기 쉽다.",
      highlights: [
        "넓은 공원 산책과 계절 풍경 감상이 핵심이다.",
        "곤충식물원과 나비정원 같은 내부 시설을 함께 볼 수 있다.",
        "성수 실내 코스를 환기하는 데 가장 안정적인 야외 카드다."
      ],
      hours: "생태숲 05:30-21:30 / 곤충식물원·나비정원은 계절별 운영시간 별도.",
      dateUse:
        "몇 번 만난 사이에 특히 좋지만, 첫 만남에도 과하지 않은 산책 카드로 쓸 수 있다.",
      caution:
        "날씨와 계절의 영향을 크게 받는다. 한여름 한낮에는 체감 피로가 커질 수 있다.",
      courseFit: "노을형 중간 완충, 산책형 베이스",
      tags: ["산책", "계절감", "완충 구간", "서울 대표 공원"],
      sources: [
        { label: "서울숲 이용시간 공식", url: "https://parks.seoul.go.kr/template/seoulforest/facilityHours.do" },
        { label: "서울숲 공식 안내", url: "https://parks.seoul.go.kr/seoulforest/" },
        { label: "서울 공식 관광정보 - 서울숲", url: "https://korean.visitseoul.net/etc-area/%EC%84%9C%EC%9A%B8%EC%88%B2_/1840" }
      ]
    },
    {
      slug: "project-rent-oldtown",
      name: "프로젝트 렌트 올드타운점",
      kicker: "popup schedule",
      category: "experience",
      categoryLabel: "체험",
      area: "성수 메인 스트리트",
      detailLevel: "검증됨",
      address: "서울 성동구 성수이로3길 18-1",
      coordinates: { lat: 37.5455, lon: 127.0498 },
      positioning:
        "고정 명소라기보다 그때 걸린 팝업이 무엇이냐가 핵심인 일정형 공간이다.",
      summary:
        "성수 코스가 카페 위주로 흘러갈 때 중간 변주를 주기 좋은 팝업 카드다.",
      highlights: [
        "브랜드 팝업과 전시성 협업 프로젝트를 짧게 보는 공간이다.",
        "공간 자체보다 당일 콘텐츠가 중요하다.",
        "메인 스트리트 동선 안에서 큰 이탈 없이 끼워 넣기 쉽다."
      ],
      hours: "공간 자체보다 팝업별 운영시간이 우선. 공식 스케줄 확인 필요.",
      dateUse:
        "카페와 저녁 사이, 혹은 쇼핑·구경 비중을 늘리고 싶은 날에 유용하다.",
      caution:
        "고정 전시처럼 생각하면 안 된다. 방문 전에 반드시 현재 일정 확인이 필요하다.",
      courseFit: "체험형 보조, 성수 변주 카드",
      tags: ["팝업", "일정형 공간", "브랜드 협업", "중간 변주"],
      sources: [
        { label: "프로젝트 렌트 스케줄", url: "https://www.project-rent.com/schedule" },
        { label: "Design+ - 프로젝트 렌트 x 아디코 팝업", url: "https://design.co.kr/article/30065/" },
        { label: "위픽레터 - 프로젝트 렌트 주소 언급", url: "https://letter.wepick.kr/510/4345516" }
      ]
    },
    {
      slug: "vinyl-hangang",
      name: "바이닐 한강점",
      kicker: "finale view",
      category: "walk",
      categoryLabel: "산책·피날레",
      area: "한강",
      detailLevel: "검증됨",
      address: "서울 광진구 강변북로 2216",
      coordinates: { lat: 37.5313, lon: 127.0661 },
      positioning:
        "한강 뷰와 LP 감상을 같이 가져가는 몰입형 카페. 성수 본권역에서 살짝 이동하는 피날레 카드 느낌이 강하다.",
      summary:
        "성수에서 저녁을 마친 뒤 하루를 닫는 마지막 장면으로 쓰기 좋은 곳이다.",
      highlights: [
        "LP를 고르고 턴테이블과 헤드셋으로 음악을 듣는 흐름이다.",
        "한강 뷰가 붙어 있어 이동 가치가 분명한 편이다.",
        "노을형 코스의 마지막 장면으로 설득력이 높다."
      ],
      hours: "월-목 10:00-22:00 / 금-일 10:00-23:00",
      dateUse:
        "노을형이나 기념일형 후반부에 하루를 정리하는 장면으로 특히 좋다.",
      caution:
        "성수 본권역에서 살짝 이동해야 하므로 체력과 귀가 동선을 같이 봐야 한다.",
      courseFit: "노을형 피날레",
      tags: ["한강 뷰", "LP 감상", "피날레", "이동 가치"],
      sources: [
        { label: "테이블링 - 바이닐 한강", url: "https://www.tabling.co.kr/place/68a3d95d11c8e44915eb2335" },
        { label: "Esquire Korea - 바이닐 한강점", url: "https://www.esquirekorea.co.kr/article/1886974" },
        { label: "판다랭크 - 바이닐 한강점 후기", url: "https://pandarank.net/contents/698935a23a962d6ca1c24fd9" }
      ]
    },
    {
      slug: "corner-room-seongsu",
      name: "코너룸 성수",
      kicker: "balanced classic dinner",
      category: "dinner",
      categoryLabel: "저녁",
      area: "서울숲·뚝섬권",
      detailLevel: "검증됨",
      address: "서울 성동구 상원길 64 2층",
      coordinates: { lat: 37.5459, lon: 127.0448 },
      positioning:
        "서울숲·뚝섬권에서 가장 무난하게 먹히는 데이트용 양식 앵커다.",
      summary:
        "분위기, 음식, 예약 안정감이 고르게 좋은 쪽이라 메인 식사로 가장 추천하기 쉬운 카드다.",
      highlights: [
        "생면 라자냐 롤, 와규 스테이크, 트러플 크림 감자 뇨끼 반응이 강하다.",
        "와인과 함께 가기 좋은 분위기다.",
        "첫 만남과 소개팅 수요가 꾸준히 붙는 타입이다."
      ],
      hours: "월·수·목·금·토 11:30-22:30 / 브레이크 15:00-17:30 / 화 휴무",
      dateUse:
        "기본형 코스의 저녁 앵커로 가장 안정적이다. 큰 실패 없이 ‘잘 골랐다’는 인상을 남기기 좋다.",
      caution:
        "저녁 피크에는 예약 흐름이 강하다. 즉흥적으로 가면 대기 가능성을 봐야 한다.",
      courseFit: "기본형 핵심 저녁",
      tags: ["생면 라자냐", "와인 저녁", "첫 만남 안전", "서울숲권"],
      sources: [
        { label: "다이닝코드 - 코너룸 성수", url: "https://www.diningcode.com/profile.php?rid=5FETYwfppNkN" },
        { label: "Korean translation - Corner Room Seongsu", url: "https://cu.ne.kr/seongsu-1-ga-2-dong-restaurant-corner-room-seongsu-seongdong-gu-seoul/" }
      ]
    },
    {
      slug: "flavor-town",
      name: "플레이버타운",
      kicker: "menu reaction dinner",
      category: "dinner",
      categoryLabel: "저녁",
      area: "서울숲권",
      detailLevel: "검증됨",
      address: "서울 성동구 성수동1가 668-68 1층, 2층",
      coordinates: { lat: 37.5437301, lon: 127.0388482 },
      positioning:
        "중식 베이스 아시안 퓨전으로 오늘 좀 특별하게 먹자 무드에 잘 맞는 성수 대표 카드다.",
      summary:
        "메뉴 자체가 이야기거리가 되는 타입이라 체험형 데이트와 특히 잘 붙는다.",
      highlights: [
        "족발튀김, 새우 토스트, 누들·커리류처럼 설명하기 쉬운 강한 메뉴가 있다.",
        "예약 난이도와 웨이팅 문맥이 오래전부터 강하게 붙어 있다.",
        "성수에서 식사의 존재감을 확 올리고 싶을 때 좋다."
      ],
      hours: "화-목 17:30-22:30 / 금-토 12:00-22:00 / 일·월 휴무",
      dateUse:
        "오늘은 평범한 파스타 말고 조금 더 반응이 오는 식사를 하고 싶을 때 좋다.",
      caution:
        "인기 타이밍엔 예약과 웨이팅을 감안해야 한다.",
      courseFit: "체험형 저녁, 업그레이드 저녁",
      tags: ["아시안 퓨전", "메뉴 반응 좋음", "성수 핫플", "예약 수요"],
      sources: [
        { label: "한국 코카-콜라 - 플레이버타운 소개", url: "https://www.coca-cola.com/kr/ko/offerings/food/coke-meal-5" },
        { label: "에스콰이어 코리아 - 성수 신상 핫플레이스 5", url: "https://www.esquirekorea.co.kr/article/56327" }
      ]
    },
    {
      slug: "elloco-seongsu",
      name: "엘로코 성수",
      kicker: "anniversary dinner",
      category: "dinner",
      categoryLabel: "저녁",
      area: "성수2가3동",
      detailLevel: "검증됨",
      address: "서울 성동구 동일로 75-18 2F, 3F",
      coordinates: { lat: 37.540327, lon: 127.0626811 },
      positioning:
        "기념일이나 오늘은 확실히 공들였다는 인상을 주기 좋은 스패니시 기반 다이닝이다.",
      summary:
        "런치·디너 코스 밀도가 좋아 기념일형 코스 메인 앵커로 쓰기 쉽다.",
      highlights: [
        "런치/디너 테이스팅 코스, 꿀대구, 오리, 스테이크, 뇨끼 등 코스 밀도가 선명하다.",
        "블랙 톤 무드가 기념일 인상을 분명하게 만든다.",
        "예약 흐름이 비교적 명확하다."
      ],
      hours: "매일 12:00-22:00 / 브레이크 15:00-17:00 / 화 휴무",
      dateUse:
        "기념일형 코스에서 메인 식사 밀도를 올리고 싶을 때 가장 다루기 쉬운 카드다.",
      caution:
        "즉흥 방문보다 예약형으로 접근하는 편이 좋다.",
      courseFit: "기념일형 메인 식사",
      tags: ["기념일 저녁", "스패니시 다이닝", "코스 지향", "블랙 톤"],
      sources: [
        { label: "다이닝코드 - 엘로코", url: "https://www.diningcode.com/profile.php?rid=OMLS51ymsRKt" },
        { label: "캐치테이블 - dotseongsu", url: "https://app.catchtable.co.kr/ct/shop/dotseongsu" },
        { label: "키자드 수집 페이지", url: "https://www.keyzard.cc/register/nb/hewonh" }
      ]
    },
    {
      slug: "xesc-menzl",
      name: "세스크멘슬",
      kicker: "charcuterie and wine",
      category: "dinner",
      categoryLabel: "저녁",
      area: "서울숲권",
      detailLevel: "검증됨",
      address: "서울 성동구 성수이로14길 7 1층",
      coordinates: { lat: 37.5422, lon: 127.058 },
      positioning:
        "서울숲권에서 샤퀴테리와 와인 결이 가장 또렷한 유럽식 저녁 카드다.",
      summary:
        "노을형 코스 뒤 식사 밀도를 올리면서도 와인 무드를 유지하고 싶을 때 좋다.",
      highlights: [
        "보끼 플래터, 수제 소시지, 슈니첼, 부어스트 같은 유럽식 메뉴가 강하다.",
        "와인 동반 저녁 수요가 높고 야외 테라스 문맥도 붙는다.",
        "낮술과 저녁 둘 다 가능한 스펙트럼이 있다."
      ],
      hours: "수-일 11:00-23:00 / 월·화 휴무",
      dateUse:
        "산책 뒤 와인과 고기 결이 있는 저녁을 하고 싶을 때, 혹은 서울숲권 저녁 앵커로 좋다.",
      caution:
        "와인 친화형 공간이라 술 없이 가는 저녁과는 분위기 체감이 다를 수 있다.",
      courseFit: "노을형 저녁, 와인형 저녁",
      tags: ["샤퀴테리", "와인 페어링", "서울숲 저녁", "낮술 가능"],
      sources: [
        { label: "코스모폴리탄 - 서울 샤퀴테리 맛집", url: "https://www.cosmopolitan.co.kr/article/58960" },
        { label: "조선일보 - 세스크멘슬 소개", url: "https://www.chosun.com/site/data/html_dir/2020/05/19/2020051900228.html" },
        { label: "무신사 매거진 - 성수 로컬 F&B", url: "https://www.musinsa.com/mz/magazine/view/110157" }
      ]
    },
    {
      slug: "gnocchi-room",
      name: "뇨끼룸",
      kicker: "handmade pasta focus",
      category: "dinner",
      categoryLabel: "저녁",
      area: "서울숲권",
      detailLevel: "검증됨",
      address: "서울 성동구 성수일로1길 8 1층",
      coordinates: { lat: 37.5417367, lon: 127.0477874 },
      positioning:
        "수제 뇨끼와 생면 파스타 쪽으로 감도가 선명한 데이트용 양식 카드다.",
      summary:
        "코너룸보다 조금 더 질감이 분명한 파스타·뇨끼 저녁을 원할 때 좋다.",
      highlights: [
        "훈연 치즈 크림 감자 뇨끼, 트러플 크림 뇨끼, 생면 파스타 언급이 강하다.",
        "예약금 기반 예약 흐름이 붙는다.",
        "데이트·기념일 수요가 꾸준히 있는 편이다."
      ],
      hours: "매일 11:30-22:00 / 브레이크 15:00-17:30 / 라스트오더 21:00",
      dateUse:
        "사진보다 음식 질감을 앞세우는 저녁을 하고 싶을 때 좋다.",
      caution:
        "주차 불가와 예약 흐름을 같이 봐야 한다.",
      courseFit: "기본형 저녁 대체, 파스타 중심 저녁",
      tags: ["수제 뇨끼", "생면 파스타", "예약 추천", "양식 데이트"],
      sources: [
        { label: "다이닝코드 - 뇨끼룸", url: "https://www.diningcode.com/profile.php?rid=1HXxDKdu5oYy" }
      ]
    },
    {
      slug: "izza",
      name: "이짜",
      kicker: "pizza date",
      category: "dinner",
      categoryLabel: "저녁",
      area: "성수2가3동",
      detailLevel: "재확인 권장",
      address: "서울 성동구 광나루로4가길 33 1층",
      coordinates: { lat: 37.5424, lon: 127.05 },
      positioning:
        "성수에서 피자 중심 저녁으로 갈 때 신상감이 강한 이탈리안 카드 중 하나다.",
      summary:
        "캐주얼하지만 분위기는 챙기고 싶은 날의 피자 데이트 카드에 가깝다.",
      highlights: [
        "클래식 도우와 대나무 숯가루 도우 중 선택하는 콘셉트가 분명하다.",
        "잠봉, 트러플, 카치오에페페 계열 반응이 좋다.",
        "저녁 피크에는 대기 가능성을 감안해야 한다."
      ],
      hours: "평일 11:30-22:00 / 브레이크 15:00-17:30, 주말 12:00-22:00 / 브레이크 15:30-17:30",
      dateUse:
        "기분은 내고 싶지만 코스 다이닝까지는 아닌 날, 혹은 피자 중심 캐주얼 데이트에 좋다.",
      caution:
        "공식성이 높은 출처보다 후기 기반 정보 비중이 커서 운영시간은 다시 보는 편이 좋다.",
      courseFit: "체험형 저녁 대체, 캐주얼 피자 저녁",
      tags: ["화덕 피자", "신상 감도", "캐주얼 디너", "피자 데이트"],
      sources: [
        { label: "이짜 방문 후기 1", url: "https://misoring.tistory.com/41" },
        { label: "이짜 방문 후기 2", url: "https://bkkot.tistory.com/278" }
      ]
    },
    {
      slug: "omil-seongsu",
      name: "오밀 성수",
      kicker: "cute dinner",
      category: "dinner",
      categoryLabel: "저녁",
      area: "성수2가3동",
      detailLevel: "검증됨",
      address: "서울 성동구 아차산로5길 37-1 1층 101호",
      coordinates: { lat: 37.5434, lon: 127.0491 },
      positioning:
        "귀엽고 반응 좋은 메뉴로 사진 남는 저녁에 강한 퓨전 레스토랑이다.",
      summary:
        "메뉴가 명확하고 결과물이 예뻐서 체험형 데이트와 잘 붙는다.",
      highlights: [
        "러버덕 오므라이스, 소바 마끼, 뇨끼·파스타류처럼 비주얼과 설명이 선명하다.",
        "예약 흐름이 있고 회전도 비교적 빠른 편이다.",
        "가벼운 기념일이나 사진 남는 저녁에 강하다."
      ],
      hours: "매일 11:30-21:15 / 라스트오더 20:30",
      dateUse:
        "식사 자체보다 반응과 분위기가 중요한 날에 좋다.",
      caution:
        "조용한 파인다이닝 무드와는 결이 다르다. 좀 더 밝고 반응형인 저녁이다.",
      courseFit: "체험형 저녁, 사진형 저녁",
      tags: ["러버덕 오므라이스", "사진 잘 나옴", "가벼운 기념일", "퓨전"],
      sources: [
        { label: "다이닝코드 - 오밀 성수", url: "https://www.diningcode.com/profile.php?rid=755WNP80Xr4P" },
        { label: "CassConnect - 오밀 성수", url: "https://connect.cass.co.kr/venue/ChIJux5UdgelfDURUdocjR44tZI" },
        { label: "디너의여왕 - 오밀 성수", url: "https://dinnerqueen.net/taste/1200609" }
      ]
    },
    {
      slug: "negi-live",
      name: "네기라이브",
      kicker: "high-end omakase",
      category: "dinner",
      categoryLabel: "저녁",
      area: "성수역 인근",
      detailLevel: "검증됨",
      address: "서울 성동구 성수이로 97 5층",
      coordinates: { lat: 37.5449, lon: 127.0555 },
      positioning:
        "갑각류 오마카세로 날의 성격을 확 바꾸는 성수 파인다이닝 카드다.",
      summary:
        "기념일형 코스를 상단으로 끌어올리는 고가 디너 앵커에 가깝다.",
      highlights: [
        "런치 코스, 대게·킹크랩 중심 디너 코스, 셰프 설명이 붙는 카운터형 경험이 핵심이다.",
        "예약 경쟁이 꽤 강한 편으로 읽힌다.",
        "날의 무게감을 분명하게 바꾸는 효과가 있다."
      ],
      hours: "12:00-22:00 범위 운영으로 보이며 런치·디너 세션 중심.",
      dateUse:
        "오늘은 확실히 특별하다는 인상을 주고 싶을 때 가장 강한 카드 중 하나다.",
      caution:
        "예산과 예약 난도가 높다. 즉흥형 데이트보다는 계획형 기념일에 맞는다.",
      courseFit: "기념일형 최상단 식사",
      tags: ["갑각류 오마카세", "고가 디너", "기념일 최상단", "셰프 브랜딩"],
      sources: [
        { label: "Daum - 네기라이브 소개 기사", url: "https://v.daum.net/v/20250822154506768" },
        { label: "네기라이브 디너 후기", url: "https://sobley.tistory.com/entry/%EC%84%9C%EC%9A%B8-%EC%84%B1%EC%88%98-%EB%A7%9B%EC%A7%91-%EB%84%A4%EA%B8%B0%EB%9D%BC%EC%9D%B4%EB%B8%8C-%EB%94%94%EB%84%88-%EA%B0%91%EA%B0%81%EB%A5%98-%EC%98%A4%EB%A7%88%EC%B9%B4%EC%84%B8" },
        { label: "식신 - 네기라이브", url: "https://www.siksinhot.com/P/1545265" }
      ]
    },
    {
      slug: "the-storage-room",
      name: "더스토리지룸",
      kicker: "secret entrance",
      category: "night",
      categoryLabel: "바·나이트",
      area: "연무장7길",
      detailLevel: "검증됨",
      address: "서울 성동구 연무장7길 8-1 지하 1층",
      coordinates: { lat: 37.5434374, lon: 127.054687 },
      positioning:
        "치즈 가게 뒤 비밀 통로로 들어가는 성수 대표 스피크이지 바다.",
      summary:
        "오늘 2차는 장소빨로 간다 싶은 날에 가장 강한 경험형 바 카드다.",
      highlights: [
        "1920년대 금주법 시대 뉴욕 무드와 클래식 칵테일이 핵심이다.",
        "비밀 통로 자체가 데이트 대화거리가 된다.",
        "공간 경험으로 분위기를 끌어올리기 좋다."
      ],
      hours: "매일 18:00-01:00 / 금·토 18:00-02:00",
      dateUse:
        "첫 만남 후반부, 기념일 2차, 혹은 경험형 밤 코스에 특히 잘 맞는다.",
      caution:
        "분위기 중심 공간이라 시끄러운 모임형 바를 기대하면 결이 다르다.",
      courseFit: "기본형·기념일형 2차",
      tags: ["스피크이지", "비밀 통로", "클래식 칵테일", "경험형 바"],
      sources: [
        { label: "GQ Korea - 성수 스피크이지 추천", url: "https://www.gqkorea.co.kr/2025/05/22/%EB%B0%A4%EC%97%94-%EC%84%B1%EC%88%98%EB%8F%99%EC%97%90%EC%84%9C-%EB%AD%90%ED%95%B4-4/" },
        { label: "Korea Exploration - Seongsu district", url: "https://koreaexploration.com/en/seongsu-district/" }
      ]
    },
    {
      slug: "music-warehouse-lp-bar",
      name: "음악창고 LP BAR",
      kicker: "request songs",
      category: "night",
      categoryLabel: "바·나이트",
      area: "뚝섬로",
      detailLevel: "검증됨",
      address: "서울 성동구 뚝섬로 395",
      coordinates: { lat: 37.539, lon: 127.0553 },
      positioning:
        "신청곡을 틀어주는 클래식한 성수 LP 바다.",
      summary:
        "너무 힙하기보다 편하게 오래 머무는 밤을 만들고 싶을 때 좋은 대화형 바 카드다.",
      highlights: [
        "LP 감상과 자유로운 신청곡 경험이 핵심이다.",
        "맥주와 간단한 안주 조합으로 오래 있기 편하다.",
        "음악 이야기로 대화가 이어지기 쉽다."
      ],
      hours: "매일 18:00-01:00",
      dateUse:
        "첫 만남보다도 조금 편해진 사이, 혹은 음악 얘기를 자연스럽게 풀고 싶은 날에 좋다.",
      caution:
        "공간의 매력은 클래식한 레트로 무드에 있다. 세련된 칵테일 바 결과는 다르다.",
      courseFit: "기본형 2차, 음악형 밤 코스",
      tags: ["LP 바", "신청곡", "레트로", "편안한 밤"],
      sources: [
        { label: "식신 - 음악창고 LP BAR", url: "https://www.siksinhot.com/P/828265" },
        { label: "테이블링 - 음악창고 LP BAR", url: "https://www.tabling.co.kr/place/677cd23d66de5f06988958b0" }
      ]
    },
    {
      slug: "ximxim",
      name: "심심",
      kicker: "music-led night",
      category: "night",
      categoryLabel: "바·나이트",
      area: "에스팩토리",
      detailLevel: "검증됨",
      address: "서울 성동구 연무장15길 11 B동 3층 308호",
      coordinates: { lat: 37.5428358, lon: 127.0589363 },
      positioning:
        "에스팩토리 안에 있는 DJ 스튜디오 바 겸 하우스·테크노 무드 라운지다.",
      summary:
        "음악이 분명한 밤을 만들고 싶지만 클럽처럼 과하게 가고 싶지는 않을 때 좋다.",
      highlights: [
        "MIXMIX TV 현장 공간, 라이브 이벤트, 칵테일이 포인트다.",
        "외국인 친구와 가기 좋은 글로벌 바이브가 있다.",
        "심야 코스의 온도를 음악으로 올리는 타입이다."
      ],
      hours: "수·목 19:00-24:00 / 금·토 19:00-02:00",
      dateUse:
        "체험형 코스 후반이나, 음악이 중요한 커플 데이트에 잘 맞는다.",
      caution:
        "차분한 대화 위주의 바를 원하면 범바나 스카프 쪽이 더 잘 맞을 수 있다.",
      courseFit: "체험형 밤, 음악형 2차",
      tags: ["DJ 스튜디오", "하우스·테크노", "에스팩토리", "글로벌 무드"],
      sources: [
        { label: "S FACTORY - XIMXIM", url: "https://www.sfactory.co.kr/blogPost/ximxim_seoul" },
        { label: "Your Local's Guide - Seongsu bars", url: "https://www.yourlocalsguide.com/bars-in-seongsu-dong/" }
      ]
    },
    {
      slug: "baroque-seongsu",
      name: "바로크",
      kicker: "tailored cocktails",
      category: "night",
      categoryLabel: "바·나이트",
      area: "성수일로3길",
      detailLevel: "검증됨",
      address: "서울 성동구 성수일로3길 7-7 1층",
      coordinates: { lat: 37.5448, lon: 127.0489 },
      positioning:
        "취향 질문지로 맞춤 칵테일을 만들어주는 프라이빗 칵테일 바다.",
      summary:
        "소개팅 후반부나 기념일 2차에서 취향 중심 경험을 만들고 싶을 때 강하다.",
      highlights: [
        "오마카세식 맞춤 칵테일 경험이 핵심이다.",
        "킹스맨 같은 프라이빗한 무드가 강하게 언급된다.",
        "장소 자체가 데이트의 성격을 바꿔 준다."
      ],
      hours: "19:00-02:00 / 월요일 휴무",
      dateUse:
        "기념일, 소개팅 후반부, 혹은 취향 이야기를 메인 콘텐츠로 만들고 싶은 밤에 좋다.",
      caution:
        "가벼운 맥주 한 잔 장소와는 다르다. 경험형 바에 가깝다.",
      courseFit: "기념일형 2차, 경험형 바",
      tags: ["맞춤 칵테일", "프라이빗", "킹스맨 무드", "기념일"],
      sources: [
        { label: "GQ Korea - 성수 스피크이지 추천", url: "https://www.gqkorea.co.kr/2025/05/22/%EB%B0%A4%EC%97%94-%EC%84%B1%EC%88%98%EB%8F%99%EC%97%90%EC%84%9C-%EB%AD%90%ED%95%B4-4/" }
      ]
    },
    {
      slug: "beombar",
      name: "범바",
      kicker: "quiet conversation bar",
      category: "night",
      categoryLabel: "바·나이트",
      area: "성수이로7길",
      detailLevel: "검증됨",
      address: "서울 성동구 성수이로7길 1 2층",
      coordinates: { lat: 37.5452, lon: 127.0506 },
      positioning:
        "힙한데 시끄럽지 않아 조용히 이야기하기 좋은 성수 칵테일 바다.",
      summary:
        "시끄러운 바는 싫고 분위기는 챙기고 싶을 때 가장 다루기 쉬운 대화형 칵테일 바 카드다.",
      highlights: [
        "위스키와 칵테일 종류가 넓고 논알콜 칵테일까지 갖춘 점이 눈에 띈다.",
        "대화 중심 데이트에 잘 맞는다.",
        "밤 코스를 무리 없이 올려 주는 중간 강도의 바다."
      ],
      hours: "매일 19:00-03:00",
      dateUse:
        "첫 만남 후반부나 기본형 2차에서 실패 확률이 낮다.",
      caution:
        "공식성 높은 출처보다 후기성 출처 비중이 있는 편이라 운영 메모는 다시 확인하는 편이 안전하다.",
      courseFit: "기본형 2차, 기념일형 대화형 바",
      tags: ["조용한 칵테일바", "위스키", "논알콜 옵션", "대화형"],
      sources: [
        { label: "투데이찐찐 - 성수 범바 후기", url: "https://todayszinzin.tistory.com/entry/%EB%B2%94%EB%B0%94" },
        { label: "Your Local's Guide - Seongsu bars", url: "https://www.yourlocalsguide.com/bars-in-seongsu-dong/" },
        { label: "네이트뉴스 - 글렌피딕 페스티벌 참여 바", url: "https://news.nate.com/view/20240705n16444" }
      ]
    },
    {
      slug: "grund-seongsu",
      name: "그룬트",
      kicker: "riesling room",
      category: "night",
      categoryLabel: "바·나이트",
      area: "성수이로12길",
      detailLevel: "검증됨",
      address: "서울 성동구 성수이로12길 13 2층",
      coordinates: { lat: 37.5438, lon: 127.0571 },
      positioning:
        "성수에서 리슬링을 전면에 내세운 독일 와인 전문 바다.",
      summary:
        "와인 취향이 분명한 날, 혹은 식사 후 한 병 천천히 마시고 싶은 날에 설득력이 높다.",
      highlights: [
        "리슬링 샘플러와 독일식 플레이트가 강점이다.",
        "낮와인부터 밤와인까지 폭이 있다.",
        "와인 입문과 심화를 둘 다 커버하는 큐레이션이라는 인상이 강하다."
      ],
      hours: "15:00-00:00",
      dateUse:
        "와인을 목적지로 잡는 데이트, 혹은 기념일 후반부의 조용한 마감에 좋다.",
      caution:
        "칵테일 중심 바를 원한다면 결이 다르다. 와인형 밤 카드다.",
      courseFit: "기념일형 2차, 와인형 밤",
      tags: ["리슬링 전문", "독일 플레이트", "낮와인", "와인 덕후"],
      sources: [
        { label: "Catchtable Global - Seongsu guide", url: "https://www.catchtable.net/discovery/koreas-distinguished-restaurants-in-seongsu-seoul-with-catchtable-global-data.html" },
        { label: "Wanderlog - 그룬트", url: "https://wanderlog.com/place/details/8733972/%EA%B7%B8%EB%A3%AC%ED%8A%B8grund" },
        { label: "식신 - 그룬트", url: "https://www.siksinhot.com/P/1480105" }
      ]
    },
    {
      slug: "scarf-seongsu",
      name: "스카프",
      kicker: "kissaten alley",
      category: "night",
      categoryLabel: "바·나이트",
      area: "성덕정19길",
      detailLevel: "재확인 권장",
      address: "서울 성동구 성덕정19길 10 1층",
      coordinates: { lat: 37.5383, lon: 127.0578 },
      positioning:
        "교토 킷사텐 감성을 앞세운 카페 겸 바 느낌의 조용한 골목 공간이다.",
      summary:
        "과한 텐션 없는 2차, 혹은 일본 여행 감성 좋아하는 커플에게 특히 잘 맞는 카드다.",
      highlights: [
        "낮엔 커피, 밤엔 칵테일로 이어지는 이중 무드가 핵심이다.",
        "교토 감성의 조용한 공간 연출이 강하게 언급된다.",
        "분위기 자체가 목적이 되는 타입이다."
      ],
      hours: "화·수·목 18:00-24:00 / 금·토·일 15:00-24:00 / 월 휴무",
      dateUse:
        "술보다는 감도, 시끄러움보다는 여운을 원하는 밤에 좋다.",
      caution:
        "시간과 영업 공지가 변동될 수 있어 당일 확인이 여전히 좋다.",
      courseFit: "체험형 밤 대체, 기념일형 차분한 마감",
      tags: ["킷사텐", "카페 앤 바", "교토 감성", "조용한 골목"],
      sources: [
        { label: "서울토박이의 뀨로그 - 스카프 후기", url: "https://j1203203.tistory.com/51" },
        { label: "브런치 - 성수동 스카프에서", url: "https://brunch.co.kr/@@cB5F/1153" }
      ]
    },
    {
      slug: "hahaha-seongsu",
      name: "하하하성수",
      kicker: "dessert and light wine",
      category: "dessert",
      categoryLabel: "디저트",
      area: "뚝섬로",
      detailLevel: "검증됨",
      address: "서울 성동구 뚝섬로 389",
      coordinates: { lat: 37.5392424, lon: 127.0540877 },
      positioning:
        "디저트와 낮샴·와인을 함께 가져가는 성수형 대형 카페에 가깝다.",
      summary:
        "술집 가기 전 가벼운 디저트-와인, 혹은 팝업 사이 숨 돌리는 코스로 좋다.",
      highlights: [
        "바나나 푸딩 언급이 특히 많다.",
        "디저트와 샴페인·와인 혜택 조합이 독특하다.",
        "해 질 무렵 카페 데이트와 잘 붙는다."
      ],
      hours: "월-금 11:00-19:00 / 토-일 12:00-20:00",
      dateUse:
        "디저트만 먹기엔 밋밋하고, 술집으로 바로 가기엔 이른 시간대에 특히 잘 맞는다.",
      caution:
        "대형 카페 결이라 조용한 숨은 공간을 기대하면 체감이 다를 수 있다.",
      courseFit: "노을형 마감 대체, 기본형 부드러운 종료",
      tags: ["디저트 와인", "바나나 푸딩", "대형 카페", "중간 기착"],
      sources: [
        { label: "팝가패스 - 하하하성수", url: "https://popga.co.kr/popga-pass/3464" },
        { label: "트립닷컴 - 하하하 디저트 맛집", url: "https://kr.trip.com/moments/detail/seongdong-gu-2016444-136651426/" },
        { label: "Keyzard - 하하하성수 후기", url: "https://www.keyzard.cc/hamster0_/nb/223836311534" }
      ]
    },
    {
      slug: "little-forest-seongsu",
      name: "리틀포레스트",
      kicker: "light brunch start",
      category: "brunch",
      categoryLabel: "브런치",
      area: "서울숲 입구",
      detailLevel: "재확인 권장",
      address: "서울 성동구 성수일로12길 23 2층",
      coordinates: { lat: 37.5428, lon: 127.0469 },
      positioning:
        "서울숲 들어가기 전 가볍게 브런치로 시작하기 좋은 건강식 브런치 카드다.",
      summary:
        "샥슈카, 샌드위치, 제철 재료 중심 메뉴로 산책 전 텐션을 부드럽게 올리기 좋다.",
      highlights: [
        "가볍지만 식사로 성립되는 메뉴 구성이 강하다.",
        "서울숲 입구 코스 시작점으로 잘 붙는다.",
        "브런치형 데이트에서 과하지 않은 건강한 인상을 만든다."
      ],
      hours: "10:00-18:00 또는 10:00-19:00 신호. 최신값 재확인 권장.",
      dateUse:
        "서울숲 산책형, 노을형 코스의 낮 시작점으로 특히 좋다.",
      caution:
        "운영시간 표기가 갈리는 편이라 출발 전 한 번 더 확인하는 게 안전하다.",
      courseFit: "서울숲 브런치형, 노을형 초반",
      tags: ["브런치", "서울숲 입구", "가벼운 시작", "제철 재료"],
      sources: [
        { label: "식후경 - 리틀포레스트", url: "https://eatbuy.co.kr/spot/18" },
        { label: "뽈레 - 리틀 포레스트", url: "https://polle.com/place/1DEmyx/%EB%A6%AC%ED%8B%80%20%ED%8F%AC%EB%A0%88%EC%8A%A4%ED%8A%B8" },
        { label: "물댄동산여행노트 - 리틀포레스트", url: "https://travel.wg2030.com/66" }
      ]
    },
    {
      slug: "a-piece-and-peace",
      name: "어피스앤드피스",
      kicker: "cake anchor",
      category: "dessert",
      categoryLabel: "디저트",
      area: "서울숲 입구",
      detailLevel: "재확인 권장",
      address: "서울 성동구 성수일로12길 17 1층",
      coordinates: { lat: 37.5429, lon: 127.0466 },
      positioning:
        "케이크와 구움과자 결이 강한, 성수 초반 혹은 기념일 전 짧은 디저트 앵커로 쓰기 좋은 카페다.",
      summary:
        "햇빛 좋은 디저트 카페 톤이 강해서 서울숲 입구 코스의 부드러운 당 포인트로 쓰기 좋다.",
      highlights: [
        "수제 케이크, 파이, 구움과자 계열 반응이 좋다.",
        "기념일 전 짧게 들르는 디저트 앵커로 적합하다.",
        "서울숲 입구 코스와 묶기 좋다."
      ],
      hours: "최신 공개 운영시간 신호가 약해 재확인 권장.",
      dateUse:
        "서울숲권 브런치 뒤 디저트, 혹은 기념일 전 가볍게 분위기 맞추는 용도로 좋다.",
      caution:
        "운영정보가 약한 편이라 메인 앵커보다 보조 카드로 쓰는 편이 안전하다.",
      courseFit: "서울숲 디저트 앵커",
      tags: ["케이크", "구움과자", "서울숲 입구", "재확인 권장"],
      sources: [
        { label: "잡코리아 기업정보 - 어피스앤드피스", url: "https://www.jobkorea.co.kr/recruit/co_read/c/apandp" },
        { label: "잡코리아 채용공고 - 어피스앤드피스", url: "https://www.jobkorea.co.kr/Recruit/GI_Read/46324147" }
      ]
    },
    {
      slug: "pizzeria-hio-seongsu",
      name: "피제리아히오 성수점",
      kicker: "wood-fired pizza",
      category: "dinner",
      categoryLabel: "저녁",
      area: "서울숲 입구",
      detailLevel: "재확인 권장",
      address: "서울 성동구 성수일로 20 1층 101호",
      coordinates: { lat: 37.5414, lon: 127.0457 },
      positioning:
        "서울숲권에서 가볍지만 제대로 된 피자 데이트로 쓰기 좋은 화덕피자 카드다.",
      summary:
        "참나무 장작 화덕과 나폴리 스타일 도우가 분명해서 피자 중심 데이트에 설득력이 높다.",
      highlights: [
        "100% 참나무 장작 화덕과 나폴리 스타일 도우가 포인트다.",
        "피자와 파스타를 나눠 먹는 데이트 구성이 자연스럽다.",
        "서울숲 입구 코스와 근거리 연결이 좋다."
      ],
      hours: "11:30-21:00 전후 / 브레이크타임 있음 / 일 휴무 쪽 신호. 재확인 권장.",
      dateUse:
        "서울숲권에서 코너룸보다 조금 더 캐주얼하게, 하지만 식사 목적지는 분명하게 잡고 싶을 때 좋다.",
      caution:
        "공식성 높은 시간 출처보다는 후기·리뷰 기반 신호가 강하다.",
      courseFit: "서울숲권 피자 데이트",
      tags: ["화덕 피자", "나폴리 스타일", "서울숲 입구", "재확인 권장"],
      sources: [
        { label: "식신 - 피제리아히오", url: "https://www.siksinhot.com/P/1779904" },
        { label: "판다랭크 - 피제리아히오 화덕피자", url: "https://pandarank.net/contents/6929d8506ad841f5b9acaef9" },
        { label: "Keyzard - 피제리아히오 후기", url: "https://www.keyzard.cc/holocelina/nb/223969507373" }
      ]
    },
    {
      slug: "marione-seongsu",
      name: "마리오네",
      kicker: "destination pizza",
      category: "dinner",
      categoryLabel: "저녁",
      area: "성수2가·북성수 경계",
      detailLevel: "재확인 권장",
      address: "서울 성동구 광나루로2길 23-1 1층",
      coordinates: { lat: 37.5442, lon: 127.0498 },
      positioning:
        "성수에서 오늘은 피자 자체가 목적이라는 날에 쓰는 최상단 화덕피자 카드다.",
      summary:
        "가리발디 피자와 강한 화덕 존재감, 웨이팅 경험까지 포함해 피자 목적지로 기능하는 곳이다.",
      highlights: [
        "가리발디 피자와 챔피언 셰프 문맥이 강하게 붙는다.",
        "피자 자체가 목적지가 되는 타입이다.",
        "북성수 방향 목적지형 데이트 카드로 강하다."
      ],
      hours: "11:30-20:30 전후 / 브레이크 15:00-17:00 / 휴무일 신호 있음. 재확인 권장.",
      dateUse:
        "오늘은 피자 자체가 메인 콘텐츠인 데이트, 혹은 숨은 카드 섹션에서 클릭률을 올릴 때 좋다.",
      caution:
        "주소와 운영시간이 출처마다 조금씩 흔들려 메인 라인업보다는 숨은 카드나 재확인 권장 뱃지가 안전하다.",
      courseFit: "북성수 목적지형 피자 코스",
      tags: ["목적지형 피자", "화덕 존재감", "웨이팅", "재확인 권장"],
      sources: [
        { label: "쮸빠찌에 - 마리오네 후기", url: "https://dayaa.tistory.com/546" },
        { label: "hctrip - 마리오네 후기", url: "https://hctrip.tistory.com/100" },
        { label: "줌뉴스 - 마리오네 2026", url: "https://m.news.zum.com/articles/101857093/%EA%B9%80%EC%A3%BC%EC%98%81-%EB%A7%88%EB%A6%AC%EC%98%A4%EB%84%A4-%EB%8C%80%ED%91%9C%EC%9D%98-top-%EC%9D%B4%ED%83%88%EB%A6%AC%EC%95%88-%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91-2026-%EC%88%98%EC%83%81-%EA%B8%B0%EB%85%90%EC%B4%AC%EC%98%81" }
      ]
    },
    {
      slug: "prego-club-seongsu",
      name: "프레고클럽",
      kicker: "cute casual dinner",
      category: "dinner",
      categoryLabel: "저녁",
      area: "서울숲 입구·상원길",
      detailLevel: "검증됨",
      address: "서울 성동구 상원2길 1-10 B1",
      coordinates: { lat: 37.5446, lon: 127.0453 },
      positioning:
        "귀여운 비주얼과 파스타·오니기리 조합으로 클릭률이 잘 나올 캐주얼 저녁 카드다.",
      summary:
        "경양식 레스토랑 같은 친근한 톤으로, 서울숲 입구 캐주얼 저녁형 코스에 잘 붙는다.",
      highlights: [
        "오니기리와 파스타 조합이 대표 포인트다.",
        "귀엽고 친근한 톤이라 가벼운 기념일이나 캐주얼 데이트에 잘 맞는다.",
        "오픈런과 웨이팅 문맥이 반복적으로 보인다."
      ],
      hours: "11:30-21:00 / 브레이크 15:00-17:00",
      dateUse:
        "너무 무겁지 않은 저녁, 혹은 사진 잘 남는 캐주얼 밥집형 데이트에 좋다.",
      caution:
        "웨이팅 문맥이 있는 편이라 피크 시간엔 대기 각오가 필요하다.",
      courseFit: "서울숲 입구 캐주얼 저녁",
      tags: ["캐주얼 저녁", "오니기리", "친근한 톤", "웨이팅 가능"],
      sources: [
        { label: "에스콰이어 코리아 - 성수동에 터를 잡은 이유", url: "https://www.esquirekorea.co.kr/article/1869559" },
        { label: "프레고클럽 후기", url: "https://mejusa81.com/entry/%EC%84%B1%EC%88%98-%ED%95%AB%ED%94%8C-%EC%9D%B8%EC%A0%95-%ED%94%84%EB%A0%88%EA%B3%A0%ED%81%B4%EB%9F%BD-%EC%98%A4%ED%94%88%EB%9F%B0%EC%9C%BC%EB%A1%9C-%EB%A7%9B%EB%B3%B8-%EA%B7%80%EC%97%BC%EB%BD%80%EC%A7%9D-%EC%98%A4%EB%8B%88%EA%B8%B0%EB%A6%AC-%ED%8C%8C%EC%8A%A4%ED%83%80" },
        { label: "프레고클럽 웨이팅 후기", url: "https://cindyleee.tistory.com/646" }
      ]
    }
  ]
};
