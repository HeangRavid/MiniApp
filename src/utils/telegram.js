// src/utils/telegram.js

// ដាក់ Token និង Chat ID របស់អ្នកនៅទីនេះ
const BOT_TOKEN = '9171747699:AAH23vKteNDVu_5f3Nav_aWoR45AgBTZY60';
const CHAT_ID = '@PinkCakeOrder_bot12';

export const sendTelegramOrder = async (cake) => {
  // បង្កើតសារដែលមានព័ត៌មាននំខេក
  const message = `
🍰 *New Order Request!*
-------------------------
*Cake:* ${cake.name}
*Price:* ${cake.price}
-------------------------
សូមទាក់ទងមកខ្ញុំដើម្បីបញ្ជាក់ការកុម្ម៉ង់!
  `;

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown', // ដើម្បីឱ្យអក្សរដិតដំណើរការ
      }),
    });

    const data = await response.json();
    if (data.ok) {
      alert('ការកុម្ម៉ង់ត្រូវបានផ្ញើទៅ Telegram ដោយជោគជ័យ!');
    } else {
      alert('មានបញ្ហាក្នុងការផ្ញើសារ។ សូមព្យាយាមម្តងទៀត។');
    }
  } catch (error) {
    console.error('Error sending message:', error);
    alert('មានបញ្ហាបណ្តាញ។ សូមព្យាយាមម្តងទៀត។');
  }
};