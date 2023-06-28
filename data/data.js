const googleAppsScriptUrl = "https://script.google.com/macros/s/AKfycbwWBvS3-wkqZyPld3NSgMZ1jVbxXbB8iLCSIRvzJm9pgru3YqPZ9wu8PGyzVT2Q3d7E/exec";

// 這張會員卡片的 URL
var card_img_url;
// 需要跨 function 的參數
var userId, flexJsonList, flexJsonMessage, cardJsonPromotional
// cardJson 裡面參數預設值
var mainTitle_1 = "磊山 人文講堂";
var mainTitle_2 = "《牽風箏的人》";
var subTitle_1 = "余浩瑋";
var subTitle_2 = "青藝盟盟主";
var textContent_1 = "05/06(六)09:50~12:00";
var textContent_1_url = "https://i.ibb.co/B6KNp92/01-1-cafe.png";
var textContent_2 = "磊山學院";
var textContent_2_url = "https://linecorp.com/";
var textContent_3 = "台北市南京東路二段178號10樓";
var textColor = "#081F58";
// 卡片製作標籤裡面參數預設值
function writeElementDefaultValues() {
	document.getElementById("mainTitle_1").placeholder = mainTitle_1;
	document.getElementById("mainTitle_2").placeholder = mainTitle_2;
	document.getElementById("subTitle_1").placeholder = subTitle_1;
	document.getElementById("subTitle_2").placeholder = subTitle_2;
	document.getElementById("textContent_1").placeholder = textContent_1;
	document.getElementById("upload_text").textContent = textContent_1_url; // 參數 textContent_1_url 對應 upload_text 元素
	document.getElementById("textContent_2").placeholder = textContent_2;
	document.getElementById("textContent_2_url").placeholder = textContent_2_url;
	document.getElementById("textContent_3").placeholder = textContent_3;
	document.getElementById("textColor").textContent = textColor;
}

// flexJson_main 的框 (list可再加入cardJsonPromotional)
function createFlexJsonList() {
	i=4
	alert(i)
	flexJsonList = flexJsonList.replace(/A{3,}/g, mainTitle_1);
	flexJsonList = flexJsonList.replace(/textColor/g, textColor);
	flexJsonList = flexJsonList.replace(/mainTitle_2/g, mainTitle_2);
	flexJsonList = flexJsonList.replace(/subTitle_1/g, subTitle_1);
	flexJsonList = flexJsonList.replace(/subTitle_2/g, subTitle_2);
	flexJsonList = flexJsonList.replace(/textContent_1_url/g, textContent_1_url);
	flexJsonList = flexJsonList.replace(/textContent_1/g, textContent_1);
	flexJsonList = flexJsonList.replace(/textContent_2_url/g, textContent_2_url);
	flexJsonList = flexJsonList.replace(/textContent_2/g, textContent_2);
	flexJsonList = flexJsonList.replace(/textContent_3/g, textContent_3);
	alert(i)
	alert(JSON.stringify(flexJsonList))
	alert(i)
	alert([JSON.parse(flexJsonList)])
	return [JSON.parse(flexJsonList)]
}


