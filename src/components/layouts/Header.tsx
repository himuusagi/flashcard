import { type FC } from "react";
import Inner from "./Inner";
import LinkedText from "../elements/LinkedText";
import SignoutButton from "../elements/SignoutButton";

const Header: FC = () => {
  return (
    <div className="fixed left-0 top-0 z-10 w-full">
      <header className="bg-white">
        <Inner width="wide">
          <nav>
            <ul className="flex h-[50px] items-center justify-end">
              <li>
                <LinkedText text="TOP" href="/" size="medium" />
              </li>
              <li className="ml-[20px]">
                <LinkedText text="単語帳の追加" href="/flashcards/new" size="medium" />
              </li>
              <li className="ml-[20px]">
                <SignoutButton />
              </li>
            </ul>
          </nav>
        </Inner>
      </header>

      <Inner width="wide">
        <hr className="h-[2px] rounded-full bg-gray-light" />
      </Inner>
    </div>
  );
};

export default Header;
