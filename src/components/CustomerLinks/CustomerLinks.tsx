interface CustomerLink {
  href: string;
  text: string;
}

interface CustomerLinksProps {
  links: CustomerLink[];
}

export function CustomerLinks({ links }: CustomerLinksProps) {
  return (
    <div className="flex gap-4 mt-5">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="inline-block no-underline bg-[#ff4d4d] text-white px-[30px] py-[15px] rounded-[50px] text-[18px] transition-all hover:bg-[#c0392b] hover:scale-105"
        >
          {link.text}
        </a>
      ))}
    </div>
  );
}