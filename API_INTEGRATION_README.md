# API Integration Guide

## Cấu hình Environment

File `env.config.js` chứa tất cả các cấu hình API và database. Khi cần thay đổi, chỉ cần chỉnh sửa file này:

```javascript
const env = {
  // Backend API Configuration
  API_BASE_URL: "https://huynhnguyen-be-production.up.railway.app",
  API_CONTACT_ENDPOINT: "/api/contact",

  // Database Configuration (for reference only - not used in frontend)
  MONGODB_URI:
    "mongodb+srv://huynhbutforwork:cn4qa8VYa9fnmluW@huynh.mxabnl2.mongodb.net/huynhnguyen_db?retryWrites=true&w=majority&appName=huynh",
  DB_NAME: "huynhnguyen_db",
};
```

## Cách sử dụng

### 1. Thay đổi API URL

Nếu muốn thay đổi URL backend, chỉ cần sửa `API_BASE_URL` trong file `env.config.js`:

```javascript
API_BASE_URL: "https://your-new-backend-url.com";
```

### 2. Thay đổi Endpoint

Nếu muốn thay đổi endpoint, chỉ cần sửa `API_CONTACT_ENDPOINT`:

```javascript
API_CONTACT_ENDPOINT: "/api/new-contact-endpoint";
```

### 3. Thêm API mới

Để thêm API mới, thêm endpoint vào `env.config.js`:

```javascript
const env = {
  // ... existing config
  API_NEW_ENDPOINT: "/api/new-endpoint",
};
```

Sau đó thêm method vào `apiService.js`:

```javascript
async newApiCall(data) {
  try {
    const response = await fetch(`${this.baseURL}${env.API_NEW_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    // ... rest of the method
  } catch (error) {
    // ... error handling
  }
}
```

## API Contact Form

Form liên hệ hiện tại gửi 4 trường dữ liệu:

- `fullName`: Họ tên (⚠️ **QUAN TRỌNG**: Backend mong đợi `fullName`, không phải `name`)
- `email`: Email
- `phone`: Số điện thoại
- `message`: Tin nhắn

Khi người dùng submit form, dữ liệu sẽ được gửi đến:
`POST https://huynhnguyen-be-production.up.railway.app/api/contact`

### Backend Schema Requirements:

```javascript
{
  fullName: String, // Required, max 100 chars
  email: String,    // Required, valid email format
  phone: String,    // Required, valid phone format
  message: String   // Required, max 1000 chars
}
```

## Features đã implement

✅ Form validation (required fields)
✅ Loading state khi đang gửi
✅ Success/Error messages
✅ Reset form sau khi gửi thành công
✅ Responsive design
✅ Dark/Light mode support
✅ Vietnamese/English language support

## Files đã tạo/cập nhật

1. `env.config.js` - File cấu hình environment
2. `app/services/apiService.js` - Service xử lý API calls
3. `app/components/ContactSection.jsx` - Component form liên hệ đã được cập nhật
4. `API_INTEGRATION_README.md` - File hướng dẫn này
