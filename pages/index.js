import { Fragment } from "react";
import EventList from "components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-utils";

const HomePage = (props) => {
  const { events } = props;
  return (
    <Fragment>
      <EventList items={events} />
    </Fragment>
  );
};

export default HomePage;

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
  };
}
