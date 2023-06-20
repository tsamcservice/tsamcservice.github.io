const googleAppsScriptUrl = "https://script.google.com/macros/s/AKfycbxG0VHIJjS4dTcW3UNUYw6h8NR9DQK8zn-Bp-4n_f4ia44CWySO6kqBwwy4JbZn31li/exec";

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
	return flexJsonList = [{
		"type": "bubble",
		"size": "mega",
		"direction": "ltr",
		"hero": {
			"type": "box",
			"layout": "vertical",
			"contents": [
				{
					"type": "box",
					"layout": "horizontal",
					"contents": [
						{
							"url": "https://3428750.so-buy.com/_files/50/3428750/23/06/862f45dba9dfa742.png",
							"flex": 1,
							"size": "full",
							"type": "image",
							"action": {
								"type": "uri",
								"label": "action",
								"uri": "https://line.me/R/home/public/post?id=665xzprl&postId=1168603399615311352"
							},
							"gravity": "center",
							"aspectMode": "cover",
							"aspectRatio": "1:1"
						}
					]
				}
			],
			"paddingAll": "0px"
		},
		"body": {
			"type": "box",
			"layout": "vertical",
			"contents": [
				{
					"type": "box",
					"layout": "horizontal",
					"spacing": "none",
					"contents": [
						{
							"size": "lg",
							"text": "【磊山 人文講堂】",
							"type": "text",
							"align": "center",
							"color": "#ffffff",
							"style": "normal",
							"weight": "bold",
							"position": "relative"
						}
					],
					"position": "relative",
					"paddingTop": "3px",
					"cornerRadius": "sm",
					"paddingBottom": "3px",
					"backgroundColor": "#38455F"
				},
				{
					"type": "box",
					"layout": "vertical",
					"margin": "10px",
					"contents": [
						{
							"type": "box",
							"layout": "horizontal",
							"spacing": "sm",
							"contents": [
								{
									"flex": 1,
									"size": "xl",
									"text": "楊錦聰",
									"type": "text",
									"wrap": true,
									"color": "#38455F",
									"weight": "bold",
									"contents": []
								},
								{
									"flex": 2,
									"size": "sm",
									"text": "風潮音樂創辦人",
									"type": "text",
									"align": "start",
									"color": "#38455F",
									"gravity": "center"
								}
							]
						},
						{
							"type": "box",
							"layout": "horizontal",
							"margin": "sm",
							"spacing": "xs",
							"contents": [
								{
									"size": "md",
									"text": "日期:07/08(六)",
									"type": "text",
									"color": "#38455F",
									"action": {
										"uri": "mailto:xx@example.com",
										"type": "uri",
										"label": "action"
									},
									"margin": "none",
									"weight": "regular"
								}
							],
							"justifyContent": "center"
						},
						{
							"type": "box",
							"layout": "horizontal",
							"margin": "xs",
							"contents": [
								{
									"size": "md",
									"text": "時間:09:50~12:00",
									"type": "text",
									"color": "#38455F",
									"action": {
										"uri": "tel:0922000000",
										"type": "uri",
										"label": "action"
									},
									"gravity": "center"
								}
							],
							"justifyContent": "center"
						},
						{
							"type": "box",
							"layout": "vertical",
							"margin": "xs",
							"contents": [
								{
									"size": "sm",
									"text": "地點:磊山學院101教室 (台北市中山區南京東路二段178號10樓)",
									"type": "text",
									"wrap": true,
									"color": "#38455F",
									"action": {
										"uri": "https://lihi3.cc/0MnY5",
										"type": "uri",
										"label": "action"
									},
									"gravity": "center"
								}
							],
							"justifyContent": "center"
						}
					]
				}
			],
			"paddingAll": "20px"
		},
		"footer": {
			"type": "box",
			"layout": "vertical",
			"contents": [
				{
					"type": "box",
					"height": "40px",
					"layout": "horizontal",
					"margin": "none",
					"spacing": "none",
					"contents": [
						{
							"type": "box",
							"layout": "horizontal",
							"contents": [
								{
									"type": "button",
									"color": "#fffffF",
									"style": "link",
									"action": {
										"uri": "https://www",
										"type": "uri",
										"label": "分享給好友"
									},
									"gravity": "center"
								}
							],
							"alignItems": "center",
							"justifyContent": "center",
							"backgroundColor": "#A3ABB6"
						},
						{
							"type": "separator",
							"color": "#ffffff",
							"margin": "10px"
						},
						{
							"type": "box",
							"layout": "horizontal",
							"contents": [
								{
									"type": "button",
									"color": "#fffffF",
									"style": "link",
									"action": {
										"uri": "https://lihi3.cc/iNKGu",
										"type": "uri",
										"label": "呈璽官LINE"
									},
									"gravity": "center"
								}
							],
							"alignItems": "center",
							"cornerRadius": "none",
							"justifyContent": "center",
							"backgroundColor": "#A3ABB6"
						}
					],
					"offsetBottom": "none",
					"paddingBottom": "none"
				},
				{
					"type": "box",
					"height": "40px",
					"layout": "horizontal",
					"margin": "10px",
					"contents": [
						{
							"type": "button",
							"color": "#ffffff",
							"style": "link",
							"action": {
								"uri": "https://lihi3.cc/uU8Q5",
								"type": "uri",
								"label": "設立提醒(google行事曆)"
							},
							"gravity": "center"
						}
					],
					"alignItems": "center",
					"justifyContent": "center",
					"backgroundColor": "#85A4B8"
				},
				{
					"type": "box",
					"height": "40px",
					"layout": "horizontal",
					"margin": "10px",
					"contents": [
						{
							"type": "button",
							"color": "#ffffff",
							"style": "link",
							"action": {
								"uri": "https://3428750.so-buy.com/",
								"type": "uri",
								"label": "✨製作美美的卡片✨"
							},
							"gravity": "center"
						}
					],
					"alignItems": "center",
					"justifyContent": "center",
					"backgroundColor": "#86B8B1"
				}
			]
		}
	}];
}
