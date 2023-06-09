import Link from 'next/link';
import { ButtonStyle } from './styled';

export default function ButtonLink({ href, name }) {
  return (
    <ButtonStyle>
      <Link href={href}>{name}</Link>
    </ButtonStyle>
  );
}
