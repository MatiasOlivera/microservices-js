import { Context, ServiceBroker } from "moleculer";

export const EmailService = new ServiceBroker();

EmailService.createService({
  name: "emails",
  actions: {
    async sendEmail(ctx: Context<Email>) {
      const { recipient, subject, content } = ctx.params;

      // Simulate sending an email
      console.log(`Sending email to ${recipient} with subject "${subject}"`);
      console.log(`Content: ${content}`);

      return { success: true, message: "Email sent successfully" };
    },
  },
});

interface Email {
  recipient: string;
  subject: string;
  content: string;
}
