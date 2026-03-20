---
created: 2026-03-20
tags: [성수동, 데이트-코스, GitHub-Pages, city-guide, editorial-web]
aliases: [성수 데이트 아틀라스, Seongsu Date Atlas, 성수 데이트 사이트]
---

# 성수 데이트 아틀라스

이 저장소는 성수 데이트 코스를 공개용 웹 가이드로 다시 묶은 프로젝트이다. 로컬에서 정리해 둔 성수 장소 메모를 바탕으로, 실제로 쓰기 쉬운 흐름 중심 코스만 다시 추렸다. 한 군데 맛집보다 `커피 → 체험 → 저녁 → 바/산책`처럼 하루의 온도가 바뀌는 순서를 더 중요하게 본다.

이 사이트는 크게 네 가지 질문에 답한다. 첫 만남에는 어디까지 무드를 올리는 게 좋은지, 사진을 남기고 싶을 때는 어떤 체험을 끼우면 좋은지, 날씨 좋은 날은 어디에서 노을을 맞추면 좋은지, 기념일에는 어디에서 밀도를 올려야 하는지다. 코스는 그대로 써도 되고, 무드가 비슷한 장소끼리만 갈아 끼우는 방식으로 써도 된다.

운영 방식은 단순하다. 정적 HTML, CSS, JS만 사용하고 GitHub Pages에 배포한다. 빌드 도구가 없어서 유지가 쉽고, 데이터는 `data.js`에서 바로 관리한다. 외부 검증이 필요한 정보는 사이트 하단의 검증 메모 구역에 따로 모았다.

현재 공개 주소는 `https://lidge-jun.github.io/seongsu-date-atlas/` 이다. 저장소만 열어도 되지만, 실제로는 GitHub Pages 쪽이 이 프로젝트의 본체에 가깝다.

기아 언플러그드 그라운드는 기아 공식 체험 거점 페이지에서 상세 체험 요소를 확인할 수 있고, 성수구름다리는 서울시 콘텐츠에서 노을 포인트로 소개된다. 프로젝트 렌트는 공식 스케줄 페이지를 따로 운영하고, 포토오브제는 공식 사이트에서 24시간 무인 운영을 전면에 소개한다. 이 네 가지는 코스에 넣기 전에 가장 먼저 체크할 만한 변동성 높은 앵커들이다.
> 출처: [기아 언플러그드 그라운드 공식](https://www.kia.com/kr/experience/flagship/unplugged-ground)
> 출처: [서울시 정보소통광장 - 한강 노을에서 야경까지](https://opengov.seoul.go.kr/seoullove/27340542)
> 출처: [프로젝트 렌트 스케줄](https://www.project-rent.com/schedule)
> 출처: [포토오브제 공식](https://photoobjet.co.kr/)

---

## 기술 참고

| 항목 | 값 |
| --- | --- |
| 라이브 URL | `https://lidge-jun.github.io/seongsu-date-atlas/` |
| 배포 방식 | GitHub Pages |
| 스택 | HTML + CSS + JavaScript |
| 엔트리 | `index.html` |
| 데이터 | `data.js` |
| 스타일 | `styles.css` |
| 보조 페이지 | `404.html` |
| Jekyll 비활성화 | `.nojekyll` |

## 로컬 확인

```bash
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000`을 열면 된다.

## 파일 구조

```text
.
├── AGENTS.md
├── README.md
├── index.html
├── styles.css
├── data.js
├── script.js
├── 404.html
├── favicon.svg
└── _legacy/
```

## 개선 체크리스트

- [x] 로컬 메모 기반 코스를 공개용 웹 가이드로 재구성
- [x] 무드별 코스 선택 UI 구현
- [x] 장소 라이브러리 필터 구현
- [x] 변동성 큰 스폿에 대한 검증 메모 반영
- [ ] 실제 방문 후 사용자 피드백 기반 코스 수정
- [ ] 계절별 추천 버전 추가

## 변경 기록

- 2026-03-20: 초안 사이트와 GitHub Pages 배포 구조를 생성했다.
