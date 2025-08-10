import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type GradientHeaderProps } from "./GradientUserContext";
import type { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

export default function GradientHeader({
  fromColor,
  toColor,
  title,
  subTitle,
  sideButtons,
  cards,
}: GradientHeaderProps) {
  return (
    // <header className="p-8 h-60 bg-linear-135 from-indigo-500/20 to-pink-500/40 rounded-2xl border-1 border-indigo-500/10 dark:from-indigo-800/80 dark:to-pink-800/60 dark:border-indigo-800/40 dark:border-1 leading-relaxed">
    <header
      className={`p-8 h-60 bg-linear-135 ${fromColor} ${toColor} rounded-2xl border-1 border-indigo-500/10 dark:from-indigo-800/80 dark:to-pink-800/60 dark:border-indigo-800/40 dark:border-1 leading-relaxed`}
    >
      <div className="">
        <div className="welcome-text mb-5 relative">
          <h1 className="section-title">{title}</h1>
          <h3 className="text-[15px] dark:text-white">{subTitle}</h3>
          <div className="flex gap-2 text-[12px] absolute right-0 top-2 dark:text-white items-center">
            {sideButtons.map((button, index) => (
              <div key={index}>{button}</div>
            ))}
          </div>
        </div>
      </div>

      <ul className="cards flex justify-between w-full">
        {cards.map((card) => (
          <li
            key={card.cardTitle}
            className="card flex items-center leading-tight"
          >
            <FontAwesomeIcon
              className={`text-[15px] p-2 rounded-[10px] ${card.color[0]} mr-2 text-white`}
              icon={[card.icon[0] as IconPrefix, card.icon[1] as IconName]}
            />
            <div>
              <h4 className="mini-text-normal">{card.cardTitle}</h4>
              <h1 className="text-values">{card.cardValue}</h1>
              <h5 className={`text-[12px] ${card.color[1]}`}>
                {card.cardAdditionalInfo}
              </h5>
            </div>
          </li>
        ))}
      </ul>
    </header>
  );
}
