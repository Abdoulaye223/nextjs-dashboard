import { Inter } from 'next/font/google';
import {Lusitana} from 'next/font/google';
import { preload } from 'react-dom';
 
export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({ weight:"400", preload: false});