function ClockTime() {
  let currentTime = new Date();
  return <p className="lead">This is the cuurent time:{currentTime.toLocaleDateString()} and {currentTime.toLocaleTimeString()}</p>;
}

export default ClockTime;
