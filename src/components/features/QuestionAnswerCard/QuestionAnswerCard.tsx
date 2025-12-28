import Link from "next/link";

interface QA {
  question: string;
  answer: string;
}

interface QuestionAnswerCardProps {
  number: string;
  title: string;
  qas: QA[];
  link?: string;
}

export default function QuestionAnswerCard({
  number,
  title,
  qas,
  link = "#",
}: QuestionAnswerCardProps) {
  return (
    <div className="w-full max-w-[1176px] bg-[#2C261C] rounded-[40px] p-[30px] flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <svg width="21.41" height="21" viewBox="0 0 22 21" fill="none">
          <path d="M10.5 0L0 10.5V21H21V10.5L10.5 0Z" fill="#CD861A" />
        </svg>
        <h3 className="text-[13.8px] leading-[25px] tracking-[0.597px] font-bold text-[#F5CA69]">
          {number} - {title}
        </h3>
      </div>

      {/* Q&A List */}
      <div className="flex flex-col gap-4">
        {qas.map((qa, index) => (
          <div key={index} className="flex flex-col gap-0">
            <p className="text-[10.9px] leading-[24px] tracking-[0.459px] font-bold text-white mb-1">
              {qa.question}
            </p>
            <p className="text-[9.9px] leading-[24px] tracking-[0.459px] text-white">
              {qa.answer}
            </p>
          </div>
        ))}
      </div>

      {/* Read More Button */}
      <Link
        href={link}
        className="mt-4 w-[66.25px] h-[38px] bg-[#A46912] border border-[#694105] rounded-[30px] flex items-center justify-center text-[9.9px] leading-[24px] tracking-[0.459px] text-white hover:bg-[#8B5A0F] transition-colors"
      >
        閱讀更多
      </Link>
    </div>
  );
}
