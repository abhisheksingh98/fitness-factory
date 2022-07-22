import cn from 'classnames';
import styles from './Button.module.scss';
import { IButtonProps } from './Button.props';

function Button({ children, appearance, className, ...props }: IButtonProps) {
  return (
    <button
      className={cn(styles.btn, className, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
      })}
      {...props}>
      {children}
    </button>
  );
}

export default Button;
