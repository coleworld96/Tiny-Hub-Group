import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Add JSON body parser middleware
  app.use(express.json());

  // API constraints: lazy initialize resend to avoid startup crashes if key is missing
  let resendClient: Resend | null = null;
  const getResend = () => {
    if (!resendClient) {
      const apiKey = process.env.RESEND_API_KEY;
      if (!apiKey) {
        throw new Error("RESEND_API_KEY environment variable is missing.");
      }
      resendClient = new Resend(apiKey);
    }
    return resendClient;
  };

  // API Routes
  app.post("/api/contact", async (req, res) => {
    try {
      const resend = getResend();
      const { title, data } = req.body;
      
      let emailBody = `New submission for: ${title}\n\n`;
      for (const [key, value] of Object.entries(data)) {
        if (value) {
          emailBody += `${key}: ${value}\n`;
        }
      }

      // Format as simple HTML
      const htmlBody = emailBody.replace(/\n/g, "<br>");

      // Send via Resend
      const { data: emailResponse, error } = await resend.emails.send({
        from: "Tiny Hub Updates <onboarding@resend.dev>", // Resend's default test sandboxed domain
        to: ["colebokowy@tinyhub.energy", "founders@tinyhub.energy"],
        subject: `Tiny Hub: ${title}`,
        html: `<p>${htmlBody}</p>`,
      });

      if (error) {
        console.error("Resend Error:", error);
        return res.status(400).json({ error });
      }

      res.status(200).json({ success: true, emailResponse });
    } catch (err: any) {
      console.error("Contact API Error:", err.message || err);
      // Fallback gracefully so the UI doesn't crash completely, but report issue
      res.status(500).json({ error: err.message || "Internal server error" });
    }
  });

  // Vite Integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
