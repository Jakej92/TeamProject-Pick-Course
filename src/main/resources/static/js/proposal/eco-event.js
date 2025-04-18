// 이미지가 <a> 태그 안에 포함되어 있을 경우, 클릭 시 해당 링크의 기본 동작이 페이지를 맨 위로 스크롤할 수 있습니다.
// 이를 방지하기 위해 다음과 같은 방법을 사용
document.querySelectorAll("a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
    });
});

// 후기의 버튼 클릭시 이미지 3개식 이동 732px, 디스플레이 768px

let leftReviewEnd = 0; // 화면 왼쪽 끝
let rightReviewEnd = 976;
let maxReviewRightEnd = document.querySelectorAll(".slick-slide").length * 244;

// document.querySelector(".slick-next").addEventListener("click", (e) => {
//     rightReviewEnd += 732;
//     leftReviewEnd += 732;
//     if (rightReviewEnd > maxReviewRightEnd) {
//         // maxRightEnd 보다 오른쪽으로 못 가도록 막음
//         leftReviewEnd -= rightReviewEnd - maxReviewRightEnd;
//         rightReviewEnd = maxReviewRightEnd;
//
//         document.querySelector(".slick-next").classList.add("slick-disabled");
//     }
//     document.querySelector(".slick-track").style.transform = `translate3d(${768 - rightReviewEnd}px, 0, 0)`;
//     document.querySelector(".slick-prev").classList.remove("slick-disabled");
// });
//
// document.querySelector(".slick-prev").addEventListener("click", (e) => {
//     leftReviewEnd -= 732;
//     rightReviewEnd -= 732;
//     if (leftReviewEnd < 0) {
//         // 0 보다 오른쪽으로 못 가도록 막음
//         rightReviewEnd -= leftReviewEnd;
//         leftReviewEnd = 0;
//
//         document.querySelector(".slick-prev").classList.add("slick-disabled");
//     }
//     document.querySelector(".slick-track").style.transform = `translate3d(${-leftReviewEnd}px, 0, 0)`;
//     document.querySelector(".slick-next").classList.remove("slick-disabled");
// });
// // 후기의 버튼 클릭시 이미지 3개식 이동 732px, 디스플레이 768px

// 코스 지도 보여주기
var mapContainer = document.getElementById("map1"), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(35.409476, 127.396059), // 지도의 중심좌표
        level: 9, // 지도의 확대 레벨
    };
let initialCenter = new kakao.maps.LatLng(35.409476, 127.396059);
var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// let tourSpots = [
//     { name: "1. 허브마을 채마루", address: "남원시 원천로 37" },
//     { name: "2. 광한루원", address: "남원시 요천로 1447" },
//     { name: "3. 김병종미술관", address: "남원시 함파우길 65-14" },
//     { name: "4. 지리산 허브밸리", address: "남원시 바래봉길 24" },
//     { name: "5. 구서도역", address: "남원시 서도길 32" },
//     { name: "6. 혼불문학관", address: "남원시 노봉안길52" },
// ];

// 서버로 받은 데이타 배열 처리
let tourSpots = new Array();

course.paths.forEach((path, i) =>{
    tourSpots.push({
        name: `${i + 1}. ${path.pathName}`,
        address: path.pathAddress
    });
});
console.log(tourSpots);
// 서버로 받은 데이타 배열 처리

let positions = [];
let geocoder = new kakao.maps.services.Geocoder();
let remains = tourSpots.length;
tourSpots.forEach((spot) => {
    geocoder.addressSearch(spot.address, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
            positions.push({
                content: "<div>" + spot.name + "</div>",
                latlng: new kakao.maps.LatLng(
                    Math.floor(result[0].y * 1000000) / 1000000,
                    Math.floor(result[0].x * 1000000) / 1000000
                ),
            });
        }
        // console.log(positions);
        remains--;
        if (remains < 1) {
            createMarkers();
            // position의 순서가 원래 입력된 순서가 아니기 때문에 원래 순서대로 값을 넣어주기 위해 이름비교. 앞뒤 <div> 제외를 위해 5, 6을 사용
            positions.forEach((e) => {
                console.log(e.latlng);
                for (let i = 0; i < tourSpots.length; i++) {
                    if (e.content.substring(5, e.content.length - 6) == tourSpots[i].name) {
                        tourSpots[i].latlng = e.latlng;
                    }
                }
            });
            drawLine();

            if (tourSpots[0]?.latlng) {
                initialCenter = positions[0].latlng
                map.setCenter(initialCenter);
            }
        }
    });
});

