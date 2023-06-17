// google Apps Script 傳送訊息
async function sendRequest(status, userId, dataCard = "", data = "") {
	if (!status || !userId) {
		alert("向google apps script寄送請求時\n有效參數不足");
		return;
	}

	const url = googleAppsScriptUrl;
	try {
		const sendData = { status: status, userId: userId, card: dataCard };

		// 將資料轉換成查詢字串
		const queryString = new URLSearchParams(sendData).toString();

		const response = await fetch(`${url}?${queryString}`);
		const responseData = await response.json();

		console.log("Data sent:", sendData);
		console.log("Response:", responseData);
		if (responseData.status === 'first') { return responseData; }
		else if (responseData.status === 'ok') { return responseData; }
		else { alert("向google apps script寄送請求時\n回傳值非ok"); }
	} catch (error) {
		alert("向google apps script寄送請求時\n發生錯誤\n" + error);
	}
}

// 自己的 flex2html (處理 原flex2html 錯誤)
function my_flexToHtml(flex2htmlElementName, flexJsonList) {
	flexJsonMessage = {
		type: "flex",
		altText: "Flex Message",
		contents: {
			type: "carousel",
			contents: [...flexJsonList]
		}
	}

	if (!document.getElementById(flex2htmlElementName)) {
		alert("未找到產生 flexJson 的元素")
	}
	document.getElementById(flex2htmlElementName).innerHTML = "";
	flex2html(flex2htmlElementName, flexJsonMessage);

	// 将錯誤的 ExXxs 替換為正確的 ExXXs
	var wrongExXxsElements = document.querySelectorAll(".ExXxs");
	wrongExXxsElements.forEach(function (element) {
		element.classList.remove("ExXxs");
		element.classList.add("ExXXs");
	});

	// 将錯誤的 Ex3xl 替換為正確的 Ex3Xl
	var wrongEx3xlElements = document.querySelectorAll(".Ex3xl");
	wrongEx3xlElements.forEach(function (element) {
		element.classList.remove("Ex3xl");
		element.classList.add("Ex3Xl");
	});

	// 將 LySlider 關閉下方捲動軸
	var wrongLySliderElements = document.querySelectorAll(".LySlider");
	wrongLySliderElements.forEach(function (element) {
		element.style.webkitOverflowScrolling = "auto";
		// element.style.overflowX = "visible";
		element.style.overflow = "hidden";
	});

	// 將 chatbox 上方空白縮短
	var wrongChatboxElements = document.querySelectorAll(".chatbox");
	wrongChatboxElements.forEach(function (element) {
		element.style.paddingTop = "20px";
	});
}