interface ProfileDetailTileProps {
  icon: React.ReactNode;
  text: string;
  value: string;
}

export default function ProfileDetailTile({
  icon,
  text,
  value,
}: ProfileDetailTileProps) {
  return (
    <span className="flex justify-start bg-white gap-6 items-center shadow-md rounded-md py-[20px] px-[24px] w-full">
      {icon}
      <span className="flex flex-col items-start">
        <p className="text-textPrimary font-bold">{text}</p>
        <p className="text-textSecondary text-md">{value}</p>
      </span>
    </span>
  );
}
