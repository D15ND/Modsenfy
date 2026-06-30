import Button from '@/components/ui/Button/Button';
import Input from '@/components/ui/Input/Input';
import styles from './HomePage.module.scss';
import { mockCards, mockCardsRecommended } from './mock_cards';

const HomePage = () => {
  return (
    <div className={styles.content}>
      <Input placeholder="Search artist, title, album" visible={false} />
      <div className={styles.player_box}>
        <div className={styles.sort_box}>
          <p className={styles.sort_title}>Sort by</p>
          <div className={styles.accardion}>
            <p className={styles.accordion_title}>popular</p>
          </div>
        </div>
        <div className={styles.select_player_box}>
          <h3 className={styles.select_player_description}>Select a track to listen to</h3>
          <div className={styles.player} />
        </div>
      </div>
      <div className={styles.results_box}>
        <h3 className={styles.results_title}>Search results</h3>
        <div className={styles.results_container}>
          <div className={styles.results_cards}>
            {mockCards.map((card) => (
              <div className={styles.results_card} key={card.title}>
                <img src={card.img} alt="card" className={styles.card_img} />
                <div className={styles.cards_info}>
                  <h4 className={styles.cards_title}>{card.title}</h4>
                  <p className={styles.cards_author}>{card.author}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.buttons}>
            <Button disabled>Prev</Button>
            <Button disabled={false}>Next</Button>
          </div>
        </div>
      </div>
      <div className={styles.recommended_box}>
        <h3 className={styles.recommended_title}>Recommended</h3>
        <div className={styles.recommended_cards}>
          {mockCardsRecommended.map((card) => (
            <div className={styles.recommended_card} key={card.title}>
              <img src={card.img} alt="card" className={styles.recommended_img} />
              <div className={styles.recommended_card_info}>
                <h4 className={styles.recommended_card_title}>{card.title}</h4>
                <p className={styles.recommended_card_author}>{card.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
