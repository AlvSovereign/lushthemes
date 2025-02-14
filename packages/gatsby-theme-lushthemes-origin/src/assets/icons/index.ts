import Behance from './Behance';
import Dribbble from './Dribbble';
import Facebook from './Facebook';
import Instagram from './Instagram';
import Mail from './Mail';
import Menu from './Menu';
import RightArrow from './RightArrow';

export { Behance, Dribbble, Facebook, Instagram, Mail, Menu, RightArrow };

export interface IconProps {
  height?: number;
  viewBox?: string;
  width?: number;
  [key: string]: any;
}
