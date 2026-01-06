import styles from "./SectionPlaceholder.module.scss";

export const LeverageLoopsSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Leverage Loops</h1>
        <p className={styles.description}>
          Create and manage leverage loops for your workflow.
        </p>
      </div>
    </div>
  );
};

