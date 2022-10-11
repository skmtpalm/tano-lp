import clsx from "clsx";
import s from "./BannerBtn.module.css"

const BannerBtn = ({ title, text }) => {
  return (
    <a href="https://ws.formzu.net/sfgen/S75904802/" className={clsx(s.wrapper, "mb-4")}>
      <span className={clsx("text-xl sm:text-3xl font-serif mb-2")}>
        {title}
      </span>
      {
        text && <span className={clsx("sm:p-4 font-serif text-sm sm:text-sm")}>{text}</span>
      }
    </a>
  )
}

export default BannerBtn;
