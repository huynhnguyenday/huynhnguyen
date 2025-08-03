import env from "../../env.config.js";

class ApiService {
  constructor() {
    this.baseURL = env.API_BASE_URL;
  }

  // Gửi thông tin liên hệ
  async sendContactMessage(contactData) {
    try {
      const response = await fetch(
        `${this.baseURL}${env.API_CONTACT_ENDPOINT}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      console.error("Error sending contact message:", error);
      return { success: false, error: error.message };
    }
  }
}

export default new ApiService();
