interface HeaderProps {
  title: string;
  subtitle: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="text-center mt-[50px]">
      <h1 className="text-[56px] font-bold text-[#1a3e59] text-shadow-sm">
        {title}
      </h1>
      <p className="text-[26px] italic text-gray-500 mt-[10px]">
        {subtitle}
      </p>
    </div>
  );
}