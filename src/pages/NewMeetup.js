import { useHistory } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();
  
  const addMeetupHandler = (meetup) => {
    fetch(
      "https://meetup-react-hooks-project-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetup),
        headers: {
          "Contect-Type": "Application/json",
        },
      }
    ).then(() => {
      history.replace('/');
    });
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onNewMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
