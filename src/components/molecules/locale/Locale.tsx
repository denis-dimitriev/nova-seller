import { LocaleButton } from "../../ui/locale-button/LocaleButton"

export const Locale = () => {
  return (
    <div className="flex gap-2 text-[12px]">
      <LocaleButton>RU</LocaleButton>
      <LocaleButton>RO</LocaleButton>
      <LocaleButton>EN</LocaleButton>
    </div>
  );
};
