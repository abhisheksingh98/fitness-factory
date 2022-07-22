import { Button, Title } from '..';
import WhiteTick from '../../assets/whiteTick.png';
import { plansData } from '../../data/plansData';
import styles from './Plans.module.scss';
import { IPlansProps } from './Plans.props';

function Plans(props: IPlansProps) {
  return (
    <div className={styles.plansContainer} id="plans">
      <div className={styles.blurOne} />
      <div className={styles.blurTwo} />
      <Title text={['Ready to start', 'Your journey', 'Now withus']} style={{ gap: '2rem' }} />

      <div className={styles.plans}>
        {plansData.map((plan) => (
          <div className={styles.plan} key={plan.name}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className={styles.features}>
              {plan.features.map((feature) => (
                <div className={styles.feature} key={feature}>
                  <img src={WhiteTick} alt="white tick" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits -&gt;</span>
            </div>
            <Button>Join now</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