// flexJson_main 的框 (list可再加入cardJsonPromotional)
// function createFlexJsonList() {
// 	return flexJsonList = [{
// 		type: "bubble",
// 		hero: {
// 			type: "box",
// 			layout: "vertical",
// 			contents: [
// 				{
// 					type: "image",
// 					url: textContent_1_url,
// 					aspectRatio: "1:1",
// 					aspectMode: "cover",
// 					size: "full",
// 					action: {
// 						type: "uri",
// 						uri: textContent_2_url,
// 					}
// 				}
// 			]
// 		},
// 		body: {
// 			type: "box",
// 			layout: "vertical",
// 			position: "relative",
// 			height: "355px",
// 			contents: [
// 				{
// 					type: "box",
// 					layout: "vertical",
// 					backgroundColor: textColor,
// 					cornerRadius: "5px",
// 					contents: [
// 						{
// 							type: "text",
// 							text: "【" + mainTitle_1 + "】",
// 							weight: "bold",
// 							size: "xl",
// 							color: "#FFFFFFFF",
// 							align: "center",
// 							gravity: "center",
// 							contents: [],
// 						},
// 					],
// 				},
// 				{
// 					type: "box",
// 					layout: "horizontal",
// 					offsetTop: "5px",
// 					height: "45px",
// 					contents: [
// 						{
// 							type: "text",
// 							text: subTitle_1,
// 							weight: "bold",
// 							size: "xl",
// 							color: textColor,
// 							flex: 4,
// 							gravity: "center",
// 							contents: [],
// 						},
// 						{
// 							type: "text",
// 							text: subTitle_2,
// 							weight: "bold",
// 							color: textColor,
// 							flex: 8,
// 							gravity: "center",
// 							contents: [],
// 						},
// 					],
// 				},
// 				{
// 					type: "text",
// 					text: mainTitle_2,
// 					weight: "regular",
// 					color: textColor,
// 					contents: [],
// 				},
// 				{
// 					type: "text",
// 					text: "時間:" + textContent_1,
// 					weight: "regular",
// 					color: textColor,
// 					contents: [],
// 				},
// 				{
// 					type: "text",
// 					text: "地點:" + textContent_2,
// 					weight: "regular",
// 					color: textColor,
// 					contents: [],
// 				},
// 				{
// 					type: "text",
// 					text: "(" + textContent_3 + ")",
// 					weight: "regular",
// 					size: "sm",
// 					color: textColor,
// 					contents: [],
// 				},
// 				{
// 					type: "box",
// 					layout: "horizontal",
// 					position: "absolute",
// 					offsetTop: "200px",
// 					offsetStart: "10px",
// 					width: "320px",
// 					contents: [
// 						{
// 							type: "box",
// 							layout: "vertical",
// 							paddingTop: "10px",
// 							width: "135px",
// 							height: "40px",
// 							backgroundColor: "#B5B8BD",
// 							contents: [
// 								{
// 									type: "text",
// 									text: "分享給好友",
// 									color: "#FFFFFFFF",
// 									align: "center",
// 									action: {
// 										type: "uri",
// 										uri: "https://liff.line.me/1660908511-Ol7grGPY/?userId=" + encodeURIComponent(userId),
// 									},
// 									contents: [],
// 								},
// 							],
// 						},
// 						{
// 							type: "box",
// 							layout: "vertical",
// 							offsetStart: "10px",
// 							paddingTop: "10px",
// 							width: "135px",
// 							height: "40px",
// 							backgroundColor: "#B5B8BD",
// 							contents: [
// 								{
// 									type: "text",
// 									text: "收藏資訊",
// 									color: "#FFFFFFFF",
// 									align: "center",
// 									contents: [],
// 								},
// 							],
// 						},
// 					],
// 				},
// 				{
// 					type: "box",
// 					layout: "vertical",
// 					action: {
// 						type: "uri",
// 						// "uri": "https://3428750.so-buy.com/"
// 						uri: "https://calendar.google.com/calendar/u/0/r/eventedit?pli=1&uid=62890calndrlink&sf=1&output=xml&dates=20230603T095000/20230603T120000&ctz=Asia/Taipei&text=【磊山+人文講堂】&details=【公益可以不一樣+成為改變的起點】",
// 					},
// 					position: "absolute",
// 					offsetTop: "250px",
// 					offsetStart: "10px",
// 					paddingTop: "10px",
// 					width: "280px",
// 					height: "40px",
// 					backgroundColor: "#91AFC2",
// 					contents: [
// 						{
// 							type: "text",
// 							text: "設定提醒(google行事曆)",
// 							color: "#FFFFFFFF",
// 							align: "center",
// 							contents: [],
// 						},
// 					],
// 				},
// 				{
// 					type: "box",
// 					layout: "vertical",
// 					action: {
// 						type: "uri",
// 						uri: "https://3428750.so-buy.com/",
// 					},
// 					position: "absolute",
// 					offsetTop: "300px",
// 					offsetStart: "10px",
// 					paddingTop: "10px",
// 					width: "280px",
// 					height: "40px",
// 					backgroundColor: "#91AFC2",
// 					contents: [
// 						{
// 							type: "text",
// 							text: "製作美美的卡片✨",
// 							color: "#FFFFFFFF",
// 							align: "center",
// 							contents: [],
// 						},
// 					],
// 				},
// 			],
// 		},
// 	}];
// }