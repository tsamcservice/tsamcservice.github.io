const googleAppsScriptUrl = "https://script.google.com/macros/s/AKfycbxG0VHIJjS4dTcW3UNUYw6h8NR9DQK8zn-Bp-4n_f4ia44CWySO6kqBwwy4JbZn31li/exec";

// 這張會員卡片的 URL
var card_img_url;
// 需要跨 function 的參數
var flexJsonMessage, cardJsonPromotional
// 需要跨 function 的 userId
class userId { userId }
// cardJson 裡面參數預設值
class CardJsonParams {
	mainTitle_1 = "磊山 人文講堂";
	mainTitle_2 = "《牽風箏的人》";
	subTitle_1 = "余浩瑋";
	subTitle_2 = "青藝盟盟主";
	textContent_1 = "05/06(六)09:50~12:00";
	textContent_1_url = "https://i.ibb.co/B6KNp92/01-1-cafe.png";
	textContent_2 = "磊山學院";
	textContent_2_url = "https://linecorp.com/";
	textContent_3 = "台北市南京東路二段178號10樓";
	textColor = "#081F58";
}

// 卡片製作標籤裡面參數預設值
function writeElementDefaultValues() {
	document.getElementById("mainTitle_1").placeholder = CardJsonParams.mainTitle_1;
	document.getElementById("mainTitle_2").placeholder = CardJsonParams.mainTitle_2;
	document.getElementById("subTitle_1").placeholder = CardJsonParams.subTitle_1;
	document.getElementById("subTitle_2").placeholder = CardJsonParams.subTitle_2;
	document.getElementById("textContent_1").placeholder = CardJsonParams.textContent_1;
	document.getElementById("upload_text").textContent = CardJsonParams.textContent_1_url; // 參數 textContent_1_url 對應 upload_text 元素
	document.getElementById("textContent_2").placeholder = CardJsonParams.textContent_2;
	document.getElementById("textContent_2_url").placeholder = CardJsonParams.textContent_2_url;
	document.getElementById("textContent_3").placeholder = CardJsonParams.textContent_3;
	document.getElementById("textColor").textContent = CardJsonParams.textColor;
}

// flexJson_main 的框 (list可再加入cardJsonPromotional)
var flexJsonList = [{
	type: "bubble",
	hero: {
		type: "image",
		url: CardJsonParams.textContent_1_url,
		size: "full",
		aspectRatio: "1:1",
		aspectMode: "cover",
		action: {
			type: "uri",
			uri: CardJsonParams.textContent_2_url,
		},
	},
	body: {
		type: "box",
		layout: "vertical",
		position: "relative",
		height: "355px",
		contents: [
			{
				type: "box",
				layout: "vertical",
				backgroundColor: CardJsonParams.textColor,
				cornerRadius: "5px",
				contents: [
					{
						type: "text",
						text: "【" + CardJsonParams.mainTitle_1 + "】",
						weight: "bold",
						size: "xl",
						color: "#FFFFFFFF",
						align: "center",
						gravity: "center",
						contents: [],
					},
				],
			},
			{
				type: "box",
				layout: "horizontal",
				offsetTop: "5px",
				height: "45px",
				contents: [
					{
						type: "text",
						text: CardJsonParams.subTitle_1,
						weight: "bold",
						size: "xl",
						color: CardJsonParams.textColor,
						flex: 4,
						gravity: "center",
						contents: [],
					},
					{
						type: "text",
						text: CardJsonParams.subTitle_2,
						weight: "bold",
						color: CardJsonParams.textColor,
						flex: 8,
						gravity: "center",
						contents: [],
					},
				],
			},
			{
				type: "text",
				text: CardJsonParams.mainTitle_2,
				weight: "regular",
				color: CardJsonParams.textColor,
				contents: [],
			},
			{
				type: "text",
				text: "時間:" + CardJsonParams.textContent_1,
				weight: "regular",
				color: CardJsonParams.textColor,
				contents: [],
			},
			{
				type: "text",
				text: "地點:" + CardJsonParams.textContent_2,
				weight: "regular",
				color: CardJsonParams.textColor,
				contents: [],
			},
			{
				type: "text",
				text: "(" + CardJsonParams.textContent_3 + ")",
				weight: "regular",
				size: "sm",
				color: CardJsonParams.textColor,
				contents: [],
			},
			{
				type: "box",
				layout: "horizontal",
				position: "absolute",
				offsetTop: "200px",
				offsetStart: "10px",
				width: "320px",
				contents: [
					{
						type: "box",
						layout: "vertical",
						paddingTop: "10px",
						width: "135px",
						height: "40px",
						backgroundColor: "#B5B8BD",
						contents: [
							{
								type: "text",
								text: "分享給好友",
								color: "#FFFFFFFF",
								align: "center",
								action: {
									type: "uri",
									uri: "https://liff.line.me/1660908511-Ol7grGPY/?userId=" + encodeURIComponent(userId.userId),
								},
								contents: [],
							},
						],
					},
					{
						type: "box",
						layout: "vertical",
						offsetStart: "10px",
						paddingTop: "10px",
						width: "135px",
						height: "40px",
						backgroundColor: "#B5B8BD",
						contents: [
							{
								type: "text",
								text: "收藏資訊",
								color: "#FFFFFFFF",
								align: "center",
								contents: [],
							},
						],
					},
				],
			},
			{
				type: "box",
				layout: "vertical",
				action: {
					type: "uri",
					uri: "https://calendar.google.com/calendar/u/0/r/eventedit?pli=1&uid=62890calndrlink&sf=1&output=xml&dates=20230603T095000/20230603T120000&ctz=Asia/Taipei&text=【磊山+人文講堂】&details=【公益可以不一樣+成為改變的起點】",
				},
				position: "absolute",
				offsetTop: "250px",
				offsetStart: "10px",
				paddingTop: "10px",
				width: "280px",
				height: "40px",
				backgroundColor: "#91AFC2",
				contents: [
					{
						type: "text",
						text: "設定提醒(google行事曆)",
						color: "#FFFFFFFF",
						align: "center",
						contents: [],
					},
				],
			},
			{
				type: "box",
				layout: "vertical",
				action: {
					type: "uri",
					uri: "https://3428750.so-buy.com/",
				},
				position: "absolute",
				offsetTop: "300px",
				offsetStart: "10px",
				paddingTop: "10px",
				width: "280px",
				height: "40px",
				backgroundColor: "#91AFC2",
				contents: [
					{
						type: "text",
						text: "製作美美的卡片✨",
						color: "#FFFFFFFF",
						align: "center",
						contents: [],
					},
				],
			},
		],
	},
}];

