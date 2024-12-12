const chatId = "6276000412";
const telegramBotId ="7844524159:AAEL2t7_bNQs6VLcBMw7Av103NBSJ_THzUQ"; 
const url = "https://api.telegram.org/bot" + telegramBotId + "/sendMessage";

// So'rov yuborish
const sendRequest = (e) => {
  e.preventDefault();

  const firstName = document.querySelector(".js-first-name").value.trim();
  const age = document.querySelector(".js-age").value.trim();
  const surname = document.querySelector(".js-surname").value.trim()

  const message = `lox: ${firstName}\n boganiga qancha bo'ldi : ${age}\n familiyasi: ${surname}`;

  const formData = {
    chat_id: chatId,
    text: message,
  };

  axios
    .post(url, formData)
    .then(() => {
      alert("So'rov muvaffaqiyatli yuborildi!");
    })
    .catch(() => {
      alert("Nimadir xato ketdi!");
    });

  // Formani tozalash
  document.querySelector(".js-first-name").value = "";
  document.querySelector(".js-age").value = "";
  document.querySelector(".js-surname").value = "";

};

document.querySelector(".js-register-form").addEventListener("submit", sendRequest);
