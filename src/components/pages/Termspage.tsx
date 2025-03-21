import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  const navigator = useNavigate();
  const bulletPointStyle = "flex items-start mb-2 ml-4 text-sm";
  const sectionTitleStyle = "font-bold text-lg mt-4 mb-2";
  const contentStyle = "text-base mb-4";

  const bulletPoint = (text: string) => (
    <div className={bulletPointStyle}>
      <span className="text-base mr-2">•</span>
      <span className={contentStyle}>{text}</span>
    </div>
  );

  return (
    <div className="w-full hide-scrollbar h-screen overflow-y-scroll bg-[#F9F9F9] max-w-[500px] flex flex-col pt-25 gap-5 justify-start items-center">
      <span className="w-full bg-white px-10 py-5 fixed top-0 right-0  flex text-textPrimary items-center justify-start gap-4">
        <ArrowLeft size={25} onClick={() => navigator(-1)} />
        <p className="text-lg font-bold">Terms & Conditions</p>
      </span>

      <div className="p-4">
        <p className="text-lg mb-4">
          Effective Date: September 11, 2024
          <br />
          Date Last Revised: September 24, 2024
        </p>

        <h2 className={sectionTitleStyle}>1. Introduction</h2>
        {bulletPoint(
          "Purpose: These Terms of Use govern your use of Awud’s platform and services. This aligns with Article 1675 of the Ethiopian Commercial Code, Proclamation No. 166/1960, which requires that terms and conditions be clearly defined and communicated to users."
        )}
        {bulletPoint(
          "Acceptance of Terms: By using Awud, you agree to these terms. If you do not agree, please do not use our services. This is in accordance with Article 1676 of the Ethiopian Commercial Code, Proclamation No. 166/1960, which mandates that users must explicitly accept the terms and conditions before using a service."
        )}

        <h2 className={sectionTitleStyle}>2. Definitions</h2>
        {bulletPoint(
          "Platform: When we refer to the 'Platform,' we mean Awud’s website and mobile applications. This encompasses all the digital interfaces through which users can access our services, whether on a computer, tablet, or smartphone."
        )}
        {bulletPoint(
          "User: The term 'User' includes any individual or entity that utilizes Awud’s services. Whether you are an individual managing your personal finances, a small business owner looking to streamline savings, or a community group organizing an equb, you are considered a User under these terms."
        )}
        {bulletPoint(
          "Services: 'Services' refers to all the functionalities provided by Admas Financial Technologies-Awud. This includes, but is not limited to, equb management, which allows users to create and manage traditional savings groups..."
        )}

        <h2 className={sectionTitleStyle}>3. Permitted Uses</h2>
        {bulletPoint(
          "Users are encouraged to use the platform for its intended purposes, which include:"
        )}
        {bulletPoint(
          "Personal Financial Management: Users can manage their equbs, set up and track savings plans, and monitor their financial health."
        )}
        {bulletPoint(
          "Community Engagement: Users can connect with others, share financial tips, and participate in group savings activities."
        )}
        {bulletPoint(
          "Secure Online Shopping: The platform provides a secure environment for users to make purchases."
        )}

        <h2 className={sectionTitleStyle}>4. Prohibited Uses</h2>
        {bulletPoint(
          "To mintain the integrity and security of the platform, certain activities are strictly prohibited. Users must not engage in:"
        )}
        {bulletPoint("Illegal Activities")}
        {bulletPoint("Harassment")}
        {bulletPoint("Spamming")}
        {bulletPoint("Compromising Security")}

        <h2 className={sectionTitleStyle}>5. User Content</h2>
        <p className={sectionTitleStyle}>Content Ownership</p>
        {bulletPoint(
          "User Rights: When you post content on Awud, you retain full ownership of that content."
        )}
        {bulletPoint(
          "License to Awud: By posting content on Awud, you grant us a nonexclusive, royalty-free, worldwide license to use, display, and distribute your content."
        )}

        <p className={sectionTitleStyle}>Content Responsibility</p>
        {bulletPoint(
          "Legal Compliance: Users are responsible for ensuring their content complies with all applicable laws."
        )}
        {bulletPoint(
          "Intellectual Property: Users must ensure their content does not infringe on others’ rights."
        )}
        {bulletPoint(
          "Appropriateness: Content should be appropriate and respectful."
        )}
        {bulletPoint(
          "Accuracy: Ensure that any information you provide is truthful and accurate."
        )}

        <h2 className={sectionTitleStyle}>6. Content Removal</h2>
        {bulletPoint(
          "Awud reserves the right to remove any content that violates these Terms of Use or applicable laws."
        )}

        <h2 className={sectionTitleStyle}>7. Privacy</h2>
        {bulletPoint(
          "Our Privacy Policy provides a comprehensive explanation of how we collect, use, and protect user data."
        )}

        <h2 className={sectionTitleStyle}>8. Intellectual Property</h2>
        {bulletPoint(
          "Awud owns all intellectual property rights to the platform and its content, except for user-generated content."
        )}

        <h2 className={sectionTitleStyle}>
          9. Disclaimers and Limitation of Liability
        </h2>
        {bulletPoint(
          "Awud provides the platform on an 'as is' and 'as available' basis, without any warranties."
        )}

        <h2 className={sectionTitleStyle}>10. Indemnification</h2>
        {bulletPoint(
          "Users agree to indemnify, defend, and hold Awud harmless from any claims arising from their use of the platform."
        )}

        <h2 className={sectionTitleStyle}>11. Changes to Terms</h2>
        {bulletPoint(
          "Awud reserves the right to update or modify these terms of service at any time."
        )}

        <h2 className={sectionTitleStyle}>12. Governing Law</h2>
        {bulletPoint(
          "These terms are governed by the laws of Ethiopia. Any disputes will be resolved in the courts of Ethiopia."
        )}

        <h2 className={sectionTitleStyle}>13. Contact Information</h2>
        {bulletPoint(
          "For questions or support needs, users can contact Awud through:"
        )}
        {bulletPoint("Email: info@awudequbs.com")}
        {bulletPoint("Phone: +251 90 333 9966 / +251 90 233 1188")}
        {bulletPoint("Live Chat: Available through our website or mobile app.")}
        {bulletPoint("Address: Brand Mall, Kedamay Weyane, Mekelle, Ethiopia")}
      </div>
    </div>
  );
}
