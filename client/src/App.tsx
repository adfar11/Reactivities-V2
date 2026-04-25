import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  useEffect(() => {
    axios
      .get<Activity[]>("https://localhost:5001/api/activities")
      .then((response) => setActivities(response.data));
  }, []);

  return (
    <>
      <h3 className="text-red-600 text-xl font-bold mb-2"> Reactivities</h3>
      {
        <ul className="space-y-2 ml-4 list-none">
          {activities.map((activity) => (
            <li key={activity.id}>{activity.title}</li>
          ))}
        </ul>
      }
    </>
  );
}

export default App;
