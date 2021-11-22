import React,{Profiler} from 'react';
import ToDos from '../src/components/to-do'

function App() {
  const callbackFunction=(
    id,phase,actualDuration,baseDuration,startTime,commitTime,interaction
)=>{
    console.log("Id is :"+id+"Phase is : "+phase);

    console.log("Actual duration is : "+actualDuration+
                "base duration is : "+baseDuration);
}
  return (
<Profiler id="todo" onRender={callbackFunction}>
  <ToDos />
</Profiler>

   
  );
}

export default App;
