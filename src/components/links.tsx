interface Ref {
  href: string;
  title: string;
}

interface LinksProps {
  title: string;
  links: Ref[];
}

export default function LinkDiv({ title, links }: LinksProps) {
  return (
    <div className="rounded-lg bg-slate-950/50 p-6 backdrop-blur-xl">
      <h4 className="mb-3 font-semibold">{title}</h4>
      {links.map((link) => (
        <p key={link.title} className="space-y-2">
          <a href={link.href} className="color-link text-sm">
            → {link.title}
          </a>
        </p>
      ))}
    </div>
  );
}
