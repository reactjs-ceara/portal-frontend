import { Logo } from "@/components/logo";
import { InstagramIcon } from "@/components/icons/instagram";
import { DiscordIcon } from "@/components/icons/discord";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { TypographySmall } from "@/components/typography";

export function Footer() {
  return (
    <footer className="mt-12 bg-black text-gray-300">
      <div className="space-y-4 px-8 py-12 lg:container lg:mx-auto">
        <div className="flex justify-between">
          <h6 className="flex items-center space-x-1 font-bold">
            <Logo className="h-8 w-8" />
            <span>React Ceará</span>
          </h6>
          <div className="flex space-x-4">
            <InstagramIcon className="flex h-6 w-6" />
            <WhatsAppIcon className="h-6 w-6" />
            <DiscordIcon className="h-6 w-6" />
          </div>
        </div>
        <div className="space-y-8">
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/">Contribua com a comunidade</a>
            </li>
            <li>
              <a href="/">Código fonte no Github</a>
            </li>
          </ul>

          <div>
            <p className="text-center text-sm">© 2023 React Ceará</p>
          </div>
        </div>
      </div>
    </footer>
  );
}