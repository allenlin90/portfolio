import styles from './animated-border.module.css';
import { cn } from '@/lib/utils';

interface AnimatedBorderProps {
  borderColor?: string[];
}

export const AnimatedBorder: React.FC<AnimatedBorderProps> = ({
  borderColor = ['transparent 70%', 'blue'],
}) => {
  return (
    <div
      className={cn(styles.card)}
      style={
        {
          '--border-color': borderColor,
        } as React.CSSProperties
      }
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero optio illum
      hic libero architecto, at modi cum qui necessitatibus iste ad, sit earum,
      aperiam iusto molestiae ab pariatur. Earum, tempora?
    </div>
  );
};

export default AnimatedBorder;
