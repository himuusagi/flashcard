import { type FC } from "react";
import Inner from "./Inner";
import LinkedText from "../elements/LinkedText";
import SignoutButton from "../elements/SignoutButton";

const Header: FC = () => {
  return (
    <header className="fixed left-0 top-0 z-10 w-full bg-white shadow-sm shadow-primary-light">
      <Inner width="wide">
        <nav>
          <ul className="flex h-[40px] items-center justify-end">
            <li>
              <LinkedText text="TOP" href="/" size="large" />
            </li>
            <li className="ml-[20px]">
              <LinkedText text="単語帳の追加" href="/flashcards/new" size="large" />
            </li>
            <li className="ml-[20px]">
              <SignoutButton />
            </li>
          </ul>
        </nav>
      </Inner>
    </header>
  );
};

export default Header;
