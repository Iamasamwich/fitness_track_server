module.exports = (sessions) => {
  const sessionsWithSpeed = sessions.map(session => {
    const kmph = session.distance / (session.time / 3600);
    const speed = Math.round((kmph + Number.EPSILON) * 100) / 100;
    return {...session, speed}
  });
  return sessionsWithSpeed;
}