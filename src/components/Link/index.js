import Link from 'next/link';
import { ButtonStyle } from './styled';
import { ButtonStyleSetting } from './styled';

export function ButtonLink({ href, name }) {
  return (
    <ButtonStyle>
      <Link href={href}>{name}</Link>
    </ButtonStyle>
  );
}

export function ButtonLinkSetting({ href, name }) {
  return (
    <ButtonStyleSetting>
      <Link href={href}>{name}</Link>
    </ButtonStyleSetting>
  );
}
