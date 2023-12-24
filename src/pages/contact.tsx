import React from "react";
import { Smartphone, Mail } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Contact = () => {
  return (
    <Card className="text-center border-0" id="contact">
      <CardHeader className="text-center">
        <CardTitle className="text-lg">{"I'd love to hear from you"}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center">
        <CardDescription className="max-w-[350px] text-sm">
          {
            "I'm always learning and growing, and I'm always looking for new ways to connect with people. If you have a question, a challenge, or an idea, I'd love to hear from you. Let's connect and see how we can work together."
          }
        </CardDescription>
        <div className="flex flex-col md:flex-row gap-5 mt-5 text-sm">
          <div className="flex justify-center gap-3">
            <Smartphone />
            <a href="tel:+919481945297">+91 - 9481945297</a>
          </div>
          <div className="flex justify-center gap-3">
            <Mail />
            <a href="mailto:nayakvignesh18@gmail.com">
              nayakvignesh18@gmail.com
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Contact;
