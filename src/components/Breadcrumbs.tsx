import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  isDark?: boolean;
}

export function Breadcrumbs({ items, isDark = false }: BreadcrumbsProps) {
  const baseTextColor = isDark ? "text-neutral-300" : "text-neutral-500";
  const hoverTextColor = isDark ? "hover:text-white" : "hover:text-[#312A57]";
  const activeTextColor = isDark ? "text-[#DDD8F5]" : "text-[#312A57]";

  return (
    <nav aria-label="Breadcrumb" className="py-2.5">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs sm:text-sm font-medium">
        <li>
          <Link
            href="/"
            className={`inline-flex items-center gap-1 transition-colors ${baseTextColor} ${hoverTextColor}`}
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Inicio</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={index}>
              <li>
                <ChevronRight className={`w-3.5 h-3.5 ${baseTextColor} opacity-60`} />
              </li>
              <li>
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className={`transition-colors ${baseTextColor} ${hoverTextColor}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className={`font-semibold ${activeTextColor} truncate max-w-[200px] sm:max-w-none inline-block align-bottom`}>
                    {item.label}
                  </span>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
