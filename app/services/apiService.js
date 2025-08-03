import env from "../../env.config.js";

class ApiService {
  constructor() {
    this.baseURL = env.API_BASE_URL;
  }

  // Gửi thông tin liên hệ
  async sendContactMessage(contactData) {
    const url = `${this.baseURL}${env.API_CONTACT_ENDPOINT}`;
    const requestBody = JSON.stringify(contactData);

    console.log("🚀 Sending request to:", url);
    console.log("📦 Request body:", contactData);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: requestBody,
      });

      console.log("📡 Response status:", response.status);
      console.log(
        "📡 Response headers:",
        Object.fromEntries(response.headers.entries())
      );

      if (!response.ok) {
        // Thử đọc error message từ response
        let errorMessage = `HTTP error! status: ${response.status}`;
        try {
          const errorData = await response.json();
          errorMessage += ` - ${JSON.stringify(errorData)}`;
        } catch (e) {
          // Nếu không parse được JSON, dùng text
          try {
            const errorText = await response.text();
            errorMessage += ` - ${errorText}`;
          } catch (e2) {
            // Nếu không đọc được gì
          }
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log("✅ Response data:", data);
      return { success: true, data };
    } catch (error) {
      console.error("❌ Error sending contact message:", error);
      console.error("🔍 Full error details:", {
        url,
        requestBody,
        error: error.message,
        stack: error.stack,
      });
      return { success: false, error: error.message };
    }
  }
}

export default new ApiService();
