import styles from './animated-border.module.css';
import { cn } from '@/lib/utils';

export const AnimatedBorder: React.FC = () => {
  return (
    <div className={cn(styles.card)}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero optio illum
      hic libero architecto, at modi cum qui necessitatibus iste ad, sit earum,
      aperiam iusto molestiae ab pariatur. Earum, tempora?
    </div>
  );
};

export default AnimatedBorder;
