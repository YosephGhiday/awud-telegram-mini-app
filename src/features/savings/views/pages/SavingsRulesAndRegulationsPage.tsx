import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

export default function SavingsRulesAndRegulationsPage() {
  const navigate = useNavigate();

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
    <div className="w-full hide-scrollbar px-4 text-textPrimary h-screen overflow-y-scroll bg-white max-w-[500px] flex flex-col pt-10 gap-5 justify-start items-center">
      <span className="w-full py-5 flex  items-center justify-between">
        <p className="text-xl w-1/2 font-bold">Savings Rules and Regulations</p>
        <X size={25} onClick={() => navigate(-1)} />
      </span>

      <div>
        <p className="text-lg mb-4">
          Effective Date: September 11, 2024
          <br />
          Date Last Revised: September 24, 2024
        </p>
        <hr className="w-full" />
        <h2 className={sectionTitleStyle}>1. Account Setup</h2>
        {bulletPoint(
          "Usage of Awud Savings is governed by these rules, with possible additional regulations issued by Awud Technologies."
        )}
        {bulletPoint(
          "Users are required to fulfill their contribution commitments until reaching their set savings goal."
        )}

        <h2 className={sectionTitleStyle}>2. Contributions</h2>
        {bulletPoint(
          "Users must maintain regular contributions according to their selected savings plan (daily, weekly, or monthly)."
        )}
        {bulletPoint(
          "Contributions must be made before 11:00 PM until the set goal is reached."
        )}

        <h2 className={sectionTitleStyle}>3. Withdrawal</h2>
        {bulletPoint(
          "Withdrawal requests will be processed, and funds will be deposited into the designated account within 8 working hours. Applicable service fees apply to all withdrawals."
        )}

        <h2 className={sectionTitleStyle}>4. Penalties and Service Fees</h2>
        {bulletPoint(
          "Awud Technologies reserves the right to impose fees for early withdrawal and penalties for late contributions."
        )}
        {bulletPoint(
          "Missed Contributions: Three consecutive missed contributions result in a 1% penalty on the missed amount."
        )}

        <h2 className={sectionTitleStyle}>5. Leaving Equb</h2>
        {bulletPoint(
          "Awud Technologies reserves the right to amend or change these rules and regulations at any time. Members will be notified in advance of any changes."
        )}
        {bulletPoint(
          "Members who insist on leaving the Equb before the full Equb cycle is completed may leave the Equb only if another member agrees to take their place and obligations."
        )}

        <h2 className={sectionTitleStyle}>6. Amendments</h2>
        {bulletPoint(
          "Awud Equbs reserves the right to amend or change these rules and regulations at any time. Members will be notified in advance of any changes."
        )}

        <h2 className={sectionTitleStyle}>7. Governing Law</h2>
        {bulletPoint(
          "This Agreement shall be governed by the Justice Act of 1960 and shall be construed in accordance with the applicable laws of Ethiopia."
        )}

        <h2 className={sectionTitleStyle}>8. Dispute Resolution</h2>
        {bulletPoint(
          "Any disputes arising out of this Agreement shall first be resolved by negotiation. If it cannot be resolved by negotiation, the dispute shall be resolved by a court of competent jurisdiction."
        )}
      </div>
    </div>
  );
}
