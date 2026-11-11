telegram-bot-anti-link-promosi/
│
├─ index.js                 # Entry point, inisialisasi bot dan event handler
├─ config.js                # Konfigurasi token dan kata kunci promosi
├─ package.json             # Metadata npm dan daftar dependensi
├─ README.md                # Dokumentasi (file ini)
│
├─ utils/
│   └─ validator.js         # Fungsi isLink, isPromosi, isBotUser
│
└─ handlers/
    └─ messageHandler.js    # handleMessage(bot, ctx) – logika penghapusan pesan
