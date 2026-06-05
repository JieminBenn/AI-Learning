import { ExternalLink } from "lucide-react";

type SourceCitationProps = {
  label: string;
  href: string;
};

export function SourceCitation({ label, href }: SourceCitationProps) {
  return (
    <a className="source-citation" href={href} target="_blank" rel="noreferrer">
      <span>{label}</span>
      <ExternalLink aria-hidden="true" size={15} />
    </a>
  );
}
