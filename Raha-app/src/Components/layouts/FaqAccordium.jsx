import React, { useState } from "react";
import { CirclePlus } from "lucide-react";
import { CircleMinus } from "lucide-react";

const Faqs = [
  {
    Question: "How can I donate to your charity?",
    Answer:
      "You can donate online through our website, by mailing a check, or through fundraising events. Every contribution, big or small, makes a difference!",
  },
  {
    Question:
      "How do I make a donation through your platform, and is it tax-deductible?",
    Answer:
      "Just click “Donate” on any campaign, choose your amount, and pay securely. Donations to verified nonprofits may be tax-deductible check the campaign details to confirm.",
  },
  {
    Question: "How do you ensure that donations are used effectively?",
    Answer:
      "We verify campaigns, track fund usage, and require regular updates from organizers to ensure every donation is used transparently and effectively.",
  },
  {
    Question: "Can I start my own fundraising campaign?",
    Answer:
      "Yes! Simply create an account, click “Fundraise,” add your story, goal, and images, and your fundraiser will be live in minutes.",
  },
  {
    Question: "What types of programs does your charity support?",
    Answer:
      "We support a variety of programs focused on education, healthcare, community development, and emergency relief, all aimed at creating lasting, positive impact.",
  },
  {
    Question: "How can I stay updated on your charity’s activities?",
    Answer: "How can I stay updated on your charity’s activities?",
  },
];

function FaqAccordium() {
  const [selectItem, setSelectedItem] = useState(0);

  const toogleItem = (index) => {
    setSelectedItem(selectItem === index ? null : index);
  };

  return (
    <div>
      <div className="">
        {Faqs.map((Faqs, index) => (
          <div
            className={`transition-all duration-200 ease-in-out ${
              selectItem === index ? "bg-primary" : "bg-white"
            }`}
          >
            <button className="" onClick={() => toogleItem(index)}>
              <div className="flex gap-2 items-center">
                <span className="font-medium text-3xl">{Faqs.Question}</span>
                <span>
                  {selectItem === index ? <CircleMinus /> : <CirclePlus />}
                </span>
              </div>
            </button>
            <div
              className={`transition-all duration-200 ease-in-out ${
                selectItem === index
                  ? "h-10 opacity-100% bg-primary"
                  : "min-h-0 opacity-0"
              }`}
            >
              <p className="font-regular text-lg text-gray">{Faqs.Answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqAccordium;
