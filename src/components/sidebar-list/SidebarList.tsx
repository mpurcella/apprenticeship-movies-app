import React from "react";
import ButtonLinkSecondary from "../button-link-secondary/ButtonLinkSecondary";

type SidebarListProps = {
  label: string;
  children: React.ReactNode;
};

type SidebarListItemProps = {
  url: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
};

const SidebarList = ({ label, children }: SidebarListProps) => {
  return (
    <div>
      <h3 className="font-dosis text-18 text-white-200 font-semibold uppercase mb-20 pl-28">
        {label}
      </h3>
      <nav>
        <ul>{children}</ul>
      </nav>
    </div>
  );
};

SidebarList.Item = function SidebarListItem({
  url,
  icon,
  children,
  onClick,
}: SidebarListItemProps) {
  return (
    <li>
      <ButtonLinkSecondary url={url} startIcon={icon} onClick={onClick}>
        {children}
      </ButtonLinkSecondary>
    </li>
  );
};

export default SidebarList;
