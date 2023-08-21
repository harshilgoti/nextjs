import { Fragment } from "react";
import { getAllEvents } from "../../helpers/api-utils";
import EventList from "components/events/event-list";
import EventsSearch from "components/events/events-search";
import { useRouter } from "next/router";

export default function Events(props) {
  const { events } = props;
  const router = useRouter();

  const handleSearch = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <Fragment>
      <EventsSearch onSearch={handleSearch} />
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: { events },
  };
}
