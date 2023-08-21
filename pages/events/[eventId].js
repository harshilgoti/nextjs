import { Fragment } from "react";
// import { useRouter } from "next/router";

import {
  getEventById,
  // getAllEvents,
  getFeaturedEvents,
} from "../../helpers/api-utils";
import EventSummary from "components/event-detail/event-summary";
import EventLogistics from "components/event-detail/event-logistics";
import EventContent from "components/event-detail/event-content";
// import ErrorAlert from "../../ui/error-alert";

function EventDetail(props) {
  const { event } = props;

  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const {
    params: { eventId },
  } = context;

  const event = await getEventById(eventId);

  return {
    props: { event },
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => {
    return {
      params: {
        eventId: event.id,
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export default EventDetail;
