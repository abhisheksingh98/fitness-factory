import cn from 'classnames';
import styles from './Title.module.scss';
import { ITitleProps } from './Title.props';

function Title({ text, className, ...props }: ITitleProps) {
  return (
    <div className={cn(styles.title, cn)} {...props}>
      <span>{text[0]}</span>
      <span>{text[1]}</span>
      <span>{text[2]}</span>
    </div>
  );
}

export default Title;
