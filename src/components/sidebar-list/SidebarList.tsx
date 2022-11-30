import ButtonLinkSecondary from "../button-link-secondary/ButtonLinkSecondary";
import { BiMovie } from "react-icons/bi";

type SidebarListProps = {
  children: string;
  genreList: Array<{
    id: number;
    name: string;
  }>;
  closeNav: () => void;
};

const SidebarList = ({ children, genreList, closeNav }: SidebarListProps) => {
  return (
    <div>
      <h3 className="font-dosis text-18 text-white-200 font-semibold uppercase mb-20 pl-28">
        {children}
      </h3>
      <nav>
        <ul>
          {genreList.map((genre) => {
            return (
              <li key={genre.id}>
                <ButtonLinkSecondary
                  url="#"
                  startIcon={<BiMovie />}
                  onClick={closeNav}
                >
                  {genre.name}
                </ButtonLinkSecondary>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default SidebarList;
