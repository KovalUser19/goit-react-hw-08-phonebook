const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background:'linear-gradient(to left, #92dbf8 0%, #cea3fa 50%, #98d7fa 100%)',
    webkitTextFillColor: 'transparent',
    webkitBackgroundClip: 'text'
  },
  title: {
    fontSize: 80,
    textAlign: 'center',
    color: 'lightBlue',
     whiteSpace: 'preWrap',
  }
}
const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Welcome to your page!<br/>
        To enter, please register!
      </h1>
    </div>
  );
}
export default HomePage;