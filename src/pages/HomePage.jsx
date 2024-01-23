const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
  }
}
const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Task manager welcome page{' '}
      </h1>
    </div>
  );
}
export default HomePage;