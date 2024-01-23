const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    color: 'lightBlue',
     whiteSpace: 'preWrap',
  }
}
const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Welcome to my page!<br/>
        To enter, please register!
      </h1>
    </div>
  );
}
export default HomePage;