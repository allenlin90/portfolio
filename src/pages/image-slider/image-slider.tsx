import { useTranslation } from 'react-i18next';
import styles from './image-slider.module.css';

const Images = [
  { src: '/images/bulbasaur.jpg', alt: 'bulbasaur' },
  { src: '/images/charmander.jpg', alt: 'charmander' },
  { src: '/images/mew.jpg', alt: 'mew' },
  { src: '/images/pidgey.jpg', alt: 'pidgey' },
  { src: '/images/pikachu.jpg', alt: 'pikachu' },
  { src: '/images/psyduck.jpg', alt: 'psyduck' },
  { src: '/images/snorlax.jpg', alt: 'snorlax' },
  { src: '/images/squirtle.jpg', alt: 'squirtle' },
];

const quantity = { '--quantity': Images.length } as React.CSSProperties;
const position = (position: number) =>
  ({ '--position': position } as React.CSSProperties);

export const ImageSliderPage: React.FC = () => {
  const { t } = useTranslation();
  const title = t('imageSlider.title');

  return (
    <div className={styles.banner}>
      <div className={styles.slider} style={quantity}>
        {Images.map((imgProps, index) => {
          return (
            <div
              key={imgProps.alt + index}
              className={styles.item}
              style={position(index)}
            >
              <img className={styles.img} {...imgProps} />
            </div>
          );
        })}
      </div>
      <div className={styles.content}>
        <h1 data-content={title}>{title}</h1>
        <div className={styles.model} />
      </div>
    </div>
  );
};

ImageSliderPage.displayName = 'ImageSliderPage';

export default ImageSliderPage;
