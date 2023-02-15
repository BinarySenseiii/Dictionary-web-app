import { Open_Sans, Poppins, Nunito, Roboto, Montserrat, Ubuntu, Julee } from '@next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });
const nunito = Nunito({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });
const ubuntu = Ubuntu({ weight: ['400', '700', '400'], subsets: ['latin'] });
const poppins = Poppins({ weight: ['600', '400', '700', '900'], subsets: ['latin'] });
const roboto = Roboto({ weight: ['400', '700', '900'], subsets: ['latin'] });
const julee = Julee({ weight: ['400'], subsets: ['latin'] });

export const fonts = {
  openSans: openSans.style.fontFamily,
  nunito: nunito.style.fontFamily,
  montserrat: montserrat.style.fontFamily,
  ubuntu: ubuntu.style.fontFamily,
  poppins: poppins.style.fontFamily,
  roboto: roboto.style.fontFamily,
  julee: julee.style.fontFamily,
};
