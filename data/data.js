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
	flexJsonList = flexJsonList.replace(/S{3,}/g, "https://liff.line.me/1660908511-Ol7grGPY/?userId" + encodeURIComponent(userId));
	document.getElementById("test").innerHTML = flexJsonList
	return [flexJsonList]
}