function createMarkers() {
    for (var i = 0; i < positions.length; i++) {
        // 마커의 정보가 항상 나타나게
        var iwContent = `<div style="padding:5px;">${positions[i].content}</div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            iwPosition = positions[i].latlng, //인포윈도우 표시 위치입니다
            iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

        // 인포윈도우를 생성하고 지도에 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
            map: map, // 인포윈도우가 표시될 지도
            position: iwPosition,
            content: iwContent,
            removable: iwRemoveable,
        });

    }
}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다
function makeOverListener(map, marker, infowindow) {
    return function () {
        infowindow.open(map, marker);
    };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다
function makeOutListener(infowindow) {
    return function () {
        infowindow.close();
    };
}
// 지도 보여주기

// 선을 그릴 위치 배열
let clickLine; // 마우스로 클릭한 좌표로 그려질 선 객체입니다
let distanceOverlay; // 선의 거리정보를 표시할 커스텀오버레이 입니다
let dots = []; // 선이 그려지고 있을때 클릭할 때마다 클릭 지점과 거리를 표시하는 커스텀 오버레이 배열입니다.
var linePath = []; // 경로를 1개 ~ 끝까지 차례로 받을 배열
function drawLine() {
    tourSpots.forEach((tourSpot) => {
        linePath.push(tourSpot.latlng);

        // 클릭한 위치를 기준으로 선을 생성하고 지도위에 표시합니다
        clickLine = new kakao.maps.Polyline({
            map: map, // 선을 표시할 지도입니다
            path: linePath, // 선을 구성하는 좌표 배열입니다 클릭한 위치를 넣어줍니다
            strokeWeight: 3, // 선의 두께입니다
            strokeColor: "#db4040", // 선의 색깔입니다
            strokeOpacity: 1, // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
            strokeStyle: "solid", // 선의 스타일입니다
        });

        // 클릭한 지점에 대한 정보를 지도에 표시합니다
        displayCircleDot(tourSpot.latlng, 0);
        let distance = (Math.round(clickLine.getLength()) / 1000).toFixed(1);
        let path = clickLine.getPath();
        displayCircleDot(tourSpot.latlng, distance);

        content = getTimeHTML(distance); // 커스텀오버레이에 추가될 내용입니다

        // 그려진 선의 거리정보를 지도에 표시합니다
        showDistance(content, path[path.length - 1]);
    });
}

// 지점에 대한 정보 (동그라미와 다음 지점까지의 총거리)를 표출하는 함수입니다
function displayCircleDot(position, distance) {
    // 클릭 지점을 표시할 빨간 동그라미 커스텀오버레이를 생성합니다
    let circleOverlay = new kakao.maps.CustomOverlay({
        content: '<span class="dot"></span>',
        position: position,
        zIndex: 1,
    });

    // 지도에 표시합니다
    circleOverlay.setMap(map);
    if (distance > 0) {
        // 클릭한 지점까지의 그려진 선의 총 거리를 표시할 커스텀 오버레이를 생성합니다
        let distanceOverlay = new kakao.maps.CustomOverlay({
            content: '<div class="dotOverlay">거리 <span class="number">' + distance + "</span>Km</div>",
            position: position,
            yAnchor: 2.2,
            zIndex: 2,
        });

        // 지도에 표시합니다
        distanceOverlay.setMap(map);
    }

    // 배열에 추가합니다
    dots.push({
        circle: circleOverlay,
        distance: distanceOverlay,
    });
}

// 선 그리기가 종료됐을 때 호출하여
// 그려진 선의 총거리 정보와 거리에 대한 도보, 자전거 시간을 계산하여
// HTML Content를 만들어 리턴하는 함수입니다
function getTimeHTML(distance) {
    // 도보의 시속은 평균 4km/h 이고 도보의 분속은 67m/min입니다
    let walkkTime = (distance / 0.067) | 0;
    let walkHour = "",
        walkMin = "";

    // 계산한 도보 시간이 60분 보다 크면 시간으로 표시합니다
    if (walkkTime > 60) {
        walkHour = '<span class="number">' + Math.floor(walkkTime / 60) + "</span>시간 ";
    }
    walkMin = '<span class="number">' + (walkkTime % 60) + "</span>분";

    // 자전거의 평균 시속은 16km/h 이고 이것을 기준으로 자전거의 분속은 267m/min입니다
    let bycicleTime = (distance / 0.227) | 0;
    let bycicleHour = "",
        bycicleMin = "";

    // 계산한 자전거 시간이 60분 보다 크면 시간으로 표출합니다
    if (bycicleTime > 60) {
        bycicleHour = '<span class="number">' + Math.floor(bycicleTime / 60) + "</span>시간 ";
    }
    bycicleMin = '<span class="number">' + (bycicleTime % 60) + "</span>분";

    // 거리와 도보 시간, 자전거 시간을 가지고 HTML Content를 만들어 리턴합니다
    let content = '<ul class="dotOverlay distanceInfo">';
    content += "    <li>";
    content += '        <span class="label">총거리</span><span class="number">' + distance + "</span>Km";
    content += "    </li>";
    content += "    <li>";
    content += '        <span class="label">도보</span>' + walkHour + walkMin;
    content += "    </li>";
    content += "    <li>";
    content += '        <span class="label">자전거</span>' + bycicleHour + bycicleMin;
    content += "    </li>";
    content += "</ul>";

    return content;
}

function showDistance(content, position) {
    if (distanceOverlay) {
        // 커스텀오버레이가 생성된 상태이면

        // 커스텀 오버레이의 위치와 표시할 내용을 설정합니다
        distanceOverlay.setPosition(position);
        distanceOverlay.setContent(content);
    } else {
        // 커스텀 오버레이가 생성되지 않은 상태이면

        // 커스텀 오버레이를 생성하고 지도에 표시합니다
        distanceOverlay = new kakao.maps.CustomOverlay({
            map: map, // 커스텀오버레이를 표시할 지도입니다
            content: content, // 커스텀오버레이에 표시할 내용입니다
            position: position, // 커스텀오버레이를 표시할 위치입니다.
            xAnchor: 0,
            yAnchor: -1,
            zIndex: 3,
        });
    }
}

// 화면 확장 축소
document.querySelector("#fullMap1").addEventListener("click", (e) => {
    if (mapContainer.style.position === "fixed") {
        mapContainer.style.position = "relative";
        mapContainer.style.width = "100%";
        mapContainer.style.height = "30vh";
        mapContainer.style.zIndex = ""; // 맵이 다른 요소 위에 오도록 설정한거 해제
        document.querySelector("#fullMap1").style.position = "absolute";
        // 지도의 중심을 새로운 좌표로 설정
        map.relayout();
        map.setCenter(initialCenter);
    } else {
        mapContainer.style.position = "fixed";
        mapContainer.style.top = "0";
        mapContainer.style.left = "0";
        mapContainer.style.width = "100%";
        mapContainer.style.height = "100vh";
        mapContainer.style.zIndex = "1000"; // 맵이 다른 요소 위에 오도록 설정
        document.querySelector("#fullMap1").style.position = "fixed";
        // 지도의 중심을 새로운 좌표로 설정
        map.relayout();
        map.setCenter(initialCenter);
    }
});
// 화면 확장 축소

// 모이는 장소 :: 카카오맵 처리하기
geocoder = new kakao.maps.services.Geocoder();
geocoder.addressSearch("올림픽로 19-2", (result, status) => {
    if (status === kakao.maps.services.Status.OK) {
        let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        let mapContainer = document.getElementById("map2"), // 지도를 표시할 div
            mapOption = {
                center: coords,
                level: 3, // 지도의 확대 레벨
            };
        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        let map = new kakao.maps.Map(mapContainer, mapOption);
        // 결과값으로 받은 위치를 마커로 표시합니다
        let marker = new kakao.maps.Marker({
            map: map,
            position: coords,
        });
        // map.relayout();
        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);

        // 화면 확장 축소
        document.querySelector("#fullMap2").addEventListener("click", (e) => {
            if (mapContainer.style.position === "fixed") {
                mapContainer.style.position = "relative";
                mapContainer.style.width = "100%";
                mapContainer.style.height = "30vh";
                mapContainer.style.zIndex = "";
                document.querySelector("#fullMap2").style.position = "absolute";
            } else {
                mapContainer.style.position = "fixed";
                mapContainer.style.top = "0";
                mapContainer.style.left = "0";
                mapContainer.style.width = "100%";
                mapContainer.style.height = "100vh";
                mapContainer.style.zIndex = "1000"; // 맵이 다른 요소 위에 오도록 설정
                document.querySelector("#fullMap2").style.position = "fixed";
            }
            map.relayout();
            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
        });
        // 화면 확장 축소
    }
});
// 모이는 장소 :: 카카오맵 처리하기

// 위로 버튼 누르면 화면 위쪽으로 천천히 이동
document.querySelector(".gQlhwK").addEventListener("click", (e) => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
// 위로 버튼 누르면 화면 위쪽으로 천천히 이동

// // 찜하기 버튼 클릭
// var buttonSelected = "true";
// const JJimMessage = document.createElement("div");
// JJimMessage.className = "Bottom__Wrapper-sc-1nltrn7-0 bpzBFC";
// document.querySelectorAll(".enp_mobon_cart").forEach((JJim) => {
//     JJim.addEventListener("click", () => {
//         if (buttonSelected == "true") {
//             document.querySelectorAll(".enp_mobon_cart img").forEach((img) => {
//                 img.src = `data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cg clip-path='url(%23clip0_2517_457)'%3E %3Cpath d='M15.4448 27.0641L15.4368 27.0593L15.4064 27.0433C14.775 26.6998 14.1549 26.3359 13.5472 25.9521C12.0981 25.0404 10.7174 24.0243 9.41595 22.9121C6.47195 20.3729 3.19995 16.5633 3.19995 12.0001C3.20009 10.5112 3.66179 9.05903 4.52147 7.84344C5.38115 6.62785 6.59654 5.70866 8.00027 5.21244C9.40401 4.71622 10.9271 4.66737 12.3597 5.07263C13.7924 5.47788 15.0641 6.31729 16 7.4753C16.9358 6.31729 18.2075 5.47788 19.6402 5.07263C21.0728 4.66737 22.5959 4.71622 23.9996 5.21244C25.4034 5.70866 26.6187 6.62785 27.4784 7.84344C28.3381 9.05903 28.7998 10.5112 28.8 12.0001C28.8 16.5633 25.5296 20.3729 22.584 22.9121C20.7349 24.492 18.7274 25.8764 16.5936 27.0433L16.5632 27.0593L16.5552 27.0641H16.552C16.3819 27.1542 16.1925 27.2014 16.0001 27.2017C15.8078 27.2019 15.6182 27.1553 15.448 27.0657L15.4448 27.0641Z' fill='%23FD2748'/%3E %3C/g%3E %3Cdefs%3E %3CclipPath id='clip0_2517_457'%3E %3Crect width='32' height='32' fill='white'/%3E %3C/clipPath%3E %3C/defs%3E %3C/svg%3E`;
//             });
//             JJimMessage.textContent = "추천 여행을 찜했습니다.";
//             buttonSelected = "false";
//         } else {
//             document.querySelectorAll(".enp_mobon_cart img").forEach((img) => {
//                 img.src = `data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cg clip-path='url(%23clip0_2519_490)'%3E %3Cmask id='mask0_2519_490' style='mask-type:luminance' maskUnits='userSpaceOnUse' x='0' y='0' width='32' height='32'%3E %3Cpath d='M32 0H0V32H32V0Z' fill='white'/%3E %3C/mask%3E %3Cg mask='url(%23mask0_2519_490)'%3E %3Cmask id='mask1_2519_490' style='mask-type:luminance' maskUnits='userSpaceOnUse' x='0' y='0' width='32' height='32'%3E %3Cpath d='M32 0H0V32H32V0Z' fill='white'/%3E %3C/mask%3E %3Cg mask='url(%23mask1_2519_490)'%3E %3Cpath d='M28 12C28 16.1889 24.9781 19.7916 22.063 22.3047C20.2579 23.8469 18.2982 25.1986 16.2154 26.3381C16.2027 26.3441 16.1898 26.3505 16.1774 26.357C16.1226 26.3861 16.0613 26.4013 15.999 26.4015C15.9401 26.4015 15.882 26.3881 15.8293 26.362L15.8094 26.3511L15.784 26.3378C15.1694 26.0033 14.5659 25.649 13.9743 25.2754C12.5586 24.3847 11.2086 23.3914 9.93704 22.3049C7.02334 19.7914 4.00003 16.1887 4 12C4.00014 10.6766 4.41054 9.38568 5.17469 8.30517C5.93885 7.22466 7.01918 6.4076 8.26696 5.96651C9.51472 5.52542 10.8685 5.482 12.142 5.84222C13.4155 6.20245 14.546 6.94859 15.3778 7.97794C15.5297 8.16589 15.7584 8.2751 16 8.2751C16.2416 8.2751 16.4704 8.16589 16.6222 7.97794C17.4541 6.94859 18.5845 6.20245 19.8579 5.84222C21.1315 5.482 22.4853 5.52542 23.7331 5.96651C24.9808 6.4076 26.0611 7.22466 26.8253 8.30517C27.5894 9.38568 27.9998 10.6766 28 12Z' stroke='%23333333' stroke-width='1.5' stroke-linejoin='round'/%3E %3C/g%3E %3C/g%3E %3C/g%3E %3Cdefs%3E %3CclipPath id='clip0_2519_490'%3E %3Crect width='32' height='32' fill='white'/%3E %3C/clipPath%3E %3C/defs%3E %3C/svg%3E`;
//             });
//             JJimMessage.textContent = "찜을 해제했습니다.";
//             buttonSelected = "true";
//         }
//         document.querySelector(".ifNxJR").appendChild(JJimMessage);
//
//         const bpzBFC = document.querySelector(".bpzBFC");
//         if (!bpzBFC) {
//             // 찜 메세지를 잠시 보여주고 없앰.
//             return;
//         }
//
//         // 메시지 표시 (opacity 1로 변경)
//         bpzBFC.style.opacity = "0.9";
//         bpzBFC.style.zIndex = 9999;
//
//         // 일정 시간이 지나면 사라지도록 설정 (2초 후 opacity 0)
//         setTimeout(() => {
//             bpzBFC.style.opacity = "0";
//             bpzBFC.style.zIndex = -9999;
//         }, 1000);
//     });
// });
//
// // 찜하기 버튼 클릭
//
// // 로그인 버튼 눌렀을 때 (로그인은 차후 반영)
// document.querySelectorAll(".ContentComment").forEach((ContentComment) => {
//     ContentComment.addEventListener("click", () => {
//         if (document.querySelector(".ContentComment").textContent == "등록") {
//             return;
//         }
//         document.querySelector(".replyWrap").className = "replyWrap subscription login";
//         document.querySelector(".writeForm").removeAttribute("style");
//         document.querySelectorAll(".comment").forEach((e) => {
//             e.removeAttribute("readonly");
//             e.removeAttribute("style");
//             e.placeholder = "글을 남겨주세요.";
//         });
//         document.querySelectorAll(".fileUp").forEach((e) => {
//             e.removeAttribute("disabled");
//         });
//         document.querySelectorAll(".ContentComment").forEach((e) => {
//             e.textContent = "등록";
//         });
//     });
// });
// // 로그인 버튼 눌렀을 때 (로그인은 차후 반영)
//
// // 댓글에 답글 달기 버튼
// document.querySelectorAll(".btn2").forEach((btn2) => {
//     // 화면에 보여지는 버튼 모으기
//     btn2.addEventListener("click", (e) => {
//         if (e.target.title == "선택됨") {
//             e.target.setAttribute("title", "");
//             e.target.closest("li").querySelector(".replyBox").style.display = "none";
//         } else {
//             e.target.setAttribute("title", "선택됨");
//             e.target.closest("li").querySelector(".replyBox").style.display = "block";
//         }
//     });
// });
// // 댓글에 답글 달기 버튼
//
// // textarea에 글자 입력시 입력된 글자 수 보여주기
// document.querySelectorAll(".comment").forEach((comment) => {
//     comment.addEventListener("input", (e) => {
//         e.target.nextElementSibling.textContent = `${e.target.value.length} / 1200 (추천 글자수: 30자 이내)`;
//     });
// });
// // textarea에 글자 입력시 입력된 글자 수 보여주기
//
// // 댓글 더보기 버튼
// document.querySelector(".btn_center .btn_more").addEventListener("click", () => {
//     const li = document.createElement("li");
//     // 향후 데이타를 받을 때는 for문으로 처리
//     li.id = "b940dab6-e56b-4103-b120-a1f4c83c5e25";
//     li.innerHTML = `
//     <div class="profile">
//         <div class="photo" icid="b940dab6-e56b-4103-b120-a1f4c83c5e25" style="background-image:url(https://phinf.pstatic.net/contact/20210105_226/1609820759733fLo89_PNG/avatar_profile.png)">
//         </div>
//         <span class="ico"><img src="https://korean.visitkorea.or.kr/resources/images/sub/ico_naver.png" alt="네이버"></span>
//     </div>
//     <div class="txt_reply">
//         <p>올레길 제주 필수 코스죠. 걷다보면 힐링 로드 그 자체입니다. 가족 연인과 같이 가기 좋아요</p>
//         <div class="date">
//             <em class="name">몬*</em>
//             <span>2025. 2. 3.</span>
//         </div>
//     </div>
//     <span class="replyBtn active">
//         <button type="button" class="btn2">
//             <em class="blind">댓글</em>
//         </button>
//     </span>
//     <div class="replyBox" style="display: none;">
//         <ul>
//             <li class="inputcomment">
//                 <div class="mLine">
//                     <div class="replyForm">
//                         <form name="form">
//                             <label class="blind" for="replyForm">글을 입력하세요.</label>
//                             <span class="writeForm" style="height: 80px;">
//                                 <textarea class="comment" id="replyForm" rows="" placeholder="로그인 후 소중한 글을 남겨주세요." cols="" readonly="readonly"></textarea>
//                                 <p class="Textarea__Count-sc-1b9phu6-2 jvAusQ">0 / 1200 (추천 글자수: 30자 이내)</p>
//                             </span>
//                             <div class="btn">
//                                 <span class="fileRegbtn">
//                                     <input type="file" class="fileUp" id="fileUpb940dab6-e56b-4103-b120-a1f4c83c5e25" name="fileUpb940dab6-e56b-4103-b120-a1f4c83c5e25" onchange="fileChange(this)" disabled="disabled">
//                                         <label for="fileUpb940dab6-e56b-4103-b120-a1f4c83c5e25" class="btn_fileUp">파일찾기</label>
//                                 </span>
//                                 <a href="javascript:;" class="btn_apply ContentComment">로그인</a>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </li>
//         </ul>
//     </div>`;
//
//     // 댓글 목록 제일 밑에 추가
//     document.querySelector(".list_reply").querySelector("ul").appendChild(li);
//
//     // 동적으로 생성된 댓글에 답글 달기 버튼
//     document.querySelectorAll(".btn2").forEach((btn2) => {
//         if (!btn2.getAttribute("listener")) {
//             // 리스너가 없는 경우 추가
//             btn2.setAttribute("listener", "true");
//             btn2.addEventListener("click", (e) => {
//                 if (e.target.title == "선택됨") {
//                     e.target.setAttribute("title", "");
//                     e.target.closest("li").querySelector(".replyBox").style.display = "none";
//                 } else {
//                     e.target.setAttribute("title", "선택됨");
//                     e.target.closest("li").querySelector(".replyBox").style.display = "block";
//                 }
//
//                 // 로그인 됬을 때는 "등록"으로 변경
//                 if (document.querySelector(".replyWrap.login")) {
//                     document.querySelectorAll(".comment").forEach((e) => {
//                         e.removeAttribute("readonly");
//                         e.removeAttribute("style");
//                         e.placeholder = "글을 남겨주세요.";
//                     });
//                     document.querySelectorAll(".fileUp").forEach((e) => {
//                         e.removeAttribute("disabled");
//                     });
//                     document.querySelectorAll(".ContentComment").forEach((e) => {
//                         e.textContent = "등록";
//                     });
//                 }
//             });
//         }
//     });
//     // 동적으로 생성된 댓글에 답글 달기 버튼
//
//     // 동적으로 생성된 textarea에 글자 입력시 입력된 글자 수 보여주기
//     document.querySelectorAll(".comment").forEach((comment) => {
//         if (!comment.getAttribute("listener")) {
//             // 리스너가 없는 경우 추가
//             comment.setAttribute("listener", "true");
//             comment.addEventListener("input", (e) => {
//                 e.target.nextElementSibling.textContent = `${e.target.value.length} / 1200 (추천 글자수: 30자 이내)`;
//             });
//         }
//     });
//     // 동적으로 생성된 textarea에 글자 입력시 입력된 글자 수 보여주기
//
//     // 로그인 버튼 눌렀을 때 (로그인은 차후 반영)
//     document.querySelectorAll(".ContentComment").forEach((ContentComment) => {
//         if (!ContentComment.getAttribute("listener")) {
//             // 리스너가 없는 경우 추가
//             ContentComment.setAttribute("listener", "true");
//             ContentComment.addEventListener("click", () => {
//                 if (document.querySelector(".ContentComment").textContent == "등록") {
//                     return;
//                 }
//                 document.querySelector(".replyWrap").className = "replyWrap subscription login";
//                 document.querySelector(".writeForm").removeAttribute("style");
//                 document.querySelectorAll(".comment").forEach((e) => {
//                     e.removeAttribute("readonly");
//                     e.removeAttribute("style");
//                     e.placeholder = "글을 남겨주세요.";
//                 });
//                 document.querySelectorAll(".fileUp").forEach((e) => {
//                     e.removeAttribute("disabled");
//                 });
//                 document.querySelectorAll(".ContentComment").forEach((e) => {
//                     e.textContent = "등록";
//                 });
//             });
//         }
//     });
//     // 로그인 버튼 눌렀을 때 (로그인은 차후 반영)
//
// });
// // 댓글 더보기 버튼

// 참여하기 버튼 클릭시 json으로 처리하기
document.querySelector(".eIJDxV").addEventListener("click", e=> {
    if (memberId == null) {
        const result = confirm("로그인 하시겠습니까 ?");
        if (result){
            window.location.href="/login/login";
        }
        return;
    }

    const userConfirmed = confirm("정말 참여 하시겠습니까?");
    if (userConfirmed) {
        postEcoParticipant(course.id, memberId);
    }
})

function commentresize(textarea) {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
}
