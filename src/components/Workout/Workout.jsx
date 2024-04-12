import { useState } from 'react';
import workoutsData from './assets/assets/data/workouts'
import { BtnLeft, BtnRight, GlobalStyle, Row, MainImg, Img } from './Workout.styles';

const Workout = () => {
  const [workouts, setWorkouts] = useState(workoutsData);
  const [currentWorkout, setCurrentWorkout] = useState(0);
  const workout = workouts[currentWorkout];
  const [currentEx, setCurrentEx] = useState(0);
  const nextWorkOut = () => {
    setCurrentWorkout(currentWorkout < workouts.length - 1 ? currentWorkout + 1 : currentWorkout);
  }

  const prevWorkout = () => {
    setCurrentWorkout(currentWorkout > 0 ? currentWorkout - 1 : 0);
  }
  return (
    <div className="WorkoutWrapper">
      <GlobalStyle />
      <h2>
        <BtnLeft onClick={prevWorkout}></BtnLeft>
        {workout.title}
        <BtnRight onClick={nextWorkOut}></BtnRight>
      </h2>
      <Row>
        <MainImg src={workout.exercises[currentEx].img} />
        <Row>
          {
            workout.exercises.map((exercise, i) => <Img active={i === currentEx} src={exercise.img} onClick={() => setCurrentEx(i)} />)
          }
        </Row>
      </Row>
    </div>
  )
};


export default Workout;
